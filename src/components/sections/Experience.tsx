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
        title: "Full-Stack Developer",
        company: "Freelance",
        period: "Jun. 2024 - Present",
        description: [
            "Delivered high-quality web and mobile applications through effective client communication and requirement analysis",
            "Developed responsive web applications using Next.js, Vite React, and TypeScript, enhancing digital presence for multiple clients",
            "Built robust RESTful APIs using Express.js and GraphQL, ensuring seamless data flow between frontend and backend systems",
            "Leveraged AI tools like Gemini and Claude to enhance development efficiency and accuracy",
        ],
        technologies: ["React", "TypeScript", "React Native", "NestJS", "GraphQL", "Supabase", "Gemini", "Claude"],
    },
    {
        title: "Project Advisor, AS-02",
        company: "Employment and Social Development Canada",
        period: "Jul. 2022 - March 2024",
        description: [
            "Led development initiatives within the Digital Transformation Services team of the Compensation Directorate",
            "Architected and developed internal applications for compensation advisors, implementing diverse business calculators and automation tools",
            "Engineered a user-friendly mail merge tool with GUI interface, optimizing mass email distribution for non-technical users",
            "Conducted thorough stakeholder engagement to align project objectives and ensure successful delivery of solutions",
            "Utilized modern tech stack including TypeScript, Python, Svelte, React.js, MySQL, Git, and Azure Cloud Services",
        ],
        technologies: ["TypeScript", "Python", "Svelte", "React.js", "MySQL", "Git", "Azure Cloud Services"],
    },
];

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend Development",
        icon: "🎨",
        skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "Tanstack Query/Router", "Apollo GraphQL", "Shadcn/UI"],
    },
    {
        name: "Backend & Databases",
        icon: "⚙️",
        skills: ["Node.js", "Bun", "Nest.js", "Express", "Apollo GraphQL API", "RESTful API", "SQL", "NoSQL", "Supabase", "Redis"],
    },
    {
        name: "Programming Languages",
        icon: "💻",
        skills: ["TypeScript", "Java", "Python"],
    },
    {
        name: "Mobile Development",
        icon: "📱",
        skills: ["React Native", "Expo", "Swift", "SwiftUI"],
    },
    {
        name: "DevOps & Cloud",
        icon: "🚀",
        skills: ["Git", "Docker", "Render", "AWS", "Cloudflare", "Supabase", "GitHub Actions"],
    },
    {
        name: "Other",
        icon: "🔧",
        skills: ["Linux", "Figma", "Notion", "Cursor", "Gemini", "Claude"],
    },
];

