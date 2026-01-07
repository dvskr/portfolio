'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial load or asset checking
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {loading && (
                    <motion.div
                        className="fixed inset-0 z-[100] grid place-items-center bg-navy"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Logo Hexagon Animation */}
                            <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className="w-24 h-24 fill-none stroke-cyan stroke-[5] stroke-linecap-round stroke-linejoin-round">
                                <motion.path
                                    d="M11 48 L22 28 L42 20 L62 28 L73 48 L62 68 L42 76 L22 68 Z" // Simplified shape
                                    transform="translate(0, 0)"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                <text x="30" y="55" fill="#64ffda" fontSize="24px" strokeWidth="0" fontFamily="monospace" fontWeight="bold">SK</text>
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!loading && children}
        </>
    );
}
