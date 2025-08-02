// Performance optimization utilities for Core Web Vitals

// Lazy loading images
export const lazyLoadImages = () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
    document.head.appendChild(script);
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload fonts
  const fontLinks = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' }
  ];
  
  fontLinks.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font.href;
    link.as = font.as;
    link.type = font.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Optimize Cumulative Layout Shift (CLS)
export const preventLayoutShift = () => {
  // Add aspect ratio boxes for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.style.aspectRatio && img.width && img.height) {
      img.style.aspectRatio = `${img.width} / ${img.height}`;
    }
  });
};

// Web Vitals monitoring
export const initWebVitals = () => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => {
        console.log('CLS:', metric);
        // Send to analytics
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
          non_interaction: true,
        });
      });
      
      onFID((metric) => {
        console.log('FID:', metric);
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'FID',
          value: Math.round(metric.value),
          non_interaction: true,
        });
      });
      
      onFCP((metric) => {
        console.log('FCP:', metric);
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
          non_interaction: true,
        });
      });
      
      onLCP((metric) => {
        console.log('LCP:', metric);
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
          non_interaction: true,
        });
      });
      
      onTTFB((metric) => {
        console.log('TTFB:', metric);
        gtag('event', 'web_vitals', {
          event_category: 'performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
          non_interaction: true,
        });
      });
    });
  }
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Critical CSS inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    body { margin: 0; font-family: Inter, system-ui, sans-serif; }
    .hero-section { min-height: 100vh; }
    .nav { position: fixed; top: 0; width: 100%; z-index: 1000; }
  `;
  
  const style = document.createElement('style');
  style.innerHTML = criticalCSS;
  document.head.appendChild(style);
};

// Resource hints
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
    document.head.appendChild(link);
  });
};