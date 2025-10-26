import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../../components/Title'
import { motion } from 'framer-motion'
// Font Awesome icons are now loaded globally via CDN

const Experience = () => {
  const { t } = useTranslation(['translation'])
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      id: 'hazuki',
      icon: 'fas fa-server',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'desafiolatam',
      icon: 'fas fa-users',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'compilando',
      icon: 'fas fa-rocket',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'codigoFuturo',
      icon: 'fas fa-chart-line',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500/30'
    }
  ]

  return (
    <div className='mobile-section grid -mt-20 gap-12 xs:gap-16 relative'>
      <motion.div className='absolute top-full shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      <Title title={t('experience.title')} />



      <div className="mobile-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`mobile-card p-4 xs:p-5 sm:p-6 rounded-xl xs:rounded-2xl backdrop-blur-sm border ${exp.borderColor} bg-gradient-to-br ${exp.bgColor} hover:scale-105 transition-all duration-300 cursor-pointer ${activeExperience === index ? 'ring-2 ring-sky-400/50 shadow-lg shadow-sky-500/20' : ''
              }`}
            onHoverStart={() => setActiveExperience(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Company Icon */}
            <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
              <div className={`p-2 xs:p-3 rounded-lg xs:rounded-xl bg-gradient-to-r ${exp.color} text-white`}>
                <i className={`${exp.icon} text-lg xs:text-xl`}></i>
              </div>
              <div>
                <p className="text-xs text-zinc-400">{t(`experience.${exp.id}Date`)}</p>
              </div>
            </div>

            {/* Company & Role */}
            <h3 className="text-base xs:text-lg font-bold mb-2 leading-tight">
              {exp.id === 'hazuki' && 'Hazuki'}
              {exp.id === 'desafiolatam' && 'Desafío Latam'}
              {exp.id === 'compilando' && 'CompilandoCode'}
              {exp.id === 'codigoFuturo' && 'Código Futuro'}
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} text-sm xs:text-base`}>
                {t(`experience.${exp.id}`)}
              </span>
            </h3>

            {/* Tech Stack */}
            <div className="mb-3 xs:mb-4">
              <p className="text-xs text-zinc-500 mb-1 xs:mb-2">Stack:</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t(`experience.tech${exp.id === 'hazuki' ? 'Hazuki' : exp.id === 'desafiolatam' ? 'DesafioLatam' : exp.id === 'compilando' ? 'Compilando' : 'CodigoFuturo'}`)}
              </p>
            </div>

            {/* Achievements */}
            <ul className="text-xs xs:text-sm text-zinc-400 space-y-1 xs:space-y-2 mb-3 xs:mb-4">
              <li>{t(`experience.${exp.id}1`)}</li>
              <li>{t(`experience.${exp.id}2`)}</li>
              <li>{t(`experience.${exp.id}3`)}</li>
            </ul>

            {/* Metrics */}
            {t(`experience.${exp.id}Metrics`) !== `experience.${exp.id}Metrics` && (
              <div className={`text-xs text-center p-2 xs:p-3 bg-gradient-to-r ${exp.bgColor} rounded-md xs:rounded-lg border ${exp.borderColor} mt-auto mobile-shadow`}>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-semibold`}>
                  {t(`experience.${exp.id}Metrics`)}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience