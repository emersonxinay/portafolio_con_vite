import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../../assets/emerson_espinoza.jpeg'
import { Link, useHref } from 'react-router-dom'
import Language from './Language'
import Links from './Links'
import Menu from './Menu'

const Nav = () => {
  const path = useHref()
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Siempre visible en la parte superior
      if (currentScrollY < 10) {
        setVisible(true)
        setScrolled(false)
      } else {
        // Ocultar solo al hacer scroll hacia abajo rápido (más de 150px)
        // En móvil, más tolerante para mejorar UX
        const isMobile = window.innerWidth < 768
        const scrollThreshold = isMobile ? 200 : 150
        const scrollDelta = Math.abs(currentScrollY - lastScrollY)

        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold && scrollDelta > 5) {
          // Scrolling down - hide only if significant movement
          setVisible(false)
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show immediately
          setVisible(true)
        }

        setScrolled(currentScrollY > 50)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      <motion.nav
        className={`mobile-nav safe-area-top w-full ${
          scrolled ? 'mobile-nav-scrolled' : ''
        }`}
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className='mobile-container w-full'>
          <div className='flex justify-between items-center h-14 xs:h-16 lg:h-20 w-full'>
            {/* Logo with enhanced animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative z-20'
            >
              <Link to={'/'} className='flex items-center gap-2 xs:gap-3 group' aria-label="Inicio - Emerson Espinoza">
                <div className='relative'>
                  <motion.img
                    src={Logo}
                    alt="Emerson Espinoza"
                    className='w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all duration-300 touch-target'
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    loading="eager"
                    fetchpriority="high"
                  />
                  <motion.div 
                    className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl'
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
                <motion.div 
                  className='hidden xs:block'
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className='text-sm xs:text-base lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400'>
                    Emerson Dev
                  </h1>
                  <p className='text-xs text-zinc-400 -mt-1 hidden sm:block'>Software Engineer</p>
                </motion.div>
              </Link>
            </motion.div>

            {/* Enhanced Links */}
            <Links path={path} scrolled={scrolled} />

            {/* Language & Menu Container */}
            <div className='flex items-center gap-2 xs:gap-4'>
              <Language scrolled={scrolled} path={path} />
              <Menu scrolled={scrolled} />
            </div>
          </div>
        </div>
        
        {/* Animated border bottom */}
        <motion.div 
          className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>
    </AnimatePresence>
  )
}

export default Nav