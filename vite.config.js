import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  envDir: '../../',
  root: `./src/iframe/app`,
  plugins: [react(), tsconfigPaths(), viteSingleFile({ useRecommendedBuildConfig: true })],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    outDir: `../../../dist`,
  },
});
