import ContactHighlight from '../components/contact-highlight';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import contactBg from '../components/svg/hero_c_and_c.webp';
import ContactForm from '../components/contact';

export default function Contact() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <section className="relative h-[600px] flex items-center justify-center px-6">
                    <div className="absolute inset-0 w-full h-full z-0">
                        <Image
                            src={contactBg}
                            alt="Contact background"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
                        <p className="text-lg text-white mt-4">
                            Whether it’s a question, a partnership idea, or just to say hello — we’d love to hear from you.
                        </p>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="bg-[#4A2D1F] p-8 rounded-lg shadow-lg">
                        <ContactForm />
                    </div>

                    <div className="flex flex-col space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">Let’s Start a Conversation</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Whether you’re curious about our ethically sourced coffee, interested in partnering with Nansel,
                            or simply want to share your love for a perfect brew, we’re here to listen.
                        </p>
                        <p className="text-foreground/80 leading-relaxed">
                            We believe that every connection can spark new ideas — from the coffee farm to your cup.
                            Tell us your thoughts, ask questions, or explore opportunities to work together.
                        </p>
                        <ul className="list-disc list-inside text-foreground/80">
                            <li>Partnership and wholesale inquiries</li>
                            <li>Press and media requests</li>
                            <li>Event and collaboration ideas</li>
                            <li>Customer support</li>
                        </ul>
                    </div>
                </section>

            </main>
            <ContactHighlight />
            <Footer />
        </>
    );
}
