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
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Desarrollo Web',
    'E-commerce',
    'Automatización IA',
    'Sistemas Empresariales',
    'DevOps & Cloud',
    'Capacitación Técnica'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-green-900/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Emerson Espinoza
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Desarrollador Full Stack especializado en crear soluciones tecnológicas que impulsan el crecimiento empresarial.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📧</span>
                  <a href="mailto:emerson@emersonespinoza.com" className="hover:text-white transition-colors">
                    emerson@emersonespinoza.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📱</span>
                  <a href="https://wa.me/51987654321" className="hover:text-white transition-colors">
                    +51 987 654 321
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
              <h4 className="text-lg font-semibold text-white mb-6">Navegación</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
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
              <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
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
              <h4 className="text-lg font-semibold text-white mb-6">Conecta Conmigo</h4>
              
              {/* Social Icons */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:scale-110 hover:bg-slate-700`}
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
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar Proyecto
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2024 Emerson Espinoza. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              className="flex space-x-6 text-sm text-gray-400"
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