import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["globally-ignored-dir/**/*"]),
	{
		rules: {
			"prefer-const": "error",
		},
	},
]);
