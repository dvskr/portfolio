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
        textColor: 'text-green-400',
        link: 'https://pmhnphiring.com',
        color: '#112240',
        gradient: 'from-[#0f172a] to-[#112240]',
    },
    {
        name: 'Gym Tracker',
        description: 'AI-powered workout application',
        status: 'Soon',
        statusColor: 'bg-yellow-500',
        textColor: 'text-yellow-400',
        link: '#',
        color: '#1d3557',
        gradient: 'from-[#1e1b4b] to-[#1d3557]',
    },
    {
        name: 'FreelancerShield',
        description: 'Business management for freelancers',
        status: 'Building',
        statusColor: 'bg-blue-500',
        textColor: 'text-blue-400',
        link: '#',
        color: '#0a192f',
        gradient: 'from-[#020617] to-[#0a192f]',
    },
];

export default function Products() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="products" className="py-24 px-6 md:px-12 relative bg-navy">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                        <span className="text-cyan mr-2">05.</span> What I&apos;m Building
                    </h2>
                    <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Scrollable Content */}
                    <div className="flex flex-col gap-32 lg:gap-[40vh] pb-32">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                                index={index}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </div>

                    {/* Right Column: Sticky Visuals (Desktop Only) */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-0 h-screen flex items-center justify-center">
                            <div className="relative w-full aspect-square max-w-[500px] rounded-2xl overflow-hidden border border-navy-lighter shadow-2xl bg-navy-light/50 backdrop-blur-sm">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className={`absolute inset-0 bg-gradient-to-br ${products[activeIndex].gradient} flex items-center justify-center p-12`}
                                    >
                                        <div className="text-center">
                                            <h3 className="text-4xl font-bold text-white-off mb-4">{products[activeIndex].name}</h3>
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-dark/50 border border-white/10 ${products[activeIndex].textColor}`}>
                                                <span className={`w-2 h-2 rounded-full ${products[activeIndex].statusColor}`}></span>
                                                <span className="text-sm font-mono">{products[activeIndex].status}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, index, setActiveIndex }: { product: typeof products[0], index: number, setActiveIndex: (i: number) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
            onViewportEnter={() => setActiveIndex(index)}
            className="flex flex-col justify-center min-h-[50vh] lg:min-h-[60vh]"
        >
            <Link
                href={product.link}
                className="group block"
            >
                <div className="lg:hidden w-full aspect-video mb-8 rounded-xl bg-gradient-to-br from-navy-light to-navy border border-navy-lighter flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${product.gradient} opacity-80`} />
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-slate-light group-hover:text-cyan transition-colors mb-4">
                    {product.name}
                </h3>

                <p className="text-lg md:text-xl text-slate font-mono mb-8 max-w-md">
                    {product.description}
                </p>

                <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-light border border-navy-lighter`}>
                        <span className={`w-2 h-2 rounded-full ${product.statusColor}`}></span>
                        <span className="font-mono text-xs text-slate-light uppercase tracking-wider">{product.status}</span>
                    </div>

                    <span className="flex items-center gap-2 text-cyan font-mono text-sm group-hover:translate-x-1 transition-transform">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
