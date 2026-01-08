'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

const jobs = [
    {
        company: 'Propper',
        role: 'Data Engineer',
        date: 'May 2023 - Present',
        points: [
            'Architected and maintained 100+ ETL pipelines using Airflow, AWS Glue, and Python, ensuring 99.9% data availability.',
            'Implemented real-time streaming architectures with Kafka and Spark structured streaming for operational dashboards.',
            'Reduced data processing latency by 40% through query optimization and schema refinement in Snowflake.',
            'Collaborated with product teams to define data models for new inventory management features.',
        ],
        tech: ['Python', 'AWS', 'Snowflake', 'Airflow'],
    },
    {
        company: 'Globus',
        role: 'Data Engineer',
        date: 'Jan 2021 - Dec 2022',
        points: [
            'Managed 1TB+ of daily telemetry data ingestion using Azure Event Hubs and Databricks Delta Lake.',
            'Developed HIPAA-compliant data masking and encryption standards for patient data analytics.',
            'Built automated data quality checks (Great Expectations) integrated into CI/CD pipelines.',
            'Migrated legacy on-prem SQL Server workloads to Azure Synapse Analytics.',
        ],
        tech: ['Python', 'Azure', 'Databricks', 'PySpark'],
    },
];

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    // Ref for the sliding indicator
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

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
        <section
            ref={sectionRef}
            id="experience"
            className="max-w-[1000px] mx-auto px-6 py-16 md:py-20"
        >
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                    <span className="text-cyan mr-2">02.</span> Where I&apos;ve Worked
                </h2>
                <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Tab List */}
                <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-navy-lighter min-w-[max-content] md:w-32" role="tablist">
                    {/* Active Tab Indicator */}
                    <motion.div
                        className="absolute bg-cyan hidden md:block w-[2px] left-[-0.5px] z-10 transition-all duration-300 ease-in-out"
                        initial={false}
                        animate={{
                            top: activeTab * 42,
                            height: 42
                        }}
                    />
                    <motion.div
                        className="absolute bg-cyan md:hidden h-[2px] bottom-0 z-10 transition-all duration-300 ease-in-out"
                        initial={false}
                        layoutId="activeTabMobile"
                        style={{
                            width: '100%',
                            // Simplified active state for mobile - standard bottom border logic done via class/layout usually better
                        }}
                    />

                    {jobs.map((job, index) => (
                        <button
                            key={index}
                            ref={el => { tabsRef.current[index] = el; }}
                            onClick={() => setActiveTab(index)}
                            className={clsx(
                                "px-5 py-3 text-sm font-mono text-left transition-all duration-300 hover:bg-navy-light hover:text-cyan focus:outline-none whitespace-nowrap md:border-l-2",
                                activeTab === index
                                    ? "text-cyan bg-navy-light/50 border-cyan md:border-transparent" // Border transparent on desktop to let motion div handle it
                                    : "text-slate border-transparent"
                            )}
                            role="tab"
                            aria-selected={activeTab === index}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[320px] w-full">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h3 className="text-xl font-bold text-white-off mb-1">
                                {jobs[activeTab].role}{' '}
                                <span className="text-cyan">@ {jobs[activeTab].company}</span>
                            </h3>
                            <p className="font-mono text-sm text-slate-light mb-6">
                                {jobs[activeTab].date}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {jobs[activeTab].points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate text-base">
                                        <span className="text-cyan mt-1.5 text-xs">▹</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan/80">
                                {jobs[activeTab].tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-cyan/10 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
