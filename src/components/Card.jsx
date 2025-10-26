import React from 'react';
import { motion } from 'framer-motion';
import { cardStyles } from '../constants/designSystem';

/**
 * Reusable Card component with consistent styling
 * Supports gradient backgrounds and hover effects
 */
const Card = ({
  children,
  className = '',
  padding = 'md',
  interactive = false,
  gradient = null,
  bgGradient = null,
  onClick = null,
  ...motionProps
}) => {
  const paddingClass = cardStyles.padding[padding];
  const interactiveClass = interactive ? cardStyles.interactive : '';

  const bgClass = bgGradient
    ? `bg-gradient-to-br ${bgGradient}`
    : cardStyles.base;

  const classes = `
    ${bgClass}
    ${cardStyles.hover}
    ${paddingClass}
    ${interactiveClass}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-xl`} />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