export function ExperienceSection() {
    return (
        <div className="space-y-8">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]">
                <div className="relative bg-base-300/50 rounded-xl border border-teal-400/20 hover:border-teal-400/40 transition-all group overflow-hidden">
                    <div className="px-4 py-2 border-b border-teal-400/20 bg-base-300/70 flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="px-3 py-0.5 text-xs text-white bg-base-300/50 rounded-md border border-teal-400/20">fullstack-developer.app</div>
                        </div>
                    </div>

                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between p-2 bg-base-300/30 rounded-lg border border-teal-400/20">
                            <div className="w-8 h-8 bg-teal-400/20 rounded-lg"></div>
                            <div className="flex gap-3">
                                <div className="w-16 h-2 bg-teal-400/20 rounded-full"></div>
                                <div className="w-16 h-2 bg-teal-400/20 rounded-full"></div>
                                <div className="w-16 h-2 bg-teal-400/20 rounded-full"></div>
                            </div>
                        </div>

                        <div className="p-6 bg-base-300/30 rounded-lg border border-teal-400/20">
                            <h3 className="text-xl font-medium text-white group-hover:text-teal-400 transition-colors mb-2">Full Stack Developer</h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Experienced in building complete web applications from frontend to backend deployment.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="p-3 bg-base-300/30 rounded-lg border border-teal-400/20">
                                <div className="w-8 h-8 bg-teal-400/20 rounded-lg mb-2"></div>
                                <div className="w-full h-2 bg-teal-400/20 rounded-full"></div>
                            </div>
                            <div className="p-3 bg-base-300/30 rounded-lg border border-teal-400/20">
                                <div className="w-8 h-8 bg-teal-400/20 rounded-lg mb-2"></div>
                                <div className="w-full h-2 bg-teal-400/20 rounded-full"></div>
                            </div>
                            <div className="p-3 bg-base-300/30 rounded-lg border border-teal-400/20">
                                <div className="w-8 h-8 bg-teal-400/20 rounded-lg mb-2"></div>
                                <div className="w-full h-2 bg-teal-400/20 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-base-300/50 rounded-xl border border-teal-400/20 hover:border-teal-400/40 transition-all group overflow-hidden">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: "600px",
                            height: "600px",
                            background: "radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, rgba(45, 212, 191, 0) 70%)",
                            filter: "blur(24px)",
                            transform: "translate(-50%, -50%)",
                            transition: "all 0.3s ease-in-out",
                        }}
                    />

                    <div className="absolute bg-base-300 top-10 left-1/2 -translate-x-1/2 w-[280px] h-[520px] border-8 border-primary-content rounded-[3rem] shadow-lg">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary-content rounded-b-xl"></div>
                    </div>

                    <div className="relative h-full p-6 pt-24 pb-12 flex flex-col items-center">
                        <div className="w-[240px] space-y-4">
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-medium text-white group-hover:text-teal-400 transition-colors">Mobile Developer</h3>
                            </div>

                            <div className="space-y-2">
                                <div className="p-3 bg-base-300/30 rounded-xl border border-teal-400/20">
                                    <div className="w-full h-2 bg-teal-400/20 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-3 bg-base-300/30 rounded-xl border border-teal-400/20">
                                        <div className="w-full h-2 bg-teal-400/20 rounded-full"></div>
                                    </div>
                                    <div className="p-3 bg-base-300/30 rounded-xl border border-teal-400/20">
                                        <div className="w-full h-2 bg-teal-400/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm text-center">
                                Crafting intuitive cross-platform mobile experiences with modern frameworks and native solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" /> */}

            <div className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                        <span className="text-teal-400 text-2xl sm:text-3xl">{"{"}</span>
                        Professional Experience
                        <span className="text-teal-400 text-2xl sm:text-3xl">{"}"}</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={exp.title} className="relative">
                            <div className="bg-base-300/50 rounded-xl p-4 sm:p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group">
                                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl sm:text-2xl">{index === 0 ? "💼" : "🚀"}</span>
                                            <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">
                                                {exp.title}
                                            </h3>
                                        </div>
                                        <p className="text-teal-400 font-medium text-sm sm:text-base">{exp.company}</p>
                                    </div>
                                    <div className="md:self-start px-3 py-1.5 rounded-full bg-teal-400/10 text-teal-400 text-xs sm:text-sm font-medium border border-teal-400/20">
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <ul className="space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                                                <span className="text-teal-400 text-xs sm:text-sm mt-1.5">▹</span>
                                                <span className="flex-1">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-2">
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 sm:px-3 py-1 bg-base-300/70 text-white/70 hover:text-teal-400 rounded-lg text-xs sm:text-sm border border-teal-400/20 hover:border-teal-400/40 transition-all"
                                                >
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
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

            <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3">
                    <span className="text-teal-400 text-2xl sm:text-3xl">{"{"}</span>
                    Education
                    <span className="text-teal-400 text-2xl sm:text-3xl">{"}"}</span>
                </h3>
                <div className="space-y-4">
                    <div className="bg-base-300/50 rounded-xl p-4 sm:p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all group">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span>🎓</span>
                                        <h4 className="text-base sm:text-xl font-medium text-white group-hover:text-teal-400 transition-colors">
                                            College Diploma, Computer Programming
                                        </h4>
                                    </div>
                                    <p className="text-teal-400 font-medium text-sm sm:text-base">Algonquin College of Applied Arts and Technology</p>
                                </div>
                                <p className="text-white/60 text-xs sm:text-sm font-medium whitespace-nowrap">2024 - 2026</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-2xl">
                                    Relevant Coursework: Java, Python, C#, ASP.NET Core, Entity Framework, PostgreSQL, MySQL, Object Oriented Programming,
                                    Network Systems
                                </p>
                                <div className="px-3 py-1.5 bg-teal-400/10 rounded-lg border border-teal-400/30 self-start sm:self-auto">
                                    <p className="text-teal-400 text-xs sm:text-sm font-medium whitespace-nowrap">In Progress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

            <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3">
                    <span className="text-teal-400 text-2xl sm:text-3xl">{"{"}</span>
                    Technical Arsenal
                    <span className="text-teal-400 text-2xl sm:text-3xl">{"}"}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillCategories.map((category) => (
                        <div
                            key={category.name}
                            className="bg-base-300/50 rounded-xl p-4 sm:p-5 border border-teal-400/20 hover:border-teal-400/40 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-xl sm:text-2xl">{category.icon}</span>
                                <h4 className="text-base sm:text-lg font-medium text-white group-hover:text-teal-400 transition-colors">{category.name}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-2 sm:px-3 py-1 bg-base-300/70 text-white/80 text-xs sm:text-sm rounded-lg border border-teal-400/20 group-hover:border-teal-400/40 transition-all"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
