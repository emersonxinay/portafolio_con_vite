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
      className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl xs:rounded-3xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative h-48 xs:h-56 md:h-64 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <OptimizedImage
            src={project.image}
            alt={t(`projects.items.${project.id}.title`)}
            className="w-full h-full"
            objectFit="cover"
            objectPosition="top"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full backdrop-blur-md border ${
            project.status === 'live'
              ? 'bg-green-500/20 border-green-500/30 text-green-400'
              : 'bg-orange-500/20 border-orange-500/30 text-orange-400'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              project.status === 'live' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'
            }`} />
            <span className="text-xs xs:text-sm font-semibold uppercase">
              {project.status === 'live' ? t('projectsPage.status.live') : t('projectsPage.status.development')}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 xs:px-4 py-1.5 xs:py-2 rounded-full backdrop-blur-md bg-slate-900/60 border border-slate-700/50 text-white">
            <i className={`${projectCategories.find(c => c.id === project.category)?.icon} mr-2 text-xs xs:text-sm`}></i>
            <span className="text-xs xs:text-sm font-medium">
              {projectCategories.find(c => c.id === project.category)?.name}
            </span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 xs:p-6 md:p-8 space-y-4 xs:space-y-5">
        {/* Title */}
        <div>
          <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-white mb-2 xs:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
            {t(`projects.items.${project.id}.title`)}
          </h3>
          <p className="text-zinc-400 text-sm xs:text-base leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
            {t(`projects.items.${project.id}.description`)}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-xs xs:text-sm font-semibold text-zinc-300 mb-2 xs:mb-3 uppercase tracking-wider">
            {t('projects.technologies')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 xs:px-3 py-1 xs:py-1.5 bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 rounded-lg text-xs xs:text-sm text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2 xs:pt-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 xs:px-6 py-2.5 xs:py-3 rounded-xl font-semibold text-sm xs:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300 no-underline"
          >
            <i className="fas fa-external-link-alt text-xs xs:text-sm"></i>
            {t('projects.viewProject')}
          </a>

          {project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xs:px-5 py-2.5 xs:py-3 bg-slate-800/50 text-zinc-300 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:text-white hover:bg-slate-700/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center no-underline"
            >
              <i className="fab fa-github text-base xs:text-lg"></i>
            </a>
          )}
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <AnimatePresence>
        {hoveredProject === project.id && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 pointer-events-none`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
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
    <AnimatedSection id="projects" className="mobile-section">
      <SectionHeader
        badge={t('portfolio')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      {/* Filter Categories */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 xs:gap-3 mb-8 xs:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projectCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 xs:px-6 py-2 xs:py-3 rounded-xl xs:rounded-2xl font-semibold text-sm xs:text-base transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-800/50 text-zinc-400 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`${category.icon} mr-2`}></i>
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8"
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

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12 xs:mt-16 md:mt-20 p-6 xs:p-8 md:p-10 rounded-2xl xs:rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-3 xs:mb-4">
          {t('projects.cta.title')}
        </h3>
        <p className="text-zinc-400 text-base xs:text-lg mb-6 xs:mb-8 max-w-2xl mx-auto">
          {t('projects.cta.description')}
        </p>
        <motion.button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 xs:gap-3 px-6 xs:px-8 md:px-10 py-3 xs:py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-xl xs:rounded-2xl font-bold text-base xs:text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-paper-plane"></i>
          {t('projects.startProject')}
        </motion.button>
      </motion.div>
    </AnimatedSection>
  );
};

export default ProjectsSimple;
