import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useContactForm } from '../../../hooks/useContactForm'
import { Toaster } from 'react-hot-toast'
import SectionHeader from '../../../components/SectionHeader'

const Contact = () => {
  const { t } = useTranslation(['translation'])
  const {
    formData,
    loading,
    errors,
    handleChange,
    handleSubmit,
    emailLimit
  } = useContactForm()

  return (
    <section id='contact' className='py-24 w-full relative overflow-hidden'>
      <Toaster position="top-center" />

      <SectionHeader
        icon="fas fa-envelope"
        title={t('contact.title')}
        subtitle={t('contactForm.subtitle')}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Contact Form Card */}
        <motion.div
          className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Email Limit Warning - Refined */}
          {!emailLimit.canSend && (
            <motion.div
              className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 flex items-start gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <i className="fas fa-exclamation-triangle text-red-400 mt-1"></i>
              <div>
                <h4 className="font-semibold text-red-400 mb-1">{t('contactForm.buttons.limitReached')}</h4>
                <p className="text-sm opacity-80">{emailLimit.statusMessage}</p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  {t('contactForm.labels.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-700 focus:border-accent'} rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all duration-300`}
                  placeholder="John Doe"
                  disabled={!emailLimit.canSend}
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  {t('contactForm.labels.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700 focus:border-accent'} rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all duration-300`}
                  placeholder="john@example.com"
                  disabled={!emailLimit.canSend}
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">
                {t('contactForm.labels.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.subject ? 'border-red-500/50' : 'border-slate-700 focus:border-accent'} rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all duration-300`}
                placeholder={t('contactForm.placeholders.subject')}
                disabled={!emailLimit.canSend}
              />
              {errors.subject && <p className="mt-2 text-xs text-red-400">{errors.subject}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                {t('contactForm.labels.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-700 focus:border-accent'} rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all duration-300 resize-none`}
                placeholder={t('contactForm.placeholders.message')}
                disabled={!emailLimit.canSend}
              />
              {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading || !emailLimit.canSend}
              className={`w-full py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-300 ${loading || !emailLimit.canSend
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-white text-slate-900 hover:bg-slate-200 shadow-lg shadow-white/5'
                }`}
              whileHover={!loading && emailLimit.canSend ? { scale: 1.01 } : {}}
              whileTap={!loading && emailLimit.canSend ? { scale: 0.99 } : {}}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-spinner fa-spin"></i>
                  {t('contactForm.buttons.sending')}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {t('contactForm.buttons.send')}
                  <i className="fas fa-paper-plane"></i>
                </span>
              )}
            </motion.button>

            <p className="text-xs text-center text-slate-500 mt-4">
              <i className="fas fa-shield-alt text-slate-400 mr-2"></i>
              {t('contactForm.privacy')}
            </p>
          </form>
        </motion.div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: 'fas fa-map-marker-alt', title: 'Location', text: 'Lima, Peru' },
            { icon: 'fas fa-envelope', title: 'Email', text: 'emerson@aguila.dev' },
            { icon: 'fas fa-clock', title: 'Response Time', text: '< 24 Hours' },
            { icon: 'fas fa-globe', title: 'Availability', text: 'Remote / Global' }
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-800/20 border border-slate-800">
              <i className={`${item.icon} text-xl text-slate-400 mb-2`}></i>
              <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact