import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackDocs from './BackDocs'
import FrontDocs from './FrontDocs'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { FaCode, FaServer, FaTools, FaRocket } from 'react-icons/fa'

const Docs = () => {
  const { i18n } = useTranslation()
  const [activeTab, setActiveTab] = useState('frontend')

  useEffect(() => {
    if (i18n.language === 'EN') {
      toast.error('I am currently creating content in Spanish only, sorry!')
    }
  }, [i18n.language])

  const tabs = [
    { 
      id: 'frontend', 
      title: 'Frontend', 
      icon: FaCode, 
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Tecnologías del lado del cliente'
    },
    { 
      id: 'backend', 
      title: 'Backend', 
      icon: FaServer, 
      gradient: 'from-purple-500 to-pink-500',
      description: 'Tecnologías del lado del servidor'
    },
    { 
      id: 'tools', 
      title: 'DevOps', 
      icon: FaTools, 
      gradient: 'from-green-500 to-emerald-500',
      description: 'Herramientas y deployment'
    },
    { 
      id: 'advanced', 
      title: 'Avanzado', 
      icon: FaRocket, 
      gradient: 'from-orange-500 to-red-500',
      description: 'Arquitecturas y patrones'
    }
  ]

  return (
    <motion.div 
      className='max-w-7xl m-auto px-4 xs:px-8 relative w-full min-h-screen flex flex-col gap-16 mt-40 pb-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>

      {/* Custom cursor */}

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
              Technical Documentation
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              📚 Guías Técnicas & Mejores Prácticas Empresariales
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              Documentación completa sobre tecnologías modernas, arquitecturas escalables, 
              y metodologías utilizadas en empresas de clase mundial como Google, Facebook, y Amazon.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-4 gap-6 pt-6 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  15+
                </div>
                <div className="text-xs text-zinc-400 font-medium">Tecnologías</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  100+
                </div>
                <div className="text-xs text-zinc-400 font-medium">Ejemplos de Código</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  50+
                </div>
                <div className="text-xs text-zinc-400 font-medium">Mejores Prácticas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  24/7
                </div>
                <div className="text-xs text-zinc-400 font-medium">Actualizaciones</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Tab Navigation */}
      <motion.div
        className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative p-6 rounded-2xl font-bold transition-all duration-300 group ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl`
                    : 'bg-slate-800/50 text-zinc-300 hover:bg-slate-700/50 border border-slate-600/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <IconComponent className="text-3xl" />
                  <div className="text-center">
                    <div className="text-lg font-bold">{tab.title}</div>
                    <div className="text-xs opacity-75">{tab.description}</div>
                  </div>
                </div>
                
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'frontend' && <FrontDocs />}
            {activeTab === 'backend' && <BackDocs />}
            {activeTab === 'tools' && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  DevOps & Herramientas
                </h3>
                <p className="text-zinc-300 text-lg">
                  Documentación sobre Docker, Kubernetes, CI/CD y más. Próximamente...
                </p>
              </div>
            )}
            {activeTab === 'advanced' && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Arquitecturas Avanzadas
                </h3>
                <p className="text-zinc-300 text-lg">
                  Microservicios, Event-Driven Architecture, System Design. Próximamente...
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default Docs