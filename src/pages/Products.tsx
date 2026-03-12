import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import roseImg from "@/assets/rose-geranium.jpg";
import castorImg from "@/assets/castor-oil.jpg";
import lemongrassImg from "@/assets/lemongrass.jpg";

const products = [
  {
    name: "Rose Geranium Oil",
    img: roseImg,
    desc: "Extracted from the fragrant Pelargonium graveolens plant, our Rose Geranium Oil offers a sweet, floral aroma that balances skin and mind.",
    benefits: ["Skin balancing & toning", "Aromatherapy relaxation", "Natural fragrance for blends"],
    uses: ["Facial serums & moisturisers", "Diffuser blends", "Natural perfumery"],
  },
  {
    name: "Castor Oil",
    img: castorImg,
    desc: "Cold-pressed from premium South African castor beans, this rich oil is prized for its nourishing and hydrating properties.",
    benefits: ["Deep hair conditioning", "Skin hydration & softening", "Versatile carrier oil"],
    uses: ["Hair masks & treatments", "Body oils & balms", "Carrier for essential oil blends"],
  },
  {
    name: "Lemon Grass Oil",
    img: lemongrassImg,
    desc: "Steam-distilled from fresh lemongrass, this invigorating oil brings a bright, citrusy energy to any application.",
    benefits: ["Refreshing, uplifting scent", "Natural cleaning agent", "Aromatherapy energiser"],
    uses: ["Household cleaners", "Energising diffuser blends", "Massage therapy"],
  },
];

const Products = () => (
  <main className="pt-28 pb-10">
    <section className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="gradient-text">Products</span>
        </h1>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Three carefully crafted essential oils, distilled from South Africa's finest botanical sources.
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-16">
        {products.map((p, i) => (
          <ScrollReveal key={p.name}>
            <GlassCard className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 p-0 overflow-hidden`}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full md:w-2/5 h-64 md:h-auto object-cover"
                loading="lazy"
              />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="font-display text-2xl font-semibold mb-3">{p.name}</h2>
                <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {p.benefits.map((b) => (
                        <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Typical Uses</h4>
                    <ul className="space-y-1">
                      {p.uses.map((u) => (
                        <li key={u} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>{u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </main>
);

export default Products;
