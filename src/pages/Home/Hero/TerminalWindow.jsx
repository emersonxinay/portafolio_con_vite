import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = () => {
    const [lines, setLines] = useState([
        { type: 'command', text: 'cat demo.ag' },
    ]);

    const containerRef = useRef(null);

    useEffect(() => {
        const sequence = [
            { text: '# Tu Lógica, Tu Poder v2.6.8', delay: 500, type: 'comment' },
            { text: '# Por Emerson Espinoza', delay: 1000, type: 'comment' },
            { text: '', delay: 1200, type: 'code' },
            { text: 'funcion evaluar(puntos) {', delay: 1500, type: 'code' },
            { text: '  si puntos > 100 {', delay: 2000, type: 'code' },
            { text: '    imprimir("Nivel Experto")', delay: 2500, type: 'code' },
            { text: '  } sino {', delay: 3000, type: 'code' },
            { text: '    imprimir("Sigue practicando")', delay: 3500, type: 'code' },
            { text: '  }', delay: 4000, type: 'code' },
            { text: '}', delay: 4500, type: 'code' },
            { text: '', delay: 4800, type: 'code' },
            { text: 'evaluar(150)', delay: 5000, type: 'code' },
            { text: 'aguila ejecutar demo.ag', delay: 6000, type: 'command' },
            { text: '> Nivel Experto', delay: 7000, type: 'success' },
            { text: 'Programa finalizado con código 0', delay: 8000, type: 'info' }
        ];

        let timeouts = [];

        sequence.forEach(({ text, delay, type }) => {
            const timeout = setTimeout(() => {
                setLines(prev => {
                    const newLines = [...prev, { type, text }];
                    // Keep only last 8 lines to prevent overflow if running long
                    return newLines.slice(-8);
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
                    <i className="fas fa-code text-blue-400"></i>
                    compiler.ag
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
                <span>Águila v1.0.0</span>
                <span className="text-emerald-500">● Online</span>
            </div>
        </motion.div>
    );
};

export default TerminalWindow;
