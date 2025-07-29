import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../../../components/Title';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation(['translation']);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Kefyto E-commerce",
      description: "Plataforma completa de e-commerce para venta de kefir con sistema de pagos integrado",
      category: "ecommerce",
      tech: ["React", "Flask", "PostgreSQL", "MercadoPago"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://kefyto.com",
      githubUrl: "#",
      status: "live",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Hazuki Restaurant",
      description: "Sistema de gestión completo para restaurante con reservas, menús dinámicos y panel administrativo",
      category: "web",
      tech: ["WordPress", "Python", "FastAPI", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://hazuki.cl",
      githubUrl: "#",
      status: "live",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      id: 3,
      title: "Netmuz Social",
      description: "Red social especializada para músicos y creadores de contenido con streaming en tiempo real",
      category: "social",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      liveUrl: "https://netmuz.com",
      githubUrl: "#",
      status: "development",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "SaaS Educativo",
      description: "Plataforma educativa con gestión de cursos, seguimiento de progreso y sistema de certificaciones",
      category: "saas",
      tech: ["React", "Python", "Django", "Redis"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      status: "development",
      gradient: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: 'fas fa-th-large' },
    { id: 'ecommerce', name: 'E-commerce', icon: 'fas fa-shopping-cart' },
    { id: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
    { id: 'social', name: 'Social', icon: 'fas fa-users' },
    { id: 'saas', name: 'SaaS', icon: 'fas fa-cloud' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProject = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className='grid gap-16 relative'>
      <Title title={t('projects.title')} />
      
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-800/50 text-zinc-400 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={category.icon}></i>
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)"
              }}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Project Image/Preview */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  <div className={`w-2 h-2 rounded-full inline-block mr-2 ${
                    project.status === 'live' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'
                  }`} />
                  {project.status === 'live' ? 'En línea' : 'En desarrollo'}
                </div>

                {/* Project Icon/Logo Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <i className="fas fa-rocket text-2xl text-white/70"></i>
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 text-cyan-400 text-xs rounded-full border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.button
                    onClick={() => openProject(project.liveUrl)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={project.liveUrl === '#'}
                  >
                    <i className="fas fa-external-link-alt text-sm"></i>
                    Ver Proyecto
                  </motion.button>
                  
                  <motion.button
                    onClick={() => openProject(project.githubUrl)}
                    className="px-4 py-2 bg-slate-800/50 text-zinc-300 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={project.githubUrl === '#'}
                  >
                    <i className="fab fa-github text-lg"></i>
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-zinc-400 mb-6">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
        </p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <i className="fas fa-paper-plane mr-2"></i>
          Iniciar Proyecto
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Projects;