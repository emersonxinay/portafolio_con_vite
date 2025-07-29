import React from 'react'
import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaAngular } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiVite } from 'react-icons/si'
import { motion } from 'framer-motion'

const FrontDocs = () => {
  const front = [
    {
      name: 'HTML5',
      icon: <FaHtml5 className='text-6xl text-orange-500' />,
      description: 'Semántica moderna, accesibilidad web, y estructura de documentos para aplicaciones escalables. Incluye Web APIs, localStorage, Canvas, y más.',
      tag: 'Disponible',
      tagColor: 'from-green-500 to-emerald-500',
      link: '/docs/html',
      level: 'Fundamental',
      complexity: 1,
      topics: ['Semántica', 'Accesibilidad', 'Web APIs', 'Forms']
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className='text-6xl text-blue-500' />,
      description: 'CSS moderno con Grid, Flexbox, Custom Properties, animaciones avanzadas, y metodologías BEM/SMACSS para proyectos enterprise.',
      tag: 'Próximamente',
      tagColor: 'from-blue-500 to-cyan-500',
      link: '/docs',
      level: 'Fundamental',
      complexity: 2,
      topics: ['Grid/Flexbox', 'Animaciones', 'Responsive', 'Architecture']
    },
    {
      name: 'JavaScript ES2024',
      icon: <IoLogoJavascript className='text-6xl text-yellow-500' />,
      description: 'JavaScript moderno con async/await, modules, destructuring, optional chaining, y patrones avanzados usados en FAANG.',
      tag: 'Próximamente',
      tagColor: 'from-yellow-500 to-orange-500',
      link: '/docs',
      level: 'Fundamental',
      complexity: 3,
      topics: ['ES2024', 'Async/Await', 'Modules', 'Patterns']
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className='text-6xl text-blue-600' />,
      description: 'Type safety, interfaces, generics, y arquitecturas enterprise con TypeScript. Configuración avanzada para proyectos escalables.',
      tag: 'Próximamente',
      tagColor: 'from-blue-600 to-purple-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 4,
      topics: ['Types', 'Interfaces', 'Generics', 'Config']
    },
    {
      name: 'React 18',
      icon: <FaReact className='text-6xl text-cyan-500' />,
      description: 'React moderno con Hooks, Context, Suspense, Concurrent Features, y patrones de arquitectura para aplicaciones enterprise.',
      tag: 'Próximamente',
      tagColor: 'from-cyan-500 to-blue-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 4,
      topics: ['Hooks', 'Context', 'Suspense', 'Patterns']
    },
    {
      name: 'Next.js 14',
      icon: <SiNextdotjs className='text-6xl text-black dark:text-white' />,
      description: 'Framework full-stack con App Router, Server Components, SSR/SSG, y optimizaciones automáticas para performance enterprise.',
      tag: 'Próximamente',
      tagColor: 'from-gray-700 to-black',
      link: '/docs',
      level: 'Avanzado',
      complexity: 5,
      topics: ['App Router', 'SSR/SSG', 'Server Components', 'Performance']
    },
    {
      name: 'Vue.js 3',
      icon: <FaVuejs className='text-6xl text-green-500' />,
      description: 'Composition API, Pinia para state management, y ecosystem completo para aplicaciones reactivas modernas.',
      tag: 'Próximamente',
      tagColor: 'from-green-500 to-emerald-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 4,
      topics: ['Composition API', 'Pinia', 'Vuex', 'Nuxt.js']
    },
    {
      name: 'Angular',
      icon: <FaAngular className='text-6xl text-red-600' />,
      description: 'Framework enterprise con dependency injection, RxJS, Angular CLI, y arquitecturas modulares para aplicaciones complejas.',
      tag: 'Próximamente',
      tagColor: 'from-red-600 to-pink-500',
      link: '/docs',
      level: 'Avanzado',
      complexity: 5,
      topics: ['DI', 'RxJS', 'Modules', 'CLI']
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className='text-6xl text-teal-500' />,
      description: 'Utility-first CSS framework, configuración avanzada, componentes reutilizables, y design systems para equipos.',
      tag: 'Próximamente',
      tagColor: 'from-teal-500 to-cyan-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 3,
      topics: ['Utilities', 'Components', 'Config', 'Design System']
    },
    {
      name: 'Vite',
      icon: <SiVite className='text-6xl text-purple-500' />,
      description: 'Build tool ultrarrápido con HMR, plugins, optimizaciones automáticas, y configuración para proyectos modernos.',
      tag: 'Próximamente',
      tagColor: 'from-purple-500 to-pink-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 3,
      topics: ['HMR', 'Plugins', 'Build', 'Optimization']
    }
  ]

  const getComplexityColor = (complexity) => {
    if (complexity <= 2) return 'from-green-400 to-emerald-500'
    if (complexity <= 4) return 'from-yellow-400 to-orange-500'
    return 'from-red-400 to-pink-500'
  }

  const getComplexityText = (complexity) => {
    if (complexity <= 2) return 'Básico'
    if (complexity <= 4) return 'Intermedio'
    return 'Avanzado'
  }

  return (
    <div className='space-y-8'>
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-4'>
          Frontend Technologies
        </h3>
        <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
          Tecnologías del lado del cliente para crear interfaces modernas, escalables y performantes
        </p>
      </motion.div>

      <div className='grid gap-6 lg:grid-cols-2'>
        {front.map((tech, i) => (
          <motion.div 
            key={tech.name} 
            className='w-full h-full'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link 
              to={tech.link} 
              className='group relative w-full h-full p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col gap-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden'
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Header */}
              <div className='flex items-start justify-between relative z-10'>
                <div className='flex items-center gap-4'>
                  <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className='text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300'>
                      {tech.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-zinc-400 font-medium">{tech.level}</span>
                      <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                      <span className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${getComplexityColor(tech.complexity)}`}>
                        {getComplexityText(tech.complexity)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <motion.div 
                  className={`px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r ${tech.tagColor} text-white shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.tag}
                </motion.div>
              </div>

              {/* Description */}
              <p className='text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300 relative z-10'>
                {tech.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {tech.topics.map((topic, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 backdrop-blur-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-zinc-400">Complejidad</span>
                  <span className="text-xs text-zinc-400">{tech.complexity}/5</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${getComplexityColor(tech.complexity)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(tech.complexity / 5) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 relative z-10">
                <div className="text-sm text-zinc-400">
                  {tech.tag === 'Disponible' ? '📚 Leer documentación' : '⏳ Próximamente'}
                </div>
                <motion.div 
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FrontDocs