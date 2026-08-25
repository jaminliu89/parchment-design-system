import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    components: "src/components/index.ts",
    patterns: "src/patterns/index.ts"
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: false,
  sourcemap: true,
  splitting: false,
  external: ["react", "react-dom"]
});
