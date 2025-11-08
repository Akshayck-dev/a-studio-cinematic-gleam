import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-parallax"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-foreground mb-6 animate-fade-in-up text-shadow-gold">
            Capturing Light, Life & Emotion
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-2xl font-lora animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Professional photography services that tell your story through the lens
          </p>
          <Link to="/portfolio">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-poppins font-semibold shadow-gold hover-lift animate-fade-in-up group"
              style={{ animationDelay: "0.4s" }}
            >
              View Portfolio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-foreground">
            What We Do Best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Weddings", description: "Timeless memories of your special day" },
              { title: "Portraits", description: "Capturing your unique personality" },
              { title: "Commercial", description: "Professional product & brand photography" },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-poppins font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-lora">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
