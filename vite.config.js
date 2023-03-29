import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003, // puerto que deseas usar
    strictPort: true // usa 'true' si deseas un error de port en conflicto, caso contrario 'false'
  }
})

