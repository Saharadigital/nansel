import Link from 'next/link';
import Image from 'next/image';
import heroBg from '../components/svg/sun-dried-beans.png';
import Header from '../components/header';
import ContactHighlight from '../components/contact-highlight';
import Footer from '../components/footer';

export default function GetInvolvedPage() {
  return (
    <>
      <Header />
      <section className="relative w-full h-80 md:h-[600px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src={heroBg} alt="People on a coffee farm" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">Get involved</h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-sm max-w-2xl mx-auto">
            Support verified projects, share memories, or partner with Nansel to help origin communities thrive.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact?subject=Story%20Submission"
              className="bg-[#c1914d] text-white px-5 py-2 rounded-md font-semibold shadow"
            >
              Share Your Story
            </Link>

            <Link
              href="/contact?subject=Partnership"
              className="bg-transparent border border-[#c1914d] text-[#c1914d] px-5 py-2 rounded-md font-semibold"
            >
              Partnership Enquiry
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Join the journey</h1>
        <p className="mb-4 text-[#3d2a1b]/90">Interested in supporting, partnering or contributing a verified story? Here are safe ways to help.</p>

        <div className="grid gap-6">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="font-semibold">Submit a story</h2>
            <p className="text-sm text-[#3d2a1b]/80">Use the contact form to send photos or memories. Mark submissions as anonymous if preferred.</p>
            <Link href="/contact?subject=Story Submission" className="inline-block mt-3 bg-[#c1914d] text-white px-5 py-2 rounded-md">Send a Submission</Link>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="font-semibold">Partnerships</h2>
            <p className="text-sm text-[#3d2a1b]/80">If you are a buyer, roaster or NGO interested in working together, contact the founder directly.</p>
            <Link href="/contact?subject=Partnership" className="inline-block mt-3 bg-[#c1914d] text-white px-5 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      </main>
      <ContactHighlight />
      <Footer />
    </>
  );
}