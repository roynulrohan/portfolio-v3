export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                        <div className="text-white/60 text-sm">
                            <span className="text-teal-400">&lt;</span>
                            <span>Built with React, TypeScript, and Tailwind</span>
                            <span className="text-teal-400">/&gt;</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/60 text-sm">
                            <a 
                                href="https://github.com/roynulrohan" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-teal-400 transition-colors"
                            >
                                GitHub
                            </a>
                            <span>•</span>
                            <a 
                                href="https://linkedin.com/in/roynul-rohan" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-teal-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <span>•</span>
                            <a 
                                href="mailto:roynulrohan@gmail.com"
                                className="hover:text-teal-400 transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                    <div className="w-full border-t border-teal-400/10"></div>
                    <div className="text-white/40 text-sm">
                        © {currentYear} Roynul Rohan. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
} 