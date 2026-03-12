import { Leaf, Droplets, Heart, Mail, MapPin } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";

const processSteps = [
  { icon: <Leaf size={24} />, title: "Plant Sourcing", desc: "We partner with local South African farmers who cultivate botanicals using sustainable, organic methods." },
  { icon: <Droplets size={24} />, title: "Distillation", desc: "Our small-batch steam distillation process preserves the full spectrum of natural compounds." },
  { icon: <Heart size={24} />, title: "Quality Control", desc: "Every batch is tested for purity and potency before it leaves our facility." },
];

const mission = [
  { title: "Purity", desc: "100% natural oils with no synthetic additives or fillers." },
  { title: "Sustainability", desc: "Eco-conscious farming and production practices at every step." },
  { title: "Wellness", desc: "Supporting holistic health through the power of nature." },
];

const About = () => (
  <main className="pt-28 pb-10">
    {/* About Section */}
    <section className="section-padding max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          About <span className="gradient-text">NOMARU</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          NOMARU is a small artisanal essential oil manufacturer based in South Africa. 
          We believe in the power of nature — sourcing botanicals from local farms and using 
          traditional extraction methods to create oils of exceptional purity. Every product 
          reflects our commitment to sustainability, quality, and the rich botanical heritage 
          of South Africa.
        </p>
      </ScrollReveal>
    </section>

    {/* Process */}
    <section className="section-padding max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl font-semibold text-center mb-12">
          Our <span className="gradient-text">Process</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {processSteps.map((s) => (
          <ScrollReveal key={s.title}>
            <GlassCard className="text-center">
              <div className="text-primary mb-4 flex justify-center">{s.icon}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl font-semibold text-center mb-12">
          Our <span className="gradient-text">Mission</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {mission.map((m) => (
          <ScrollReveal key={m.title}>
            <GlassCard className="text-center">
              <h3 className="font-display text-lg font-semibold mb-2 gradient-text">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Contact */}
    <section className="section-padding">
      <ScrollReveal>
        <div className="glass-panel max-w-2xl mx-auto p-10 text-center">
          <h2 className="font-display text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 justify-center"><Mail size={16} className="text-primary" /> info@nomaru.co.za</span>
            <span className="flex items-center gap-2 justify-center"><MapPin size={16} className="text-accent" /> South Africa</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </main>
);

export default About;
