"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icons";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Benefits of Installing IP CCTV Cameras for Home Security",
    date: "August 2026",
    category: "Surveillance",
    desc: "Discover how high-definition IP cameras, night vision, and smart motion detection keep your family and property safe 24/7.",
    icon: "camera",
  },
  {
    id: 2,
    title: "Why Biometric Access Control is Essential for Modern Offices",
    date: "August 2026",
    category: "Networking",
    desc: "Upgrade your corporate workspace security with advanced biometric and RFID access controls to prevent unauthorized entry.",
    icon: "access",
  },
  {
    id: 3,
    title: "Essential CCTV Maintenance Tips to Extend Camera Lifespan",
    date: "July 2026",
    category: "Maintenance",
    desc: "Learn expert tips on lens cleaning, cable checks, and NVR storage optimization to ensure your security system never fails.",
    icon: "gear",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } },
};

export default function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16 lg:py-24 border-t border-gray-200">
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
            SECURITY INSIGHTS & TIPS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#12151c] mt-2">
            Latest News & Articles
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Stay updated with expert security advice, technology trends, and smart networking guides from B.S. CCTV Networking Solution.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0px 20px 30px rgba(0,0,0,0.08)" }}
              key={post.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between transition-all group shadow-sm"
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-500/10 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                </div>

                <h3 className="text-lg font-extrabold text-[#12151c] group-hover:text-orange-500 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {post.desc}
                </p>
              </div>

              <div className="px-7 pb-7 pt-0 flex items-center justify-between border-t border-gray-100 mt-auto pt-4">
                <span className="text-xs font-bold text-[#12151c] group-hover:text-orange-500 transition-colors flex items-center gap-1 cursor-pointer">
                  Read Full Article →
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Icon name={post.icon} className="w-5 h-5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}