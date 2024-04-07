import dts from 'vite-plugin-dts';
import fs from 'fs';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

const resolvePath = (pathName: string) => path.resolve(__dirname, pathName);

export default defineConfig({
  resolve: {
    alias: {
      'vue-confirmation-modal': path.resolve(__dirname, './src/index.ts')
    }
  },
  build: {
    minify: true,
    lib: {
      fileName: type => {
        if (type === 'es') return 'esm/index.js';
        if (type === 'cjs') return 'index.js';
        return 'index.js';
      },
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs']
    },
    // sourcemap: true,
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [
    Vue(),
    vueJsx(),
    // https://www.npmjs.com/package/vite-plugin-dts
    dts({
      include: 'src',
      rollupTypes: true,
      outDir: 'dist',
      afterBuild() {
        try {
          const filePath = resolvePath('dist/index.d.ts');
          const buffer = fs.readFileSync(filePath);
          const content = String(buffer);
          fs.writeFileSync(filePath, content);
        } catch (error) {
          //
        }
      }
    })
  ]
});
