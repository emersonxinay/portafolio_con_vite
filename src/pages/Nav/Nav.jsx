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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-primary-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
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
          <div className='flex justify-between items-center h-16 xs:h-20 w-full'>
            {/* Logo with enhanced animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative z-20'
            >
              <Link to={'/'} className='flex items-center gap-3 group' aria-label="Inicio - Emerson Espinoza">
                <div className='relative'>
                  <motion.img
                    src={Logo}
                    alt="Emerson Espinoza"
                    className='w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-accent transition-all duration-300'
                    loading="eager"
                  />
                </div>
                <div className='hidden xs:block'>
                  <h1 className='text-lg font-bold text-white tracking-tight group-hover:text-accent transition-colors'>
                    Emerson Espinoza
                  </h1>
                  <p className='text-xs text-slate-400 font-medium uppercase tracking-wider'>Founder of Águila</p>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Links */}
            <Links path={path} scrolled={scrolled} />

            {/* Language & Menu Container */}
            <div className='flex items-center gap-4'>
              <Language scrolled={scrolled} path={path} />
              <Menu scrolled={scrolled} />
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  )
}

export default Nav