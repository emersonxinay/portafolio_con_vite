import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation(['translation']);
  
  // Visual styling arrays to preserve design
  const icons = ["💻", "🛒", "🤖", "⚙️", "☁️", "🎓"];
  const colors = [
    "from-blue-400 to-cyan-500",
    "from-green-400 to-emerald-500",
    "from-purple-400 to-pink-500",
    "from-orange-400 to-red-500",
    "from-indigo-400 to-purple-500",
    "from-teal-400 to-cyan-500"
  ];
  const bgColors = [
    "from-blue-900/10 to-cyan-900/10",
    "from-green-900/10 to-emerald-900/10",
    "from-purple-900/10 to-pink-900/10",
    "from-orange-900/10 to-red-900/10",
    "from-indigo-900/10 to-purple-900/10",
    "from-teal-900/10 to-cyan-900/10"
  ];
  
  const services = t('services.items', { returnObjects: true }).map((service, index) => ({
    ...service,
    icon: icons[index],
    color: colors[index],
    bgColor: bgColors[index]
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')} que <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Transforman</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
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
                    Solicitar Información
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
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Mi Proceso de <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Trabajo</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análisis", desc: "Entiendo tu negocio y objetivos" },
              { step: "02", title: "Estrategia", desc: "Diseño la solución perfecta" },
              { step: "03", title: "Desarrollo", desc: "Construyo con las mejores tecnologías" },
              { step: "04", title: "Lanzamiento", desc: "Entrego y doy soporte continuo" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
          className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para transformar tu idea en realidad?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Garantizo entrega en tiempo récord y soporte post-lanzamiento. Tu éxito es mi prioridad.
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
            Comenzar Proyecto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;