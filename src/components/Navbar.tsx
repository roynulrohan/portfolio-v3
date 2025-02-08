import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <a href="#main" className="text-lg font-medium hover:text-primary transition-colors group">
                        <span className="text-primary group-hover:text-base-content transition-colors">&lt;</span>
                        <span className="group-hover:text-primary transition-colors">rohan</span>
                        <span className="text-primary group-hover:text-base-content transition-colors">/&gt;</span>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="#about" 
                            className="hover:text-primary transition-colors group"
                        >
                            <span className="text-primary group-hover:text-base-content">.</span>
                            about
                            <span className="text-primary group-hover:text-base-content">()</span>
                        </a>
                        <a 
                            href="#projects" 
                            className="hover:text-primary transition-colors group"
                        >
                            <span className="text-primary group-hover:text-base-content">.</span>
                            projects
                            <span className="text-primary group-hover:text-base-content">()</span>
                        </a>
                        <a 
                            href="#contact" 
                            className="hover:text-primary transition-colors group"
                        >
                            <span className="text-primary group-hover:text-base-content">.</span>
                            contact
                            <span className="text-primary group-hover:text-base-content">()</span>
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank"
                            className="group relative px-4 py-1 border border-primary text-primary hover:bg-primary hover:text-primary-content transition-colors rounded-md"
                        >
                            <span className="text-primary group-hover:text-primary-content">.</span>
                            resume
                            <span className="text-primary group-hover:text-primary-content">()</span>
                            <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-primary-content bg-primary px-1.5 rounded-full">
                                PDF
                            </span>
                        </a>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d={isOpen 
                                    ? "M6 18L18 6M6 6l12 12" 
                                    : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
                    <div className="py-4 space-y-4">
                        <a href="#about" className="block hover:text-primary transition-colors group">
                            <span className="text-primary group-hover:text-base-content">.</span>
                            about
                            <span className="text-primary group-hover:text-base-content">()</span>
                        </a>
                        <a href="#projects" className="block hover:text-primary transition-colors group">
                            <span className="text-primary group-hover:text-base-content">.</span>
                            projects
                            <span className="text-primary group-hover:text-base-content">()</span>
                        </a>
                        <a href="#contact" className="block hover:text-primary transition-colors group">
                            <span className="text-primary group-hover:text-base-content">.</span>
                            contact
                            <span className="text-primary group-hover:text-base-content">()</span>
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank"
                            className="inline-block px-4 py-1 border border-primary text-primary hover:bg-primary hover:text-primary-content transition-colors rounded-md group"
                        >
                            <span className="text-primary group-hover:text-primary-content">.</span>
                            resume
                            <span className="text-primary group-hover:text-primary-content">()</span>
                        </a>
                        <div className="block">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 