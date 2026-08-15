#!/usr/bin/env node

const fs = require("fs");

const source = fs.readFileSync("parchment.css", "utf8");
const requiredSelectors = [
  ".p-btn-primary",
  ".p-input",
  ".p-switch",
  ".p-card",
  ".p-badge",
  ".p-tab",
  ".p-table",
  ".p-dialog",
  ".p-toast",
  ".p-icon",
];
const forbiddenPatterns = [
  ["gradient", /(?:linear|radial)-gradient\s*\(/i],
  ["glass blur", /backdrop-filter\s*:/i],
  ["warm canvas", /#(?:f4f1ea|f6f7f9|f8f9fa)\b/i],
  ["undersized control", /(?:height|min-height)\s*:\s*(?:3[0-9]|4[0-3])px\b/i],
];

const missing = requiredSelectors.filter((selector) => !source.includes(selector));
const forbidden = forbiddenPatterns.filter(([, pattern]) => pattern.test(source)).map(([name]) => name);

if (missing.length || forbidden.length) {
  if (missing.length) console.error(`Missing component selectors: ${missing.join(", ")}`);
  if (forbidden.length) console.error(`Forbidden Parchment patterns: ${forbidden.join(", ")}`);
  process.exit(1);
}

console.log(`Component CSS OK: ${requiredSelectors.length} primitive families verified.`);
