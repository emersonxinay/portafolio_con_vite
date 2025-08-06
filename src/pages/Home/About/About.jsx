import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(['translation']);

  const highlights = t('about.highlights', { returnObjects: true });

  const techStack = t('about.techStack', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-8 md:py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {t('about.title')}
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
          {t('about.description')}
        </p>
      </motion.div>

      {/* Key Highlights */}
      <motion.div
        className="mobile-grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="mobile-card bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 text-center group hover:border-blue-500/50 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl md:text-4xl mb-3">{highlight.icon}</div>
            <div className={`text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${highlight.color} mb-1`}>
              {highlight.title}
            </div>
            <div className="text-sm font-semibold text-zinc-300 mb-2">
              {highlight.subtitle}
            </div>
            <div className="text-xs text-zinc-400">
              {highlight.description}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="mobile-card bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          🛠️ {t('about.techStackTitle', 'Stack Tecnológico')}
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4 text-center">
              {t('about.sections.frontend')}
            </h4>
            <div className="space-y-4">
              {techStack.frontend.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-green-400/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h5 className="text-sm font-semibold text-green-400 mb-1">{tech.name}</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4 text-center">
              {t('about.sections.backend')}
            </h4>
            <div className="space-y-4">
              {techStack.backend.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h5 className="text-sm font-semibold text-blue-400 mb-1">{tech.name}</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4 text-center">
              {t('about.sections.devops')}
            </h4>
            <div className="space-y-4">
              {techStack.devops.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-purple-400/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h5 className="text-sm font-semibold text-purple-400 mb-1">{tech.name}</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-zinc-300 leading-relaxed">
            {t('about.bottomCta', 'Empresas de 3 países confían en mi experiencia para transformar sus ideas en soluciones digitales exitosas.')}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;