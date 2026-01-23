import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import UpsellModal from "./UpsellModal";

const plans = [
  {
    name: "Plano Inicial",
    price: "R$10",
    popular: false,
    features: [
      "Acesso aos moldes básicos",
      "PDF pronto para imprimir",
      "Suporte por email",
    ],
    cta: "QUERO COMEÇAR AGORA",
    checkoutUrl: "https://pay.lowify.com.br/checkout?product_id=4ITQCy",
  },
  {
    name: "Plano Completo",
    price: "R$27",
    popular: true,
    features: [
      "Todos os 100+ moldes de carrinhos",
      "Projetos variados de carrinhos",
      "Arquivos prontos para imprimir e colar direto na madeira",
      "5 Modelos de Aviões",
      "5 Modelos de Motos",
      "Kit Animais Fáceis",
      "Kit de Moldes de Barcos",
      "Atualizações futuras grátis",
      "Suporte Prioritário",
      "Garantia",
      "Acesso vitalício",
    ],
    cta: "QUERO O PLANO COMPLETO",
    checkoutUrl: "https://pay.cakto.com.br/3dxhdxb_738297",
  },
];

const Pricing = () => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  return (
    <section id="ofertas" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Escolha seu <span className="text-accent">plano</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Comece hoje e receba acesso imediato aos moldes
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 rounded-2xl relative ${
                plan.popular ? "border-accent/50 ring-2 ring-accent/20" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Mais escolhido
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/único</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <Button 
                  variant="cta" 
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              ) : (
                <Button 
                  variant="secondary" 
                  className="w-full"
                  size="lg"
                  onClick={() => setIsUpsellOpen(true)}
                >
                  {plan.cta}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <UpsellModal isOpen={isUpsellOpen} onClose={() => setIsUpsellOpen(false)} />
    </section>
  );
};

export default Pricing;
