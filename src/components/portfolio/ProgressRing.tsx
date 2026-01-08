'use client';

import { motion } from 'framer-motion';

export default function ProgressRing({ progress, color = '#3b82f6', size = 60 }: { progress: number, color?: string, size?: number }) {
    const strokeWidth = 4;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="relative flex items-center justify-center font-mono font-bold text-xs" style={{ width: size, height: size, color }}>
            <svg className="absolute inset-0 rotate-[-90deg]" width={size} height={size}>
                {/* Track */}
                <circle
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={center}
                    cy={center}
                />

                {/* Progress */}
                <motion.circle
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={center}
                    cy={center}
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    strokeLinecap="round"
                    viewport={{ once: true }}
                />
            </svg>
            <span>{progress}%</span>
        </div>
    );
}
