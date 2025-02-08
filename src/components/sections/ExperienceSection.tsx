import { motion } from 'framer-motion';

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
            'Built robust RESTful APIs using Express.js and Spring Boot, ensuring seamless data flow between frontend and backend systems',
            'Implemented cross-platform mobile solutions using React Native, expanding client reach to mobile users',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'React Native', 'Express.js', 'Spring Boot', 'HTML/CSS', 'PHP'],
    },
    {
        title: 'Project Advisor',
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
};

export function ExperienceSection() {
    return (
        <div className='space-y-8'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='space-y-4'>
                <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                    <span className='text-teal-400 text-3xl'>{'{'}</span>
                    Professional Experience
                    <span className='text-teal-400 text-3xl'>{'}'}</span>
                </h2>
                <p className='text-lg text-white/80 leading-relaxed'>
                    My professional journey combines government sector experience with freelance development work, demonstrating versatility in both structured
                    enterprise environments and client-focused project delivery.
                </p>
            </motion.div>

            <motion.div variants={container} initial='hidden' animate='show' className='space-y-6'>
                {experiences.map((exp, index) => (
                    <motion.div key={exp.title} variants={item} className='relative'>
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
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
