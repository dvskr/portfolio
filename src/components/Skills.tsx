'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechMarquee from './TechMarquee';

const skills = {
    "Languages": ["Python", "SQL", "TypeScript", "Scala", "Bash"],
    "Data Engineering": ["Apache Spark", "Airflow", "Kafka", "dbt", "Snowflake", "Databricks"],
    "Cloud & DevOps": ["AWS (Glue, Lambda)", "Azure (Synapse, ADF)", "Docker", "Terraform", "CI/CD"],
    "Web Development": ["Next.js", "React", "Node.js", "Tailwind CSS", "Post PostgreSQL"]
};

export default function Skills() {
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
        <section ref={sectionRef} id="skills" className="py-16 md:py-20 bg-navy-light/30 overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                    <span className="text-cyan mr-2">03.</span> Technical Skills
                </h2>
            </div>

            {/* Animated Marquee */}
            <div className="mb-20">

                <TechMarquee />
            </div>

            <div className="max-w-[800px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-10">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-bold text-white-off">{category}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-4 py-2 bg-navy-light text-slate-light font-mono text-sm rounded hover:text-cyan hover:bg-navy-lighter transition-all cursor-default border border-transparent hover:border-cyan/30"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
