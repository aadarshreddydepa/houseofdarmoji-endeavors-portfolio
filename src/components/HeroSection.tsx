import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Sparkles } from "lucide-react";

const HeroSection = () => {
  // Scroll to a section by id
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(256_35%_55%_0.1),transparent_50%)]"></div>

      {/* Floating decorative elements (removed left bubble) */}
      {/* <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-full floating-element opacity-60"></div> */}
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/20 rounded-full floating-element opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border border-accent/15 rounded-full floating-element opacity-40"></div>
      <div className="absolute bottom-1/3 left-20 w-8 h-8 border border-accent/15 rounded-full floating-element opacity-40"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(256 35% 55%) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="animate-fade-in">
          {/* Logo with no background or border, just the image */}
          <div className="relative mb-8 flex justify-center">
            <img
              src="/lovable-uploads/4c8e65b3-ad9d-45d2-a2f0-cf330061a3aa.png"
              alt="House of Darmoji Logo"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Enhanced title with gradient and sparkle effect */}
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">House of</span>
              <br />
              <span className="gradient-text">Darmoji</span>
            </h1>
          </div>

          {/* Enhanced subtitle with shimmer effect */}
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Two passionate technologists from Hyderabad on a mission to
              explore
              <span className="text-accent font-semibold relative">
                {" "}
                25 different businesses
                <div className="absolute inset-0 shimmer rounded"></div>
              </span>{" "}
              and learn the art of entrepreneurship
            </p>
          </div>

          {/* Enhanced feature badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group">
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Tech-First Entrepreneurs</span>
            </div>
            <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group">
              <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">25 Business Challenge</span>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-foreground font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              onClick={() => scrollToSection("about")}
            >
              <span className="relative z-10 flex items-center">
                Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden border-2 border-accent/30 text-accent hover:bg-accent hover:text-foreground px-8 py-4 transition-all duration-300 hover:scale-105 group glass-card"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements with better positioning */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/10 rounded-full floating-element opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent/10 rounded-full floating-element opacity-30"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
