import { Link } from "react-router-dom";
import { Droplets, Leaf, MapPin } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import roseImg from "@/assets/rose-geranium.jpg";
import castorImg from "@/assets/castor-oil.jpg";
import lemongrassImg from "@/assets/lemongrass.jpg";

const products = [
  { name: "Rose Geranium Oil", desc: "Balancing & aromatic — perfect for skincare and relaxation.", img: roseImg },
  { name: "Castor Oil", desc: "Nourishing carrier oil for hair care and deep hydration.", img: castorImg },
  { name: "Lemon Grass Oil", desc: "Refreshing and energising — ideal for cleaning and aromatherapy.", img: lemongrassImg },
];

const whyItems = [
  { icon: <Leaf size={28} />, title: "Natural Sourcing", desc: "Botanicals grown in South Africa's rich soils." },
  { icon: <Droplets size={28} />, title: "Small Batch", desc: "Artisanal production for uncompromised purity." },
  { icon: <MapPin size={28} />, title: "South African Origin", desc: "Proudly made in South Africa." },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="South African botanical fields" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          <span className="gradient-text">NOMARU</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up-delay-1">
          Pure Essential Oils from Nature.
        </p>
        <Link to="/products" className="btn-primary inline-block animate-fade-up-delay-2">
          Explore Products
        </Link>
      </div>
    </section>

    {/* Product Highlights */}
    <section className="section-padding max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-14">
          Our <span className="gradient-text">Essential Oils</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <ScrollReveal key={p.name} className={`delay-${i}`}>
            <GlassCard className="text-center">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover rounded-xl mb-5" loading="lazy" />
              <h3 className="font-display text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Why NOMARU */}
    <section className="section-padding max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-14">
          Why <span className="gradient-text">NOMARU</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {whyItems.map((item) => (
          <ScrollReveal key={item.title}>
            <GlassCard className="text-center">
              <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Made in SA */}
    <section className="section-padding">
      <ScrollReveal>
        <div className="glass-panel max-w-3xl mx-auto p-10 text-center">
          <MapPin size={36} className="text-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Made in South Africa</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Every drop of NOMARU oil is distilled from botanicals grown in the heart of South Africa, 
            supporting local agriculture and sustainable farming practices.
          </p>
        </div>
      </ScrollReveal>
    </section>
  </main>
);

export default Index;
