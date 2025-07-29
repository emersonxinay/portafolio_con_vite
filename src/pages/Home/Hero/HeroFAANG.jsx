import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';

const HeroFAANG = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  // Real business impact metrics
  const impactMetrics = [
    { value: "500K+", label: "Users Served", icon: "👥", color: "from-blue-400 to-cyan-500" },
    { value: "99.9%", label: "Uptime Achieved", icon: "⚡", color: "from-green-400 to-emerald-500" },
    { value: "50TB+", label: "Data Processed", icon: "💾", color: "from-purple-400 to-pink-500" },
    { value: "40%", label: "Cost Reduction", icon: "💰", color: "from-orange-400 to-red-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % impactMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getInTouchHandler = () => {
    setIsExploding(true);
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-0 xl:justify-between w-full relative px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Confetti Effect */}
      {isExploding && (
        <ConfettiExplosion
          particleCount={100}
          className="fixed left-1/2 -translate-x-1/2 z-50"
        />
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          style={{ bottom: '20%', right: '15%' }}
        />
      </div>

      {/* Left Content */}
      <div className="flex-1 max-w-3xl text-center xl:text-left relative z-10">
        {/* Top Badge */}
        <motion.div
          className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-300 font-medium text-sm">
            🚀 Available for Enterprise Projects
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight mb-4">
            <span className="block text-zinc-100 mb-2">
              Senior Software Engineer
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
              Emerson Espinoza
            </span>
          </h1>
          
          <div className="flex items-center gap-3 justify-center xl:justify-start mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <span className="text-xl text-zinc-300 font-medium">
              Building Systems That Scale
            </span>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            🎯 What I Deliver for Enterprise Clients
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-cyan-400 font-semibold">Scalable Architecture:</span>
                <p className="text-zinc-300 text-sm">Systems handling 500K+ concurrent users</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-green-400 font-semibold">Performance:</span>
                <p className="text-zinc-300 text-sm">99.9% uptime with &lt;50ms response times</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-purple-400 font-semibold">Cost Optimization:</span>
                <p className="text-zinc-300 text-sm">Reduced infrastructure costs by 40%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-orange-400 font-semibold">Full-Stack:</span>
                <p className="text-zinc-300 text-sm">Python, React, PostgreSQL, Docker</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Expertise */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-zinc-300 mb-4 text-center xl:text-left">
            💻 Enterprise Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center xl:justify-start">
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
                <div className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-shadow`}>
                  {tech.name}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-400 whitespace-nowrap">
                  {tech.level}% expertise
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Impact Metrics */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center xl:text-left">
            <h3 className="text-lg font-semibold text-zinc-300 mb-4">
              📈 Business Impact Delivered
            </h3>
            <motion.div
              key={currentMetric}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 px-6 py-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">{impactMetrics[currentMetric].icon}</span>
              <div>
                <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${impactMetrics[currentMetric].color}`}>
                  {impactMetrics[currentMetric].value}
                </div>
                <div className="text-zinc-400 text-sm font-medium">
                  {impactMetrics[currentMetric].label}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={getInTouchHandler}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-calendar-check"></i>
              Schedule Technical Interview
            </span>
          </motion.button>

          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-slate-800/50 text-white font-medium rounded-2xl border border-slate-600/50 hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-code"></i>
              View Technical Projects
            </span>
          </motion.button>
        </motion.div>

        {/* Location & Availability */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center xl:justify-start text-sm text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-cyan-400"></i>
            <span>Chile/Peru • Remote Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-clock text-green-400"></i>
            <span>GMT-5 • Flexible Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-language text-purple-400"></i>
            <span>Spanish • English</span>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Code Preview */}
      <motion.div
        className="flex-1 max-w-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-zinc-400 text-sm ml-2">enterprise_system.py</span>
          </div>
          
          <div className="font-mono text-sm space-y-2">
            <div className="text-zinc-500"># Scalable microservices architecture</div>
            <div className="text-purple-400">class <span className="text-yellow-400">EnterpriseAPI</span>:</div>
            <div className="ml-4 text-blue-400">def <span className="text-green-400">handle_millions_requests</span>(self):</div>
            <div className="ml-8 text-zinc-300">redis_cache = <span className="text-orange-400">RedisCluster</span>()</div>
            <div className="ml-8 text-zinc-300">db_pool = <span className="text-orange-400">PostgreSQLPool</span>()</div>
            <div className="ml-8 text-zinc-300">return self.<span className="text-cyan-400">optimize_performance</span>()</div>
            <div className="text-zinc-500 mt-4"># Result: 99.9% uptime, &lt;50ms response</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroFAANG;