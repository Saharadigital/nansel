'use client';

import Image from 'next/image';
import bgImage from '../components/svg/close-up-fresh-organic-arabica.png'; // update path if needed
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHighlight from '../components/contact-highlight';

export default function AboutPage() {
    return (
        <>
        <Header />
     
        <section className="relative text-[#2d1b0f] bg-[#fbf3e4] overflow-hidden">
            {/* Background Image (optional) */}
            <div className="absolute inset-0 z-0 opacity-10">
                <Image
                    src={bgImage}
                    alt="Background illustration"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Page content */}
            <div className="relative z-10 max-w-6xl mx-auto py-20 px-6">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Nansel</h1>
                    <p className="max-w-2xl mx-auto text-base text-[#3d2a1b]/80">
                        Rooted in Rwanda and brewed for the world — Nansel brings you premium Arabica coffee crafted with purpose, peace, and passion.
                    </p>
                </div>

                {/* Mission / Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                        <p className="text-sm text-[#3d2a1b]/80">
                            We champion eco-friendly farming, ethical sourcing, and regenerative agriculture for a better tomorrow.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
                        <p className="text-sm text-[#3d2a1b]/80">
                            Our farmers are partners. We ensure they earn fairly — empowering communities at every step.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Peace & Progress</h3>
                        <p className="text-sm text-[#3d2a1b]/80">
                            Nansel stands for growth without conflict — a better cup built on harmony and shared success.
                        </p>
                    </div>
                </div>

                {/* Origin Story or People */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Where It All Began</h2>
                        <p className="text-base text-[#3d2a1b]/80 leading-relaxed">
                            Founded in the heart of Rwanda’s coffee highlands, Nansel started as a vision for responsible trade and community-led excellence. Today, our beans travel the globe, but our roots remain firmly planted in Rwandan soil.
                        </p>
                    </div>
                    <div className="h-64 bg-white/30 rounded-md shadow-inner flex items-center justify-center">
                        <span className="text-[#3d2a1b]/40">Image Placeholder (founders or origin map)</span>
                    </div>
                </div>
            </div>
        </section>
        <ContactHighlight />
        <Footer />
           </>
    );
}
