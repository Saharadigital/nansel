'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactHighlight from '../components/contact-highlight';
import Image from 'next/image';

// Hero image
import bgImage from '../components/svg/clint-mckoy-510424-unsplash-scaled.jpg';

// Section images (use your actual asset paths)
import imageone from '../components/svg/nansel-coffee-2-scaled.jpg';
import imagetwo from '../components/svg/coffeeplantation001.jpg';
import imagethree from '../components/svg/south-province.png';
import imagefour from '../components/svg/peace-coffee.png';

export default function HistoryPage() {
  return (
    <>
      <Header />

      <main>
        {/* Full-width hero */}
        <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
          <Image src={bgImage} alt="Rwandan coffee plantation" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Rooted in Rwanda. Brewed with Purpose.</h1>
            <p className="mt-4 text-lg text-white/90">
              Discover the journey of Nansel and the Peace Coffee concept — from the fertile hills of Rwanda’s South Province to cups around the world,
              guided by fairness, sustainability, and peace.
            </p>
          </div>
        </section>

        {/* Constrained content */}
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Nansel History</h1>

          {/* 1. History & Statement (text left, image right) */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">History and Statement ‘Peace Coffee’ Concept</h2>
              <p className="prose prose-invert">
                The concept of ‘PEACE COFFEE’ is a brand and initiative that integrates principles of peace, social justice, and environmental
                sustainability into the production and distribution of coffee.
              </p>
            </div>
            <div className="relative h-64 md:h-[320px] rounded-lg overflow-hidden shadow-lg">
              <Image src={imageone} alt="Coffee farm in Rwanda" fill className="object-cover" />
            </div>
          </section>

          {/* 2. Nansel Future (image left, text right) */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="relative h-64 md:h-[320px] rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image src={imagetwo} alt="Coffee close up" fill className="object-cover" />
            </div>
            <div className="md:order-2">
              <h2 className="mb-4 text-2xl font-bold text-primary">Nansel is Navigating a Bright Future</h2>
              <p className="prose prose-invert">
                Nansel is committed to building a responsible coffee brand rooted in dignity, partnership, and long-term value for growers and customers alike.
              </p>
            </div>
          </section>

          {/* 3. South Province (text left, image right) */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">South Province of Rwanda</h2>
              <p className="prose prose-invert">
                The South Province of Rwanda is the largest producer and root of the plantation, renowned for high-quality Arabica coffee. The wider East
                African Community offers ideal growing conditions: high altitudes, moderate temperatures, rich volcanic soils, and reliable rainfall.
              </p>
            </div>
            <div className="relative h-64 md:h-[320px] rounded-lg overflow-hidden shadow-lg">
              <Image src={imagethree} alt="Hands harvesting coffee cherries" fill className="object-cover" />
            </div>
          </section>
        </div>

        {/* Full-width white “Peace Coffee Concept” grid */}
        <section className="w-full py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="mb-6 text-2xl font-bold text-primary">The ‘PEACE COFFEE’ Concept</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="h-full rounded-lg border border-border/60 bg-[#FBF3E4] p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">1) Fair-Trade Practices</h3>
        <p className="text-gray-800 leading-relaxed">
          Ensuring farmers receive fair wages and humane conditions. Fairtrade certification supports ethical
          sourcing and improves producer livelihoods.
        </p>
      </div>

      <div className="h-full rounded-lg border border-border/60 bg-[#FBF3E4] p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">2) Sustainable Agriculture</h3>
        <p className="text-gray-800 leading-relaxed">
          Promoting environmentally friendly practices that protect biodiversity and natural resources, including
          organic and shade-grown methods while minimising harmful chemicals.
        </p>
      </div>

      <div className="h-full rounded-lg border border-border/60 bg-[#FBF3E4] p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">3) Community Development</h3>
        <p className="text-gray-800 leading-relaxed">
          Investing in origin communities—supporting education, healthcare, infrastructure, and social programmes
          that improve quality of life.
        </p>
      </div>

      <div className="h-full rounded-lg border border-border/60 bg-[#FBF3E4] p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">4) Conflict-Free Sourcing</h3>
        <p className="text-gray-800 leading-relaxed">
          Sourcing from regions free of violent conflict and ensuring the coffee trade does not contribute to
          instability.
        </p>
      </div>

      <div className="h-full rounded-lg border border-border/60 bg-[#FBF3E4] p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">5) Environmental Responsibility</h3>
        <p className="text-gray-800 leading-relaxed">
          Reducing the carbon footprint across production and distribution with renewable energy, efficient logistics,
          and sustainable packaging.
        </p>
      </div>

      <div className="h-full rounded-lg border border-border/60 bg-[#FBF3E4] p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">6) Consumer Awareness</h3>
        <p className="text-gray-800 leading-relaxed">
          Educating customers on the impact of their choices and encouraging support for brands aligned with ethical
          and sustainable values.
        </p>
      </div>
    </div>

    <p className="text-gray-800 leading-relaxed mt-8">
      NANSEL IS COMPANY LTD, as PEACE COFFEE, aims to positively impact locally and globally by promoting ethical,
      sustainable, and peaceful practices throughout the coffee supply chain.
    </p>
  </div>
</section>


        {/* Constrained content continued */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          {/* 5. Owner’s History (image left, text right) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="relative h-64 md:h-[320px] rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image src={imagefour} alt="Sustainability practices" fill className="object-cover" />
            </div>
            <div className="md:order-2">
              <h2 className="mb-4 text-2xl font-bold text-primary">Owner’s History</h2>
              <p className="prose prose-invert">
                Founded by Anselme Nyiribakwe, Nansel’s story begins with family roots in Rwanda’s South Province and a commitment to translating those origins into a
                modern, values-driven coffee brand. After years working with growers and communities across the region, Anselme Nyiribakwe shaped the Peace Coffee ethos
                to prioritise fair value for farmers, transparency for customers, and stewardship of the land.
              </p>
              {/* <p className="prose prose-invert mt-4">
                Key milestones include [Year] establishing relationships with cooperatives in the South Province, [Year] piloting small-lot processing improvements,
                and [Year] launching Nansel’s first Peace Coffee releases focused on traceability and community investment.
              </p> */}
            
            </div>
           
          </div>
           <div>  <p>
                Further history to added (Temporary placeholder) image to be replaced with actual image of Anselme Nyiribakwe.
              </p></div>
        </section>
      </main>

      <ContactHighlight />
      <Footer />
    </>
  );
}
