import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import carFusca from "@/assets/car-fusca.png";
import carTruck from "@/assets/car-truck.png";
import carOpala from "@/assets/car-opala.png";
import carKombi from "@/assets/car-kombi.png";
import carPickup from "@/assets/car-pickup.png";
import carSports from "@/assets/car-sports.png";
import carCompact from "@/assets/car-compact.png";
import carKids from "@/assets/car-kids.png";

const products = [
  { name: "Molde de Fusca", image: carFusca },
  { name: "Molde de Caminhão", image: carTruck },
  { name: "Molde de Opala Clássico", image: carOpala },
  { name: "Molde de Kombi", image: carKombi },
  { name: "Molde de Pickup", image: carPickup },
  { name: "Molde de Carro Esportivo", image: carSports },
  { name: "Molde de Carrinho Compacto", image: carCompact },
  { name: "Molde de Carrinho Infantil", image: carKids },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Moldes de Carrinhos Criados para{" "}
          <span className="text-accent">Cortar Rápido</span> e Terminar no Mesmo Dia
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Deslize para ver todos os modelos inclusos
        </motion.p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-64 snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="glass-card p-4 rounded-xl h-full hover:border-accent/50 transition-colors group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted/30">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    em Madeira
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
