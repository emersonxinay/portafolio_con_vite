import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import CustomCursor from '../../components/CustomCursor'
import { 
  FaGithub, FaDocker, FaAws, FaSlack, FaFigma, FaJira, FaGitlab
} from 'react-icons/fa'
import { 
  SiVisualstudiocode, SiPostman, SiVercel, SiJenkins, 
  SiKubernetes, SiGrafana, SiPrometheus, SiVite, SiJest, 
  SiCypress, SiStorybook, SiNotion, SiLinear,
  SiTypescript, SiTailwindcss, SiFramer, SiNextdotjs
} from 'react-icons/si'

const Tools = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  let [query, setQuery] = useState(searchParams.get('category') || "all");

  const [toolsFiltered, setToolsFiltered] = useState([])
  useEffect(() => {
    if (query === 'all') setToolsFiltered(tools)
    else setToolsFiltered(tools.filter(t => t.category === query))
  }, [query])

  const filtersHandler = (categoryName) => {
    setQuery(categoryName)
    setSearchParams({ category: categoryName })
  }

  const categories = [
    { id: 'all', name: 'Todas', icon: '🛠️', color: 'from-gray-500 to-gray-600' },
    { id: 'development', name: 'Desarrollo', icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { id: 'devops', name: 'DevOps', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
    { id: 'design', name: 'Diseño', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { id: 'productivity', name: 'Productividad', icon: '📈', color: 'from-orange-500 to-red-500' },
    { id: 'testing', name: 'Testing', icon: '🧪', color: 'from-teal-500 to-cyan-500' },
    { id: 'monitoring', name: 'Monitoreo', icon: '📊', color: 'from-indigo-500 to-purple-500' },
  ]

  const tools = [
    // Development Tools
    {
      name: 'Visual Studio Code',
      icon: <SiVisualstudiocode className="text-4xl text-blue-500" />,
      category: 'development',
      url: 'https://code.visualstudio.com/',
      description: 'Editor de código ultrarrápido con IntelliSense, debugging, y extensiones.',
      tags: ['Editor', 'IntelliSense', 'Extensions'],
      popularity: 98,
      type: 'Essential'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-4xl text-gray-800 dark:text-white" />,
      category: 'development',
      url: 'https://github.com/',
      description: 'Plataforma de desarrollo colaborativo con Git, CI/CD, y project management.',
      tags: ['Git', 'Collaboration', 'CI/CD'],
      popularity: 96,
      type: 'Essential'
    },
    {
      name: 'Postman',
      icon: <SiPostman className="text-4xl text-orange-500" />,
      category: 'development',
      url: 'https://postman.com/',
      description: 'API development platform para testing, documentación, y colaboración.',
      tags: ['API', 'Testing', 'Documentation'],
      popularity: 90,
      type: 'Professional'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      category: 'development',
      url: 'https://typescriptlang.org/',
      description: 'JavaScript con type safety para desarrollo enterprise escalable.',
      tags: ['JavaScript', 'Types', 'Enterprise'],
      popularity: 89,
      type: 'Professional'
    },
    {
      name: 'Vite',
      icon: <SiVite className="text-4xl text-purple-500" />,
      category: 'development',
      url: 'https://vitejs.dev/',
      description: 'Build tool ultrarrápido con HMR para desarrollo frontend moderno.',
      tags: ['Build Tool', 'HMR', 'Performance'],
      popularity: 85,
      type: 'Modern'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />,
      category: 'development',
      url: 'https://nextjs.org/',
      description: 'Framework React full-stack con SSR, SSG, y App Router.',
      tags: ['React', 'Full-stack', 'SSR'],
      popularity: 92,
      type: 'Essential'
    },

    // DevOps Tools
    {
      name: 'Docker',
      icon: <FaDocker className="text-4xl text-blue-500" />,
      category: 'devops',
      url: 'https://docker.com/',
      description: 'Containerización para desarrollo, testing, y deployment consistente.',
      tags: ['Containerization', 'DevOps', 'Deployment'],
      popularity: 94,
      type: 'Essential'
    },
    {
      name: 'AWS',
      icon: <FaAws className="text-4xl text-orange-500" />,
      category: 'devops',
      url: 'https://aws.amazon.com/',
      description: 'Cloud platform líder con servicios escalables para aplicaciones enterprise.',
      tags: ['Cloud', 'Scalability', 'Enterprise'],
      popularity: 91,
      type: 'Professional'
    },
    {
      name: 'Kubernetes',
      icon: <SiKubernetes className="text-4xl text-blue-600" />,
      category: 'devops',
      url: 'https://kubernetes.io/',
      description: 'Orquestación de containers para deployment y scaling automático.',
      tags: ['Orchestration', 'Scaling', 'Containers'],
      popularity: 87,
      type: 'Professional'
    },
    {
      name: 'Vercel',
      icon: <SiVercel className="text-4xl text-black dark:text-white" />,
      category: 'devops',
      url: 'https://vercel.com/',
      description: 'Platform para deployment de aplicaciones frontend con edge computing.',
      tags: ['Deployment', 'Edge', 'Frontend'],
      popularity: 83,
      type: 'Modern'
    },
    {
      name: 'Jenkins',
      icon: <SiJenkins className="text-4xl text-red-600" />,
      category: 'devops',
      url: 'https://jenkins.io/',
      description: 'Automation server para CI/CD pipelines y deployment automation.',
      tags: ['CI/CD', 'Automation', 'Pipelines'],
      popularity: 78,
      type: 'Professional'
    },
    {
      name: 'GitLab',
      icon: <FaGitlab className="text-4xl text-orange-600" />,
      category: 'devops',
      url: 'https://gitlab.com/',
      description: 'DevOps platform completa con Git, CI/CD, y container registry.',
      tags: ['DevOps', 'CI/CD', 'Git'],
      popularity: 82,
      type: 'Professional'
    },

    // Design Tools
    {
      name: 'Figma',
      icon: <FaFigma className="text-4xl text-purple-500" />,
      category: 'design',
      url: 'https://figma.com/',
      description: 'Collaborative design tool para UI/UX, prototyping, y design systems.',
      tags: ['UI/UX', 'Prototyping', 'Collaboration'],
      popularity: 93,
      type: 'Essential'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      category: 'design',
      url: 'https://tailwindcss.com/',
      description: 'Utility-first CSS framework para rapid UI development.',
      tags: ['CSS', 'Utility-first', 'Rapid'],
      popularity: 88,
      type: 'Modern'
    },
    {
      name: 'Framer Motion',
      icon: <SiFramer className="text-4xl text-pink-500" />,
      category: 'design',
      url: 'https://framer.com/motion/',
      description: 'Animation library para React con gestures y layout animations.',
      tags: ['Animation', 'React', 'Gestures'],
      popularity: 79,
      type: 'Modern'
    },

    // Testing Tools
    {
      name: 'Jest',
      icon: <SiJest className="text-4xl text-red-600" />,
      category: 'testing',
      url: 'https://jestjs.io/',
      description: 'JavaScript testing framework con snapshot testing y coverage.',
      tags: ['Testing', 'Snapshots', 'Coverage'],
      popularity: 86,
      type: 'Essential'
    },
    {
      name: 'Cypress',
      icon: <SiCypress className="text-4xl text-green-600" />,
      category: 'testing',
      url: 'https://cypress.io/',
      description: 'End-to-end testing framework para modern web applications.',
      tags: ['E2E', 'Testing', 'Modern'],
      popularity: 81,
      type: 'Professional'
    },
    {
      name: 'Storybook',
      icon: <SiStorybook className="text-4xl text-pink-500" />,
      category: 'testing',
      url: 'https://storybook.js.org/',
      description: 'Tool para building UI components y design systems en isolation.',
      tags: ['Components', 'Design System', 'UI'],
      popularity: 74,
      type: 'Professional'
    },

    // Monitoring Tools
    {
      name: 'Grafana',
      icon: <SiGrafana className="text-4xl text-orange-500" />,
      category: 'monitoring',
      url: 'https://grafana.com/',
      description: 'Analytics y monitoring platform con dashboards interactivos.',
      tags: ['Analytics', 'Dashboards', 'Monitoring'],
      popularity: 80,
      type: 'Professional'
    },
    {
      name: 'Prometheus',
      icon: <SiPrometheus className="text-4xl text-red-500" />,
      category: 'monitoring',
      url: 'https://prometheus.io/',
      description: 'Systems monitoring y alerting toolkit con time series database.',
      tags: ['Monitoring', 'Alerting', 'Metrics'],
      popularity: 77,
      type: 'Professional'
    },

    // Productivity Tools
    {
      name: 'Notion',
      icon: <SiNotion className="text-4xl text-black dark:text-white" />,
      category: 'productivity',
      url: 'https://notion.so/',
      description: 'All-in-one workspace para notes, docs, wikis, y project management.',
      tags: ['Workspace', 'Notes', 'Collaboration'],
      popularity: 85,
      type: 'Modern'
    },
    {
      name: 'Jira',
      icon: <FaJira className="text-4xl text-blue-600" />,
      category: 'productivity',
      url: 'https://atlassian.com/software/jira',
      description: 'Project management y issue tracking para teams ágiles.',
      tags: ['Project Management', 'Agile', 'Tracking'],
      popularity: 76,
      type: 'Professional'
    },
    {
      name: 'Slack',
      icon: <FaSlack className="text-4xl text-purple-600" />,
      category: 'productivity',
      url: 'https://slack.com/',
      description: 'Business communication platform con channels y integrations.',
      tags: ['Communication', 'Channels', 'Integration'],
      popularity: 88,
      type: 'Essential'
    },
    {
      name: 'Linear',
      icon: <SiLinear className="text-4xl text-purple-500" />,
      category: 'productivity',
      url: 'https://linear.app/',
      description: 'Modern issue tracking y project management para high-performance teams.',
      tags: ['Issue Tracking', 'Modern', 'Performance'],
      popularity: 71,
      type: 'Modern'
    }
  ]


  const getTypeColor = (type) => {
    switch (type) {
      case 'Essential': return 'from-green-500 to-emerald-500'
      case 'Professional': return 'from-blue-500 to-cyan-500'
      case 'Modern': return 'from-purple-500 to-pink-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <motion.div 
      className='max-w-7xl m-auto px-4 xs:px-8 relative w-full min-h-screen flex flex-col gap-16 mt-40 pb-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Custom cursor */}
      <CustomCursor />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          style={{ bottom: '20%', right: '15%' }}
        />
      </div>

      {/* Enhanced Hero Section */}
      <div className='text-center space-y-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Professional Tools
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              🛠️ Enterprise-Grade Development Stack
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              Herramientas profesionales utilizadas en empresas FAANG y startups unicornio. 
              Desde desarrollo hasta deployment, monitoreo y colaboración en equipos de alto rendimiento.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  {tools.length}+
                </div>
                <div className="text-xs text-zinc-400 font-medium">Tools Profesionales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  7
                </div>
                <div className="text-xs text-zinc-400 font-medium">Categorías</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  100%
                </div>
                <div className="text-xs text-zinc-400 font-medium">Enterprise Ready</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Categories */}
      <motion.div
        className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className='flex gap-3 justify-center items-center flex-wrap'>
          {categories.map((category, i) => (
            <motion.button
              key={category.id}
              onClick={() => filtersHandler(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                query === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-110`
                  : 'bg-slate-800/50 text-zinc-300 hover:bg-slate-700/50 border border-slate-600/50 hover:scale-105'
              }`}
              whileHover={{ scale: query === category.id ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm font-bold">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Results Counter */}
        <motion.div 
          className="text-center mt-6 pt-6 border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-zinc-400 text-sm">
            Mostrando <span className="font-bold text-blue-400">{toolsFiltered.length}</span> herramientas profesionales
            {query !== 'all' && (
              <span> en <span className="text-purple-400 font-bold">
                {categories.find(c => c.id === query)?.name}
              </span></span>
            )}
          </span>
        </motion.div>
      </motion.div>

      {/* Enhanced Tools Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="wait">
          {toolsFiltered.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className='group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Tool Icon & Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-3 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                
                {/* Type Badge */}
                <motion.div 
                  className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${getTypeColor(tool.type)} text-white shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool.type}
                </motion.div>
              </div>

              {/* Tool Info */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {tool.name}
                </h3>
                
                <p className="text-zinc-300 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tool.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Popularity Bar */}
                <div className="pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-zinc-400">Popularidad</span>
                    <span className="text-xs text-zinc-400">{tool.popularity}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <motion.div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${tool.popularity}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                  <span className="text-xs text-zinc-400">Explorar herramienta</span>
                  <motion.div 
                    className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results State */}
      {toolsFiltered.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 mx-auto max-w-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              No hay herramientas en esta categoría
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Estamos agregando más herramientas profesionales constantemente.
            </p>
            <motion.button
              onClick={() => filtersHandler('all')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todas las Herramientas
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Tools