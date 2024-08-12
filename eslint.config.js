import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    name: 'configuration',
    files: ['**/*.js'],
    languageOptions: {
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
