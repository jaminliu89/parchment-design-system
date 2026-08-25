import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
fs.mkdirSync(dist, { recursive: true });
for (const file of ["runtime.css", "workspace.css", "ai.css", "patterns.css"]) {
  fs.copyFileSync(path.resolve("src", file), path.join(dist, file));
}
console.log("Copied Parchment runtime style layers to dist/.");
