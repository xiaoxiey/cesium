import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), cesium({ cesiumBaseUrl: '/' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})