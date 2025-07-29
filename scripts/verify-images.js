#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Función para verificar imágenes después del build
function verifyImages() {
  console.log('🔍 Verificando imágenes de artículos...\n')
  
  // Verificar que existan las imágenes en src/assets/articles
  const articlesPath = path.join(__dirname, '../src/assets/articles')
  const requiredImages = [
    'ia_web.png',
    'ia_webb.png', 
    'backend.png',
    'ciencia_datos_web.png',
    'frontend_moderno.png',
    'fullstack.png',
    'practica_programing.png',
    'ruta_fullstack.png'
  ]
  
  let allImagesFound = true
  
  requiredImages.forEach(imageName => {
    const imagePath = path.join(articlesPath, imageName)
    if (fs.existsSync(imagePath)) {
      console.log(`✅ ${imageName} - Encontrada`)
    } else {
      console.log(`❌ ${imageName} - NO ENCONTRADA`)
      allImagesFound = false
    }
  })
  
  // Verificar el archivo de índice
  const indexPath = path.join(articlesPath, 'index.js')
  if (fs.existsSync(indexPath)) {
    console.log(`✅ index.js - Encontrado`)
  } else {
    console.log(`❌ index.js - NO ENCONTRADO`)
    allImagesFound = false
  }
  
  console.log('\n' + '='.repeat(50))
  
  if (allImagesFound) {
    console.log('🎉 Todas las imágenes están configuradas correctamente!')
    console.log('📦 El build debería incluir todas las imágenes.')
  } else {
    console.log('⚠️  Faltan algunas imágenes. Revisa los archivos faltantes.')
    process.exit(1)
  }
}

// Función adicional para verificar el directorio de build (opcional)
function verifyBuildAssets() {
  const distPath = path.join(__dirname, '../dist')
  
  if (!fs.existsSync(distPath)) {
    console.log('ℹ️  Directorio dist/ no encontrado. Ejecuta "npm run build" primero.')
    return
  }
  
  console.log('\n🔍 Verificando assets en build...')
  
  const assetsPath = path.join(distPath, 'assets')
  if (fs.existsSync(assetsPath)) {
    const assetFiles = fs.readdirSync(assetsPath)
    const imageFiles = assetFiles.filter(file => 
      /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(file)
    )
    
    console.log(`📁 Encontrados ${imageFiles.length} archivos de imagen en build:`)
    imageFiles.forEach(file => {
      console.log(`   - ${file}`)
    })
  }
}

// Ejecutar verificaciones
verifyImages()
verifyBuildAssets()