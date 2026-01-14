'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom SVGs
const XIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const ProductHuntIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M10 8h2a2 2 0 1 1 0 4h-2v4"></path>
    </svg>
);

const IndieHackersIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4v16h3V13h4v7h3V4h-3v6h-4V4H7z" />
    </svg>
);

export default function SocialSidebars() {
    return (
        <>
            {/* Desktop: Social Icons (Bottom Right) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="fixed bottom-0 right-6 md:right-10 z-[40] hidden md:flex flex-col items-center gap-6 text-slate-light"
            >
                <div className="flex flex-col gap-6">
                    <a href="https://github.com/dvskr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan hover:-translate-y-1 transition-all duration-300">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/dvskr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan hover:-translate-y-1 transition-all duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com/Sathish_Daggula" target="_blank" rel="noopener noreferrer" className="hover:text-cyan hover:-translate-y-1 transition-all duration-300">
                        <XIcon size={18} />
                    </a>
                    <a href="https://www.producthunt.com/@sathish_1729" target="_blank" rel="noopener noreferrer" className="hover:text-cyan hover:-translate-y-1 transition-all duration-300">
                        <ProductHuntIcon size={20} />
                    </a>
                    <a href="https://www.indiehackers.com/Sathish_Daggula" target="_blank" rel="noopener noreferrer" className="hover:text-cyan hover:-translate-y-1 transition-all duration-300">
                        <IndieHackersIcon size={20} />
                    </a>
                    <a href="mailto:dvskr.333@gmail.com" className="hover:text-cyan hover:-translate-y-1 transition-all duration-300">
                        <Mail size={20} />
                    </a>
                </div>
                <div className="w-[1px] h-24 bg-slate-light/50"></div>
            </motion.div>

            {/* Mobile: Horizontal Social Bar (Fixed Bottom) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="fixed bottom-0 left-0 right-0 z-[40] md:hidden bg-navy/90 backdrop-blur-sm border-t border-white/10 py-3 px-4"
            >
                <div className="flex justify-center items-center gap-6 text-slate-light">
                    <a href="https://github.com/dvskr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                        <Github size={22} />
                    </a>
                    <a href="https://linkedin.com/in/dvskr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                        <Linkedin size={22} />
                    </a>
                    <a href="https://twitter.com/Sathish_Daggula" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                        <XIcon size={20} />
                    </a>
                    <a href="https://www.producthunt.com/@sathish_1729" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                        <ProductHuntIcon size={22} />
                    </a>
                    <a href="https://www.indiehackers.com/Sathish_Daggula" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                        <IndieHackersIcon size={22} />
                    </a>
                    <a href="mailto:dvskr.333@gmail.com" className="hover:text-cyan transition-colors">
                        <Mail size={22} />
                    </a>
                </div>
            </motion.div>
        </>
    );
}
