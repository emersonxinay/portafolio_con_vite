export const projectsData = [
  {
    id: 1,
    title: "Kefyto E-commerce",
    description: "Plataforma completa de e-commerce para venta de kéfir natural con carrito dinámico e integración WhatsApp",
    category: "ecommerce",
    tech: ["React", "Flask", "PostgreSQL", "WhatsApp API"],
    image: "/images/kefyto-preview.png",
    liveUrl: "https://www.kefytotubulgarito.com/",
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
    description: "Sistema integral de gestión para restaurantes con reservas, menús digitales y administración por áreas",
    category: "web",
    tech: ["Python", "Flask", "PostgreSQL", "JavaScript", "HTML", "CSS"],
    image: "/images/hazuki-preview.png",
    liveUrl: "https://hazukirestaurant.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-900/10 to-cyan-900/10",
    featured: true
  },
  {
    id: 3,
    title: "Hazuki Sushi",
    description: "Plataforma especializada para sushi bar con menú interactivo y sistema de pedidos optimizado",
    category: "web",
    tech: ["Python", "Flask", "PostgreSQL", "JavaScript"],
    image: "/images/hazuki-sushi-preview.png",
    liveUrl: "https://hazukisushi.cl/",
    githubUrl: "#",
    status: "live",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    color: "from-red-400 to-orange-500",
    bgColor: "from-red-900/10 to-orange-900/10",
    featured: true
  },
  {
    id: 4,
    title: "Netmuz Social",
    description: "Red social especializada para músicos - LinkedIn musical con gestión de eventos y marketplace",
    category: "social",
    tech: ["React", "Express", "PostgreSQL", "Node.js"],
    image: "/images/netmuz-preview.png",
    liveUrl: "https://www.netmuz.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-900/10 to-pink-900/10",
    featured: true
  },
  {
    id: 5,
    title: "CompilandoCode",
    description: "Plataforma educativa con cursos de programación, blog técnico y recursos para desarrolladores",
    category: "saas",
    tech: ["React", "Python", "Flask", "PostgreSQL"],
    image: "/images/compilando-preview.png",
    liveUrl: "https://www.compilandocode.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-900/10 to-cyan-900/10",
    featured: true
  },
  {
    id: 6,
    title: "Sistema Registro QR",
    description: "Sistema de registro en tiempo real con códigos QR para control de asistencia en colegios",
    category: "web",
    tech: ["C#", ".NET", "React", "PostgreSQL"],
    image: "/images/qr-system-preview.png",
    liveUrl: "https://registro.compilandocode.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    color: "from-indigo-400 to-purple-500",
    bgColor: "from-indigo-900/10 to-purple-900/10",
    featured: true
  },
  {
    id: 7,
    title: "Escondida DesafioLab",
    description: "Plataforma educativa para Fundación Minera Escondida BHP con gestión de cursos y seguimiento estudiantil",
    category: "saas",
    tech: ["Python", "Flask", "React", "PostgreSQL"],
    image: "/images/escondida-preview.png",
    liveUrl: "https://escondida.desafiolab.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-900/10 to-red-900/10",
    featured: true
  },
  {
    id: 8,
    title: "DRTC Huánuco",
    description: "Sistema web para registro y seguimiento de personal que postula a puestos de trabajo (Prácticas Preprofesionales)",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/drtc-preview.png",
    liveUrl: "https://www.drtchco.gob.pe/",
    githubUrl: "#",
    status: "live",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-900/10 to-emerald-900/10",
    featured: false
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