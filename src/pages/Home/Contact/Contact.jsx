import Title from '../../../components/Title'
// Font Awesome icons are now loaded globally via CDN
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Contact = () => {
  const { t } = useTranslation(['translation'])
  const size = '30px'
  return (
    <div id='contact' className='grid gap-16 pb-32'>
      <Title title={t('contact.title')}></Title>
      
      {/* Contact Info */}
      <motion.div 
        className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          {t('contact.subtitle')}
        </h3>
        <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
        
        {/* Contact Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <i className="fas fa-envelope text-sky-400 text-xl"></i>
            <div>
              <p className="text-sky-400 font-semibold">Email</p>
              <p className="text-zinc-300 text-sm">{t('contact.email')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <i className="fab fa-whatsapp text-green-400 text-xl"></i>
            <div>
              <p className="text-green-400 font-semibold">{t('contact.phones')}</p>
              <p className="text-zinc-300 text-xs">{t('contact.phonePerу')}</p>
              <p className="text-zinc-300 text-xs">{t('contact.phoneChile')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <i className="fas fa-map-marker-alt text-purple-400 text-xl"></i>
            <div>
              <p className="text-purple-400 font-semibold">{t('contact.locationLabel')}</p>
              <p className="text-zinc-300 text-sm">{t('contact.location')}</p>
            </div>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <motion.a
            href="mailto:xinayespinoza@gmail.com"
            className="font-semibold px-6 py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-sky-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope"></i> {t('contact.sendEmail')}
          </motion.a>
          <motion.a
            href="https://wa.me/51974361728"
            target="_blank"
            className="font-semibold px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </motion.a>
        </div>

        <div className="flex gap-4 justify-center text-sm text-zinc-400">
          <span>✅ {t('contact.response')}</span>
          <span>•</span>
          <span>💬 {t('contact.consultation')}</span>
        </div>
      </motion.div>

      {/* Social Media */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
        <motion.a 
          href='https://www.linkedin.com/in/emerson-espinoza-aguirre/' 
          target={'_blank'} 
          aria-label='LinkedIn' 
          className='h-full w-full bg-gradient-to-r from-sky-500 to-sky-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#0284c7] hover:scale-105 transition-transform'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className='fab fa-linkedin-in text-3xl drop-shadow-2xl'></i>
        </motion.a>
        
        <motion.a 
          href='https://github.com/emersonxinay' 
          target={'_blank'} 
          aria-label='GitHub' 
          className='h-full w-full bg-gradient-to-r from-slate-600 to-slate-800 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#334155] hover:scale-105 transition-transform'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className='fab fa-github text-3xl drop-shadow-2xl'></i>
        </motion.a>
        
        <motion.a 
          href='https://www.youtube.com/@compilandocode' 
          target={'_blank'} 
          aria-label='YouTube' 
          className='h-full w-full bg-gradient-to-r from-red-500 to-red-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#c8102e] hover:scale-105 transition-transform'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className='fab fa-youtube text-3xl text-white-600 drop-shadow-2xl'></i>
        </motion.a>

        <motion.a 
          href='https://wa.me/51974361728' 
          target={'_blank'} 
          aria-label='WhatsApp' 
          className='h-full w-full bg-gradient-to-r from-green-500 to-green-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#16a34a] hover:scale-105 transition-transform'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className='fab fa-whatsapp text-3xl drop-shadow-2xl'></i>
        </motion.a>
        
        <motion.a 
          href='mailto:xinayespinoza@gmail.com' 
          aria-label='Email' 
          className='h-full w-full bg-gradient-to-r from-purple-500 to-purple-700 ring-0 rounded-xl grid place-content-center py-8 shadow-[0px_0px_10px_1px_#7c3aed] hover:scale-105 transition-transform'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className='fas fa-envelope text-3xl drop-shadow-2xl'></i>
        </motion.a>
      </div>
    </div>
  )
}

export default Contact