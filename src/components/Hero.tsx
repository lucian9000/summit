import { ArrowRight, Mountain } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

interface HeroProps {
  onOpenChat: () => void;
}

const Hero = ({ onOpenChat }: HeroProps) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Cape Town mountains at golden hour"
          className="w-full h-full object-cover animate-cinematic-pan"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/95" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8 backdrop-blur-sm">
          <Mountain className="w-4 h-4 text-accent" />
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Professional Mountain Guiding</span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-none tracking-wider uppercase">
          Ascend Your
          <br />
          <span className="text-gradient-cyan">Limits</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans">
          Professional Mountain Guiding & Elite Fitness Training
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("expeditions")}
            className="border-2 border-foreground/30 text-foreground hover:border-accent hover:text-accent px-8 py-4 rounded-lg font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300"
          >
            View Routes
          </button>
          <button
            onClick={onOpenChat}
            className="bg-accent hover:bg-[hsl(193,100%,42%)] text-accent-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm tracking-wider uppercase shadow-button transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
