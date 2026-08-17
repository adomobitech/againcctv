import { navLinks, siteInfo } from "@/data/siteData";
import { ContactIcon, SocialIcon } from "./Icons";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex bg-navy text-gray-300 text-xs px-6 lg:px-10 py-2 items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <ContactIcon name="pin" className="w-3.5 h-3.5 text-gold" />
            {siteInfo.location}
          </span>
          <span className="flex items-center gap-1.5">
            <ContactIcon name="phone" className="w-3.5 h-3.5 text-gold" />
            {siteInfo.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <ContactIcon name="mail" className="w-3.5 h-3.5 text-gold" />
            {siteInfo.email}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>{siteInfo.hours}</span>
          <div className="flex items-center gap-3 text-gray-300">
            <SocialIcon name="facebook" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
            <SocialIcon name="twitter" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
            <SocialIcon name="instagram" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
            <SocialIcon name="youtube" className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white px-6 lg:px-10 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-lg">
            B
          </span>
          <span className="font-extrabold text-lg tracking-tight text-navy">
            Best<span className="text-gold">CCTV</span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-gray-500 -mt-1">
              EXPERTS
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-navy">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-5 py-2.5 rounded"
        >
          Get A Free Quote
        </a>
      </div>
    </header>
  );
}
