import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base_Url = 'http://localhost:8000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy setup
      '/api': {
        target: base_Url,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
