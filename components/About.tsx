"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./Icons";

const aboutTabs = [
  {
    id: "mission",
    title: "Our Mission & Vision",
    icon: "camera",
    content: "To deliver cutting-edge, reliable, and intelligent CCTV and networking security solutions that protect homes, commercial spaces, and industrial assets with absolute precision and 24/7 reliability.",
  },
  {
    id: "expertise",
    title: "Technical Expertise",
    icon: "network",
    content: "Specialized in high-definition IP cameras, PTZ tracking systems, NVR setup, biometric access controls, and robust structural networking tailored for maximum safety and seamless monitoring.",
  },
  {
    id: "why-us",
    title: "Why Choose Us",
    icon: "quality",
    content: "We combine top-tier hardware quality with professional installation, expert post-installation support, and budget-friendly pricing packages across all our service regions.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);
  const currentContent = aboutTabs.find((tab) => tab.id === activeTab);

  return (
    <section id="about" className="bg-white py-16 lg:py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] eyebrow uppercase">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#12151c] mt-2">
            About CCTV Security Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Securing your premises with advanced surveillance tech, professional engineering, and uncompromised trust.
          </p>
        </motion.div>

        {/* Interactive Accordion / Tab Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {aboutTabs.map((tab, i) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 p-5 rounded-xl border text-left transition-all shadow-sm ${
                    isActive
                      ? "bg-[#12151c] text-white border-[#12151c] shadow-md"
                      : "bg-gray-50 text-[#12151c] border-gray-200 hover:border-orange-500/50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-orange-500 text-white" : "bg-white text-orange-500 shadow-inner"
                    }`}
                  >
                    <Icon name={tab.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{tab.title}</h3>
                    <p className={`text-xs mt-0.5 ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                      Click to explore details
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Content Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-2xl relative shadow-lg overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <Icon name="cctv" className="w-64 h-64 text-[#12151c]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block bg-orange-500/10 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    FEATURED INSIGHT
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#12151c] mb-4">
                    {currentContent?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                    {currentContent?.content}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200/80">
                    <div>
                      <h4 className="text-orange-500 font-extrabold text-xl">100%</h4>
                      <p className="text-xs text-gray-500 mt-1">Secure Quality</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-extrabold text-xl">24/7</h4>
                      <p className="text-xs text-gray-500 mt-1">Client Support</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-extrabold text-xl">Expert</h4>
                      <p className="text-xs text-gray-500 mt-1">Installation</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
