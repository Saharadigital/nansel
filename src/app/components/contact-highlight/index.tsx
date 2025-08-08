'use client';

import { Logo } from '../svg/logo';

export default function ContactHighlight() {
    return (
        <section className="bg-[#4a2d1f] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Logo and Description */}
                <div className="mb-12">
                    <Logo />
                    <p className="max-w-2xl mx-auto text-sm leading-relaxed text-white/80 mt-4">
                        Rooted in Rwanda and crafted for the world, Nansel sources exceptional Arabica coffee with care and conscience — championing fair trade, sustainability, and peaceful progress in every cup.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/30 py-8">
                    <div className="flex flex-col items-center">
                        <div className="text-xl mb-2">📍</div>
                        <h3 className="text-sm font-semibold text-[#d4b05f]">Stores</h3>
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
                        <p className="text-sm mt-1">info@nanselimportandexport.co.uk</p>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-12">
                    <p className="text-lg font-medium mb-4">News as Fresh as Our Coffee</p>
                    <form className="flex items-center justify-center gap-2 max-w-sm mx-auto">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#d4b05f] text-black rounded-md hover:bg-[#c3a550] transition"
                        >
                            →
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
