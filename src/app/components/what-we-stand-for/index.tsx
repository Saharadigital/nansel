'use client';

import { Coffee, Handshake, ShieldCheck, Leaf, Building2, Globe } from 'lucide-react';

export default function WhatWeStandFor() {
    return (
        <section className="bg-background text-foreground py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">What We Stand For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                    <div className="flex flex-col items-start">
                        <Coffee className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">High-Quality Arabica Coffee</h3>
                        <p className="text-muted-foreground">
                            Premium Arabica beans handpicked from Rwanda and East Africa’s most renowned highland farms.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Handshake className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Fair-Trade Practices</h3>
                        <p className="text-muted-foreground">
                            Empowering farmers through fair trade — ensuring fair pay, dignity, and ethical working conditions.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <ShieldCheck className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Conflict-Free Sourcing</h3>
                        <p className="text-muted-foreground">
                            Ethically sourced from conflict-free regions, supporting peace and long-term stability.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Leaf className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Sustainable Agriculture</h3>
                        <p className="text-muted-foreground">
                            We promote organic farming methods and protect local biodiversity.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Building2 className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community Development</h3>
                        <p className="text-muted-foreground">
                            Driving real change with every purchase — funding schools, clinics, and vital infrastructure in local communities.
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Globe className="w-8 h-8 text-[#d4b05f] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Environmental Responsibility</h3>
                        <p className="text-muted-foreground">
                            Committed to climate-conscious operations — from eco-friendly packaging to low-impact logistics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
