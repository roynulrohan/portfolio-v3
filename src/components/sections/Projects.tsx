import ProjectCard from "../ProjectCard";

type ProjectLinkType = "github" | "website" | "demo";

interface ProjectLink {
    title: string;
    link: string;
    type: ProjectLinkType;
}

export interface Project {
    title: string;
    description: string;
    info?: string;
    status?: "Launched" | "In Development" | "Archived";
    date?: string;
    links?: ProjectLink[];
    technologies: string[];
    features?: string[];
    imagesFolder: string;
    isMobile?: boolean;
}

// Function to get screenshot URL or fallback
// const getScreenshotUrl = (url: string) => {
//     // Using thum.io - completely free, no API key needed
//     return `https://image.thum.io/get/width/1280/crop/720/maxAge/24/viewportWidth/1280/viewportHeight/720/${url}`;
// };

const projects: Project[] = [
    {
        title: "⚡ Floxy.io",
        description:
            "A comprehensive proxy marketplace offering residential, datacenter, mobile, and ISP proxies. Features real-time proxy generation, API integration, and advanced dashboard for seamless web data access.",
        status: "Launched",
        info: "Proxy Marketplace SaaS",
        date: "April 2025 - Present",
        technologies: [
            "TypeScript",
            "React",
            "Vite",
            "NestJS",
            "Fastify",
            "Mercurius GraphQL",
            "TypeORM",
            "PostgreSQL",
            "Supabase",
            "Stripe",
            "Cloudflare DNS",
            "Shadcn/UI",
        ],
        features: [
            "Multi-type proxy support (Residential, ISP, Mobile, Datacenter)",
            "Developer-friendly API integration",
            "Real-time proxy generation & management",
            "Advanced dashboard with analytics",
            "Global proxy network",
            "Admin panel for user & order management",
        ],
        imagesFolder: "floxy",
        links: [
            {
                title: "Website",
                link: "https://floxy.io/",
                type: "website",
            },
        ],
    },
    {
        title: "🤖 Ivy AI Assistant",
        description:
            "An intelligent AI assistant available on web and mobile that automatically organizes your academic schedule by analyzing uploaded timetables and course documents. Creates personalized calendars and syncs with your existing calendar apps.",
        status: "In Development",
        info: "Web & Mobile App",
        technologies: [
            "TypeScript",
            "React",
            "Vite",
            "React Native",
            "Expo",
            "NestJS",
            "Mercurius GraphQL",
            "TypeORM",
            "PostgreSQL",
            "Supabase",
            "Google Gemini",
            "Shadcn/UI",
        ],
        features: [
            "Schedule & timetable upload & analysis",
            "Course outline & document processing",
            "AI-generated personalized schedules",
            "Calendar sync (Apple/Google/Outlook)",
            "Intelligent course management system",
            "AI chatbot for assignment queries",
        ],
        imagesFolder: "ivy-ai",
    },
    {
        title: "⛏️ Minerverse",
        description:
            "A Web3 blockchain game where players mint unique NFT miners using ETH and engage in real-time mining experiences. Features comprehensive blockchain integration and smart contracts.",
        status: "Archived",
        info: "Web3 Blockchain Game",
        date: "April - July 2022",
        links: [
            {
                title: "Website",
                link: "https://minerverse.vercel.app/",
                type: "website",
            },
        ],
        technologies: ["TypeScript", "Next.js", "Web3.js", "Solidity", "MetaMask", "Ethereum"],
        features: ["NFT minting system", "Real-time mining mechanics", "MetaMask integration", "Smart contract interaction"],
        imagesFolder: "minerverse",
    },

    {
        title: "🐱 Pet Connect",
        description:
            "A cross-platform social media app for pets, enabling pet owners to connect and share their furry friends' moments. Features a modern tech stack with real-time updates.",
        status: "Archived",
        info: "Mobile App",
        date: "December 2023",
        links: [
            {
                title: "GitHub",
                link: "https://github.com/FinalScript/pet-connect",
                type: "github",
            },
        ],
        technologies: ["TypeScript", "React Native", "Apollo GraphQL", "Express", "MySQL"],
        features: ["Cross-platform mobile app", "Real-time social features", "Pet profiles and networking", "Photo sharing and interactions"],
        imagesFolder: "pet-connect",
        isMobile: true,
    },
    {
        title: "📈 Stocks.io",
        description:
            "A comprehensive stock trading platform featuring real-time updates and advanced trading functionalities. Built with modern web technologies for optimal performance.",
        status: "Archived",
        info: "Portfolio Project",
        date: "December 2021",
        links: [
            {
                title: "GitHub",
                link: "https://github.com/roynulrohan/Stocks.io",
                type: "github",
            },
        ],
        technologies: ["MERN Stack", "TypeScript", "GraphQL", "Socket.io", "JWT"],
        // features: ["Real-time stock tracking", "Virtual trading system", "Portfolio management", "Market analytics"],
        imagesFolder: "stocks.io",
    },
];

export function ProjectsSection() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-teal-400 text-2xl sm:text-3xl">{"{"}</span>
                    Featured Projects
                    <span className="text-teal-400 text-2xl sm:text-3xl">{"}"}</span>
                </h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">Here are some of the projects I've worked on and been a part of.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} className="w-full md:w-[calc(50%-0.75rem)]" />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Want to see more?</h3>
                <p className="text-white/80 text-sm sm:text-base">Check out my GitHub profile for more projects and contributions.</p>
                <a
                    href="https://github.com/roynulrohan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium rounded-lg transition-all inline-flex items-center gap-2 text-xs sm:text-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Visit My GitHub
                </a>
            </div>
        </div>
    );
}
