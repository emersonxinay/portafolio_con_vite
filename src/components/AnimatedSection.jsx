import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationVariants } from '../hooks/useAnimationVariants';

/**
 * Animated Section wrapper component
 * Applies consistent animation patterns to sections
 */
const AnimatedSection = ({
  children,
  id = null,
  className = '',
  variant = 'container', // 'container', 'item', 'fadeIn', 'slideLeft', 'slideRight', 'scaleUp'
  delay = 0,
  staggerChildren = false
}) => {
  const variants = useAnimationVariants();

  const getVariant = () => {
    switch (variant) {
      case 'container':
        return variants.containerVariants;
      case 'item':
        return variants.itemVariants;
      case 'fadeIn':
        return variants.fadeInVariants;
      case 'slideLeft':
        return variants.slideLeftVariants;
      case 'slideRight':
        return variants.slideRightVariants;
      case 'scaleUp':
        return variants.scaleUpVariants;
      default:
        return variants.containerVariants;
    }
  };

  return (
    <motion.section
      id={id}
      className={className}
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

/**
 * Animated Grid wrapper for grid items
 */
export const AnimatedGrid = ({
  children,
  className = '',
  columns = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-6'
}) => {
  const { containerVariants } = useAnimationVariants();

  return (
    <motion.div
      className={`grid ${columns} ${gap} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Animated Item wrapper for individual items
 */
export const AnimatedItem = ({
  children,
  className = '',
  delay = 0
}) => {
  const { itemVariants } = useAnimationVariants();

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
