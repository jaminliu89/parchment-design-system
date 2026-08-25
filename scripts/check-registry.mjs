import fs from "node:fs";
import path from "node:path";

const registryPath = path.resolve("registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const errors = [];

if (registry.$schema !== "https://ui.shadcn.com/schema/registry.json") {
  errors.push("registry.json must use the current shadcn registry schema URL");
}

if (!registry.name || !registry.homepage || !Array.isArray(registry.items)) {
  errors.push("registry.json requires name, homepage and items");
}

const names = new Set();
for (const item of registry.items ?? []) {
  if (!item.name || !item.type) errors.push("every registry item requires name and type");
  if (names.has(item.name)) errors.push(`duplicate registry item: ${item.name}`);
  names.add(item.name);

  if (!Array.isArray(item.files) || item.files.length === 0) {
    errors.push(`${item.name}: files must be a non-empty array`);
    continue;
  }

  for (const file of item.files) {
    if (!file || typeof file.path !== "string" || typeof file.type !== "string") {
      errors.push(`${item.name}: each file requires path and type`);
      continue;
    }
    if (!fs.existsSync(path.resolve(file.path))) errors.push(`${item.name}: missing source file ${file.path}`);
  }

  for (const dependency of item.registryDependencies ?? []) {
    if (typeof dependency !== "string") errors.push(`${item.name}: registryDependencies entries must be strings`);
  }
  for (const dependency of item.dependencies ?? []) {
    if (typeof dependency !== "string") errors.push(`${item.name}: dependencies entries must be strings`);
  }
}

if (errors.length) {
  console.error("Parchment registry audit failed:\n" + errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Parchment registry audit passed (${names.size} registry items checked).`);
