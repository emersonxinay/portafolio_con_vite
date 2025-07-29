# 📸 Guía de Manejo de Imágenes - Producción

## 🚨 Problema Solucionado

Las imágenes de artículos no se cargaban en producción porque:

1. **Rutas incorrectas**: Usaban `/src/assets/` que no funciona en producción
2. **No importadas**: Vite requiere importar assets para incluirlos en el build
3. **Referencias hardcodeadas**: Las rutas estaban escritas directamente en el código

## ✅ Solución Implementada

### 1. Sistema de Importación Centralizada

**Archivo**: `src/assets/articles/index.js`

```javascript
// Todas las imágenes se importan correctamente
import iaWeb from './ia_web.png'
import iaWebb from './ia_webb.png'
// ... más imágenes

// Función helper con fallback
export const getArticleImage = (imageName) => {
  const image = articleImages[imageName]
  if (!image) {
    console.warn(`Imagen no encontrada: ${imageName}`)
    return fallbackImage
  }
  return image
}
```

### 2. Uso en Componentes

**Antes** ❌:
```javascript
thumbnail: '/src/assets/articles/ia_webb.png'
```

**Después** ✅:
```javascript
import { getArticleImage } from '../../assets/articles/index.js'

// En el array de artículos
thumbnail: getArticleImage('ia_webb')
```

### 3. Configuración de Vite Optimizada

```javascript
// vite.config.js
build: {
  assetsDir: 'assets',
  rollupOptions: {
    output: {
      assetFileNames: (assetInfo) => {
        if (assetInfo.name && /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(assetInfo.name)) {
          return 'assets/images/[name]-[hash][extname]'
        }
        return 'assets/[name]-[hash][extname]'
      }
    }
  }
}
```

### 4. Componente de Imagen Robusto

**Archivo**: `src/components/ArticleImage.jsx`

- Loading states con skeleton
- Fallback automático si falla la carga
- Animaciones suaves con Framer Motion
- Optimización para performance

## 🛠️ Scripts de Verificación

### Verificar Imágenes
```bash
npm run verify-images
```

### Build con Verificación
```bash
npm run build:verify
```

## 📋 Checklist para Nuevas Imágenes

1. ✅ Colocar imagen en `src/assets/articles/`
2. ✅ Agregar import en `index.js`
3. ✅ Agregar al objeto `articleImages`
4. ✅ Usar `getArticleImage('nombre')` en componentes
5. ✅ Ejecutar `npm run verify-images`

## 🎯 Mejores Prácticas

### Nombres de Archivos
- Usar snake_case: `frontend_moderno.png`
- Descriptivos y únicos
- Extensiones lowercase

### Optimización
- Comprimir imágenes antes de agregar
- Usar WebP cuando sea posible
- Mantener tamaños razonables (< 500KB)

### Fallbacks
- Siempre manejar casos de error
- Proporcionar imagen de placeholder
- Logging para debugging

## 🚀 Funcionamiento en Producción

1. **Build Time**: Vite procesa todas las imágenes importadas
2. **Hash Generation**: Genera hashes únicos para cache busting
3. **Asset Bundling**: Incluye automáticamente en el bundle final
4. **Runtime**: Las imágenes se cargan desde CDN/servidor estático

## 🔧 Debugging

### Si una imagen no carga:

1. Verificar que existe en `src/assets/articles/`
2. Comprobar import en `index.js`
3. Revisar nombre en `getArticleImage('nombre')`
4. Ejecutar `npm run verify-images`
5. Revisar Network tab en DevTools

### Logs útiles:
```javascript
// Se muestra automáticamente si hay error
console.warn(`Imagen de artículo no encontrada: ${imageName}`)
```

## 📊 Beneficios de la Solución

- ✅ **100% Funcional en Producción**
- ✅ **Fallbacks Automáticos**
- ✅ **Performance Optimizada**
- ✅ **Fácil Mantenimiento**
- ✅ **Verificación Automatizada**
- ✅ **Debugging Mejorado**

---

**⚠️ Importante**: Siempre usar `getArticleImage()` para imágenes de artículos. Nunca rutas hardcodeadas.