import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * Implementa lazy loading y loading states para optimizar memoria
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  objectFit = 'cover',
  objectPosition = 'top',
  placeholder = 'bg-slate-800/50'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Intersection Observer para lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Disconnect después de cargar
          }
        });
      },
      {
        rootMargin: '50px', // Comenzar a cargar 50px antes de que sea visible
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder mientras carga */}
      {!isLoaded && (
        <div className={`absolute inset-0 ${placeholder} animate-pulse`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Imagen real - solo se carga cuando está en viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit,
            objectPosition
          }}
          onLoad={() => setIsLoaded(true)}
          loading="lazy" // Native lazy loading como fallback
          decoding="async" // Decodificación asíncrona para mejor performance
        />
      )}
    </div>
  );
};

export default OptimizedImage;
