import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
/// ---
/// https://github.com/rollup/plugins/tree/master/packages/image
/// ---
import image from '@rollup/plugin-image' /// npm install @rollup/plugin-image --save-dev


/// ---
// https://vitejs.dev/config/
/// ---
export default defineConfig({
  plugins: [svelte(), image()],
  build: {
    rollupOptions: {
      output: {
        dir: 'dist'/*,
        preserveModules: true,
        preserveModulesRoot: 'src'
        preserveEntrySignatures: true, // i have any issue with this one...
        entryFileNames: `assets/[name].*`,
        chunkFileNames: `assets/[name].[ext]`,
        assetFileNames: `assets/[name].[ext]`
        */
      }
    }
  }
})
