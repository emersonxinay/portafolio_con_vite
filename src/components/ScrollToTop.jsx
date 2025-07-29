import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { motion } from 'framer-motion'

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  const scrollHandler = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200);
  }
  
  return (
    <div>
      <AnimatePresence>
        {
          scroll > 10 ? // Changed from string '10' to number 10
            <motion.div onClick={scrollHandler} className='fixed right-8 bottom-8 bg-gradient-to-r from-sky-500 to-sky-700 ring-0 rounded-full p-2 cursorClick z-[5]'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <IoIosArrowUp size={'25px'}></IoIosArrowUp>
            </motion.div> :
            null
        }
      </AnimatePresence>
    </div>
  )
}

export default ScrollToTop