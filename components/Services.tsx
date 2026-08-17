import { services } from "@/data/siteData";
import { Icon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            Complete Security Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-4">
                <Icon name={s.icon} className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
