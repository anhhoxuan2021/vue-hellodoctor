import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import inject from '@rollup/plugin-inject'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    inject({
      //Remember to add `"jquery": "^3.6.1"` in `dependencies` for `package.json`
      jQuery: "jquery",
      "window.jQuery": "jquery",
      $: "jquery"
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
