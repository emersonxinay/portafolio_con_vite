import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Links = ({ path, scrolled }) => {
  const { t } = useTranslation(['translation'])
  const [hoveredLink, setHoveredLink] = useState(null)

  const navItems = [
    { id: 'home', to: '/', label: t('nav.home'), icon: 'fas fa-home' },
    { id: 'projects', to: '/projects', label: t('nav.projects'), icon: 'fas fa-folder-open' },
    { id: 'blog', to: '/blog', label: t('nav.blog'), icon: 'fas fa-blog' },
    { id: 'docs', to: '/docs', label: t('nav.docs'), icon: 'fas fa-book' },
    { id: 'tools', to: '/tools', label: t('nav.tools'), icon: 'fas fa-tools' },
    { id: 'cv', to: '/cv/generator', label: t('nav.cv'), icon: 'fas fa-file-alt' }
  ]

  const getActiveIndex = () => {
    if (path === '/') return 0
    if (path.includes('/projects')) return 1
    if (path.includes('/blog')) return 2
    if (path.includes('/docs')) return 3
    if (path.includes('/tools')) return 4
    if (path.includes('/cv/generator')) return 5
    return 0
  }

  return (
    <div className='hidden lg:flex relative'>
      <div className='flex items-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-1 border border-slate-700/50'>
        {navItems.map((item, index) => {
          const isActive = (
            (path === '/' && item.to === '/') ||
            (path.includes(item.to) && item.to !== '/')
          )
          
          return (
            <motion.div
              key={item.id}
              className='relative'
              onHoverStart={() => setHoveredLink(index)}
              onHoverEnd={() => setHoveredLink(null)}
            >
              <Link
                to={item.to}
                className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span className='text-sm font-semibold'>{item.label}</span>
              </Link>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl'
                  layoutId='activeTab'
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
              
              {/* Hover indicator */}
              {hoveredLink === index && !isActive && (
                <motion.div
                  className='absolute inset-0 bg-slate-700/50 rounded-xl'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
      
      {/* Floating indicator dots */}
      <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1'>
        {navItems.map((_, index) => {
          const isActive = index === getActiveIndex()
          return (
            <motion.div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'bg-cyan-400 w-6' : 'bg-slate-600'
              }`}
              animate={{
                scale: isActive ? 1.2 : 1,
                opacity: isActive ? 1 : 0.5
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Links