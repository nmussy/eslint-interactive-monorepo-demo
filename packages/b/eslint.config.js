import { defineConfig, globalIgnores } from "eslint/config";
import baseConfig from "../../eslint.base.config.js";	

export default defineConfig([
	baseConfig,
	globalIgnores(["src/ignore/**/*"]),
	{
		rules: {
			"no-console": "error",
		},
	},
]);
