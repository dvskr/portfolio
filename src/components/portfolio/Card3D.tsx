'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent, useRef } from 'react';
import FloatingParticles from './FloatingParticles';

interface Card3DProps {
    children: React.ReactNode;
    className?: string;
    accentColor?: string;
}

export default function Card3D({ children, className = '', accentColor = '#3b82f6' }: Card3DProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth tilt effect
    const rotateX = useSpring(0, { damping: 20, stiffness: 100 });
    const rotateY = useSpring(0, { damping: 20, stiffness: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Spotlight calculation
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        // 3D Tilt calculation (max 8 degrees)
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;

        rotateX.set(yPct * -8);
        rotateY.set(xPct * 8);
    }

    function onMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
        mouseX.set(-1000);
        mouseY.set(-1000);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                rotateX,
                rotateY,
            }}
            className={`relative group rounded-3xl bg-navy-light border border-white/5 shadow-xl transition-shadow duration-300 ${className}`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            ${accentColor}25,
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Content Layer */}
            <div className="relative h-full w-full [transform:translateZ(1px)] overflow-hidden rounded-3xl">
                {/* Floating Particles Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <FloatingParticles color={accentColor} />
                </div>

                {children}
            </div>
        </motion.div>
    );
}
