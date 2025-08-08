import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHighlight from '../components/contact-highlight';

const toc = [
    { href: '#use-of-website', label: 'Use of this website' },
    { href: '#links', label: 'Links from and to this website' },
    { href: '#trademarks', label: 'Trade Marks, Logos and Service Marks' },
    { href: '#copyright', label: 'Copyright' },
    { href: '#viruses', label: 'Viruses' },
    { href: '#feedback', label: 'Feedback and Complaints' },
    { href: '#general', label: 'General' },
];

export default function TermsAndConditions() {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Terms and Conditions</h1>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
                    <aside className="md:sticky md:top-24 h-max">
                        <nav
                            aria-label="Table of contents"
                            className="rounded-xl border border-border/60 bg-background/50 p-4"
                        >
                            <h2 className="text-sm font-medium text-foreground/80 mb-3">Table of Contents</h2>
                            <ul className="space-y-2 text-sm">
                                {toc.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <article className="prose prose-invert max-w-none">
                        <p>
                            We, Nansel Coffee administration, operate this website, the home page of which can be found at <br />
                            <Link
                                href="https://nansel.co.uk"
                                className="underline underline-offset-4 hover:text-foreground"
                            >
                                https://nansel.co.uk
                            </Link>
                            . Your access to and use of this website is subject to your compliance with all applicable laws and
                            these terms of use, which incorporate the paragraphs below and the Privacy Policy, all of which can be
                            accessed from this page (“Terms and Conditions”). Your use of this website constitutes your unqualified
                            agreement to accept and comply with the Terms of Use.
                        </p>

                        <section id="use-of-website">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Use of this website</h2>
                            <p>
                                We strive to provide accurate information on this website, though errors may occur. While we work hard to
                                ensure accuracy, we cannot guarantee it and aren’t responsible for any mistakes or decisions made based on
                                the content. The information is general in nature and not intended as professional advice. We kindly ask you
                                to use the website with this in mind. We are not liable for any losses or damages related to the website, and
                                all warranties are excluded to the fullest extent permitted by law, except where liability cannot be limited,
                                such as in cases of personal injury or fraud.
                            </p>
                        </section>

                        <section id="links">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Links from and to this website</h2>
                            <p>Hypertext links allow visitors to navigate between websites or pages within the same site.</p>
                            <p>
                                This website includes links to third-party sites for your convenience, but we are not responsible for their
                                content. We are not liable for any issues, damages, or losses that may arise from using third-party websites.
                            </p>
                            <p>If you want to create a link to our website, please follow the rules provided on our site.</p>
                        </section>

                        <section id="trademarks">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">
                                Trade Marks, Logos and Service Marks
                            </h2>
                            <p>
                                The trademarks, logos, and service marks on this website belong to their respective owners. You are not granted
                                any rights to use them without prior written permission from the owner. Misusing or infringing on these trademarks
                                is strictly prohibited.
                            </p>
                        </section>

                        <section id="copyright">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Copyright</h2>
                            <p>
                                Nansel Coffee or its content providers own the copyright for all parts of this website. The content is protected
                                by copyright and cannot be used without our prior written consent, except as stated in the Terms and Conditions.
                                We do not guarantee that using materials from this site won’t infringe on third-party rights.
                            </p>
                            <p>
                                Unless expressly allowed, you must not copy, adapt, download, or use the information on this website, except for
                                personal use like browsing or requesting information about our products and services. You may not reproduce, store,
                                or share any content from the website without our prior written consent.
                            </p>
                        </section>

                        <section id="viruses">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Viruses</h2>
                            <p>
                                While we keep our antivirus software updated, we can’t guarantee that this website, its servers, downloads, or
                                emails are free from viruses or harmful elements.
                            </p>
                            <p>You must not:</p>
                            <ul>
                                <li>Introduce or try to introduce viruses or contaminants to the website, its software, or systems.</li>
                                <li>Attempt to access, alter, reverse engineer, or tamper with any part of the website, its software, or systems.</li>
                            </ul>
                        </section>

                        <section id="feedback">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Feedback and Complaints</h2>
                            <p>
                                If you have any questions, feedback, or comments about this website, please email us using the email address provided
                                in the footer.
                            </p>
                        </section>

                        <section id="general">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">General</h2>
                            <p>
                                We may update the Terms of Use from time to time. If there are significant changes, we’ll notify you by posting a notice
                                on the homepage. You are bound by these changes from the date they take effect. You can view the latest version of the
                                Terms of Use anytime by clicking the link in the footer.
                            </p>
                            <p>If any part of the Terms is unenforceable, the rest will still apply.</p>
                            <p>The Terms of Use are governed by English law, and any disputes will be handled exclusively by English courts.</p>
                            <p className="mt-8">
                                <Link
                                    href="#top"
                                    className="text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground"
                                >
                                    Back to top
                                </Link>
                            </p>
                        </section>
                    </article>
                </div>
            </main>
            <ContactHighlight />
            <Footer />
        </>
    );
}
