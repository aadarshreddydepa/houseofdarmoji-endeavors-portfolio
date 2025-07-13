import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";

const supportEmail = "support@houseofdarmoji.com";

const ContactSection = () => {
  // Helper to open mail client
  const openMail = () => {
    window.location.href = `mailto:${supportEmail}`;
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-transparent to-accent/5"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
            <Send className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join our journey or have an exciting opportunity? We'd love
            to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              {/* Email Us Card */}
              <Card
                className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={openMail}
                tabIndex={0}
                role="button"
                aria-label="Email Us"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                        Email Us
                      </h4>
                      <p className="text-muted-foreground">
                        support@houseofdarmoji.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Let's Chat Card */}
              <Card
                className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={openMail}
                tabIndex={0}
                role="button"
                aria-label="Let's Chat"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                        Let's Chat
                      </h4>
                      <p className="text-muted-foreground">
                        Always open for collaboration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Based In Card (not clickable) */}
              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                        Based In
                      </h4>
                      <p className="text-muted-foreground">Hyderabad, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in">
            <Card className="glass-card h-full group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 flex flex-col justify-center h-full relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                      Ready to Build Together?
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're looking for technical expertise, want to
                      collaborate on a project, or just curious about our
                      journey - we're always excited to connect with fellow
                      entrepreneurs and innovators.
                    </p>

                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "Partnership Opportunities",
                        "Technical Consulting",
                        "Business Collaboration",
                        "Just Say Hello!",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 group/item hover:text-accent transition-colors duration-300"
                        >
                          <div className="p-1 bg-accent/10 rounded-full group-hover/item:bg-accent/20 transition-colors duration-300">
                            <ArrowRight className="w-3 h-3 text-accent" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    className="relative overflow-hidden w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-foreground font-semibold transition-all duration-300 hover:scale-105 group-hover:shadow-xl"
                    onClick={openMail}
                  >
                    <span className="relative z-10 flex items-center">
                      Start a Conversation
                      <MessageCircle className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
