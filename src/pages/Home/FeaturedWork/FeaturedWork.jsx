import React from 'react';
import { motion } from 'framer-motion';
import { getFeaturedProjects, openProject } from '../../../data/projectsData';

const FeaturedWork = () => {
  const featuredProjects = getFeaturedProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos que <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Destacan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Casos de éxito reales que demuestran el impacto de mis soluciones tecnológicas
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => openProject(project.liveUrl)}
            >
              <div className={`
                relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm
                bg-gradient-to-br ${project.bgColor}
                hover:border-white/20 transition-all duration-500
                hover:scale-[1.01] hover:shadow-2xl
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
              `}>
                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                  bg-gradient-to-br ${project.color} transition-opacity duration-500 blur-xl
                `} />
                
                {/* Content */}
                <div className="relative z-10 md:flex items-center gap-8">
                  {/* Project Visual */}
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="relative">
                      {/* Project Image */}
                      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Fallback si la imagen no carga
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback visual */}
                        <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20 flex items-center justify-center text-white text-4xl font-bold hidden`}>
                          {project.title.split(' ')[0]}
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="text-center">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'live' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        }`}>
                          {project.status === 'live' ? '🟢 En Vivo' : '🟡 En Desarrollo'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="md:w-2/3">
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.color} bg-opacity-20 text-white border border-white/20`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-gray-400 text-sm capitalize">
                            {key === 'performance' && 'Performance'}
                            {key === 'conversion' && 'Conversión'}
                            {key === 'users' && 'Usuarios'}
                            {key === 'efficiency' && 'Eficiencia'}
                            {key === 'automation' && 'Automatización'}
                            {key === 'satisfaction' && 'Satisfacción'}
                            {key === 'response' && 'Respuesta'}
                            {key === 'accuracy' && 'Precisión'}
                            {key === 'savings' && 'Ahorro'}
                            {key === 'uptime' && 'Uptime'}
                            {key === 'engagement' && 'Engagement'}
                            {key === 'retention' && 'Retención'}
                            {key === 'students' && 'Estudiantes'}
                            {key === 'courses' && 'Cursos'}
                            {key === 'completion' && 'Completado'}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-start">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          openProject(project.liveUrl);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl
                          hover:shadow-lg transition-all duration-300 flex items-center gap-2
                        `}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Ver Proyecto
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres ver tu proyecto aquí?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad de crear algo extraordinario. Hablemos de tu idea.
            </p>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl
                hover:from-green-600 hover:to-blue-700 transition-all duration-300
                shadow-lg hover:shadow-xl
              "
            >
              Ver Todos los Proyectos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;