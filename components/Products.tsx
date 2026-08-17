import { products } from "@/data/siteData";
import { Icon } from "./Icons";

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-bold tracking-[0.2em] eyebrow">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">
            Top Quality CCTV Products
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-gold/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <Icon name={p.icon} className="w-8 h-8 text-gold group-hover:text-navy transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-gold">{p.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-2 transition-colors text-navy font-bold text-sm px-6 py-3 rounded"
          >
            View All Products →
          </a>
        </div>
      </div>
    </section>
  );
}
