import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { professionalAchievements } from '../../../data/experienceData';
import { mainTechnologies } from '../../../data/techStackData';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import { buttonStyles } from '../../../constants/designSystem';

const HeroSimple = () => {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollToContact, scrollToProjects } = useScrollToSection();

  // Roles basados en achievements
  const roles = professionalAchievements;

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fondo animado mejorado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/15 to-green-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.7, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
          style={{ bottom: '20%', right: '5%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 10 }}
          style={{ top: '50%', right: '20%' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="text-center w-full max-w-6xl mx-auto relative z-10 px-4 py-20">
        {/* Badge de disponibilidad mejorado */}
        <motion.div
          className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-lg border border-emerald-400/40 rounded-full px-6 py-3 mb-8 shadow-2xl"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-emerald-300 font-semibold text-sm tracking-wide">
            <i className="fas fa-check-circle mr-2"></i>
            {t('heroSimplePage.availability')}
          </span>
        </motion.div>

        {/* Presentación principal rediseñada */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.span
              className="text-zinc-300 block mb-3"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('heroSimplePage.greeting')}
            </motion.span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 block mb-4"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Emerson Espinoza
            </motion.span>
          </motion.h1>

          {/* Ubicación y disponibilidad */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-lg border border-slate-600/50 rounded-full px-4 py-2">
              <i className="fas fa-map-marker-alt text-red-400"></i>
              <span className="text-zinc-300 font-medium">{t('heroSimplePage.nationality')}</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-lg border border-slate-600/50 rounded-full px-4 py-2">
              <i className="fas fa-home text-blue-400"></i>
              <span className="text-zinc-300 font-medium">{t('heroSimplePage.residence')}</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-blue-400/40 rounded-full px-4 py-2">
              <i className="fas fa-globe text-cyan-400"></i>
              <span className="text-blue-300 font-medium">{t('heroSimplePage.workType')}</span>
            </div>
          </motion.div>

          {/* Descripción principal */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-zinc-300 font-medium mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
              {t('heroSimplePage.title')}
            </span>{" "}
            {t('heroSimplePage.description')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">
              {t('heroSimplePage.techSolutions')}
            </span>{" "}
            {t('heroSimplePage.scalable')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">
              {t('heroSimplePage.techEducation')}
            </span>{" "}
            {t('heroSimplePage.collaborative')}
          </motion.p>
        </motion.div>

        {/* Roles rotativos rediseñados */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-zinc-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            {t('heroSimplePage.experienceLabel')}
          </motion.h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div
                  className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br ${roles[currentRole].color}/10 backdrop-blur-lg border-2 shadow-2xl overflow-hidden`}
                  style={{
                    borderColor: `${roles[currentRole].color.split(' ')[3]}40`
                  }}
                >
                  {/* Fondo decorativo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${roles[currentRole].color}/5 opacity-50`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <i className={`${roles[currentRole].icon} text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRole].color}`}></i>
                    </motion.div>

                    <motion.h3
                      className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRole].color}`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {roles[currentRole].title}
                    </motion.h3>

                    <motion.p
                      className="text-xl md:text-2xl text-zinc-300 font-medium"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {roles[currentRole].subtitle}
                    </motion.p>
                  </div>

                  {/* Efectos decorativos */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${roles[currentRole].color}/20 rounded-full blur-2xl`}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  <motion.div
                    className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${roles[currentRole].color}/15 rounded-full blur-xl`}
                    animate={{ scale: [1, 0.8, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores mejorados */}
            <div className="flex justify-center gap-3 mt-8">
              {roles.map((role, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentRole(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                    index === currentRole
                      ? `bg-gradient-to-r ${role.color} shadow-lg scale-125`
                      : 'bg-zinc-600 hover:bg-zinc-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentRole && (
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${role.color} opacity-50`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Métricas rediseñadas */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {[
            {
              number: "6+",
              label: t('heroSimplePage.stats.yearsLabel'),
              color: "from-blue-400 to-cyan-500",
              icon: "fas fa-calendar-alt"
            },
            {
              number: "∞",
              label: t('heroSimplePage.stats.projectsLabel'),
              color: "from-green-400 to-emerald-500",
              icon: "fas fa-rocket"
            },
            {
              number: "500+",
              label: t('heroSimplePage.stats.studentsLabel'),
              color: "from-purple-400 to-pink-500",
              icon: "fas fa-user-graduate"
            }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-lg border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 group-hover:shadow-2xl">
                <i className={`${metric.icon} text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}></i>
                <div className={`text-3xl md:text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}>
                  {metric.number}
                </div>
                <div className="text-sm md:text-base text-zinc-400 font-medium">
                  {metric.label}
                </div>

                {/* Efecto de hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs rediseñados */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl overflow-hidden shadow-2xl w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 justify-center text-lg">
              <i className="fas fa-comments"></i>
              Conversemos
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl"
              >
                <i className="fas fa-arrow-right"></i>
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToProjects}
            className="group relative px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-cyan-400/50"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
          >
            <span className="flex items-center gap-3 justify-center text-lg">
              <i className="fas fa-rocket"></i>
              Ver Proyectos
            </span>
          </motion.button>
        </motion.div>

        {/* Stack tecnológico completamente rediseñado */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold text-zinc-400 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          >
            <i className="fas fa-code mr-3 text-blue-400"></i>
            Tecnologías que domino
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { name: 'Python', color: 'from-yellow-500 to-yellow-600', icon: 'fab fa-python', bg: 'bg-yellow-500/10' },
              { name: 'React', color: 'from-cyan-400 to-blue-500', icon: 'fab fa-react', bg: 'bg-cyan-500/10' },
              { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', icon: 'fab fa-js-square', bg: 'bg-yellow-500/10' },
              { name: 'Node.js', color: 'from-green-500 to-green-600', icon: 'fab fa-node-js', bg: 'bg-green-500/10' },
              { name: 'Docker', color: 'from-blue-500 to-blue-600', icon: 'fab fa-docker', bg: 'bg-blue-500/10' },
              { name: 'Git', color: 'from-orange-500 to-red-500', icon: 'fab fa-git-alt', bg: 'bg-orange-500/10' },
              { name: 'PostgreSQL', color: 'from-blue-600 to-blue-700', icon: 'fas fa-database', bg: 'bg-blue-600/10' },
              { name: 'Ruby', color: 'from-red-500 to-red-600', icon: 'far fa-gem', bg: 'bg-red-500/10' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`group relative flex items-center gap-3 px-4 py-3 ${tech.bg} backdrop-blur-lg border border-slate-600/30 rounded-full hover:border-slate-500/50 transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <i className={`${tech.icon} text-lg text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`}></i>
                <span className="text-zinc-300 font-medium text-sm md:text-base">
                  {tech.name}
                </span>

                {/* Efecto de brillo al hover */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSimple;