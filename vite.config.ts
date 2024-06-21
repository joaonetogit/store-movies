/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('src/__tests__')) return 'tests';
          if (id.includes('src/api')) return 'api';
          if (id.includes('src/components')) return 'components';
          if (id.includes('src/constants')) return 'constants';
          if (id.includes('src/context')) return 'context';
          if (id.includes('src/functions')) return 'functions';
          if (id.includes('src/hooks')) return 'hooks';
          if (id.includes('src/layouts')) return 'layouts';
          if (id.includes('src/pages')) return 'pages';
          if (id.includes('src/types')) return 'types';
          if (id.includes('src/utils')) return 'utils';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
  },
});
