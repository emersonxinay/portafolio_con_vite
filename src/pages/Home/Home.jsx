import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';
import Hero from './Hero/HeroSimple';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Projects from './Projects/ProjectsSimple';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  const { i18n } = useTranslation();
  
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Emerson Espinoza Aguirre",
      "alternateName": "Emerson Espinoza",
      "jobTitle": "Senior Software Engineer & Tech Lead",
      "description": "Senior Software Engineer peruano con residencia en Chile. 6+ años transformando ideas en soluciones tecnológicas escalables. Especialista en IA/ML, Python, React, arquitecturas enterprise.",
      "url": "https://emersonespinoza.com",
      "image": "https://emersonespinoza.com/assets/emerson-espinoza-5579c795.jpeg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      },
      "nationality": "Peruvian",
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Senior Software Engineer",
        "occupationLocation": {
          "@type": "City",
          "name": "Santiago, Chile"
        },
        "skills": "Python, React, Machine Learning, AI, FastAPI, PostgreSQL, Docker, Kubernetes, Technical Leadership"
      },
      "award": [
        "99.9% uptime en sistemas críticos",
        "$2M+ en ahorros generados para clientes",
        "200+ desarrolladores mentoreados"
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title={i18n.language === 'ES' 
          ? "Emerson Espinoza - Senior Software Engineer | Tech Lead | Consultor IA & ML" 
          : "Emerson Espinoza - Senior Software Engineer | Tech Lead | AI & ML Consultant"
        }
        description={i18n.language === 'ES'
          ? "Senior Software Engineer peruano 🇵🇪 con residencia en Chile 🇨🇱. 6+ años transformando ideas en soluciones tecnológicas escalables. Especialista en IA/ML, Python, React, arquitecturas enterprise. CTO & Founder. 99.9% uptime, $2M+ ahorros generados."
          : "Peruvian Senior Software Engineer 🇵🇪 with residence in Chile 🇨🇱. 6+ years transforming ideas into scalable technological solutions. AI/ML specialist, Python, React, enterprise architectures. CTO & Founder. 99.9% uptime, $2M+ savings generated."
        }
        keywords="Emerson Espinoza, Senior Software Engineer Santiago Chile, Tech Lead CTO, Python Developer Chile, React Developer, Machine Learning Engineer, AI Specialist, Ingeniero Sistemas Chile, Consultor IA ML, Technical Leadership, Software Architecture, Startup CTO, EdTech Founder, Full Stack Developer Santiago"
        url="https://emersonespinoza.com"
        canonical="https://emersonespinoza.com"
        structuredData={homeStructuredData}
        type="profile"
      />
      
      <motion.main 
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      <Hero />
      
      <div className="mobile-container space-y-16 md:space-y-24 py-16 md:py-20 safe-area-bottom">
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      
      
      <motion.div 
        className="fixed bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.main>
    </>
  );
};

export default Home;