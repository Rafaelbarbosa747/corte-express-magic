import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de experiência para usar os moldes?",
    answer: "Não! Os moldes foram criados justamente para iniciantes. Cada projeto foi pensado para ser simples, com poucas peças e sem cortes complexos."
  },
  {
    question: "Qual ferramenta preciso para cortar?",
    answer: "Você pode usar serra tico-tico, serra de bancada ou até uma serra manual. Os moldes funcionam com qualquer ferramenta básica de corte."
  },
  {
    question: "Como recebo os moldes?",
    answer: "Após a compra, você recebe acesso imediato por email. Os arquivos estão em PDF, prontos para imprimir em qualquer impressora comum."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! Uma vez que você compra, pode imprimir os moldes quantas vezes precisar, para sempre."
  },
  {
    question: "Os moldes vêm em tamanho real?",
    answer: "Sim, todos os moldes já vêm no tamanho correto para impressão em folha A4. Basta imprimir e colar na madeira."
  },
  {
    question: "Funciona em qualquer tipo de madeira?",
    answer: "Sim, os moldes funcionam com qualquer tipo de madeira: MDF, compensado, pinus, eucalipto e outros."
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Você tem 7 dias de garantia. Se não gostar, devolvemos 100% do valor, sem perguntas."
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Perguntas <span className="text-accent">frequentes</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-4 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
