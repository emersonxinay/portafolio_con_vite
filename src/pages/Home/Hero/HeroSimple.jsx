import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSimple = () => {
  const { t } = useTranslation(['translation']);
  const [currentService, setCurrentService] = useState(0);

  // Servicios principales - usando traducciones
  const services = t('heroSimple.services', { returnObjects: true }).map((service, index) => ({
    ...service,
    icon: "",
    color: [
      "from-blue-400 to-cyan-500",
      "from-purple-400 to-pink-500", 
      "from-green-400 to-emerald-500",
      "from-orange-400 to-red-500"
    ][index]
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center w-full relative mobile-container safe-area-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Fondo animado simplificado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          style={{ bottom: '30%', right: '10%' }}
        />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10 px-4 my-16">
        {/* Badge de disponibilidad */}
        <motion.div
          className="inline-flex items-center gap-2 mobile-card bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-400/30 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-300 font-medium text-sm">
            {t('heroSimple.availability')}
          </span>
        </motion.div>

        {/* Presentación principal */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-black mb-4">
            <span className="text-white block mb-2">{t('heroSimple.greeting')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Emerson Espinoza
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-6">
            {t('heroSimple.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-2 mb-6 text-zinc-400">
            <span>🇵🇪 Peruano</span>
            <span>•</span>
            <span>🇨🇱 Residencia en Chile</span>
            <span>•</span>
            <span> Trabajo Remoto</span>
          </div>

          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('heroSimple.description')}
          </p>
        </motion.div>

        {/* Servicio actual rotativo */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-zinc-400 mb-4">
            Especializado en:
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              className={`mobile-card bg-gradient-to-br ${services[currentService].color}/10 border-2`}
              style={{ borderColor: `${services[currentService].color.split(' ')[1].replace('to-', '')}30` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">
                {services[currentService].icon}
              </div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${services[currentService].color}`}>
                {services[currentService].title}
              </h3>
              <p className="text-zinc-300 text-lg">
                {services[currentService].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentService ? 'bg-blue-400 w-8' : 'bg-zinc-600'
                  }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Métricas clave - simplificadas */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-1">
              6+
            </div>
            <div className="text-sm text-zinc-400">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-1">
              50+
            </div>
            <div className="text-sm text-zinc-400">Proyectos exitosos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">
              3
            </div>
            <div className="text-sm text-zinc-400">Países atendidos</div>
          </div>
        </motion.div>

        {/* CTAs principales */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="mobile-btn px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 justify-center">
              {t('heroSimple.ctaSecondary')}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToProjects}
            className="mobile-btn px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-bold rounded-2xl hover:bg-blue-400 hover:text-black transition-all duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 justify-center">
              {t('heroSimple.ctaPrimary')}
            </span>
          </motion.button>
        </motion.div>

        {/* Tecnologías - simplificado */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-zinc-400 text-sm mb-4">
            Trabajo con tecnologías modernas:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'React', 'AI/ML', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-zinc-300 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSimple;