import { motion } from "framer-motion";
import { Gift, Plane, Bike, PawPrint, Ship } from "lucide-react";

const bonuses = [
  { icon: Plane, title: "5 Modelos de Aviões", subtitle: "em Madeira" },
  { icon: Bike, title: "5 Modelos de Motos", subtitle: "em Madeira" },
  { icon: PawPrint, title: "Kit Animais Fáceis", subtitle: "para Tico-Tico" },
  { icon: Ship, title: "Kit de Moldes de Barcos", subtitle: "em Madeira" },
];

const Bonuses = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Gift className="w-6 h-6 text-accent" />
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Bônus Exclusivos
          </span>
        </motion.div>

        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Além dos carrinhos, você recebe{" "}
          <span className="text-accent">outros moldes</span> para variar seus projetos
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className="glass-card p-5 rounded-xl text-center group hover:border-accent/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                <bonus.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {bonus.title}
              </h3>
              <p className="text-xs text-muted-foreground">{bonus.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-muted-foreground text-sm mt-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Todos os bônus seguem a mesma lógica: moldes simples, prontos para usar 
          e sem projetos demorados.
        </motion.p>
      </div>
    </section>
  );
};

export default Bonuses;
