'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            sectionRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-20 md:py-32 px-6 text-center">
            <div className="max-w-[600px] mx-auto">
                <p className="text-cyan font-mono mb-6">06. What&apos;s Next?</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white-off mb-8">Get In Touch</h2>
                <p className="text-slate text-lg mb-12 leading-relaxed">
                    I&apos;m currently looking for new opportunities as a Data Engineer or Full Stack Developer.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <Magnetic>
                    <a
                        href="mailto:hello@sathish.com"
                        className="inline-block px-10 py-5 border border-cyan text-cyan rounded hover:bg-cyan-tint transition-all font-mono text-sm data-[cursor=pointer]"
                        data-cursor="pointer"
                    >
                        Say Hello
                    </a>
                </Magnetic>




            </div>
        </section>
    );
}
