import { ShieldCheck, Sprout, Leaf, Heart } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Safety First", description: "No summit is worth risking a life." },
  { icon: Sprout, title: "Growth Mindset", description: "Progress is the goal, perfection is not." },
  { icon: Leaf, title: "Respect for Nature", description: "We leave the mountain better than we found it." },
  { icon: Heart, title: "Empowerment", description: "Whether you're a beginner or a seasoned hiker, you belong here." },
];

const Values = () => (
  <section id="values" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-6">
        <span className="text-gradient-gold text-sm font-heading font-bold tracking-[0.2em] uppercase mb-3 block">Purpose</span>
        <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-4 tracking-wider uppercase">
          Our Mission
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          To elevate people physically and mentally by combining structured, intelligent training with empowering adventure experiences in the natural world.
        </p>
      </div>

      <h3 className="font-heading text-2xl font-bold text-foreground text-center mt-12 mb-8 tracking-wider uppercase">
        Our Values
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="glass-card glow-border glow-border-hover p-6 text-center transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 border border-gold/20">
              <Icon className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-heading text-sm font-bold text-accent mb-2 tracking-wider uppercase">{title}</h4>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Values;
