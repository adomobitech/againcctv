"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { navLinks, siteInfo } from "@/data/siteData";
import { ContactIcon, SocialIcon } from "./Icons";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
      className="w-full sticky top-0 z-50 shadow-sm"
    >
      {/* Top bar with Animated Call & WhatsApp */}
      <div className="hidden md:flex bg-navy text-gray-300 text-xs px-6 lg:px-10 py-2.5 items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="https://maps.app.goo.gl/GNQzvgW33NNVRDX56?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <ContactIcon name="pin" className="w-3.5 h-3.5 text-gold" />
            {siteInfo.location}
          </a>

          {/* Call Icon + Number with Pulse Animation */}
          <motion.a
            href="tel:9821903403"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-white hover:text-gold transition-colors font-semibold"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              📞
            </motion.span>
            Call: {siteInfo.phone}
          </motion.a>

          {/* WhatsApp Icon + Number with Bounce Animation */}
          <motion.a
            href={`https://wa.me/${siteInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300 font-semibold"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              💬
            </motion.span>
            WhatsApp: {siteInfo.phone}
          </motion.a>
        </div>

        <div className="flex items-center gap-4">
          <span>{siteInfo.hours}</span>
          <div className="flex items-center gap-3 text-gray-300">
            <SocialIcon name="facebook" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
            <SocialIcon name="instagram" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
            <SocialIcon name="youtube" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-3">
        <a href="#home" className="shrink-0">
          <Image src="/cctv-security-solutions-logo.svg" alt="CCTV Security Solutions" width={180} height={48} priority className="w-40 sm:w-44 h-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-navy">
          {navLinks.map((link) => (
            <motion.a
              whileHover={{ y: -2, color: "var(--gold)" }}
              key={link.label}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="md:hidden w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-lg">
            💬
          </a>
          <a href="tel:9821903403" aria-label="Call CCTV Security Solutions" className="md:hidden w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
            ☎
          </a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-5 py-2.5 rounded shadow-sm"
        >
          Get A Free Quote
        </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
