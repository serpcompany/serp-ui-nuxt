import withNuxt from './.nuxt/eslint.config.mjs';
import vitest from '@vitest/eslint-plugin';

export default withNuxt([
  {
    files: ['tests/**'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/max-nested-describe': ['error', { max: 3 }],
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
  {
    rules: {
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/no-setup-props-reactivity-loss': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'prefer-const': 'warn',
    },
  },
]);
