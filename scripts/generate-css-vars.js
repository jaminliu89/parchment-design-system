#!/usr/bin/env node

/**
 * Parchment 4.0
 * Canonical token runtime
 *
 * Usage:
 *   node scripts/generate-css-vars.js                              -> dist/parchment.tokens.css
 *   node scripts/generate-css-vars.js <input.json> <output.css>    -> custom
 *   node scripts/generate-css-vars.js --check                       -> verify freshness
 *   node scripts/generate-css-vars.js --theme novelagent           -> dist/theme-novelagent.css
 */

const fs = require('fs');
const path = require('path');

const DEFAULT_INPUT = 'parchment.v3.tokens.json';
const DEFAULT_OUTPUT = 'dist/parchment.tokens.css';

const THEME_MAP = {
  novelagent: {
    input: 'parchment.theme-novelagent.tokens.json',
    output: 'dist/theme-novelagent.css',
    class: '.theme-novelagent'
  }
};

let input = DEFAULT_INPUT;
let output = DEFAULT_OUTPUT;
let rootSelector = ':root';
const checkOnly = process.argv.includes('--check');

// Parse args
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--check') continue;
  if (args[i] === '--theme' && args[i+1]) {
    const t = args[i+1];
    if (!THEME_MAP[t]) {
      console.error('Unknown theme "' + t + '". Available: ' + Object.keys(THEME_MAP).join(', '));
      process.exit(1);
    }
    input = THEME_MAP[t].input;
    output = THEME_MAP[t].output;
    rootSelector = THEME_MAP[t].class;
    i++;
  } else if (!args[i].startsWith('--') && !args[i+1]?.startsWith('--')) {
    input = args[i];
    output = args[i+1] || output;
  }
}

function getToken(root, tokenPath) {
  return tokenPath.split('.').reduce((node, key) => node && node[key], root);
}

function resolveValue(value, root, stack = []) {
  if (typeof value !== 'string') return value;
  const match = value.match(/^\{(.+)\}$/);
  if (!match) return value;
  const tokenPath = match[1];
  if (stack.includes(tokenPath)) {
    throw new Error('Circular token reference: ' + [...stack, tokenPath].join(' -> '));
  }
  const token = getToken(root, tokenPath);
  if (!token || !('$value' in token)) {
    throw new Error('Unknown token reference: ' + tokenPath);
  }
  return resolveValue(token.$value, root, [...stack, tokenPath]);
}

function flatten(node, rootRef, prefix = [], result = {}) {
  if (!node || typeof node !== 'object') return result;
  if ('$value' in node) {
    result[prefix.join('-')] = resolveValue(node.$value, rootRef);
    return result;
  }
  for (const [key, value] of Object.entries(node)) {
    if (!key.startsWith('$')) flatten(value, rootRef, [...prefix, key], result);
  }
  return result;
}

const tokens = JSON.parse(fs.readFileSync(path.resolve(input), 'utf8'));
const variables = flatten(tokens, tokens);

const css = [
  rootSelector + ' {',
  ...Object.entries(variables).map(([name, value]) => '  --p-' + name + ': ' + value + ';'),
  '}',
  ''
].join('\n');

if (checkOnly) {
  if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== css) {
    console.error(output + ' is stale. Run npm run tokens:build.');
    process.exit(1);
  }
  console.log('Verified ' + Object.keys(variables).length + ' variables.');
} else {
  fs.mkdirSync(path.dirname(output) || '.', { recursive: true });
  fs.writeFileSync(output, css);
  console.log('Generated ' + Object.keys(variables).length + ' variables → ' + output + ' [' + rootSelector + ']');
}