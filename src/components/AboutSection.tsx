import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Code,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Tech to <span className="gradient-text">Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not your typical Marwadi or Gujarati business family. We're
            pakka Hyderabadi small-town boys trying to make it big in the
            business ecosystem through pure determination and our tech
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <span className="text-lg font-semibold gradient-text">
                Hyderabad, India
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We might not have generations of business wisdom in our blood,
                but we have something equally powerful - the hunger to learn and
                the technical skills to build solutions that matter.
              </p>
              <p>
                Starting with zero business experience, we've decided to take on
                an ambitious challenge: explore 25 different business models,
                fail fast, learn faster, and eventually build something that
                creates real value and impact.
              </p>
              <p>
                Every failure teaches us something new about markets, customers,
                and the art of building sustainable businesses. We're not just
                coding our way to success - we're learning to think like
                entrepreneurs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            <Card className="glass-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-accent/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  Tech Excellence
                </h4>
                <p className="text-sm text-muted-foreground">
                  Deep technical expertise in full-stack development and modern
                  technologies
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-accent/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  Innovation Mindset
                </h4>
                <p className="text-sm text-muted-foreground">
                  Always looking for creative solutions and new ways to solve
                  problems
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-105 transition-transform duration-300 sm:col-span-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-accent/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  25 Business Challenge
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our ambitious goal to explore diverse business models and
                  learn entrepreneurship through execution
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">25</div>
            <div className="text-muted-foreground">
              Business Models to Explore
            </div>
          </div>
          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">2</div>
            <div className="text-muted-foreground">
              Passionate Technologists
            </div>
          </div>
          <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <div className="text-muted-foreground">Learning Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
