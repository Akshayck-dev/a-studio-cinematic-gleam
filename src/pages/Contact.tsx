import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [mapKey, setMapKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Force map to reload when component mounts
  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-foreground text-shadow-gold">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Let's bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-poppins font-bold mb-6 text-foreground">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-poppins mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card border-border text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-poppins mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card border-border text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-poppins mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card border-border text-foreground min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-poppins shadow-gold hover-lift"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-poppins font-bold mb-6 text-foreground">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@3framesrewindmoments.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@3framesrewindmoments.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>

                  <div>
                    <h3 className="font-poppins font-semibold text-foreground mb-1">Location</h3>
                    <a 
                      href="https://www.google.com/maps/place/2nd+floor,+3Framesrewindmoments,+GNR+building,+Balaji+Layout,+Banaswadi,+Bengaluru,+Karnataka+560043/@13.0114005,77.6487783,15z/data=!4m6!3m5!1s0x3bae177dcbd1c0af:0x594c777e014ce62f!8m2!3d13.010412!4d77.6480357!16s%2Fg%2F11s0vj686c?g_ep=Eg1tbF8yMDI1MTEwM18wIOC7DCoASAJQAg%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      2nd Floor, 3Frames RewindMoments<br />
                      GNR Building, Balaji Layout<br />
                      Banaswadi, Bengaluru<br />
                      Karnataka 560043, India
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all hover-lift group"
                  >
                    <Instagram size={20} />
                    <span className="font-poppins">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all hover-lift group"
                  >
                    <MessageCircle size={20} />
                    <span className="font-poppins">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-poppins font-bold mb-6 text-center text-foreground">
              Find Us
            </h2>
            <div className="rounded-lg overflow-hidden shadow-subtle border border-border h-[450px] bg-card">
              <iframe
                key={`map-${mapKey}`}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.523497480062!2d77.6487783!3d13.0114005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177dcbd1c0af%3A0x594c777e014ce62f!2s3Framesrewindmoments!5e0!3m2!1sen!2sin!4v1762769604892!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="3Frames RewindMoments Location"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/place/2nd+floor,+3Framesrewindmoments,+GNR+building,+Balaji+Layout,+Banaswadi,+Bengaluru,+Karnataka+560043/@13.0114005,77.6487783,15z/data=!4m6!3m5!1s0x3bae177dcbd1c0af:0x594c777e014ce62f!8m2!3d13.010412!4d77.6480357!16s%2Fg%2F11s0vj686c?g_ep=Eg1tbF8yMDI1MTEwM18wIOC7DCoASAJQAg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-poppins text-sm"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
