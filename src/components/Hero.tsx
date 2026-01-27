import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, TreePine, Scissors, CheckCircle } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.webp";

const Hero = () => {
  const bullets = [
    { icon: Clock, text: "Projetos pensados para quem tem pouco tempo" },
    { icon: TreePine, text: "Moldes prontos para imprimir e cortar" },
    { icon: Scissors, text: "Menos peças, menos cortes, menos etapas" },
    { icon: CheckCircle, text: "Ideal para iniciantes e hobbistas ocupados" },
  ];

  const today = new Date().toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  });

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Top ribbon */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground py-2 text-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold tracking-wide">
          🔥 OFERTA VÁLIDA SOMENTE HOJE ({today})
        </p>
      </motion.div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-background to-background" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "100%",
              opacity: 0 
            }}
            animate={{ 
              y: "-100%",
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-8">
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Comece e termine seu projeto ainda hoje —{" "}
          <span className="text-accent">finalize seus carrinhos prontos em 60 minutos</span> ou menos!
        </motion.h1>

        {/* Product mockup */}
        <motion.div 
          className="relative my-8 mx-auto max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={heroMockup}
            alt="Carrinhos de Madeira Prontos em 60 Minutos - Mockup do produto"
            className="w-full h-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <motion.p 
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Um pack com mais de 100 moldes de carrinhos de madeira prontos pra imprimir e colar, 
          criados com o método <span className="text-accent font-semibold">Corte Express™</span>, 
          onde cada modelo é pensado para reduzir peças, eliminar etapas demoradas e permitir 
          que você comece e termine no mesmo dia.
        </motion.p>

        {/* Bullet points */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {bullets.map((bullet, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 glass-card-subtle px-4 py-3 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <bullet.icon className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-foreground">{bullet.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            variant="cta" 
            className="w-full sm:w-auto text-base px-10 py-7"
            onClick={scrollToOffers}
          >
            QUERO FAZER MEU CARRINHO HOJE
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Acesso imediato • Arquivos em PDF • Use no mesmo dia
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
