import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveTerminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    {
      command: 'ls -la ~/proyectos/',
      output: `total 48
drwxr-xr-x  6 emerson  staff   192 Dec  1 14:32 .
drwxr-xr-x 15 emerson  staff   480 Dec  1 14:30 ..
drwxr-xr-x  8 emerson  staff   256 Nov 28 10:15 kefyto-ecommerce/
drwxr-xr-x  6 emerson  staff   192 Nov 25 16:45 hazuki-restaurant/
drwxr-xr-x  7 emerson  staff   224 Nov 20 09:30 netmuz-social/
drwxr-xr-x  5 emerson  staff   160 Nov 15 11:20 saas-educativo/`
    },
    {
      command: 'python --version && flask --version',
      output: `Python 3.11.5
Flask 3.0.0
Python-dotenv 1.0.0
Werkzeug 3.0.1`
    },
    {
      command: 'git log --oneline -5',
      output: `65574c4 fix: actualizar componente de imagen
251abb1 feat: agregar logo responsive  
994881f fix: corregir página de inicio
7e7dcf6 feat: integrar verificación Google
f03be23 feat: actualizar sección hero`
    },
    {
      command: 'docker-compose ps',
      output: `       Name                     Command               State           Ports         
--------------------------------------------------------------------------------
kefyto_postgres_1   docker-entrypoint.sh postgres   Up      0.0.0.0:5432->5432/tcp
kefyto_redis_1      docker-entrypoint.sh redis ...  Up      0.0.0.0:6379->6379/tcp
kefyto_web_1        flask run --host=0.0.0.0        Up      0.0.0.0:5000->5000/tcp`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        typeCommand();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentCommand, isTyping]);

  const typeCommand = async () => {
    setIsTyping(true);
    const cmd = commands[currentCommand];
    
    // Type the command
    for (let i = 0; i <= cmd.command.length; i++) {
      setDisplayText(`$ ${cmd.command.slice(0, i)}`);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Show output
    setDisplayText(`$ ${cmd.command}\n${cmd.output}`);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setCurrentCommand((prev) => (prev + 1) % commands.length);
    setIsTyping(false);
  };

  return (
    <motion.div 
      className="bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm max-w-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-500/20">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-green-400 text-xs ml-2">emerson@backend-server:~</span>
      </div>
      
      {/* Terminal Content */}
      <div className="min-h-[200px]">
        <pre className="text-green-400 whitespace-pre-wrap">
          {displayText}
          <motion.span
            className="text-green-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            █
          </motion.span>
        </pre>
      </div>
      
      {/* Terminal Footer */}
      <div className="mt-4 pt-2 border-t border-green-500/20 text-xs text-green-500/70">
        Development Environment • Emerson Espinoza • Fullstack Developer
      </div>
    </motion.div>
  );
};

export default InteractiveTerminal;