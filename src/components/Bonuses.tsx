import { motion } from "framer-motion";
import { Gift, Plane, Bike, PawPrint, Ship } from "lucide-react";
import bonusAnimais from "@/assets/bonus-animais.webp";
import bonusBarcos from "@/assets/bonus-barcos.webp";
import bonusMotos from "@/assets/bonus-motos.webp";
import bonusAvioes from "@/assets/bonus-avioes.webp";

const bonuses = [
  {
    icon: PawPrint,
    title: "Kit Animais Fáceis",
    subtitle: "Moldes pensados pra execução rápida, mesmo pra quem está começando. Excelente pra fazer com crianças, vender como lembrança ou usar sobras pequenas.",
    image: bonusAnimais,
  },
  {
    icon: Ship,
    title: "Kit de Moldes de Barcos",
    subtitle: "Modelos decorativos e simples, que dão um visual bonito sem exigir projetos longos. Ideal pra quem quer algo diferente sem perder tempo.",
    image: bonusBarcos,
  },
  {
    icon: Bike,
    title: "5 Modelos de Motos em Madeira",
    subtitle: "Projetos compactos, com menos cortes e encaixes fáceis. Perfeitos pra variar o portfólio sem complicar o processo.",
    image: bonusMotos,
  },
  {
    icon: Plane,
    title: "5 Modelos de Aviões em Madeira",
    subtitle: "Moldes simples e rápidos, ideais pra usar retalhos menores. Ótimos pra decoração, presentes infantis ou peças rápidas pra venda.",
    image: bonusAvioes,
  },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl group hover:border-accent/50 transition-all overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-muted/20">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <bonus.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{bonus.subtitle}</p>
                  </div>
                </div>
              </div>
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
