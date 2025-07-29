import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { BsArrowRight, BsSearch, BsCalendar, BsClock } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import BottomContainer from '../../components/BottomContainer';
import Title from '../../components/Title';
import articles from './Articles.jsx';

const Blog = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation('translation');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Get unique categories from articles
  const categories = ['all', ...new Set(articles.flatMap(article => 
    article.tags.map(tag => tag.replace('#', '').toLowerCase())
  ))];

  useEffect(() => {
    if (i18n.language === 'EN') {
      toast.error(
        'I am currently creating content in Spanish only, sorry!'
      );
    }
  }, [i18n.language]);

  // Filter articles based on search and category
  useEffect(() => {
    let filtered = articles;
    
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => 
        article.tags.some(tag => 
          tag.replace('#', '').toLowerCase() === selectedCategory
        )
      );
    }
    
    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <motion.div
      className='max-w-7xl m-auto px-4 xs:px-8 relative w-full min-h-screen flex flex-col gap-16 mt-40 pb-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      
      {/* Enhanced Hero Section */}
      <div className='text-center space-y-8 relative'>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            style={{ top: '10%', left: '20%' }}
          />
          <motion.div
            className="absolute w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 3 }}
            style={{ bottom: '20%', right: '25%' }}
          />
        </div>

        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Technical Blog
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              🚀 Enterprise-Level Insights & Technical Deep Dives
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              Explora artículos sobre desarrollo web moderno, arquitecturas escalables, inteligencia artificial aplicada, 
              y las tecnologías que impulsan a las empresas más innovadoras del mundo.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  {articles.length}+
                </div>
                <div className="text-sm text-zinc-400 font-medium">Artículos Técnicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  500K+
                </div>
                <div className="text-sm text-zinc-400 font-medium">Líneas de Código</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  6+
                </div>
                <div className="text-sm text-zinc-400 font-medium">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Search and Filter Section */}
      <motion.div 
        className='bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}>
        
        <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
          {/* Search Bar */}
          <div className='relative flex-1 max-w-md'>
            <BsSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 z-10' />
            <input
              type='text'
              placeholder='Buscar por título, tecnología o concepto...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-2xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 hover:border-slate-500/70'
            />
            {searchTerm && (
              <motion.button
                onClick={() => setSearchTerm('')}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                ✕
              </motion.button>
            )}
          </div>

          {/* Category Filter */}
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <BiCategory className='text-purple-400 text-xl' />
              <span className='text-zinc-300 font-medium'>Filtrar:</span>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='px-6 py-4 bg-slate-800/50 border border-slate-600/50 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-300 hover:border-slate-500/70 cursor-pointer'>
              {categories.map(category => (
                <option key={category} value={category} className='bg-slate-800'>
                  {category === 'all' ? '📚 Todas las categorías' : `🔧 ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Results Info */}
        <motion.div 
          className='mt-6 pt-6 border-t border-slate-700/50 flex items-center justify-between'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className='text-zinc-400 text-sm'>
            {searchTerm || selectedCategory !== 'all' ? (
              <span>
                <span className='font-medium text-blue-400'>{filteredArticles.length}</span> artículos encontrados
                {searchTerm && <span> para "{searchTerm}"</span>}
                {selectedCategory !== 'all' && <span> en {selectedCategory}</span>}
              </span>
            ) : (
              <span>
                Mostrando <span className='font-medium text-blue-400'>{articles.length}</span> artículos técnicos
              </span>
            )}
          </div>
          
          <div className='flex items-center gap-2 text-xs text-zinc-500'>
            <span>Ordenado por fecha</span>
            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Articles Grid */}
      <div className='grid relative gap-8'>
        <motion.div
          className='absolute shadow-[0px_0px_300px_50px_#0ea5e9] left-full'
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
          className='absolute shadow-[0px_0px_300px_50px_#0ea5e9] top-full'
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
        {filteredArticles.length === 0 ? (
          <motion.div 
            className='text-center py-20'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 mx-auto max-w-lg">
              <motion.div 
                className='text-8xl mb-6'
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🔍
              </motion.div>
              <h3 className='text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                No se encontraron artículos
              </h3>
              <p className='text-zinc-300 text-lg leading-relaxed mb-6'>
                No encontramos artículos que coincidan con tu búsqueda. Intenta con otros términos o explora todas las categorías.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔄 Mostrar Todos los Artículos
                </motion.button>
                <motion.button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-slate-700/50 text-zinc-300 font-medium rounded-2xl border border-slate-600/50 hover:bg-slate-600/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✨ Limpiar Búsqueda
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          filteredArticles.map((a, i) => (
            <motion.div
              key={'f' + i}
              className='w-full h-full'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Link
                to={'/blog/' + a.url}
                key={a.url}
                className='bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl grid group relative overflow-hidden md:grid-cols-12 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2'>
                <BottomContainer></BottomContainer>
                
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Article Image */}
                <div className='md:col-span-5 relative overflow-hidden rounded-l-3xl'>
                  <img
                    src={a.thumbnail}
                    alt={a.title}
                    className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    TECH ARTICLE
                  </div>
                  
                  {/* Reading time overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <BsClock className='text-xs' />
                    5 min
                  </div>
                </div>
                
                {/* Article Content */}
                <div className='flex flex-col md:col-span-7 relative px-8 py-8 justify-between gap-6'>
                  <div className='space-y-6'>
                    {/* Enhanced Tags */}
                    <div className='flex flex-wrap gap-2'>
                      {a.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          className='px-4 py-2 text-xs font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 backdrop-blur-sm'
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {a.tags.length > 3 && (
                        <span className='px-4 py-2 text-xs font-bold bg-gradient-to-r from-zinc-700/50 to-zinc-600/50 text-zinc-300 rounded-full border border-zinc-600/30'>
                          +{a.tags.length - 3} más
                        </span>
                      )}
                    </div>
                    
                    {/* Enhanced Title */}
                    <h3 className='font-black text-2xl lg:text-3xl leading-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500'>
                      {a.title}
                    </h3>
                    
                    {/* Enhanced Description */}
                    <p className='text-zinc-300 text-lg leading-relaxed line-clamp-3 group-hover:text-zinc-200 transition-colors duration-300'>
                      {a.description}
                    </p>
                  </div>
                  
                  {/* Enhanced Footer */}
                  <div className='flex justify-between items-center pt-6 border-t border-slate-600/50'>
                    <div className='flex items-center gap-6 text-sm text-zinc-400'>
                      <div className='flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-xl'>
                        <BsCalendar className='text-blue-400' />
                        <span className='font-medium'>{a.date}</span>
                      </div>
                      <div className='flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-xl'>
                        <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                        <span className='font-medium'>Actualizado</span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className='flex items-center gap-3 text-blue-400 group-hover:text-blue-300 transition-all duration-300 font-bold bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-3 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Leer Artículo</span>
                      <BsArrowRight className='group-hover:translate-x-2 transition-transform duration-300' />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Blog;
