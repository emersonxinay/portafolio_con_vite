export const projectsData = [
  {
    id: 1,
    title: "AI-Powered Audio & Asset Architecture",
    description: "Orquestación de backend con IA para separación de audios por capas (stems), procesamiento de formato MIDI y generación automatizada de composiciones musicales.",
    category: "ecommerce",
    tech: ["Node.js", "Python (AI Audio)", "MIDI Engine", "OpenAI", "PostgreSQL", "Cloud Storage"],
    image: "/images/proyectos/jefry_studios.png",
    clientInfo: {
      name: "SALAS YNGA JEFERSON",
      ruc: "10473457887",
      location: "Lima",
      phone: "+51 927 866 705"
    },
    liveUrl: "https://yefrystudios.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-purple-600 via-pink-600 to-red-600",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-900/20 to-pink-900/20",
    metrics: {
      performance: "+300%",
      automation: "100%",
      uptime: "99.9%"
    },
    featured: true
  },
  {
    id: 0,
    title: "Aguila Lang – Lenguaje de Programación en Español",
    description: "Herramienta educativa de código abierto diseñada para la enseñanza de lógica computacional y ciencia de datos aplicada en entornos de formación corporativa. Intérprete propio publicado en npm.",
    category: "saas",
    tech: ["Rust", "LLVM", "WebAssembly", "TypeScript", "Systems Programming"],
    image: "/images/proyectos/aguila.png",
    liveUrl: "https://aguila.compilandocode.com",
    githubUrl: "https://github.com/emersonxinay/aguila",
    status: "live",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    color: "from-amber-400 to-orange-500",
    bgColor: "from-amber-900/20 to-orange-900/20",
    metrics: {
      users: "800+",
      uptime: "Open Source",
      performance: "npm"
    },
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce con Forecasting de Demanda",
    description: "E-commerce cloud-native con modelo de predicción de demanda e inventario. Series de tiempo (ARIMA, Prophet) implementadas sobre datos históricos de ventas reales, con sincronización en tiempo real y chatbot de ventas inteligente (LLM).",
    category: "ecommerce",
    tech: ["React", "Python", "ARIMA", "Prophet", "Pandas", "PostgreSQL", "WhatsApp API"],
    image: "/images/kefyto-preview.png",
    liveUrl: "https://www.kefytotubulgarito.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-900/10 to-emerald-900/10",
    metrics: {
      accuracy: "92%",
      conversion: "+35%",
      automation: "ML/AI"
    },
    featured: true
  },
  {
    id: 3,
    title: "Hazuki – Analítica de Demanda y Gestión de Inventario",
    description: "Sistema enterprise procesando 50K+ transacciones mensuales. Modelos predictivos de demanda y consumo (Python, Pandas, SQL) para optimización de inventarios en tiempo real, generando el historial de datos base para los modelos de forecasting.",
    category: "web",
    tech: ["Python", "Pandas", "SQL", "Flask", "PostgreSQL", "JavaScript", "Docker", "Nginx"],
    image: "/images/hazuki-preview.png",
    liveUrl: "https://hazukirestaurant.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-900/10 to-cyan-900/10",
    metrics: {
      users: "50K+",
      efficiency: "+45%",
      uptime: "99.9%"
    },
    featured: true
  },
  {
    id: 4,
    title: "Hazuki POS Delivery Logic",
    description: "Motor de delivery distribuido con seguimiento en tiempo real y lógica de negocio optimizada para multi-sucursales.",
    category: "web",
    tech: ["Python", "Flask", "PostgreSQL", "Google Maps API", "Nginx"],
    image: "/images/hazuki-sushi-preview.png",
    liveUrl: "https://hazukisushi.cl/",
    githubUrl: "#",
    status: "live",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    color: "from-red-400 to-orange-500",
    bgColor: "from-red-900/10 to-orange-900/10",
    metrics: {
      users: "Multi-sucursal",
      response: "<200ms",
      uptime: "99.8%"
    },
    featured: true
  },
  {
    id: 5,
    title: "Netmuz Social – Pipeline de Recomendación en Tiempo Real",
    description: "Red social con arquitectura orientada a eventos (WebSockets, Node.js). Pipeline de datos en tiempo real diseñado para alimentar modelos de recomendación de contenido basados en el comportamiento del usuario.",
    category: "social",
    tech: ["React", "Express", "Node.js", "PostgreSQL", "WebSockets", "Redis", "Python"],
    image: "/images/netmuz-preview.png",
    liveUrl: "https://www.netmuz.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    color: "from-purple-400 to-pink-500",
    bgColor: "from-purple-900/10 to-pink-900/10",
    metrics: {
      users: "Real-time",
      engagement: "+60%",
      retention: "78%"
    },
    featured: true
  },
  {
    id: 6,
    title: "Aguilab – Laboratorio Interactivo del Lenguaje Águila",
    description: "Entorno de ejecución online del lenguaje de programación Águila. Motor de interpretación en el navegador (WebAssembly) con editor de código interactivo, validación semántica en tiempo real y ambiente de sandboxing para aprendizaje de lógica computacional en español.",
    category: "saas",
    tech: ["Rust", "WebAssembly", "TypeScript", "Node.js", "FastAPI", "Python", "PostgreSQL", "Docker"],
    image: "/images/proyectos/aguila.png",
    liveUrl: "https://aguila.compilandocode.com/laboratorio",
    githubUrl: "https://github.com/emersonxinay/aguila",
    status: "live",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    color: "from-amber-400 to-orange-500",
    bgColor: "from-amber-900/20 to-orange-900/20",
    metrics: {
      users: "800+",
      performance: "WASM",
      uptime: "Open Source"
    },
    featured: true
  },
  {
    id: 10,
    title: "CompilandoCode – LMS SaaS B2B con Motor de Recomendación IA",
    description: "Plataforma educativa SaaS B2B para 500+ usuarios activos. Motor de recomendación de contenidos formativos (Scikit-learn) y modelo predictivo de abandono estudiantil con 78% de precisión, entrenado con datos reales y desplegado en producción vía FastAPI.",
    category: "saas",
    tech: ["Python", "Scikit-learn", "PyTorch", "FastAPI", "Pandas", "Node.js", "PostgreSQL", "Docker"],
    image: "/images/compilando-preview.png",
    liveUrl: "https://www.compilandocode.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-900/10 to-cyan-900/10",
    metrics: {
      students: "500+",
      accuracy: "78%",
      courses: "SaaS B2B"
    },
    featured: true
  },
  {
    id: 7,
    title: "Real-Time Identity Orchestrator",
    description: "Backend de alto rendimiento en C#/.NET para validación de identidad en tiempo real mediante QR distribuidos y sincronización continua.",
    category: "web",
    tech: ["C#", ".NET Core", "React", "PostgreSQL", "Real-time Sync", "QR Engine"],
    image: "/images/qr-system-preview.png",
    liveUrl: "https://registro.compilandocode.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    color: "from-indigo-400 to-purple-500",
    bgColor: "from-indigo-900/10 to-purple-900/10",
    metrics: {
      response: "<100ms",
      uptime: "99.9%",
      automation: "QR"
    },
    featured: true
  },
  {
    id: 8,
    title: "BHP Foundation – Modelos Predictivos Operativos",
    description: "Plataforma de gestión de innovación corporativa con pipelines de datos en AWS y modelos predictivos (Scikit-learn, Python) para trazabilidad operativa. Reducción del 60% en tiempos operativos mediante reglas predictivas derivadas del análisis histórico del sistema.",
    category: "saas",
    tech: ["Python", "Scikit-learn", "AWS Lambda", "S3", "CloudWatch", "Flask", "React", "PostgreSQL"],
    image: "/images/escondida-preview.png",
    liveUrl: "https://escondida.desafiolab.com/",
    githubUrl: "#",
    status: "live",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    color: "from-orange-400 to-red-500",
    bgColor: "from-orange-900/10 to-red-900/10",
    metrics: {
      efficiency: "-60%",
      savings: "AWS",
      accuracy: "ML Prod"
    },
    featured: true
  },
  {
    id: 9,
    title: "Legacy System Modernization (DRTC)",
    description: "Modernización y mantenimiento de sistemas estatales de registro de personal con enfoque en integridad de datos y procesos legacy.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Legacy Migration"],
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

export const openProject = (url) => {
  if (url && url !== '#') {
    const finalUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(finalUrl, '_blank');
  }
};

export const getFeaturedProjects = () => projectsData.filter(project => project.featured);

export const getProjectsByCategory = (category) => {
  return category === 'all' ? projectsData : projectsData.filter(project => project.category === category);
};