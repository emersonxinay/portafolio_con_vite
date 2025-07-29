import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from './Articles';
import './article.module.scss';
import { motion } from 'framer-motion';
import CustomCursor from '../../components/CustomCursor';
import { TiArrowBack } from 'react-icons/ti';
import emerson from '../../assets/emerson-espinoza.jpeg';
import Logo from '../../assets/logo.jpeg';
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import { BsTwitter, BsCalendar, BsClock, BsEye, BsHeart } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi';
import { ImTwitch } from 'react-icons/im';

const Article = () => {
  let { id } = useParams();
  const article = articles.find((a) => a.url == id);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // on enter in component scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className='max-w-7xl m-auto px-2 md:px-8 w-full min-h-screen mt-40 mb-32 relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      {/* Custom cursor */}
      <CustomCursor></CustomCursor>

      {/* Lights */}
      <motion.div
        className='absolute  -translate-x-1/2 shadow-[0px_0px_300px_50px_#0ea5e9]'
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
      <motion.div
        className='absolute  left-full -translate-x-1/2 top-[100vh]  shadow-[0px_0px_300px_50px_#0ea5e9]'
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
      <motion.div
        className='absolute  -translate-x-1/2 top-full  shadow-[0px_0px_300px_50px_#0ea5e9]'
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

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}>
        <Link
          to={'/blog'}
          className='inline-flex items-center gap-3 text-zinc-400 hover:text-sky-400 transition-all group w-fit px-4 py-2 rounded-lg hover:bg-slate-800/50'
          style={{ transitionDuration: '300ms' }}>
          <TiArrowBack className='group-hover:-translate-x-1 transition-transform' />
          <span className='font-medium'>Volver al blog</span>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.div 
        className='space-y-8'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        
        {/* Hero Image */}
        <div className='relative overflow-hidden rounded-2xl'>
          <img
            src={article.thumbnail}
            alt={article.title}
            className='w-full h-96 lg:h-[500px] object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
        </div>
        
        {/* Article Meta */}
        <div className='space-y-6'>
          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className='px-4 py-2 text-sm font-medium bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 hover:bg-sky-500/20 transition-colors'>
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className='text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent'>
            {article.title}
          </h1>
          
          {/* Author Info */}
          <div className='flex items-center gap-4 text-sm text-zinc-400'>
            <img
              src={emerson}
              alt='Emerson Espinoza'
              className='h-10 w-10 object-cover rounded-full'
            />
            <div className='flex items-center gap-2'>
              <a
                href='https://www.linkedin.com/in/emerson-espinoza/'
                target={'_blank'}
                className='hover:text-sky-400 transition-colors'>
                Emerson Espinoza
              </a>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
          
          {/* Article Stats */}
          <div className='flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-700/50'>
            <div className='flex items-center gap-6 text-sm text-zinc-500'>
              <div className='flex items-center gap-2'>
                <BsCalendar className='text-sky-400' />
                <span>{article.date}</span>
              </div>
              <div className='flex items-center gap-2'>
                <BsClock className='text-sky-400' />
                <span>8 min lectura</span>
              </div>
              <div className='flex items-center gap-2'>
                <BsEye className='text-sky-400' />
                <span>1.2k vistas</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className='flex items-center gap-3'>
              <button 
                onClick={handleShare}
                className='flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-lg transition-all text-sm font-medium'>
                <BiShare className='text-sky-400' />
                <span>Compartir</span>
              </button>
              <button className='flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-lg transition-all text-sm font-medium'>
                <BsHeart className='text-red-400' />
                <span>Me gusta</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div
        className='space-y-8'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}>
        
        <div className='bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-12'>
          <div
            className='prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-sky-400 prose-a:no-underline hover:prose-a:text-sky-300 prose-strong:text-white prose-code:text-sky-400 prose-code:bg-slate-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-slate-700/50 prose-blockquote:border-l-sky-500 prose-blockquote:bg-slate-800/30 prose-blockquote:text-zinc-300'
            dangerouslySetInnerHTML={{ __html: article.content }}>
          </div>
        </div>
        
        {/* Author Section */}
        <div className='bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8'>
          <div className='flex items-center gap-6'>
            <img
              src={emerson}
              alt='Emerson Espinoza'
              className='w-16 h-16 object-cover rounded-full'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold'>Emerson Espinoza</h3>
              <p className='text-zinc-400'>Desarrollador Full Stack especializado en tecnologías modernas y soluciones innovadoras.</p>
              <div className='flex gap-2 text-sm text-zinc-500'>
                <span>•</span>
                <span>Más de 50 artículos publicados</span>
                <span>•</span>
                <span>Experto en React, Node.js, Python</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sidebar Section */}
      <div className='grid rounded-xl w-full px-2 md:px-16 lg:px-16 py-16 bg-gradient-to-r from-slate-900 to-slate-800 ring-0 gap-16 lg:grid-cols-12'>
        <div className='grid lg:col-span-8 gap-8'>
          {/* Main content area - can be used for related articles or comments */}
        </div>
        
        <div className='lg:col-span-4 flex flex-col gap-8'>
          <div className='p-4 border-solid border-zinc-400/20 border-[1px] rounded-xl flex flex-col justify-center gap-4 h-fit text-zinc-400  text-sm font-medium text-center'>
            <img
              src={Logo}
              alt='emersondev logo'
              className='object-cover max-h-10 w-fit m-auto'
            />
            <p>
              Si crees que mi contenido te es útil, te invito a seguirme en
              mis otras redes! 😏
            </p>
            <div className='flex gap-4 justify-center w-full'>
              <a
                target={'_blank'}
                href='https://github.com/emersonxinay'
                className='hover:text-white transition-colors'>
                <FaGithub></FaGithub>
              </a>
              <a
                target={'_blank'}
                href='https://www.linkedin.com/in/emerson-espinoza-aguirre/'
                className='hover:text-white transition-colors'>
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a
                target={'_blank'}
                href='https://discord.com/'
                className='hover:text-white transition-colors'>
                <FaDiscord></FaDiscord>
              </a>
              <a
                target={'_blank'}
                href='https://twitter.com/compilandocode'
                className='hover:text-white transition-colors'>
                <BsTwitter></BsTwitter>
              </a>
              <a
                target={'_blank'}
                href='https://www.twitch.tv/emersonxinay'
                className='hover:text-white transition-colors'>
                <ImTwitch></ImTwitch>
              </a>
            </div>
          </div>
          <div className='p-4 border-solid border-zinc-400/20 border-[1px] rounded-xl flex flex-col justify-center gap-4 h-fit text-zinc-400  text-sm font-medium'>
            <h2 className='text-xl font-black text-center text-sky-500'>
              Etiquetas
            </h2>
            <div className='flex gap-2 flex-wrap justify-center text-center'>
              {article.tags.map((t) => (
                <span
                  key={t}
                  className='border-solid border-[1px] border-zinc-400/10 px-2 py-1 rounded-xl'>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className='p-4 border-solid border-zinc-400/20 border-[1px] rounded-xl flex flex-col justify-center gap-4 h-fit text-zinc-400  text-sm font-medium divide-y-2 divide-zinc-400/10'>
            <h2 className='text-xl font-black text-center text-sky-500'>
              Artículos recientes
            </h2>
            {articles.map((a) => (
              <Link
                to={`/blog/${a.url}`}
                key={a.url}
                className='grid gap-2 p-2 group'>
                <h3 className='text-white group-hover:text-sky-500 transition-colors'>
                  {a.title}
                </h3>
                <span className='text-xs'>{a.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
