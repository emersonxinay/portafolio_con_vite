import Title from '../../../components/Title';
import InteractiveTerminal from '../../../components/InteractiveTerminal';
import { motion } from 'framer-motion';
import { FaTerminal, FaDocker, FaServer, FaDatabase } from 'react-icons/fa';
import { SiKubernetes, SiPostgresql, SiRedis, SiNginx } from 'react-icons/si';

const Terminal = () => {
  const systemStats = [
    { 
      label: 'Proyectos Python', 
      value: '15+', 
      icon: FaServer, 
      color: 'text-blue-400',
      bgColor: 'from-blue-900/20 to-blue-800/20'
    },
    { 
      label: 'APIs Creadas', 
      value: '25+', 
      icon: FaServer, 
      color: 'text-green-400',
      bgColor: 'from-green-900/20 to-green-800/20'
    },
    { 
      label: 'Bases de Datos', 
      value: '30+', 
      icon: FaDatabase, 
      color: 'text-purple-400',
      bgColor: 'from-purple-900/20 to-purple-800/20'
    },
    { 
      label: 'Deployment VPS', 
      value: '20+', 
      icon: SiRedis, 
      color: 'text-red-400',
      bgColor: 'from-red-900/20 to-red-800/20'
    }
  ];

  const techStack = [
    { name: 'Python', icon: FaServer, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'Flask', icon: FaServer, color: 'text-red-500' },
    { name: 'React', icon: FaServer, color: 'text-green-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500' }
  ];

  return (
    <div className="grid gap-16 relative">
      <Title title="Entorno de Desarrollo" />
      
      {/* System Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`p-4 rounded-xl bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm border border-white/10 text-center`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <stat.icon className={`text-3xl ${stat.color} mx-auto mb-2`} />
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-zinc-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Terminal */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaTerminal className="text-2xl text-green-400" />
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Terminal de Desarrollo
              </h3>
            </div>
            <InteractiveTerminal />
          </motion.div>
        </div>

        {/* Tech Stack & Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Infrastructure Overview */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Stack Tecnológico</h4>
            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center p-3 bg-black/20 rounded-lg border border-white/5"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <tech.icon className={`text-2xl ${tech.color} mb-2`} />
                  <span className="text-xs text-zinc-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Métricas de Desarrollo</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Tiempo de Desarrollo</span>
                <span className="text-green-400 font-semibold">Optimizado</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '95%'}}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Calidad de Código</span>
                <span className="text-blue-400 font-semibold">Excelente</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Proyectos Exitosos</span>
                <span className="text-green-400 font-semibold">100%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>

          {/* Live Status */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Disponible para Proyectos</span>
            </div>
            <div className="text-sm text-zinc-400">
              <div>• Experiencia: 6+ años desarrollo</div>
              <div>• Ubicación: Chile/Perú/Remoto</div>
              <div>• Proyectos completados: 50+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terminal;