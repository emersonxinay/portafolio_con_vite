import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/Title';
import { motion } from 'framer-motion';
// Font Awesome icons are now loaded globally via CDN

const Services = () => {
  const { t } = useTranslation(['translation']);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'web-platforms',
      title: 'Plataformas Web a Medida',
      description: 'Desarrollo completo de aplicaciones web personalizadas',
      icon: 'fas fa-code',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      borderColor: 'border-cyan-500/30',
      features: [
        'React + Vite para frontend moderno',
        'Flask/FastAPI para backend robusto',
        'PostgreSQL para bases de datos escalables',
        'Despliegue en VPS con Nginx'
      ],
      techIcons: ['fab fa-react', 'fas fa-flask', 'fas fa-database', 'fas fa-server']
    },
    {
      id: 'ecommerce',
      title: 'Tiendas Online Completas',
      description: 'E-commerce con carrito, gestión de stock y pagos',
      icon: 'fas fa-shopping-cart',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500/30',
      features: [
        'Carrito dinámico y checkout optimizado',
        'Integración con Stripe, Culqi, Yape',
        'Gestión de inventario en tiempo real',
        'Panel administrativo completo'
      ],
      techIcons: ['fas fa-shopping-cart', 'fab fa-stripe', 'fas fa-database', 'fas fa-server']
    },
    {
      id: 'automation',
      title: 'Automatización e IA',
      description: 'Bots inteligentes y automatización de procesos',
      icon: 'fas fa-robot',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500/30',
      features: [
        'Bots de WhatsApp para atención al cliente',
        'Integración con OpenAI y ChatGPT',
        'Automatización con n8n y Zapier',
        'IA conversacional con Rasa'
      ],
      techIcons: ['fas fa-robot', 'fab fa-whatsapp', 'fas fa-brain', 'fas fa-cogs']
    },
    {
      id: 'systems',
      title: 'Sistemas Administrativos',
      description: 'CRM, reservas, pedidos y gestión empresarial',
      icon: 'fas fa-cogs',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500/30',
      features: [
        'CRM personalizado para tu negocio',
        'Sistemas de reservas y citas',
        'Gestión de pedidos multi-canal',
        'Reportes y analytics en tiempo real'
      ],
      techIcons: ['fas fa-cogs', 'fas fa-server', 'fas fa-database', 'fas fa-code']
    },
    {
      id: 'deployment',
      title: 'Despliegue y Optimización',
      description: 'VPS, Docker, SSL y optimización de servidores',
      icon: 'fas fa-cloud',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-900/20 to-purple-900/20',
      borderColor: 'border-indigo-500/30',
      features: [
        'Configuración de VPS en DigitalOcean',
        'Contenedores Docker para escalabilidad',
        'SSL, CDN y optimización de performance',
        'Monitoreo y backups automatizados'
      ],
      techIcons: ['fas fa-cloud', 'fab fa-docker', 'fas fa-server', 'fas fa-server']
    },
    {
      id: 'training',
      title: 'Capacitación Técnica',
      description: 'Cursos, mentorías y documentación personalizada',
      icon: 'fas fa-graduation-cap',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-900/20 to-cyan-900/20',
      borderColor: 'border-teal-500/30',
      features: [
        'Cursos personalizados para equipos',
        'Mentorías 1:1 en desarrollo web',
        'Documentación técnica completa',
        'Workshops de tecnologías modernas'
      ],
      techIcons: ['fas fa-graduation-cap', 'fas fa-code', 'fas fa-brain', 'fas fa-cogs']
    }
  ];

  return (
    <div className="grid gap-16 relative">
      <Title title="Servicios Profesionales" />
      
      <p className="text-center text-zinc-400 max-w-3xl mx-auto">
        Como desarrollador fullstack independiente, ofrezco soluciones digitales completas 
        que ayudan a empresas y emprendedores a escalar sus operaciones y mejorar la experiencia de sus usuarios.
      </p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`p-6 rounded-2xl backdrop-blur-sm border ${service.borderColor} bg-gradient-to-br ${service.bgColor} hover:scale-105 transition-all duration-300 cursor-pointer ${
              activeService === index ? 'ring-2 ring-sky-400/50 shadow-lg shadow-sky-500/20' : ''
            }`}
            onHoverStart={() => setActiveService(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Service Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <div>
                <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400">{service.description}</p>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tech Icons */}
            <div className="flex gap-3 justify-center pt-4 border-t border-white/10">
              {service.techIcons.map((iconClass, idx) => (
                <i key={idx} className={`${iconClass} text-xl text-zinc-400 hover:text-white transition-colors`}></i>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 backdrop-blur-sm border border-sky-500/20 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          ¿Listo para digitalizar tu negocio?
        </h3>
        <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
          Trabajemos juntos para crear la solución digital que tu empresa necesita. 
          Desde la conceptualización hasta el despliegue, te acompaño en todo el proceso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="mailto:xinayespinoza@gmail.com"
            className="font-semibold px-8 py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-sky-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 xinayespinoza@gmail.com
          </motion.a>
          <motion.a
            href="https://wa.me/51974361728"
            target="_blank"
            className="font-semibold px-8 py-3 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg hover:shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className='fab fa-whatsapp'></i> WhatsApp Perú
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;