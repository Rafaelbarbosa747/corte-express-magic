import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="glass-card p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-accent" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Risco <span className="text-accent">zero</span> para você
          </h2>
          
          <p className="text-muted-foreground">
            Se em 7 dias você não gostar do material ou achar que não serve pra você, 
            basta enviar um e-mail e devolvemos 100% do seu dinheiro. 
            Sem perguntas, sem burocracia.
          </p>
          
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Garantia incondicional de 7 dias
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
