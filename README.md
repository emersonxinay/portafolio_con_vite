# Portafolio Personal - Guía de Actualización de Datos

## Descripción General

Este portafolio está construido con React + Vite y utiliza un sistema de datos centralizado para facilitar las actualizaciones. Este documento explica cómo modificar tu información personal, experiencia, proyectos y más.

---

## Tabla de Contenidos

1. [Información Personal](#información-personal)
2. [Experiencia y Roles](#experiencia-y-roles)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Métricas y Estadísticas](#métricas-y-estadísticas)
5. [Traducciones](#traducciones)
6. [Proyectos](#proyectos)
7. [CV Generator](#cv-generator)
8. [Blog y Documentación](#blog-y-documentación)

---

## 1. Información Personal

### Ubicación
**Archivo:** `src/pages/Home/Hero/HeroSimple.jsx`

**Líneas a modificar:**

```javascript
// Nombre (línea ~127)
<motion.span>
  Emerson Espinoza
</motion.span>
```

**Traducciones de disponibilidad:**
- **Archivo:** `public/locales/EN/translation.json` y `public/locales/ES/translation.json`

```json
{
  "heroSimplePage": {
    "availability": "Available for new projects",
    "greeting": "Hi, I'm",
    "nationality": "Peru",
    "residence": "Spain",
    "workType": "Remote Worldwide"
  }
}
```

---

## 2. Experiencia y Roles

### Ubicación
**Archivo:** `src/data/experienceData.js`

### Estructura de datos

```javascript
export const professionalAchievements = [
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Formador Tecnológico',
    subtitle: 'Más de 500 alumnos capacitados en desarrollo web moderno',
    color: 'from-blue-400 to-cyan-500'
  },
  // Agregar más roles aquí
]
```

### Campos explicados

- **icon:** Clase de FontAwesome (consulta https://fontawesome.com/icons)
- **title:** Título del rol (máximo 30 caracteres recomendado)
- **subtitle:** Descripción breve del logro (máximo 80 caracteres recomendado)
- **color:** Gradiente de Tailwind CSS (formato: `from-COLOR to-COLOR`)

### Colores disponibles

```
from-blue-400 to-cyan-500      (Azul a celeste)
from-green-400 to-emerald-500  (Verde)
from-purple-400 to-pink-500    (Morado a rosa)
from-orange-400 to-red-500     (Naranja a rojo)
from-yellow-400 to-yellow-500  (Amarillo)
```

---

## 3. Stack Tecnológico

### Ubicación
**Archivo:** `src/pages/Home/Hero/HeroSimple.jsx`

**Líneas:** 407-512 (sección "Stack Tecnológico")

### Estructura por categorías

#### Frontend (línea ~420)
```javascript
{
  name: 'React',
  color: 'from-cyan-400 to-blue-500',
  icon: 'fab fa-react',
  bg: 'bg-cyan-500/10'
}
```

#### Backend (línea ~455)
```javascript
{
  name: 'Python',
  color: 'from-yellow-500 to-yellow-600',
  icon: 'fab fa-python',
  bg: 'bg-yellow-500/10'
}
```

#### DevOps & Tools (línea ~491)
```javascript
{
  name: 'Docker',
  color: 'from-blue-500 to-blue-600',
  icon: 'fab fa-docker',
  bg: 'bg-blue-500/10'
}
```

### Campos explicados

- **name:** Nombre de la tecnología
- **color:** Gradiente para el icono y texto
- **icon:** Icono de FontAwesome (fab = brands, fas = solid)
- **bg:** Color de fondo con opacidad

### Cómo agregar una nueva tecnología

1. Identifica la categoría (Frontend/Backend/DevOps)
2. Copia un objeto existente
3. Modifica los campos
4. Agrega al array correspondiente

Ejemplo:

```javascript
// En la sección Frontend
{
  name: 'Vue.js',
  color: 'from-green-400 to-green-600',
  icon: 'fab fa-vuejs',
  bg: 'bg-green-500/10'
}
```

---

## 4. Métricas y Estadísticas

### Ubicación
**Archivo:** `src/pages/Home/Hero/HeroSimple.jsx`

**Líneas:** 295-337

### Estructura

```javascript
{
  number: "6+",
  label: t('heroSimplePage.stats.yearsLabel'),
  color: "from-blue-400 to-cyan-500",
  icon: "fas fa-calendar-alt"
}
```

### Campos explicados

- **number:** Valor de la métrica (puede ser número, símbolo o texto corto)
- **label:** Clave de traducción o texto directo
- **color:** Gradiente para icono y número
- **icon:** Icono de FontAwesome

### Traducciones de métricas

**Archivos:** `public/locales/EN/translation.json` y `public/locales/ES/translation.json`

```json
{
  "heroSimplePage": {
    "stats": {
      "yearsLabel": "Years of experience",
      "projectsLabel": "Growing projects",
      "studentsLabel": "Students trained"
    }
  }
}
```

### Cómo modificar métricas

1. Cambia el valor de `number`
2. Actualiza las traducciones en EN y ES
3. Cambia el icono si es necesario

---

## 5. Traducciones

### Estructura de archivos

```
public/
└── locales/
    ├── EN/
    │   └── translation.json
    └── ES/
        └── translation.json
```

### Secciones principales

#### Navegación
```json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "projects": "Projects",
    "blog": "Blog",
    "docs": "Docs",
    "tools": "Tools",
    "contact": "Contact",
    "cv": "CV Generator"
  }
}
```

#### Hero/Inicio
```json
{
  "heroSimplePage": {
    "greeting": "Hi, I'm",
    "title": "Full Stack Developer",
    "description": "specialized in creating...",
    "experienceLabel": "My experience as:"
  }
}
```

### Cómo agregar nuevos textos

1. Abre ambos archivos de traducción (EN y ES)
2. Agrega la clave en la sección correspondiente
3. Usa en el componente con `t('clave.subclave')`

Ejemplo:

```json
// EN/translation.json
{
  "contact": {
    "newField": "New text in English"
  }
}

// ES/translation.json
{
  "contact": {
    "newField": "Nuevo texto en español"
  }
}
```

```javascript
// En el componente
const { t } = useTranslation();
<p>{t('contact.newField')}</p>
```

---

## 6. Proyectos

### Ubicación
**Archivo:** `src/data/projectsData.js` (si existe) o directamente en el componente

### Estructura típica

```javascript
export const projects = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    description: "Descripción breve del proyecto",
    image: "/path/to/image.jpg",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/usuario/repo",
    demo: "https://demo-url.com",
    category: "web"
  }
]
```

### Campos explicados

- **id:** Identificador único
- **title:** Nombre del proyecto
- **description:** Descripción corta (máximo 150 caracteres)
- **image:** Ruta a la imagen (guardar en `public/images/projects/`)
- **technologies:** Array de tecnologías usadas
- **github:** URL del repositorio (opcional)
- **demo:** URL del demo en vivo (opcional)
- **category:** Categoría para filtrar (web, mobile, backend, etc.)

---

## 7. CV Generator

### Ubicación de plantillas
**Archivos:**
- `src/pages/CVGenerator/templates/Corporate.jsx`
- `src/pages/CVGenerator/templates/Harvard.jsx`
- `src/pages/CVGenerator/templates/Minimal.jsx`

### Modificar información precargada

**Archivo:** `src/pages/CVGenerator/CVGenerator.jsx`

```javascript
const [cvData, setCvData] = useState({
  personalInfo: {
    fullName: 'Tu Nombre',
    email: 'tu@email.com',
    phone: '+XX XXX XXX XXX',
    location: 'Tu Ciudad, País',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    github: 'https://github.com/tu-usuario'
  },
  // ... más campos
})
```

### Cómo agregar un nuevo campo

1. Agrega el campo en el estado `cvData`
2. Crea un `InputField` en `CVForm.jsx`
3. Agrega el campo en las plantillas de CV
4. Actualiza la función de generación de PDF

---

## 8. Blog y Documentación

### Blog
**Ubicación:** `src/pages/blog/Blog.jsx`

### Estructura de artículos

```javascript
const articles = [
  {
    id: 1,
    title: "Título del artículo",
    excerpt: "Breve descripción...",
    category: "Frontend",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/images/blog/article-1.jpg"
  }
]
```

### Documentación
**Ubicación:** `src/pages/docs/`

Archivos:
- `Docs.jsx` - Componente principal
- `FrontDocs.jsx` - Documentación frontend
- `BackDocs.jsx` - Documentación backend

---

## Comandos Útiles

### Desarrollo
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
```

### Testing local
```bash
npm run dev          # El sitio estará en http://localhost:3003
```

---

## Estructura de Archivos Clave

```
src/
├── data/
│   ├── experienceData.js      # Roles y experiencia
│   ├── techStackData.js       # Stack tecnológico (si existe)
│   └── projectsData.js        # Proyectos (si existe)
├── pages/
│   ├── Home/
│   │   └── Hero/
│   │       └── HeroSimple.jsx # Hero principal con métricas
│   ├── CVGenerator/           # Generador de CV
│   ├── blog/                  # Blog
│   └── docs/                  # Documentación
└── constants/
    └── designSystem.js        # Estilos y constantes

public/
└── locales/
    ├── EN/translation.json    # Traducciones inglés
    └── ES/translation.json    # Traducciones español
```

---

## Mejores Prácticas

### 1. Antes de modificar
- Haz backup de los archivos que vas a modificar
- Prueba en local antes de desplegar
- Mantén consistencia en nombres y formatos

### 2. Imágenes
- Guarda en `public/images/`
- Usa formatos optimizados (WebP, PNG comprimido)
- Nombres descriptivos sin espacios (usa guiones)

### 3. Traducciones
- Siempre actualiza EN y ES simultáneamente
- Usa claves descriptivas
- Mantén textos concisos

### 4. Colores
- Mantén la paleta existente para consistencia
- Usa los gradientes definidos en Tailwind
- Verifica contraste para accesibilidad

### 5. Iconos
- Usa FontAwesome (ya incluido en el proyecto)
- Prefiere iconos solid (fas) para UI
- Usa brands (fab) para logos de tecnologías

---

## Troubleshooting

### Las traducciones no se actualizan
1. Verifica que la clave existe en ambos archivos (EN y ES)
2. Limpia la caché del navegador
3. Reinicia el servidor de desarrollo

### Los iconos no aparecen
1. Verifica que FontAwesome está importado en `index.html`
2. Usa el prefijo correcto (fas, fab, far)
3. Consulta la documentación de FontAwesome

### Los cambios no se reflejan
1. Guarda todos los archivos
2. Reinicia el servidor de desarrollo
3. Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

---

## Soporte y Recursos

### Documentación de tecnologías usadas
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- FontAwesome: https://fontawesome.com/icons
- Framer Motion: https://www.framer.com/motion

### Herramientas útiles
- Generador de gradientes: https://uigradients.com
- Paleta de colores: https://tailwindcss.com/docs/customizing-colors
- Iconos: https://fontawesome.com/search

---

## Tecnologías

- **Frontend:** React 18, Vite, Tailwind CSS
- **Animaciones:** Framer Motion
- **i18n:** react-i18next
- **Routing:** React Router v6
- **SEO:** React Helmet Async
- **Iconos:** Font Awesome
- **Backend Ready:** Flask / Rails / .NET + PostgreSQL

---

## Changelog

### Version 1.0.0 (2024)
- Sistema de roles rotativos implementado
- Generador de CV con 3 plantillas
- Sistema de traducciones EN/ES
- Sección de métricas
- Stack tecnológico por categorías
- Blog y documentación técnica
- Mobile-first responsive design

---

## Licencia

MIT License - Emerson Espinoza 2024

---

Hecho con dedicación por Emerson Espinoza

Website: emersonespinoza.com
Email: emerson@emersonespinoza.com
