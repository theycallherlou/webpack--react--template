import globals from 'globals';
import js from '@eslint/js';
import babel from '@babel/eslint-parser';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    settings: {
      react: {
        version: 'detect',
        pragma: 'React'
      }
    }
  },
  {
    ignores: ['node_modules', 'dist', '*.config.*']
  }
];
