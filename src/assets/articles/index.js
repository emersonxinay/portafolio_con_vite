// Importación de todas las imágenes de artículos
import iaWeb from './ia_web.png'
import iaWebb from './ia_webb.png'
import backendImg from './backend.png'
import cienciaDatos from './ciencia_datos_web.png'
import frontendModerno from './frontend_moderno.png'
import fullstackImg from './fullstack.png'
import practicaProgramming from './practica_programing.png'
import rutaFullstack from './ruta_fullstack.png'

// Mapeo de imágenes para fácil acceso
export const articleImages = {
  'ia_web': iaWeb,
  'ia_webb': iaWebb,
  'backend': backendImg,
  'ciencia_datos': cienciaDatos,
  'frontend_moderno': frontendModerno,
  'fullstack': fullstackImg,
  'practica_programming': practicaProgramming,
  'ruta_fullstack': rutaFullstack
}

// Imagen de fallback para cuando no se encuentra una imagen
const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K'

// Función helper para obtener imagen por nombre con fallback
export const getArticleImage = (imageName) => {
  const image = articleImages[imageName]
  if (!image) {
    console.warn(`Imagen de artículo no encontrada: ${imageName}. Usando imagen de fallback.`)
    return fallbackImage
  }
  return image
}

// Export individual para compatibilidad
export {
  iaWeb,
  iaWebb,
  backendImg,
  cienciaDatos,
  frontendModerno,
  fullstackImg,
  practicaProgramming,
  rutaFullstack
}