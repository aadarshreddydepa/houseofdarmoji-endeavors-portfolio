import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Linkedin,
  Mail,
  Code,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-transparent to-accent/5"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
            <Users className="w-4 h-4" />
            <span>The Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="gradient-text">Dreamers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two cousins united by technology, driven by ambition, and ready to
            conquer the business world one venture at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vineeth - Full Stack Engineer */}
          <Card className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-24 h-24 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-12 h-12 text-accent" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  Vineeth Reddy Kancharakuntla
                </h3>
                <p className="text-accent font-semibold mb-4">
                  Co-Founder & Full Stack Engineer
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
                    3+ Years Experience
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
                    Full Stack
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
                    Tech Lead
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Seasoned full-stack engineer with 3 years of industry
                  experience. Passionate about building scalable solutions and
                  now channeling technical expertise into business innovation.
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/kancharakuntlavineethreddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 cursor-pointer group-hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                  <a
                    href="mailto:vineeth.reddy@houseofdarmoji.com"
                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 cursor-pointer group-hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cousin - CSE Student */}
          <Card className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-24 h-24 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-12 h-12 text-accent" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  Partner in Innovation
                </h3>
                <p className="text-accent font-semibold mb-4">
                  Co-Founder & Tech Enthusiast
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
                    CSE Final Year
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
                    Tech Savvy
                  </Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors">
                    Future Ready
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Final year Computer Science student with a fresh perspective
                  on technology and business. Brings academic knowledge,
                  youthful energy, and innovative thinking to our
                  entrepreneurial journey.
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/aadarsh-reddy-depa-19b88722b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 cursor-pointer group-hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                  <a
                    href="mailto:aadarsh.reddy@houseofdarmoji.com"
                    className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors duration-300 cursor-pointer group-hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Perfect Synergy</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Together, we combine industry experience with fresh academic
            insights, creating a unique blend of practical knowledge and
            innovative thinking that drives our entrepreneurial adventures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
