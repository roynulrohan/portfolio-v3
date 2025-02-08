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
        title: 'Senior Full Stack Developer',
        company: 'TechCorp Solutions',
        period: '2021 - Present',
        description: [
            'Led development of enterprise-scale web applications using React and Node.js',
            'Mentored junior developers and conducted code reviews to maintain high code quality',
            'Implemented CI/CD pipelines reducing deployment time by 40%',
            'Architected microservices infrastructure serving 1M+ users'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB']
    },
    {
        title: 'Full Stack Developer',
        company: 'Digital Innovations Inc',
        period: '2019 - 2021',
        description: [
            'Developed and maintained multiple client-facing applications',
            'Optimized database queries improving application performance by 60%',
            'Implemented real-time features using WebSocket technology',
            'Collaborated with UX team to improve user experience'
        ],
        technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Redis', 'AWS']
    },
    {
        title: 'Software Engineering Intern',
        company: 'StartUp Hub',
        period: 'Summer 2019',
        description: [
            'Developed new features for company\'s main product',
            'Created automated testing suite reducing QA time by 30%',
            'Participated in agile development processes',
            'Contributed to internal developer tools'
        ],
        technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB']
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export function ExperienceSection() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                    My journey through various roles has equipped me with a diverse skill set and 
                    valuable experience in building scalable applications and leading development teams.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-6"
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.title}
                        variants={item}
                        className="relative"
                    >
                        {/* Timeline connector */}
                        {index !== experiences.length - 1 && (
                            <div className="absolute left-8 top-[4.5rem] bottom-0 w-0.5 bg-teal-400/20" />
                        )}
                        
                        <div className="bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                <div className="flex-1 space-y-1">
                                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                    <p className="text-teal-400">{exp.company}</p>
                                </div>
                                <div className="inline-flex px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-sm">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-white/80 mb-4">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-base-300/50 text-white/60 rounded-full text-sm border border-teal-400/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
} 