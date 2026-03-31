/**
 * Centralized technology stack data
 * Used in About, Hero, and other components
 */

export const techStack = {
  backend: [
    {
      name: 'Node.js & TypeScript',
      description: 'Lógica escalable y resiliente de alto desempeño',
      icon: 'fab fa-node-js',
      color: 'from-green-400 to-emerald-600'
    },
    {
      name: 'Azure Cloud',
      description: 'Sistemas distribuidos y arquitectura serverless',
      icon: 'fab fa-microsoft',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'PostgreSQL & Redis',
      description: 'Gestión de datos de nivel empresarial y caché',
      icon: 'fas fa-database',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      name: 'Microservicios',
      description: 'Arquitecturas desacopladas orientadas a eventos',
      icon: 'fas fa-cubes',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'GitHub Actions / DevOps',
      description: 'Automatización de pipelines CI/CD y despliegue',
      icon: 'fas fa-infinity',
      color: 'from-gray-400 to-gray-700'
    }
  ],
  frontend: [
    {
      name: 'React',
      description: 'Interfaces de usuario modernas y componentes',
      icon: 'fab fa-react',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'JavaScript / TS',
      description: 'Lógica frontend dinámica y tipada',
      icon: 'fab fa-js-square',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Tailwind CSS',
      description: 'Sistemas de diseño escalables y responsive',
      icon: 'fas fa-wind',
      color: 'from-cyan-400 to-teal-500'
    }
  ],
  tools: [
    {
      name: 'Docker & Kubernetes',
      description: 'Contenedores y orquestación cloud',
      icon: 'fab fa-docker',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Azure DevOps',
      description: 'Gestión profesional del ciclo de vida del software',
      icon: 'fas fa-tasks',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'Linux / Bash',
      description: 'Administración de servidores y scripting',
      icon: 'fab fa-linux',
      color: 'from-gray-500 to-black'
    }
  ]
};

// Simplified array for hero section
export const mainTechnologies = [
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'from-green-400 to-emerald-600' },
  { name: 'Azure', icon: 'fab fa-microsoft', color: 'from-blue-500 to-cyan-600' },
  { name: 'TypeScript', icon: 'fas fa-code', color: 'from-blue-400 to-blue-600' },
  { name: 'Docker', icon: 'fab fa-docker', color: 'from-blue-400 to-cyan-500' },
  { name: 'PostgreSQL', icon: 'fas fa-database', color: 'from-blue-500 to-indigo-600' }
];
