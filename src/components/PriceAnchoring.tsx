import { motion } from "framer-motion";
import { Package } from "lucide-react";

const items = [
  { name: "Pack Principal — 100+ Moldes de Carrinhos de Madeira (PDF)", price: "R$ 67,90" },
  { name: "5 Moldes de Aviões em Madeira", price: "R$ 12,00" },
  { name: "5 Moldes de Motos em Madeira", price: "R$ 12,00" },
  { name: "Kit Animais Fáceis para Iniciantes", price: "R$ 12,00" },
  { name: "Kit de Moldes de Barcos Decorativos", price: "R$ 12,00" },
];

const PriceAnchoring = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Veja tudo o que você vai receber nos{" "}
          <span className="text-accent">Carrinhos Express</span>
        </motion.h2>

        <div className="space-y-3 mb-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl p-4 flex items-center justify-between gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          className="glass-card rounded-xl p-5 border-accent/30 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-lg text-muted-foreground">
            Valor total:{" "}
            <span className="line-through font-semibold">R$ 115,90</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-accent">
            MAS HOJE VOCÊ NÃO PAGA ISSO
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            Você pode ter todos os moldes + todos os bônus, com acesso imediato e vitalício por…
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceAnchoring;
