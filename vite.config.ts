import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'react-icons': ['react-icons/fa'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-icons/fa'],
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
