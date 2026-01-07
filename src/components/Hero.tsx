'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import Magnetic from './Magnetic';
import HeroGraphic from './HeroGraphic';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const taglinesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // Initial Fade In
        tl.fromTo(
            '.hero-text',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );

        // Scroll Indicator Bounce
        gsap.to('.scroll-indicator', {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut',
        });

    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center px-8 md:px-24 pt-20 overflow-hidden"
            id="hero"
        >
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Column: Text */}
                <div className="max-w-3xl z-10">
                    <p className="hero-text font-mono text-cyan mb-5 text-lg">
                        Hi, my name is
                    </p>

                    <h1
                        ref={nameRef}
                        className="hero-text text-5xl md:text-7xl font-bold text-white-off mb-4 tracking-tight"
                    >
                        Sathish Kumar.
                    </h1>

                    <div ref={taglinesRef} className="hero-text mb-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-2">
                            <span className="text-white-off">Data Engineer</span> by Day.
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate">
                            <span className="text-cyan">Product Builder</span> by Night.
                        </h2>
                    </div>

                    <p className="hero-text text-slate-light text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                        I build scalable data pipelines @{' '}
                        <span className="text-cyan">Propper International</span> and ship AI
                        SaaS products. Merging robust backend engineering with creative
                        frontend experiences.
                    </p>

                    <div className="hero-text flex flex-wrap gap-6">
                        <Magnetic>
                            <a
                                href="#projects"
                                className="px-8 py-4 border border-cyan text-cyan rounded hover:bg-cyan-tint transition-all font-mono text-sm data-[cursor=pointer]"
                                data-cursor="pointer"
                            >
                                Check out my work
                            </a>
                        </Magnetic>

                        <Magnetic>
                            <a
                                href="#contact"
                                className="px-8 py-4 border border-slate text-white-off rounded hover:bg-navy-light transition-all font-mono text-sm data-[cursor=pointer]"
                                data-cursor="pointer"
                            >
                                Get In Touch
                            </a>
                        </Magnetic>
                    </div>
                </div>

                {/* Right Column: Graphic */}
                <div className="hidden md:block w-full h-full relative z-0">
                    <HeroGraphic />
                </div>

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
                <a href="#about" aria-label="Scroll Down">
                    <ArrowDown className="text-cyan w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </section>
    );
}
