import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../../components/Title'
import { motion } from 'framer-motion'

const Experience = () => {
  const { t } = useTranslation(['translation'])
  return (
    <div className='grid -mt-20 gap-16 relative'>
      <motion.div className='absolute top-full shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{ x: [30, -20, 20, -30], y: [30, -20, 20, -30], rotate: [0, 90], scale: [1, 1.2, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <Title title={t('experience.title')}></Title>
      <p className="mt-2 text-sm text-zinc-400 text-center">
            <span className='text-sky-500'> Tecnologies: </span> {t('experience.tech')}
            </p>
      <ol
        className="border-l border-zinc-400 lg:grid grid-flow-col auto-cols-fr lg:justify-center lg:gap-16 lg:border-l-0 lg:border-t">

        {/* Experience 1 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.hazukiDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Hazuki <span className='text-sky-400'>, {t('experience.hazuki')} </span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.techHazuki')}:</span> </p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('experience.hazuki1')}</li>
              <li>{t('experience.hazuki2')}</li>
              <li>{t('experience.hazuki3')}</li>
            </ul>
          </div>
        </li>

        {/* Experience 2 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.desafioLatamDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Desafío Latam <span className='text-sky-400'>, {t('experience.desafiolatam')}</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.techDesafioLatam')}:</span> </p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('experience.desafioLatam1')}</li>
              <li>{t('experience.desafioLatam2')}</li>
              <li>{t('experience.desafioLatam3')}</li>
            </ul>
          </div>
        </li>

        {/* Experience 3 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.compilandoDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">CompilandoCode <span className='text-sky-400'> {t('experience.compilando')}</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.techCompilando')}:</span> </p>
            <ul className="mb-3 text-zinc-400 grid gap-2">
              <li>{t('experience.compilando1')}</li>
              <li>{t('experience.compilando2')}</li>
            </ul>
          </div>
        </li>

        {/* Experience 4 */}
        <li>
          <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-400 lg:ml-0 lg:mr-0 lg:-mt-[5px]"></div>
            <p className="mt-2 text-sm text-zinc-400">
              {t('experience.codigoFuturoDate')}
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5 lg:ml-0">
            <h3 className="mb-1.5 text-xl font-semibold">Código Futuro <span className='text-sky-400'>, {t('experience.codigoFuturo')}</span></h3>
            <p className="mb-3 text-white"><span className='text-sky-500'>{t('experience.techCodigoFuturo')}:</span> </p>
            <p className="mb-3 text-zinc-400 grid gap-2">
              <span>{t('experience.codigoFuturo1')}</span>
              <span>{t('experience.codigoFuturo2')}</span>
              <span>{t('experience.codigoFuturo3')}</span>
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default Experience