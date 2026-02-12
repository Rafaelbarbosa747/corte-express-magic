import { motion } from "framer-motion";
import { Clock, RefreshCw, Wrench, DollarSign, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    text: "Você para de perder horas desenhando e medindo antes mesmo de ligar a serra",
  },
  {
    icon: RefreshCw,
    text: "Menos desperdício de madeira, menos frustração e menos retrabalho",
  },
  {
    icon: Wrench,
    text: "Qualquer iniciante consegue executar, mesmo sem experiência com projetos detalhados",
  },
  {
    icon: DollarSign,
    text: "Mais peças finalizadas = mais oportunidades de venda",
  },
  {
    icon: CheckCircle,
    text: "Carrinhos prontos no mesmo dia, não semanas depois",
  },
];

const PracticalBenefits = () => {
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
          O que muda na prática{" "}
          <span className="text-accent">na sua marcenaria</span>
        </motion.h2>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 glass-card p-4 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalBenefits;
