'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import clsx from 'clsx';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring for the circle
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const circleX = useSpring(mouseX, springConfig);
    const circleY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveMouse);
        return () => {
            window.removeEventListener('mousemove', moveMouse);
        };
    }, [mouseX, mouseY]);

    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('data-cursor') === 'pointer'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Ring */}
            <motion.div
                className={clsx(
                    "fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9998] transition-transform duration-200 mix-blend-difference",
                    isHovered ? "scale-[2.5] bg-accent/10 border-transparent" : "scale-100"
                )}
                style={{
                    x: circleX,
                    y: circleY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
}
