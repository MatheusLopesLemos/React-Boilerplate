import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier'; // Plugin do Prettier

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier, // Adicionando o plugin Prettier
    },
    rules: {
      // Regras gerais
      'no-console': 'warn',
      'no-debugger': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'array-callback-return': 'error',
      'consistent-return': 'error',
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-new-func': 'error',
      'no-unused-expressions': 'error',
      'no-use-before-define': 'error',

      // Regras do React
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off', // Exemplo de regra do Airbnb desabilitada
      'react/jsx-no-target-blank': 'off',

      // Regras do React Hooks
      ...reactHooks.configs.recommended.rules,

      // Regras do Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          arrowParens: 'always',
          printWidth: 80,
        },
      ],

      // Outras regras recomendadas (Airbnb, React, etc.)
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // Regras de componentização e exportação com react-refresh
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];
