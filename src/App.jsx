import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import Docs from './pages/Docs/Docs';
import { AnimatePresence } from 'framer-motion';
import HTML from './pages/Docs/HTML/HTML';
import Tools from './pages/Tools/Tools';
import Error from './pages/Error/Error';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article';
import Home from './pages/Home/Home';

function App() {
  const location = useLocation();
  
  return (
    <div className='grid relative w-full min-h-screen bg-[#090e19] text-white overflow-x-hidden'>
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
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/docs/html' element={<HTML />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<Article />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;