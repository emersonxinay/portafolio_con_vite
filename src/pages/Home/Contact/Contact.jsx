import Title from '../../../components/Title'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useContactForm } from '../../../hooks/useContactForm'
import { Toaster } from 'react-hot-toast'

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
    <div id='contact' className='mobile-section grid gap-6 xs:gap-8 sm:gap-12 lg:gap-16 pb-12 xs:pb-16 sm:pb-24 lg:pb-32 safe-area-bottom w-full overflow-hidden'>
      <Toaster position="top-center" />
      <Title title={t('contact.title')}></Title>


      {/* Contact Form with EmailJS */}
      <motion.div
        className="mobile-card bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <i className="fas fa-envelope text-white text-xl"></i>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t('contactForm.title')}
            </h3>
          </div>
          <p className="text-zinc-400 text-sm md:text-base">
            {t('contactForm.subtitle')}
          </p>
        </motion.div>

        {/* Email Limit Indicator */}
        <motion.div
          className={`mb-6 p-4 rounded-lg border transition-all duration-300 ${emailLimit.canSend
              ? 'bg-blue-900/20 border-blue-500/30 shadow-blue-500/10'
              : 'bg-red-900/20 border-red-500/30 shadow-red-500/10'
            }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${emailLimit.canSend ? 'bg-blue-500/20' : 'bg-red-500/20'
                }`}
              animate={!emailLimit.canSend ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className={`text-lg ${emailLimit.canSend ? 'fas fa-info-circle text-blue-400' : 'fas fa-exclamation-triangle text-red-400'
                }`}></i>
            </motion.div>
            <span className={`font-semibold ${emailLimit.statusColor}`}>
              {emailLimit.canSend ? t('contactForm.formStatus') : t('contactForm.buttons.limitReached')}
            </span>
          </div>
          <p className={`text-sm ${emailLimit.statusColor} ml-13`}>
            {emailLimit.statusMessage}
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
              <i className="fas fa-user mr-2 text-blue-400"></i>
              {t('contactForm.labels.fullName')}
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.name ? 'border-red-500 shadow-red-500/20' : 'border-slate-600 focus:border-blue-500 focus:shadow-blue-500/20'
                } rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
              placeholder={t('contactForm.placeholders.fullName')}
              disabled={!emailLimit.canSend}
              whileFocus={{ scale: 1.01 }}
            />
            {errors.name && (
              <motion.p
                className="mt-2 text-sm text-red-400 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i>
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
              <i className="fas fa-envelope mr-2 text-purple-400"></i>
              {t('contactForm.labels.email')}
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.email ? 'border-red-500 shadow-red-500/20' : 'border-slate-600 focus:border-purple-500 focus:shadow-purple-500/20'
                } rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
              placeholder={t('contactForm.placeholders.email')}
              disabled={!emailLimit.canSend}
              whileFocus={{ scale: 1.01 }}
            />
            {errors.email && (
              <motion.p
                className="mt-2 text-sm text-red-400 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i>
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* Phone Field (Optional) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
              <i className="fas fa-phone mr-2 text-green-400"></i>
              {t('contactForm.labels.phone')}
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 focus:border-green-500 focus:shadow-green-500/20 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
              placeholder={t('contactForm.placeholders.phone')}
              disabled={!emailLimit.canSend}
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
              <i className="fas fa-tag mr-2 text-cyan-400"></i>
              {t('contactForm.labels.subject')}
            </label>
            <motion.input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.subject ? 'border-red-500 shadow-red-500/20' : 'border-slate-600 focus:border-cyan-500 focus:shadow-cyan-500/20'
                } rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
              placeholder={t('contactForm.placeholders.subject')}
              disabled={!emailLimit.canSend}
              whileFocus={{ scale: 1.01 }}
            />
            {errors.subject && (
              <motion.p
                className="mt-2 text-sm text-red-400 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i>
                {errors.subject}
              </motion.p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
              <i className="fas fa-comment-dots mr-2 text-indigo-400"></i>
              {t('contactForm.labels.message')}
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 bg-slate-800/50 border ${errors.message ? 'border-red-500 shadow-red-500/20' : 'border-slate-600 focus:border-indigo-500 focus:shadow-indigo-500/20'
                } rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none`}
              placeholder={t('contactForm.placeholders.message')}
              disabled={!emailLimit.canSend}
              whileFocus={{ scale: 1.01 }}
            />
            {errors.message && (
              <motion.p
                className="mt-2 text-sm text-red-400 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i className="fas fa-exclamation-circle"></i>
                {errors.message}
              </motion.p>
            )}
            <p className="mt-2 text-xs text-zinc-500 flex items-center gap-1">
              <i className="fas fa-info-circle"></i>
              {t('contactForm.helpers.minCharacters')}
            </p>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.button
              type="submit"
              disabled={loading || !emailLimit.canSend}
              className={`w-full py-4 rounded-lg font-semibold text-white text-base md:text-lg transition-all duration-300 shadow-lg ${loading || !emailLimit.canSend
                  ? 'bg-slate-700 cursor-not-allowed opacity-60'
                  : 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 hover:shadow-2xl hover:shadow-purple-500/50'
                }`}
              whileHover={!loading && emailLimit.canSend ? {
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              } : {}}
              whileTap={!loading && emailLimit.canSend ? { scale: 0.98 } : {}}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-spinner fa-spin"></i>
                  {t('contactForm.buttons.sending')}
                </span>
              ) : !emailLimit.canSend ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-ban"></i>
                  {t('contactForm.buttons.limitReached')}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-paper-plane"></i>
                  {t('contactForm.buttons.send')}
                </span>
              )}
            </motion.button>

            <motion.p
              className="text-xs text-center text-zinc-500 mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <i className="fas fa-shield-alt text-green-400"></i>
              {t('contactForm.privacy')}
            </motion.p>
          </motion.div>
        </form>
      </motion.div>

      {/* Additional Contact Info */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-zinc-400 text-xs xs:text-sm mb-3 xs:mb-4">
          {t('contact.additionalText')}
        </p>
        <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 text-[10px] xs:text-xs text-zinc-500">
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