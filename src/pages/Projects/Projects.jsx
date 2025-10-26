import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEOHead from '../../components/SEO/SEOHead';
import ProjectsComponent from '../Home/Projects/Projects';

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": i18n.language === 'ES' ? "Proyectos - Emerson Espinoza" : "Projects - Emerson Espinoza",
    "description": t('seo.projects.description'),
    "url": "https://emersonespinoza.com/projects",
    "author": {
      "@type": "Person",
      "name": "Emerson Espinoza Aguirre",
      "url": "https://emersonespinoza.com"
    }
  };

  return (
    <>
      <SEOHead
        title={i18n.language === 'ES'
          ? "Proyectos - Emerson Espinoza | Portfolio de Software Engineering"
          : "Projects - Emerson Espinoza | Software Engineering Portfolio"
        }
        description={i18n.language === 'ES'
          ? "Explora mis proyectos de desarrollo web, aplicaciones móviles, sistemas de IA/ML y soluciones empresariales. Proyectos full-stack con React, Python, Node.js y más."
          : "Explore my web development, mobile apps, AI/ML systems and enterprise solutions projects. Full-stack projects with React, Python, Node.js and more."
        }
        keywords="proyectos software, portfolio desarrollo web, proyectos React, proyectos Python, aplicaciones full-stack, proyectos IA ML, portfolio tech lead, proyectos enterprise, desarrollo software Chile, Emerson Espinoza proyectos"
        url="https://emersonespinoza.com/projects"
        canonical="https://emersonespinoza.com/projects"
        structuredData={projectsStructuredData}
        type="website"
      />

      <motion.main
        className="w-full overflow-hidden mobile-safe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-container space-y-12 xs:space-y-16 md:space-y-24 py-12 xs:py-16 md:py-20 safe-area-bottom w-full">
          <ProjectsComponent />
        </div>

        {/* Background Effects - igual que en Home */}
        <motion.div
          className="fixed bottom-0 right-0 w-48 h-48 xs:w-64 xs:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.main>
    </>
  );
};

export default ProjectsPage;
