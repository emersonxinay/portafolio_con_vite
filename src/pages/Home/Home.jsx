import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';
import Hero from './Hero/HeroSimple';
import About from './About/About';
import Experience from './Experience/Experience';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Projects from './Projects/ProjectsSimple';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  const { t, i18n } = useTranslation();

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Emerson Espinoza Aguirre",
      "alternateName": "Emerson Espinoza",
      "jobTitle": "Ingeniero de Sistemas & Fullstack Developer",
      "description": t('seo.home.description'),
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
        "skills": "Python, React, Flask, Ruby on Rails, PostgreSQL, JavaScript, HTML, CSS, Git, GitHub, C# .NET, Docker, Liderazgo de Proyectos, Educación Tecnológica"
      },
      "award": t('seo.home.achievements', { returnObjects: true })
    }
  };

  return (
    <>
      <SEOHead 
        title={i18n.language === 'ES' 
          ? "Emerson Espinoza - Senior Software Engineer | Tech Lead | Consultor IA & ML" 
          : "Emerson Espinoza - Senior Software Engineer | Tech Lead | AI & ML Consultant"
        }
        description={t('seo.home.twitterDescription')}
        keywords="Emerson Espinoza, Senior Software Engineer Santiago Chile, Tech Lead CTO, Python Developer Chile, React Developer, Machine Learning Engineer, AI Specialist, Ingeniero Sistemas Chile, Consultor IA ML, Technical Leadership, Software Architecture, Startup CTO, EdTech Founder, Full Stack Developer Santiago"
        url="https://emersonespinoza.com"
        canonical="https://emersonespinoza.com"
        structuredData={homeStructuredData}
        type="profile"
      />
      
      <motion.main 
        className="w-full overflow-hidden mobile-safe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      <Hero />
      
      <div className="mobile-container space-y-12 xs:space-y-16 md:space-y-24 py-12 xs:py-16 md:py-20 safe-area-bottom w-full">
        <About />
        <Experience />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      
      
      <motion.div 
        className="fixed bottom-0 right-0 w-48 h-48 xs:w-64 xs:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"
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