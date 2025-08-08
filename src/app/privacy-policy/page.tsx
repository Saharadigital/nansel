import Link from 'next/link';
import Header from '../components/header';
import ContactHighlight from '../components/contact-highlight';
import Footer from '../components/footer';

const toc = [
    { href: '#where-from', label: 'Where do we get information from?' },
    { href: '#how-we-use', label: 'How do we use your information?' },
    { href: '#cookies', label: 'What are ‘Cookies’ and how we use them' },
    { href: '#age-restrictions', label: 'Age Restrictions' },
    { href: '#other-websites', label: 'Other websites' },
    { href: '#changes', label: 'Changes to the policy' },
    { href: '#access-rights', label: 'Access rights' },
    { href: '#privacy-queries', label: 'Privacy queries' },
];

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-6xl px-6 py-12">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Privacy Policy</h1>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
                    <aside className="md:sticky md:top-24 h-max">
                        <nav aria-label="Table of contents" className="rounded-xl border border-border/60 bg-background/50 p-4">
                            <h2 className="text-sm font-medium text-foreground/80 mb-3">Table of Contents</h2>
                            <ul className="space-y-2 text-sm">
                                {toc.map(item => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <article className="prose prose-invert max-w-none">
                        <p>
                            This privacy notice sets out how Nansel Coffee uses and protects any information you provide us via our website.
                            We regularly update our privacy notice and this version was last updated in July 2024.
                        </p>
                        <p>
                            Nansel Coffee is committed to protecting the personal information you provide when using our website. We have a responsibility
                            to keep the personal details that you provide confidential. We will only collect, process and store information that has been
                            collected from you with your consent.
                        </p>
                        <p>
                            To help us deliver the right online services to you, Nansel Coffee needs certain information about you. This means that we have
                            a ‘legitimate interest’ in collecting some of your information.
                        </p>
                        <p>
                            If you have any questions about this privacy notice please contact get in touch with us on given email:
                        </p>
                        <p>Email: info@nansel.co.uk</p>
                        <p>By using this site, you are agreeing to the terms of this Privacy Policy. If you do not agree to our Privacy Policy then please do not use this site.</p>

                        <section id="where-from">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Where do we get information from?</h2>
                            <p>
                                We collect information from messages that you send us through our website, through tracking your visits to our websites and on our online
                                forms such as when you register for an event or if you make a donation to us.
                            </p>
                            <h3>What information do we collect?</h3>
                            <p>
                                We collect ‘personal data’ which is any information that can be used to identify a living person. Our website can collect information including
                                your name, address, date of birth, postal and email addresses and contact telephone numbers. By submitting this information, you are providing your
                                consent that all of the personal data you submit can be processed in the manner in which you expect.
                            </p>
                            <ul>
                                <li>Ensure you know and understand why we need it</li>
                                <li>Only ask for what is necessary for the service that we are providing you</li>
                                <li>Protect it and ensure that only authorised persons are able to access it</li>
                                <li>Ensure you know if you have a choice about giving us information</li>
                                <li>Make sure that we don’t keep your personal data for longer than is absolutely necessary</li>
                            </ul>
                            <p>
                                To ensure that the information that we store is accurate, please contact us as soon as possible if there are any mistakes, for example, a name that
                                is incorrectly spelt. You have a right under GDPR for your information to be accurate.
                            </p>
                            <p>
                                We also receive statistical information about the visitors to our site, which pages they are visiting and the length of time they spend on our site,
                                the type of browser and operating system that is being used, Internet Protocol (IP) address and country of origin. This collected information does not
                                reveal any personal data.
                            </p>
                            <p>
                                This information is collected by a third party on our behalf though our hosting company. They use cookies to collect the information.
                            </p>
                            <p>See “What are ‘cookies’ and how we use them”.</p>
                        </section>

                        <section id="how-we-use">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">How do we use your information?</h2>
                            <p>
                                We will use the personal data to provide you with the appropriate services, products or information that you have requested, for administrative
                                purposes and to further our charitable aims, including fundraising activities. We may need to share your information with our services providers,
                                associated organisations and agents for these purposes.
                            </p>
                            <p>
                                Financial transactions made through our website are handled by our payment services providers: Stripe (Stripe Privacy Policy).
                            </p>
                            <p>
                                We do not use your personal data for the purpose of direct marketing unless you have subscribed to email newsletters or have given us your consent
                                to provide you with further information. We use MailChimp (Mailchimp Privacy Policy) to operate our email mailing lists.
                            </p>
                            <p>
                                Personal information collected through the site is not shared with third parties or used in any other way (other than described in this policy or as
                                required by law) unless you have provided consent for us to do so.
                            </p>
                            <p>
                                We reserve the right to share your personal information if we are legally obliged to and to apply our terms and conditions and other agreements. This
                                can include exchanging information with other organisations for fraud and credit risk reduction and police investigations.
                            </p>
                            <p>
                                Unfortunately, no transmission of data over the internet is 100% secure. As a result of this, Nansel Coffee will, and do take, all steps possible to
                                protect the personal data you private through our website however, we are unable to guarantee the security of the information you transmit to us and
                                you do so at your own risk.
                            </p>
                            <p>
                                When we collect your personal data, we use strict procedures and security features to prevent unauthorised access to it.
                            </p>
                        </section>

                        <section id="cookies">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">What are ‘Cookies’ and how we use them</h2>
                            <p>
                                We use “cookies” to monitor the usage of our website and use Google Analytics for our web analysis.
                            </p>
                            <p>
                                A cookie is a small text file that is placed on your computer’s hard disk through your browser and helps to improve your experience of our website.
                                However, you may prefer to disable cookies on this site and others. The most effective way of doing this is to disable cookies in your Internet
                                Browser. You can find out how to do this by visiting the help section of your browser. Further information about cookies and how they are used can
                                be found at www.allaboutcookies.org and www.aboutcookies.org
                            </p>
                            <p>
                                The information collected by the cookies is anonymous and does not contain any person identifiable information.
                            </p>
                        </section>

                        <section id="age-restrictions">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Age Restrictions</h2>
                            <p>
                                If you are aged 18 or under, we recommend that you get your parent/guardian’s permission before you provide any personal information on our website.
                            </p>
                        </section>

                        <section id="other-websites">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Other websites</h2>
                            <p>
                                Our website may contain links to other websites belonging to third party organisations. We also reserve the right to participate in social networking
                                sites. We have no control over the privacy practices of these third-party sites. You should be able to read other sites privacy notices.
                            </p>
                        </section>

                        <section id="changes">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Changes to the policy</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify, add, or remove sections of this policy at any time and any changes will be notified to you
                                using the email address that you have provided or by an announcement on our website.
                            </p>
                        </section>

                        <section id="access-rights">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Access rights</h2>
                            <p>
                                You have a right to access the personal data we hold about you. If you wish to obtain a copy of this information, please email us at the addresses
                                given below:
                            </p>
                            <p>Email: info@nansel.co.uk</p>
                        </section>

                        <section id="privacy-queries">
                            <h2 className="mt-10 mb-4 text-2xl font-bold text-primary">Privacy queries</h2>
                            <p>
                                If you have any questions regarding this policy, or you wish to update your details or remove your personal data from our records, please contact us
                                at the above address.
                            </p>
                            <p>Thank you for visiting our site.</p>
                            <p className="mt-8">
                                <Link href="#top" className="text-sm text-foreground/70 underline underline-offset-4 hover:text-foreground">Back to top</Link>
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
