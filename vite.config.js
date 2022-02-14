import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 目录别名
    alias: {
      '@': path.resolve(__dirname, '/packages'),
    },
  },
  plugins: [vue(),vueJsx()],

})
