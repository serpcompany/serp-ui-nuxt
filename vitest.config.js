import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./tests/setup.js'], // tells vitest to run this file before running any assertions/tests in any *.tests.js files.
  },
});
