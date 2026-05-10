// @ts-check
import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
	output: "static",
	redirects: {
		"/": "/home",
	},
	server: {
		port: 3000,
		host: true,
	},
	vite: {
		resolve: {
			alias: {
				"@src": path.resolve("./src"),
				"@config": path.resolve("./src/config"),
				"@pages": path.resolve("./src/pages"),
				"@components": path.resolve("./src/components"),
				"@styles": path.resolve("./src/styles"),
				"@scripts": path.resolve("./src/scripts"),
			},
		},
	},
});
