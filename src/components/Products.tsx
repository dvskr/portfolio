'use client';

import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from './ThreeDCard';

const products = [
    {
        name: 'PMHNP Hiring',
        description: 'Job board for Psychiatric NPs',
        status: 'Live',
        statusColor: 'bg-green-500',
        textColor: 'text-green-400',
        link: 'https://pmhnphiring.com',
        color: '#112240',
        gradient: 'from-[#0f172a] to-[#112240]',
    },
    {
        name: 'Gym Tracker',
        description: 'AI-powered workout application',
        status: 'Soon',
        statusColor: 'bg-yellow-500',
        textColor: 'text-yellow-400',
        link: '#',
        color: '#1d3557',
        gradient: 'from-[#1e1b4b] to-[#1d3557]',
    },
    {
        name: 'FreelancerShield',
        description: 'Business management for freelancers',
        status: 'Building',
        statusColor: 'bg-blue-500',
        textColor: 'text-blue-400',
        link: '#',
        color: '#0a192f',
        gradient: 'from-[#020617] to-[#0a192f]',
    },
];

export default function Products() {
    return (
        <section id="products" className="py-20 px-6 relative bg-navy">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                        <span className="text-cyan mr-2">05.</span> What I&apos;m Building
                    </h2>
                    <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="h-full">
                            <CardContainer className="inter-var w-full h-full">
                                <CardBody className="bg-navy-light relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-navy-lighter">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-slate-light dark:text-white"
                                    >
                                        {product.name}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-slate text-sm max-w-sm mt-2 dark:text-neutral-300 font-mono"
                                    >
                                        {product.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <div
                                            className={`w-full aspect-video rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center group-hover/card:shadow-xl transition-shadow`}
                                        >
                                            {/* Placeholder visual */}
                                            <div className="text-white-off/20 font-mono text-4xl font-bold">
                                                {product.name.charAt(0)}
                                            </div>
                                        </div>
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-8">
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-cyan font-mono hover:bg-navy-lighter/30 transition-colors"
                                        >
                                            View Project →
                                        </CardItem>

                                        <CardItem
                                            translateZ={40}
                                            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold ${product.textColor} bg-navy-dark border border-white/5`}
                                        >
                                            {product.status}
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
