import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const ProfessionalImpact = () => {
    const { t } = useTranslation();
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
            title: t('professionalImpact.areas.leadership.title'),
            icon: "👥",
            gradient: "from-blue-500 to-indigo-600",
            highlights: [
                {
                    title: t('professionalImpact.areas.leadership.highlights.leadership.title'),
                    description: t('professionalImpact.areas.leadership.highlights.leadership.desc'),
                    impact: t('professionalImpact.areas.leadership.highlights.leadership.impact'),
                    badge: "Leadership"
                },
                {
                    title: t('professionalImpact.areas.leadership.highlights.mentoring.title'),
                    description: t('professionalImpact.areas.leadership.highlights.mentoring.desc'),
                    impact: t('professionalImpact.areas.leadership.highlights.mentoring.impact'),
                    badge: "Mentoring"
                },
                {
                    title: t('professionalImpact.areas.leadership.highlights.quality.title'),
                    description: t('professionalImpact.areas.leadership.highlights.quality.desc'),
                    impact: t('professionalImpact.areas.leadership.highlights.quality.impact'),
                    badge: "Quality"
                }
            ]
        },
        innovation: {
            title: t('professionalImpact.areas.innovation.title'),
            icon: "🤖",
            gradient: "from-purple-500 to-pink-600",
            highlights: [
                {
                    title: t('professionalImpact.areas.innovation.highlights.audio.title'),
                    description: t('professionalImpact.areas.innovation.highlights.audio.desc'),
                    impact: t('professionalImpact.areas.innovation.highlights.audio.impact'),
                    badge: "AI/Backend"
                },
                {
                    title: t('professionalImpact.areas.innovation.highlights.chatbot.title'),
                    description: t('professionalImpact.areas.innovation.highlights.chatbot.desc'),
                    impact: t('professionalImpact.areas.innovation.highlights.chatbot.impact'),
                    badge: "AI/LLM"
                },
                {
                    title: t('professionalImpact.areas.innovation.highlights.solutions.title'),
                    description: t('professionalImpact.areas.innovation.highlights.solutions.desc'),
                    impact: t('professionalImpact.areas.innovation.highlights.solutions.impact'),
                    badge: "Solutions"
                }
            ]
        },
        impact: {
            title: t('professionalImpact.areas.impact.title'),
            icon: "📈",
            gradient: "from-green-500 to-teal-600",
            highlights: [
                {
                    title: t('professionalImpact.areas.impact.highlights.cost.title'),
                    description: t('professionalImpact.areas.impact.highlights.cost.desc'),
                    impact: t('professionalImpact.areas.impact.highlights.cost.impact'),
                    badge: "Cost Saving"
                },
                {
                    title: t('professionalImpact.areas.impact.highlights.time.title'),
                    description: t('professionalImpact.areas.impact.highlights.time.desc'),
                    impact: t('professionalImpact.areas.impact.highlights.time.impact'),
                    badge: "Efficiency"
                },
                {
                    title: t('professionalImpact.areas.impact.highlights.bi.title'),
                    description: t('professionalImpact.areas.impact.highlights.bi.desc'),
                    impact: t('professionalImpact.areas.impact.highlights.bi.impact'),
                    badge: "Analytics"
                }
            ]
        },
        teaching: {
            title: t('professionalImpact.areas.teaching.title'),
            icon: "🎓",
            gradient: "from-orange-500 to-red-600",
            highlights: [
                {
                    title: t('professionalImpact.areas.teaching.highlights.training.title'),
                    description: t('professionalImpact.areas.teaching.highlights.training.desc'),
                    impact: t('professionalImpact.areas.teaching.highlights.training.impact'),
                    badge: "Training"
                },
                {
                    title: t('professionalImpact.areas.teaching.highlights.docs.title'),
                    description: t('professionalImpact.areas.teaching.highlights.docs.desc'),
                    impact: t('professionalImpact.areas.teaching.highlights.docs.impact'),
                    badge: "Documentation"
                },
                {
                    title: t('professionalImpact.areas.teaching.highlights.sharing.title'),
                    description: t('professionalImpact.areas.teaching.highlights.sharing.desc'),
                    impact: t('professionalImpact.areas.teaching.highlights.sharing.impact'),
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
            'AI/LLM': 'bg-pink-500',
            'Solutions': 'bg-violet-500',
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
              {t('professionalImpact.title')}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
          </div>

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            <Trans i18nKey="professionalImpact.subtitle">
              Más que código: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
                liderazgo técnico, innovación empresarial y crecimiento de equipos
              </span> que generan resultados medibles.
            </Trans>
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
              {t('professionalImpact.cta.question')}
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {t('professionalImpact.cta.button')}
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalImpact;