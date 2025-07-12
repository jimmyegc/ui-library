import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.css',
      name: 'ui-library',
      formats: ['es'],
      fileName: () => 'styles.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'styles.css',
      },
    },
  },
});