import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://proyecto-github-yhpr.onrender.com/api/usuarios",
    }
  },
  build: {
    outDir: "dist"
  }
  
});

  
  

