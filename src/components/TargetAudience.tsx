import { motion } from "framer-motion";
import { User, Clock, Heart, Target, Zap } from "lucide-react";

const personas = [
  {
    icon: User,
    title: "Iniciante na marcenaria",
    description: "Projetos que evitam travamentos e são simples de executar, mesmo sem experiência prévia."
  },
  {
    icon: Clock,
    title: "Pessoa com pouco tempo livre",
    description: "Projetos pensados para serem concluídos em cerca de 1 hora, sem etapas demoradas."
  },
  {
    icon: Heart,
    title: "Pai, mãe, avô ou responsável",
    description: "Projetos rápidos para presentear ou fazer junto com a família em momentos especiais."
  },
  {
    icon: Target,
    title: "Hobbista que sempre deixa projetos pela metade",
    description: "Material criado especificamente para evitar abandono e garantir conclusão."
  },
  {
    icon: Zap,
    title: "Quem quer resultado visível sem complicação",
    description: "Sem teoria, sem aulas longas, só execução prática e resultado imediato."
  }
];

const TargetAudience = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Esse material é <span className="text-accent">ideal para você</span> se…
        </motion.h2>

        <div className="grid gap-4">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              className="glass-card p-5 rounded-xl flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <persona.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {persona.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
