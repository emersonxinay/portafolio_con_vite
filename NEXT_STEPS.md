# 📋 Próximos Pasos - Guía de Implementación

## 🎯 Tareas Pendientes

### 1. Refactorizar Componentes Restantes con Emojis

#### Archivos a actualizar:
```
src/pages/Home/Hero/HeroFAANG.jsx
src/pages/Home/Hero/Languages.jsx
src/pages/Home/Experience/Experience.jsx
src/pages/Home/TechnicalExcellence/TechnicalExcellence.jsx
src/pages/Home/ProfessionalImpact/ProfessionalImpact.jsx
```

#### Patrón a seguir:

**Antes:**
```jsx
import { motion } from 'framer-motion';

const Component = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <h2>Mi Título con 🚀</h2>
      {/* contenido */}
    </section>
  );
};
```

**Después:**
```jsx
import { motion } from 'framer-motion';
import { useAnimationVariants } from '../../../hooks/useAnimationVariants';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import SectionHeader from '../../../components/SectionHeader';

const Component = () => {
  const { containerVariants, itemVariants } = useAnimationVariants();
  const { scrollToContact } = useScrollToSection();

  return (
    <section>
      <SectionHeader
        title="Mi Título"
        icon="fas fa-rocket"
        gradient="from-blue-400 to-purple-500"
      />
      {/* contenido */}
    </section>
  );
};
```

---

### 2. Unificar Componentes Duplicados

#### A. Unificar Services
**Archivos:**
- `src/pages/Home/Services/Services.jsx`
- `src/pages/Home/ServicesSimple/ServicesSimple.jsx`

**Estrategia:**
```jsx
// src/pages/Home/Services/Services.jsx
const Services = ({ variant = 'detailed' }) => {
  // Lógica compartida
  const services = ...;

  return variant === 'detailed' ? (
    // Versión detallada con features
  ) : (
    // Versión simple con benefits
  );
};
```

**Uso:**
```jsx
// En Home.jsx
import Services from './Services/Services';

<Services variant="detailed" />
// o
<Services variant="simple" />
```

---

#### B. Unificar Projects
**Archivos:**
- `src/pages/Home/Projects/Projects.jsx`
- `src/pages/Home/Projects/ProjectsSimple.jsx`

**Estrategia similar a Services**

---

#### C. Decidir Hero Component
**Archivos:**
- `src/pages/Home/Hero/Hero.jsx`
- `src/pages/Home/Hero/HeroSimple.jsx`
- `src/pages/Home/Hero/HeroFAANG.jsx`

**Recomendación:**
- Mantener HeroSimple (actualmente en uso)
- Eliminar Hero.jsx y HeroFAANG.jsx o convertirlos en variantes
- Opcionalmente crear Hero con prop `variant`:

```jsx
<Hero variant="simple" />
<Hero variant="faang" />
```

---

### 3. Aplicar Componentes Reutilizables

#### Card Component
**Usar en:**
- Projects
- Testimonials
- Blog posts
- Experience items

**Ejemplo:**
```jsx
import Card from '../../../components/Card';

<Card
  padding="lg"
  interactive
  gradient="from-blue-400 to-purple-500"
  bgGradient="from-blue-900/20 to-purple-900/20"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
>
  <h3>Contenido de la tarjeta</h3>
  <p>Descripción...</p>
</Card>
```

---

#### SectionHeader Component
**Usar en todas las secciones:**
```jsx
import SectionHeader from '../../../components/SectionHeader';

// Ejemplo 1: Con icono y highlight
<SectionHeader
  icon="fas fa-project-diagram"
  title="Mis"
  highlightText="Proyectos"
  subtitle="Proyectos en producción con usuarios reales"
  gradient="from-green-400 to-emerald-500"
/>

// Ejemplo 2: Sin icono
<SectionHeader
  title="Testimonios"
  subtitle="Lo que dicen mis clientes"
  gradient="from-purple-400 to-pink-500"
  centered
/>
```

---

#### AnimatedSection Component
**Usar para secciones con animación:**
```jsx
import AnimatedSection, { AnimatedGrid, AnimatedItem } from '../../../components/AnimatedSection';

// Sección completa
<AnimatedSection id="projects" variant="fadeIn" className="py-16">
  {/* contenido */}
</AnimatedSection>

// Grid con items
<AnimatedGrid columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item, idx) => (
    <AnimatedItem key={idx}>
      <Card>{item.content}</Card>
    </AnimatedItem>
  ))}
</AnimatedGrid>
```

---

### 4. Optimización de Imágenes

#### Instalar sharp para optimización:
```bash
npm install -D vite-plugin-image-optimizer
```

#### Configurar en `vite.config.js`:
```js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      jpg: { quality: 80 },
      png: { quality: 80 },
    })
  ]
};
```

#### Considerar WebP:
```jsx
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

---

### 5. Code Splitting

#### Implementar lazy loading:
```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('./pages/Blog/Blog'));
const CV = lazy(() => import('./pages/CV/CVHarvard'));
const Tools = lazy(() => import('./pages/Tools/Tools'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Suspense>
  );
}
```

---

### 6. Limpiar Código

#### A. Eliminar imports no usados
```bash
# Instalar herramienta
npm install -D eslint-plugin-unused-imports

