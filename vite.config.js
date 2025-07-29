import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003, // puerto que deseas usar
    strictPort: true // usa 'true' si deseas un error de port en conflicto, caso contrario 'false'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/]
    },
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Mantener nombres de archivos de imagen para mejor cache
          if (assetInfo.name && /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})

