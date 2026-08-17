import { footerLinks, siteInfo } from "@/data/siteData";
import { ContactIcon, SocialIcon } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-gray-300">
      {/* CTA strip */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-navy font-extrabold text-lg">
              Need Help Securing Your Property?
            </h3>
            <p className="text-navy/80 text-sm">
              Get a free site inspection and consultation today!
            </p>
          </div>
          <a
            href="#contact"
            className="bg-navy text-white font-bold text-sm px-6 py-3 rounded hover:bg-navy-2 transition-colors whitespace-nowrap"
          >
            Contact Us Now
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
              B
            </span>
            <span className="font-extrabold text-white">
              Best<span className="text-gold">CCTV</span>
              <span className="block text-[9px] tracking-[0.2em] text-gray-400">
                EXPERTS
              </span>
            </span>
          </a>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            We provide complete security solutions with best quality
            products and expert installation services.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon name="facebook" className="w-4 h-4 hover:text-gold cursor-pointer" />
            <SocialIcon name="twitter" className="w-4 h-4 hover:text-gold cursor-pointer" />
            <SocialIcon name="instagram" className="w-4 h-4 hover:text-gold cursor-pointer" />
            <SocialIcon name="youtube" className="w-4 h-4 hover:text-gold cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-gold transition-colors">
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
                <a href="#services" className="hover:text-gold transition-colors">
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
                <li key={c} className="hover:text-gold transition-colors cursor-default">
                  {c}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {footerLinks.citiesRight.map((c) => (
                <li key={c} className="hover:text-gold transition-colors cursor-default">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-10 grid sm:grid-cols-3 gap-6 text-sm border-t border-white/10 pt-8">
        <div className="flex items-start gap-3">
          <ContactIcon name="pin" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <span>{siteInfo.address}</span>
        </div>
        <div className="flex items-start gap-3">
          <ContactIcon name="phone" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <span>{siteInfo.phone}</span>
        </div>
        <div className="flex items-start gap-3">
          <ContactIcon name="mail" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <span>
            {siteInfo.email}
            <br />
            www.bestcctvexperts.com
          </span>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 px-6">
        <span>© 2024 Best CCTV Experts. All Rights Reserved.</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms & Conditions</a>
        </span>
      </div>
    </footer>
  );
}
