import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { professionalAchievements } from '../../../data/experienceData';
import { techStack } from '../../../data/techStackData';
import { useAnimationVariants } from '../../../hooks/useAnimationVariants';
import SectionHeader from '../../../components/SectionHeader';
import IconBadge from '../../../components/IconBadge';

const About = () => {
  const { t } = useTranslation(['translation']);
  const { containerVariants, itemVariants } = useAnimationVariants();

  return (
    <section id="about" className="py-16 md:py-24 w-full overflow-hidden">
      {/* Header */}
      <SectionHeader
        icon="fas fa-user-circle"
        title={t('aboutPage.journey.title')}
        subtitle={
          <>
            {t('aboutPage.journey.subtitle1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">{t('aboutPage.journey.yearsExperience')}</span> {t('aboutPage.journey.subtitle1End')}
            {t('aboutPage.journey.subtitle2')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">{t('aboutPage.journey.techEducation')}</span> {t('aboutPage.journey.subtitle2End')}
            {t('aboutPage.journey.subtitle3')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">{t('aboutPage.journey.growingProjects')}</span>{t('aboutPage.journey.subtitle3End')}
          </>
        }
        gradient="from-blue-400 to-purple-500"
      />

      {/* Experiencia Real */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {professionalAchievements.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-600/30 rounded-2xl hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-center">
              <i className={`${item.icon} text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}></i>
              <h3 className={`text-lg font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Efecto de hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
        <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-center mb-6 xs:mb-8 text-white flex items-center justify-center gap-3">
          <i className="fas fa-cogs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"></i>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {t('aboutPage.techStack.title')}
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8">
          {/* Frontend */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4 text-center flex items-center justify-center gap-2">
              <i className="fas fa-palette"></i>
              {t('aboutPage.techStack.frontend')}
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
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`${tech.icon} text-green-400`}></i>
                    <h5 className="text-sm font-semibold text-green-400">{tech.name}</h5>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4 text-center flex items-center justify-center gap-2">
              <i className="fas fa-server"></i>
              {t('aboutPage.techStack.backend')}
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
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`${tech.icon} text-blue-400`}></i>
                    <h5 className="text-sm font-semibold text-blue-400">{tech.name}</h5>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4 text-center flex items-center justify-center gap-2">
              <i className="fas fa-tools"></i>
              {t('aboutPage.techStack.tools')}
            </h4>
            <div className="space-y-4">
              {techStack.tools.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-purple-400/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`${tech.icon} text-purple-400`}></i>
                    <h5 className="text-sm font-semibold text-purple-400">{tech.name}</h5>
                  </div>
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