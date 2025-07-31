/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  safelist: [
    // Ensure mobile utility classes are always included
    'mobile-container',
    'mobile-section', 
    'mobile-title',
    'mobile-subtitle',
    'mobile-btn',
    'mobile-card',
    'mobile-grid',
    'mobile-shadow',
    'mobile-scroll',
    'touch-target',
    'text-overflow-safe',
    'container-safe',
    'safe-area-top',
    'safe-area-bottom',
    // Responsive text sizes
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl',
    // Responsive spacing
    'xs:text-sm', 'xs:text-base', 'xs:text-lg', 'xs:text-xl', 'xs:text-2xl', 'xs:text-3xl', 'xs:text-4xl',
    'sm:text-base', 'sm:text-lg', 'sm:text-xl', 'sm:text-2xl', 'sm:text-3xl', 'sm:text-4xl', 'sm:text-5xl',
    'md:text-lg', 'md:text-xl', 'md:text-2xl', 'md:text-3xl', 'md:text-4xl', 'md:text-5xl', 'md:text-6xl',
    'lg:text-xl', 'lg:text-2xl', 'lg:text-3xl', 'lg:text-4xl', 'lg:text-5xl', 'lg:text-6xl', 'lg:text-7xl',
    'xl:text-2xl', 'xl:text-3xl', 'xl:text-4xl', 'xl:text-5xl', 'xl:text-6xl', 'xl:text-7xl', 'xl:text-8xl'
  ],
  theme: {
    extend: {
      // Mobile-first spacing system
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Enhanced mobile typography
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.75rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // Mobile-optimized container sizes
      maxWidth: {
        'xxs': '16rem',
        'xs': '20rem',
      },
      // Enhanced mobile animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
    transitionDuration: {
      DEFAULT: '250ms',
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    },
    // Mobile-first breakpoint system
    screens: {
      'xxs': '320px',   // Very small phones
      'xs': '375px',    // Small phones (iPhone SE)
      'sm': '640px',    // Large phones / small tablets
      'md': '768px',    // Tablets
      'lg': '1024px',   // Small laptops
      'xl': '1280px',   // Laptops
      '2xl': '1536px',  // Large screens
      '3xl': '1920px',  // Extra large screens
    }
  },
  plugins: [],
}
