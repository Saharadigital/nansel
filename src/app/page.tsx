import { Building, Building2, Coffee, Flame, Globe, Globe2, Handshake, Leaf, Package, ShieldCheck, TreePine } from 'lucide-react';
import Header from './components/header';
import Hero from './components/hero';
import OurProcess from './components/process';
import Footer from './components/footer';
import ContactHighlight from './components/contact-highlight';
import WhatWeStandFor from './components/what-we-stand-for';
import TheJourneyOfASingleBean from './components/the-journey';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
     <OurProcess />
        <TheJourneyOfASingleBean />
      <WhatWeStandFor />
      
        <ContactHighlight />
       <Footer />
      </main>
    </>
  );
}
