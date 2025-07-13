import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-accent/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="relative">
                <img
                  src="/lovable-uploads/4c8e65b3-ad9d-45d2-a2f0-cf330061a3aa.png"
                  alt="House of Darmoji"
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                HouseofDarmoji
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "philosophy", label: "Philosophy" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="relative overflow-hidden bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-foreground font-semibold px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-foreground hover:bg-accent/10 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-accent/20 animate-fade-in">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "philosophy", label: "Philosophy" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-muted-foreground hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/5"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-foreground font-semibold mt-4"
              >
                Contact
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
