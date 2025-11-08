import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, User, Briefcase, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture every precious moment of your special day with our comprehensive wedding photography services. From intimate ceremonies to grand celebrations, we document your love story with artistry and care.",
      features: [
        "Full-day coverage",
        "Pre-wedding consultation",
        "Engagement photo session",
        "High-resolution edited images",
        "Custom photo album",
        "Online gallery"
      ],
      price: "Starting from $2,500"
    },
    {
      icon: User,
      title: "Portrait Sessions",
      description: "Whether it's professional headshots, family portraits, or personal branding photos, we create stunning images that capture your unique personality and style.",
      features: [
        "1-2 hour studio or location shoot",
        "Professional styling guidance",
        "Multiple outfit changes",
        "Retouched high-res images",
        "Print-ready files",
        "Social media optimized versions"
      ],
      price: "Starting from $500"
    },
    {
      icon: Briefcase,
      title: "Commercial Shoots",
      description: "Elevate your brand with professional commercial photography. From product shots to corporate events, we deliver high-quality images that drive results.",
      features: [
        "Product photography",
        "Corporate events",
        "Real estate photography",
        "Food & lifestyle",
        "Brand storytelling",
        "Commercial licensing"
      ],
      price: "Starting from $1,000"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-foreground text-shadow-gold">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            Professional photography services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-lora mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground font-lora">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-lg font-poppins font-semibold text-primary mb-6">
                  {service.price}
                </div>

                {/* CTA Button */}
                <Link to="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-poppins group/btn">
                    Book Now
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-poppins font-bold mb-6 text-foreground">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground font-lora mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect photography solution for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-poppins shadow-gold hover-lift">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
