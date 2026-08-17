"use client";

import { motion, type Variants } from "framer-motion";
import { heroFeatures } from "@/data/siteData";
import { Icon } from "./Icons";
import CameraIllustration from "./CameraIllustration";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(242,183,5,0.15), transparent 45%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-20">
        {/* Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block bg-gold/90 text-navy text-xs font-bold tracking-wide px-3 py-1 rounded mb-5"
          >
            YOUR SAFETY, OUR PRIORITY
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5"
          >
            SECURING WHAT
            <br />
            MATTERS <span className="text-gold">MOST</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-md mb-8"
          >
            Advanced CCTV Solutions for Homes, Offices & Industries.
            <br />
            High Quality | Best Pricing | Expert Installation
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 mb-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-6 py-3 rounded flex items-center gap-2 shadow-lg"
            >
              Explore Services →
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="flex items-center gap-3 text-white font-semibold text-sm group"
            >
              <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                ▶
              </span>
              Watch Video
            </motion.a>
          </motion.div>

          {/* Hero Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {heroFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.6 + i * 0.1,
                  type: "spring",
                  stiffness: 50,
                }}
                className="flex items-center gap-2 text-white"
              >
                <Icon
                  name={f.icon}
                  className="w-6 h-6 text-gold shrink-0"
                />
                <span className="text-xs font-medium leading-tight">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-72 h-72 bg-gold/10 rounded-full blur-3xl"
          />

          {/* Camera */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-xl relative drop-shadow-2xl z-10"
          >
            <CameraIllustration className="w-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}