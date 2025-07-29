import React from 'react'
import { Link } from 'react-router-dom'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { SiDjango, SiExpress, SiFastapi, SiNestjs, SiSpring, SiLaravel, SiPostgresql, SiMongodb, SiRedis, SiDocker } from 'react-icons/si'
import { motion } from 'framer-motion'

const BackDocs = () => {
  const backend = [
    {
      name: 'Node.js',
      icon: <FaNodeJs className='text-6xl text-green-500' />,
      description: 'Runtime de JavaScript del lado del servidor con event loop no bloqueante. Perfecto para APIs escalables y aplicaciones en tiempo real.',
      tag: 'Próximamente',
      tagColor: 'from-green-500 to-emerald-500',
      link: '/docs',
      level: 'Fundamental',
      complexity: 3,
      topics: ['Event Loop', 'NPM', 'Modules', 'Performance']
    },
    {
      name: 'Express.js',
      icon: <SiExpress className='text-6xl text-gray-600' />,
      description: 'Framework minimalista para Node.js. Middleware, routing, y arquitecturas RESTful para APIs modernas y microservicios.',
      tag: 'Próximamente',
      tagColor: 'from-gray-600 to-slate-500',
      link: '/docs',
      level: 'Fundamental',
      complexity: 2,
      topics: ['Middleware', 'Routing', 'REST APIs', 'Security']
    },
    {
      name: 'NestJS',
      icon: <SiNestjs className='text-6xl text-red-500' />,
      description: 'Framework enterprise para Node.js con TypeScript, decorators, dependency injection, y arquitecturas modulares escalables.',
      tag: 'Próximamente',
      tagColor: 'from-red-500 to-pink-500',
      link: '/docs',
      level: 'Avanzado',
      complexity: 5,
      topics: ['DI', 'Decorators', 'Guards', 'Modules']
    },
    {
      name: 'Python',
      icon: <FaPython className='text-6xl text-blue-500' />,
      description: 'Lenguaje versátil para backend, data science, ML/AI. Sintaxis clara, librerías extensas, y ecosistema maduro para aplicaciones enterprise.',
      tag: 'Próximamente',
      tagColor: 'from-blue-500 to-cyan-500',
      link: '/docs',
      level: 'Fundamental',
      complexity: 2,
      topics: ['OOP', 'Libraries', 'Data Science', 'AI/ML']
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi className='text-6xl text-teal-500' />,
      description: 'Framework moderno para Python con validation automática, OpenAPI, async/await, y performance comparable a NodeJS.',
      tag: 'Próximamente',
      tagColor: 'from-teal-500 to-cyan-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 3,
      topics: ['Async', 'OpenAPI', 'Validation', 'Performance']
    },
    {
      name: 'Django',
      icon: <SiDjango className='text-6xl text-green-600' />,
      description: 'Framework "batteries included" para Python. ORM potente, admin panel, autenticación, y arquitectura MVT para aplicaciones complejas.',
      tag: 'Próximamente',
      tagColor: 'from-green-600 to-emerald-600',
      link: '/docs',
      level: 'Intermedio',
      complexity: 4,
      topics: ['ORM', 'Admin', 'Auth', 'Templates']
    },
    {
      name: 'Java Spring',
      icon: <SiSpring className='text-6xl text-green-400' />,
      description: 'Framework enterprise para Java con dependency injection, Spring Boot, microservicios, y ecosystem completo para aplicaciones robustas.',
      tag: 'Próximamente',
      tagColor: 'from-green-400 to-emerald-400',
      link: '/docs',
      level: 'Avanzado',
      complexity: 5,
      topics: ['Spring Boot', 'DI', 'Microservices', 'Security']
    },
    {
      name: 'PHP Laravel',
      icon: <SiLaravel className='text-6xl text-red-600' />,
      description: 'Framework elegante para PHP con Eloquent ORM, Blade templating, Artisan CLI, y ecosystem completo para desarrollo web.',
      tag: 'Próximamente',
      tagColor: 'from-red-600 to-pink-600',
      link: '/docs',
      level: 'Intermedio',
      complexity: 3,
      topics: ['Eloquent', 'Blade', 'Artisan', 'MVC']
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className='text-6xl text-blue-700' />,
      description: 'Base de datos relacional avanzada con JSON nativo, índices sofisticados, transacciones ACID, y extensiones para casos específicos.',
      tag: 'Próximamente',
      tagColor: 'from-blue-700 to-indigo-600',
      link: '/docs',
      level: 'Intermedio',
      complexity: 4,
      topics: ['ACID', 'JSON', 'Indexing', 'Extensions']
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className='text-6xl text-green-500' />,
      description: 'Base de datos NoSQL con documentos flexibles, sharding horizontal, replicación, y agregaciones complejas para big data.',
      tag: 'Próximamente',
      tagColor: 'from-green-500 to-emerald-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 3,
      topics: ['Documents', 'Sharding', 'Aggregation', 'Replication']
    },
    {
      name: 'Redis',
      icon: <SiRedis className='text-6xl text-red-500' />,
      description: 'Cache in-memory ultra-rápido, pub/sub, session store, y estructuras de datos avanzadas para aplicaciones de alto rendimiento.',
      tag: 'Próximamente',
      tagColor: 'from-red-500 to-pink-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 3,
      topics: ['Caching', 'Pub/Sub', 'Data Structures', 'Performance']
    },
    {
      name: 'Docker',
      icon: <SiDocker className='text-6xl text-blue-500' />,
      description: 'Containerización para desarrollo, testing, y deployment. Multi-stage builds, Docker Compose, y integración con Kubernetes.',
      tag: 'Próximamente',
      tagColor: 'from-blue-500 to-cyan-500',
      link: '/docs',
      level: 'Intermedio',
      complexity: 4,
      topics: ['Containers', 'Compose', 'Multi-stage', 'Kubernetes']
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
        <h3 className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4'>
          Backend Technologies
        </h3>
        <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
          Tecnologías del lado del servidor para crear APIs robustas, bases de datos escalables y arquitecturas enterprise
        </p>
      </motion.div>

      <div className='grid gap-6 lg:grid-cols-2'>
        {backend.map((tech, i) => (
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
              className='group relative w-full h-full p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl flex flex-col gap-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 overflow-hidden'
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Header */}
              <div className='flex items-start justify-between relative z-10'>
                <div className='flex items-center gap-4'>
                  <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className='text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300'>
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
                    className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 backdrop-blur-sm"
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
                  className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
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

export default BackDocs