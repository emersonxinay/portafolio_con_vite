# 🌐 Solución de Traducción i18n

## ✅ Sistema de Traducción Funcionando

El sistema de traducción está correctamente configurado. Si experimentas problemas, aquí está la guía completa:

## 📁 Estructura Actual

```
public/
└── locales/
    ├── ES/
    │   └── translation.json
    └── EN/
        └── translation.json

src/
├── config/
│   └── i18next-config.js  ← Configuración i18n
└── main.jsx               ← Importa configuración
```

## 🔧 Configuración Actual

**Archivo:** `src/config/i18next-config.js`

```javascript
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ES',
    supportedLngs: ['ES', 'EN'],
    debug: false,
    interpolation: {
      escapeValue: false
    },
    load: 'languageOnly',
    backend: {
      loadPath: (lngs, namespaces) => {
        let lng = lngs[0].toLowerCase();
        if (lng.startsWith('es')) {
          lng = 'ES';
        } else if (lng.startsWith('en')) {
          lng = 'EN';
        } else {
          lng = 'ES';
        }

        const ns = namespaces[0];
        return `/locales/${lng}/${ns}.json`;
      }
    }
  })
```

## ✅ La configuración está correcta

El sistema:
- ✅ Detecta automáticamente el idioma del navegador
- ✅ Mapea variantes (es-419, es-MX → ES)
- ✅ Fallback a español si no encuentra el idioma
- ✅ Carga archivos desde `/public/locales/`

## 🎯 Uso Correcto en Componentes

### Ejemplo 1: Texto Simple
```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <h1>{t('hero.title')}</h1>
  );
};
```

### Ejemplo 2: Arrays/Objetos
```jsx
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  // Obtener array de servicios
  const services = t('services.items', { returnObjects: true });

  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### Ejemplo 3: Cambiar Idioma
```jsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('ES')}>
        Español
      </button>
      <button onClick={() => i18n.changeLanguage('EN')}>
        English
      </button>
    </div>
  );
};
```

### Ejemplo 4: Detectar Idioma Actual
```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      Idioma actual: {i18n.language}
    </div>
  );
};
```

## 🔍 Verificar que Funciona

### 1. Abrir consola del navegador
```javascript
// Verificar idioma actual
console.log(i18n.language);

// Cambiar idioma manualmente
i18n.changeLanguage('EN');

// Ver traducción
console.log(i18n.t('hero.title'));
```

### 2. Ver en DevTools
- **Network tab:** Buscar `translation.json`
- Deberías ver requests a `/locales/ES/translation.json`
- Si ves 404, el archivo no está en la carpeta correcta

### 3. Activar Debug
```javascript
// En i18next-config.js
.init({
  // ...
  debug: true,  // Cambiar a true
  // ...
})
```

Esto mostrará logs detallados en consola.

## 🐛 Problemas Comunes y Soluciones

### Problema 1: "Key not found"
**Síntoma:** No se muestra el texto traducido

**Solución:**
```jsx
// ❌ Incorrecto
t('hero.title')  // Si la key no existe exactamente

// ✅ Correcto - verificar que la key exista
t('hero.title')  // En translation.json: { "hero": { "title": "..." } }
```

### Problema 2: Arrays no se muestran
**Síntoma:** `services.map is not a function`

**Solución:**
```jsx
// ✅ SIEMPRE usar returnObjects para arrays/objetos
const services = t('services.items', { returnObjects: true });

// Verificar que es array
if (Array.isArray(services)) {
  services.map(...)
}
```

### Problema 3: 404 en translation.json
**Síntoma:** No se cargan las traducciones

**Solución:**
1. Verificar que archivos estén en `public/locales/ES/` y `public/locales/EN/`
2. Los nombres deben ser **exactamente** `translation.json` (minúsculas)
3. Reiniciar servidor de desarrollo: `npm run dev`

### Problema 4: Idioma no cambia
**Síntoma:** `changeLanguage` no funciona

**Solución:**
```jsx
// Verificar que el idioma esté en supportedLngs
i18n.changeLanguage('ES');  // ✅ Funciona
i18n.changeLanguage('FR');  // ❌ No funciona (no está en supportedLngs)
```

## 📝 Estructura del JSON de Traducción

```json
{
  "hero": {
    "title": "Texto simple",
    "subtitle": "Más texto"
  },
  "services": {
    "title": "Servicios",
    "items": [
      {
        "title": "Servicio 1",
        "description": "Descripción 1"
      },
      {
        "title": "Servicio 2",
        "description": "Descripción 2"
      }
    ]
  },
  "footer": {
    "copyright": "© 2024 Emerson Espinoza"
  }
}
```

## 🌍 Agregar Nuevo Idioma

### 1. Crear archivo de traducción
```
public/
└── locales/
    ├── ES/
    ├── EN/
    └── PT/              ← Nuevo idioma
        └── translation.json
```

### 2. Agregar a configuración
```javascript
// src/config/i18next-config.js
.init({
  fallbackLng: 'ES',
  supportedLngs: ['ES', 'EN', 'PT'],  // ← Agregar PT
  // ...
})
```

### 3. Actualizar loadPath
```javascript
backend: {
  loadPath: (lngs, namespaces) => {
    let lng = lngs[0].toLowerCase();
    if (lng.startsWith('es')) {
      lng = 'ES';
    } else if (lng.startsWith('en')) {
      lng = 'EN';
    } else if (lng.startsWith('pt')) {  // ← Agregar
      lng = 'PT';
    } else {
      lng = 'ES';
    }
    // ...
  }
}
```

## ✅ Test de Funcionalidad

Ejecuta este código en la consola del navegador:

```javascript
// 1. Verificar que i18n está disponible
console.log('i18n loaded:', typeof window.i18next !== 'undefined');

// 2. Ver idioma actual
console.log('Current language:', i18n.language);

// 3. Ver todas las keys cargadas
console.log('Loaded keys:', Object.keys(i18n.store.data.ES.translation));

// 4. Probar traducción
console.log('Translation test:', i18n.t('hero.title'));

// 5. Cambiar idioma y ver resultado
i18n.changeLanguage('EN');
console.log('After change:', i18n.t('hero.title'));
```

Si todos los pasos funcionan, tu traducción está correctamente configurada. ✅

## 🚀 Mejores Prácticas

### 1. Organizar por Secciones
```json
{
  "hero": { ... },
  "about": { ... },
  "services": { ... },
  "projects": { ... },
  "footer": { ... }
}
```

### 2. Usar Interpolación
```json
{
  "welcome": "Hola {{name}}, bienvenido"
}
```

```jsx
t('welcome', { name: 'Emerson' })
// → "Hola Emerson, bienvenido"
```

### 3. Pluralización
```json
{
  "items": "{{count}} proyecto",
  "items_plural": "{{count}} proyectos"
}
```

```jsx
t('items', { count: 1 })  // → "1 proyecto"
t('items', { count: 5 })  // → "5 proyectos"
```

---

**¡Tu sistema de traducción está funcionando correctamente!** 🎉

Si tienes problemas, revisa la consola del navegador con `debug: true` activado.
