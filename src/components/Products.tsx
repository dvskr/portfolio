'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const products = [
    {
        name: 'PMHNP Hiring',
        description: 'Job board for Psychiatric NPs',
        status: 'Live',
        statusColor: 'bg-green-500',
        link: 'https://pmhnphiring.com',
        image: '#112240', // Placeholder color
    },
    {
        name: 'Gym Tracker',
        description: 'AI-powered workout application',
        status: 'Soon',
        statusColor: 'bg-yellow-500',
        link: '#',
        image: '#1d3557', // Placeholder color
    },
    {
        name: 'FreelancerShield',
        description: 'Business management for freelancers',
        status: 'Building',
        statusColor: 'bg-blue-500',
        link: '#',
        image: '#0a192f', // Placeholder color
    },
];

export default function Products() {
    const [modal, setModal] = useState({ active: false, index: 0 });
    const sectionRef = useRef<HTMLElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorLabelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            sectionRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    useEffect(() => {
        // Move custom cursor functionality specific to this component
        const moveCursor = (e: MouseEvent) => {
            if (!cursorRef.current || !cursorLabelRef.current) return;

            const { clientX, clientY } = e;

            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.1, // Faster follow for the image preview
                ease: "power2.out"
            });

            gsap.to(cursorLabelRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        };

        if (modal.active) {
            window.addEventListener('mousemove', moveCursor);
        } else {
            window.removeEventListener('mousemove', moveCursor);
        }

        return () => window.removeEventListener('mousemove', moveCursor);
    }, [modal.active]);

    return (
        <section ref={sectionRef} id="products" className="py-24 md:py-32 px-6">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                        <span className="text-cyan mr-2">05.</span> What I&apos;m Building
                    </h2>
                    <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
                </div>

                <div className="flex flex-col">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            href={product.link}
                            className="group relative flex items-center justify-between py-10 border-b border-navy-lighter transition-all hover:px-4"
                            onMouseEnter={() => setModal({ active: true, index })}
                            onMouseLeave={() => setModal({ active: false, index })}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 transition-transform group-hover:-translate-x-2">
                                <h3 className="text-3xl md:text-5xl font-bold text-slate-light group-hover:text-white-off transition-colors">
                                    {product.name}
                                </h3>
                                <span className="font-mono text-slate text-sm">
                                    {product.description}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 transition-transform group-hover:translate-x-2">
                                <span className={`w-2 h-2 rounded-full ${product.statusColor}`}></span>
                                <span className="font-mono text-xs text-slate-light">
                                    {product.status}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Floating Image Preview - Following Cursor */}
            <AnimatePresence>
                {modal.active && (
                    <>
                        {/* The Preview Card */}
                        <motion.div
                            ref={cursorRef}
                            className="fixed top-0 left-0 w-[300px] h-[200px] bg-navy-light border border-slate-light rounded-lg overflow-hidden pointer-events-none z-50 hidden md:flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, ease: 'backOut' }}
                        >
                            <div
                                className="w-full h-full flex items-center justify-center text-slate-light font-mono"
                                style={{ backgroundColor: products[modal.index].image }}
                            >
                                [Preview Image]
                            </div>
                        </motion.div>

                        {/* "View" Label */}
                        <motion.div
                            ref={cursorLabelRef}
                            className="fixed top-0 left-0 w-20 h-20 bg-cyan text-navy font-bold rounded-full flex items-center justify-center pointer-events-none z-50 hidden md:flex translate-x-[-50%] translate-y-[-50%]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                            View
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
