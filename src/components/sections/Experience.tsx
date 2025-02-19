import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface SkillCategory {
    name: string;
    skills: string[];
    icon: string;
}

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

const experiences: Experience[] = [
    {
        title: 'Freelance Full-Stack Developer',
        company: 'Self-Employed',
        period: 'Dec. 2020 - Present',
        description: [
            'Delivered high-quality web and mobile applications through effective client communication and requirement analysis',
            'Developed responsive web applications using Next.js, Vite React, and TypeScript, enhancing digital presence for multiple clients',
            'Created engaging landing pages with optimized user experience using modern frontend technologies',
            'Built robust RESTful APIs using Express.js and GraphQL, ensuring seamless data flow between frontend and backend systems',
            'Implemented cross-platform mobile solutions using React Native, expanding client reach to mobile users',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'React Native', 'Express.js', 'GraphQL'],
    },
    {
        title: 'Project Advisor, AS-02',
        company: 'Employment and Social Development Canada',
        period: 'Jul. 2022 - March 2024',
        description: [
            'Led development initiatives within the Digital Transformation Services team of the Compensation Directorate',
            'Architected and developed internal applications for compensation advisors, implementing diverse business calculators and automation tools',
            'Engineered a user-friendly mail merge tool with GUI interface, optimizing mass email distribution for non-technical users',
            'Conducted thorough stakeholder engagement to align project objectives and ensure successful delivery of solutions',
            'Utilized modern tech stack including TypeScript, Python, Svelte, React.js, MySQL, Git, and Azure Cloud Services',
        ],
        technologies: ['TypeScript', 'Python', 'Svelte', 'React.js', 'MySQL', 'Git', 'Azure Cloud Services'],
    },
];

