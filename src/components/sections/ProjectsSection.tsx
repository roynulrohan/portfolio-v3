import { motion } from 'framer-motion';
import { Code2, Rocket, GitFork, GanttChart } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';

// Import thumbnails
import minerverseThumb from '../../assets/thumbnails/minerverse.png';
import petConnectThumb from '../../assets/thumbnails/pet-connect.png';
import stocksIoThumb from '../../assets/thumbnails/stocks-io.png';
import ivyAiThumb from '../../assets/thumbnails/ivy-ai.png';

interface Project {
    title: string;
    description: string;
    previewUrl?: string;
    thumbnailUrl?: string;
    demoLink?: string;
    githubLink: string;
    technologies: string[];
    features: string[];
}

// Function to get screenshot URL or fallback
const getScreenshotUrl = (url: string) => {
    // Using thum.io - completely free, no API key needed
    return `https://image.thum.io/get/width/1280/crop/720/maxAge/24/viewportWidth/1280/viewportHeight/720/wait/5/${url}`;
};

const projects: Project[] = [
    {
        title: '🤖 Ivy AI Assistant',
        description:
            'A modern AI-powered student assistant that helps organize your academic life. Built with cutting-edge AI technology to streamline student workflows and enhance productivity.',
        thumbnailUrl: ivyAiThumb,
        githubLink: 'https://github.com/FinalScript/ivy-ai-assistant',
        technologies: ['TypeScript', 'React', 'DaisyUI', 'Gemini AI', 'Express', 'Apollo GraphQL', 'Supabase'],
        features: ['AI-powered task organization', 'Academic planning assistance', 'Smart scheduling', 'Personalized learning support'],
    },
    {
        title: '🐱 Pet Connect',
        description:
            "A cross-platform social media app for pets, enabling pet owners to connect and share their furry friends' moments. Features a modern tech stack with real-time updates.",
        thumbnailUrl: petConnectThumb,
        githubLink: 'https://github.com/FinalScript/pet-connect',
        technologies: ['TypeScript', 'React Native', 'Apollo GraphQL', 'Express', 'MySQL'],
        features: ['Cross-platform mobile app', 'Real-time social features', 'Pet profiles and networking', 'Photo sharing and interactions'],
    },
    {
        title: '⛏️ Minerverse',
        description:
            'A Web3 blockchain game where players mint unique NFT miners using ETH and engage in real-time mining experiences. Features comprehensive blockchain integration and smart contracts.',
        //previewUrl: 'https://minerverse.vercel.app/',
        thumbnailUrl: minerverseThumb,
        demoLink: 'https://minerverse.vercel.app/',
        githubLink: 'https://github.com/FinalScript/minerverse',
        technologies: ['TypeScript', 'Next.js', 'Web3.js', 'Solidity', 'MetaMask', 'Ethereum'],
        features: ['NFT minting system', 'Real-time mining mechanics', 'MetaMask integration', 'Smart contract interaction'],
    },
    {
        title: '📈 Stocks.io',
        description:
            'A comprehensive stock trading platform featuring real-time updates and advanced trading functionalities. Built with modern web technologies for optimal performance.',
        previewUrl: 'https://stocks-io.roynul.com/',
        thumbnailUrl: stocksIoThumb,
        demoLink: 'https://stocks-io.roynul.com/',
        githubLink: 'https://github.com/roynulrohan/Stocks.io',
        technologies: ['MERN Stack', 'TypeScript', 'GraphQL', 'Socket.io', 'JWT'],
        features: ['Real-time stock tracking', 'Virtual trading system', 'Portfolio management', 'Market analytics'],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
    const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

    // Memoize projects data
    const memoizedProjects = useMemo(() => projects, []);

    // Memoize animation variants
    const memoizedContainer = useMemo(() => container, []);
    const memoizedItem = useMemo(() => item, []);

    // Callbacks for image loading handlers
    const handleImageLoad = useCallback((projectTitle: string) => {
        setLoadingImages((prev) => ({ ...prev, [projectTitle]: false }));
    }, []);

    const handleImageError = useCallback((projectTitle: string) => {
        setLoadingImages((prev) => ({ ...prev, [projectTitle]: false }));
    }, []);

    // Memoize the project card render function
    const renderProjectCard = useCallback(
        (project: Project) => (
            <motion.div key={project.title} variants={memoizedItem} className='group'>
                <div className='bg-base-300/50 rounded-xl overflow-hidden border border-teal-400/20 hover:border-teal-400/40 transition-all h-full'>
                    <div className='aspect-[16/8] overflow-hidden relative group'>
                        {project.demoLink ? (
                            <div className='absolute inset-0 bg-base-300/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10'>
                                <a
                                    href={project.demoLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-3 py-1.5 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-lg transition-all text-sm'>
                                    Visit Website
                                </a>
                            </div>
                        ) : (
                            <div className='absolute inset-0 bg-base-300/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10'>
                                <a
                                    href={project.githubLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='px-3 py-1.5 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-lg transition-all text-sm'>
                                    View Code
                                </a>
                            </div>
                        )}

                        {project.previewUrl ? (
                            <>
                                {loadingImages[project.title] !== false && (
                                    <div className='absolute inset-0 bg-base-300/30 animate-pulse'>
                                        <div className='h-full w-full flex items-center justify-center'>
                                            <div className='w-8 h-8 border-2 border-teal-400/40 border-t-teal-400 rounded-full animate-spin'></div>
                                        </div>
                                    </div>
                                )}
                                <img
                                    src={getScreenshotUrl(project.previewUrl)}
                                    alt={`${project.title} preview`}
                                    className='w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500'
                                    loading='lazy'
                                    onLoad={() => handleImageLoad(project.title)}
                                    onError={() => handleImageError(project.title)}
                                    style={{ opacity: loadingImages[project.title] === false ? 1 : 0 }}
                                />
                            </>
                        ) : project.thumbnailUrl ? (
                            <>
                                <img
                                    src={project.thumbnailUrl}
                                    alt={`${project.title} thumbnail`}
                                    className='w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500'
                                    loading='lazy'
                                />
                            </>
                        ) : (
                            <div className='w-full h-full bg-base-300/30 flex flex-col items-center justify-center gap-6 p-6 group-hover:bg-base-300/40 transition-colors'>
                                <div className='grid grid-cols-2 gap-6'>
                                    <div className='flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors'>
                                        <Code2 size={32} strokeWidth={1.5} />
                                        <span className='text-xs font-medium'>Source Code</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors'>
                                        <Rocket size={32} strokeWidth={1.5} />
                                        <span className='text-xs font-medium'>In Development</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors'>
                                        <GitFork size={32} strokeWidth={1.5} />
                                        <span className='text-xs font-medium'>Open Source</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors'>
                                        <GanttChart size={32} strokeWidth={1.5} />
                                        <span className='text-xs font-medium'>Project Details</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='p-4 space-y-4'>
                        <div className='space-y-1'>
                            <h3 className='text-xl font-semibold text-white group-hover:text-teal-400 transition-colors'>{project.title}</h3>
                            <p className='text-white/70 text-sm'>{project.description}</p>
                        </div>

                        <div className='space-y-3'>
                            <div>
                                <h4 className='text-sm font-medium text-white mb-2'>Key Features</h4>
                                <ul className='grid grid-cols-1 gap-1'>
                                    {project.features.map((feature) => (
                                        <li key={feature} className='flex items-center gap-2 text-white/70 text-sm'>
                                            <span className='text-teal-400 text-xs'>▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className='text-sm font-medium text-white mb-2'>Technologies</h4>
                                <div className='flex flex-wrap gap-1.5'>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className='px-2 py-0.5 bg-teal-400/10 text-teal-400 rounded-full text-xs'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='flex gap-3 pt-1'>
                                {project.demoLink ? (
                                    <a
                                        href={project.demoLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex-1 px-3 py-1.5 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-lg transition-all text-center text-sm'>
                                        View Demo
                                    </a>
                                ) : (
                                    <span className='flex-1 px-3 py-1.5 bg-base-300/30 text-white/40 font-medium rounded-lg text-center text-sm cursor-not-allowed'>
                                        Demo Unavailable
                                    </span>
                                )}
                                <a
                                    href={project.githubLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex-1 px-3 py-1.5 bg-base-300/50 hover:bg-base-300/70 text-white/80 hover:text-white font-medium rounded-lg border border-teal-400/20 hover:border-teal-400/40 transition-all text-center text-sm'>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        ),
        [memoizedItem, loadingImages, handleImageLoad, handleImageError]
    );

    // Memoize section title and description
    const sectionHeader = useMemo(
        () => (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='space-y-4'>
                <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                    <span className='text-teal-400 text-3xl'>{'{'}</span>
                    Featured Projects
                    <span className='text-teal-400 text-3xl'>{'}'}</span>
                </h2>
                <p className='text-lg text-white/80 leading-relaxed'>
                    Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
                </p>
            </motion.div>
        ),
        []
    );

    // Memoize GitHub section
    const githubSection = useMemo(
        () => (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex flex-col items-center justify-center py-8 text-center space-y-4'>
                <h3 className='text-xl font-semibold text-white'>Want to see more?</h3>
                <p className='text-white/80'>Check out my GitHub profile for more projects and contributions.</p>
                <a
                    href='https://github.com/roynulrohan'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-lg transition-all inline-flex items-center gap-2 text-sm'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    Visit My GitHub
                </a>
            </motion.div>
        ),
        []
    );

    return (
        <div className='space-y-8'>
            {sectionHeader}
            <motion.div variants={memoizedContainer} initial='hidden' animate='show' className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {memoizedProjects.map(renderProjectCard)}
            </motion.div>
            {githubSection}
        </div>
    );
}
