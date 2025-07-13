import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Heart, Globe } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      icon: TrendingUp,
      title: "Fail Fast, Learn Faster",
      description: "We embrace failure as a teacher. Each business attempt teaches us valuable lessons about markets, customers, and execution."
    },
    {
      icon: Zap,
      title: "Tech-Driven Solutions",
      description: "We leverage our technical expertise to build innovative solutions that solve real problems and create genuine value."
    },
    {
      icon: Heart,
      title: "Impact Over Profit",
      description: "While profit matters, we're driven by the desire to create something meaningful that positively impacts people's lives."
    },
    {
      icon: Globe,
      title: "Think Global, Start Local",
      description: "From our Hyderabad roots, we aim to build solutions that can scale globally while staying true to our values."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Philosophy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We might not have traditional business backgrounds, but we have something unique - 
            a fresh perspective, technical skills, and the determination to learn through doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <principle.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-card/30 backdrop-blur border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The 25 Business Challenge</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our ambitious goal is to explore 25 different business models over the coming years. 
              Not all will succeed, but each will teach us something valuable about entrepreneurship, 
              markets, and building sustainable businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">SaaS Products</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">E-commerce</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">Digital Services</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">Tech Consulting</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">And 21 More...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;