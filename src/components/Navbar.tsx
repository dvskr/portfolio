'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useLenis } from 'lenis/react';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const scrollDirection = useScrollDirection();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        // Mobile menu close
        setIsMobileMenuOpen(false);

        if (lenis) {
            lenis.scrollTo(href);
        } else {
            // Fallback if lenis not ready
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={clsx(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0',
                isScrolled ? 'bg-navy/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
            )}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-cyan font-mono text-xl font-bold z-50">
                    &lt;dvskr /&gt;
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="group font-mono text-sm text-white-off hover:text-cyan transition-colors cursor-pointer"
                        >
                            <span className="text-cyan mr-1">0{index + 1}.</span>
                            <span className="relative">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan transition-all group-hover:w-full"></span>
                            </span>
                        </a>
                    ))}
                    <ThemeToggle />
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-cyan text-cyan font-mono text-sm rounded hover:bg-cyan-tint transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <ThemeToggle />
                    <button
                        className="text-cyan"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="fixed inset-0 bg-navy-light flex flex-col justify-center items-center space-y-8 md:hidden"
                        >
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="font-mono text-xl text-white-off hover:text-cyan hover:tracking-widest transition-all cursor-pointer"
                                >
                                    <span className="text-cyan mr-2">0{index + 1}.</span>
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf"
                                className="px-6 py-3 border border-cyan text-cyan font-mono text-lg rounded hover:bg-cyan-tint transition-colors"
                            >
                                Resume
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
