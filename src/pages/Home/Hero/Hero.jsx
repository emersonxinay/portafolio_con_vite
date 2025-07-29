import { useEffect, useState } from 'react';
import Code from './Code';
import Languages from './Languages';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation(['translation']);

  const [isExploding, setIsExploding] = useState(false);
  useEffect(() => {
    if (isExploding) {
      setTimeout(() => {
        setIsExploding(false);
      }, 1500);
    }
  }, [isExploding]);

  const getInTouchHandler = () => {
    setIsExploding(true);
    setTimeout(() => {
      document
        .querySelector('#contact')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  return (
    <motion.div
      className='flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-0 xl:justify-between w-full min-h-screen relative mt-40 md:mt-24 xl:mt-0'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      {/* Confetti on click at get in touch button */}
      {isExploding && (
        <ConfettiExplosion
          particleCount={100}
          className='fixed left-1/2 -translate-x-1/2'
        />
      )}

      {/* Light */}
      <motion.div
        className='absolute mt-[20%] shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>

      <div className='grid items-center gap-4 xl:max-w-2xl text-center xl:text-start'>
        {/* Hero Left side - Enhanced with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-transparent backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl -z-10" />
          
          {/* Content with improved spacing */}
          <div className="p-8">
            <motion.h1 
              className='font-black text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl xl:text-[4rem] leading-tight mb-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.div 
                className='mb-4'
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <span className='text-zinc-300 text-sm font-medium tracking-wide uppercase'>
                    Senior Software Engineer
                  </span>
                </div>
                <p className="text-cyan-400 text-sm font-medium">
                  🎯 Building scalable systems that process millions of transactions
                </p>
              </motion.div>
              
              <motion.span 
                className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 block drop-shadow-lg'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, type: "spring" }}
                whileHover={{ scale: 1.02 }}
              >
                Emerson Espinoza
              </motion.span>
              
              <motion.span 
                className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 block text-2xl xl:text-4xl mt-3 font-bold'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Ingeniero de Sistemas
              </motion.span>
            </motion.h1>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className='flex items-center gap-3 mb-6'>
            <div className='flex items-center gap-2 bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2'>
              <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
              <span className='text-sm text-emerald-300 font-medium'>{t('hero.available')}</span>
            </div>
          </div>
          
          <p className='text-zinc-300 text-lg xl:text-xl font-medium mb-2'>
            {t('hero.role')}
          </p>
          <p className='text-zinc-400 text-base leading-relaxed mb-6'>
            {t('hero.description')}
          </p>
        </motion.div>
        
        {/* Location Badge */}
        <motion.div 
          className='bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-center w-fit mx-auto xl:mx-0'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className='text-sm text-green-400 font-medium'>{t('hero.location')}</span>
        </motion.div>
        <Languages></Languages>
        <p className='text-zinc-400 font-base m-auto xl:m-0 w-10/12'>
          {t('hero.description')}
        </p>
        
        {/* Enhanced Professional Metrics */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          <motion.div 
            className='group relative bg-gradient-to-br from-sky-900/20 via-blue-900/30 to-cyan-900/20 backdrop-blur-md border border-sky-400/20 rounded-2xl p-4 text-center overflow-hidden'
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)",
              borderColor: "rgba(14, 165, 233, 0.5)"
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div 
              className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 mb-1'
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              6+
            </motion.div>
            <div className='text-xs font-medium text-zinc-300 group-hover:text-sky-200 transition-colors'>
              {t('hero.metrics.experience')}
            </div>
          </motion.div>
          
          <motion.div 
            className='group relative bg-gradient-to-br from-purple-900/20 via-pink-900/30 to-fuchsia-900/20 backdrop-blur-md border border-purple-400/20 rounded-2xl p-4 text-center overflow-hidden'
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
              borderColor: "rgba(168, 85, 247, 0.5)"
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-1'
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              50+
            </motion.div>
            <div className='text-xs font-medium text-zinc-300 group-hover:text-purple-200 transition-colors'>
              {t('hero.metrics.focus')}
            </div>
          </motion.div>
          
          <motion.div 
            className='group relative bg-gradient-to-br from-green-900/20 via-emerald-900/30 to-teal-900/20 backdrop-blur-md border border-green-400/20 rounded-2xl p-4 text-center overflow-hidden'
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
              borderColor: "rgba(34, 197, 94, 0.5)"
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 mb-1'
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              3
            </motion.div>
            <div className='text-xs font-medium text-zinc-300 group-hover:text-green-200 transition-colors'>
              {t('hero.metrics.countries')}
            </div>
          </motion.div>
          
          <motion.div 
            className='group relative bg-gradient-to-br from-orange-900/20 via-red-900/30 to-pink-900/20 backdrop-blur-md border border-orange-400/20 rounded-2xl p-4 text-center overflow-hidden'
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              borderColor: "rgba(249, 115, 22, 0.5)"
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 mb-1'
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              100%
            </motion.div>
            <div className='text-xs font-medium text-zinc-300 group-hover:text-orange-200 transition-colors'>
              {t('hero.metrics.specialty')}
            </div>
          </motion.div>
        </div>

        <div className='flex gap-4 relative m-auto xl:m-0 mt-8'>
          <motion.button
            onClick={getInTouchHandler}
            className='group relative font-bold px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl flex items-center gap-3 overflow-hidden shadow-2xl'
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)",
              backgroundSize: "200% 200%"
            }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: '-200%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Content */}
            <span className="relative z-10 text-lg font-bold tracking-wide">
              {t('hero.contact')}
            </span>
            
            <motion.div
              className="relative z-10 flex items-center justify-center w-6 h-6 bg-white/20 rounded-full"
              animate={{ 
                y: [0, -4, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-rocket text-sm"></i>
            </motion.div>
            
            {/* Floating particles */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Hero right */}
      <Code></Code>
    </motion.div>
  );
};

export default Hero;
