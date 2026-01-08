'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate Text & Image
        gsap.fromTo(
            '.about-content',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );

        // Animate Stats Counters
        const statsCtx = gsap.context(() => {
            gsap.utils.toArray('.stat-number').forEach((stat: any) => {
                const endValue = parseInt(stat.getAttribute('data-value'), 10);

                gsap.to(stat, {
                    innerText: endValue,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 85%',
                    },
                    onUpdate: function () {
                        stat.innerHTML = Math.ceil(this.targets()[0].innerText) + (stat.getAttribute('data-suffix') || '');
                    }
                });
            });
        }, sectionRef);

        return () => statsCtx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="max-w-[1000px] mx-auto px-6 py-24 md:py-32"
        >
            <div className="flex items-center gap-4 mb-12 about-content">
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                    <span className="text-cyan mr-2">01.</span> About Me
                </h2>
                <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
            </div>

            <div className="grid md:grid-cols-[3fr_2fr] gap-12">
                {/* Text Content */}
                <div className="space-y-6 text-slate text-lg leading-relaxed about-content">
                    <p>
                        I&apos;m a Data Engineer who knows Python and SQL, but I&apos;d never built a job board,
                        mobile app, or SaaS before. <span className="text-cyan">AI tools changed that.</span>
                    </p>
                    <p>
                        Now I ship products in domains I&apos;ve never worked in before using
                        Cursor + Claude. I bridge the gap between heavy backend data systems and
                        interactive user experiences.
                    </p>
                    <p>
                        Currently, I build pipelines handling <span className="text-cyan">1TB+ daily data</span>
                        at Propper International and craft AI-powered tools in my free time.
                    </p>

                    <h3 className="text-white-off font-mono pt-4 text-sm">Skills & Technologies:</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-slate-light">
                        <li className="flex items-center gap-2">
                            <span className="text-cyan">▹</span> Python (PySpark)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-cyan">▹</span> AWS / Azure
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-cyan">▹</span> TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-cyan">▹</span> Next.js 14
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-cyan">▹</span> Snowflake
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-cyan">▹</span> Kafka
                        </li>
                    </ul>
                </div>

                {/* Image / Stats */}
                <div className="about-content">
                    {/* Photo Wrapper */}
                    <div className="relative group max-w-[300px] mx-auto md:mx-0">
                        {/* Outline Frame */}
                        <div className="absolute inset-0 border-2 border-cyan rounded translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                        {/* Image Container */}
                        <div className="relative rounded overflow-hidden bg-cyan/20 aspect-square transition-all duration-300 grayscale hover:grayscale-0 group-hover:scale-[1.02]">
                            <Image
                                src="/profile.png"
                                alt="Sathish Kumar"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-navy-lighter about-content">
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white-off mb-2 font-mono">
                        <span className="stat-number" data-value="4" data-suffix="+">0</span>
                    </div>
                    <p className="text-cyan text-sm font-mono">Years Exp</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white-off mb-2 font-mono">
                        <span className="stat-number" data-value="100" data-suffix="+">0</span>
                    </div>
                    <p className="text-cyan text-sm font-mono">Pipelines</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white-off mb-2 font-mono">
                        <span className="stat-number" data-value="1" data-suffix="TB+">0</span>
                    </div>
                    <p className="text-cyan text-sm font-mono">Daily Data</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white-off mb-2 font-mono">
                        <span className="stat-number" data-value="3" data-suffix="">0</span>
                    </div>
                    <p className="text-cyan text-sm font-mono">Products</p>
                </div>
            </div>
        </section>
    );
}
