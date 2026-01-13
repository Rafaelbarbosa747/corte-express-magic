import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Promise from "@/components/Promise";
import ProductCarousel from "@/components/ProductCarousel";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <TargetAudience />
      <Promise />
      <ProductCarousel />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      
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
