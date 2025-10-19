import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for the Docker Container port mapping to work
    port: 80, // We map this port in docker-compose
    proxy: {
      '/api': {
        target: 'http://api:4000', // Forward requests to our api service
        changeOrigin: true,
      }
    }
  }
})