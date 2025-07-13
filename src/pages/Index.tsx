import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="team">
          <TeamSection />
        </section>
        
        <section id="philosophy">
          <PhilosophySection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="border-t border-accent/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/4c8e65b3-ad9d-45d2-a2f0-cf330061a3aa.png" 
              alt="House of Darmoji" 
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold">houseofdarmoji</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 House of Darmoji. Building the future, one business at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
