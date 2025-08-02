import React, { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import Spanish from '../../assets/spanish.png'
import English from '../../assets/english.png'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const Language = ({ scrolled, path }) => {
  const { i18n } = useTranslation()
  const [dropdown, setDropdown] = useState(false)

  const languageHandler = (boolean) => {
    i18n.changeLanguage(boolean ? 'EN' : 'ES')
    setDropdown(false)
    if (boolean) toast.success('Language changed to English')
    else toast.success('Idioma cambiado a Español')
  }

  // Hide language component in CV routes
  const isCVRoute = path.includes('/cv/corporate') || path.includes('/cv/harvard')
  if (isCVRoute) {
    return null
  }

  return (
    <div className='relative z-20'>
      {/* Enhanced Language button */}
      <motion.button 
        onClick={() => setDropdown(!dropdown)} 
        className={`group flex items-center gap-2 px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/30' 
            : 'hover:bg-white/10'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className='relative'
          animate={{ rotate: dropdown ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {i18n.language === 'EN' 
            ? <img src={English} alt='English' className='w-5 h-5 rounded-sm object-cover ring-1 ring-slate-400/30' /> 
            : <img src={Spanish} alt='Español' className='w-5 h-5 rounded-sm object-cover ring-1 ring-slate-400/30' />
          }
        </motion.div>
        <span className='text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors'>
          {i18n.language === 'EN' ? 'EN' : 'ES'}
        </span>
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          fill="currentColor" 
          viewBox="0 0 16 16" 
          className='text-zinc-400 group-hover:text-white transition-colors'
          animate={{ rotate: dropdown ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </motion.svg>
      </motion.button>

      {/* Enhanced Dropdown */}
      <AnimatePresence>
        {dropdown && (
          <motion.div
            className='absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl shadow-black/20 min-w-[140px]'
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.button 
              onClick={() => languageHandler(false)} 
              className='w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700/50 transition-all duration-200 group'
              whileHover={{ x: 4 }}
              disabled={i18n.language === 'ES'}
            >
              <img src={Spanish} alt='Español' className='w-5 h-5 rounded-sm object-cover ring-1 ring-slate-400/30' />
              <span className='text-sm font-medium text-zinc-300 group-hover:text-white'>Español</span>
              {i18n.language === 'ES' && (
                <motion.div 
                  className='ml-auto w-2 h-2 bg-green-400 rounded-full'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.button>
            <div className='h-px bg-slate-700/50' />
            <motion.button 
              onClick={() => languageHandler(true)} 
              className='w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700/50 transition-all duration-200 group'
              whileHover={{ x: 4 }}
              disabled={i18n.language === 'EN'}
            >
              <img src={English} alt='English' className='w-5 h-5 rounded-sm object-cover ring-1 ring-slate-400/30' />
              <span className='text-sm font-medium text-zinc-300 group-hover:text-white'>English</span>
              {i18n.language === 'EN' && (
                <motion.div 
                  className='ml-auto w-2 h-2 bg-green-400 rounded-full'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  )
}

export default Language
