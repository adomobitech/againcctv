"use client";

import { motion } from "framer-motion";
import { services } from "@/data/siteData";
import { Icon } from "./Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            Complete Security Solutions
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
        >
          {services.map((s) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, zIndex: 10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              key={s.title}
              className="bg-white p-8 flex flex-col items-center text-center transition-colors relative"
            >
              <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Icon name={s.icon} className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}