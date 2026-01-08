'use client';

import { useEffect, useState } from 'react';

interface FloatingParticlesProps {
    color?: string;
}

export default function FloatingParticles({ color = '#3b82f6' }: FloatingParticlesProps) {
    // Generate random particles
    // Only verify/hydrate on client to avoid hydration mismatch with random values
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const particles = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full opacity-20"
                    style={{
                        backgroundColor: color,
                        width: p.size,
                        height: p.size,
                        left: p.left,
                        top: p.top,
                        animation: `float ${p.duration}s infinite linear ${p.delay}s`,
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); }
                    33% { transform: translateY(-20px) translateX(10px); }
                    66% { transform: translateY(10px) translateX(-20px); }
                    100% { transform: translateY(0) translateX(0); }
                }
            `}</style>
        </div>
    );
}
