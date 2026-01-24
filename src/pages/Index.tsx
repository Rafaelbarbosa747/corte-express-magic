import { lazy, Suspense, useEffect } from "react";
import Hero from "@/components/Hero";
import { initFacebookPixelLazy } from "@/lib/facebookPixel";

// Lazy load componentes abaixo da dobra
const TargetAudience = lazy(() => import("@/components/TargetAudience"));
const Promise = lazy(() => import("@/components/Promise"));
const ProductCarousel = lazy(() => import("@/components/ProductCarousel"));
const Bonuses = lazy(() => import("@/components/Bonuses"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Guarantee = lazy(() => import("@/components/Guarantee"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));

// Fallback mínimo para loading
const SectionFallback = () => (
  <div className="py-16 px-4 flex justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useEffect(() => {
    // Inicializa Facebook Pixel com carregamento atrasado
    initFacebookPixelLazy();
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero é crítico - carrega imediatamente */}
      <Hero />
      
      {/* Componentes abaixo da dobra - lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <TargetAudience />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Promise />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <ProductCarousel />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Bonuses />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Pricing />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Guarantee />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <FinalCTA />
      </Suspense>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moldes de Carrinhos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
