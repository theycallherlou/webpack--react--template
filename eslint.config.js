import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    name: 'configuration',
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      }
    }
  }
];
