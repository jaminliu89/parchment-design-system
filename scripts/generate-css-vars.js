#!/usr/bin/env node

/**
 * Parchment UI OS v2
 * Token Runtime Foundation
 *
 * Converts design token JSON values into CSS variables.
 */

const fs = require('fs');

const input = process.argv[2] || 'parchment.v3.tokens.json';
const output = process.argv[3] || 'dist/parchment.tokens.css';

function flatten(node, prefix = [], result = {}) {
  if (!node || typeof node !== 'object') return result;

  if ('$value' in node) {
    result[prefix.join('-')] = node.$value;
    return result;
  }

  for (const [key, value] of Object.entries(node)) {
    if (!key.startsWith('$')) flatten(value, [...prefix, key], result);
  }

  return result;
}

const tokens = JSON.parse(fs.readFileSync(input, 'utf8'));
const variables = flatten(tokens);

const css = [
  ':root {',
  ...Object.entries(variables).map(([name, value]) => `  --p-${name}: ${value};`),
  '}',
  ''
].join('\n');

fs.mkdirSync(output.split('/').slice(0, -1).join('/') || '.', { recursive: true });
fs.writeFileSync(output, css);

console.log(`Generated ${Object.keys(variables).length} variables.`);
