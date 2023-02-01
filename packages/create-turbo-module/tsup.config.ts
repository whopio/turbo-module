import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["esm"],
  outExtension: () => ({ js: ".mjs" }),
  clean: true,
  ...options,
}));
