'use client';

import ContactHighlight from '../components/contact-highlight';
import Footer from '../components/footer';
import Header from '../components/header';
import OurProcess from '../components/process';
import TheJourneyOfASingleBean from '../components/the-journey';

export default function OurProcessPage() {
    return (
        <>
        <Header />
  
        <main className="bg-background text-foreground">
          

            <OurProcess />

            <TheJourneyOfASingleBean />
        </main>
        <ContactHighlight />
        <Footer />
              </>
    );
}
