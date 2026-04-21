import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import TerminalWindow from './TerminalWindow';

const HeroSimple = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const { scrollToContact, scrollToProjects } = useScrollToSection();

  const roles = [
    { text: 'Sistemas Backend.', gradient: 'from-blue-400 to-emerald-500' },
    { text: 'Inteligencia Artificial.', gradient: 'from-purple-400 to-pink-500' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative w-full overflow-hidden bg-[#090e19] flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Ambient Glow — dual color for DS/ML */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-900/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-left"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-3 self-start mb-6 px-4 py-2 bg-slate-900/80 border border-blue-500/30 rounded-lg backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 font-mono text-xs tracking-wider uppercase">{t('footer.availabilityBadge')}</span>
          </div>

          {/* Main Title — rotating specialties */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Arquitecto de <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRole].gradient}`}
              >
                {roles[currentRole].text}
              </motion.span>
            </AnimatePresence>
          </h1>

          {/* Expertise pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-purple-500/15 border border-purple-400/30 text-purple-300">
              <i className="fas fa-brain text-purple-400"></i>
              Inteligencia Artificial
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-pink-500/15 border border-pink-400/30 text-pink-300">
              <i className="fas fa-robot text-pink-400"></i>
              Machine Learning
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">
              <i className="fas fa-server text-emerald-400"></i>
              Backend Enterprise
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
              <i className="fas fa-cloud text-cyan-400"></i>
              Cloud & DevOps
            </span>
          </div>

          <div className="flex items-start gap-4 mb-8 max-w-lg">
            <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 mt-1 flex-shrink-0">
              <i className="fas fa-brain text-purple-400 text-xl"></i>
            </div>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              {t('heroSimple.description')}
            </p>
          </div>

          {/* Stats Dashboard — expanded with DS/ML metrics */}
          <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md">
            <div className="p-4 bg-slate-800/30 border border-purple-700/30 rounded-lg">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">Inteligencia Artificial</div>
              <div className="text-purple-400 font-bold">TensorFlow · PyTorch · LLMs</div>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">Multi-Cloud Stack</div>
              <div className="text-white font-bold">Azure / GCP / DO</div>
            </div>
            <div className="p-4 bg-slate-800/30 border border-pink-700/30 rounded-lg">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">ML Accuracy</div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400 font-bold">97.3%</span>
                <div className="h-1 flex-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[97.3%]"></div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">Disponibilidad SLA</div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">99.9%</span>
                <div className="h-1 flex-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[99.9%] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center gap-2"
            >
              <i className="fas fa-envelope mb-0.5"></i>
              {t('heroSimple.ctaSecondary', 'Consultoría Gratuita')}
            </button>
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:border-white transition-all"
            >
              {t('heroSimple.ctaPrimary', 'Ver Proyectos')}
            </button>
          </div>
        </motion.div>

        {/* Right Column: Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-600 opacity-20 blur-2xl rounded-xl -z-10 animate-pulse-slow"></div>

          <div className="w-full relative">
            <div className="absolute -top-12 -right-12 text-slate-800 text-9xl opacity-20 rotate-12 pointer-events-none select-none">
              <i className="fas fa-brain"></i>
            </div>
            <TerminalWindow />

            {/* Floating Badge — ML in production */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -right-4 bg-slate-900 border border-purple-700/50 p-3 rounded-lg shadow-xl flex items-center gap-3"
            >
              <div className="bg-purple-500/20 p-2 rounded-md">
                <i className="fas fa-brain text-purple-400 text-xl"></i>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Data Science & ML</div>
                <div className="text-sm font-bold text-white">Modelos en Producción</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSimple;