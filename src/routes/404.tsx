import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const Route = createFileRoute('/404')({
    component: NotFound,
});

function NotFound() {
    return (
        <div className='relative min-h-screen'>
            {/* Fixed Background Layer */}
            <div className='fixed inset-0 bg-gradient-to-br from-base-300 via-base-200 to-base-300'>
                {/* Decorative Elements */}
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl floating'></div>
                    <div className='absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl floating-reverse'></div>

                    {/* Decorative Shapes */}
                    <div className='absolute top-[20%] right-[5%] md:right-[10%] w-16 h-16 md:w-24 md:h-24 border-2 border-teal-400/30 rounded-lg rotate-12 floating spinning'></div>
                    <div className='absolute bottom-[10%] left-[5%] md:left-[8%] w-20 h-20 md:w-32 md:h-32 border-2 border-teal-400/30 rounded-full floating-reverse spinning-reverse'></div>

                    {/* Particles Background */}
                    <ParticlesBackground />
                </div>
            </div>

            {/* Content Layer */}
            <div className='relative min-h-screen flex flex-col items-center justify-center p-4'>
                <motion.div 
                    className='text-center space-y-6'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='space-y-4'>
                        <h1 className='text-8xl md:text-9xl font-bold text-white flex items-center justify-center gap-4'>
                            <motion.span 
                                className='text-teal-400'
                                animate={{ 
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: [1, 1.1, 1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                4
                            </motion.span>
                            <motion.span 
                                className='text-teal-400'
                                animate={{ 
                                    rotate: [0, 10, -10, 10, 0],
                                    scale: [1, 1.1, 1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 0.2
                                }}
                            >
                                0
                            </motion.span>
                            <motion.span 
                                className='text-teal-400'
                                animate={{ 
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: [1, 1.1, 1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 0.4
                                }}
                            >
                                4
                            </motion.span>
                        </h1>
                        <h2 className='text-2xl md:text-3xl font-medium text-white/90'>Page Not Found</h2>
                    </div>
                    <p className='text-lg text-white/70 max-w-md mx-auto'>
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                    </p>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/"
                            className='inline-flex items-center gap-2 px-6 py-3 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-xl transition-all group'
                        >
                            <svg 
                                xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 20 20' 
                                fill='currentColor' 
                                className='w-5 h-5 group-hover:-translate-x-1 transition-transform'
                            >
                                <path 
                                    fillRule='evenodd' 
                                    d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z' 
                                    clipRule='evenodd' 
                                />
                            </svg>
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 