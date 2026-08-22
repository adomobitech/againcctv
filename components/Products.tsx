"use client";

import { motion } from "framer-motion";
import { products } from "@/data/siteData";
import { Icon } from "./Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            Top Quality CCTV Products
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
        >
          {products.map((p) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              key={p.title}
              className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-gold/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <Icon name={p.icon} className="w-8 h-8 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-gold">{p.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#products"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-6 py-3 rounded shadow-md"
          >
            View All Products →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}