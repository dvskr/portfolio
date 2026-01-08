'use client';

import BentoGrid from './portfolio/BentoGrid';

export default function Products() {
    return (
        <section id="products" className="py-10 px-6 relative bg-navy">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-white-off">
                        <span className="text-cyan mr-2">05.</span> What I&apos;m Building
                    </h2>
                    <div className="h-[1px] bg-navy-lighter flex-grow max-w-[300px]"></div>
                </div>

                <BentoGrid />
            </div>
        </section>
    );
}
