export const projectsData = [
  {
    id: 1,
    title: "Kefyto E-commerce",
    description: "Plataforma completa de e-commerce para venta de kéfir con sistema de pagos integrado",
    category: "ecommerce",
    tech: ["React", "Flask", "PostgreSQL", "MercadoPago"],
    image: "/images/kefyto-preview.jpg", // Placeholder - necesitarás añadir las imágenes reales
    liveUrl: "https://kefytoabby.com",
    githubUrl: "#",
    status: "live",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-900/10 to-emerald-900/10",

    featured: true
  },
  {
    id: 2,
    title: "Hazuki Restaurant",
    description: "Sistema de gestión completo para restaurante con reservas, menús dinámicos y panel administrativo",
    category: "web",
    tech: ["JavaScript", "Python", "FastAPI", "PostgreSQL"],
    image: "/images/hazuki-preview.jpg",
    liveUrl: "https://hazukirestaurant.com",
    githubUrl: "#",
    status: "live",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-900/10 to-cyan-900/10",
    featured: true
  },
  {
    id: 3,
    title: "Netmuz Social",
    description: "Red social especializada para músicos y creadores de contenido con streaming en tiempo real",
    category: "social",
    tech: ["React", "Express", "Socket.io", "PostgreSQL"],
    image: "/images/netmuz-preview.jpg",
    liveUrl: "https://netmuz.com",
    githubUrl: "#",
    status: "development",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-900/10 to-pink-900/10",

    featured: true
  },
  {
    id: 4,
    title: "SaaS Educativo",
    description: "Plataforma educativa con gestión de cursos, seguimiento de progreso y sistema de certificaciones",
    category: "saas",
    tech: ["React", "Python", "Django", "Redis"],
    image: "/images/saas-preview.jpg",
    liveUrl: "https://cursos.compilandocode.com",
    githubUrl: "#",
    status: "development",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-900/10 to-red-900/10",

    featured: true
  }
];

export const projectCategories = [
  { id: 'all', name: 'Todos', icon: 'fas fa-th-large' },
  { id: 'ecommerce', name: 'E-commerce', icon: 'fas fa-shopping-cart' },
  { id: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
  { id: 'social', name: 'Social', icon: 'fas fa-users' },
  { id: 'saas', name: 'SaaS', icon: 'fas fa-cloud' }
];

// Función helper para abrir proyectos
export const openProject = (url) => {
  if (url && url !== '#') {
    const finalUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(finalUrl, '_blank');
  }
};

// Filtrar solo proyectos destacados
export const getFeaturedProjects = () => projectsData.filter(project => project.featured);

// Obtener proyectos por categoría
export const getProjectsByCategory = (category) => {
  return category === 'all' ? projectsData : projectsData.filter(project => project.category === category);
};