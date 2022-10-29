/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['tailwindcss'],
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  overrides: [
    {
      files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-undef': 'warn',
    'require-await': 'warn',
    'no-return-await': 'error',
    'no-duplicate-imports': 'error',
    eqeqeq: 'warn',
    yoda: 'warn',
    'no-var': 'warn',
    'no-lonely-if': 'warn',
    'object-shorthand': ['warn', 'properties'],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': ['warn'],
    semi: 'off',
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': 'error',
  },
}
