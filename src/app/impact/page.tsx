import Link from 'next/link';
import Image from 'next/image';
import heroBg from '../components/svg/coffeeplantation001.jpg';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactHighlight from '../components/contact-highlight';

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Impact hero */}
        <section className="relative w-full h-80 md:h-[600px]">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image src={heroBg} alt="Coffee trees on a hillside" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-2xl md:text-4xl font-bold">Impact</h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-white/90">
              Sustainable farming, community projects and verified-first impact — learn how Nansel supports origin communities.
            </p>
            <div className="mt-4">
              <a href="/get-involved" className="inline-block bg-[#c1914d] text-white px-4 py-2 rounded-md shadow">
                Get involved
              </a>
            </div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">Our approach to impact</h2>
          <p className="mb-6 text-[#3d2a1b]/90">
            Nansel approaches impact with a verified-first mindset: we prioritise transparent partnerships, sustainable practices,
            and community-led projects. The details below describe the focus areas and how people can learn more or get involved.
          </p>

          <section className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">Community Projects</h2>
              <p className="text-sm text-[#3d2a1b]/80">
                Education, health and livelihood initiatives are the core of our community investment approach. We support small-scale
                programmes that remove barriers to schooling, improve family wellbeing, and strengthen local economies. Specific projects
                are shared once verified with partners.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">Farmer Training & Quality</h2>
              <p className="text-sm text-[#3d2a1b]/80">
                Practical training in best agronomy, post-harvest handling and processing helps growers improve cup quality and access better markets.
                Training is delivered through cooperative-led sessions and demonstration plots where available.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">Environmental Stewardship</h2>
              <p className="text-sm text-[#3d2a1b]/80">
                We promote agroforestry, soil-restoration plantings, erosion control and water-safe processing techniques to protect origin land
                and improve long-term productivity.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">Memorial & Reconciliation</h2>
              <p className="text-sm text-[#3d2a1b]/80">
                The Peace Coffee concept honours memory and supports healing in affected communities. Any memorial initiatives are developed
                with local partners and shared transparently.
              </p>
            </div>
          </section>

          {/* <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Impact at a glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded shadow">
              <div className="text-3xl font-bold text-primary">—</div>
              <div className="text-sm text-[#3d2a1b]/80 mt-1">Farmers supported (verified on request)</div>
            </div>
            <div className="text-center bg-white p-6 rounded shadow">
              <div className="text-3xl font-bold text-primary">—</div>
              <div className="text-sm text-[#3d2a1b]/80 mt-1">Hectares restored / trees planted</div>
            </div>
            <div className="text-center bg-white p-6 rounded shadow">
              <div className="text-3xl font-bold text-primary">—</div>
              <div className="text-sm text-[#3d2a1b]/80 mt-1">Community projects funded</div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Note: We only publish verified metrics. Contact us to request project reports or to contribute verified data.
          </p>
        </section> */}

          <section className="rounded-lg bg-white p-6 shadow mb-12">
            <h3 className="text-xl font-semibold mb-3">How to learn more or contribute</h3>
            <p className="text-sm text-[#3d2a1b]/80 mb-4">
              If you'd like to support, partner, or submit verified stories and materials, please use the channels below. Anonymous submissions
              are accepted and will be handled sensitively.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/get-involved" className="inline-block bg-[#c1914d] text-white px-4 py-2 rounded-md shadow">
                Get involved
              </Link>
              <Link href="/contact" className="inline-block border border-[#c1914d] text-[#c1914d] px-4 py-2 rounded-md">
                Contact / Submit
              </Link>
            </div>
          </section>
        </main>

        <ContactHighlight />
        <Footer />
      </main>
    </>
  );
}