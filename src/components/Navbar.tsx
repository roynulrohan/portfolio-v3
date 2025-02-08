import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-base-100/30 backdrop-blur-md border-b border-teal-500/10'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo/Name */}
                    <a href='#main' className='text-lg font-medium hover:text-white/90 transition-colors group'>
                        <span className='text-teal-400 group-hover:text-teal-500 transition-colors'>&lt;</span>
                        <span className='text-white/80'>rohan</span>
                        <span className='text-teal-400 group-hover:text-teal-500 transition-colors'>/&gt;</span>
                    </a>

                    {/* Navigation Links */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <a href='#about' className='text-white/60 hover:text-white/90 transition-colors group'>
                            <span className='text-teal-400 group-hover:text-teal-500'>.</span>
                            about
                            <span className='text-teal-400 group-hover:text-teal-500'>()</span>
                        </a>
                        <a href='#projects' className='text-white/60 hover:text-white/90 transition-colors group'>
                            <span className='text-teal-400 group-hover:text-teal-500'>.</span>
                            projects
                            <span className='text-teal-400 group-hover:text-teal-500'>()</span>
                        </a>
                        <a href='#contact' className='text-white/60 hover:text-white/90 transition-colors group'>
                            <span className='text-teal-400 group-hover:text-teal-500'>.</span>
                            contact
                            <span className='text-teal-400 group-hover:text-teal-500'>()</span>
                        </a>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            className='group relative px-4 py-1.5 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/30 hover:border-teal-400/50 text-white/80 hover:text-white transition-all'>
                            <span className='text-teal-400 group-hover:text-teal-300'>.</span>
                            resume
                            <span className='text-teal-400 group-hover:text-teal-300'>()</span>
                            <span className='absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-teal-400 text-black/70 px-1.5 rounded-full font-medium'>
                                PDF
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2 text-white/60 hover:text-teal-400 transition-colors' aria-label='Toggle menu'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-6 h-6'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
                    <div className='py-4 space-y-4'>
                        <a href='#about' className='block text-white/60 hover:text-white/90 transition-colors group'>
                            <span className='text-teal-400 group-hover:text-teal-500'>.</span>
                            about
                            <span className='text-teal-400 group-hover:text-teal-500'>()</span>
                        </a>
                        <a href='#projects' className='block text-white/60 hover:text-white/90 transition-colors group'>
                            <span className='text-teal-400 group-hover:text-teal-500'>.</span>
                            projects
                            <span className='text-teal-400 group-hover:text-teal-500'>()</span>
                        </a>
                        <a href='#contact' className='block text-white/60 hover:text-white/90 transition-colors group'>
                            <span className='text-teal-400 group-hover:text-teal-500'>.</span>
                            contact
                            <span className='text-teal-400 group-hover:text-teal-500'>()</span>
                        </a>
                        <a
                            href='/resume.pdf'
                            target='_blank'
                            className='inline-block px-4 py-1.5 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/30 hover:border-teal-400/50 text-white/80 hover:text-white transition-all group'>
                            <span className='text-teal-400 group-hover:text-teal-300'>.</span>
                            resume
                            <span className='text-teal-400 group-hover:text-teal-300'>()</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
