"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/siteData";
import { Icon } from "./Icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 12 } },
};

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.05)" }}
              key={t.name}
              className="bg-white rounded-lg p-7 shadow-sm border border-gray-100 relative transition-all"
            >
              <Icon name="quote" className="w-7 h-7 text-gold/40 mb-3" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy text-gold font-bold text-sm flex items-center justify-center">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}