import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./tests/setup.js'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: [
        'src/**/*.{js,ts,vue}',
        'components/**/*.{js,ts,vue}',
        'pages/**/*.{js,ts,vue}',
      ], // Add directories and file types to include in coverage
      exclude: ['node_modules', 'tests'], // Exclude directories from coverage
    },
  },
});
