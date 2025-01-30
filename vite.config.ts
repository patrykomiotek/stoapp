/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    allowedHosts: ['37xcsh-5173.csb.app'],
  },
  test: {
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
  },
});
