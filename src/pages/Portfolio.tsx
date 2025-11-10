import { useState } from "react";
import * as React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import wedding1 from "@/assets/portfolio-wedding-1.jpg";
import wedding2 from "@/assets/portfolio-wedding-2.jpg";
import portrait1 from "@/assets/portfolio-portrait-1.jpg";
import portrait2 from "@/assets/portfolio-portrait-2.jpg";
import event1 from "@/assets/portfolio-event-1.jpg";
import product1 from "@/assets/portfolio-product-1.jpg";

const Portfolio = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Weddings", "Portraits", "Events", "Products"];

  const portfolioItems = [
    { id: 1, image: wedding1, category: "Weddings", title: "Wedding Ceremony" },
    { id: 2, image: wedding2, category: "Weddings", title: "Bridal Portrait" },
    { id: 3, image: portrait1, category: "Portraits", title: "Business Portrait" },
    { id: 4, image: portrait2, category: "Portraits", title: "Creative Portrait" },
    { id: 5, image: event1, category: "Events", title: "Corporate Event" },
    { id: 6, image: product1, category: "Products", title: "Luxury Product" },
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "Escape") setSelectedImageIndex(null);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 text-foreground text-shadow-gold">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground font-lora max-w-2xl mx-auto">
            A collection of our finest work, showcasing moments that matter
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-secondary border-b border-border sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-poppins transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-primary font-poppins text-sm mb-1">{item.category}</p>
                    <h3 className="text-foreground font-poppins font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-7xl max-h-[90vh] p-0 bg-background/95 border border-border overflow-hidden">
          {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
            <div className="relative flex items-center justify-center p-4">
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background text-foreground p-3 rounded-full border border-border hover:border-primary transition-all shadow-gold"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-center">
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
                <div className="mt-4">
                  <p className="text-primary font-poppins text-sm">{filteredItems[selectedImageIndex].category}</p>
                  <h3 className="text-foreground font-poppins font-semibold text-xl">{filteredItems[selectedImageIndex].title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {selectedImageIndex + 1} / {filteredItems.length}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background text-foreground p-3 rounded-full border border-border hover:border-primary transition-all shadow-gold"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
