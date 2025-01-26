import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      external: []
    }
  },
  server: {
    port: 5178,
    proxy: {
      '/api': {
        target: 'https://tnp-nitkkr.vercel.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})