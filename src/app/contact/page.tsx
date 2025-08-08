import ContactHighlight from '../components/contact-highlight';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import contactBg from '../components/svg/hero_c_and_c.webp';

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
    <div className="bg-[#fbf3e4] p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border border-foreground bg-white p-3 shadow-sm focus:ring-primary focus:border-primary"
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-foreground bg-white p-3 shadow-sm focus:ring-primary focus:border-primary"
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full rounded-md border border-foreground bg-white p-3 shadow-sm focus:ring-primary focus:border-primary"
                    required
                ></textarea>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-black rounded-md hover:bg-primary/90 transition font-semibold"
                >
                    Let’s Talk Coffee
                </button>
            </div>
        </form>
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
