#!/usr/bin/env node

/**
 * Parchment 4.0
 * Canonical token runtime
 *
 * Converts design token JSON values into CSS variables.
 */

const fs = require('fs');

const positionalArgs = process.argv.slice(2).filter((argument) => !argument.startsWith('--'));
const input = positionalArgs[0] || 'parchment.v3.tokens.json';
const output = positionalArgs[1] || 'dist/parchment.tokens.css';
const checkOnly = process.argv.includes('--check');

function getToken(root, path) {
  return path.split('.').reduce((node, key) => node && node[key], root);
}

function resolveValue(value, root, stack = []) {
  if (typeof value !== 'string') return value;

  const match = value.match(/^\{(.+)\}$/);
  if (!match) return value;

  const path = match[1];
  if (stack.includes(path)) {
    throw new Error(`Circular token reference: ${[...stack, path].join(' -> ')}`);
  }

  const token = getToken(root, path);
  if (!token || !('$value' in token)) {
    throw new Error(`Unknown token reference: ${path}`);
  }

  return resolveValue(token.$value, root, [...stack, path]);
}

function flatten(node, root, prefix = [], result = {}) {
  if (!node || typeof node !== 'object') return result;

  if ('$value' in node) {
    result[prefix.join('-')] = resolveValue(node.$value, root);
    return result;
  }

  for (const [key, value] of Object.entries(node)) {
    if (!key.startsWith('$')) flatten(value, root, [...prefix, key], result);
  }

  return result;
}

const tokens = JSON.parse(fs.readFileSync(input, 'utf8'));
const variables = flatten(tokens, tokens);

const css = [
  ':root {',
  ...Object.entries(variables).map(([name, value]) => `  --p-${name}: ${value};`),
  '}',
  ''
].join('\n');

if (checkOnly) {
  if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== css) {
    console.error(`${output} is stale. Run npm run tokens:build.`);
    process.exit(1);
  }
} else {
  fs.mkdirSync(output.split('/').slice(0, -1).join('/') || '.', { recursive: true });
  fs.writeFileSync(output, css);
}

console.log(`${checkOnly ? 'Verified' : 'Generated'} ${Object.keys(variables).length} variables.`);
