import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, Zap } from "lucide-react";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const features = [
  "Todos os 100+ moldes de carrinhos",
  "5 aviões em madeira",
  "5 motos em madeira",
  "Kit Animais Fáceis para tico-tico",
  "Kit de Barcos decorativos",
  "Atualizações futuras",
  "Suporte prioritário",
];

const UpsellModal = ({ isOpen, onClose }: UpsellModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md glass-card rounded-2xl p-6 border-accent/30"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  Oferta especial
                </div>
                
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Parabéns! Você foi selecionado para desbloquear uma nova condição secreta!
                </h2>
                
                <p className="text-muted-foreground text-sm">
                  Agora você pode garantir a versão completa do Carrinhos Express com:
                </p>
                
                <div className="mt-4 bg-accent/10 rounded-xl py-3 px-4">
                  <span className="text-2xl font-bold text-accent">35% de DESCONTO IMEDIATO!</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  O que você libera ao atualizar:
                </p>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground line-through">De R$27,00</p>
                <p className="text-sm text-muted-foreground">por apenas</p>
                <p className="text-4xl font-bold text-accent mt-1">
                  💥 R$17,90
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Button 
                  variant="cta" 
                  className="w-full py-6 text-base"
                  asChild
                >
                  <a 
                    href="https://pay.wiapy.com/767HOVbAjc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    🟢 SIM, QUERO TUDO COM DESCONTO
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full py-5"
                  asChild
                >
                  <a 
                    href="https://pay.wiapy.com/0fNhAN43sI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Continuar só com o plano inicial
                  </a>
                </Button>
              </div>

              {/* Footer */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                ⚠️ Desconto exclusivo desta tela. Saiu, perdeu.
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UpsellModal;
