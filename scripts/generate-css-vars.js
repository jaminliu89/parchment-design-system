#!/usr/bin/env node

/**
 * Parchment Design System v3.3
 * Token Runtime & Variable Generator
 */

const fs = require('fs');

const input = process.argv[2] || 'parchment.v3.tokens.json';
const outputCss = process.argv[3] || 'dist/parchment.tokens.css';

function flatten(node, prefix = [], result = {}) {
  if (!node || typeof node !== 'object') return result;

  if ('$value' in node) {
    let val = node.$value;
    result[prefix.join('-')] = val;
    return result;
  }

  for (const [key, value] of Object.entries(node)) {
    if (!key.startsWith('$')) flatten(value, [...prefix, key], result);
  }

  return result;
}

const tokens = JSON.parse(fs.readFileSync(input, 'utf8'));
const rawVars = flatten(tokens);

// Replace token aliases
const resolvedVars = {};
for (const [key, rawVal] of Object.entries(rawVars)) {
  if (typeof rawVal === 'string' && rawVal.startsWith('{') && rawVal.endsWith('}')) {
    const refKey = rawVal.slice(1, -1).replace(/\./g, '-');
    resolvedVars[key] = `var(--p-${refKey})`;
  } else {
    resolvedVars[key] = rawVal;
  }
}

const cssLines = [
  '/* Parchment Design System 3.3 CSS Tokens */',
  ':root {',
  ...Object.entries(resolvedVars).map(([name, value]) => `  --p-${name}: ${value};`),
  '}',
  ''
];

fs.mkdirSync(outputCss.split('/').slice(0, -1).join('/') || '.', { recursive: true });
fs.writeFileSync(outputCss, cssLines.join('\n'));

console.log(`Generated CSS variables: ${Object.keys(resolvedVars).length} variables written to ${outputCss}`);
