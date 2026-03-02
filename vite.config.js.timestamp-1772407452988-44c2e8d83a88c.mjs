// vite.config.js
import { defineConfig } from "file:///Users/emersonespinoza/Documents/proyectos/portafolioemerson/portafolio_con_vite/node_modules/vite/dist/node/index.js";
import react from "file:///Users/emersonespinoza/Documents/proyectos/portafolioemerson/portafolio_con_vite/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { VitePWA } from "file:///Users/emersonespinoza/Documents/proyectos/portafolioemerson/portafolio_con_vite/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/Users/emersonespinoza/Documents/proyectos/portafolioemerson/portafolio_con_vite";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Emerson Espinoza - Senior Software Engineer",
        short_name: "Emerson Dev",
        description: "Senior Software Engineer especializado en IA/ML, Python, React. CTO & Founder.",
        theme_color: "#0EA5E9",
        background_color: "#090e19",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/src/assets/emerson_espinoza.jpeg",
            sizes: "192x192",
            type: "image/jpeg",
            purpose: "any maskable"
          },
          {
            src: "/src/assets/emerson_espinoza.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
                // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "cdn-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
                // 30 días
              }
            }
          }
        ]
      }
    })
  ],
  server: {
    port: 3003,
    // puerto que deseas usar
    strictPort: true
    // usa 'true' si deseas un error de port en conflicto, caso contrario 'false'
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  build: {
    sourcemap: false,
    // Desactivar en producción para mejor rendimiento
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        // Eliminar console.logs en producción
        drop_debugger: true
      }
    },
    commonjsOptions: {
      include: [/node_modules/]
    },
    assetsDir: "assets",
    chunkSizeWarningLimit: 1e3,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendors grandes para mejor caching
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "framer-vendor": ["framer-motion"],
          "icons-vendor": ["react-icons"],
          "utils-vendor": ["react-hot-toast", "react-i18next", "i18next"]
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(assetInfo.name)) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZW1lcnNvbmVzcGlub3phL0RvY3VtZW50cy9wcm95ZWN0b3MvcG9ydGFmb2xpb2VtZXJzb24vcG9ydGFmb2xpb19jb25fdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2VtZXJzb25lc3Bpbm96YS9Eb2N1bWVudHMvcHJveWVjdG9zL3BvcnRhZm9saW9lbWVyc29uL3BvcnRhZm9saW9fY29uX3ZpdGUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2VtZXJzb25lc3Bpbm96YS9Eb2N1bWVudHMvcHJveWVjdG9zL3BvcnRhZm9saW9lbWVyc29uL3BvcnRhZm9saW9fY29uX3ZpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLmljbycsICdyb2JvdHMudHh0JywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnRW1lcnNvbiBFc3Bpbm96YSAtIFNlbmlvciBTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgIHNob3J0X25hbWU6ICdFbWVyc29uIERldicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIGVzcGVjaWFsaXphZG8gZW4gSUEvTUwsIFB5dGhvbiwgUmVhY3QuIENUTyAmIEZvdW5kZXIuJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMEVBNUU5JyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyMwOTBlMTknLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxuICAgICAgICBzY29wZTogJy8nLFxuICAgICAgICBzdGFydF91cmw6ICcvJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvc3JjL2Fzc2V0cy9lbWVyc29uX2VzcGlub3phLmpwZWcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvc3JjL2Fzc2V0cy9lbWVyc29uX2VzcGlub3phLmpwZWcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgd29ya2JveDoge1xuICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxqcGcsanBlZyxzdmcsd2VicH0nXSxcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ29vZ2xlYXBpc1xcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dvb2dsZS1mb250cy1jYWNoZScsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUgLy8gMSBhXHUwMEYxb1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2NkbmpzXFwuY2xvdWRmbGFyZVxcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2Nkbi1jYWNoZScsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcbiAgICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogL1xcLig/OnBuZ3xqcGd8anBlZ3xzdmd8Z2lmfHdlYnApJC8sXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2ltYWdlcy1jYWNoZScsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiA1MCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMCAvLyAzMCBkXHUwMEVEYXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDMsIC8vIHB1ZXJ0byBxdWUgZGVzZWFzIHVzYXJcbiAgICBzdHJpY3RQb3J0OiB0cnVlIC8vIHVzYSAndHJ1ZScgc2kgZGVzZWFzIHVuIGVycm9yIGRlIHBvcnQgZW4gY29uZmxpY3RvLCBjYXNvIGNvbnRyYXJpbyAnZmFsc2UnXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgIH1cbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nXVxuICB9LFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogZmFsc2UsIC8vIERlc2FjdGl2YXIgZW4gcHJvZHVjY2lcdTAwRjNuIHBhcmEgbWVqb3IgcmVuZGltaWVudG9cbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy8gRWxpbWluYXIgY29uc29sZS5sb2dzIGVuIHByb2R1Y2NpXHUwMEYzblxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIGluY2x1ZGU6IFsvbm9kZV9tb2R1bGVzL11cbiAgICB9LFxuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyBTZXBhcmFyIHZlbmRvcnMgZ3JhbmRlcyBwYXJhIG1lam9yIGNhY2hpbmdcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgICdmcmFtZXItdmVuZG9yJzogWydmcmFtZXItbW90aW9uJ10sXG4gICAgICAgICAgJ2ljb25zLXZlbmRvcic6IFsncmVhY3QtaWNvbnMnXSxcbiAgICAgICAgICAndXRpbHMtdmVuZG9yJzogWydyZWFjdC1ob3QtdG9hc3QnLCAncmVhY3QtaTE4bmV4dCcsICdpMThuZXh0J11cbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICAvLyBNYW50ZW5lciBub21icmVzIGRlIGFyY2hpdm9zIGRlIGltYWdlbiBwYXJhIG1lam9yIGNhY2hlXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIC9cXC4ocG5nfGpwZ3xqcGVnfHN2Z3xnaWZ8d2VicCkkL2kudGVzdChhc3NldEluZm8ubmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJ1xuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcydcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2EsU0FBUyxvQkFBb0I7QUFDL2IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGVBQWU7QUFIeEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsY0FBYyxzQkFBc0I7QUFBQSxNQUNuRSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsOENBQThDO0FBQUEsUUFDN0QsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQSxjQUNoQztBQUFBLGNBQ0EsbUJBQW1CO0FBQUEsZ0JBQ2pCLFVBQVUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxjQUNuQjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUEsY0FDaEM7QUFBQSxjQUNBLG1CQUFtQjtBQUFBLGdCQUNqQixVQUFVLENBQUMsR0FBRyxHQUFHO0FBQUEsY0FDbkI7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUE7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxXQUFXO0FBQUEsRUFDaEM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQTtBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsSUFDQSxpQkFBaUI7QUFBQSxNQUNmLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDMUI7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosZ0JBQWdCLENBQUMsU0FBUyxhQUFhLGtCQUFrQjtBQUFBLFVBQ3pELGlCQUFpQixDQUFDLGVBQWU7QUFBQSxVQUNqQyxnQkFBZ0IsQ0FBQyxhQUFhO0FBQUEsVUFDOUIsZ0JBQWdCLENBQUMsbUJBQW1CLGlCQUFpQixTQUFTO0FBQUEsUUFDaEU7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGNBQWM7QUFFN0IsY0FBSSxVQUFVLFFBQVEsa0NBQWtDLEtBQUssVUFBVSxJQUFJLEdBQUc7QUFDNUUsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
