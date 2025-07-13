import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Code, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Tech to <span className="text-accent">Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not your typical Marwadi or Gujarati business family. We're pakka Hyderabadi 
            small-town boys trying to make it big in the business ecosystem through pure 
            determination and our tech expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold text-accent">Hyderabad, India</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We might not have generations of business wisdom in our blood, but we have 
              something equally powerful - the hunger to learn and the technical skills to 
              build solutions that matter.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Starting with zero business experience, we've decided to take on an ambitious 
              challenge: explore 25 different business models, fail fast, learn faster, 
              and eventually build something that creates real value and impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every failure teaches us something new about markets, customers, and the 
              art of building sustainable businesses. We're not just coding our way to 
              success - we're learning to think like entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Tech Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Deep technical expertise in full-stack development and modern technologies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Innovation Mindset</h4>
                <p className="text-sm text-muted-foreground">
                  Always looking for creative solutions and new ways to solve problems
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 sm:col-span-2">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">25 Business Challenge</h4>
                <p className="text-sm text-muted-foreground">
                  Our ambitious goal to explore diverse business models and learn entrepreneurship through execution
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;