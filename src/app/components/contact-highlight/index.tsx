'use client';

import { Logo, Logo2 } from '../svg/logo';

export default function ContactHighlight() {
    return (
        <section className="bg-[#4a2d1f] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12 flex flex-col items-center text-center">
                    <Logo2 />
                    <p className="max-w-2xl mx-auto text-sm leading-relaxed text-white/80 mt-4">
                        Rooted in Rwanda and crafted for the world, Nansel sources exceptional Arabica coffee with care and conscience — championing fair trade, sustainability, and peaceful progress in every cup.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/30 py-8">
                    <div className="flex flex-col items-center">
                        <div className="text-xl mb-2">📍</div>
                        <h3 className="text-sm font-semibold text-[#d4b05f]">Location</h3>
                        <p className="text-sm mt-1">Leeds, West Yorkshire, UK</p>
                    </div>
                    <div className="flex flex-col items-center border-l border-r border-white/30 md:border-none">
                        <div className="text-xl mb-2">📞</div>
                        <h3 className="text-sm font-semibold text-[#d4b05f]">Phone No</h3>
                        <p className="text-sm mt-1">+447459105789</p>
                        <p className="text-sm">+250798287196</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-xl mb-2">✉️</div>
                        <h3 className="text-sm font-semibold text-[#d4b05f]">Email Address</h3>
                        <p className="text-sm mt-1">info@nansel.co.uk</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
