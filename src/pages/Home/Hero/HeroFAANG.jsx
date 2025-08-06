import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import { useTranslation } from 'react-i18next';

const HeroFAANG = () => {
  const { t } = useTranslation(['translation']);
  const [isExploding, setIsExploding] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Enhanced impact metrics with translations
  const impactMetrics = [
    { value: "6+ años", label: "Experiencia Enterprise", icon: "💼", color: "from-blue-400 to-cyan-500", bgColor: "from-blue-900/20 to-cyan-900/20" },
    { value: "99.9%", label: "Uptime Garantizado", icon: "", color: "from-green-400 to-emerald-500", bgColor: "from-green-900/20 to-emerald-900/20" },
    { value: "$2M+", label: "Valor Generado", icon: "", color: "from-yellow-400 to-orange-500", bgColor: "from-yellow-900/20 to-orange-900/20" },
    { value: "500+", label: "Desarrolladores Entrenados", icon: "🎓", color: "from-purple-400 to-pink-500", bgColor: "from-purple-900/20 to-pink-900/20" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % impactMetrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getInTouchHandler = () => {
    setIsExploding(true);
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 xs:gap-8 lg:gap-12 xl:gap-0 xl:justify-between w-full relative mobile-container mobile-section safe-area-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Confetti Effect */}
      <AnimatePresence>
        {isExploding && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <ConfettiExplosion
              particleCount={150}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              colors={['#0ea5e9', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981']}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Mouse Follower - Hidden on mobile */}
      <motion.div
        className="hidden lg:block fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', left: '5%' }}
        />

        {/* Secondary gradient orb */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.2, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 3, ease: "easeInOut" }}
          style={{ bottom: '15%', right: '10%' }}
        />

        {/* Tertiary accent orb */}
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 7, ease: "easeInOut" }}
          style={{ top: '60%', left: '60%' }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${80 + Math.sin(i) * 10}%`
            }}
          />
        ))}
      </div>

      {/* Left Content - Mobile optimized */}
      <div className="flex-1 max-w-4xl text-center lg:text-left relative z-10 w-full">
        {/* Enhanced Top Badge */}
        <motion.div
          className="group inline-flex items-center gap-2 xs:gap-3 mobile-card bg-gradient-to-r from-emerald-900/50 via-green-900/50 to-teal-900/50 backdrop-blur-xl border border-emerald-400/30 rounded-full px-3 xs:px-4 sm:px-6 lg:px-8 py-2 xs:py-3 lg:py-4 mt-6 xs:mt-8 md:mt-12 mb-6 xs:mb-8 md:mb-10 mobile-shadow hover:shadow-emerald-500/25 transition-all duration-500"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
          </motion.div>
          <span className="text-emerald-200 font-semibold text-xs sm:text-sm lg:text-base tracking-wide">
            💼 {t('hero.available')} • Enterprise Ready
          </span>
          <motion.div
            className="w-2 h-2 bg-emerald-300 rounded-full opacity-60"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Main Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Professional Title */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 justify-center xl:justify-start mb-4">
              <motion.div
                className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <span className="text-lg text-zinc-300 font-bold tracking-wider uppercase">
                {t('hero.specialty')}
              </span>
            </div>
          </motion.div>

          {/* Main Name - Mobile responsive */}
          <h1 className="mobile-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 xs:mb-4 sm:mb-6 text-overflow-safe">
            <motion.span
              className="block text-zinc-100 mb-2 xs:mb-3 drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ingeniero de Sistemas
            </motion.span>

            {/* Nationality Highlight - Mobile optimized */}
            <motion.div
              className="flex items-center gap-2 justify-center lg:justify-start mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span className="text-xs sm:text-sm text-zinc-400">🇵🇪 Peruano con residencia en Chile 🇨🇱</span>
            </motion.div>

            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
            >
              Emerson Espinoza
            </motion.span>
          </h1>

          {/* Enhanced Role Description - Mobile grid */}
          <motion.div
            className="mobile-grid grid-cols-1 xs:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center lg:justify-start mb-4 xs:mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { text: "Senior Software Engineer", icon: "💻", color: "from-blue-400 to-cyan-500" },
              { text: "AI Expert", icon: "", color: "from-purple-400 to-pink-500" },
              { text: "Data Scientist", icon: "", color: "from-green-400 to-emerald-500" },
              { text: "Tech Educator", icon: "🎓", color: "from-orange-400 to-red-500" }
            ].map((role, index) => (
              <motion.div
                key={role.text}
                className={`group mobile-btn flex items-center justify-center gap-1 xs:gap-2 bg-gradient-to-r ${role.color} bg-opacity-10 backdrop-blur-sm border border-white/10 rounded-full px-2 xs:px-3 lg:px-4 py-2 xs:py-3 hover:scale-105 transition-all duration-300 w-full xs:w-auto`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              >
                <span className="text-sm sm:text-base lg:text-lg">{role.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-white">{role.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Value Proposition - Mobile responsive */}
          <motion.p
            className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-zinc-300 leading-relaxed font-medium max-w-4xl mx-auto lg:mx-0 px-1 xs:px-2 sm:px-0 text-overflow-safe"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {t('hero.pitch')}
          </motion.p>
        </motion.div>

        {/* Value Proposition - Mobile optimized */}
        <motion.div
          className="mobile-card bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-xl xs:rounded-2xl lg:rounded-3xl border border-slate-700/50 mb-4 xs:mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="mobile-subtitle text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 xs:mb-4 sm:mb-6">
            Expertise That Drives Business Results
          </h2>

          {/* Core Specializations - Mobile first grid */}
          <div className="mobile-grid grid-cols-1 sm:grid-cols-2 mb-4 xs:mb-6 sm:mb-8">
            <div className="mobile-card bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl lg:rounded-2xl border border-blue-500/20">
              <h3 className="text-cyan-400 font-bold text-sm xs:text-base lg:text-lg mb-2 xs:mb-3 flex items-center gap-1 xs:gap-2">
                🧠 Software Engineering & AI
              </h3>
              <ul className="text-zinc-300 text-xs xs:text-sm space-y-1 xs:space-y-2">
                <li>• Arquitecturas escalables con Python & React</li>
                <li>• Integración de IA/ML en sistemas empresariales</li>
                <li>• APIs robustas con FastAPI y Flask</li>
                <li>• Microservicios y Event-Driven Architecture</li>
              </ul>
            </div>

            <div className="mobile-card bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl lg:rounded-2xl border border-purple-500/20">
              <h3 className="text-purple-400 font-bold text-sm xs:text-base lg:text-lg mb-2 xs:mb-3 flex items-center gap-1 xs:gap-2">
                Data Science & Analytics
              </h3>
              <ul className="text-zinc-300 text-xs xs:text-sm space-y-1 xs:space-y-2">
                <li>• Análisis predictivo y Machine Learning</li>
                <li>• Dashboards interactivos con D3.js/Plotly</li>
                <li>• Procesamiento de Big Data con Pandas/NumPy</li>
                <li>• Sistemas de recomendación personalizados</li>
              </ul>
            </div>

            <div className="mobile-card bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl lg:rounded-2xl border border-green-500/20">
              <h3 className="text-green-400 font-bold text-sm xs:text-base lg:text-lg mb-2 xs:mb-3 flex items-center gap-1 xs:gap-2">
                🎓 Tech Education & Leadership
              </h3>
              <ul className="text-zinc-300 text-xs xs:text-sm space-y-1 xs:space-y-2">
                <li>• Capacitación técnica para equipos empresariales</li>
                <li>• Mentoring en tecnologías modernas</li>
                <li>• Workshops de arquitectura y buenas prácticas</li>
                <li>• Code reviews y pair programming</li>
              </ul>
            </div>

            <div className="mobile-card bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl lg:rounded-2xl border border-orange-500/20">
              <h3 className="text-orange-400 font-bold text-sm xs:text-base lg:text-lg mb-2 xs:mb-3 flex items-center gap-1 xs:gap-2">
                DevOps & Cloud
              </h3>
              <ul className="text-zinc-300 text-xs xs:text-sm space-y-1 xs:space-y-2">
                <li>• Containerización con Docker & Kubernetes</li>
                <li>• Pipelines CI/CD automatizados</li>
                <li>• Infraestructura como código (IaC)</li>
                <li>• Monitoreo y observabilidad avanzada</li>
              </ul>
            </div>
          </div>

          {/* Key Achievements - Mobile responsive */}
          <div className="border-t border-slate-700/50 pt-3 xs:pt-4 sm:pt-6">
            <h3 className="text-white font-bold text-sm xs:text-base sm:text-lg mb-2 xs:mb-3 sm:mb-4">🏆 Logros Empresariales Clave</h3>
            <div className="mobile-grid grid-cols-3">
              <div className="text-center">
                <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-1">
                  6+ años
                </div>
                <div className="text-xs xs:text-sm text-zinc-400">Experiencia Full Stack</div>
              </div>
              <div className="text-center">
                <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1">
                  3 países
                </div>
                <div className="text-xs xs:text-sm text-zinc-400">Proyectos Internacionales</div>
              </div>
              <div className="text-center">
                <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-1">
                  50+ proyectos
                </div>
                <div className="text-xs xs:text-sm text-zinc-400">Soluciones Entregadas</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Expertise Banner - Mobile optimized */}
        <motion.div
          className="mobile-card bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-slate-600/30 mb-4 xs:mb-6 sm:mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-white font-bold text-sm xs:text-base sm:text-lg mb-2 xs:mb-3 sm:mb-4">🛠️ Stack Tecnológico Principal</h3>
          <div className="flex flex-wrap gap-1 xs:gap-2 sm:gap-3">
            {[
              { name: 'Python', color: 'from-yellow-400 to-blue-500' },
              { name: 'React', color: 'from-cyan-400 to-blue-500' },
              { name: 'FastAPI', color: 'from-green-400 to-teal-500' },
              { name: 'PostgreSQL', color: 'from-blue-600 to-purple-600' },
              { name: 'Docker', color: 'from-blue-400 to-cyan-600' },
              { name: 'Machine Learning', color: 'from-purple-500 to-pink-500' },
              { name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900' }
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                className={`px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm font-bold rounded-full bg-gradient-to-r ${tech.color} text-white mobile-shadow`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Expertise - Mobile optimized */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-base sm:text-lg font-semibold text-zinc-300 mb-3 sm:mb-4 text-center lg:text-left">
            💻 Enterprise Technologies
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            {[
              { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
              { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
              { name: 'PostgreSQL', level: 88, color: 'from-indigo-400 to-indigo-600' },
              { name: 'Docker', level: 85, color: 'from-cyan-400 to-cyan-600' },
              { name: 'AWS', level: 80, color: 'from-orange-400 to-orange-600' },
              { name: 'Flask/FastAPI', level: 92, color: 'from-green-400 to-green-600' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${tech.color} text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm shadow-lg hover:shadow-xl transition-shadow`}>
                  {tech.name}
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-400 whitespace-nowrap">
                  {tech.level}% expertise
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Dynamic Impact Metrics - Mobile optimized */}
        <motion.div
          className="mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center xl:text-left">
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <span className="text-2xl sm:text-3xl">📈</span>
              Business Impact Delivered
              <motion.div
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentMetric}
                className={`group inline-flex items-center gap-3 sm:gap-4 lg:gap-6 bg-gradient-to-r ${impactMetrics[currentMetric].bgColor} backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500`}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl drop-shadow-lg">{impactMetrics[currentMetric].icon}</span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <div className="text-left">
                  <motion.div
                    className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${impactMetrics[currentMetric].color} drop-shadow-lg`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {impactMetrics[currentMetric].value}
                  </motion.div>
                  <motion.div
                    className="text-zinc-200 text-sm sm:text-base lg:text-lg font-semibold tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {impactMetrics[currentMetric].label}
                  </motion.div>
                </div>

                {/* Progress indicator - Mobile adjusted */}
                <div className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 flex gap-1">
                  {impactMetrics.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentMetric ? 'bg-cyan-400 w-4 sm:w-6' : 'bg-zinc-600'
                        }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons - Mobile optimized */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.button
            onClick={getInTouchHandler}
            className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 overflow-hidden border border-white/20"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ touchAction: 'manipulation' }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-xl"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
              <motion.span
                className="text-lg sm:text-xl lg:text-2xl"
                animate={{ rotate: isHovered ? [0, 15, -15, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                💼
              </motion.span>
              <span className="hidden sm:inline">Schedule Technical Interview</span>
              <span className="sm:hidden">Contact Me</span>
              <motion.span
                className="text-base sm:text-lg lg:text-xl"
                animate={{ x: [0, 8, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>

            {/* Particle effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={false}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    scale: isHovered ? [0, 1, 0] : 0,
                    opacity: isHovered ? [0, 1, 0] : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    repeat: isHovered ? Infinity : 0,
                  }}
                />
              ))}
            </motion.div>
          </motion.button>

          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl lg:rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-500 overflow-hidden backdrop-blur-sm"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.98 }}
            style={{ touchAction: 'manipulation' }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl"
              style={{ padding: '2px' }}
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <div className="w-full h-full bg-black/80 rounded-3xl" />
            </motion.div>

            {/* Fill effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0, borderRadius: '50%' }}
              whileHover={{ scale: 1.5, borderRadius: '24px' }}
              transition={{ duration: 0.5 }}
            />

            <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg">
              <motion.span
                className="text-lg sm:text-xl lg:text-2xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📄
              </motion.span>
              <span className="hidden sm:inline">View Technical Projects</span>
              <span className="sm:hidden">Projects</span>
              <motion.span
                className="text-base sm:text-lg lg:text-xl"
                animate={{
                  y: [0, -4, 0],
                  x: [0, 2, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                ↗
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Location & Availability - Mobile optimized */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start items-center lg:items-start">
            <motion.div
              className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <motion.span
                className="text-green-400 text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🟢
              </motion.span>
              <span className="font-semibold text-green-300 text-sm sm:text-base lg:text-lg">{t('hero.availability')}</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
            >
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                📍
              </motion.span>
              <span className="font-semibold text-blue-300 text-xs sm:text-sm lg:text-base">
                <span className="hidden sm:inline">🇵🇪 Peruano con residencia en Chile 🇨🇱 • Remote Worldwide</span>
                <span className="sm:hidden">🇵🇪 PE/CL • Remote</span>
              </span>
              <motion.div
                className="w-1 h-1 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
            >
              <motion.span
                className="text-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⏰
              </motion.span>
              <span className="font-semibold text-purple-300 text-sm sm:text-base lg:text-lg">GMT-5 • Flexible Hours</span>
              <motion.div
                className="flex gap-1"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-purple-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Right Side - Interactive Code Preview - Mobile optimized */}
      <motion.div
        className="flex-1 max-w-2xl relative w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Floating Background Elements */}
        <motion.div
          className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Enhanced Terminal Window - Mobile responsive */}
        <motion.div
          className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-slate-600/30 shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.4, type: "spring" }}
          style={{
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Enhanced Terminal Header - Mobile optimized */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-slate-800/90 to-slate-700/80 border-b border-slate-600/40">
            <div className="flex gap-2 sm:gap-3">
              <motion.div
                className="w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded-full shadow-lg"
                whileHover={{ scale: 1.2 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(239, 68, 68, 0.4)', '0 0 0 8px rgba(239, 68, 68, 0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 rounded-full shadow-lg"
                whileHover={{ scale: 1.2 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(245, 158, 11, 0.4)', '0 0 0 8px rgba(245, 158, 11, 0)'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full shadow-lg"
                whileHover={{ scale: 1.2 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 8px rgba(34, 197, 94, 0)'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            <div className="flex-1 text-center">
              <motion.span
                className="text-slate-300 text-xs sm:text-sm lg:text-base font-mono bg-slate-700/50 px-2 sm:px-3 lg:px-4 py-1 rounded-md lg:rounded-lg border border-slate-600/30"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                ~/enterprise-ai-system.py
              </motion.span>
            </div>
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          {/* Enhanced Code Content - Mobile responsive */}
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 font-mono text-xs sm:text-sm lg:text-base leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                className="text-zinc-500 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                # Enterprise-grade AI-powered microservices
              </motion.div>

              <motion.div
                className="mb-4 sm:mb-6 bg-slate-800/50 rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 border border-slate-600/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-purple-400 text-sm sm:text-base lg:text-lg">class <span className="text-yellow-400 font-bold">EnterpriseAISystem</span>:</div>
                <div className="ml-2 sm:ml-4 text-blue-400 mt-1 sm:mt-2">def <span className="text-green-400 font-semibold">handle_millions_requests</span>(self):</div>
                <div className="ml-4 sm:ml-8 text-zinc-300 mt-1">redis_cache = <span className="text-orange-400">RedisCluster</span>(nodes=50)</div>
                <div className="ml-4 sm:ml-8 text-zinc-300">db_pool = <span className="text-orange-400">PostgreSQLPool</span>(max_conn=1000)</div>
                <div className="ml-4 sm:ml-8 text-zinc-300">ai_engine = <span className="text-pink-400">TensorFlowServing</span>()</div>
                <div className="ml-4 sm:ml-8 text-zinc-300">return self.<span className="text-cyan-400">optimize_performance</span>()</div>
              </motion.div>

              <motion.div
                className="text-zinc-500 mb-3 sm:mb-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-md lg:rounded-lg p-2 sm:p-3 border border-green-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="flex items-center gap-1 sm:gap-2 text-green-400 font-semibold mb-1 sm:mb-2">
                  <span className="text-base sm:text-lg lg:text-xl">✅</span>
                  Production Results:
                </div>
                <div className="ml-3 sm:ml-6 space-y-1 text-xs sm:text-sm">
                  <div>• 99.9% uptime across 3 regions</div>
                  <div>• &lt;50ms response time at scale</div>
                  <div>• 10M+ daily active users</div>
                  <div>• $2M+ cost savings annually</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-md lg:rounded-lg p-2 sm:p-3 border border-slate-600/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <span className="text-green-400 text-base sm:text-lg">$</span>
                <span className="text-slate-300 text-xs sm:text-sm lg:text-lg">
                  <span className="hidden sm:inline">ready_for_enterprise_challenges</span>
                  <span className="sm:hidden">enterprise_ready</span>
                </span>
                <motion.span
                  className="text-cyan-400 text-base sm:text-lg lg:text-xl font-bold"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  |||
                </motion.span>
                <motion.div
                  className="ml-auto flex gap-1"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full"
                      animate={{ scale: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-60"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-50"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md opacity-40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroFAANG;