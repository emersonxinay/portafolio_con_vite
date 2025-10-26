import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getServiceStyle } from '../../../data/servicesData';
import { useAnimationVariants } from '../../../hooks/useAnimationVariants';
import SectionHeader from '../../../components/SectionHeader';

const ServicesSimple = () => {
  const { t } = useTranslation();
  const { containerVariants, itemVariants } = useAnimationVariants();

  const servicesData = t('servicesSimple.services', { returnObjects: true }) || [
    {
      title: "Desarrollo Web",
      subtitle: "Páginas y aplicaciones modernas",
      description: "Creo sitios web y aplicaciones que destacan, funcionan rápido y se adaptan a cualquier dispositivo.",
      benefits: [
        "Diseño moderno y profesional",
        "Optimizado para móviles",
        "Carga ultra-rápida",
        "Fácil de administrar"
      ]
    },
    {
      title: "Tienda Online",
      subtitle: "E-commerce completo",
      description: "Tiendas online que convierten visitantes en clientes, con todo lo necesario para vender.",
      benefits: [
        "Carrito de compras intuitivo",
        "Pagos seguros integrados",
        "Gestión de inventario",
        "Panel de administración"
      ]
    },
    {
      title: "Automatización",
      subtitle: "IA para tu negocio",
      description: "Automatizo tareas repetitivas y uso inteligencia artificial para hacer tu negocio más eficiente.",
      benefits: [
        "Ahorra tiempo y dinero",
        "Reduce errores humanos",
        "Análisis inteligente",
        "Decisiones basadas en datos"
      ]
    },
    {
      title: "Análisis de Datos",
      subtitle: "Insights para crecer",
      description: "Convierto tus datos en información valiosa para tomar mejores decisiones de negocio.",
      benefits: [
        "Reportes automáticos",
        "Tendencias y predicciones",
        "Dashboards interactivos",
        "Métricas clave en tiempo real"
      ]
    }
  ];

  // Map service data with centralized styles
  const services = servicesData.map((service, index) => ({
    ...service,
    ...getServiceStyle(index)
  }));

  return (
    <section id="services" className="py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t('servicesSimple.title')}
            </span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            {t('servicesSimple.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        className="mobile-grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`mobile-card bg-gradient-to-br ${service.bgColor} backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10">
              {/* Header del servicio */}
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${service.bgColor} border border-current/20 flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <i className={`${service.icon} text-4xl text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}></i>
                </motion.div>

                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-zinc-300 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Beneficios */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <i className="fas fa-star text-yellow-400"></i> {t('servicesSimple.benefitsTitle')}
                </h4>
                {service.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    className="flex items-center gap-3 text-zinc-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: benefitIndex * 0.1 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA implícito */}
              <div className="mt-8 pt-6 border-t border-slate-700/50">
                <motion.div
                  className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>{t('servicesSimple.moreInfo')}</span>
                  <span>→</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mobile-card bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('servicesSimple.cta.title')}
          </h3>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            {t('servicesSimple.cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mobile-btn px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2 justify-center">
                {t('servicesSimple.cta.talkButton')}
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="mobile-btn px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-bold rounded-2xl hover:bg-blue-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2 justify-center">
                {t('servicesSimple.cta.examplesButton')}
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSimple;