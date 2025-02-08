import { createFileRoute } from '@tanstack/react-router';
import AnimatedLetter from '../components/AnimatedLetter';
import { useMemo, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { Engine } from 'tsparticles-engine';

export const Route = createFileRoute('/')({
    component: Index,
});

const title = "Hi, I'm Roynul";
const roleMessage = 'FULL STACK DEVELOPER';
const tagline = 'Transforming ideas into scalable digital solutions';
const description =
    'A problem solver at heart with a keen eye for detail. I thrive on turning complex challenges into elegant solutions that make a real impact. Always learning, always innovating.';

function Index() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    const getAnimatedRoleMessage = useMemo(() => {
        return roleMessage.split(' ').map((word, wordIndex) => (
            <span className="inline-flex mr-2" key={`word-${wordIndex}`}>
                {word.split('').map((letter, letterIndex) => (
                    <AnimatedLetter
                        letter={letter}
                        animation='rubberBand'
                        key={`${word}-${letterIndex}`}
                    />
                ))}
            </span>
        ));
    }, [roleMessage]);

    const getAnimatedTitle = useMemo(() => {
        return title.split(' ').map((word, wordIndex) => (
            <span className="inline-flex mr-2" key={`word-${wordIndex}`}>
                {word.split('').map((letter, letterIndex) => (
                    <AnimatedLetter
                        letter={letter}
                        animation='rubberBand'
                        key={`${word}-${letterIndex}`}
                    />
                ))}
            </span>
        ));
    }, [title]);

    const getAnimatedTagline = useMemo(() => {
        return tagline.split(' ').map((word, wordIndex) => (
            <span className="inline-flex mr-2" key={`word-${wordIndex}`}>
                {word.split('').map((letter, letterIndex) => (
                    <AnimatedLetter
                        letter={letter}
                        animation='rubberBand'
                        key={`${word}-${letterIndex}`}
                    />
                ))}
            </span>
        ));
    }, [tagline]);

    return (
        <div className='min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 relative overflow-hidden'>
            {/* Decorative Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl floating'></div>
                <div className='absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl floating-reverse'></div>

                {/* Decorative Shapes */}
                <div className='absolute top-[20%] right-[5%] md:right-[10%] w-16 h-16 md:w-24 md:h-24 border-2 border-teal-400/30 rounded-lg rotate-12 floating spinning'></div>
                <div className='absolute bottom-[10%] left-[5%] md:left-[10%] w-20 h-20 md:w-32 md:h-32 border-2 border-teal-400/30 rounded-full floating-reverse spinning-reverse'></div>
                <div className='absolute top-[40%] left-[2%] md:left-[5%] w-12 h-12 md:w-16 md:h-16 border-2 border-teal-400/30 rounded-lg rotate-45 floating spinning'></div>
                <div className='absolute bottom-[40%] right-[8%] md:right-[15%] w-14 h-14 md:w-20 md:h-20 border-2 border-teal-400/30 rounded-full pulsing'></div>
                <div className='absolute bottom-[20%] right-[15%] md:right-[25%] w-8 h-8 md:w-12 md:h-12 border-2 border-teal-400/30 rounded-lg -rotate-12 floating-reverse spinning-reverse'></div>
                <div className='absolute top-[10%] left-[20%] md:left-[30%] w-12 h-12 md:w-16 md:h-16 border-2 border-teal-400/30 rounded-full pulsing floating'></div>

                {/* Particles Background */}
                <Particles
                    init={particlesInit}
                    options={{
                        preset: 'stars',
                        background: {
                            opacity: 0,
                        },
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                            },
                            color: {
                                value: '#5eead4',
                            },
                            size: {
                                value: 2,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 3,
                                    size_min: 0.3,
                                    sync: false,
                                },
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: 'none',
                                random: true,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                            },
                            line_linked: {
                                enable: false,
                            },
                        },
                        emitters: [
                            {
                                direction: 'right-bottom',
                                rate: {
                                    delay: 5,
                                    quantity: 1,
                                },
                                position: {
                                    x: -5,
                                    y: 0,
                                },
                                particles: {
                                    size: {
                                        value: { min: 0.3, max: 1.5 },
                                    },
                                    move: {
                                        straight: true,
                                        enable: true,
                                        speed: { min: 15, max: 30 },
                                        direction: 'bottom-right',
                                        out_mode: 'out',
                                    },
                                    opacity: {
                                        value: 1,
                                    },
                                    shape: {
                                        type: 'circle',
                                    },
                                    color: {
                                        value: '#5eead4',
                                    },
                                    trail: {
                                        enable: true,
                                        length: 10,
                                        fillColor: '#000',
                                    },
                                },
                            },
                            {
                                direction: 'left-bottom',
                                rate: {
                                    delay: 7,
                                    quantity: 1,
                                },
                                position: {
                                    x: 105,
                                    y: 0,
                                },
                                particles: {
                                    size: {
                                        value: { min: 0.3, max: 1.5 },
                                    },
                                    move: {
                                        straight: true,
                                        enable: true,
                                        speed: { min: 15, max: 30 },
                                        direction: 'bottom-left',
                                        out_mode: 'out',
                                    },
                                    opacity: {
                                        value: 1,
                                    },
                                    shape: {
                                        type: 'circle',
                                    },
                                    color: {
                                        value: '#5eead4',
                                    },
                                    trail: {
                                        enable: true,
                                        length: 10,
                                        fillColor: '#000',
                                    },
                                },
                            },
                        ],
                    }}
                />
            </div>

            {/* Hero Section */}
            <section id='main' className='relative flex flex-col justify-center items-center md:items-start p-3 md:p-5 min-h-screen'>
                <div className='p-2 md:p-3 flex flex-col space-y-2 w-full max-w-5xl mx-auto md:ml-[15%] backdrop-blur-sm'>
                    <div className='text-center md:text-left space-y-6 md:space-y-8'>
                        <span className='flex flex-wrap justify-center md:justify-start text-base md:text-lg tracking-[0.3em] text-teal-400 font-medium fade-in-up'>
                            {getAnimatedRoleMessage}
                        </span>

                        <div className='space-y-3 md:space-y-4'>
                            <h1 className='flex flex-wrap justify-center md:justify-start text-4xl sm:text-7xl md:text-8xl text-white font-bold tracking-tight leading-[1.1] max-w-4xl fade-in-up delay-200'>
                                {getAnimatedTitle}
                            </h1>
                            <p className='flex flex-wrap justify-center md:justify-start text-xl sm:text-3xl md:text-4xl text-teal-400/90 font-medium tracking-tight leading-relaxed fade-in-up delay-400'>
                                {getAnimatedTagline}
                            </p>
                        </div>

                        <div className='space-y-6 fade-in-up delay-600'>
                            <p className='text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-center md:text-left'>{description}</p>
                        </div>

                        {/* Social Links */}
                        <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-8 md:mt-12 items-center fade-in-up delay-600'>
                            <a
                                title='GitHub'
                                href='https://github.com/roynulrohan'
                                rel='noreferrer'
                                target='_blank'
                                className='p-3 rounded-xl bg-teal-400/5 hover:bg-teal-400/20 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='text-white/70 group-hover:text-white transition-colors md:w-6 md:h-6'>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                            </a>
                            <a
                                title='LinkedIn'
                                href='https://linkedin.com/in/roynul-rohan'
                                rel='noreferrer'
                                target='_blank'
                                className='p-3 rounded-xl bg-teal-400/5 hover:bg-teal-400/20 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='text-white/70 group-hover:text-white transition-colors md:w-6 md:h-6'>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </a>
                            <a
                                href='mailto:roynulrohan@gmail.com'
                                className='px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black font-medium transition-all duration-300 group flex items-center gap-2 text-sm md:text-base'>
                                Let's Connect
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    className='w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform'>
                                    <path
                                        fillRule='evenodd'
                                        d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
