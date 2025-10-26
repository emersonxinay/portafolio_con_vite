import React from 'react';
import { motion } from 'framer-motion';
import { typography } from '../constants/designSystem';

/**
 * Reusable Section Header component
 * Consistent styling for section titles and descriptions
 */
const SectionHeader = ({
  title,
  subtitle = null,
  icon = null,
  highlightText = null,
  gradient = 'from-blue-400 to-purple-500',
  centered = true,
  className = ''
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  const margin = centered ? 'mx-auto' : '';

  return (
    <motion.div
      className={`mb-12 md:mb-16 ${alignment} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={`${typography.heading.h2} text-white mb-4 md:mb-6`}>
        {icon && <i className={`${icon} mr-3 md:mr-4`}></i>}
        {title}
        {highlightText && (
          <>
            {' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {highlightText}
            </span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className={`${typography.body.large} text-zinc-300 max-w-4xl ${margin} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
