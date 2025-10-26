import React from 'react';
import { iconSizes } from '../constants/designSystem';

/**
 * Icon Badge component with gradient background
 * Professional replacement for emoji icons
 */
const IconBadge = ({
  icon,
  size = 'xl',
  gradient = 'from-blue-400 to-purple-500',
  bgGradient = 'from-blue-900/20 to-purple-900/20',
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: iconSizes.sm, container: 'w-8 h-8' },
    md: { icon: iconSizes.md, container: 'w-12 h-12' },
    lg: { icon: iconSizes.lg, container: 'w-16 h-16' },
    xl: { icon: iconSizes.xl, container: 'w-20 h-20' },
    '2xl': { icon: iconSizes['2xl'], container: 'w-24 h-24' }
  };

  const { icon: iconSize, container: containerSize } = sizeMap[size] || sizeMap.xl;

  return (
    <div
      className={`
        ${containerSize}
        bg-gradient-to-br ${bgGradient}
        rounded-xl
        flex items-center justify-center
        ${className}
      `}
    >
      <i className={`${icon} ${iconSize} text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}></i>
    </div>
  );
};

export default IconBadge;
