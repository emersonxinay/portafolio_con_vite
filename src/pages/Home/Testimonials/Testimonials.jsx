import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = t('testimonials.items', { returnObjects: true }).map((testimonial, index) => ({
    ...testimonial,
    id: index + 1,
    avatar: "",
    rating: 5,
    color: [
      "from-pink-400 to-rose-500",
      "from-blue-400 to-cyan-500", 
      "from-purple-400 to-indigo-500",
      "from-green-400 to-emerald-500"
    ][index % 4]
  }));

  const stats = t('testimonials.stats', { returnObjects: true }).map(stat => ({
    ...stat,
    icon: ""
  }));

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            {t('testimonials.title')} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`
                relative p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm
                bg-gradient-to-br from-white/5 to-white/10
                hover:border-white/20 transition-all duration-500
              `}>
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-6xl text-white/10">
                  "
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Testimonial Text */}
                  <p className="text-2xl text-gray-200 leading-relaxed mb-8 italic">
                    {testimonials[activeTestimonial].text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                        <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                        <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].company}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <span key={i}></span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">{testimonials[activeTestimonial].project}</div>
                      <div className="text-lg font-bold text-green-400">{testimonials[activeTestimonial].result}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white hover:scale-110"
            >
              ←
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;