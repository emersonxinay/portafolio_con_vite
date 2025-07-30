import Hero from './Hero/HeroFAANG'
import TechnicalExcellence from './TechnicalExcellence/TechnicalExcellence'
import { motion } from 'framer-motion'
import Contact from './Contact/Contact'
import Blog from './Blog/Blog'
import Experience from './Experience/Experience'
import Projects from './Projects'
// import Architecture from './Architecture/Architecture'
// import Terminal from './Terminal/Terminal'
import Services from './Services/Services'

const Home = () => {
  return (
    <motion.main className='w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section - Full Width */}
      <Hero />
      
      {/* Rest of sections - Contained */}
      <div className='mobile-container space-y-16 xs:space-y-20 md:space-y-24 py-16 xs:py-20 safe-area-bottom'>
        <TechnicalExcellence />
        <Services />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </div>


      {/* Background light effect */}
      <motion.div className='fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none'
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.main>
  )
}

export default Home