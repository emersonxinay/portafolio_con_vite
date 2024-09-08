import React from 'react'
import Title from '../../../components/Title'
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { SiX } from 'react-icons/si';

import { BsTwitter } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ImTwitch } from 'react-icons/im'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation(['translation'])
  const size = '30px'
  return (
    <div id='contact' className='grid gap-16 pb-32'>
      <Title title={t('contact.title')}></Title>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <a href='https://www.linkedin.com/in/emerson-espinoza-aguirre/' target={'_blank'} aria-label='Linkedin' className='h-full w-full bg-gradient-to-r  from-sky-500 to-sky-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#0284c7]'>
          <FaLinkedinIn size={size} className='drop-shadow-2xl'></FaLinkedinIn>
        </a>
        <a href='https://github.com/emersonxinay' target={'_blank'} aria-label='Github' className='h-full w-full bg-gradient-to-r  from-slate-600 to-slate-800 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#334155]'>
          <FaGithub size={size} className='drop-shadow-2xl'></FaGithub>
        </a>
        <a href='https://discord.com/invite/' target={'_blank'} aria-label='Discord' className='h-full w-full bg-gradient-to-r  from-indigo-500 to-indigo-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#4f46e5]'>
          <FaDiscord size={size} className='drop-shadow-2xl'></FaDiscord>
        </a>
        <a href='https://www.youtube.com/@compilandocode' target={'_blank'} aria-label='Youtube' className='h-full w-full bg-gradient-to-r from-red-500 to-red-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#c8102e]'>
          <BsYoutube size={size} className='text-white-600 drop-shadow-2xl'></BsYoutube>
        </a>

        
        <a href='https://www.x.com/compilandocode' target={'_blank'} aria-label='X' className='h-full w-full bg-gradient-to-r from-black to-gray-800 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#000000]'>
          <SiX size={size} className='text-white drop-shadow-2xl'></SiX>
        </a>

        
      </div>
    </div>
  )
}

export default Contact