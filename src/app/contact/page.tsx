import ContactHighlight from '../components/contact-highlight';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Contact() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <section className="relative h-[400px] flex items-center justify-center text-foreground px-6 bg-cover bg-center" style={{ backgroundImage: `url('/images/contact-bg.jpg')` }}>
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
                        <p className="text-lg text-white mt-4">We’d love to hear from you.</p>
                    </div>
                </section>
                <section className="max-w-3xl mx-auto px-6 py-12">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border border-border bg-background p-2 shadow-sm focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border border-border bg-background p-2 shadow-sm focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="mt-1 block w-full rounded-md border border-border bg-background p-2 shadow-sm focus:ring-primary focus:border-primary"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>
            </main>
            <ContactHighlight />
            <Footer />
        </>
    );
}
