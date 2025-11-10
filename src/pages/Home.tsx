import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-bg.jpg";
import wedding1 from "@/assets/portfolio-wedding-1.jpg";
import wedding2 from "@/assets/portfolio-wedding-2.jpg";
import portrait1 from "@/assets/portfolio-portrait-1.jpg";
import portrait2 from "@/assets/portfolio-portrait-2.jpg";
import event1 from "@/assets/portfolio-event-1.jpg";

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

      {/* 3Frames RewindMoments - Highlights Carousel */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground text-shadow-gold">
              3Frames RewindMoments
            </h2>
            <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
              Capturing the essence of every moment, one frame at a time
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={wedding1}
                    alt="Wedding Highlight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-3xl font-poppins font-bold text-foreground mb-2">Timeless Weddings</h3>
                      <p className="text-lg text-muted-foreground">Every love story deserves to be told beautifully</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={portrait1}
                    alt="Portrait Highlight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-3xl font-poppins font-bold text-foreground mb-2">Expressive Portraits</h3>
                      <p className="text-lg text-muted-foreground">Revealing the soul behind every smile</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={event1}
                    alt="Event Highlight"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-3xl font-poppins font-bold text-foreground mb-2">Memorable Events</h3>
                      <p className="text-lg text-muted-foreground">Preserving the energy of your special moments</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={wedding2}
                    alt="Wedding Highlight 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-3xl font-poppins font-bold text-foreground mb-2">Elegant Celebrations</h3>
                      <p className="text-lg text-muted-foreground">Where elegance meets emotion</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={portrait2}
                    alt="Portrait Highlight 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-3xl font-poppins font-bold text-foreground mb-2">Creative Vision</h3>
                      <p className="text-lg text-muted-foreground">Artistry in every frame</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
              A glimpse into our most cherished projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg h-[500px] hover-lift">
              <img
                src={heroImage}
                alt="Featured work"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-primary font-poppins text-sm mb-2">Wedding Photography</p>
                  <h3 className="text-foreground font-poppins font-semibold text-2xl mb-2">Sarah & Michael's Wedding</h3>
                  <p className="text-foreground/80 font-lora">A beautiful celebration of love at sunset</p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-8">
              <div className="group relative overflow-hidden rounded-lg hover-lift">
                <img
                  src={heroImage}
                  alt="Featured work"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-primary font-poppins text-sm mb-1">Portrait Session</p>
                    <h3 className="text-foreground font-poppins font-semibold text-lg">Executive Portraits</h3>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg hover-lift">
                <img
                  src={heroImage}
                  alt="Featured work"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-primary font-poppins text-sm mb-1">Product Photography</p>
                    <h3 className="text-foreground font-poppins font-semibold text-lg">Luxury Collection</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-poppins shadow-gold hover-lift">
                View Full Portfolio
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground font-lora">
              Real stories from real clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily & James",
                role: "Wedding Clients",
                text: "A-Studio captured our special day perfectly. Every moment, every emotion - they didn't miss a thing. The photos are absolutely stunning and we'll treasure them forever.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "Corporate Client",
                text: "Professional, creative, and incredibly talented. Our product photography exceeded all expectations. The team understood our brand vision perfectly.",
                rating: 5
              },
              {
                name: "Sarah Martinez",
                role: "Portrait Client",
                text: "I've never felt so comfortable in front of a camera. The portraits are not just beautiful - they captured who I really am. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground font-lora mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-poppins font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "15+", label: "Awards Won" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-lora">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Location */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground">
              Visit Our Studio
            </h2>
            <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
              Come and explore our creative space
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-card rounded-lg overflow-hidden shadow-subtle">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9793181711375!2d77.3410478!3d28.6129598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="p-8 bg-card">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">3Frames RewindMoments Studio</h3>
              <p className="text-muted-foreground font-lora mb-6">
                Visit us at our creative studio where we bring your vision to life. Schedule an appointment to discuss your photography needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Noida+Uttar+Pradesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="w-full sm:w-auto shadow-gold">
                    Get Directions
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto border-primary hover:bg-primary/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-foreground text-shadow-gold">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-muted-foreground font-lora mb-10 max-w-2xl mx-auto">
            Let's create something beautiful together. Get in touch to discuss your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-poppins shadow-gold hover-lift">
                Book a Session
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-poppins hover-lift">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
