import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <img 
            src="/lovable-uploads/4c8e65b3-ad9d-45d2-a2f0-cf330061a3aa.png" 
            alt="House of Darmoji Logo" 
            className="w-32 h-32 mx-auto mb-8 animate-glow"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">House of</span>
            <br />
            <span className="text-accent animate-glow">Darmoji</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Two passionate technologists from Hyderabad on a mission to explore 
            <span className="text-accent font-semibold"> 25 different businesses</span> and 
            learn the art of entrepreneurship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span>Tech-First Entrepreneurs</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Rocket className="w-5 h-5" />
              <span>25 Business Challenge</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-foreground px-8 py-4 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse"></div>
    </section>
  );
};

export default HeroSection;