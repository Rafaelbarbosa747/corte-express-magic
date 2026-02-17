import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const NAMES = [
  "Marcos Lima", "Carlos Henrique", "João Pedro", "Rafael Souza", "Anderson Costa",
  "Fernando Alves", "Ricardo Martins", "Paulo Rocha", "Bruno Santos", "Thiago Oliveira",
  "Diego Ferreira", "Leandro Silva", "Gustavo Pereira", "Rodrigo Nascimento", "Fábio Carvalho",
  "André Barbosa", "Renato Araújo", "Marcelo Ribeiro", "Eduardo Mendes", "Lucas Teixeira",
  "Vinícius Gomes", "Henrique Moraes", "Sérgio Nunes", "Roberto Correia", "Pedro Monteiro",
];

const LOCATIONS = [
  "São Paulo-SP", "Rio de Janeiro-RJ", "Belo Horizonte-MG", "Fortaleza-CE", "Curitiba-PR",
  "Florianópolis-SC", "Porto Alegre-RS", "Salvador-BA", "Recife-PE", "Goiânia-GO",
  "Campinas-SP", "Joinville-SC", "Londrina-PR", "Juiz de Fora-MG", "Natal-RN",
  "Manaus-AM", "Belém-PA", "Vitória-ES", "Maringá-PR", "Ribeirão Preto-SP",
];

const TIMES = ["2 min atrás", "3 min atrás", "5 min atrás", "7 min atrás", "11 min atrás", "14 min atrás", "19 min atrás", "24 min atrás", "31 min atrás", "38 min atrás", "45 min atrás", "1h atrás"];

// 3 out of 5 = Pacote Completo
const PLAN_SEQUENCE = ["Pacote Completo", "Pacote Completo", "Pacote Completo", "Plano Inicial", "Plano Inicial"];

function pickRandom<T>(arr: T[], exclude?: T): T {
  let pick: T;
  do { pick = arr[Math.floor(Math.random() * arr.length)]; } while (pick === exclude);
  return pick;
}

interface Notification {
  id: number;
  name: string;
  plan: string;
  location: string;
  time: string;
}

const PurchaseNotifications = () => {
  const [current, setCurrent] = useState<Notification | null>(null);
  const lastName = useRef("");
  const lastLocation = useRef("");
  const planIndex = useRef(0);
  const idRef = useRef(0);

  const generate = useCallback(() => {
    const name = pickRandom(NAMES, lastName.current);
    const location = pickRandom(LOCATIONS, lastLocation.current);
    const time = pickRandom(TIMES);
    const plan = PLAN_SEQUENCE[planIndex.current % PLAN_SEQUENCE.length];
    planIndex.current++;
    lastName.current = name;
    lastLocation.current = location;
    return { id: ++idRef.current, name, plan, location, time };
  }, []);

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      setCurrent(generate());
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, [generate]);

  useEffect(() => {
    if (!current) return;

    // Hide after 3-5s
    const hideDelay = 3000 + Math.random() * 2000;
    const hideTimer = setTimeout(() => setCurrent(null), hideDelay);

    return () => clearTimeout(hideTimer);
  }, [current]);

  useEffect(() => {
    if (current !== null) return;
    // Don't schedule on mount (initial delay handles first one)
    if (idRef.current === 0) return;

    // Next notification after 5-8s
    const nextDelay = 5000 + Math.random() * 3000;
    const nextTimer = setTimeout(() => setCurrent(generate()), nextDelay);

    return () => clearTimeout(nextTimer);
  }, [current, generate]);

  return (
    <div className="fixed top-14 right-3 z-40 pointer-events-none" style={{ maxWidth: "280px" }}>
      <AnimatePresence>
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-card/90 backdrop-blur-md border border-border/40 rounded-xl px-4 py-3 shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center">
                <ShoppingCart className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight truncate">
                  {current.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  comprou: <span className="text-accent font-medium">{current.plan}</span>
                </p>
                <p className="text-[11px] text-muted-foreground/70 mt-1">
                  {current.location} • {current.time}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PurchaseNotifications;
