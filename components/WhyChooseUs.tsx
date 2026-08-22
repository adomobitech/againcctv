"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/siteData";
import { Icon } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">WHY CHOOSE US</span>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {whyChooseUs.map((w) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              key={w.title}
              className="flex flex-col items-center text-center gap-3"
            >
              <motion.div whileHover={{ rotate: 15, scale: 1.1 }}>
                <Icon name={w.icon} className="w-9 h-9 text-gold" />
              </motion.div>
              <h3 className="font-bold text-navy text-sm">{w.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}