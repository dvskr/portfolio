'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
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
    const [mounted, setMounted] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        setMounted(true);
    }, []);

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

    // Mobile Menu Portal - renders directly to body, completely outside header
    const MobileMenuPortal = () => {
        if (!mounted || !isMobileMenuOpen) return null;

        return createPortal(
            <div
                className="fixed inset-0 z-[9999] flex flex-col justify-center items-center space-y-8 md:hidden"
                style={{
                    backgroundColor: '#112240',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'fixed',
                }}
            >
                {/* Close button inside the portal */}
                <button
                    className="absolute top-4 right-6 text-cyan z-[10000]"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X size={28} />
                </button>

                {navLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="font-mono text-xl text-white hover:text-cyan hover:tracking-widest transition-all cursor-pointer"
                    >
                        <span className="text-cyan mr-2">0{index + 1}.</span>
                        {link.name}
                    </a>
                ))}
                <a
                    href="/Resume_Sathish_DE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-cyan text-cyan font-mono text-lg rounded hover:bg-cyan-tint transition-colors"
                >
                    Resume
                </a>
            </div>,
            document.body
        );
    };

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 w-full z-50 transition-all duration-300',
                    !isMobileMenuOpen && scrollDirection === 'down' ? '-translate-y-full' : (isMobileMenuOpen ? '' : 'translate-y-0'),
                    isScrolled ? 'bg-navy/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                )}
            >
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-cyan font-mono text-xl font-bold z-50">

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
                            href="/Resume_Sathish_DE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-cyan text-cyan font-mono text-sm rounded hover:bg-cyan-tint transition-colors"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4 z-[101]">
                        <ThemeToggle />
                        <button
                            className="text-cyan"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                </nav>
            </header>

            {/* Mobile Menu rendered via Portal - completely outside header DOM */}
            <MobileMenuPortal />
        </>
    );
}
