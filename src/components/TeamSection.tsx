import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Code, GraduationCap } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="text-accent">Dreamers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two cousins united by technology, driven by ambition, and ready to 
            conquer the business world one venture at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vineeth - Full Stack Engineer */}
          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Vineeth Reddy Kancharakuntla</h3>
              <p className="text-accent font-semibold mb-4">Co-Founder & Full Stack Engineer</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <Badge variant="secondary" className="bg-accent/20 text-accent">3+ Years Experience</Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent">Full Stack</Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent">Tech Lead</Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Seasoned full-stack engineer with 3 years of industry experience. 
                Passionate about building scalable solutions and now channeling 
                technical expertise into business innovation.
              </p>
              
              <div className="flex justify-center gap-4">
                <Github className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              </div>
            </CardContent>
          </Card>

          {/* Cousin - CSE Student */}
          <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Partner in Innovation</h3>
              <p className="text-accent font-semibold mb-4">Co-Founder & Tech Enthusiast</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <Badge variant="secondary" className="bg-accent/20 text-accent">CSE Final Year</Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent">Tech Savvy</Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent">Future Ready</Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Final year Computer Science student with a fresh perspective on 
                technology and business. Brings academic knowledge, youthful energy, 
                and innovative thinking to our entrepreneurial journey.
              </p>
              
              <div className="flex justify-center gap-4">
                <Github className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Together, we combine industry experience with fresh academic insights, 
            creating a unique blend of practical knowledge and innovative thinking 
            that drives our entrepreneurial adventures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;