import { useState } from 'react';
import Title from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Font Awesome icons are now loaded globally via CDN

const Architecture = () => {
  const { t } = useTranslation(['translation']);
  const [selectedArchitecture, setSelectedArchitecture] = useState('ecommerce');

  const architectures = {
    ecommerce: {
      title: 'E-commerce Kefyto',
      description: 'Plataforma de venta de kefir con integración de pagos',
      components: [
        { name: 'Frontend React', tech: 'React + Vite', color: 'from-blue-500 to-cyan-600', icon: 'fas fa-code' },
        { name: 'API Backend', tech: 'Flask Python', color: 'from-green-500 to-emerald-600', icon: 'fas fa-server' },
        { name: 'Base de Datos', tech: 'PostgreSQL', color: 'from-indigo-500 to-blue-600', icon: 'fas fa-database' },
        { name: 'Pagos', tech: 'MercadoPago', color: 'from-yellow-500 to-orange-600', icon: 'fas fa-shield-alt' },
        { name: 'Autenticación', tech: 'JWT + Flask', color: 'from-purple-500 to-pink-600', icon: 'fas fa-shield-alt' },
        { name: 'Deployment', tech: 'VPS + Nginx', color: 'from-teal-500 to-green-600', icon: 'fas fa-server' },
        { name: 'Storage', tech: 'Cloudinary', color: 'from-orange-500 to-red-600', icon: 'fas fa-cloud' },
        { name: 'Email', tech: 'SMTP Flask', color: 'from-red-500 to-pink-600', icon: 'fas fa-network-wired' }
      ]
    },
    restaurant: {
      title: 'Sistema Hazuki Restaurant',
      description: 'Gestión completa de restaurante con reservas y menús',
      components: [
        { name: 'Frontend', tech: 'JavaScript, HTML, CSS, Tailwindcss', color: 'from-blue-500 to-cyan-600', icon: 'fas fa-code' },
        { name: 'Backend API', tech: 'Python + FastAPI', color: 'from-green-500 to-emerald-600', icon: 'fas fa-server' },
        { name: 'Base de Datos', tech: 'PostgreSQL', color: 'from-indigo-500 to-blue-600', icon: 'fas fa-database' },
        { name: 'Reservas', tech: 'Custom System', color: 'from-purple-500 to-pink-600', icon: 'fas fa-chart-bar' },
        { name: 'Menús', tech: 'Dynamic CMS', color: 'from-yellow-500 to-orange-600', icon: 'fas fa-database' },
        { name: 'Admin Panel', tech: 'Custom Dashboard', color: 'from-orange-500 to-red-600', icon: 'fas fa-microchip' },
        { name: 'Hosting', tech: 'VPS + Docker', color: 'from-teal-500 to-green-600', icon: 'fab fa-docker' },
        { name: 'CDN', tech: 'Static Assets', color: 'from-red-500 to-pink-600', icon: 'fas fa-cloud' }
      ]
    },
    social: {
      title: 'Red Social Netmuz',
      description: 'Plataforma social para músicos y creadores',
      components: [
        { name: 'Frontend SPA', tech: 'React + Redux', color: 'from-blue-500 to-cyan-600', icon: 'fas fa-code' },
        { name: 'API REST', tech: 'Express.js', color: 'from-green-500 to-emerald-600', icon: 'fas fa-server' },
        { name: 'Base de Datos', tech: 'PostgreSQL', color: 'from-indigo-500 to-blue-600', icon: 'fas fa-database' },
        { name: 'Real-time', tech: 'Socket.io', color: 'from-purple-500 to-pink-600', icon: 'fas fa-network-wired' },
        { name: 'File Upload', tech: 'Multer + AWS', color: 'from-yellow-500 to-orange-600', icon: 'fas fa-cloud' },
        { name: 'Auth System', tech: 'Passport.js', color: 'from-orange-500 to-red-600', icon: 'fas fa-shield-alt' },
        { name: 'Media Storage', tech: 'S3 Compatible', color: 'from-teal-500 to-green-600', icon: 'fas fa-database' },
        { name: 'Deployment', tech: 'Docker + VPS', color: 'from-red-500 to-pink-600', icon: 'fab fa-docker' }
      ]
    }
  };

  const ArchitectureCard = ({ arch, isSelected, onClick }) => (
    <motion.div
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'bg-gradient-to-br from-sky-900/40 to-blue-900/40 border-2 border-sky-500/50 shadow-lg shadow-sky-500/20' 
          : 'bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-slate-700/50 hover:border-sky-500/30'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className='text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500'>
        {arch.title}
      </h3>
      <p className='text-zinc-400 text-sm'>{arch.description}</p>
    </motion.div>
  );

  return (
    <div className='grid gap-16 relative'>
      <Title title="Arquitecturas de Sistema" />
      
      {/* Selector de Arquitectura */}
      <div className='grid md:grid-cols-3 gap-6'>
        {Object.entries(architectures).map(([key, arch]) => (
          <ArchitectureCard
            key={key}
            arch={arch}
            isSelected={selectedArchitecture === key}
            onClick={() => setSelectedArchitecture(key)}
          />
        ))}
      </div>

      {/* Diagrama de Arquitectura */}
      <motion.div 
        className='bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8'
        key={selectedArchitecture}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600'>
          {architectures[selectedArchitecture].title}
        </h3>
        
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {architectures[selectedArchitecture].components.map((component, index) => (
            <motion.div
              key={component.name}
              className={`p-4 rounded-xl bg-gradient-to-br ${component.color} bg-opacity-20 border border-white/10 text-center group hover:scale-105 transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <i className={`${component.icon} text-3xl mx-auto mb-3 text-white group-hover:scale-110 transition-transform block`}></i>
              <h4 className='font-semibold text-white mb-1'>{component.name}</h4>
              <p className='text-xs text-zinc-300 opacity-80'>{component.tech}</p>
            </motion.div>
          ))}
        </div>

        {/* Métricas Reales */}
        <div className='mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30'>
          <h4 className='text-lg font-semibold mb-4 text-center text-sky-400'>Tecnologías Implementadas</h4>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-green-400'>6+</div>
              <div className='text-xs text-zinc-400'>Años Experiencia</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-blue-400'>50+</div>
              <div className='text-xs text-zinc-400'>Proyectos</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-purple-400'>3</div>
              <div className='text-xs text-zinc-400'>Países</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-orange-400'>100%</div>
              <div className='text-xs text-zinc-400'>Proyectos Entregados</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Architecture;