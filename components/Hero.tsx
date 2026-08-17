import { heroFeatures } from "@/data/siteData";
import { Icon } from "./Icons";
import CameraIllustration from "./CameraIllustration";

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy overflow-hidden">
      {/* background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(242,183,5,0.15), transparent 45%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-20">
        <div>
          <span className="inline-block bg-gold/90 text-navy text-xs font-bold tracking-wide px-3 py-1 rounded mb-5">
            YOUR SAFETY, OUR PRIORITY
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            SECURING WHAT
            <br />
            MATTERS <span className="text-gold">MOST</span>
          </h1>
          <p className="text-gray-300 max-w-md mb-8">
            Advanced CCTV Solutions for Homes, Offices & Industries.
            <br />
            High Quality | Best Pricing | Expert Installation
          </p>
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <a
              href="#services"
              className="bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-6 py-3 rounded flex items-center gap-2"
            >
              Explore Services →
            </a>
            <a href="#work" className="flex items-center gap-3 text-white font-semibold text-sm group">
              <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                ▶
              </span>
              Watch Video
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heroFeatures.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-white">
                <Icon name={f.icon} className="w-6 h-6 text-gold shrink-0" />
                <span className="text-xs font-medium leading-tight">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <CameraIllustration className="w-full max-w-xl relative drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
