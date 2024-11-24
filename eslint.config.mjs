import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'], 
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: '@typescript-eslint/parser', 
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
    ignores: ['node_modules', 'dist'],
  },
  pluginJs.configs.recommended,
  tsEslint.configs.recommended, 
  eslintConfigPrettier,
];
