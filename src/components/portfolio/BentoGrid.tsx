'use client';

import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card3D from './Card3D';
import AnimatedCounter from './AnimatedCounter';
import ProgressRing from './ProgressRing';
import MagneticButton from './MagneticButton';
import LiveBadge from './LiveBadge';

const XIcon = ({ className }: { className?: string }) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
);

// --- DATA ---
const products = {
    pmhnp: {
        name: "PMHNP Hiring",
        emoji: "🧠",
        tagline: "Job board for Psychiatric Mental Health NPs",
        status: "live",
        hook: "The job board <span class='text-cyan bg-cyan/10 px-1 rounded'>Indeed should have built</span> for psychiatric nurse practitioners.",
        features: ["✓ Only PMHNP roles", "✓ Salary transparency", "✓ Updated daily", "✓ Remote filter"],
        stats: { jobs: "5k+", companies: "1k+" },
        userCount: 70,
        cta: "View Project",
        ctaLink: "https://pmhnphiring.com",
        accentColor: "#3b82f6",
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    gym: {
        name: "Gym Tracker",
        emoji: "💪",
        tagline: "AI-powered workout tracking",
        status: "soon",
        launchDate: "Coming Soon",
        hook: "Your Notes app <span class='text-emerald-400 bg-emerald-400/10 px-1 rounded'>doesn't know</span> progressive overload.",
        progress: 75,
        progressLabel: "Beta coming soon",
        cta: "Join Waitlist",
        ctaLink: "#waitlist",
        accentColor: "#10b981",
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    freelancer: {
        name: "FreelancerShield",
        emoji: "🛡️",
        tagline: "68% of freelancers get stiffed. We're fixing that.",
        status: "building",
        hook: "That client who <span class='text-amber-400 bg-amber-400/10 px-1 rounded'>ghosted you?</span> It was preventable.",
        progress: 40,
        cta: "Follow",
        ctaLink: "#follow",
        accentColor: "#f59e0b",
        socials: { twitter: "#", linkedin: "#", github: "#" }
    }
};

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }
    })
};

export default function BentoGrid() {
    return (
        <div className="max-w-[1200px] mx-auto px-6 font-sans text-slate">


            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* 1. PMHNP Hiring (Large) */}
                <motion.div custom={0} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 lg:row-span-2">
                    <Card3D className="h-full" accentColor={products.pmhnp.accentColor}>
                        <div className="h-full p-4 sm:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl sm:text-4xl shadow-sm bg-navy rounded-xl p-2 border border-white/10">{products.pmhnp.emoji}</span>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white-off">{products.pmhnp.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <LiveBadge status="live" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-green-400">Live Product</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fake User Avatars - Hidden on mobile */}
                                    <div className="hidden sm:flex -space-x-2">
                                        {['😊', '🙂', '😄', '🤩'].map((emoji, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-navy border-2 border-navy-light flex items-center justify-center text-xs">{emoji}</div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full bg-navy-light text-white-off border-2 border-navy-light flex items-center justify-center text-[10px] font-bold">+{products.pmhnp.userCount}</div>
                                    </div>
                                </div>

                                <p className="text-lg sm:text-xl text-slate-light leading-relaxed mb-4 sm:mb-6" dangerouslySetInnerHTML={{ __html: products.pmhnp.hook }}></p>

                                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-8">
                                    {products.pmhnp.features.map(f => (
                                        <span key={f} className="text-sm font-medium text-slate bg-navy px-3 py-1.5 rounded-lg border border-white/5">{f}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-white/5 pt-6">
                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-3xl font-bold text-white-off tracking-tight">{products.pmhnp.stats.jobs}</p>
                                        <p className="text-xs font-bold text-slate uppercase tracking-wider">Jobs Posted</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white-off tracking-tight">{products.pmhnp.stats.companies}</p>
                                        <p className="text-xs font-bold text-slate uppercase tracking-wider">Companies</p>
                                    </div>
                                </div>
                                <MagneticButton href={products.pmhnp.ctaLink} className="bg-cyan text-navy font-bold hover:bg-cyan-tint w-full sm:w-auto justify-center">
                                    {products.pmhnp.cta}
                                </MagneticButton>
                            </div>
                        </div>
                    </Card3D>
                </motion.div>

                {/* 2. Gym Tracker (Medium) */}
                <motion.div custom={1} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 lg:row-span-2">
                    <Card3D className="h-full" accentColor={products.gym.accentColor}>
                        <div className="h-full p-4 sm:p-8 flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 sm:mb-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl bg-emerald-500/10 rounded-xl p-2">{products.gym.emoji}</span>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white-off">{products.gym.name}</h3>
                                        <p className="text-sm font-medium text-emerald-400 bg-emerald-400/10 inline-block px-2 py-0.5 rounded w-fit mt-1">Launch: {products.gym.launchDate}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center sm:justify-end">
                                    <ProgressRing progress={products.gym.progress} color={products.gym.accentColor} />
                                </div>
                            </div>

                            <ul className="space-y-2 mb-auto ml-1">
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">⚡</span> 2-second set logging</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">🧠</span> AI coaching built-in</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">🏋️</span> 400+ exercises with GIFs</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">📊</span> Progress charts & PRs</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">📱</span> iOS + Android</li>
                            </ul>
                        </div>
                    </Card3D>
                </motion.div>

                {/* 3. Stats Card (Small) */}
                <motion.div custom={2} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
                    <Card3D className="h-full bg-navy !border-white/5" accentColor="#6366f1">
                        <div className="h-full p-6 flex flex-col justify-center gap-4 text-white-off">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-slate text-sm">Products</span>
                                <span className="font-bold text-xl">3</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-slate text-sm">Live</span>
                                <span className="font-bold text-xl text-green-400">1</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate text-sm">Building</span>
                                <span className="font-bold text-xl text-amber-400">2</span>
                            </div>
                        </div>
                    </Card3D>
                </motion.div>

                {/* 4. FreelancerShield (Wide) */}
                <motion.div custom={3} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
                    <Card3D className="h-full" accentColor={products.freelancer.accentColor}>
                        <div className="h-full p-6 flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
                            <div className="flex sm:block justify-center">
                                <ProgressRing progress={products.freelancer.progress} color={products.freelancer.accentColor} size={50} />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl font-bold text-white-off flex items-center justify-center sm:justify-start gap-2">
                                    {products.freelancer.name}
                                    <span className="text-lg">{products.freelancer.emoji}</span>
                                </h3>
                                <p className="text-xs md:text-sm text-amber-400 font-medium">{products.freelancer.tagline}</p>
                                <p className="text-xs text-slate-light mt-1">🔒 Contracts • 💰 Payment protection • ⚖️ Disputes</p>
                                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-2">Coming Soon</p>
                            </div>
                            <div className="hidden sm:flex ml-auto flex-col items-end gap-2">
                                <div className="flex gap-2 text-slate-light">
                                    {/* Social icons commented out */}
                                </div>
                            </div>
                        </div>
                    </Card3D>
                </motion.div>

                {/* 5. Tech Stack */}
                <motion.div custom={4} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-4">
                    <Card3D className="h-full" accentColor="#8b5cf6">
                        <div className="h-full p-6 flex flex-col justify-center">
                            <p className="text-xs font-bold text-slate uppercase tracking-widest mb-4">Built With</p>
                            <div className="flex flex-wrap gap-2">
                                {['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'AI'].map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-navy border border-white/5 rounded text-xs font-medium text-slate-light">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card3D>
                </motion.div>



            </div>
        </div>
    );
}
