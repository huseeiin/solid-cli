import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/bin.ts"],
	target: "esnext",
	format: "esm",
	splitting: true,
	bundle: true,
	sourcemap: false,
	clean: true,
	treeshake: true,
	minify: true,
	banner: {
		js: `import { createRequire } from "module";
		const require = createRequire(import.meta.url);`,
	},
});
