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
      "jobTitle": "Senior Backend Engineer | Cloud Solutions Architect",
      "description": t('seo.home.description'),
      "url": "https://emersonespinoza.com",
      "image": "https://emersonespinoza.com/assets/emerson-espinoza-5579c795.jpeg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressCountry": "CL"
      },
      "nationality": "Peruvian",
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Senior Backend Engineer",
        "occupationLocation": {
          "@type": "City",
          "name": "Remote / LATAM"
        },
        "skills": "Node.js, Azure, TypeScript, Microservices, PostgreSQL, Docker, Kubernetes, CI/CD, GitHub Actions, Backend Architecture"
      },
      "award": t('seo.home.achievements', { returnObjects: true })
    }
  };

  return (
    <>
      <SEOHead
        title={i18n.language === 'ES'
          ? "Emerson Espinoza - Senior Backend Engineer | Azure Solutions Architect"
          : "Emerson Espinoza - Senior Backend Engineer | Azure Solutions Architect"
        }
        description={t('seo.home.twitterDescription')}
        keywords="Emerson Espinoza, Senior Backend Engineer, Azure Solutions Architect, Node.js Expert, Backend Developer, Cloud Engineer, System Design, Microservices, TypeScript, PostgreSQL, Docker, Kubernetes, Remote Backend Engineer, LATAM Tech, Software Architecture"
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
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
        </div>



      </motion.main>
    </>
  );
};

export default Home;