/**
 * Custom hook for Framer Motion animation variants
 * Centralizes all animation patterns used across the portfolio
 */

export const useAnimationVariants = () => {
  // Standard container variants with stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Standard item variants for fade up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Fade in variant (no movement)
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Slide from left
  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Slide from right
  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Scale up variant
  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Card hover variants
  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return {
    containerVariants,
    itemVariants,
    fadeInVariants,
    slideLeftVariants,
    slideRightVariants,
    scaleUpVariants,
    cardHoverVariants
  };
};
