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
        launchDate: "Feb 2026",
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
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
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
                        <div className="h-full p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl shadow-sm bg-navy rounded-xl p-2 border border-white/10">{products.pmhnp.emoji}</span>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-2xl font-bold text-white-off">{products.pmhnp.name}</h3>
                                                <div className="flex gap-2 text-slate-light">
                                                    <a href={products.pmhnp.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><Github size={16} /></a>
                                                    <a href={products.pmhnp.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><XIcon className="w-4 h-4" /></a>
                                                    <a href={products.pmhnp.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><Linkedin size={16} /></a>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 mt-1">
                                                <LiveBadge status="live" />
                                                <span className="text-xs font-bold uppercase tracking-wider text-green-400">Live Product</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Fake User Avatars */}
                                    <div className="flex -space-x-2">
                                        {['😊', '🙂', '😄', '🤩'].map((emoji, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-navy border-2 border-navy-light flex items-center justify-center text-xs">{emoji}</div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full bg-navy-light text-white-off border-2 border-navy-light flex items-center justify-center text-[10px] font-bold">+{products.pmhnp.userCount}</div>
                                    </div>
                                </div>

                                <p className="text-xl text-slate-light leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: products.pmhnp.hook }}></p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {products.pmhnp.features.map(f => (
                                        <span key={f} className="text-sm font-medium text-slate bg-navy px-3 py-1.5 rounded-lg border border-white/5">{f}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-end justify-between border-t border-white/5 pt-6">
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
                                <MagneticButton href={products.pmhnp.ctaLink} className="bg-cyan text-navy font-bold hover:bg-cyan-tint">
                                    {products.pmhnp.cta}
                                </MagneticButton>
                            </div>
                        </div>
                    </Card3D>
                </motion.div>

                {/* 2. Gym Tracker (Medium) */}
                <motion.div custom={1} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 lg:row-span-2">
                    <Card3D className="h-full" accentColor={products.gym.accentColor}>
                        <div className="h-full p-8 flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl bg-emerald-500/10 rounded-xl p-2">{products.gym.emoji}</span>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-bold text-white-off">{products.gym.name}</h3>
                                            <div className="flex gap-2 text-slate-light">
                                                <a href={products.gym.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><Github size={16} /></a>
                                                <a href={products.gym.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><XIcon className="w-4 h-4" /></a>
                                                <a href={products.gym.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><Linkedin size={16} /></a>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-emerald-400 bg-emerald-400/10 inline-block px-2 py-0.5 rounded w-fit mt-1">Launch: {products.gym.launchDate}</p>
                                    </div>
                                </div>
                                <ProgressRing progress={products.gym.progress} color={products.gym.accentColor} />
                            </div>

                            <ul className="space-y-2 mb-auto ml-1">
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">⚡</span> 2-second set logging</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">🧠</span> AI coaching built-in</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">🏋️</span> 400+ exercises with GIFs</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">📊</span> Progress charts & PRs</li>
                                <li className="flex items-center gap-2 text-slate-light text-sm"><span className="text-emerald-400">📱</span> iOS + Android</li>
                            </ul>

                            <MagneticButton href={products.gym.ctaLink} className="bg-emerald-600 text-white w-full justify-center mt-6 shadow-lg shadow-emerald-900/20 hover:bg-emerald-500">
                                {products.gym.cta}
                            </MagneticButton>
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
                        <div className="h-full p-6 flex items-center gap-4 relative z-10">
                            <ProgressRing progress={products.freelancer.progress} color={products.freelancer.accentColor} size={50} />
                            <div>
                                <h3 className="text-xl font-bold text-white-off flex items-center gap-2">
                                    {products.freelancer.name}
                                    <span className="text-lg">{products.freelancer.emoji}</span>
                                </h3>
                                <p className="text-xs md:text-sm text-amber-400 font-medium">{products.freelancer.tagline}</p>
                                <p className="text-xs text-slate-light mt-1">🔒 Contracts • 💰 Payment protection • ⚖️ Disputes</p>
                            </div>
                            <div className="ml-auto flex flex-col items-end gap-2">
                                <div className="flex gap-2 text-slate-light">
                                    <a href={products.freelancer.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><Github size={14} /></a>
                                    <a href={products.freelancer.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><XIcon className="w-3.5 h-3.5" /></a>
                                    <a href={products.freelancer.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors"><Linkedin size={14} /></a>
                                </div>
                                <a href="#" className="text-slate hover:text-amber-400 transition-colors">
                                    <ArrowUpRight size={20} />
                                </a>
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
