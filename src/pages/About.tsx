import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Award, Heart } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-foreground text-shadow-gold">
            About 3Frames RewindMoments
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Where passion meets professionalism
          </p>
        </div>
      </section>

      {/* Main Content - Split Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait Image */}
            <div className="animate-fade-in-up">
              <img
                src={aboutImage}
                alt="Photographer portrait"
                className="w-full h-auto rounded-lg shadow-subtle"
              />
            </div>

            {/* Story Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-lora text-lg leading-relaxed">
                <p>
                  Founded in 2015, 3Frames RewindMoments has been dedicated to capturing the most precious moments 
                  of life through the art of photography. What started as a passion project has grown 
                  into a full-service photography studio serving clients worldwide.
                </p>
                <p>
                  Our approach combines technical excellence with artistic vision, ensuring that every 
                  photograph tells a unique story. We believe in creating timeless images that you'll 
                  treasure for generations to come.
                </p>
                <p>
                  With over a decade of experience and hundreds of satisfied clients, we've honed our 
                  craft to deliver exceptional results across weddings, portraits, events, and commercial 
                  photography.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Camera,
                title: "Excellence",
                description: "We strive for perfection in every shot, using state-of-the-art equipment and techniques."
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Photography isn't just our profession—it's our calling. We pour our hearts into every project."
              },
              {
                icon: Award,
                title: "Quality",
                description: "From composition to post-production, we maintain the highest standards in everything we do."
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-poppins font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-lora">
                  {value.description}
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

export default About;
