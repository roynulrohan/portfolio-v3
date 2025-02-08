interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        title: 'Project One',
        description: 'A full-stack web application with real-time features and modern UI/UX design.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
        link: 'https://github.com/username/project-one',
        image: '/project1.png'
    },
    {
        title: 'Project Two',
        description: 'An e-commerce platform with advanced filtering and search capabilities.',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
        link: 'https://github.com/username/project-two',
        image: '/project2.png'
    },
    {
        title: 'Project Three',
        description: 'A mobile-first social media dashboard with analytics and reporting.',
        technologies: ['React Native', 'Redux', 'Firebase', 'Chart.js'],
        link: 'https://github.com/username/project-three',
        image: '/project3.png'
    }
];

export function ProjectsSection() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                <p className="text-lg text-white/80">
                    Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-base-300/50 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300"
                    >
                        <div className="space-y-4">
                            <div className="aspect-video rounded-lg bg-base-300/50 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/80">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-sm bg-teal-400/10 text-teal-400 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
} 