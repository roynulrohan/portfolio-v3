import { useCallback, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { Engine } from 'tsparticles-engine';

function ParticlesBackgroundComponent() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadStarsPreset(engine);
    }, []);

    return (
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
    );
}

export const ParticlesBackground = memo(ParticlesBackgroundComponent); 