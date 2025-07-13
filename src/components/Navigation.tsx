import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/4c8e65b3-ad9d-45d2-a2f0-cf330061a3aa.png" 
              alt="House of Darmoji" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">houseofdarmoji</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Philosophy
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-foreground"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-accent/20">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-muted-foreground hover:text-accent transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-muted-foreground hover:text-accent transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block w-full text-left text-muted-foreground hover:text-accent transition-colors py-2"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="block w-full text-left text-muted-foreground hover:text-accent transition-colors py-2"
            >
              Philosophy
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-accent hover:bg-accent/90 text-foreground"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;