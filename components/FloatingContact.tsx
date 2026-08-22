"use client";

import { motion } from "framer-motion";
import { siteInfo } from "@/data/siteData";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Button - Direct Chat Link */}
      <motion.a
        href={`https://wa.me/${siteInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#12151c] border-2 border-green-500 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer relative group"
        title="Chat on WhatsApp"
      >
        <motion.svg
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-7 h-7 fill-green-400"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </motion.svg>
        <span className="absolute right-16 bg-[#12151c] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/10">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Floating Button - Direct Call Link */}
      <motion.a
        href="tel:821903403"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#12151c] border-2 border-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer relative group"
        title="Call Us Now"
      >
        <motion.svg
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-7 h-7 fill-blue-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5c-1.1 0-2.2-.3-3.2-.8-1.4-.7-2.7-1.7-3.8-3.1-1.1-1.4-1.9-2.9-2.5-4.4-.5-1.3-.8-2.6-.8-3.8 0-.4.1-.7.4-1 .3-.3.7-.5 1.2-.5h2c.4 0 .8.2 1 .5l1.2 2.8c.2.4.1.9-.2 1.2l-.9.9c-.3.3-.3.8 0 1.1 1 1.1 2.2 2.1 3.3 3.1.3.3.8.3 1.1 0l.9-.9c.3-.3.8-.4 1.2-.2l2.8 1.2c.3.2.5.6.5 1v2c0 .5-.2.9-.5 1.2-.3.3-.7.4-1.1.4z" />
        </motion.svg>
        <span className="absolute right-16 bg-[#12151c] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-white/10">
          Call Us Now
        </span>
      </motion.a>
    </div>
  );
}
