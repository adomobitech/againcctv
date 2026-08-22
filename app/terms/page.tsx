"use client";

import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
          AGREEMENT & GUIDELINES
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#12151c] mt-2 mb-3">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-sm mb-10 pb-6 border-b border-gray-100">
          Last updated: August 2026 | B.S. CCTV Networking Solution
        </p>

        <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, booking an inspection, or hiring B.S. CCTV Networking Solution for installations, you agree to be bound by these Terms and Conditions. Please review them carefully before proceeding with any service.
            </p>
          </section>

          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 2. Surveillance & Networking Services
            </h2>
            <p>
              Our offerings include professional CCTV setup, NVR configurations, and networking solutions. Quotations provided online or over phone estimates are finalized only after a comprehensive physical site inspection.
            </p>
          </section>

          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 3. Warranties & Hardware
            </h2>
            <p>
              Hardware warranties and replacement policies are governed strictly by the respective original manufacturers. B.S. CCTV Networking Solution provides professional workmanship guarantees during installation periods.
            </p>
          </section>

          <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-[#12151c] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> 4. Limitation of Liability
            </h2>
            <p>
              B.S. CCTV Networking Solution shall not be held liable for indirect or unforeseen technical malfunctions outside our structured maintenance scopes, or network provider downtimes affecting remote camera streaming.
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