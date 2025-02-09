import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
    return (
        <nav className='absolute top-0 left-0 right-0 z-50'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-center md:justify-between h-20'>
                    {/* Logo/Name */}
                    <motion.a 
                        href='#main' 
                        className='text-xl font-medium transition-all duration-300 group hover:scale-105'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex items-center gap-1.5'>
                            <motion.span 
                                className='text-teal-400 group-hover:text-teal-500 transition-colors text-2xl'
                                animate={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                &lt;
                            </motion.span>
                            <motion.span 
                                className='bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent font-semibold tracking-wide'
                                animate={{ 
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }}
                                style={{ backgroundSize: '200% 100%' }}
                            >
                                roynul.rohan
                            </motion.span>
                            <motion.span 
                                className='text-teal-400 group-hover:text-teal-500 transition-colors text-2xl'
                                animate={{ rotate: [0, 10, -10, 10, 0] }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                /&gt;
                            </motion.span>
                        </div>
                    </motion.a>

                    {/* Status Indicator */}
                    <motion.div 
                        className='hidden md:flex items-center gap-2 bg-base-300/50 backdrop-blur-sm border border-teal-400/20 px-4 py-2 rounded-full'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.span 
                            className='text-sm font-medium text-emerald-400'
                            animate={{ 
                                opacity: [1, 0.7, 1],
                                scale: [1, 1.02, 1]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >
                            Available for opportunities
                        </motion.span>
                        <div className='relative flex'>
                            <div className='w-2.5 h-2.5 bg-emerald-400 rounded-full'></div>
                            <div className='absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping'></div>
                            <motion.div 
                                className='absolute inset-0 w-2.5 h-2.5 bg-emerald-400/40 rounded-full'
                                animate={{ 
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 0.7, 0.4]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
