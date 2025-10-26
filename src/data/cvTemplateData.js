// Template base para generar CVs personalizados
export const defaultCVData = {
  personalInfo: {
    fullName: "Emerson Espinoza Aguirre",
    title: "Senior Software Engineer & Tech Lead",
    email: "emerson@emersonespinoza.com",
    phone: "+51 974361728",
    location: "Santiago, Chile",
    linkedin: "linkedin.com/in/emerson-espinoza-aguirre",
    github: "github.com/emersonxinay",
    website: "emersonespinoza.com"
  },

  summary: "Ingeniero de Sistemas con 6+ años de experiencia liderando innovación técnica en entornos empresariales. Historial comprobado arquitecturando soluciones escalables que procesan millones de transacciones. Experto en IA/ML, arquitectura de microservicios y liderazgo técnico.",

  experience: [
    {
      id: 1,
      title: "Founder & Chief Technology Officer",
      company: "CompilandoCode",
      location: "Santiago, Chile",
      period: "Feb 2022 - Presente",
      achievements: [
        "Fundé empresa tecnología educativa sirviendo 500+ estudiantes en Latinoamérica",
        "Desarrollé sistema LMS con personalización potenciada por IA",
        "Construí arquitectura plataforma escalable soportando 1000+ usuarios concurrentes",
        "Logré 40% mejora retención estudiantil a través optimización curriculum"
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "Machine Learning"],
      enabled: true
    },
    {
      id: 2,
      title: "Lead Technical Instructor",
      company: "Desafío Latam",
      location: "Santiago, Chile",
      period: "Nov 2021 - Presente",
      achievements: [
        "Lideré entrenamiento técnico para 200+ desarrolladores con 95% tasa colocación laboral",
        "Diseñé curriculum enterprise adoptado por 5+ instituciones educativas",
        "Mentoré equipos desarrollando 50+ aplicaciones producción",
        "Establecí partnerships industria resultando en pipeline directo contratación"
      ],
      technologies: ["Python", "Ruby on Rails", "JavaScript", "PostgreSQL", "AWS", "Teaching"],
      enabled: true
    },
    {
      id: 3,
      title: "Senior Software Engineer & Tech Lead",
      company: "Hazuki Restaurant Systems",
      location: "Santiago, Chile",
      period: "Feb 2018 - 2021",
      achievements: [
        "Lideré desarrollo de sistema enterprise procesando 50K+ transacciones/mes con 99.9% uptime",
        "Implementé arquitectura microservicios reduciendo tiempo respuesta 70%",
        "Optimicé infraestructura cloud resultando en $15K reducción costo anual",
        "Mentoré desarrolladores junior y establecí mejores prácticas code review"
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "JavaScript", "Docker", "Nginx"],
      enabled: true
    }
  ],

  projects: [
    {
      id: 1,
      title: "Kefyto E-commerce",
      description: "Plataforma completa de e-commerce con carrito dinámico, integración WhatsApp y gestión de inventario en tiempo real",
      year: "2024",
      technologies: ["React", "Flask", "PostgreSQL", "WhatsApp API", "Stripe"],
      enabled: true
    },
    {
      id: 2,
      title: "Hazuki Restaurant - Sistema de Gestión Integral",
      description: "Sistema enterprise para manejo de pedidos, inventario, reservas y reportes procesando 50K+ transacciones/mes",
      year: "2019-2021",
      technologies: ["Python", "Flask", "PostgreSQL", "JavaScript", "Docker", "Nginx"],
      enabled: true
    },
    {
      id: 3,
      title: "Netmuz Social - Red Social para Músicos",
      description: "Plataforma social especializada con gestión de eventos, marketplace y networking profesional",
      year: "2023",
      technologies: ["React", "Express", "Node.js", "PostgreSQL", "WebSockets"],
      enabled: true
    },
    {
      id: 4,
      title: "CompilandoCode - Plataforma Educativa Tech",
      description: "LMS con 500+ estudiantes activos, cursos de programación y sistema de evaluación automática",
      year: "2022-Presente",
      technologies: ["React", "Python", "Flask", "PostgreSQL", "Docker", "ML"],
      enabled: true
    }
  ],

  education: [
    {
      id: 1,
      degree: "Ingeniero de Sistemas",
      institution: "Universidad Nacional Hermilio Valdizán",
      location: "Huánuco, Perú",
      period: "2013-2018",
      details: "Título reconocido por SUNEDU",
      enabled: true
    },
    {
      id: 2,
      degree: "Full Stack Web Development",
      institution: "Desafío Latam",
      location: "Santiago, Chile",
      period: "2019-2020",
      details: "Especialización en Ruby on Rails y React",
      enabled: true
    }
  ],

  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "Ruby", "C#", "SQL"],
    frameworks: ["React", "Next.js", "Flask", "FastAPI", "Django", "Ruby on Rails"],
    cloud: ["AWS", "DigitalOcean", "Docker", "Kubernetes", "Nginx", "Git", "CI/CD"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    other: ["Machine Learning", "Data Science", "Software Architecture", "Technical Leadership"]
  },

  certifications: [
    {
      id: 1,
      title: "Full Stack Web Development",
      organization: "Desafío Latam",
      year: "2020",
      enabled: true
    },
    {
      id: 2,
      title: "Python for Data Science & AI",
      organization: "Platzi",
      year: "2022",
      enabled: true
    },
    {
      id: 3,
      title: "Docker & Kubernetes",
      organization: "Udemy",
      year: "2023",
      enabled: true
    }
  ],

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio (B2)" }
  ],

  metrics: {
    yearsExperience: "6+",
    successfulProjects: "50+",
    developersMentored: "200+",
    performanceImprovement: "70%",
    costReduction: "$2M+",
    uptime: "99.9%"
  }
};

// Plantillas de CV disponibles
export const cvTemplates = {
  harvard: {
    id: 'harvard',
    name: 'Harvard Style',
    description: 'CV académico tradicional, ideal para posiciones senior y academia',
    color: 'blue'
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate Modern',
    description: 'CV empresarial con métricas de impacto, ideal para Tech Lead/CTO',
    color: 'indigo'
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal Tech',
    description: 'CV minimalista enfocado en tecnologías, ideal para startups',
    color: 'gray'
  }
};

// Presets por tipo de puesto
export const jobPresets = {
  fullstack: {
    name: "Full Stack Developer",
    focusSkills: ["React", "Python", "FastAPI", "PostgreSQL", "Docker"],
    enabledSections: {
      projects: [1, 2, 4], // Kefyto, Hazuki, CompilandoCode
      experience: [1, 3]    // CTO, Hazuki
    }
  },
  backend: {
    name: "Backend Engineer",
    focusSkills: ["Python", "FastAPI", "PostgreSQL", "Docker", "Microservices"],
    enabledSections: {
      projects: [2, 3, 4],
      experience: [1, 3]
    }
  },
  techLead: {
    name: "Tech Lead / CTO",
    focusSkills: ["Technical Leadership", "Software Architecture", "Team Management"],
    enabledSections: {
      projects: [1, 2, 3, 4],
      experience: [1, 2, 3]
    }
  },
  educator: {
    name: "Technical Instructor",
    focusSkills: ["Teaching", "Curriculum Design", "Mentoring"],
    enabledSections: {
      projects: [4],
      experience: [1, 2]
    }
  }
};
