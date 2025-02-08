import { createFileRoute } from '@tanstack/react-router';
import AnimatedLetter from '../components/AnimatedLetter';
import { useMemo } from 'react';
export const Route = createFileRoute('/')({
    component: Index,
});

const title = "Hi, I'm Roynul";
const roleMessage = 'FULL STACK DEVELOPER';
const tagline = 'Transforming ideas into scalable digital solutions';
const description =
    'A problem solver at heart with a keen eye for detail. I thrive on turning complex challenges into elegant solutions that make a real impact. Always learning, always innovating.';

function Index() {
    const getAnimatedRoleMessage = useMemo(() => {
        return roleMessage.split('').map((letter, index) => {
            return letter !== ' ' ? (
                <AnimatedLetter letter={letter} animation='rubberBand' key={`${roleMessage} - ${index}`} />
            ) : (
                <span key={`${roleMessage} - ${index}`}>&nbsp;</span>
            );
        });
    }, [roleMessage]);

    const getAnimatedTitle = useMemo(() => {
        return title.split('').map((letter, index) => {
            return letter !== ' ' ? (
                <AnimatedLetter letter={letter} animation='rubberBand' key={`${title} - ${index}`} />
            ) : (
                <span key={`${title} - ${index}`}>&nbsp;</span>
            );
        });
    }, [title]);

    const getAnimatedTagline = useMemo(() => {
        return tagline.split('').map((letter, index) => {
            return letter !== ' ' ? (
                <AnimatedLetter letter={letter} animation='rubberBand' key={`${tagline} - ${index}`} />
            ) : (
                <span key={`${tagline} - ${index}`}>&nbsp;</span>
            );
        });
    }, [tagline]);

    return (
        <div className='min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 relative overflow-hidden'>
            {/* Decorative Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl'></div>
                <div className='absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl'></div>
                <div className='absolute top-[20%] right-[10%] w-24 h-24 border-2 border-teal-400/30 rounded-lg rotate-12'></div>
                <div className='absolute bottom-[20%] left-[10%] w-32 h-32 border-2 border-teal-400/30 rounded-full'></div>
            </div>

            {/* Hero Section */}
            <section id='main' className='relative flex flex-col justify-center items-start p-5 min-h-screen'>
                <div className='p-3 flex flex-col space-y-2 w-full max-w-5xl mx-auto md:ml-[15%] backdrop-blur-sm'>
                    <div className='text-left space-y-8'>
                        <span className='flex text-lg tracking-[0.3em] text-teal-400 font-medium'>{getAnimatedRoleMessage}</span>

                        <div className='space-y-4'>
                            <h1 className='flex md:text-8xl sm:text-7xl text-5xl text-white font-bold tracking-tight leading-[1.1] max-w-4xl'>
                                {getAnimatedTitle}
                            </h1>
                            <p className='flex md:text-4xl sm:text-3xl text-2xl text-teal-400/90 font-medium tracking-tight leading-relaxed'>
                                {getAnimatedTagline}
                            </p>
                        </div>

                        <div className='space-y-6'>
                            <p className='text-xl text-white/80 max-w-2xl leading-relaxed'>{description}</p>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-6 mt-12 items-center'>
                            <a
                                title='GitHub'
                                href='https://github.com/roynulrohan'
                                rel='noreferrer'
                                target='_blank'
                                className='p-3 rounded-lg hover:bg-teal-500/5 transition-all duration-300'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='22'
                                    height='22'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='opacity-60 hover:opacity-100'>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                            </a>
                            <a
                                title='LinkedIn'
                                href='https://linkedin.com/in/roynul-rohan'
                                rel='noreferrer'
                                target='_blank'
                                className='p-3 rounded-lg hover:bg-teal-500/5 transition-all duration-300'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='22'
                                    height='22'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='opacity-60 hover:opacity-100'>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
