import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

interface NavbarProps {
  onOpenChat: () => void;
}

const Navbar = ({ onOpenChat }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SummitFit Adventures" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-accent/30" />
          <div>
            <div className="font-heading font-bold text-foreground text-lg leading-tight tracking-wider uppercase">
              SummitFit
            </div>
            <div className="text-accent text-xs tracking-widest uppercase">
              Adventures
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["expeditions", "Routes"],
            ["about", "The Guide"],
            ["fitness", "Training"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-muted-foreground hover:text-accent transition-colors text-sm font-heading font-medium tracking-wider uppercase"
            >
              {label}
            </button>
          ))}
          <button
            onClick={onOpenChat}
            className="bg-accent hover:bg-[hsl(193,100%,42%)] text-accent-foreground px-5 py-2.5 rounded-lg font-heading font-bold text-xs tracking-wider uppercase shadow-button transition-all hover:scale-105"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {[
              ["expeditions", "Routes"],
              ["about", "The Guide"],
              ["fitness", "Training"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-muted-foreground hover:text-accent py-2 text-left font-heading font-medium tracking-wider uppercase text-sm"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenChat();
                setIsMobileOpen(false);
              }}
              className="bg-accent hover:bg-[hsl(193,100%,42%)] text-accent-foreground px-5 py-2.5 rounded-lg font-heading font-bold text-xs tracking-wider uppercase shadow-button mt-2"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
