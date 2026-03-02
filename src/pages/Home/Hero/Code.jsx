import React, { useState } from 'react'
import { MdFileCopy } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import avatar from '../../../assets/emerson-espinoza.jpeg'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const Code = () => {
  const { t } = useTranslation(['translation'])

  const [showImage, setshowImage] = useState(true)

  const copyHandler = () => {
    const code = document.querySelector('#code').innerText
    navigator.clipboard.writeText(code)
    toast.success('Copied to clipboard!')
  }

  return (
    <motion.div className='w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:w-2/4 px-4 xs:px-0'
      animate={{ y: [5, -5] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      {/* Image */}
      {<AnimatePresence>
        {showImage && <motion.div onClick={() => setshowImage(false)} className='fixed h-full w-full z-10 grid place-content-center top-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm cursorClick px-4'
          initial={{ opacity: 0, scale: 0, borderRadius: '50%' }}
          animate={{ opacity: 1, scale: 1, borderRadius: '12px' }}
          exit={{ opacity: 0, scale: 0, borderRadius: '50%' }}
          transition={{ duration: 0.2 }}
        >
          <img src={avatar} alt="Emerson Espinoza" className='h-32 w-32 xs:h-40 xs:w-40 sm:h-48 sm:w-48 object-cover rounded-xl mobile-shadow' />
        </motion.div>}
      </AnimatePresence>}

      {/* Code snippet */}
      <div className='bg-slate-900/80 backdrop-blur-xl grid p-3 xs:p-4 rounded-xl w-full divide-y-[1px] divide-slate-700/50 gap-2 border border-slate-700/50 shadow-2xl'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-1 xs:gap-1.5'>
            <div className='w-3 h-3 rounded-full bg-slate-600/50'></div>
            <div className='w-3 h-3 rounded-full bg-slate-600/50'></div>
            <div className='w-3 h-3 rounded-full bg-slate-600/50'></div>
          </div>
          <span className='text-zinc-500 text-xs font-mono'>index.js</span>
          <MdFileCopy className='text-zinc-500 hover:text-accent transition-colors cursor-pointer' onClick={copyHandler} />
        </div>
        <div className='w-full'>
          {/* escribir un code snippet de javascript */}
          <pre className='text-slate-300 text-xs xs:text-sm py-2 xs:py-3 w-full relative overflow-x-auto mobile-scroll font-mono leading-relaxed'>
            {/* Removed neon shadow blob */}
            <code id='code'>
              <span className="text-purple-400">const</span> {t('code.welcome')} <span className="text-purple-400">=</span> <span className='text-slate-500'>()</span> <span className="text-purple-400">=&gt;</span> <span className='text-slate-500'>&#123;</span> <br></br><br></br>
              {'  '}<span className="text-purple-400">const</span> {t('code.about')} <span className="text-purple-400">=</span> <span className='text-slate-500'>&#123;</span> <br></br>
              {'  '}{'  '}<span className="text-purple-400">const</span> {t('code.name')} <span className="text-purple-400">=</span> '<span className="text-emerald-400">Emerson </span>' <br></br>
              {'  '}{'  '}<span className="text-purple-400">const</span> {t('code.lastname')} <span className="text-purple-400">=</span> '<span className="text-emerald-400">Espinoza</span>' <br></br>
              {'  '}{'  '}<span className="text-purple-400">const</span> {t('code.image')} <span className="text-purple-400">=</span> <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors" onClick={() => setshowImage(true)} >emerson.jpg</span><br></br>
              {'  '}{'  '}<span className="text-purple-400">const</span> {t('code.country')} <span className="text-purple-400">=</span> '<span className="text-emerald-400">Perú y Chile</span>' <br></br>
              {'  '}{'  '}<span className="text-purple-400">const</span> {t('code.spanish')} <span className="text-purple-400">=</span> '<span className="text-emerald-400">{t('code.spanishValue')}</span>' <br></br>
              {'  '}{'  '}<span className="text-purple-400">let</span> {t('code.english')} <span className="text-purple-400">=</span> '<span className="text-emerald-400">{t('code.englishValue')}</span>' <br></br>
              {'  '}<span className='text-slate-500'>&#125;</span> <br></br><br></br>
              {'  '}<span className="text-purple-400">return</span> {t('code.about')} <br></br>
              <span className='text-slate-500'>&#125;</span> <br></br> <br></br>
              {t('code.welcome')}<span className='text-slate-500'>()</span>
            </code>
          </pre>
        </div>
      </div>
    </motion.div >
  )
}

export default Code