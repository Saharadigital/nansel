'use client';

import Image from 'next/image';
import handpicked from '../svg/hand-picked-cherries.webp';
import sundried from '../svg/sun-dried-beans.png';
import coffeeroasting from '../svg/coffee-roasting.png';

export default function TheJourneyOfASingleBean() {
    return (
        <section className="bg-[#c1914d] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    The Journey of a Single Bean
                </h2>

                {/* Step 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-inner">
                        <Image
                            src={handpicked}
                            alt="Handpicking Red Coffee Cherries"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div>
                        <span className="text-xl font-bold text-white">1.</span>
                        <h3 className="text-2xl font-semibold mb-2 mt-2">Handpicked at Peak Ripeness</h3>
                        <p className="text-white/90 text-base">
                            Skilled farmers identify only the ripest red cherries for harvest — ensuring quality from the very first step.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <span className="text-xl font-bold text-white">2.</span>
                        <h3 className="text-2xl font-semibold mb-2 mt-2">Carefully Washed & Dried</h3>
                        <p className="text-white/90 text-base">
                            Beans are washed in fresh water, sun-dried on raised beds, and turned daily to prevent over-fermentation or spoilage.
                        </p>
                    </div>

                    <div className="order-1 md:order-2 relative h-64 rounded-lg overflow-hidden shadow-inner">
                        <Image
                            src={sundried}
                            alt="Drying Beds & Washing"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-84 rounded-lg overflow-hidden shadow-inner">
                        <Image
                            src={coffeeroasting}
                            alt="Coffee Roasting"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div>
                        <span className="text-xl font-bold text-white">3.</span>
                        <h3 className="text-2xl font-semibold mb-2 mt-2">Prepared for Roasting</h3>
                        <p className="text-white/90 text-base">
                            Once sorted and rested, the green beans are packed with care and shipped for roasting — ready to unlock their full flavor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