# Configurar en .eslintrc
{
  "plugins": ["unused-imports"],
  "rules": {
    "unused-imports/no-unused-imports": "error"
  }
}
```

#### B. Archivos a revisar:
- HeroSimple.jsx (mainTechnologies, buttonStyles no usados)
- ServicesSimple.jsx (SectionHeader importado pero no usado)

---

### 7. Actualizar Traducciones

#### Verificar archivos:
```
/public/locales/ES/translation.json
/public/locales/EN/translation.json
```

#### Si hay referencias a emojis, reemplazar con:
```json
{
  "hero": {
    "badge": {
      "icon": "fas fa-check-circle",
      "text": "Disponible para proyectos"
    }
  }
}
```

---

### 8. Testing

#### Checklist de pruebas:

**Funcionalidad:**
- [ ] Navegación smooth scroll funciona
- [ ] Animaciones se reproducen correctamente
- [ ] Todos los iconos Font Awesome se muestran
- [ ] Gradientes se aplican correctamente
- [ ] Hover effects funcionan
- [ ] Responsive en mobile/tablet/desktop

**Performance:**
- [ ] Build time < 60s
- [ ] Bundle size razonable
- [ ] Lighthouse score > 90

**Visual:**
- [ ] No hay emojis visibles (excepto donde se desee mantener)
- [ ] Consistencia de colores
- [ ] Consistencia tipográfica
- [ ] Espaciado uniforme

---

## 📝 Plantillas de Código

### Template: Nuevo Componente con Mejores Prácticas
```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAnimationVariants } from '../../../hooks/useAnimationVariants';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import SectionHeader from '../../../components/SectionHeader';
import Card from '../../../components/Card';
import { gradients, typography } from '../../../constants/designSystem';

const MyComponent = () => {
  const { t } = useTranslation();
  const { containerVariants, itemVariants } = useAnimationVariants();
  const { scrollToContact } = useScrollToSection();

  const data = [
    // Tus datos aquí
  ];

  return (
    <section id="my-section" className="py-16 md:py-24">
      <SectionHeader
        icon="fas fa-star"
        title={t('mySection.title')}
        highlightText={t('mySection.highlight')}
        subtitle={t('mySection.subtitle')}
        gradient={gradients.bluePurple}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              interactive
              padding="lg"
              gradient={gradients.purplePink}
            >
              <h3 className={typography.heading.h4}>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyComponent;
```

---

## 🔄 Workflow Recomendado

1. **Por cada componente:**
   - [ ] Hacer backup del archivo original
   - [ ] Identificar código duplicado
   - [ ] Reemplazar con hooks/componentes reutilizables
   - [ ] Reemplazar emojis con Font Awesome
   - [ ] Probar en navegador
   - [ ] Commit cambios

2. **Commits sugeridos:**
   ```bash
   git commit -m "refactor: unify Services components with shared variant prop"
   git commit -m "refactor(HeroFAANG): replace emojis with Font Awesome icons"
   git commit -m "perf: implement code splitting for Blog and Tools pages"
   ```

---

## 🎨 Guía de Iconos Font Awesome

### Mapeo Emoji → Font Awesome

| Emoji | Contexto | Icon Font Awesome | Clase |
|-------|----------|-------------------|-------|
| 💻 | Desarrollo | Laptop Code | `fas fa-laptop-code` |
| 🛒 | E-commerce | Shopping Cart | `fas fa-shopping-cart` |
| 🤖 | IA/Auto | Robot | `fas fa-robot` |
| ⚙️ | Config/API | Cogs | `fas fa-cogs` |
| ☁️ | Cloud | Cloud | `fas fa-cloud` |
| 🎓 | Educación | Graduation Cap | `fas fa-graduation-cap` |
| 📱 | WhatsApp | WhatsApp | `fab fa-whatsapp` |
| 📧 | Email | Envelope | `fas fa-envelope` |
| 💼 | LinkedIn | LinkedIn | `fab fa-linkedin` |
| 🐱 | GitHub | GitHub | `fab fa-github` |
| ❤️ | Like/Love | Heart | `fas fa-heart` |
| ☕ | Coffee | Coffee | `fas fa-coffee` |
| 🚀 | Launch | Rocket | `fas fa-rocket` |
| ✨ | Sparkle | Star | `fas fa-star` |
| 📊 | Analytics | Chart Bar | `fas fa-chart-bar` |
| 🔒 | Security | Lock | `fas fa-lock` |
| 🌐 | Web/Global | Globe | `fas fa-globe` |
| 📍 | Location | Map Marker | `fas fa-map-marker-alt` |

---

## ✅ Definition of Done

Un componente está refactorizado cuando:
- [ ] No tiene código duplicado
- [ ] Usa hooks centralizados
- [ ] Usa componentes reutilizables
- [ ] No tiene emojis (usa Font Awesome)
- [ ] Usa datos centralizados
- [ ] Sigue el designSystem
- [ ] Build sin errores
- [ ] Funciona correctamente en navegador

---

**¡Mucho éxito con la refactorización!** 🚀
