'use client';

import Image from 'next/image';
import { TreePine, Handshake, Flame, Package } from 'lucide-react';
import bgImage from '../svg/abt-sec-scaled.jpg'; // adjust this path

export default function OurProcess() {
    return (
        <section className="relative text-[#2d1b0f] py-20 px-6 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Background"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-[#f4efe8]/10" />
            </div>


            {/* Content Layer */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Process</h2>
                <p className="max-w-2xl mx-auto text-base text-muted-foreground mb-16">
                    Every cup of Nansel coffee is the result of a careful, ethical journey — from fertile Rwandan soil to your doorstep. Here's how we craft our coffee with purpose.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                    <div className="flex flex-col items-start">
                        <TreePine className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Grown Organically</h3>
                        <p className="text-sm text-muted-foreground">
                            Our Arabica beans thrive in the highlands of Rwanda using natural farming methods that preserve biodiversity and soil health.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Handshake className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Harvested with Care</h3>
                        <p className="text-sm text-muted-foreground">
                            Beans are handpicked by local farmers we know and support, ensuring quality and fair trade at every step.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Flame className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Expertly Roasted</h3>
                        <p className="text-sm text-muted-foreground">
                            We roast in small batches to highlight each bean’s unique profile — balancing tradition and precision.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Package className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Delivered Fresh</h3>
                        <p className="text-sm text-muted-foreground">
                            Packed sustainably and shipped quickly, our coffee reaches you at peak freshness — ready to brew.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
