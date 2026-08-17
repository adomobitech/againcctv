import { testimonials } from "@/data/siteData";
import { Icon } from "./Icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-7 shadow-sm border border-gray-100 relative"
            >
              <Icon name="quote" className="w-7 h-7 text-gold/40 mb-3" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy text-gold font-bold text-sm flex items-center justify-center">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
