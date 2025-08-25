'use client';

import Image from 'next/image';
import Link from 'next/link';
import bgImage from '../components/svg/close-up-fresh-organic-arabica.png'; // update path if needed
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHighlight from '../components/contact-highlight';
import imagefour from '../components/svg/history-4.jpg';

export default function AboutPage() {
    return (
        <>
            <Header />
            <section className="relative text-[#2d1b0f] bg-[#fbf3e4] overflow-hidden">
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
                                Nansel grows from family coffee practices in Rwanda’s highlands and a commitment to responsible trade and community-first quality.
                                The founder is currently establishing operations in the UK — an early-stage endeavour focused on building transparent supply
                                links to origin, learning from partners, and growing carefully rather than making premature claims. If you'd like to follow the
                                journey or support verified projects, please get in touch.
                            </p>
                        </div>
                        <div className="h-64 bg-white/30 rounded-md shadow-inner flex items-center justify-center">
                            <div className="relative h-64 w-full rounded-md overflow-hidden">
                              <Image
                                src={imagefour}
                                alt="Family on a coffee plantation in Rwanda"
                                fill
                                priority
                                className="object-cover object-top"
                              />
                            </div>
                        </div>
                    </div>

                    {/* Routed/linked sections — real pages for truth and transparency */}
                    <div className="mt-16">
                      <h3 className="text-center text-xl font-semibold mb-6">Explore the story & work</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <Link href="/history" className="block rounded-lg p-6 bg-white shadow hover:shadow-md">
                          <h4 className="font-bold mb-2">History</h4>
                          <p className="text-sm text-[#3d2a1b]/80">A focused history page with origin context, memorial note and owner story.</p>
                        </Link>

                        <Link href="/impact" className="block rounded-lg p-6 bg-white shadow hover:shadow-md">
                          <h4 className="font-bold mb-2">Impact</h4>
                          <p className="text-sm text-[#3d2a1b]/80">Community projects, sustainable practices and how Nansel aims to make a difference.</p>
                        </Link>

                        <Link href="/get-involved" className="block rounded-lg p-6 bg-white shadow hover:shadow-md">
                          <h4 className="font-bold mb-2">Get involved</h4>
                          <p className="text-sm text-[#3d2a1b]/80">Ways to connect, support, submit verified stories or partner with the project.</p>
                        </Link>
                      </div>
                    </div>
                </div>
            </section>
            <ContactHighlight />
            <Footer />
        </>
    );
}
