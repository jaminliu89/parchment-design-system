import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/components");
const files = fs.readdirSync(root).filter((name) => /\.(ts|tsx)$/.test(name));
const errors = [];

for (const file of files) {
  const full = path.join(root, file);
  const source = fs.readFileSync(full, "utf8");

  const rawHex = source.match(/#[0-9a-fA-F]{3,8}\b/g);
  if (rawHex) errors.push(`${file}: raw hex values are forbidden (${rawHex.join(", ")})`);

  if (file.endsWith(".tsx") && !/className=|Primitive\./.test(source)) {
    errors.push(`${file}: component has no Parchment class or headless primitive binding`);
  }

  if (/onClick=/.test(source) && !/(button|Primitive\.|aria-|role=)/.test(source)) {
    errors.push(`${file}: interactive handler requires semantic behavior evidence`);
  }
}

if (errors.length) {
  console.error("Parchment runtime audit failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}

console.log(`Parchment runtime audit passed (${files.length} source files checked).`);
