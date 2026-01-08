'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

const projects = [
    {
        title: 'F1 Racing Analytics',
        description: 'Enterprise Lakehouse on Azure for Formula 1 telemetry data. Built scalable ETL pipelines with bronze-silver-gold architecture. Processed real-time race data for predictive pit-stop strategies.',
        tech: ['Azure', 'Databricks', 'Delta Lake', 'PySpark', 'Power BI'],
        github: 'https://github.com/dvskr/Databricks_Project_On_Formula1',
        link: 'https://github.com/dvskr/Databricks_Project_On_Formula1',
        imageColor: 'bg-[#112240]', // Placeholder
    },
    {
        title: 'NYC Taxi Real-Time Ingestion',
        description: 'Real-time data ingestion pipeline processing millions of taxi trip records. Utilized Azure Synapse for warehousing and Cosmos DB for high-throughput serving layer.',
        tech: ['Azure Synapse', 'Cosmos DB', 'Azure Functions', 'Power BI'],
        github: 'https://github.com/dvskr/Synapse_Analytics_Project_On_NYC_TAXI',
        link: 'https://github.com/dvskr/Synapse_Analytics_Project_On_NYC_TAXI',
        imageColor: 'bg-[#1d3557]', // Placeholder
    },

];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title Animation
        gsap.fromTo(
            titleRef.current,
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

        // Projects Animation
        const projectsCtx = gsap.context(() => {
            gsap.utils.toArray('.project-card').forEach((card: any, i) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                        }
                    }
                );
            });
        }, sectionRef);

        return () => projectsCtx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="py-12 md:py-16 px-6">
            <div className="max-w-[1200px] mx-auto">

                {/* Section Header */}
                <div ref={titleRef} className="flex items-center gap-4 mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                        <span className="text-cyan mr-2">04.</span> Data Engineering Projects
                    </h2>
                    <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "project-card relative grid gap-6 md:gap-0 grid-cols-12 items-center",
                            )}
                        >

                            {/* Content Area - Expanded to fill void */}
                            <div className={clsx(
                                "col-span-12 flex flex-col justify-center z-10",
                                index % 2 === 0 ? "md:text-right md:items-end text-left items-start" : "text-left items-start"
                            )}>
                                <p className="font-mono text-cyan text-sm mb-2">Featured Project</p>
                                <h3 className="text-white-off font-bold text-2xl md:text-3xl mb-6 hover:text-cyan transition-colors cursor-pointer flex items-center gap-4">
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</Link>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                                        <Github size={24} />
                                    </a>
                                </h3>

                                {/* Description Card */}
                                <div className={clsx(
                                    "bg-navy-light p-6 rounded shadow-xl text-slate-light text-sm md:text-base leading-relaxed mb-6 border border-transparent md:border-navy-lighter w-full md:w-3/4",
                                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto" // Push description to the active side
                                )}>
                                    <p>{project.description}</p>
                                </div>

                                {/* Tech Stack */}
                                <ul className={clsx(
                                    "flex flex-wrap gap-4 font-mono text-xs md:text-sm text-slate-light",
                                    index % 2 === 0 ? "md:justify-end justify-start" : "justify-start"
                                )}>
                                    {project.tech.map(t => <li key={t}>{t}</li>)}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
