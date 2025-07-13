import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Heart, Globe, Target, Sparkles } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      icon: TrendingUp,
      title: "Fail Fast, Learn Faster",
      description:
        "We embrace failure as a teacher. Each business attempt teaches us valuable lessons about markets, customers, and execution.",
    },
    {
      icon: Zap,
      title: "Tech-Driven Solutions",
      description:
        "We leverage our technical expertise to build innovative solutions that solve real problems and create genuine value.",
    },
    {
      icon: Heart,
      title: "Impact Over Profit",
      description:
        "While profit matters, we're driven by the desire to create something meaningful that positively impacts people's lives.",
    },
    {
      icon: Globe,
      title: "Think Global, Start Local",
      description:
        "From our Hyderabad roots, we aim to build solutions that can scale globally while staying true to our values.",
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
            <Target className="w-4 h-4" />
            <span>Our Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We might not have traditional business backgrounds, but we have
            something unique - a fresh perspective, technical skills, and the
            determination to learn through doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <principle.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden group">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  The 25 Business Challenge
                </h3>
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our ambitious goal is to explore 25 different business models
                over the coming years. Not all will succeed, but each will teach
                us something valuable about entrepreneurship, markets, and
                building sustainable businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {[
                  "SaaS Products",
                  "E-commerce",
                  "Digital Services",
                  "Tech Consulting",
                  "And 21 More...",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full border border-accent/30 hover:bg-accent/30 transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
