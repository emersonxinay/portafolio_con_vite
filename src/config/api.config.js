/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  env: import.meta.env.VITE_ENV || 'development',
  useMockData: import.meta.env.VITE_USE_MOCK_DATA === 'true',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
};

// API Endpoints
export const API_ENDPOINTS = {
  // Projects
  projects: {
    getAll: '/projects',
    getById: (id) => `/projects/${id}`,
    getFeatured: '/projects/featured',
    getByCategory: (category) => `/projects/category/${category}`,
    create: '/projects',
    update: (id) => `/projects/${id}`,
    delete: (id) => `/projects/${id}`
  },

  // Experience
  experience: {
    getAll: '/experience',
    getById: (id) => `/experience/${id}`,
    create: '/experience',
    update: (id) => `/experience/${id}`,
    delete: (id) => `/experience/${id}`
  },

  // Tech Stack
  techStack: {
    getAll: '/tech-stack',
    getByCategory: (category) => `/tech-stack/category/${category}`,
    create: '/tech-stack',
    update: (id) => `/tech-stack/${id}`,
    delete: (id) => `/tech-stack/${id}`
  },

  // Services
  services: {
    getAll: '/services',
    getById: (id) => `/services/${id}`,
    create: '/services',
    update: (id) => `/services/${id}`,
    delete: (id) => `/services/${id}`
  },

  // Testimonials
  testimonials: {
    getAll: '/testimonials',
    getById: (id) => `/testimonials/${id}`,
    getApproved: '/testimonials/approved',
    create: '/testimonials',
    update: (id) => `/testimonials/${id}`,
    delete: (id) => `/testimonials/${id}`
  },

  // Contact
  contact: {
    send: '/contact/send',
    subscribe: '/contact/subscribe'
  },

  // Blog
  blog: {
    getAll: '/blog',
    getById: (id) => `/blog/${id}`,
    getByCategory: (category) => `/blog/category/${category}`,
    create: '/blog',
    update: (id) => `/blog/${id}`,
    delete: (id) => `/blog/${id}`
  },

  // Analytics
  analytics: {
    trackPageView: '/analytics/page-view',
    trackEvent: '/analytics/event'
  },

  // Auth (for admin panel)
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    verify: '/auth/verify'
  }
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

// Request Headers
export const getHeaders = (includeAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  if (includeAuth) {
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};
