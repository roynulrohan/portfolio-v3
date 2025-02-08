import { motion } from 'framer-motion';

interface SkillCategory {
    name: string;
    skills: string[];
    icon: string;
}

const skillCategories: SkillCategory[] = [
    {
        name: 'Programming Languages & Databases',
        icon: '💻',
        skills: ['TypeScript', 'Java', 'Python'],
    },
    {
        name: 'Frontend Development',
        icon: '🎨',
        skills: ['React', 'Next.js', 'Svelte', 'React Native', 'Tailwind CSS', 'Redux', 'Zod', 'React Query', 'React Hook Form'],
    },
    {
        name: 'Backend & Databases',
        icon: '⚙️',
        skills: ['Node.js', 'Bun', 'Express', 'Spring Boot', 'Apollo GraphQL API', 'REST API', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
        name: 'Mobile Development',
        icon: '🗄️',
        skills: ['React Native', 'Flutter', 'Expo', 'Swift', 'SwiftUI'],
    },
    {
        name: 'DevOps & Cloud',
        icon: '🚀',
        skills: ['Git', 'Docker', 'Docker Compose', 'AWS EC2', 'Cloudflare', 'Supabase', 'Vercel', 'GitLab CI/CD', 'GitHub Actions'],
    },
    {
        name: 'System Administration',
        icon: '🖥️',
        skills: ['Linux', 'Windows', 'Ubuntu Server', 'macOS', 'SSH', 'Nginx'],
    },
];

const highlights = [
    {
        title: 'Full Stack Developer',
        description: 'Experienced in building complete web applications from frontend to backend deployment.',
        icon: '💻',
    },
    {
        title: 'Mobile Developer',
        description: 'Building cross-platform mobile applications using React Native and modern mobile frameworks.',
        icon: '📱',
    },
    {
        title: 'Problem Solver',
        description: 'Strong debugging skills with a knack for tracking down and resolving complex technical issues.',
        icon: '🔍',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function AboutSection() {
    return (
        <div className='space-y-12'>
            {/* Introduction */}
            <motion.div className='space-y-6' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className='flex items-center gap-3'>
                    <h2 className='text-3xl font-bold text-white'>
                        <span className='text-teal-400'>&lt;</span>
                        About Me
                        <span className='text-teal-400'>/&gt;</span>
                    </h2>
                </div>
                <div className='prose prose-invert prose-teal max-w-none'>
                    <p className='text-lg text-white/80 leading-relaxed'>
                        I'm a versatile developer with a strong foundation in web development and a broad technical toolkit. While web development is my core
                        strength, I've cultivated a diverse range of skills across different domains of software development, allowing me to adapt quickly to
                        new challenges and technologies.
                    </p>
                    <br />
                    <p className='text-lg text-white/80 leading-relaxed'>
                        What drives me is my genuine passion for coding and problem-solving. I find real enjoyment in tackling complex challenges and learning
                        new technologies, which naturally accelerates my growth as a developer. This enthusiasm, combined with my ability to learn rapidly,
                        enables me to effectively bridge gaps between different technologies and find innovative solutions.
                    </p>
                </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={container} initial='hidden' animate='show' className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {highlights.map((highlight) => (
                    <motion.div
                        key={highlight.title}
                        variants={item}
                        className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                        <div className='flex items-center gap-3 mb-3'>
                            <span className='text-2xl'>{highlight.icon}</span>
                            <h3 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors'>{highlight.title}</h3>
                        </div>
                        <p className='text-white/70'>{highlight.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Technical Skills */}
            <motion.div variants={container} initial='hidden' animate='show' className='space-y-6'>
                <h3 className='text-2xl font-semibold text-white flex items-center gap-3'>
                    <span className='text-teal-400 text-3xl'>{'{'}</span>
                    Technical Arsenal
                    <span className='text-teal-400 text-3xl'>{'}'}</span>
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.name}
                            variants={item}
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

            {/* Education & Current Focus */}
            <motion.div className='space-y-6' variants={container} initial='hidden' animate='show'>
                {/* Education */}
                <motion.div variants={item}>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold text-white flex items-center gap-3'>
                            <span className='text-teal-400 text-3xl'>{'{'}</span>
                            Education
                            <span className='text-teal-400 text-3xl'>{'}'}</span>
                        </h3>
                        <div className='space-y-4'>
                            <motion.div className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-start justify-between gap-4'>
                                        <div className='space-y-2'>
                                            <div className='flex items-center gap-2'>
                                                <span>🎓</span>
                                                <h4 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors'>College Diploma, Computer Programming</h4>
                                            </div>
                                            <p className='text-teal-400 font-medium'>Algonquin College of Applied Arts and Technology</p>
                                            <p className='text-white/70 text-sm mt-2 max-w-2xl'>
                                                Relevant Coursework: Java, Python, C#, ASP.NET Core, Entity Framework, PostgreSQL, MySQL, Object Oriented
                                                Programming, Network Systems
                                            </p>
                                        </div>
                                        <p className='hidden md:block text-white/60 text-sm font-medium'>2023 - 2025</p>
                                    </div>
                                    <div className='hidden md:flex justify-end'>
                                        <div className='px-3 py-1.5 bg-teal-400/10 rounded-lg border border-teal-400/30'>
                                            <p className='text-teal-400 text-sm font-medium'>In Progress</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-start justify-between gap-4'>
                                        <div className='space-y-2'>
                                            <div className='flex items-center gap-2'>
                                                <span>💡</span>
                                                <h4 className='text-xl font-medium text-white group-hover:text-teal-400 transition-colors'>Self-Taught Developer</h4>
                                            </div>
                                            <p className='text-teal-400 font-medium'>Online Resources & Personal Projects</p>
                                            <p className='text-white/70 text-sm mt-2 max-w-2xl'>
                                                Started with web development fundamentals and progressively expanded into full-stack development. Built numerous
                                                projects while learning new technologies along the way.
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
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Current Focus */}
                <motion.div variants={item} className='bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group'>
                    <h4 className='text-xl font-medium text-white mb-4 flex items-center gap-2'>
                        <span>🎯</span> Current Focus
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 group-hover:border-teal-400/30 transition-all'>
                            <h5 className='text-white/90 font-medium flex items-center gap-2'>
                                <span className='text-teal-400 text-lg'>▹</span>
                                Backend Development
                            </h5>
                            <p className='text-white/60 text-sm pl-6'>
                                Strengthening server-side expertise with advanced Node.js patterns and microservices architecture.
                            </p>
                        </div>
                        <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 group-hover:border-teal-400/30 transition-all'>
                            <h5 className='text-white/90 font-medium flex items-center gap-2'>
                                <span className='text-teal-400 text-lg'>▹</span>
                                DevOps & Infrastructure
                            </h5>
                            <p className='text-white/60 text-sm pl-6'>
                                Expanding knowledge in CI/CD pipelines, container orchestration, and cloud infrastructure management.
                            </p>
                        </div>
                        <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 group-hover:border-teal-400/30 transition-all'>
                            <h5 className='text-white/90 font-medium flex items-center gap-2'>
                                <span className='text-teal-400 text-lg'>▹</span>
                                Mobile Development
                            </h5>
                            <p className='text-white/60 text-sm pl-6'>
                                Exploring cross-platform development with React Native and native mobile app architectures.
                            </p>
                        </div>
                        <div className='space-y-2 p-3 bg-base-300/30 rounded-lg border border-teal-400/10 group-hover:border-teal-400/30 transition-all'>
                            <h5 className='text-white/90 font-medium flex items-center gap-2'>
                                <span className='text-teal-400 text-lg'>▹</span>
                                IT Security
                            </h5>
                            <p className='text-white/60 text-sm pl-6'>
                                Learning about cybersecurity practices, network security, and IT infrastructure protection.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
