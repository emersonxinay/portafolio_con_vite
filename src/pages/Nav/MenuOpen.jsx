import React from 'react'
import { Link, useHref } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const MenuOpen = ({ isOpen, closeMenu, scrolled }) => {
  const { t } = useTranslation(['translation'])
  const path = useHref()

  const navItems = [
    { id: 'home', to: '/', label: t('nav.home'), icon: '🏠' },
    { id: 'blog', to: '/blog', label: t('nav.blog'), icon: '📝' },
    { id: 'docs', to: '/docs', label: t('nav.docs'), icon: '📚' },
    { id: 'tools', to: '/tools', label: t('nav.tools'), icon: '🛠️' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className='fixed inset-0 lg:hidden z-40 bg-slate-900/95 backdrop-blur-2xl flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Enhanced Mobile Menu */}
          <motion.div 
            className='w-full max-w-sm mx-4'
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Menu Title */}
            <motion.div 
              className='text-center mb-12'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2'>
                Menu de Navegación
              </h2>
              <div className='w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto' />
            </motion.div>

            {/* Menu Items */}
            <div className='space-y-4'>
              {navItems.map((item, index) => {
                const isActive = (path === '/' && item.to === '/') || (path.includes(item.to) && item.to !== '/')
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 shadow-lg shadow-cyan-500/10' 
                          : 'bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700/30'
                      }`}
                    >
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                          isActive 
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25' 
                            : 'bg-slate-700/50 group-hover:bg-slate-600/50'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      <div className='flex-1'>
                        <h3 className={`font-semibold text-lg transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}>
                          {item.label}
                        </h3>
                        <p className='text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors'>
                          {item.to === '/' ? 'Página principal' : 
                           item.to === '/blog' ? 'Artículos técnicos' :
                           item.to === '/docs' ? 'Documentación' : 'Herramientas útiles'}
                        </p>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          className='w-2 h-2 bg-cyan-400 rounded-full'
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            
            {/* Close instruction */}
            <motion.div 
              className='text-center mt-12'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className='text-sm text-zinc-500'>
                Toca en cualquier lugar para cerrar
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuOpen