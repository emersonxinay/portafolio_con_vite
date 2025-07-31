import Hero from './Hero/HeroSimple'
import WhyChooseMe from './WhyChooseMe/WhyChooseMe'
import ServicesSimple from './ServicesSimple/ServicesSimple'
import { motion } from 'framer-motion'
import Contact from './Contact/Contact'
import Blog from './Blog/Blog'
import Experience from './Experience/Experience'
import Projects from './Projects'

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
      <div className='mobile-container space-y-12 xs:space-y-16 md:space-y-20 lg:space-y-24 py-12 xs:py-16 md:py-20 safe-area-bottom'>
        <WhyChooseMe />
        <ServicesSimple />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </div>


      {/* Background light effect - Mobile optimized */}
      <motion.div className='fixed bottom-0 right-0 w-48 h-48 xs:w-64 xs:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none overflow-hidden'
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.main>
  )
}

export default Home