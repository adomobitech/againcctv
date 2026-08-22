"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-200 relative overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#12151c] to-orange-500" />

        <span className="text-orange-500 text-xs font-bold tracking-[0.2em] eyebrow uppercase">
          LEGAL & SECURITY
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#12151c] mt-2 mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-gray-100">
          Last updated: August 2026 | B.S. CCTV Networking Solution
        </p>

        <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 1. Information We Collect
            </h2>
            <p>
              At B.S. CCTV Networking Solution, we collect information you provide directly when requesting a security consultation, booking an installation service, or communicating via phone/WhatsApp. This includes your name, contact number, service address, and specific surveillance requirements.
            </p>
          </section>

          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 2. How We Use Your Information
            </h2>
            <p>
              We utilize collected data exclusively to execute seamless CCTV installations, configure networking setups, coordinate technician appointments, and provide dependable customer support and maintenance.
            </p>
          </section>

          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 3. Data Protection & Security
            </h2>
            <p>
              We implement stringent administrative and technical safeguards to secure your personal data against unauthorized access, disclosure, alteration, or accidental loss.
            </p>
          </section>

          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 4. Direct Inquiries
            </h2>
            <p>
              For any questions regarding our privacy practices or data handling, you can contact us directly at <span className="font-semibold text-[#12151c]">9821903403</span>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#12151c] hover:bg-orange-500 text-white font-bold text-sm px-7 py-3 rounded-xl transition-all shadow-md"
          >
            ← Back to Home
          </a>
          <span className="text-xs text-gray-400">B.S. CCTV Networking Solution</span>
        </div>
      </motion.div>
    </main>
  );
}