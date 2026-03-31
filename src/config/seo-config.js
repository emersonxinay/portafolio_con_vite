// SEO Configuration for Emerson Espinoza Portfolio

export const seoConfig = {
  // Primary keywords for positioning
  primaryKeywords: [
    "Emerson Espinoza",
    "Senior Backend Engineer Azure",
    "Azure Solutions Architect Chile",
    "Node.js Expert Santiago",
    "Senior Software Engineer Microsoft Azure",
    "Enterprise AI Solutions Chile",
    "Arquitecto de Sistemas Cloud",
    "Technical Leadership Azure",
    "Software Architecture Node.js",
    "Cloud Infrastructure Specialist",
    "CI/CD DevOps Expert Chile"
  ],

  // Long tail keywords for organic traffic
  longTailKeywords: [
    "senior backend engineer azure nodejs chile",
    "azure solutions architect enterprise systems",
    "senior software engineer cloud infrastructure",
    "architecting ai powered backend services",
    "lider tecnico arquitectura distribuida santiago",
    "ingeniero sistemas azure devops nodejs",
    "technical leadership cloud transformation",
    "scalable microservices architecture azure",
    "senior development lead santiago chile"
  ],

  // Geographic keywords for local SEO
  geoKeywords: [
    "Santiago Chile",
    "Chile desarrollador software",
    "programador python santiago",
    "tech lead chile",
    "cto startup chile",
    "ingeniero software chile",
    "consultor tecnologia santiago",
    "developer chile latinoamerica"
  ],

  // Industry-specific keywords
  industryKeywords: [
    "BHP Industrial Systems",
    "FinTech Core Banking",
    "Cloud Native SaaS",
    "Enterprise Infrastructure",
    "Azure Cloud Transformation",
    "Distributed Systems",
    "Event-Driven Architecture",
    "DevOps & CI/CD",
    "Engineering Leadership"
  ],

  // Technical skills keywords
  technicalKeywords: [
    "Node.js",
    "Azure",
    "TypeScript",
    "Azure Functions",
    "Azure DevOps",
    "Redis",
    "PM2",
    "Microservices",
    "Cloud Computing",
    "GCP",
    "DigitalOcean",
    "CI/CD",
    "Enterprise AI",
    "System Monitoring"
  ],

  // Default meta configurations
  defaultMeta: {
    title: "Emerson Espinoza - Senior Backend Engineer | Azure & AI Solutions Architect",
    description: "Senior Backend Engineer con 6+ años construyendo infraestructuras críticas y sistemas distribuidos en Azure. Especialista en Node.js, arquitecturas de IA y optimización de servicios de misión crítica.",
    image: "https://emersonespinoza.com/assets/emerson-espinoza-social-card.jpg",
    url: "https://emersonespinoza.com",
    siteName: "Emerson Espinoza Portfolio",
    twitterHandle: "@emersonxinay",
    locale: "es_CL",
    alternateLocale: "en_US"
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: "Emerson Espinoza - Senior Backend Engineer | Azure & AI Specialist",
      description: "Senior Backend Engineer con 6+ años de experiencia. Especialista en Azure, Node.js y soluciones de IA integradas. Lideré sistemas críticos en BHP y Fintech con 99.9% uptime y 60% mejora operativa.",
      keywords: "Emerson Espinoza, Senior Backend Engineer Azure, Node.js Expert, Azure Solutions Architect, Enterprise AI, Technical Leadership, Distributed Systems, Cloud Infrastructure"
    },
    cvHarvard: {
      title: "CV Emerson Espinoza - Ingeniero de Sistemas | Currículum Harvard Style",
      description: "Currículum Vitae académico de Emerson Espinoza, Ingeniero de Sistemas con 6+ años de experiencia. Senior Software Engineer especialista en Python, React, IA/ML. CTO & Tech Lead con historial comprobado en arquitecturas escalables.",
      keywords: "Emerson Espinoza CV, Currículum Vitae, Harvard Style Resume, Ingeniero Sistemas, Senior Software Engineer, Python Developer, React Developer, Tech Lead CTO, Machine Learning Engineer, Santiago Chile, CV Download PDF"
    },
    cvCorporate: {
      title: "CV Emerson Espinoza - Senior Backend Engineer | Azure & AI Architect",
      description: "CV profesional de Emerson Espinoza, Senior Backend Engineer con 6+ años liderando infraestructuras críticas. Especialista en Azure, Node.js e IA. Track record: 800+ desarrolladores formados, 60% mejora operativa en BHP, integridad transaccional en Fintech.",
      keywords: "Emerson Espinoza CV, Senior Backend Engineer, Azure Architect, Node.js Specialist, Enterprise AI, Technical Leadership, Cloud Infrastructure, Santiago Chile"
    }
  },

  // Content optimization guidelines
  contentGuidelines: {
    titleLength: { min: 30, max: 60 },
    descriptionLength: { min: 120, max: 160 },
    keywordDensity: { min: 1, max: 3 },
    headingStructure: {
      h1: 1, // Only one H1 per page
      h2: "3-6", // 3-6 H2 tags
      h3: "unlimited" // Unlimited H3 tags
    }
  },

  // Social media optimization
  socialMedia: {
    linkedin: "https://linkedin.com/in/emerson-espinoza-aguirre",
    github: "https://github.com/emersonxinay",
    twitter: "https://twitter.com/emersonxinay",
    youtube: "Compilando Code"
  },

  // Analytics and tracking
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Replace with actual GA4 ID
    googleSearchConsole: "ndCKBk4Ig75kcJFvW1tp1za9QuLKDFlhcQJZbLE0YNc",
    linkedInInsights: true,
    facebookPixel: false
  }
};

export default seoConfig;