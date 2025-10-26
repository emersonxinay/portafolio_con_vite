import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Nav from './pages/Nav/Nav';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import SkipNavigation from './components/SkipNavigation';
import { AnimatePresence } from 'framer-motion';

// Lazy load de páginas para mejor rendimiento
const Home = lazy(() => import('./pages/Home/Home'));
const ProjectsPage = lazy(() => import('./pages/Projects/Projects'));
const Docs = lazy(() => import('./pages/Docs/Docs'));
const HTML = lazy(() => import('./pages/Docs/HTML/HTML'));
const Tools = lazy(() => import('./pages/Tools/Tools'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const Article = lazy(() => import('./pages/Blog/Article'));
const CVHarvard = lazy(() => import('./pages/CV/CVHarvard'));
const CVCorporate = lazy(() => import('./pages/CV/CVCorporate'));
const CVGenerator = lazy(() => import('./pages/CVGenerator/CVGenerator'));
const Error = lazy(() => import('./pages/Error/Error'));

// Componente de carga para Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#090e19]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-cyan-400 text-sm font-medium">Cargando...</p>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  
  return (
    <div className='grid relative w-full min-h-screen bg-[#090e19] text-white overflow-x-hidden'>
      <SkipNavigation />
      <ScrollToTop />
      <Nav />
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: '10px'
          }
        }}
      />
      <AnimatePresence mode='wait'>
        <Suspense fallback={<PageLoader />}>
          <main id="main-content" role="main">
            <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/docs/html' element={<HTML />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<Article />} />
            <Route path='/cv/harvard' element={<CVHarvard />} />
            <Route path='/cv/corporate' element={<CVCorporate />} />
            <Route path='/cv/generator' element={<CVGenerator />} />
            <Route path='*' element={<Error />} />
          </Routes>
          </main>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;