const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend Development',
        icon: '🎨',
        skills: ['React', 'Next.js', 'Svelte', 'React Native', 'Tailwind CSS', 'Redux', 'Zod', 'React Query', 'React Hook Form'],
    },
    {
        name: 'Backend & Databases',
        icon: '⚙️',
        skills: ['Node.js', 'Nest.js', 'Express', 'Spring Boot', 'Apollo GraphQL API', 'REST API', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
        name: 'Programming Languages',
        icon: '💻',
        skills: ['TypeScript', 'Java', 'Python'],
    },
    {
        name: 'Mobile Development',
        icon: '📱',
        skills: ['React Native', 'Flutter', 'Expo', 'Swift', 'SwiftUI'],
    },
    {
        name: 'DevOps & Cloud',
        icon: '🚀',
        skills: ['Git', 'Docker', 'Docker Compose', 'Nginx', 'AWS EC2', 'AWS S3', 'Cloudflare', 'Supabase', 'Vercel', 'GitLab CI/CD', 'GitHub Actions'],
    },
    {
        name: 'System Administration',
        icon: '🖥️',
        skills: ['Linux', 'Windows', 'Ubuntu Server', 'macOS', 'SSH'],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
            duration: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export function ExperienceSection() {
    // Memoize static data
    const memoizedSkillCategories = useMemo(() => skillCategories, []);

    // Memoize animation variants
    const memoizedContainer = useMemo(() => container, []);
    const memoizedItem = useMemo(() => item, []);

    const experienceSection = useMemo(
        () => (
            <motion.div variants={memoizedItem} className='space-y-6'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                        <span className='text-teal-400 text-3xl'>{'{'}</span>
                        Professional Experience
                        <span className='text-teal-400 text-3xl'>{'}'}</span>
                    </h2>
                    <p className='text-lg text-white/80 leading-relaxed'>
                        My professional journey combines government sector experience with freelance development work, demonstrating versatility in both
                        structured enterprise environments and client-focused project delivery.
                    </p>
                </div>

                <div className='space-y-6'>
                    {experiences.map((exp, index) => (
                        <div key={exp.title} className='relative'>
                            <div className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                                <div className='flex flex-col md:flex-row md:items-start gap-4 mb-6'>
                                    <div className='flex-1 space-y-2'>
                                        <div className='flex items-center gap-3'>
                                            <span className='text-2xl'>{index === 0 ? '💼' : '🚀'}</span>
                                            <h3 className='text-xl font-semibold text-white group-hover:text-teal-400 transition-colors'>{exp.title}</h3>
                                        </div>
                                        <p className='text-teal-400 font-medium'>{exp.company}</p>
                                    </div>
                                    <div className='md:self-start px-3 py-1.5 rounded-full bg-teal-400/10 text-teal-400 text-sm font-medium border border-teal-400/20'>
                                        {exp.period}
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <ul className='space-y-3'>
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className='flex items-start gap-3 text-white/80'>
                                                <span className='text-teal-400 text-sm mt-1.5'>▹</span>
                                                <span className='flex-1'>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='pt-2'>
                                        <div className='flex flex-wrap gap-2'>
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className='px-3 py-1 bg-base-300/70 text-white/70 hover:text-teal-400 rounded-lg text-sm border border-teal-400/20 hover:border-teal-400/40 transition-all'>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        ),
        []
    );

    // Memoize highlights section
    // const highlightsSection = useMemo(
    //     () => (
    //         <motion.div variants={memoizedItem} className='grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]'>
    //             {/* Full Stack Developer Card */}
    //             <motion.div className='relative bg-base-300/50 rounded-xl border border-teal-400/20 hover:border-teal-400/40 transition-all group overflow-hidden'>
    //                 {/* Browser-like header */}
    //                 <div className='px-4 py-2 border-b border-teal-400/20 bg-base-300/70 flex items-center gap-2'>
    //                     <div className='flex gap-1.5'>
    //                         <div className='w-2.5 h-2.5 rounded-full bg-red-400/80'></div>
    //                         <div className='w-2.5 h-2.5 rounded-full bg-yellow-400/80'></div>
    //                         <div className='w-2.5 h-2.5 rounded-full bg-green-400/80'></div>
    //                     </div>
    //                     <div className='flex-1 flex justify-center'>
    //                         <div className='px-3 py-0.5 text-xs text-white bg-base-300/50 rounded-md border border-teal-400/20'>fullstack-developer.app</div>
    //                     </div>
    //                 </div>

    //                 {/* Content area */}
    //                 <div className='p-4 space-y-4'>
    //                     {/* Navigation Bar */}
    //                     <div className='flex items-center justify-between p-2 bg-base-300/30 rounded-lg border border-teal-400/20'>
    //                         <div className='w-8 h-8 bg-teal-400/20 rounded-lg'></div>
    //                         <div className='flex gap-3'>
    //                             <div className='w-16 h-2 bg-teal-400/20 rounded-full'></div>
    //                             <div className='w-16 h-2 bg-teal-400/20 rounded-full'></div>
    //                             <div className='w-16 h-2 bg-teal-400/20 rounded-full'></div>
    //                         </div>
    //                     </div>

    //                     {/* Hero Section with Text */}
    //                     <div className='p-6 bg-base-300/30 rounded-lg border border-teal-400/20'>
    //                         <h3 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors mb-2'>Full Stack Developer</h3>
    //                         <p className='text-white/70 text-sm leading-relaxed'>
    //                             Experienced in building complete web applications from frontend to backend deployment.
    //                         </p>
    //                     </div>

    //                     {/* Three Column Section */}
    //                     <div className='grid grid-cols-3 gap-3'>
    //                         <div className='p-3 bg-base-300/30 rounded-lg border border-teal-400/20'>
    //                             <div className='w-8 h-8 bg-teal-400/20 rounded-lg mb-2'></div>
    //                             <div className='w-full h-2 bg-teal-400/20 rounded-full'></div>
    //                         </div>
    //                         <div className='p-3 bg-base-300/30 rounded-lg border border-teal-400/20'>
    //                             <div className='w-8 h-8 bg-teal-400/20 rounded-lg mb-2'></div>
    //                             <div className='w-full h-2 bg-teal-400/20 rounded-full'></div>
    //                         </div>
    //                         <div className='p-3 bg-base-300/30 rounded-lg border border-teal-400/20'>
    //                             <div className='w-8 h-8 bg-teal-400/20 rounded-lg mb-2'></div>
    //                             <div className='w-full h-2 bg-teal-400/20 rounded-full'></div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </motion.div>

    //             {/* Mobile Developer Card */}
    //             <motion.div className='relative bg-base-300/50 rounded-xl border border-teal-400/20 hover:border-teal-400/40 transition-all group overflow-hidden'>
    //                 {/* Glow Effect */}
    //                 <div
    //                     className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
    //                     style={{
    //                         width: '600px',
    //                         height: '600px',
    //                         background: 'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, rgba(45, 212, 191, 0) 70%)',
    //                         filter: 'blur(24px)',
    //                         transform: 'translate(-50%, -50%)',
    //                         transition: 'all 0.3s ease-in-out',
    //                     }}
    //                 />

    //                 {/* Phone frame */}
    //                 <div className='absolute bg-base-300 top-10 left-1/2 -translate-x-1/2 w-[280px] h-[520px] border-8 border-primary-content rounded-[3rem] shadow-lg'>
    //                     <div className='absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary-content rounded-b-xl'></div>
    //                 </div>

    //                 {/* Content */}
    //                 <div className='relative h-full p-6 pt-24 pb-12 flex flex-col items-center'>
    //                     {/* App-like interface */}
    //                     <div className='w-[240px] space-y-4'>
    //                         {/* Header */}
    //                         <div className='text-center space-y-2'>
    //                             <h3 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors'>Mobile Developer</h3>
    //                         </div>

    //                         {/* App-like elements */}
    //                         <div className='space-y-2'>
    //                             <div className='p-3 bg-base-300/30 rounded-xl border border-teal-400/20'>
    //                                 <div className='w-full h-2 bg-teal-400/20 rounded-full'></div>
    //                             </div>
    //                             <div className='grid grid-cols-2 gap-2'>
    //                                 <div className='p-3 bg-base-300/30 rounded-xl border border-teal-400/20'>
    //                                     <div className='w-full h-2 bg-teal-400/20 rounded-full'></div>
    //                                 </div>
    //                                 <div className='p-3 bg-base-300/30 rounded-xl border border-teal-400/20'>
    //                                     <div className='w-full h-2 bg-teal-400/20 rounded-full'></div>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                         {/* Description */}
    //                         <p className='text-white/70 text-sm text-center'>
    //                             Crafting intuitive cross-platform mobile experiences with modern frameworks and native solutions.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </motion.div>
    //         </motion.div>
    //     ),
    //     [memoizedItem]
    // );

    // Memoize skills section
    const skillsSection = useMemo(
        () => (
            <motion.div variants={memoizedItem} className='space-y-6'>
                <h3 className='text-2xl font-semibold text-white flex items-center gap-3'>
                    <span className='text-teal-400 text-3xl'>{'{'}</span>
                    Technical Arsenal
                    <span className='text-teal-400 text-3xl'>{'}'}</span>
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {memoizedSkillCategories.map((category) => (
                        <motion.div
                            key={category.name}
                            className='bg-base-300/50 rounded-xl p-5 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                            <div className='flex items-center gap-3 mb-3'>
                                <span className='text-2xl'>{category.icon}</span>
                                <h4 className='text-lg font-medium text-white group-hover:text-teal-400 transition-colors'>{category.name}</h4>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className='px-3 py-1 bg-base-300/70 text-white/80 text-sm rounded-lg border border-teal-400/20 group-hover:border-teal-400/40 transition-all'>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        ),
        [memoizedSkillCategories, memoizedItem]
    );

    // Memoize education and focus section
    const educationAndFocusSection = useMemo(
        () => (
            <motion.div variants={memoizedItem} className='space-y-6'>
                {/* Education */}
                <motion.div>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold text-white flex items-center gap-3'>
                            <span className='text-teal-400 text-3xl'>{'{'}</span>
                            Education
                            <span className='text-teal-400 text-3xl'>{'}'}</span>
                        </h3>
                        <div className='space-y-4'>
                            <div className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-start justify-between gap-4'>
                                        <div className='space-y-2'>
                                            <div className='flex items-center gap-2'>
                                                <span>🎓</span>
                                                <h4 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors'>
                                                    College Diploma, Computer Programming
                                                </h4>
                                            </div>
                                            <p className='text-teal-400 font-medium'>Algonquin College of Applied Arts and Technology</p>
                                            <p className='text-white/70 text-sm mt-2 max-w-2xl'>
                                                Relevant Coursework: Java, Python, C#, ASP.NET Core, Entity Framework, PostgreSQL, MySQL, Object Oriented
                                                Programming, Network Systems
                                            </p>
                                        </div>
                                        <p className='hidden md:block text-white/60 text-sm font-medium'>2024 - 2026</p>
                                    </div>
                                    <div className='hidden md:flex justify-end'>
                                        <div className='px-3 py-1.5 bg-teal-400/10 rounded-lg border border-teal-400/30'>
                                            <p className='text-teal-400 text-sm font-medium'>In Progress</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-start justify-between gap-4'>
                                        <div className='space-y-2'>
                                            <div className='flex items-center gap-2'>
                                                <span>💡</span>
                                                <h4 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors'>
                                                    Self-Taught Developer
                                                </h4>
                                            </div>
                                            <p className='text-teal-400 font-medium'>Online Resources & Personal Projects</p>
                                            <p className='text-white/70 text-sm mt-2 max-w-2xl'>
                                                Started with web development fundamentals and progressively expanded into full-stack development. Built numerous
                                                projects while learning new technologies along the way. Continues to learn new technologies and improve skills.
                                            </p>
                                        </div>
                                        <p className='hidden md:block text-white/60 text-sm font-medium'>2020 - Present</p>
                                    </div>
                                    <div className='hidden md:flex justify-end'>
                                        <div className='px-3 py-1.5 bg-teal-400/10 rounded-lg border border-teal-400/30'>
                                            <p className='text-teal-400 text-sm font-medium'>Never Stop Learning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        ),
        []
    );

    return (
        <motion.div variants={memoizedContainer} initial='hidden' animate='show' className='space-y-12'>
            {experienceSection}

            {/* Divider */}
            <div className='w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent' />

            {skillsSection}

            {/* Divider */}
            <div className='w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent' />

            {educationAndFocusSection}

            {/* Divider */}
            <div className='w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent' />

            {/* Current Interests Section */}
            <motion.div variants={memoizedItem} className='space-y-6'>
                <h3 className='text-2xl font-semibold text-white flex items-center gap-3'>
                    <span className='text-teal-400 text-3xl'>{'{'}</span>
                    Current Interests
                    <span className='text-teal-400 text-3xl'>{'}'}</span>
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 hover:border-teal-400/30 transition-all'>
                        <h5 className='text-white/90 font-medium flex items-center gap-2'>
                            <span className='text-teal-400 text-lg'>▹</span>
                            AI & Machine Learning
                        </h5>
                        <p className='text-white/60 text-sm pl-6'>
                            Integrating AI capabilities into applications to enhance user experiences and automate complex tasks through APIs and ML models.
                        </p>
                    </div>
                    <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 hover:border-teal-400/30 transition-all'>
                        <h5 className='text-white/90 font-medium flex items-center gap-2'>
                            <span className='text-teal-400 text-lg'>▹</span>
                            Backend Development
                        </h5>
                        <p className='text-white/60 text-sm pl-6'>
                            Strengthening server-side expertise with advanced design patterns and microservices architecture.
                        </p>
                    </div>
                    <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 hover:border-teal-400/30 transition-all'>
                        <h5 className='text-white/90 font-medium flex items-center gap-2'>
                            <span className='text-teal-400 text-lg'>▹</span>
                            DevOps & Infrastructure
                        </h5>
                        <p className='text-white/60 text-sm pl-6'>
                            Expanding knowledge in CI/CD pipelines, container orchestration, and cloud infrastructure management.
                        </p>
                    </div>
                    <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 hover:border-teal-400/30 transition-all'>
                        <h5 className='text-white/90 font-medium flex items-center gap-2'>
                            <span className='text-teal-400 text-lg'>▹</span>
                            Mobile Development
                        </h5>
                        <p className='text-white/60 text-sm pl-6'>Exploring native mobile app development with Swift and SwiftUI.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
