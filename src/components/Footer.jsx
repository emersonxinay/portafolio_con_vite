import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaCode,
  FaRocket
} from 'react-icons/fa'
import { 
  SiDiscord
} from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-400/10'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/10'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-400/10'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/@yourusername',
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/10'
    },
    {
      name: 'Discord',
      icon: SiDiscord,
      url: 'https://discord.gg/yourusername',
      color: 'hover:text-indigo-500',
      bgColor: 'hover:bg-indigo-500/10'
    }
  ]

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'emerson@example.com',
      href: 'mailto:emerson@example.com',
      color: 'text-blue-400'
    },
    {
      icon: FaWhatsapp,
      text: '+1 (555) 123-4567',
      href: 'https://wa.me/15551234567',
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA',
      color: 'text-red-400'
    }
  ]

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Herramientas', href: '/tools' },
    { name: 'Documentación', href: '/docs' }
  ]

  const services = [
    'Desarrollo Full-Stack',
    'Arquitectura de Software',
    'Consultoría Tech',
    'Mentoring & Training'
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.footer 
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 xs:w-[500px] xs:h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          style={{ top: '-20%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 xs:w-80 xs:h-80 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          style={{ bottom: '-15%', right: '-5%' }}
        />
      </div>

      <div className="mobile-container relative z-10 pt-12 xs:pt-16 md:pt-20 pb-6 xs:pb-8 md:pb-10">
        {/* Main Footer Content */}
        <div className="mobile-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 md:gap-12 mb-8 xs:mb-12 md:mb-16">
          
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2 space-y-4 xs:space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 xs:gap-4">
              <motion.div 
                className="p-2 xs:p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl xs:rounded-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaCode className="text-xl xs:text-2xl md:text-3xl text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl xs:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  Emerson Espinoza
                </h3>
                <p className="text-xs xs:text-sm text-zinc-400 font-medium">
                  Full-Stack Developer & Tech Architect
                </p>
              </div>
            </div>
            
            <p className="text-zinc-300 text-sm xs:text-base leading-relaxed max-w-md">
              Especialista en desarrollo web moderno, arquitecturas escalables y tecnologías enterprise. 
              Construyendo el futuro digital con código limpio y soluciones innovadoras.
            </p>

            {/* Enterprise Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 xs:px-4 py-2 xs:py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl xs:rounded-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="text-green-400 text-sm xs:text-base" />
              <span className="text-green-400 font-bold text-xs xs:text-sm">
                🚀 Disponible para proyectos enterprise
              </span>
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 xs:gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mobile-btn p-2 xs:p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg xs:rounded-xl text-zinc-400 transition-all duration-300 ${social.color} ${social.bgColor} hover:border-current touch-target`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconComponent className="text-xs xs:text-sm" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg xs:text-xl font-bold text-white mb-4 xs:mb-6 flex items-center gap-2">
              <div className="w-1 h-6 xs:h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 xs:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={link.href}
                    className="text-zinc-400 hover:text-blue-400 transition-colors duration-300 text-sm xs:text-base flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg xs:text-xl font-bold text-white mb-4 xs:mb-6 flex items-center gap-2">
              <div className="w-1 h-6 xs:h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
              Servicios
            </h4>
            <ul className="space-y-2 xs:space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  className="text-zinc-400 text-sm xs:text-base flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div 
          className="mobile-card bg-gradient-to-r from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 md:p-8 mb-6 xs:mb-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 xs:gap-6">
            <div className="flex items-center gap-2 xs:gap-3">
              <motion.div 
                className="p-2 xs:p-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaEnvelope className="text-white text-sm xs:text-base" />
              </motion.div>
              <div>
                <p className="text-white font-bold text-sm xs:text-base">¿Listo para colaborar?</p>
                <p className="text-zinc-400 text-xs xs:text-sm">Construyamos algo increíble juntos</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-4">
              {contactInfo.map((contact, contactIndex) => {
                const IconComponent = contact.icon
                return (
                  <motion.a
                    key={contactIndex}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mobile-btn flex items-center gap-2 xs:gap-3 px-3 xs:px-4 py-2 xs:py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-xl xs:rounded-2xl text-zinc-300 hover:text-white transition-all duration-300 hover:border-current touch-target text-xs xs:text-sm`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className={`${contact.color} text-sm xs:text-base`} />
                    <span className="hidden xs:inline">{contact.text}</span>
                    <span className="xs:hidden">
                      {contact.text.includes('@') ? 'Email' : 
                       contact.text.includes('+') ? 'WhatsApp' : 'Ubicación'}
                    </span>
                  </motion.a>
                )
              })}
              
              {/* Contact Modal Trigger Button */}
              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                className="mobile-btn flex items-center gap-2 xs:gap-3 px-4 xs:px-6 py-2.5 xs:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl xs:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 touch-target text-xs xs:text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-sm xs:text-base" />
                <span>Contactar</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col xs:flex-row items-center justify-between gap-3 xs:gap-0 pt-6 xs:pt-8 border-t border-slate-800/50"
          variants={itemVariants}
        >
          <div className="flex flex-col xs:flex-row items-center gap-1 xs:gap-2 text-zinc-400 text-xs xs:text-sm text-center xs:text-left">
            <span>© 2018 - {currentYear} Emerson Espinoza.</span>
            <span>Todos los derechos reservados.</span>
          </div>
          
          <motion.div 
            className="flex items-center gap-1.5 xs:gap-2 text-zinc-400 text-xs xs:text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span>Hecho con</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f97316', '#ef4444']
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>y mucho</span>
            <FaCode className="text-blue-400" />
            <span className="hidden xs:inline">en San Francisco</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </motion.footer>
  )
}

export default Footer