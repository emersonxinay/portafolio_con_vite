# 🚀 Portfolio Profesional - Emerson Espinoza

Portafolio moderno y profesional construido con React + Vite, preparado para conectarse a backend Flask, C# .NET, o Ruby on Rails con PostgreSQL.

## ✨ Características

- ⚡ **React 18 + Vite** - Build ultrarrápido
- 🎨 **Tailwind CSS** - Diseño profesional y responsive
- 🌐 **i18n** - Soporte multiidioma (ES/EN)
- 📦 **Componentes Reutilizables** - Arquitectura modular
- 🎭 **Framer Motion** - Animaciones fluidas
- 🔗 **API Ready** - Listo para backend
- 🎯 **SEO Optimizado** - Meta tags y structured data
- 📱 **Mobile First** - Optimizado para todos los dispositivos

## 🎯 Estado Actual

| Aspecto | Estado |
|---------|--------|
| Refactorización | ✅ Completa |
| Traducción i18n | ✅ Funcionando |
| Arquitectura API | ✅ Lista |
| Mock Data | ✅ Activo |
| Documentación | ✅ Completa |
| Build Production | ✅ Sin errores |

## 🚀 Inicio Rápido

### 1. Instalación
```bash
git clone https://github.com/emersonespinoza/portfolio.git
cd portafolio_con_vite
npm install
```

### 2. Modo Desarrollo (con Mock Data)
```bash
npm run dev
```
Abre http://localhost:3003

### 3. Build Producción
```bash
npm run build
npm run preview
```

## 🔧 Configuración

### Variables de Entorno

```env
# .env.development
VITE_API_BASE_URL=http://localhost:5000/api
VITE_USE_MOCK_DATA=true           # true = datos locales
VITE_ENABLE_ANALYTICS=false

# .env.production
VITE_API_BASE_URL=https://api.tu-dominio.com/api
VITE_USE_MOCK_DATA=false          # false = API real
VITE_ENABLE_ANALYTICS=true
```

## 🗄️ Backend Setup

### Este proyecto está preparado para 3 opciones:

#### Opción 1: Flask + PostgreSQL
```bash
pip install -r backend/requirements.txt
flask run --port=5000
```

#### Opción 2: Ruby on Rails + PostgreSQL
```bash
rails server -p 5000
```

#### Opción 3: C# .NET + PostgreSQL
```bash
dotnet run
```

📖 **Guía completa:** Ver `BACKEND_SETUP.md`

## 📚 Documentación Completa

| Archivo | Descripción | Tamaño |
|---------|-------------|---------|
| `API_INTEGRATION_SUMMARY.md` | Resumen integración API | 11K |
| `BACKEND_SETUP.md` | Guía completa backend (3 frameworks) | 18K |
| `TRANSLATION_FIX.md` | Guía sistema traducción | 7K |
| `REFACTORING_SUMMARY.md` | Resumen refactorización | 7K |
| `NEXT_STEPS.md` | Próximos pasos | 10K |

## 🛠️ Tecnologías

- **Frontend:** React 18, Vite, Tailwind CSS
- **Animaciones:** Framer Motion
- **i18n:** react-i18next
- **Routing:** React Router v6
- **SEO:** React Helmet Async
- **Iconos:** Font Awesome
- **Backend Ready:** Flask / Rails / .NET + PostgreSQL

## 📊 Mejoras Implementadas

### Refactorización (Fase 1)
- ✅ ~500 líneas de código duplicado eliminadas
- ✅ 70% de emojis reemplazados con Font Awesome
- ✅ Sistema de diseño profesional
- ✅ Componentes reutilizables
- ✅ Hooks personalizados

### API Integration (Fase 2)
- ✅ Arquitectura API completa (+516 líneas)
- ✅ Servicios y hooks listos
- ✅ Variables de entorno configuradas
- ✅ Mock data mientras no hay backend
- ✅ Documentación completa (63K total)

## 🌐 Demo

[Portfolio Website](https://portafolio-con-vite.vercel.app/)

## 📄 Licencia

MIT License - Emerson Espinoza © 2024

---

**Hecho con** ❤️ **y** ☕ **por Emerson Espinoza**

🌐 [emersonespinoza.com](https://emersonespinoza.com)
📧 emerson@emersonespinoza.com
