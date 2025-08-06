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
          className='mobile-menu-overlay lg:hidden flex items-center justify-center safe-area-top safe-area-bottom'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeMenu}
        >
          {/* Enhanced Mobile Menu */}
          <motion.div 
            className='w-full max-w-sm mx-4 mobile-container'
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Title */}
            <motion.div 
              className='text-center mb-8 xs:mb-12'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className='text-xl xs:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2'>
                {t('nav.menu.title')}
              </h2>
              <div className='w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto' />
            </motion.div>

            {/* Menu Items */}
            <div className='space-y-3 xs:space-y-4'>
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
                      className={`mobile-menu-item group flex items-center gap-3 xs:gap-4 ${
                        isActive ? 'active' : ''
                      }`}
                    >
                      <motion.div 
                        className={`w-10 h-10 xs:w-12 xs:h-12 rounded-xl flex items-center justify-center text-xl xs:text-2xl ${
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
                        <h3 className={`font-semibold text-base xs:text-lg transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}>
                          {item.label}
                        </h3>
                        <p className='text-xs xs:text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors'>
                          {t(`nav.menu.descriptions.${item.id}`)}
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
              className='text-center mt-8 xs:mt-12 px-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className='text-xs xs:text-sm text-zinc-500'>
                {t('nav.menu.closeInstruction')}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuOpen