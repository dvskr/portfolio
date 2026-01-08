'use client';

import { motion } from 'framer-motion';
import {
    SiPython, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
    SiApachespark, SiApachekafka,
    SiSnowflake, SiDocker, SiPostgresql, SiDatabricks,
    SiSupabase, SiPrisma, SiGithub, SiVercel
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { IconType } from 'react-icons';

const row1 = [
    { name: 'Python', color: '#3776AB', Icon: SiPython },
    { name: 'AWS', color: '#FF9900', Icon: FaAws },
    { name: 'Azure', color: '#0078D4', Icon: VscAzure },
    { name: 'Spark', color: '#E25A1C', Icon: SiApachespark },
    { name: 'Snowflake', color: '#29B5E8', Icon: SiSnowflake },
    { name: 'Kafka', color: '#231F20', Icon: SiApachekafka },
    { name: 'Databricks', color: '#FF3621', Icon: SiDatabricks },
    { name: 'Docker', color: '#2496ED', Icon: SiDocker },
];

const row2 = [
    { name: 'TypeScript', color: '#3178C6', Icon: SiTypescript },
    { name: 'React', color: '#61DAFB', Icon: SiReact },
    { name: 'Next.js', color: '#FFFFFF', Icon: SiNextdotjs },
    { name: 'Tailwind', color: '#06B6D4', Icon: SiTailwindcss },
    { name: 'Supabase', color: '#3ECF8E', Icon: SiSupabase },
    { name: 'Prisma', color: '#2D3748', Icon: SiPrisma },
    { name: 'GitHub', color: '#FFFFFF', Icon: SiGithub },
    { name: 'Vercel', color: '#FFFFFF', Icon: SiVercel },
];

export default function TechMarquee() {
    return (
        <div className="w-full overflow-hidden py-12 relative flex flex-col gap-6">
            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none"></div>

            {/* Row 1 - Moving Left */}
            <MarqueeRow items={row1} direction="left" speed={15} />

            {/* Row 2 - Moving Right */}
            <MarqueeRow items={row2} direction="right" speed={18} />
        </div>
    );
}

interface TechItem {
    name: string;
    color: string;
    Icon: IconType;
}

const MarqueeRow = ({ items, direction, speed }: { items: TechItem[], direction: 'left' | 'right', speed: number }) => (
    <div className="flex w-full overflow-hidden">
        <motion.div
            className="flex gap-6 md:gap-10"
            initial={{ x: direction === 'left' ? 0 : '-50%' }}
            animate={{ x: direction === 'left' ? '-50%' : 0 }}
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity,
            }}
        >
            {/* Duplicate items for seamless loop */}
            {[...items, ...items].map((tech, index) => (
                <div
                    key={`${tech.name}-${index}`}
                    className="group relative flex flex-col items-center justify-center gap-2 p-4 md:p-5 min-w-[100px] md:min-w-[120px] bg-navy-light/30 border border-navy-lighter/20 rounded-xl hover:bg-navy-light/60 hover:border-cyan/40 transition-all duration-300 cursor-default"
                >
                    {/* Icon with subtle animation */}
                    <div
                        className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    >
                        <tech.Icon
                            size={40}
                            className={`transition-all duration-300 ${tech.color === '#FFFFFF' ? 'text-navy dark:text-white' : ''}`}
                            style={{ color: tech.color === '#FFFFFF' ? 'currentColor' : tech.color }}
                        />

                        {/* Animated glow ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
                            style={{
                                background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`,
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    {/* Label */}
                    <span className="font-mono text-xs md:text-sm text-slate-light group-hover:text-cyan transition-colors whitespace-nowrap">
                        {tech.name}
                    </span>
                </div>
            ))}
        </motion.div>
    </div>
);
