import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import socialProof1 from "@/assets/social-proof-1.webp";
import socialProof2 from "@/assets/social-proof-2.webp";
import socialProof3 from "@/assets/social-proof-3.webp";

const testimonials = [socialProof1, socialProof2, socialProof3];

const SocialProof = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MessageCircle className="w-5 h-5 text-accent" />
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Depoimentos reais
          </span>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Veja marceneiros usando os{" "}
          <span className="text-accent">moldes na prática</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((img, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                src={img}
                alt={`Depoimento de marceneiro usando os moldes - ${index + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
