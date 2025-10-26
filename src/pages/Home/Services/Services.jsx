import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getServiceStyle } from '../../../data/servicesData';
import { useAnimationVariants } from '../../../hooks/useAnimationVariants';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import SectionHeader from '../../../components/SectionHeader';

const Services = () => {
  const { t } = useTranslation(['translation']);
  const { containerVariants, itemVariants } = useAnimationVariants();
  const { scrollToContact } = useScrollToSection();

  const services = t('services.items', { returnObjects: true }).map((service, index) => ({
    ...service,
    ...getServiceStyle(index)
  }));

  return (
    <section className="py-12 xs:py-16 md:py-20 relative w-full overflow-hidden">
      <div className="mobile-container">
        {/* Header */}
        <SectionHeader
          title={t('services.title')}
          highlightText="Transforman"
          subtitle={t('services.subtitle')}
          gradient="from-blue-400 to-purple-500"
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8 mb-10 xs:mb-12 md:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`
                relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm
                bg-gradient-to-br ${service.bgColor}
                hover:border-white/20 transition-all duration-500
                hover:scale-[1.02] hover:shadow-2xl
              `}>
                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
                  bg-gradient-to-br ${service.color} transition-opacity duration-500 blur-xl
                `} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center mb-4 xs:mb-6">
                    <div className={`w-12 h-12 xs:w-14 xs:h-14 rounded-xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center mr-3 xs:mr-4`}>
                      <i className={`${service.icon} text-2xl xs:text-3xl text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg xs:text-xl font-bold text-white mb-1">{service.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 xs:mb-6 leading-relaxed text-xs xs:text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 xs:space-y-2 mb-4 xs:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0 mt-2`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    {t('servicesPage.requestInfo')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 xs:mb-12 md:mb-16"
        >
          <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-white mb-8 xs:mb-10 md:mb-12">
            Mi Proceso de <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Trabajo</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
            {[
              { step: "01", title: t('servicesPage.process.steps.0.title'), desc: t('servicesPage.process.steps.0.description') },
              { step: "02", title: t('servicesPage.process.steps.1.title'), desc: t('servicesPage.process.steps.1.description') },
              { step: "03", title: t('servicesPage.process.steps.2.title'), desc: t('servicesPage.process.steps.2.description') },
              { step: "04", title: t('servicesPage.process.steps.3.title'), desc: t('servicesPage.process.steps.3.description') }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 mx-auto mb-2 xs:mb-3 md:mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-base xs:text-lg md:text-xl">
                  {item.step}
                </div>
                <h4 className="text-base xs:text-lg md:text-xl font-semibold text-white mb-1 xs:mb-2">{item.title}</h4>
                <p className="text-gray-400 text-xs xs:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl xs:rounded-2xl p-5 xs:p-6 md:p-8 border border-white/10"
        >
          <h3 className="text-lg xs:text-xl md:text-2xl font-bold text-white mb-2 xs:mb-3 md:mb-4">
            {t('servicesPage.cta.title')}
          </h3>
          <p className="text-gray-300 mb-5 xs:mb-6 md:mb-8 max-w-2xl mx-auto text-sm xs:text-base">
            {t('servicesPage.cta.description')}
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl
              hover:from-blue-600 hover:to-purple-700 transition-all duration-300
              shadow-lg hover:shadow-xl
            "
          >
            {t('servicesPage.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;