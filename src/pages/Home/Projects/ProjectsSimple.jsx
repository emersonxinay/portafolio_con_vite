import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../../components/SectionHeader';
import AnimatedSection from '../../../components/AnimatedSection';
import OptimizedImage from '../../../components/OptimizedImage';
import { projectsData, projectCategories } from '../../../data/projectsData';

// Memoized Project Card Component
const ProjectCard = React.memo(({ project, index, hoveredProject, setHoveredProject, t }) => {
  return (
    <motion.div
      key={project.id}
      className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-accent/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      whileHover={{ y: -8, boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Project Image */}
      <div className="relative h-48 xs:h-56 md:h-64 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
            objectFit="cover"
            objectPosition="top"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-500" />

        {/* Status Badge - Refined */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border ${project.status === 'live'
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
            : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'live' ? 'bg-emerald-400' : 'bg-amber-400'
              }`} />
            <span className="text-xs font-medium uppercase tracking-wide">
              {project.status === 'live' ? 'Live' : 'Dev'}
            </span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 md:p-8 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Client Info (Conditional) */}
        {project.clientInfo && (
          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 text-xs space-y-1">
            <div className="flex justify-between text-slate-400">
              <span>Cliente:</span>
              <span className="text-slate-200 font-medium">{project.clientInfo.name}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>RUC:</span>
              <span className="font-mono">{project.clientInfo.ruc}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Ubicación:</span>
              <span>{project.clientInfo.location}</span>
            </div>
          </div>
        )}

        {/* Tech Stack - Minimalist */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-700/30 border border-slate-600/30 rounded-md text-xs text-slate-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-slate-700/50">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white hover:text-accent flex items-center gap-2 transition-colors duration-300 no-underline"
          >
            {t('projects.viewProject')}
            <i className="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform"></i>
          </a>

          {project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsSimple = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <AnimatedSection id="projects" className="py-24 relative">
      <SectionHeader
        badge="Selected Work"
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      {/* Filter Categories */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projectCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
              ? 'bg-white text-primary-dark shadow-lg shadow-white/5'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              t={t}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Call to Action - Integrated */}
      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-slate-400 mb-6">Interested in seeing more?</p>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-3 border border-slate-700 rounded-full text-white hover:bg-slate-800 transition-all duration-300 group"
        >
          <span>Start a Conversation</span>
          <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
        </button>
      </motion.div>
    </AnimatedSection>
  );
};

export default ProjectsSimple;
