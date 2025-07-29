import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from './Articles';
import './article.module.scss';
import '../../styles/article-content.css';
import { motion, AnimatePresence } from 'framer-motion';
import { TiArrowBack } from 'react-icons/ti';
import emerson from '../../assets/emerson-espinoza.jpeg';
import Logo from '../../assets/logo.jpeg';
import { FaGithub, FaLinkedinIn, FaDiscord, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { BsTwitter, BsCalendar, BsClock, BsEye, BsHeart, BsHeartFill } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi';
import { ImTwitch } from 'react-icons/im';
import { HiOutlineArrowUp } from 'react-icons/hi';
import { toast } from 'react-hot-toast';

const Article = () => {
  let { id } = useParams();
  const article = articles.find((a) => a.url == id);
  
  // Estados para interactividad
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href,
        });
        toast.success('¡Artículo compartido exitosamente!');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('¡Enlace copiado al portapapeles!');
      }
    } catch (error) {
      toast.error('Error al compartir el artículo');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Like removido' : '¡Te gusta este artículo!');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Bookmark removido' : '¡Artículo guardado!');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tracking del progreso de lectura y scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
      setShowScrollTop(scrollTop > 500);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Barra de progreso de lectura */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: readingProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: readingProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Botón scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiOutlineArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        className='max-w-7xl m-auto px-4 md:px-6 lg:px-8 w-full min-h-screen mt-24 md:mt-32 mb-16 md:mb-32 relative'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        
        {/* Custom cursor */}

        {/* Mouse follower effect */}
        <motion.div
          className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-40 mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Enhanced background effects */}
        <motion.div
          className='absolute -translate-x-1/2 shadow-[0px_0px_300px_50px_#0ea5e9]'
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
          }}
        />
        
        <motion.div
          className='absolute left-full -translate-x-1/2 top-[100vh] shadow-[0px_0px_300px_50px_#0ea5e9]'
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
          }}
        />
        
        <motion.div
          className='absolute -translate-x-1/2 top-full shadow-[0px_0px_300px_50px_#0ea5e9]'
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
          }}
        />

        {/* Enhanced Navigation */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <Link
              to={'/blog'}
              className='inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-all group w-fit px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 relative text-sm md:text-base'
              style={{ transitionDuration: '300ms' }}>
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <TiArrowBack className='text-lg' />
              </motion.div>
              <span className='font-semibold'>Volver al blog</span>
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
            </Link>
            
            {/* Article Progress on Mobile */}
            <div className='flex items-center gap-2 text-sm text-zinc-500 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/30 lg:hidden'>
              <BsClock className='text-blue-400' />
              <span>Progreso: {Math.round(readingProgress)}%</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Article Header */}
        <motion.div 
          className='space-y-8 md:space-y-12 mb-12 md:mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}>
          
          {/* Enhanced Hero Image */}
          <motion.div 
            className='relative overflow-hidden rounded-2xl md:rounded-3xl group'
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl md:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-700/50 group-hover:border-sky-500/30 transition-all duration-500">
              <img
                src={article.thumbnail}
                alt={article.title}
                className='w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
              
              {/* Floating elements on image */}
              <div className="absolute top-6 left-6">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl backdrop-blur-sm"
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 10px 30px rgba(59, 130, 246, 0.3)",
                      "0 15px 40px rgba(147, 51, 234, 0.4)",
                      "0 10px 30px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨ ARTÍCULO TÉCNICO
                </motion.div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <motion.div
                  className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-white/20"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <BsClock className='text-sky-400' />
                  8 min lectura
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced Article Meta */}
          <div className='space-y-8'>
            {/* Enhanced Tags */}
            <motion.div 
              className='flex flex-wrap gap-3'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, staggerChildren: 0.1 }}>
              {article.tags.map((tag, index) => (
                <motion.span 
                  key={index}
                  className='px-5 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/30 rounded-full hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer backdrop-blur-sm'
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Enhanced Title */}
            <motion.h1 
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}>
              {article.title}
            </motion.h1>
            
            {/* Enhanced Author Info */}
            <motion.div 
              className='flex items-center gap-6 p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600/30'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}>
              <motion.img
                src={emerson}
                alt='Emerson Espinoza'
                className='h-14 w-14 object-cover rounded-full border-2 border-blue-500/30'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3 text-lg'>
                  <a
                    href='https://www.linkedin.com/in/emerson-espinoza/'
                    target={'_blank'}
                    className='font-semibold text-white hover:text-blue-400 transition-colors'>
                    Emerson Espinoza
                  </a>
                  <span className='text-zinc-500'>•</span>
                  <span className='text-zinc-400 font-medium'>{article.date}</span>
                </div>
                <p className='text-sm text-zinc-400'>Senior Full Stack Developer & AI Specialist</p>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced Article Stats */}
          <motion.div 
            className='flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-700/50'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}>
            <div className='flex items-center gap-6 text-sm text-zinc-500'>
              <div className='flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50'>
                <BsCalendar className='text-blue-400' />
                <span className='font-medium'>{article.date}</span>
              </div>
              <div className='flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50'>
                <BsClock className='text-green-400' />
                <span className='font-medium'>8 min lectura</span>
              </div>
              <div className='flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50'>
                <BsEye className='text-purple-400' />
                <span className='font-medium'>1.2k vistas</span>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className='flex items-center gap-3'>
              <motion.button 
                onClick={handleShare}
                className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl transition-all text-sm font-semibold text-blue-400 hover:text-blue-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <BiShare className='text-lg' />
                <span>Compartir</span>
              </motion.button>
              
              <motion.button 
                onClick={handleLike}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all text-sm font-semibold ${
                  isLiked 
                    ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 text-red-400' 
                    : 'bg-gradient-to-r from-red-500/10 to-pink-500/10 hover:from-red-500/20 hover:to-pink-500/20 border border-red-500/30 hover:border-red-400/50 text-red-400 hover:text-red-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {isLiked ? <BsHeartFill className='text-lg' /> : <BsHeart className='text-lg' />}
                <span>{isLiked ? 'Te gusta' : 'Me gusta'}</span>
              </motion.button>
              
              <motion.button 
                onClick={handleBookmark}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all text-sm font-semibold ${
                  isBookmarked 
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 text-yellow-400' 
                    : 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 border border-yellow-500/30 hover:border-yellow-400/50 text-yellow-400 hover:text-yellow-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {isBookmarked ? <FaBookmark className='text-lg' /> : <FaRegBookmark className='text-lg' />}
                <span>{isBookmarked ? 'Guardado' : 'Guardar'}</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Article Content */}
        <motion.div
          className='space-y-12 mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          
          {/* Main Article Container with improved readability */}
          <div className='bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl relative overflow-hidden'>
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/8 to-pink-500/8 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-xl" />
            
            {/* Content wrapper with better spacing and max-width for readability */}
            <div className='relative p-8 lg:p-16'>
              <div className='max-w-4xl mx-auto'>
                <div
                  className='prose prose-invert prose-lg lg:prose-xl max-w-none 
                           prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:leading-tight
                           prose-h1:text-4xl lg:prose-h1:text-5xl prose-h1:mb-8 prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-blue-200 prose-h1:bg-clip-text prose-h1:text-transparent
                           prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-700/50 prose-h2:bg-gradient-to-r prose-h2:from-blue-400 prose-h2:to-purple-400 prose-h2:bg-clip-text prose-h2:text-transparent
                           prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-300
                           prose-p:text-zinc-200 prose-p:leading-loose prose-p:text-base lg:prose-p:text-lg prose-p:mb-6 prose-p:tracking-wide
                           prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline prose-a:transition-all
                           prose-strong:text-white prose-strong:font-semibold
                           prose-code:text-blue-400 prose-code:bg-slate-800/80 prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm prose-code:font-mono
                           prose-pre:bg-slate-900/90 prose-pre:border prose-pre:border-slate-700/50 prose-pre:rounded-2xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:shadow-2xl
                           prose-blockquote:border-l-4 prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-800/40 prose-blockquote:text-zinc-300 prose-blockquote:rounded-r-xl prose-blockquote:p-6 prose-blockquote:my-8 prose-blockquote:font-medium prose-blockquote:italic
                           prose-ul:text-zinc-200 prose-ul:space-y-2 prose-ul:my-6
                           prose-ol:text-zinc-200 prose-ol:space-y-2 prose-ol:my-6
                           prose-li:text-zinc-200 prose-li:leading-relaxed prose-li:pl-2
                           prose-li:marker:text-blue-400 prose-li:marker:font-bold
                           prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8 prose-img:mx-auto prose-img:border prose-img:border-slate-700/30
                           prose-table:border prose-table:border-slate-700/50 prose-table:rounded-xl prose-table:overflow-hidden
                           prose-th:bg-slate-800/50 prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-th:border-b prose-th:border-slate-700/50
                           prose-td:p-4 prose-td:border-b prose-td:border-slate-700/30 prose-td:text-zinc-300'
                  dangerouslySetInnerHTML={{ __html: article.content }}>
                </div>
              </div>
            </div>
            
            {/* Reading progress indicator */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-1 h-32 bg-slate-700/30 rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                  style={{ height: `${readingProgress}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${readingProgress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
          </div>
          
          {/* Enhanced Author Section */}
          <motion.div 
            className='bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
            
            <div className='flex items-center gap-8'>
              <motion.img
                src={emerson}
                alt='Emerson Espinoza'
                className='w-20 h-20 object-cover rounded-full border-3 border-blue-500/30'
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className='space-y-3 flex-1'>
                <h3 className='text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent'>Emerson Espinoza</h3>
                <p className='text-zinc-400 text-lg leading-relaxed'>Desarrollador Full Stack especializado en tecnologías modernas y soluciones innovadoras. Apasionado por la IA y el desarrollo web de vanguardia.</p>
                <div className='flex flex-wrap gap-4 text-sm text-zinc-500'>
                  <span className='flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full'>
                    <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                    Más de 50 artículos publicados
                  </span>
                  <span className='flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full'>
                    <div className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></div>
                    Experto en React, Node.js, Python
                  </span>
                  <span className='flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full animate-pulse'></div>
                    AI & Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Table of Contents */}
        <motion.div 
          className='bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden mb-12'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl" />
          
          <div className='space-y-4'>
            <h3 className='text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2'>
              <BsClock className='text-indigo-400' />
              Tabla de Contenidos
            </h3>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors cursor-pointer border border-slate-700/30'>
                <span className='text-zinc-300'>Tiempo de lectura estimado</span>
                <span className='text-blue-400 font-semibold'>8 min</span>
              </div>
              <div className='flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors cursor-pointer border border-slate-700/30'>
                <span className='text-zinc-300'>Nivel de dificultad</span>
                <span className='text-green-400 font-semibold'>Intermedio</span>
              </div>
              <div className='flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors cursor-pointer border border-slate-700/30'>
                <span className='text-zinc-300'>Última actualización</span>
                <span className='text-purple-400 font-semibold'>{article.date}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Sidebar Section */}
        <div className='grid rounded-2xl md:rounded-3xl w-full px-4 md:px-8 py-8 md:py-16 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 gap-8 md:gap-16 lg:grid-cols-12 relative overflow-hidden'>
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl md:rounded-3xl" />
          
          <div className='grid lg:col-span-8 gap-6 md:gap-8'>
            {/* Newsletter Signup */}
            <motion.div 
              className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6 md:p-8 text-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>📧 ¡No te pierdas nada!</h3>
              <p className='text-zinc-300 mb-6 text-sm md:text-base'>Súscribete para recibir mis últimos artículos sobre desarrollo web, IA y tecnología.</p>
              <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                <input 
                  type='email' 
                  placeholder='tu@email.com'
                  className='flex-1 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-600/50 text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500/50 text-sm'
                />
                <motion.button 
                  className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all text-sm'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  Suscribirse
                </motion.button>
              </div>
            </motion.div>
            
            {/* Comments placeholder */}
            <div className='text-center py-6 md:py-12'>
              <h3 className='text-xl md:text-2xl font-bold text-zinc-400 mb-4'>Sección de comentarios próximamente</h3>
              <p className='text-zinc-500 text-sm md:text-base'>Estamos trabajando en una experiencia de comentarios interactiva.</p>
            </div>
          </div>
          
          <div className='lg:col-span-4 flex flex-col gap-6 md:gap-8'>
            {/* Enhanced Social Card */}
            <motion.div 
              className='p-6 border border-slate-600/30 rounded-2xl flex flex-col justify-center gap-6 h-fit text-zinc-400 text-sm font-medium text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <motion.img
                src={Logo}
                alt='emersondev logo'
                className='object-cover max-h-12 w-fit m-auto'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <p className='text-lg leading-relaxed'>
                Si crees que mi contenido te es útil, te invito a seguirme en
                mis otras redes! 😏
              </p>
              <div className='flex gap-4 justify-center w-full'>
                <motion.a
                  target={'_blank'}
                  href='https://github.com/emersonxinay'
                  className='p-3 bg-slate-700/50 rounded-full hover:bg-slate-600/50 hover:text-white transition-all'
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}>
                  <FaGithub className='text-xl' />
                </motion.a>
                <motion.a
                  target={'_blank'}
                  href='https://www.linkedin.com/in/emerson-espinoza-aguirre/'
                  className='p-3 bg-slate-700/50 rounded-full hover:bg-blue-600/50 hover:text-white transition-all'
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}>
                  <FaLinkedinIn className='text-xl' />
                </motion.a>
                <motion.a
                  target={'_blank'}
                  href='https://discord.com/'
                  className='p-3 bg-slate-700/50 rounded-full hover:bg-indigo-600/50 hover:text-white transition-all'
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}>
                  <FaDiscord className='text-xl' />
                </motion.a>
                <motion.a
                  target={'_blank'}
                  href='https://twitter.com/compilandocode'
                  className='p-3 bg-slate-700/50 rounded-full hover:bg-sky-600/50 hover:text-white transition-all'
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}>
                  <BsTwitter className='text-xl' />
                </motion.a>
                <motion.a
                  target={'_blank'}
                  href='https://www.twitch.tv/emersonxinay'
                  className='p-3 bg-slate-700/50 rounded-full hover:bg-purple-600/50 hover:text-white transition-all'
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}>
                  <ImTwitch className='text-xl' />
                </motion.a>
              </div>
            </motion.div>
            
            {/* Enhanced Tags Card */}
            <motion.div 
              className='p-6 border border-slate-600/30 rounded-2xl flex flex-col justify-center gap-6 h-fit text-zinc-400 text-sm font-medium bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <h2 className='text-2xl font-black text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                Etiquetas
              </h2>
              <div className='flex gap-3 flex-wrap justify-center text-center'>
                {article.tags.map((t) => (
                  <motion.span
                    key={t}
                    className='border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-2 rounded-xl text-blue-400 hover:border-blue-400/50 transition-all cursor-pointer'
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}>
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Enhanced Recent Articles Card */}
            <motion.div 
              className='p-6 border border-slate-600/30 rounded-2xl flex flex-col justify-center gap-6 h-fit text-zinc-400 text-sm font-medium bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm relative overflow-hidden'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl" />
              
              <h2 className='text-xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
                Artículos relacionados
              </h2>
              <div className='space-y-3'>
                {articles.filter(a => a.url !== article.url).slice(0, 3).map((a) => (
                  <motion.div 
                    key={a.url}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <Link
                      to={`/blog/${a.url}`}
                      className='block p-4 rounded-xl bg-gradient-to-r from-slate-700/20 to-slate-600/20 hover:from-slate-600/30 hover:to-slate-500/30 transition-all group border border-slate-600/20 hover:border-blue-500/40 relative overflow-hidden'
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                      
                      <div className='flex gap-3'>
                        <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-blue-500/30'>
                          <span className='text-blue-400 font-bold text-sm'>{a.title.charAt(0)}</span>
                        </div>
                        
                        <div className='flex-1 space-y-2'>
                          <h3 className='text-white group-hover:text-blue-300 transition-colors font-semibold text-sm leading-tight line-clamp-2'>
                            {a.title}
                          </h3>
                          <div className='flex items-center gap-3 text-xs'>
                            <div className='flex items-center gap-1 text-zinc-500'>
                              <BsCalendar className='text-blue-400' />
                              <span>{a.date}</span>
                            </div>
                            <div className='flex items-center gap-1 text-zinc-500'>
                              <BsClock className='text-green-400' />
                              <span>5 min</span>
                            </div>
                          </div>
                          <div className='flex flex-wrap gap-1'>
                            {a.tags.slice(0, 2).map(tag => (
                              <span key={tag} className='px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded border border-blue-500/20'>
                                {tag.replace('#', '')}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div className='pt-4 border-t border-slate-600/30'>
                <Link
                  to='/blog'
                  className='block text-center py-3 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/30 hover:border-blue-400/50 rounded-xl transition-all text-sm font-semibold text-blue-400 hover:text-blue-300'
                >
                  Ver todos los artículos →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Article;
