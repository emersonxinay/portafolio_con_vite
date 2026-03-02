import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
  FaCode
} from 'react-icons/fa'
import {
  SiDiscord
} from 'react-icons/si'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/emersonxinay',
      color: 'hover:text-white',
      bgColor: 'hover:bg-slate-700'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/emerson-espinoza-aguirre-aguirre',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-900/20'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/compilandocode',
      color: 'hover:text-sky-400',
      bgColor: 'hover:bg-sky-900/20'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/emersonxinay',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-900/20'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/@compilandocode',
      color: 'hover:text-red-400',
      bgColor: 'hover:bg-red-900/20'
    },
    {
      name: 'Discord',
      icon: SiDiscord,
      url: 'https://discord.gg/compilandocode',
      color: 'hover:text-indigo-400',
      bgColor: 'hover:bg-indigo-900/20'
    }
  ]

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'xinayespinoza@gmail.com',
      href: 'mailto:xinayespinoza@gmail.com',
      color: 'text-slate-400 group-hover:text-accent'
    },
    {
      icon: FaWhatsapp,
      text: '+51 974361728',
      href: 'https://wa.me/51974361728',
      color: 'text-slate-400 group-hover:text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Latam',
      href: 'https://maps.google.com/?q=Lima',
      color: 'text-slate-400 group-hover:text-red-400'
    }
  ]

  const quickLinks = [
    { name: t('oldFooter.quickLinks.home'), href: '/' },
    { name: t('oldFooter.quickLinks.blog'), href: '/blog' },
    { name: t('oldFooter.quickLinks.tools'), href: '/tools' },
    { name: t('oldFooter.quickLinks.docs'), href: '/docs' }
  ]

  const services = t('oldFooter.services', { returnObjects: true }) || [
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
      className="relative bg-slate-950 border-t border-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="mobile-container relative z-10 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="mobile-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="p-3 bg-slate-900 border border-slate-800 rounded-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <FaCode className="text-2xl text-accent" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Emerson Espinoza
                </h3>
                <p className="text-sm text-slate-400 font-medium">
                  Full-Stack Developer & Tech Architect
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {t('oldFooter.description')}
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 font-medium text-xs uppercase tracking-wide">
                {t('oldFooter.availability')}
              </span>
            </div>

            {/* Social Links */}
            <nav aria-label="Redes sociales" className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar perfil de ${social.name}`}
                    className={`p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 transition-all duration-300 ${social.color} ${social.bgColor} hover:border-slate-700`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconComponent className="text-sm" aria-hidden="true" />
                  </motion.a>
                )
              })}
            </nav>
          </motion.div>

          {/* Quick Links */}
          <motion.nav variants={itemVariants} aria-label="Enlaces rápidos">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-accent transition-colors duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.section variants={itemVariants} aria-labelledby="services-heading">
            <h4 id="services-heading" className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-slate-700 rounded-full"></span>
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  className="text-slate-400 text-sm flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-slate-800 rounded-xl">
                <FaEnvelope className="text-accent" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">¿Listo para colaborar?</p>
                <p className="text-slate-400 text-xs">Construyamos algo increíble juntos</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {contactInfo.map((contact, contactIndex) => {
                const IconComponent = contact.icon
                return (
                  <motion.a
                    key={contactIndex}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-slate-800 group`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className={`${contact.color} text-sm transition-colors`} aria-hidden="true" />
                    <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{contact.text}</span>
                  </motion.a>
                )
              })}

              <motion.button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 px-6 py-2 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-200 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                <span>Contactar</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/50"
          variants={itemVariants}
        >
          <div className="text-slate-500 text-xs text-center md:text-left">
            <span>© {currentYear} Emerson Espinoza. Todos los derechos reservados.</span>
          </div>

          <motion.div
            className="flex items-center gap-2 text-slate-500 text-xs"
            whileHover={{ scale: 1.05 }}
          >
            <span>Hecho con</span>
            <FaHeart className="text-red-500" />
            <span>y</span>
            <FaCode className="text-accent" />
          </motion.div>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.footer>
  )
}

export default Footer