"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, siteInfo } from "@/data/siteData";
import { ContactIcon, SocialIcon } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-gray-300">
      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-orange-500"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-navy font-extrabold text-lg">
              Need Help Securing Your Property?
            </h3>
            <p className="text-navy/80 text-sm">
              Get a free site inspection and consultation today!
            </p>
          </div>
          <motion.a
            href={`https://wa.me/${siteInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-navy text-white font-bold text-sm px-6 py-3 rounded hover:bg-navy-2 transition-colors whitespace-nowrap shadow-lg flex items-center gap-2"
          >
            <span>💬</span> Chat on WhatsApp
          </motion.a>
        </div>
      </motion.div>

      {/* Links & Branding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="inline-flex mb-4 bg-white rounded-lg px-3 py-2">
            <Image src="/cctv-security-solutions-logo.svg" alt="CCTV Security Solutions" width={180} height={48} className="w-40 h-auto" />
          </a>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            We provide complete security solutions with best quality products and expert installation services.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon name="facebook" className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
            <SocialIcon name="instagram" className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
            <SocialIcon name="youtube" className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-orange-500 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.ourServices.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Cities We Serve</h4>
          <div className="grid grid-cols-2 gap-x-4 text-sm">
            <ul className="space-y-2">
              {footerLinks.citiesLeft.map((c) => (
                <li key={c}>
                  {c === "Sikanderpur" ? (
                    <Link href="/cities/sikanderpur" className="hover:text-orange-500 transition-colors">
                      {c}
                    </Link>
                  ) : (
                    <span className="hover:text-orange-500 transition-colors cursor-default">{c}</span>
                  )}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {footerLinks.citiesRight.map((c) => (
                <li key={c} className="hover:text-orange-500 transition-colors cursor-default">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact strip with Blue Call & Green WhatsApp SVG Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 lg:px-10 pb-10 grid sm:grid-cols-3 gap-6 text-sm border-t border-white/10 pt-8"
      >
        {/* Location */}
        <div className="flex items-start gap-3">
          <ContactIcon name="pin" className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <a
            href="https://maps.app.goo.gl/GNQzvgW33NNVRDX56?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors underline"
          >
            View Location on Google Maps
          </a>
        </div>

        {/* Call & WhatsApp with Specific Colors */}
        <div className="flex items-start gap-3">
          <div className="space-y-2">
            {/* Call Line with Blue Icon */}
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-blue-400 shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5c-1.1 0-2.2-.3-3.2-.8-1.4-.7-2.7-1.7-3.8-3.1-1.1-1.4-1.9-2.9-2.5-4.4-.5-1.3-.8-2.6-.8-3.8 0-.4.1-.7.4-1 .3-.3.7-.5 1.2-.5h2c.4 0 .8.2 1 .5l1.2 2.8c.2.4.1.9-.2 1.2l-.9.9c-.3.3-.3.8 0 1.1 1 1.1 2.2 2.1 3.3 3.1.3.3.8.3 1.1 0l.9-.9c.3-.3.8-.4 1.2-.2l2.8 1.2c.3.2.5.6.5 1v2c0 .5-.2.9-.5 1.2-.3.3-.7.4-1.1.4z" />
              </svg>
              <span>
                Call:{" "}
                <a href="tel:821903403" className="hover:text-orange-500 font-semibold transition-colors">
                  {siteInfo.phone}
                </a>
              </span>
            </p>

            {/* WhatsApp Line with Green Icon */}
            <p className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-green-400 shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${siteInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline font-semibold"
                >
                  {siteInfo.phone}
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <ContactIcon name="mail" className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <span>
            {siteInfo.email}
            <br />
            www.cctvsecuritysolutions.com
          </span>
        </div>
      </motion.div>

      {/* Bottom Bar - Centered Layout */}
      <div className="border-t border-white/10 py-8 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center justify-center gap-3">
          
          {/* Copyright text in center */}
          <p className="text-gray-400 font-medium">
            © 2026 <span className="text-white font-semibold">CCTV Security Solutions</span>. All Rights Reserved.
          </p>

          {/* Privacy & Terms links below in center */}
          <div className="flex items-center gap-6 mt-1">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-orange-500 transition-colors font-medium underline underline-offset-4 decoration-gray-600 hover:decoration-orange-500"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="/terms"
              className="text-gray-400 hover:text-orange-500 transition-colors font-medium underline underline-offset-4 decoration-gray-600 hover:decoration-orange-500"
            >
              Terms & Conditions
            </a>
          </div>

          <a
            href="https://weoads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-orange-500 hover:bg-orange-500/10"
          >
            <span className="text-orange-500">✦</span>
            Designed &amp; Managed by <span className="text-orange-500">Weoads.com</span>
          </a>

        </div>
      </div>
    </footer>
  );
}
