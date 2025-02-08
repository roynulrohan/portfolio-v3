import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    image: string;
    demoLink: string;
    githubLink: string;
    technologies: string[];
    features: string[];
}

const projects: Project[] = [
    {
        title: 'AI-Powered Task Manager',
        description: 'A smart task management application that uses AI to prioritize and categorize tasks, helping users optimize their productivity.',
        image: '/projects/task-manager.png',
        demoLink: 'https://task-manager.demo.com',
        githubLink: 'https://github.com/username/task-manager',
        technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'MongoDB', 'Tailwind CSS'],
        features: [
            'AI-powered task prioritization',
            'Real-time collaboration',
            'Smart task categorization',
            'Progress analytics'
        ]
    },
    {
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform with advanced filtering, real-time inventory, and integrated payment processing.',
        image: '/projects/ecommerce.png',
        demoLink: 'https://ecommerce.demo.com',
        githubLink: 'https://github.com/username/ecommerce',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis', 'TailwindCSS'],
        features: [
            'Real-time inventory tracking',
            'Advanced search and filtering',
            'Secure payment processing',
            'Order management system'
        ]
    },
    {
        title: 'Social Media Dashboard',
        description: 'A comprehensive social media management dashboard with analytics, scheduling, and content management features.',
        image: '/projects/social-dashboard.png',
        demoLink: 'https://social-dashboard.demo.com',
        githubLink: 'https://github.com/username/social-dashboard',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.IO', 'Chart.js'],
        features: [
            'Real-time analytics',
            'Content scheduling',
            'Engagement tracking',
            'Multi-platform support'
        ]
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function ProjectsSection() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                    Here are some of my recent projects that showcase my technical skills and 
                    problem-solving abilities. Each project represents unique challenges and solutions.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        variants={item}
                        className="group"
                    >
                        <div className="bg-base-300/50 rounded-xl overflow-hidden border border-teal-400/20 hover:border-teal-400/40 transition-all">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-white group-hover:text-teal-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/80">{project.description}</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Key Features</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {project.features.map((feature) => (
                                                <li 
                                                    key={feature}
                                                    className="flex items-center gap-2 text-white/80"
                                                >
                                                    <span className="text-teal-400">▹</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-medium text-white mb-2">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-lg transition-all text-center"
                                    >
                                        View Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-base-300/50 hover:bg-base-300/70 text-white/80 hover:text-white font-medium rounded-lg border border-teal-400/20 hover:border-teal-400/40 transition-all text-center"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
} 