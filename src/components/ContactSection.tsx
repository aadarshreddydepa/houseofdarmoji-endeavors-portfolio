import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join our journey or have an exciting opportunity? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-muted-foreground">hello@houseofdarmoji.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Let's Chat</h4>
                      <p className="text-muted-foreground">Always open for collaboration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Based In</h4>
                      <p className="text-muted-foreground">Hyderabad, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in">
            <Card className="bg-card/30 backdrop-blur border-accent/20 h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold mb-6">Ready to Build Together?</h3>
                
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're looking for technical expertise, want to collaborate 
                    on a project, or just curious about our journey - we're always 
                    excited to connect with fellow entrepreneurs and innovators.
                  </p>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <span>Partnership Opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <span>Technical Consulting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <span>Business Collaboration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <span>Just Say Hello!</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold transition-all duration-300 hover:scale-105"
                >
                  Start a Conversation
                  <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;