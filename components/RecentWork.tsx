import { Icon } from "./Icons";

const installations = [
  { icon: "cctv", label: "Office Entrance Setup" },
  { icon: "nvr", label: "Control Room NVR" },
  { icon: "ptz", label: "Warehouse PTZ" },
  { icon: "dome", label: "Society Dome Camera" },
  { icon: "bullet", label: "Perimeter Bullet Cam" },
  { icon: "network", label: "Multi-Screen Monitoring" },
];

export default function RecentWork() {
  return (
    <section id="work" className="bg-navy py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">OUR WORK</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Our Recent Installations
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {installations.map((item) => (
            <div
              key={item.label}
              className="aspect-square rounded-lg bg-navy-2 border border-white/10 flex flex-col items-center justify-center gap-3 hover:border-gold/60 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Icon name={item.icon} className="w-7 h-7 text-gold" />
              </div>
              <span className="text-[11px] text-gray-300 text-center px-3 leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-6 py-3 rounded"
          >
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
