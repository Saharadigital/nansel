'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactHighlight from '../components/contact-highlight';
import Image from 'next/image';
import bgImage from '../components/svg/clint-mckoy-510424-unsplash-scaled.jpg';
import imageone from '../components/svg/nansel-coffee-2-scaled.jpg';
import imagetwo from '../components/svg/coffeeplantation001.jpg';
import imagethree from '../components/svg/south-province.png';
import imagefour from '../components/svg/history-1.jpg';
import imagefive from '../components/svg/history-2.jpg';
import imagesix from '../components/svg/history-5.jpg';
import imageseven from '../components/svg/history-3.jpg';

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
      Nansel embraces the Peace Coffee concept and aims to positively impact locally and globally by promoting ethical,
      sustainable, and peaceful practices throughout the coffee supply chain. We pair specialty-quality coffee with reconciliation
      and community development — paying farmers fairly, investing in education and health, and promoting sustainable, origin-led
      farming so customers enjoy coffee that supports healing and resilience in Rwanda.
    </p>
  </div>
</section>
        {/* Constrained content continued */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          {/* 5. Owner’s History (image left, text right) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="relative h-64 md:h-[380px] rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image src={imagefour} alt="Owner working on plantation" fill className="object-cover object-center" />
            </div>
            <div className="md:order-2">
              <h2 className="mb-4 text-2xl font-bold text-primary">Owner’s History</h2>

              <p className="prose prose-invert">
                Nansel was founded by Anselme Nyiribakwe. His experience growing up in a coffee-growing community shaped the company's mission to
                support farmers, ensure fair pay, and reinvest in local projects. Below is a short timeline — replace the bracketed placeholders with
                the owner's actual details where available.
              </p>

              <p className="prose prose-invert mt-4">
                Provide specific dates, locations, or accomplishments and I will update this copy to be fully factual and polished.
              </p>
            </div>
          </div>

          {/* Owner timeline as a full-width list below the image/text row */}
          {/* <div className="mt-6">
            <ul className="prose prose-invert list-disc ml-6">
              <li><strong>Roots:</strong> Raised in [VILLAGE/TOWN], South Province — worked on family coffee plots from childhood.</li>
              <li><strong>Early career:</strong> Trained/worked with [COOPERATIVE/ORG] between [YEAR–YEAR], focusing on post-harvest processing and quality.</li>
              <li><strong>Community work:</strong> Led initiatives for [EDUCATION/HEALTH/INFRASTRUCTURE] in [COMMUNITY], helping improve livelihoods.</li>
              <li><strong>Founding Nansel:</strong> Launched Nansel in [YEAR] to scale ethical sourcing, transparent trade, and farmer partnerships.</li>
              <li><strong>Today:</strong> Continues to partner with growers, export partners, and NGOs to expand impact while maintaining origin-led quality.</li>
            </ul>
          </div> */}

          {/* Memorial & Legacy (full-width text) */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-primary">Memorial & Legacy for the Peace Coffee Concept</h2>
            <p className="prose prose-invert">
              Peace Coffee also stands as a memorial. In Rwanda, the 1994 genocide against the Tutsi left deep wounds across families and communities.
              The peace and reconciliation ethos of Nansel and the Peace Coffee concept is informed by personal loss and a commitment to healing.
              We remember Augustin NYIRINKINDA and Domine Mukandutiye — father and mother — and honour their memory by working to build livelihoods,
              support education, and foster peaceful, resilient communities.
            </p>
          </div>

          {/* 6. Legacy & Impact (text left, image right) */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Legacy & Impact</h2>
              <p className="prose prose-invert">
                Nansel's work extends beyond production — investing in community projects, training for farmers, and sustainable practices that protect the land and
                improve livelihoods. These efforts help ensure the brand's positive impact endures for future generations.
              </p>
            </div>
            <div className="relative h-64 md:h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image src={imagefive} alt="Community and coffee" fill className="object-cover object-center" />
            </div>
          </div>

          {/* 4. Growing Traditions (image left, text right) */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="relative h-64 md:h-[320px] rounded-lg overflow-hidden shadow-lg md:order-1">
              <Image src={imageseven} alt="Historic coffee scene" fill className="object-cover object-center" />
            </div>
            <div className="md:order-2">
              <h2 className="mb-4 text-2xl font-bold text-primary">Growing Traditions</h2>
              <div className="prose prose-invert">
                <p>
                  Traditional farming techniques and community knowledge remain at the heart of coffee production in the South Province.
                  Farmers combine generational practices — selective picking, seed selection and shade management — with modern, sustainable
                  improvements such as terracing, soil-restoration plantings and agroforestry. These practices protect the land, improve
                  cup quality, and increase long-term yields.
                </p>
                <p>
                  Knowledge-sharing through cooperatives and farmer training programmes helps translate local wisdom into consistent quality:
                  better post-harvest handling, hygienic processing, and cupping-based grading raise market value. Emphasising both heritage
                  and innovation ensures economic resilience for families and preserves the landscape for future growers.
                </p>
              </div>
            </div>
          </section>

          {/* New: Family History (text left, image right) */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Family History & Origins</h2>
              <p className="prose prose-invert">
                Nansel's story is rooted in a family that lived and worked in Rwanda's South Province. The owner's upbringing on family coffee plots
                shaped his approach to farming, community partnership, and fair trade. The company honours the memory of Augustin NYIRINKINDA and
                Domine Mukandutiye — parents whose lives and loss during the 1994 genocide inform our commitment to reconciliation and community rebuilding.
              </p>
              <p className="prose prose-invert mt-4">
                Over the years the family moved from small-scale production to working with cooperatives, investing in quality and post-harvest practices,
                and sharing knowledge that helps neighbouring growers.
              </p>
            </div>

            <div className="relative h-64 md:h-[380px] rounded-lg overflow-hidden shadow-lg">
              <Image src={imagesix} alt="Historic family / plantation" fill className="object-cover object-center" />
            </div>
          </section>
        </section>

        {/* Contact founder — alternating background */}
        <section className="w-full py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-8">
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="mb-3 text-2xl md:text-3xl font-bold text-primary">Want to find out more?</h2>
              <p className="text-gray-700 prose max-w-3xl">
                Connect with our founder to learn more about Nansel, the Peace Coffee concept, partnerships, and support opportunities.
                We can share verified stories, project details, and ways to get involved. If you'd prefer, request a confidential submission
                via the contact form and we'll handle it sensitively.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact?subject=Founder%20Inquiry"
                  className="inline-block bg-[#c1914d] text-white px-5 py-2 rounded-md shadow"
                >
                  Contact
                </a>
                <a href="/about" className="inline-block text-primary underline px-5 py-2">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <ContactHighlight />
      <Footer />
    </>
  );
}
