import { whyChooseUs } from "@/data/siteData";
import { Icon } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-14 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">WHY CHOOSE US</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {whyChooseUs.map((w) => (
            <div key={w.title} className="flex flex-col items-center text-center gap-3">
              <Icon name={w.icon} className="w-9 h-9 text-gold" />
              <h3 className="font-bold text-navy text-sm">{w.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
