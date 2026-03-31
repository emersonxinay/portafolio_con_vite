import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfessionalImpact = () => {
  const [activeArea, setActiveArea] = useState('leadership');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById('professional-impact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const professionalAreas = {
    leadership: {
      title: "Liderazgo Técnico & Mentoría",
      icon: "👥",
      gradient: "from-blue-500 to-indigo-600",
      highlights: [
        {
          title: "Team Leadership",
          description: "Lidero equipos de desarrollo multidisciplinarios, mejorando la productividad del equipo en un 40% mediante metodologías ágiles y pair programming.",
          impact: "+40% productividad",
          badge: "Leadership"
        },
        {
          title: "Technical Mentoring",
          description: "Mentoría avanzada a desarrolladores sobre arquitectura de software, patrones de diseño y mejores prácticas en entornos cloud.",
          impact: "800+ desarrolladores",
          badge: "Mentoring"
        },
        {
          title: "Code Reviews & Quality",
          description: "Implemento procesos de code review rigurosos que han reducido bugs en producción en un 85% y mejorado la calidad del código.",
          impact: "-85% bugs",
          badge: "Quality"
        }
      ]
    },
    innovation: {
      title: "Arquitectura & Soluciones de IA",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-600",
      highlights: [
        {
          title: "AI-Powered Systems",
          description: "Diseño y despliegue de microservicios que integran IA para automatización de procesos críticos y optimización de flujos empresariales.",
          impact: "70% automatización",
          badge: "AI/Backend"
        },
        {
          title: "Performance Optimization",
          description: "Optimizo sistemas existentes mediante técnicas avanzadas de caching, indexación y arquitectura, logrando mejoras significativas.",
          impact: "60% más rápido",
          badge: "Performance"
        },
        {
          title: "Scalable Architecture",
          description: "Diseño arquitecturas escalables que soportan crecimiento exponencial sin necesidad de reescritura completa del sistema.",
          impact: "10x escalabilidad",
          badge: "Architecture"
        }
      ]
    },
    impact: {
      title: "Impacto Empresarial & ROI",
      icon: "📈",
      gradient: "from-green-500 to-teal-600",
      highlights: [
        {
          title: "Cost Reduction",
          description: "Reduzco costos de infraestructura mediante optimización de recursos cloud y implementación de prácticas DevOps eficientes.",
          impact: "-45% costos",
          badge: "Cost Saving"
        },
        {
          title: "Time to Market",
          description: "Acelero el time-to-market de nuevas funcionalidades mediante CI/CD pipelines y metodologías de desarrollo eficientes.",
          impact: "50% más rápido",
          badge: "Efficiency"
        },
        {
          title: "Business Intelligence",
          description: "Desarrollo dashboards y sistemas de análisis que proporcionan insights accionables para la toma de decisiones estratégicas.",
          impact: "Real-time insights",
          badge: "Analytics"
        }
      ]
    },
    teaching: {
      title: "Educación & Transferencia de Conocimiento",
      icon: "🎓",
      gradient: "from-orange-500 to-red-600",
      highlights: [
        {
          title: "Corporate Training",
          description: "Diseño y ejecuto programas de capacitación técnica para equipos empresariales, elevando el nivel técnico organizacional.",
          impact: "100+ profesionales",
          badge: "Training"
        },
        {
          title: "Technical Documentation",
          description: "Creo documentación técnica comprehensiva que facilita la onboarding y reduce el tiempo de incorporación de nuevos desarrolladores.",
          impact: "60% menos onboarding",
          badge: "Documentation"
        },
        {
          title: "Knowledge Sharing",
          description: "Organizo workshops internos sobre nuevas tecnologías y mejores prácticas, mantiendo al equipo actualizado con las últimas tendencias.",
          impact: "Continuous learning",
          badge: "Workshops"
        }
      ]
    }
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Leadership': 'bg-blue-500',
      'Mentoring': 'bg-indigo-500',
      'Quality': 'bg-cyan-500',
      'AI/Backend': 'bg-purple-500',
      'Performance': 'bg-pink-500',
      'Architecture': 'bg-violet-500',
      'Cost Saving': 'bg-green-500',
      'Efficiency': 'bg-teal-500',
      'Analytics': 'bg-emerald-500',
      'Training': 'bg-orange-500',
      'Documentation': 'bg-red-500',
      'Workshops': 'bg-amber-500'
    };
    return colors[badge] || 'bg-gray-500';
  };

  return (
    <section id="professional-impact" className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Impacto Profesional
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
          </div>

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Más que código: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
              liderazgo técnico, innovación empresarial y crecimiento de equipos
            </span> que generan resultados medibles.
          </p>
        </motion.div>
      </div>

      {/* Professional Areas Navigation */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {Object.entries(professionalAreas).map(([key, area]) => (
          <motion.button
            key={key}
            onClick={() => setActiveArea(key)}
            className={`relative p-6 rounded-2xl font-bold transition-all duration-300 group ${activeArea === key
                ? `bg-gradient-to-r ${area.gradient} text-white shadow-2xl`
                : 'bg-slate-800/50 text-zinc-300 hover:bg-slate-700/50 border border-slate-600/50'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="text-3xl">{area.icon}</div>
              <div className="text-center">
                <div className="text-sm font-bold leading-tight">{area.title}</div>
              </div>
            </div>

            {activeArea === key && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeArea}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8"
        >
          <div className="grid gap-8">
            {professionalAreas[activeArea].highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full text-white ${getBadgeColor(highlight.badge)}`}>
                        {highlight.badge}
                      </span>
                    </div>

                    <p className="text-zinc-300 leading-relaxed mb-4">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Impact Metric */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl p-4 text-center border border-blue-500/20">
                      <div className="text-sm text-zinc-400 mb-2">Impacto Medible</div>
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {highlight.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-8 pt-8 border-t border-slate-700/50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-zinc-300 text-lg mb-4">
              ¿Buscas un líder técnico que impulse la innovación en tu organización?
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Conversemos sobre tu próximo proyecto 💼
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalImpact;