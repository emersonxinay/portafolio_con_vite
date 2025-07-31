import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, 
  FaEnvelope, 
  FaUser, 
  FaBuilding, 
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const budgetOptions = [
    { value: '', label: 'Selecciona tu presupuesto' },
    { value: '5k-15k', label: '$5,000 - $15,000 USD' },
    { value: '15k-30k', label: '$15,000 - $30,000 USD' },
    { value: '30k-50k', label: '$30,000 - $50,000 USD' },
    { value: '50k+', label: '$50,000+ USD' },
    { value: 'consulting', label: 'Consultoría/Mentoring' },
  ]

  const projectTypes = [
    'Desarrollo Web Full-Stack',
    'API & Backend Services',
    'Arquitectura de Software',
    'Consultoría Técnica',
    'Mentoring & Training',
    'Otro (especificar en mensaje)'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSuccess(true)
      toast.success('¡Mensaje enviado con éxito! Te contactaré pronto.')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          budget: ''
        })
        setIsSuccess(false)
        onClose()
      }, 3000)
      
    } catch (error) {
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.75,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.75,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="mobile-card bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl xs:rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 xs:p-6 md:p-8 border-b border-slate-700/50">
            <div>
              <h2 className="text-xl xs:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                ¡Trabajemos Juntos!
              </h2>
              <p className="text-zinc-400 text-sm xs:text-base mt-1">
                Cuéntame sobre tu proyecto y cómo puedo ayudarte
              </p>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 xs:p-3 text-zinc-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="text-lg xs:text-xl" />
            </motion.button>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl rounded-2xl xs:rounded-3xl flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="text-6xl xs:text-7xl text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl xs:text-3xl font-bold text-white mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-zinc-300 text-base xs:text-lg">
                    Gracias por contactarme. Te responderé dentro de 24 horas.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 xs:p-6 md:p-8 space-y-4 xs:space-y-6">
            {/* Personal Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2 xs:mb-3">
                  <FaUser className="inline mr-2 text-blue-400" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mobile-btn w-full px-4 xs:px-6 py-3 xs:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl xs:rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2 xs:mb-3">
                  <FaEnvelope className="inline mr-2 text-blue-400" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mobile-btn w-full px-4 xs:px-6 py-3 xs:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl xs:rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            {/* Company and Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2 xs:mb-3">
                  <FaBuilding className="inline mr-2 text-purple-400" />
                  Empresa/Proyecto
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mobile-btn w-full px-4 xs:px-6 py-3 xs:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl xs:rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-300"
                  placeholder="Nombre de tu empresa o proyecto"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2 xs:mb-3">
                  💰 Presupuesto Estimado
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="mobile-btn w-full px-4 xs:px-6 py-3 xs:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl xs:rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500/50 transition-all duration-300 cursor-pointer"
                >
                  {budgetOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-slate-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-bold text-white mb-2 xs:mb-3">
                🚀 Tipo de Proyecto *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="mobile-btn w-full px-4 xs:px-6 py-3 xs:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl xs:rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <option value="" className="bg-slate-800">Selecciona el tipo de proyecto</option>
                {projectTypes.map(type => (
                  <option key={type} value={type} className="bg-slate-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-white mb-2 xs:mb-3">
                💬 Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="mobile-btn w-full px-4 xs:px-6 py-3 xs:py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl xs:rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500/50 transition-all duration-300 resize-none"
                placeholder="Cuéntame sobre tu proyecto, objetivos, timeline, y cualquier detalle relevante..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="mobile-btn w-full px-6 xs:px-8 py-4 xs:py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl xs:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base xs:text-lg touch-target"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Enviando mensaje...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Enviar Mensaje
                </>
              )}
            </motion.button>

            {/* Contact Info */}
            <div className="pt-4 xs:pt-6 border-t border-slate-700/50 text-center">
              <p className="text-zinc-400 text-xs xs:text-sm mb-2">
                También puedes contactarme directamente:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 xs:gap-6 text-xs xs:text-sm">
                <a href="mailto:xinayespinoza@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  📧 xinayespinoza@gmail.com
                </a>
                <a href="https://wa.me/51974361728" className="text-green-400 hover:text-green-300 transition-colors">
                  📱 WhatsApp
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:text-blue-400 transition-colors">
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactModal