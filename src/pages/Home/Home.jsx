import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero/HeroSimple';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import FeaturedWork from './FeaturedWork/FeaturedWork';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
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
        <FeaturedWork />
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
  );
};

export default Home;