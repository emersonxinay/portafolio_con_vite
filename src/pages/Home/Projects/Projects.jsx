import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../../../components/Title';
import { useTranslation } from 'react-i18next';
import { projectsData, projectCategories, openProject, getProjectsByCategory } from '../../../data/projectsData';

const Projects = () => {
  const { t } = useTranslation(['translation']);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');


  const categories = projectCategories;

  const filteredProjects = getProjectsByCategory(selectedCategory);


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
    <div className='mobile-section grid gap-12 xs:gap-16 relative w-full overflow-hidden'>
      <Title title={t('projects.title')} />
      
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`mobile-btn px-3 xs:px-4 sm:px-6 py-2 xs:py-3 rounded-xl xs:rounded-2xl font-medium transition-all duration-300 flex items-center gap-1 xs:gap-2 text-sm xs:text-base ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white mobile-shadow shadow-cyan-500/25'
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
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6"
          key={selectedCategory}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl xs:rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Project Image/Preview */}
              <div className="relative h-36 xxs:h-40 xs:h-44 sm:h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden rounded-t-2xl xs:rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                
                {/* Fallback cuando no carga la imagen */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <i className="fas fa-rocket text-2xl text-white/70"></i>
                    </motion.div>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-2 xxs:top-3 xs:top-4 right-2 xxs:right-3 xs:right-4 px-2 xxs:px-3 py-0.5 xxs:py-1 rounded-full text-[10px] xxs:text-xs font-medium ${
                  project.status === 'live' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  <div className={`w-1.5 xxs:w-2 h-1.5 xxs:h-2 rounded-full inline-block mr-1 xxs:mr-2 ${
                    project.status === 'live' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'
                  }`} />
                  {project.status === 'live' ? t('projectsPage.status.live') : t('projectsPage.status.development')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 xxs:p-4 xs:p-5 sm:p-6 space-y-2 xxs:space-y-3 xs:space-y-4">
                <div>
                  <h3 className="text-base xxs:text-lg xs:text-xl font-bold text-white mb-1 xxs:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 leading-tight">
                    {t(project.title)}
                  </h3>
                  <p className="text-zinc-400 text-xs xxs:text-sm xs:text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 line-clamp-3">
                    {t(project.description)}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs xxs:text-sm font-semibold text-zinc-300 mb-1 xxs:mb-2 xs:mb-3">
                    {t('projects.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-1 xxs:gap-1.5 xs:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-1.5 xxs:px-2 xs:px-3 py-0.5 xxs:py-1 bg-slate-800/50 border border-slate-600/30 rounded-md xs:rounded-lg text-[10px] xxs:text-xs text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 mobile-shadow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1.5 xxs:gap-2 xs:gap-3 pt-2 xxs:pt-3 xs:pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 xxs:px-3 xs:px-4 py-1.5 xxs:py-2 xs:py-2.5 rounded-md xxs:rounded-lg xs:rounded-xl font-medium flex items-center justify-center gap-1 xxs:gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-xs xxs:text-sm xs:text-base no-underline"
                  >
                    <i className="fas fa-external-link-alt text-xs xxs:text-sm"></i>
                    Ver Proyecto
                  </a>
                  
                  <a
                    href={project.githubUrl !== '#' ? project.githubUrl : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2 xxs:px-3 xs:px-4 py-1.5 xxs:py-2 xs:py-2.5 bg-slate-800/50 text-zinc-300 rounded-md xxs:rounded-lg xs:rounded-xl border border-slate-700/50 hover:border-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center text-xs xxs:text-sm xs:text-base no-underline ${project.githubUrl === '#' ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    <i className="fab fa-github text-sm xxs:text-base xs:text-lg"></i>
                  </a>
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
            </div>
          ))}
        </div>
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-zinc-400 text-sm xs:text-base mb-4 xs:mb-6">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
        </p>
        <motion.button
          className="px-6 xs:px-8 py-2 xs:py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl xs:rounded-2xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm xs:text-base"
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