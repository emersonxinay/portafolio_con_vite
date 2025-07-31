import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseMe = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Resultados Rápidos",
      description: "Desarrollo ágil que reduce el tiempo de lanzamiento hasta en 50%",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "💰",
      title: "ROI Comprobado",
      description: "Mis soluciones han generado +$2M en ahorros y nuevos ingresos",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "🔒",
      title: "Calidad Empresarial",
      description: "Código robusto y seguro, listo para escalar tu negocio",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "🎯",
      title: "Enfoque Personalizado",
      description: "Soluciones diseñadas específicamente para tus objetivos de negocio",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: "📈",
      title: "Crecimiento Sostenible",
      description: "Tecnología que crece contigo, sin límites de escala",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: "🤝",
      title: "Soporte Continuo",
      description: "Acompañamiento post-lanzamiento para garantizar el éxito",
      color: "from-indigo-400 to-purple-500"
    }
  ];

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
    <section className="py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-white">¿Por qué elegir </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              trabajar conmigo?
            </span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            No solo desarrollo tecnología, creo soluciones que impulsan 
            el crecimiento real de tu negocio.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mobile-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="mobile-card bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              {/* Icono */}
              <motion.div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color}/10 border border-current/20 mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-4xl">{benefit.icon}</span>
              </motion.div>

              {/* Contenido */}
              <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${benefit.color}`}>
                {benefit.title}
              </h3>
              
              <p className="text-zinc-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sección de confianza */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mobile-card bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            🏆 Casos de Éxito Reales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">
                99.9%
              </div>
              <div className="text-sm text-zinc-400">Uptime garantizado en producción</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2">
                50%
              </div>
              <div className="text-sm text-zinc-400">Reducción en tiempo de desarrollo</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                10M+
              </div>
              <div className="text-sm text-zinc-400">Usuarios activos atendidos</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-zinc-300 leading-relaxed">
              <span className="font-semibold text-blue-400">Empresas de 3 países</span> confían en mi experiencia 
              para transformar sus ideas en soluciones digitales exitosas.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseMe;