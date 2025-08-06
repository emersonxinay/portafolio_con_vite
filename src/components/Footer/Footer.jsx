import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/emersonespinoza',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/emersonespinoza',
      icon: '🐱',
      color: 'hover:text-gray-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/51987654321',
      icon: '📱',
      color: 'hover:text-green-400'
    },
    {
      name: 'Email',
      url: 'mailto:emerson@emersonespinoza.com',
      icon: '📧',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: t('footer.quickLinks.home'), href: '#hero' },
    { name: t('footer.quickLinks.blog'), href: '#blog' },
    { name: t('footer.quickLinks.tools'), href: '#tools' },
    { name: t('footer.quickLinks.docs'), href: '#docs' }
  ];

  const services = t('footer.services.items', { returnObjects: true });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-slate-800 w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-green-900/5" />

      <div className="relative mobile-container w-full">
        {/* Main Footer Content */}
        <div className="py-12 xs:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl xs:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Emerson Espinoza
              </h3>
              <p className="text-xs xs:text-sm text-gray-500 mb-3 xs:mb-4">
                {t('footer.subtitle')}
              </p>
              <p className="text-xs xs:text-sm text-gray-400 mb-3 xs:mb-4 leading-relaxed line-clamp-3 xs:line-clamp-none">
                {t('footer.description')}
              </p>

              {/* Availability Badge */}
              <div className="inline-flex items-center px-2 xs:px-3 py-1 rounded-full text-xxs xs:text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 mb-4 xs:mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {t('footer.availabilityBadge')}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 xs:space-y-3">
                <div className="flex items-center text-gray-400 text-xs xs:text-sm">
                  <span className="mr-3">📧</span>
                  <a href="mailto:emerson@emersonespinoza.com" className="hover:text-white transition-colors">
                    emerson@emersonespinoza.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📱</span>
                  <a href="https://wa.me/51987654321" className="hover:text-white transition-colors">
                    +51 974361728
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📍</span>
                  <span>Lima, Perú</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-base xs:text-lg font-semibold text-white mb-4 xs:mb-6">{t('footer.quickLinks.title')}</h4>
              <ul className="space-y-2 xs:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left text-xs xs:text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-base xs:text-lg font-semibold text-white mb-4 xs:mb-6">{t('footer.services.title')}</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links & CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-base xs:text-lg font-semibold text-white mb-2">{t('footer.contact.readyTitle')}</h4>
              <p className="text-gray-400 text-xs xs:text-sm mb-4 xs:mb-6">{t('footer.contact.readySubtitle')}</p>

              {/* Social Icons */}
              <div className="flex space-x-3 xs:space-x-4 mb-4 xs:mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 xs:w-12 xs:h-12 bg-slate-800 rounded-lg xs:rounded-xl flex items-center justify-center text-lg xs:text-xl transition-all duration-300 ${social.color} hover:scale-110 hover:bg-slate-700`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full px-4 xs:px-6 py-2.5 xs:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm xs:text-base rounded-lg xs:rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('footer.contact.contactButton')}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 xs:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 xs:gap-6">
            <div className="text-center md:text-left">
              <motion.p
                className="text-gray-400 text-sm mb-2 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                © 2024 Emerson Espinoza. {t('footer.copyright')}
              </motion.p>
              <motion.p
                className="text-gray-500 text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('footer.madeWith')} ❤️ {t('footer.and')} ☕
              </motion.p>
            </div>

            <motion.div
              className="flex space-x-4 xs:space-x-6 text-xs xs:text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</span>
              <span className="hover:text-white transition-colors cursor-pointer">Términos de Servicio</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;