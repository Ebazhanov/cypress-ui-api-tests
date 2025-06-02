import globals from "globals";
import pluginJs from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress/flat'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    pluginCypress.configs.recommended,
    eslintConfigPrettier,
];