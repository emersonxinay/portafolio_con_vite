/**
 * Professional Design System
 * Centralized colors, gradients, and styling constants
 */

// Color Palette
export const colors = {
  // Primary colors
  primary: {
    blue: '#3B82F6',
    purple: '#A855F7',
    cyan: '#06B6D4',
  },

  // Accent colors
  accent: {
    green: '#10B981',
    orange: '#F97316',
    pink: '#EC4899',
    red: '#EF4444',
    indigo: '#6366F1',
    teal: '#14B8A6',
    yellow: '#F59E0B',
  },

  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    slate: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    }
  }
};

// Gradient Presets
export const gradients = {
  // Primary gradients
  blueCyan: 'from-blue-400 to-cyan-500',
  bluePurple: 'from-blue-400 to-purple-500',
  purplePink: 'from-purple-400 to-pink-500',

  // Accent gradients
  greenEmerald: 'from-green-400 to-emerald-500',
  orangeRed: 'from-orange-400 to-red-500',
  indigoPurple: 'from-indigo-400 to-purple-500',
  tealCyan: 'from-teal-400 to-cyan-500',
  yellowOrange: 'from-yellow-400 to-orange-500',

  // Complex gradients
  rainbow: 'from-blue-500 via-purple-500 to-pink-500',
  sunset: 'from-orange-500 via-red-500 to-pink-500',
  ocean: 'from-blue-600 via-cyan-500 to-teal-400',

  // Background gradients (subtle)
  blueCyanBg: 'from-blue-900/10 to-cyan-900/10',
  purplePinkBg: 'from-purple-900/10 to-pink-900/10',
  greenEmeraldBg: 'from-green-900/10 to-emerald-900/10',
  orangeRedBg: 'from-orange-900/10 to-red-900/10',
  indigoPurpleBg: 'from-indigo-900/10 to-purple-900/10',
  tealCyanBg: 'from-teal-900/10 to-cyan-900/10'
};

// Gradient sets for mapping (useful for loops)
export const gradientSets = [
  {
    color: gradients.blueCyan,
    bg: gradients.blueCyanBg,
    name: 'blue-cyan'
  },
  {
    color: gradients.greenEmerald,
    bg: gradients.greenEmeraldBg,
    name: 'green-emerald'
  },
  {
    color: gradients.purplePink,
    bg: gradients.purplePinkBg,
    name: 'purple-pink'
  },
  {
    color: gradients.orangeRed,
    bg: gradients.orangeRedBg,
    name: 'orange-red'
  },
  {
    color: gradients.indigoPurple,
    bg: gradients.indigoPurpleBg,
    name: 'indigo-purple'
  },
  {
    color: gradients.tealCyan,
    bg: gradients.tealCyanBg,
    name: 'teal-cyan'
  }
];

// Card Styles
export const cardStyles = {
  base: 'bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl',
  hover: 'hover:border-slate-500/50 transition-all duration-300',
  interactive: 'cursor-pointer hover:scale-[1.02] hover:shadow-2xl',
  padding: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
};

// Button Styles
export const buttonStyles = {
  primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg',
  secondary: 'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300',
  outline: 'border-2 border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300',
  ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/50 font-semibold px-6 py-3 rounded-lg transition-all duration-300'
};

// Typography
export const typography = {
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-black',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    h5: 'text-lg md:text-xl lg:text-2xl font-semibold',
  },
  body: {
    large: 'text-lg md:text-xl',
    regular: 'text-base md:text-lg',
    small: 'text-sm md:text-base'
  },
  gradientText: 'text-transparent bg-clip-text bg-gradient-to-r'
};

// Spacing
export const spacing = {
  section: 'py-16 md:py-24',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }
};

// Shadow Presets
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  glowPurple: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  glowGreen: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]'
};

// Helper function to get gradient by index
export const getGradientSet = (index) => {
  return gradientSets[index % gradientSets.length];
};

// Icon sizes
export const iconSizes = {
  xs: 'text-sm',
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl',
  '2xl': 'text-6xl'
};
