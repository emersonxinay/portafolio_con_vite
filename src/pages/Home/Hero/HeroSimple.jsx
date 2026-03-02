import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import TerminalWindow from './TerminalWindow'; // New component

const HeroSimple = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollToContact, scrollToProjects } = useScrollToSection();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen relative w-full overflow-hidden bg-[#090e19] flex items-center">
      {/* Background Grid - Industrial Tech Feel */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Authority & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-left"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-3 self-start mb-6 px-4 py-2 bg-slate-900/80 border border-emerald-500/30 rounded-lg backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-mono text-xs tracking-wider uppercase">Sistema Operativo</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Arquitecto del <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Futuro Digital.</span>
          </h1>

          <div className="flex items-start gap-4 mb-8 max-w-lg">
            <img src="/images/logo_aguila.png" alt="Logo Águila" className="w-12 h-12 object-contain mt-1" />
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              Fundador del <span className="text-amber-400 font-medium">Lenguaje Águila</span>. <br />
              El lenguaje profesional en español diseñado para formar a los próximos <span className="text-white font-medium">arquitectos de software</span>.
            </p>
          </div>

          {/* Production Stats Dashboard */}
          <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md">
            <div className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">Rol Actual</div>
              <div className="text-white font-bold">Fundador & CTO</div>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">Enfoque</div>
              <div className="text-blue-400 font-bold">LLVM / Compiladores</div>
            </div>
            <div className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg col-span-2">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-mono">Estado del Proyecto</div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">Águila v2.6.8</span>
                <div className="h-1 flex-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-3/4 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://aguila.compilandocode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg shadow-lg hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              <i className="fas fa-terminal mb-0.5"></i>
              Explorar Águila
            </a>
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:border-white transition-all"
            >
              Ver proyectos
            </button>
          </div>
        </motion.div>

        {/* Right Column: Evidence (Terminal) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center relative"
        >
          {/* Decorative Elements behind terminal */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl rounded-xl -z-10 animate-pulse-slow"></div>

          <div className="w-full relative">
            <div className="absolute -top-12 -right-12 text-slate-800 text-9xl opacity-20 rotate-12 pointer-events-none select-none">
              <i className="fas fa-code"></i>
            </div>
            <TerminalWindow />

            {/* Floating "Verified" Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -right-4 bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl flex items-center gap-3"
            >
              <div className="bg-blue-500/20 p-2 rounded-md">
                <i className="fas fa-check-circle text-blue-400 text-xl"></i>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Compilación Exitosa</div>
                <div className="text-sm font-bold text-white">Listo para Producción</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSimple;