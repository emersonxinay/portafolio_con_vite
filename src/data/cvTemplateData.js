// Template base para generar CVs personalizados
export const defaultCVData = {
  personalInfo: {
    fullName: "Emerson Espinoza Aguirre",
    title: "Senior Backend Engineer | Cloud Solutions Architect",
    email: "emerson@emersonespinoza.com",
    phone: "+51 974361728",
    location: "Remoto / LATAM",
    linkedin: "linkedin.com/in/emerson-espinoza-aguirre",
    github: "github.com/emersonxinay",
    website: "emersonespinoza.com"
  },

  summary: "Ingeniero de Software Backend con 6+ años de trayectoria construyendo infraestructuras críticas y sistemas distribuidos de alta disponibilidad. Especialista en orquestación cloud (Azure, GCP), arquitecturas orientadas a eventos y optimización de servicios de misión crítica en Node.js y TypeScript. Mentor de más de 800 desarrolladores y líder técnico enfocado en excelencia de ingeniería y entrega continua.",

  experience: [
    {
      id: 1,
      title: "Senior Backend Developer",
      company: "Codigo Futuro - BHP",
      location: "Antofagasta, Chile",
      period: "2022 – 2025",
      achievements: [
        "Lideré el diseño de sistemas backend enterprise para trazabilidad operativa, reduciendo tiempos operativos en un 60%",
        "Arquitecturé servicios serverless en Azure Functions y AWS Lambda con Node.js/TypeScript orientados a eventos",
        "Implementé y optimicé pipelines de CI/CD en Azure DevOps reduciendo significativamente los riesgos en releases",
        "Fortalecí la observabilidad mediante logging estructurado y alertas críticas en Azure Monitor y CloudWatch"
      ],
      technologies: ["Node.js", "Azure Functions", "Azure DevOps", "Serverless", "TypeScript", "Observability"],
      enabled: true
    },
    {
      id: 2,
      title: "Senior Backend Developer",
      company: "Digital Fondos (Fintech)",
      location: "Santiago, Chile",
      period: "2021 – 2022",
      achievements: [
        "Lideré el desarrollo del core financiero de fondos mutuos asegurando integridad transaccional absoluta",
        "Diseñé servicios idempotentes en entornos distribuidos para prevenir doble procesamiento de transacciones",
        "Construí APIs REST resilientes optimizadas para operar bajo altas cargas concurrentes con manejo de errores robusto",
        "Gestioné la persistencia en Azure SQL, optimizando consultas y estructuras para mejorar la escalabilidad del core"
      ],
      technologies: ["Node.js", "Azure SQL", "Fintech API", "Idempotency", "TypeScript", "Transactional Systems"],
      enabled: true
    },
    {
      id: 3,
      title: "Founder & CTO",
      company: "CompilandoCode (EdTech)",
      location: "Chile / Peru",
      period: "Feb 2022 – Presente",
      achievements: [
        "Diseñé un LMS escalable desplegado en Google Cloud Run con enfoque en alta disponibilidad y experiencia de usuario",
        "Integré Google Identity Platform (OAuth2) y Google Maps API para geolocalización y acceso seguro",
        "Administré la infraestructura cloud completa: configuración de proyectos, control de cuotas y monitoreo en producción",
        "Creé Águila Lang, un lenguaje de programación con intérprete propio publicado y mantenido en npm"
      ],
      technologies: ["Node.js", "Google Cloud Run", "OAuth2", "Identity Platform", "Maps API", "Systems Design"],
      enabled: true
    },
    {
      id: 4,
      title: "Lead Technical Instructor",
      company: "Desafio Latam",
      location: "Santiago, Chile",
      period: "Nov 2021 – 2025",
      achievements: [
        "Lideré la formación técnica de 800+ desarrolladores en arquitecturas backend, testing y mejores prácticas",
        "Guié la revisión de proyectos reales enfocados en diseño de APIs resilientes, seguridad y despliegue continuo",
        "Promoví estándares de calidad de ingeniería y pensamiento crítico en equipos multidisciplinarios",
        "Desarrollé currículos técnicos avanzados alineados con las demandas de la industria tecnológica"
      ],
      technologies: ["Backend Architecture", "Technical Leadership", "Testing", "Clean Code", "Mentoring"],
      enabled: true
    },
    {
      id: 5,
      title: "Senior Software Engineer & Tech Lead",
      company: "Hazuki Restaurant Systems",
      location: "Peru",
      period: "2018 – 2020",
      achievements: [
        "Lideré sistema enterprise procesando 50.000+ transacciones mensuales bajo arquitectura de microservicios",
        "Optimicé rendimiento y disponibilidad mediante refactorización del core y ajuste de índices en bases de datos",
        "Integré múltiples servicios de terceros manteniendo la consistencia de datos y estabilidad del sistema",
        "Coordiné equipos técnicos para la entrega de features críticas bajo presión de negocio"
      ],
      technologies: ["Node.js", "C#", "Python", "MySQL", "Scalability", "Microservices"],
      enabled: true
    }
  ],

  projects: [
    {
      id: 1,
      title: "LMS CompilandoCode Architecture",
      description: "Plataforma educativa cloud-native con autenticación OAuth2 y escalado automático",
      year: "2022-Presente",
      technologies: ["Node.js", "Google Cloud Run", "Identity Platform", "PostgreSQL"],
      enabled: true
    },
    {
      id: 2,
      title: "BHP Traceability Engine",
      description: "Sistema enterprise serverless para trazabilidad operativa con QR y despliegue automatizado",
      year: "2022-2025",
      technologies: ["Azure Functions", "Azure DevOps", "TypeScript", "Azure Monitor"],
      enabled: true
    },
    {
      id: 3,
      title: "Digital Fondos Core",
      description: "Motor transaccional financiero con patrones de idempotencia y alta concurrencia",
      year: "2021-2022",
      technologies: ["Node.js", "Azure SQL", "Transactional Logic", "Resilience"],
      enabled: true
    },
    {
      id: 4,
      title: "Aguila Programming Language",
      description: "Diseño e implementación de intérprete propio enfocado en educación técnica",
      year: "2022",
      technologies: ["Interpreter Design", "npm", "System Architecture", "Node.js"],
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
      details: "Egresado. Título reconocido por SUNEDU",
      enabled: true
    }
  ],

  skills: {
    principal: ["Node.js", "TypeScript", "JavaScript ES2022+", "Software Architecture"],
    frameworks: ["NestJS", "Express.js", "Fastify", "C#/.NET", "Python/FastAPI"],
    azure: ["Functions", "App Service", "DevOps", "Service Bus", "Azure SQL", "Cosmos DB", "Monitor"],
    googleCloud: ["Cloud Run", "Maps Platform", "Identity Platform", "Cloud Build", "Cloud Console"],
    aws: ["Lambda", "S3", "RDS", "CloudWatch", "IAM"],
    databases: ["PostgreSQL", "Azure SQL", "Redis", "Cosmos DB", "DynamoDB", "MongoDB"],
    devops: ["Docker", "GitHub Actions", "Azure Pipelines", "Nginx", "CI/CD", "DigitalOcean"]
  },

  certifications: [
    {
      id: 1,
      title: "Azure Solutions Architect Expert (Training)",
      organization: "Microsoft",
      year: "2024",
      enabled: true
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      organization: "Desafio Latam",
      year: "2021",
      enabled: true
    }
  ],

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Profesional / Técnico" }
  ],

  metrics: {
    yearsExperience: "6+",
    successfulProjects: "50+",
    developersMentored: "800+",
    performanceImprovement: "60% Tiempos Op",
    costReduction: "40%",
    uptime: "99.9% Production"
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
  senior_backend: {
    name: "Senior Backend Engineer",
    focusSkills: ["Node.js", "Azure", "PostgreSQL", "Docker", "Microservices", "System Design"],
    enabledSections: {
      projects: [2, 3, 4],
      experience: [1, 3]
    }
  },
  cloud_architect: {
    name: "Cloud Solutions Architect",
    focusSkills: ["Azure", "Cloud Architecture", "Docker", "AKS", "CI/CD", "Security"],
    enabledSections: {
      projects: [1, 2, 4],
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
