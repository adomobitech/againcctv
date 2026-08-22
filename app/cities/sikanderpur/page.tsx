import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CCTV Installation in Sikanderpur | CCTV Security Solutions",
  description:
    "Professional CCTV installation, AMC, access control and networking solutions in Sikanderpur. Book a free site inspection today.",
};

const services = [
  "CCTV camera installation for homes, offices and shops",
  "NVR/DVR setup with secure remote mobile viewing",
  "Annual maintenance and prompt repair support",
  "Biometric, access-control and video door phone systems",
];

export default function SikanderpurPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-navy">
      <header className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-extrabold">CS</span>
            <span className="font-extrabold leading-tight">CCTV Security <span className="block text-xs text-gold">Solutions</span></span>
          </Link>
          <a href="tel:821903403" className="text-sm font-bold hover:text-gold transition-colors">Call: 821903403</a>
        </div>
      </header>

      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">SIKANDERPUR SECURITY SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">CCTV Installation in Sikanderpur</h1>
          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">Reliable surveillance, access control and networking solutions for homes, shops, offices and societies in Sikanderpur.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:821903403" className="bg-gold hover:bg-gold-2 text-navy font-bold text-sm px-6 py-3 rounded transition-colors">Get a Free Quote</a>
            <a href="https://wa.me/91821903403" target="_blank" rel="noopener noreferrer" className="border border-white/40 hover:border-gold text-white font-bold text-sm px-6 py-3 rounded transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">LOCAL EXPERTS</p>
          <h2 className="text-3xl font-extrabold mt-3">Security solutions designed for Sikanderpur</h2>
          <p className="text-gray-600 leading-relaxed mt-5">Our experienced team helps you choose the right cameras and security equipment after understanding your property, coverage requirements and budget. We handle installation, setup and after-sales support.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">
          <h2 className="text-xl font-extrabold">Our services</h2>
          <ul className="mt-5 space-y-4 text-gray-600 text-sm leading-relaxed">
            {services.map((service) => <li key={service} className="flex gap-3"><span className="text-gold font-bold">✓</span><span>{service}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <h2 className="text-3xl font-extrabold">Need CCTV installation in Sikanderpur?</h2>
          <p className="text-gray-600 mt-3">Call us to arrange your free site inspection and consultation.</p>
          <a href="tel:821903403" className="inline-flex mt-6 bg-navy hover:bg-navy-2 text-white font-bold text-sm px-6 py-3 rounded transition-colors">Call 821903403</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
