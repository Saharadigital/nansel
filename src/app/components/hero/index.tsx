import Image from 'next/image';
import bgImage from '../svg/close-up-fresh-organic-arabica.png';

export default function Hero() {
    return (
            <section className="relative w-full h-[600px]  flex items-center justify-center text-foreground px-6">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={bgImage}
                    alt="Coffee background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="relative  max-w-5xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#FFFFF0] drop-shadow-lg">
                    NANSEL is Navigating a Bright Future with Peace Coffee...
                </h1>

                <p className="mt-6 text-lg md:text-xl text-[#FFFFF0] drop-shadow-sm max-w-2xl mx-auto">
                    Ethical, Sustainable & Conflict-Free Coffee From Rwanda
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a
                        href="/contact"
                        className="bg-[#D4B05F] border-[#D4B05F] text-[#1A1A1A] px-6 py-3 rounded-md text-base font-semibold shadow transition hover:bg-[#B4984F]"
                    >
                        Get in Touch
                    </a>

                    <a
                        href="/about"
                        className="bg-transparent border-[#D4B05F] text-[#D4B05F] px-6 py-3 rounded-md text-base font-semibold transition hover:bg-[#D4B05F] hover:text-white"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
