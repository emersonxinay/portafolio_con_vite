import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { professionalAchievements } from '../../../data/experienceData';
import { mainTechnologies } from '../../../data/techStackData';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import { buttonStyles } from '../../../constants/designSystem';
import Code from './Code';

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

      <div className="text-center w-full max-w-6xl mx-auto relative z-10 px-4 xs:px-6 sm:px-8 py-12 xs:py-16 sm:py-20">
        {/* Badge de disponibilidad mejorado */}
        <motion.div
          className="inline-flex items-center gap-2 xs:gap-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-lg border border-emerald-400/40 rounded-full px-4 xs:px-6 py-2 xs:py-3 mb-6 xs:mb-8 shadow-2xl"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2.5 h-2.5 xs:w-3 xs:h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-emerald-300 font-semibold text-xs xs:text-sm tracking-wide">
            <i className="fas fa-check-circle mr-1.5 xs:mr-2"></i>
            {t('heroSimplePage.availability')}
          </span>
        </motion.div>

        {/* Presentación principal rediseñada */}
        <motion.div
          className="mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 xs:mb-5 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.span
              className="text-zinc-300 block mb-2 xs:mb-3"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('heroSimplePage.greeting')}
            </motion.span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 block mb-3 xs:mb-4"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Emerson Espinoza
            </motion.span>
          </motion.h1>

          {/* Ubicación y disponibilidad */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-7 sm:mb-8 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 bg-slate-800/50 backdrop-blur-lg border border-slate-600/50 rounded-full px-3 xs:px-4 py-1.5 xs:py-2">
              <i className="fas fa-map-marker-alt text-red-400 text-xs xs:text-sm"></i>
              <span className="text-zinc-300 font-medium text-xs xs:text-sm">{t('heroSimplePage.nationality')}</span>
            </div>
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 bg-slate-800/50 backdrop-blur-lg border border-slate-600/50 rounded-full px-3 xs:px-4 py-1.5 xs:py-2">
              <i className="fas fa-home text-blue-400 text-xs xs:text-sm"></i>
              <span className="text-zinc-300 font-medium text-xs xs:text-sm">{t('heroSimplePage.residence')}</span>
            </div>
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-blue-400/40 rounded-full px-3 xs:px-4 py-1.5 xs:py-2">
              <i className="fas fa-globe text-cyan-400 text-xs xs:text-sm"></i>
              <span className="text-blue-300 font-medium text-xs xs:text-sm">{t('heroSimplePage.workType')}</span>
            </div>
          </motion.div>

          {/* Descripción principal */}
          <motion.p
            className="text-lg xs:text-xl md:text-2xl lg:text-3xl text-zinc-300 font-medium mb-12 max-w-4xl mx-auto leading-relaxed px-4 xs:px-6"
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

        {/* Code snippet interactivo */}
        <motion.div
          className="mb-16 flex justify-center items-center w-full"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <Code />
        </motion.div>

        {/* Roles rotativos rediseñados - Mobile First */}
        <motion.div
          className="mb-16 xs:mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-400 mb-8 xs:mb-10 sm:mb-12 px-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            {t('heroSimplePage.experienceLabel')}
          </motion.h2>

          <div className="relative px-4 xs:px-6 sm:px-8">
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
                  className="relative p-8 xs:p-10 sm:p-12 md:p-16 rounded-3xl xs:rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-blue-800/40 backdrop-blur-lg border-2 border-cyan-500/30 shadow-2xl overflow-hidden min-h-[280px] xs:min-h-[320px] sm:min-h-[360px]"
                >
                  {/* Fondo decorativo */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-700/10 opacity-50"
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      className="mb-5 xs:mb-6 sm:mb-8"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <i className={`${roles[currentRole].icon} text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRole].color}`}></i>
                    </motion.div>

                    <motion.h3
                      className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 xs:mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRole].color} leading-tight drop-shadow-[0_2px_10px_rgba(6,182,212,0.5)]`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {roles[currentRole].title}
                    </motion.h3>

                    <motion.p
                      className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-100 font-semibold leading-relaxed max-w-3xl drop-shadow-lg px-2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {roles[currentRole].subtitle}
                    </motion.p>
                  </div>

                  {/* Efectos decorativos - Azul marino y celeste */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-48 h-48 xs:w-56 xs:h-56 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-16 -left-16 w-40 h-40 xs:w-48 xs:h-48 bg-gradient-to-br from-blue-700/25 to-cyan-600/25 rounded-full blur-2xl"
                    animate={{ scale: [1, 0.8, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores mejorados - Mobile Optimized */}
            <div className="flex justify-center gap-3 xs:gap-4 sm:gap-5 mt-8 xs:mt-10">
              {roles.map((role, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentRole(index)}
                  className={`relative w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-500 touch-target ${index === currentRole
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

        {/* Métricas rediseñadas - Mobile First */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-16 xs:mb-20 sm:mb-24 px-4 xs:px-6 sm:px-8 max-w-5xl mx-auto"
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
              className="relative group xs:last:col-span-2 sm:last:col-span-1"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative p-5 xs:p-6 sm:p-8 md:p-10 rounded-2xl xs:rounded-3xl bg-slate-800/50 backdrop-blur-lg border-2 border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 group-hover:shadow-2xl min-h-[140px] xs:min-h-[160px] sm:min-h-[180px] flex flex-col items-center justify-center text-center">
                <i className={`${metric.icon} text-3xl xs:text-4xl sm:text-5xl md:text-6xl mb-3 xs:mb-4 sm:mb-5 text-transparent bg-clip-text bg-gradient-to-r ${metric.color} drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]`}></i>
                <div className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-2 xs:mb-2.5 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r ${metric.color} drop-shadow-[0_2px_10px_rgba(6,182,212,0.7)]`}>
                  {metric.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-base md:text-lg text-cyan-100 font-bold leading-tight drop-shadow-lg">
                  {metric.label}
                </div>

                {/* Efecto de hover */}
                <div className={`absolute inset-0 rounded-2xl xs:rounded-3xl bg-gradient-to-r ${metric.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs rediseñados - Mobile First */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 xs:gap-5 sm:gap-6 justify-center items-stretch sm:items-center mb-16 xs:mb-20 sm:mb-24 px-4 xs:px-6 sm:px-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="group relative px-8 xs:px-10 sm:px-12 py-5 xs:py-6 sm:py-7 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl w-full sm:w-auto touch-target"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 xs:gap-4 justify-center text-lg xs:text-xl sm:text-2xl">
              <i className="fas fa-comments text-base xs:text-lg sm:text-xl"></i>
              Conversemos
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl xs:text-2xl"
              >
                <i className="fas fa-arrow-right"></i>
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToProjects}
            className="group relative px-8 xs:px-10 sm:px-12 py-5 xs:py-6 sm:py-7 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl xs:rounded-3xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-cyan-400/50 touch-target"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
          >
            <span className="flex items-center gap-3 xs:gap-4 justify-center text-lg xs:text-xl sm:text-2xl">
              <i className="fas fa-rocket text-base xs:text-lg sm:text-xl"></i>
              Ver Proyectos
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSimple;