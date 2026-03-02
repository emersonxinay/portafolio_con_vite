import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { professionalAchievements } from '../../../data/experienceData';
import { techStack } from '../../../data/techStackData';
import { useAnimationVariants } from '../../../hooks/useAnimationVariants';
import SectionHeader from '../../../components/SectionHeader';

const About = () => {
  const { t } = useTranslation(['translation']);
  const { containerVariants, itemVariants } = useAnimationVariants();

  return (
    <section id="about" className="py-24 w-full overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none" />

      {/* Header */}
      <SectionHeader
        icon="fas fa-user-tie"
        title={t('aboutPage.journey.title')}
        subtitle={
          <span className="text-slate-400 font-light">
            {t('aboutPage.journey.subtitle1')} <span className="text-white font-medium">{t('aboutPage.journey.yearsExperience')}</span> {t('aboutPage.journey.subtitle1End')}
            {' '}{t('aboutPage.journey.subtitle2')} <span className="text-white font-medium">{t('aboutPage.journey.techEducation')}</span> {t('aboutPage.journey.subtitle2End')}
            {' '}{t('aboutPage.journey.subtitle3')} <span className="text-white font-medium">{t('aboutPage.journey.growingProjects')}</span>{t('aboutPage.journey.subtitle3End')}
          </span>
        }
      />

      {/* Professional Achievements Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {professionalAchievements.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-8 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-accent/30 transition-all duration-500 hover:bg-slate-800/50"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-6 rounded-full bg-slate-700/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className={`${item.icon} text-2xl text-accent`}></i>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack Section */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-slate-700"></span>
            Technical Arsenal
            <span className="w-8 h-[1px] bg-slate-700"></span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('aboutPage.techStack.title')}</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Stack Column Component */}
          {[
            { title: t('aboutPage.techStack.frontend'), icon: 'fas fa-layer-group', items: techStack.frontend },
            { title: t('aboutPage.techStack.backend'), icon: 'fas fa-server', items: techStack.backend },
            { title: t('aboutPage.techStack.tools'), icon: 'fas fa-tools', items: techStack.tools }
          ].map((column, colIndex) => (
            <div key={colIndex} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors duration-300">
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <i className={`${column.icon} text-slate-500`}></i>
                {column.title}
              </h4>
              <div className="space-y-3">
                {column.items.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-colors duration-200"
                  >
                    <i className={`${tech.icon} text-lg text-slate-500 group-hover:text-accent mt-0.5 transition-colors`}></i>
                    <div>
                      <h5 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{tech.name}</h5>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center border-t border-slate-800 pt-8">
          <p className="text-lg text-slate-300 font-light italic">
            "{t('about.bottomCta', 'Empowering businesses across the globe with scalable, high-performance digital solutions.')}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;