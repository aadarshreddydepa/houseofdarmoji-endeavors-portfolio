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

      <footer className="relative overflow-hidden border-t border-accent/20 py-12 px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <img
                src="/lovable-uploads/4c8e65b3-ad9d-45d2-a2f0-cf330061a3aa.png"
                alt="House of Darmoji"
                className="relative w-8 h-8 rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-bold gradient-text">
              houseofdarmoji
            </span>
          </div>

          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            © 2025 House of Darmoji. Building the future, one business at a
            time.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="w-1 h-1 bg-accent/30 rounded-full"></span>
            <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
              Terms of Service
            </span>
            <span className="w-1 h-1 bg-accent/30 rounded-full"></span>
            <span className="hover:text-accent transition-colors duration-300 cursor-pointer">
              Contact
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
