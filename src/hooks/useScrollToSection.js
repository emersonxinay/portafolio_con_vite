import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to sections
 * Centralizes scroll navigation logic
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const scrollToContact = useCallback(() => {
    scrollToSection('#contact');
  }, [scrollToSection]);

  const scrollToProjects = useCallback(() => {
    scrollToSection('#projects');
  }, [scrollToSection]);

  const scrollToAbout = useCallback(() => {
    scrollToSection('#about');
  }, [scrollToSection]);

  return {
    scrollToSection,
    scrollToTop,
    scrollToContact,
    scrollToProjects,
    scrollToAbout
  };
};
