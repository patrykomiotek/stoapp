import { sentryVitePlugin } from '@sentry/vite-plugin';
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    sentryVitePlugin({
      org: 'web-amigos',
      project: 'stoapp',
    }),
  ],

  server: {
    allowedHosts: ['37xcsh-5173.csb.app'],
  },

  test: {
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
  },

  build: {
    sourcemap: true,
  },
});
