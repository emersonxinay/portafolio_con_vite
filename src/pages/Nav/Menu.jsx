import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { disableScrolling, enableScrolling } from '../../utils/scrollHandler'
import MenuOpen from './MenuOpen'

const Menu = ({ scrolled }) => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (menu) disableScrolling()
    else enableScrolling()
  }, [menu])


  return (
    <div className="block lg:hidden">
      <motion.button 
        className={`relative group z-20 p-2 rounded-xl transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/30' 
            : 'hover:bg-white/10'
        }`}
        onClick={() => setMenu(!menu)} 
        aria-label='Toggle menu'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Enhanced hamburger animation */}
          <motion.div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              className="block h-0.5 w-6 bg-white rounded-sm"
              animate={{
                rotate: menu ? 45 : 0,
                y: menu ? 2 : -2,
                opacity: menu ? 1 : 1
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white rounded-sm mt-1"
              animate={{
                opacity: menu ? 0 : 1,
                x: menu ? 20 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-white rounded-sm mt-1"
              animate={{
                rotate: menu ? -45 : 0,
                y: menu ? -2 : 2,
                opacity: menu ? 1 : 1
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.div>
          
          {/* Pulse effect when menu is open */}
          {menu && (
            <motion.div
              className="absolute inset-0 border border-cyan-400/50 rounded-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          )}
        </div>
      </motion.button>
      
      <MenuOpen isOpen={menu} closeMenu={() => setMenu(false)} scrolled={scrolled} />
    </div>
  )
}

export default Menu