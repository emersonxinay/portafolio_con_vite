import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = () => {
    const [lines, setLines] = useState([
        { type: 'command', text: 'npm run health-check' },
    ]);

    const containerRef = useRef(null);

    useEffect(() => {
        const sequence = [
            { text: '# Initializing Infrastructure Multi-Cloud Monitor...', delay: 500, type: 'comment' },
            { text: '# Cluster: production-main | Node: v20.x', delay: 1000, type: 'comment' },
            { text: '', delay: 1200, type: 'code' },
            { text: 'pm2 list', delay: 1500, type: 'command' },
            { text: '> 🟢 bhp-traceability: [online] [cpu: 2%] [mem: 45MB]', delay: 2200, type: 'success' },
            { text: '> 🟢 digital-fondos-core: [online] [cpu: 5%] [mem: 120MB]', delay: 2800, type: 'success' },
            { text: '> 🟢 compilandocode-lms: [online] [cpu: 3%] [mem: 88MB]', delay: 3200, type: 'success' },
            { text: 'redis-cli ping', delay: 4000, type: 'command' },
            { text: '> PONG (Connected: redis://127.0.0.1:6379)', delay: 4600, type: 'success' },
            { text: 'infra-cloud --status', delay: 5200, type: 'command' },
            { text: '> Azure (BHP): Functions [Running]', delay: 6000, type: 'info' },
            { text: '> GCP (LMS): Cloud Run [Healthy]', delay: 6800, type: 'info' },
            { text: '> DigitalOcean: Droplets [Active]', delay: 7600, type: 'info' },
            { text: '> Vercel: CI/CD Pipeline [Success]', delay: 8400, type: 'info' }
        ];

        let timeouts = [];

        sequence.forEach(({ text, delay, type }) => {
            const timeout = setTimeout(() => {
                setLines(prev => {
                    const newLines = [...prev, { type, text }];
                    // Keep only last 10 lines for better visibility
                    return newLines.slice(-10);
                });
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <motion.div
            className="w-full max-w-lg mx-auto bg-[#0F172A] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-900/10 font-mono text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Terminal Title Bar */}
            <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
                    <i className="fas fa-terminal text-blue-400"></i>
                    azure-cli
                </div>
                <div className="w-10" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Content */}
            <div
                ref={containerRef}
                className="p-4 h-64 overflow-y-auto space-y-2 font-mono scrollbar-hide text-xs sm:text-sm"
            >
                {lines.map((line, idx) => (
                    <div key={idx} className={`${line.type === 'command' ? 'text-blue-300 font-bold' :
                        line.type === 'success' ? 'text-emerald-400' :
                            line.type === 'comment' ? 'text-slate-500 italic' :
                                line.type === 'code' ? 'text-amber-100 pl-4' :
                                    'text-slate-300'
                        }`}>
                        {(line.type === 'command' || line.type === 'success' || line.type === 'info') && (
                            <span className="opacity-50 mr-2 select-none">
                                {line.type === 'command' ? '$' : '>'}
                            </span>
                        )}
                        {line.text}
                    </div>
                ))}
                {/* Blinking Cursor */}
                <div className="flex items-center text-blue-400 animate-pulse">
                    <span className="mr-2">$</span>
                    <span className="w-2 h-4 bg-blue-500/50"></span>
                </div>
            </div>

            {/* Footer Status */}
            <div className="bg-slate-900/50 px-3 py-1 text-[10px] text-slate-500 flex justify-between border-t border-slate-800/50 uppercase tracking-wider">
                <span>Production Environment</span>
                <span className="text-emerald-500">● Systems Active</span>
            </div>
        </motion.div>
    );
};

export default TerminalWindow;
