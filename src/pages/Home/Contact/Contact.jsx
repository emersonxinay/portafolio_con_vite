import Title from '../../../components/Title'
// Font Awesome icons are now loaded globally via CDN
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Contact = () => {
  const { t } = useTranslation(['translation'])
  const size = '30px'
  return (
    <div id='contact' className='mobile-section grid gap-8 sm:gap-12 lg:gap-16 pb-16 sm:pb-24 lg:pb-32 safe-area-bottom'>
      <Title title={t('contact.title')}></Title>
      
      {/* Contact Info */}
      <motion.div 
        className="mobile-card bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          {t('contact.subtitle')}
        </h3>
        <p className="text-sm sm:text-base text-zinc-400 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-0">
          {t('contact.description')}
        </p>
        
        {/* Contact Details - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <i className="fas fa-envelope text-sky-400 text-lg sm:text-xl"></i>
            <div>
              <p className="text-sky-400 font-semibold text-sm sm:text-base">Email</p>
              <p className="text-zinc-300 text-xs sm:text-sm">{t('contact.email')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <i className="fab fa-whatsapp text-green-400 text-lg sm:text-xl"></i>
            <div>
              <p className="text-green-400 font-semibold text-sm sm:text-base">{t('contact.phones')}</p>
              <p className="text-zinc-300 text-xs">{t('contact.phonePerу')}</p>
              <p className="text-zinc-300 text-xs">{t('contact.phoneChile')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <i className="fas fa-map-marker-alt text-purple-400 text-lg sm:text-xl"></i>
            <div>
              <p className="text-purple-400 font-semibold text-sm sm:text-base">{t('contact.locationLabel')}</p>
              <p className="text-zinc-300 text-xs sm:text-sm">{t('contact.location')}</p>
            </div>
          </div>
        </div>

        {/* Contact Actions - Mobile optimized */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
          <motion.a
            href="mailto:xinayespinoza@gmail.com"
            className="mobile-btn font-semibold px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 rounded-lg lg:rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-sky-500/25 text-sm sm:text-base touch-target"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ touchAction: 'manipulation' }}
          >
            <i className="fas fa-envelope"></i> {t('contact.sendEmail')}
          </motion.a>
          <motion.a
            href="https://wa.me/51974361728"
            target="_blank"
            className="mobile-btn font-semibold px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-lg lg:rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-green-500/25 text-sm sm:text-base touch-target"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ touchAction: 'manipulation' }}
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-xs sm:text-sm text-zinc-400">
          <span>✅ {t('contact.response')}</span>
          <span className="hidden sm:inline">•</span>
          <span>💬 {t('contact.consultation')}</span>
        </div>
      </motion.div>

      {/* Additional Contact Info */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-zinc-400 text-sm mb-4">
          {t('contact.additionalText')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <i className="fas fa-clock text-blue-400"></i>
            {t('contact.responseTime')}
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-shield-alt text-green-400"></i>
            {t('contact.freeConsultation')}
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-rocket text-purple-400"></i>
            {t('contact.callToAction')}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact