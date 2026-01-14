import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Comece hoje e termine seu{" "}
          <span className="text-accent">primeiro carrinho</span> ainda hoje
        </motion.h2>

        <motion.p 
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mais de 100 moldes prontos para você começar agora mesmo
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" variant="secondary" className="px-8" onClick={scrollToOffers}>
            QUERO FAZER MEU CARRINHO HOJE
          </Button>
          <Button size="lg" variant="cta" className="px-8" onClick={scrollToOffers}>
            QUERO O PLANO COMPLETO
          </Button>
        </motion.div>

        <motion.p 
          className="text-xs text-muted-foreground mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Acesso imediato • Arquivos em PDF • Use no mesmo dia
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
