'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {loading && (
                    <motion.div
                        className="fixed inset-0 z-[100] grid place-items-center bg-navy"
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="relative flex flex-col items-center"
                        >
                            {/* Container for logo and animated overlay */}
                            <div className="relative w-40 h-40 md:w-48 md:h-48">
                                {/* SK Logo Image */}
                                <Image
                                    src="/logo.png"
                                    alt="SK Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />

                                {/* Animated SVG Overlay - Infinity path with moving glow */}
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 200 200"
                                    fill="none"
                                >
                                    <defs>
                                        {/* Glowing gradient for the moving dot */}
                                        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#64ffda" stopOpacity="1" />
                                            <stop offset="50%" stopColor="#64ffda" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#64ffda" stopOpacity="0" />
                                        </radialGradient>

                                        {/* Filter for extra glow effect */}
                                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Infinity path matching the SK logo shape */}
                                    <path
                                        id="infinityPath"
                                        d="M 60 100 
                                           C 60 70, 40 50, 70 50
                                           C 100 50, 100 80, 100 100
                                           C 100 120, 100 150, 130 150
                                           C 160 150, 140 100, 140 100
                                           C 140 100, 160 50, 130 50
                                           C 100 50, 100 80, 100 100
                                           C 100 120, 100 150, 70 150
                                           C 40 150, 60 130, 60 100"
                                        stroke="transparent"
                                        strokeWidth="2"
                                        fill="none"
                                    />

                                    {/* Animated glowing circle that follows the path */}
                                    <circle r="6" fill="url(#glowGradient)" filter="url(#glow)">
                                        <animateMotion
                                            dur="2s"
                                            repeatCount="indefinite"
                                            path="M 60 100 
                                                  C 60 70, 40 50, 70 50
                                                  C 100 50, 100 80, 100 100
                                                  C 100 120, 100 150, 130 150
                                                  C 160 150, 140 100, 140 100
                                                  C 140 100, 160 50, 130 50
                                                  C 100 50, 100 80, 100 100
                                                  C 100 120, 100 150, 70 150
                                                  C 40 150, 60 130, 60 100"
                                        />
                                    </circle>
                                </svg>
                            </div>

                            {/* Loading text */}
                            <motion.p
                                className="mt-6 text-slate font-mono text-sm tracking-widest"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                Loading...
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!loading && children}
        </>
    );
}
