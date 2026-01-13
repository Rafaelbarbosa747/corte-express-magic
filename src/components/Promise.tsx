import { motion } from "framer-motion";
import { Download, Printer, Scissors } from "lucide-react";

const steps = [
  { icon: Download, label: "Baixar Moldes" },
  { icon: Printer, label: "Imprimir" },
  { icon: Scissors, label: "Colar na Madeira" },
];

const Promise = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Um carrinho de madeira pronto em{" "}
          <span className="text-accent">menos de 1 hora</span>, do começo ao fim
        </motion.h2>

        <motion.div 
          className="glass-card p-6 rounded-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-accent mb-4 text-center">
            Método Corte Express™
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📐</div>
              <p className="text-sm text-muted-foreground">Menos peças por projeto</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">✂️</div>
              <p className="text-sm text-muted-foreground">Menos cortes necessários</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🔧</div>
              <p className="text-sm text-muted-foreground">Encaixes simplificados</p>
            </div>
          </div>
        </motion.div>

        {/* Visual steps */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <motion.div 
                className="flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2 border border-accent/30">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{step.label}</span>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-12 h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Promise;
