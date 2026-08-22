"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icons";

const installations = [
  { icon: "cctv", label: "Office Entrance Setup" },
  { icon: "nvr", label: "Control Room NVR" },
  { icon: "ptz", label: "Warehouse PTZ" },
  { icon: "dome", label: "Society Dome Camera" },
  { icon: "bullet", label: "Perimeter Bullet Cam" },
  { icon: "network", label: "Multi-Screen Monitoring" },
];

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

export default function RecentWork() {
  return (
    <section id="work" className="bg-navy py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">OUR WORK</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Our Recent Installations
          </h2>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {installations.map((item) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={item.label}
              className="aspect-square rounded-lg bg-navy-2 border border-white/10 flex flex-col items-center justify-center gap-3 hover:border-gold/60 transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Icon name={item.icon} className="w-7 h-7 text-gold" />
              </div>
              <span className="text-[11px] text-gray-300 text-center px-3 leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-6 py-3 rounded"
          >
            View More Projects →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}