import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
        globals: globals.browser, // Or other environments like node
    },
    },
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended, // Integrates Prettier
    // Add other configurations as needed
];