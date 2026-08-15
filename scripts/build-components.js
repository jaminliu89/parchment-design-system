#!/usr/bin/env node

const fs = require("fs");
const sourcePath = "parchment.css";
const outputPath = "dist/parchment.css";
const checkOnly = process.argv.includes("--check");
const source = fs.readFileSync(sourcePath, "utf8");

if (checkOnly) {
  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, "utf8") !== source) {
    console.error(`${outputPath} is stale. Run npm run components:build.`);
    process.exit(1);
  }
  console.log("Verified component CSS artifact.");
} else {
  fs.mkdirSync("dist", { recursive: true });
  fs.writeFileSync(outputPath, source);
  console.log(`Generated ${outputPath}.`);
}
