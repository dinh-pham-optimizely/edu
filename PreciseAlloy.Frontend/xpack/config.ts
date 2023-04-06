import { defineConfig } from 'vite';
import alias from './alias';
import react from '@vitejs/plugin-react';
import { getAssetFileName, getChunkFileName, getEntryFileName } from './filename';
import { getManualChunk } from './manual-chunk';
import { outDir, srcRoot } from './paths';
import buildStart from './hooks/build-start';
import writeBundle from './hooks/write-bundle';
import closeBundle from './hooks/close-bundle';
import resolveDynamicImport from './hooks/resolve-dynamic-import';
import handleHotUpdate from './hooks/handle-hot-update';

// console.log('config');

const additionalScssData = `
@import "${srcRoot}/assets/styles/additional-data";
`

const config = defineConfig({
  plugins: [
    react(),
    // options(),
    buildStart(),
    // transfrom(),
    resolveDynamicImport(),
    handleHotUpdate(),
    writeBundle(),
    closeBundle()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: getEntryFileName,
        chunkFileNames: getChunkFileName,
        assetFileNames: getAssetFileName,
        manualChunks: getManualChunk,
      },
    },
    minify: true,
    sourcemap: true,
    outDir,
    emptyOutDir: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: additionalScssData
      }
    }
  },

  resolve: {
    alias: alias,
  },
});

export default config;
