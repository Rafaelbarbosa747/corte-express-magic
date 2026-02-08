import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import moldFerrari from "@/assets/mold-ferrari.webp";
import moldModelT from "@/assets/mold-model-t.webp";
import moldTruckParts from "@/assets/mold-truck-parts.webp";
import moldBus from "@/assets/mold-bus.webp";
import moldClassicCar from "@/assets/mold-classic-car.webp";
import moldSportsCar from "@/assets/mold-sports-car.webp";

const molds = [
  { image: moldFerrari, alt: "Molde PDF Ferrari 599 GTO com peças detalhadas" },
  { image: moldModelT, alt: "Molde PDF Model T Ford em tamanho real" },
  { image: moldTruckParts, alt: "Molde PDF de peças de caminhão com espessuras" },
  { image: moldBus, alt: "Molde PDF de ônibus com vistas direita e esquerda" },
  { image: moldClassicCar, alt: "Molde PDF carro clássico com rodas" },
  { image: moldSportsCar, alt: "Molde PDF carro esportivo Ferrari" },
];

const MoldShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate max index (showing 2 at a time, so max is length - 2)
  const maxIndex = Math.max(0, molds.length - 2);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < maxIndex;

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Veja uma amostra do que você vai receber
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-8 text-sm md:text-base max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Moldes prontos em PDF, no tamanho certo, só imprimir, colar e cortar.
        </motion.p>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center transition-all ${
              canScrollPrev 
                ? "opacity-100 hover:bg-accent/20 hover:border-accent/50" 
                : "opacity-30 cursor-not-allowed"
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center transition-all ${
              canScrollNext 
                ? "opacity-100 hover:bg-accent/20 hover:border-accent/50" 
                : "opacity-30 cursor-not-allowed"
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel viewport */}
          <div 
            ref={containerRef}
            className="overflow-hidden mx-8 md:mx-12"
          >
            <motion.div 
              className="flex gap-4"
              animate={{ x: `calc(-${currentIndex * 50}% - ${currentIndex * 8}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {molds.map((mold, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[calc(50%-8px)]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="glass-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/30 transition-colors">
                    <div className="aspect-[3/4] bg-white">
                      <img 
                        src={mold.image} 
                        alt={mold.alt}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-accent w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoldShowcase;
