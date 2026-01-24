import { lazy, ComponentType } from 'react';

// Helper para lazy loading com prefetch
export function lazyWithPreload<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  const Component = lazy(factory);
  (Component as any).preload = factory;
  return Component;
}

// Iniciar prefetch após interação do usuário
export function startPrefetchOnInteraction(components: Array<{ preload: () => void }>) {
  const prefetch = () => {
    components.forEach(component => {
      if (component.preload) {
        component.preload();
      }
    });
    // Remove listeners após prefetch
    window.removeEventListener('scroll', prefetch);
    window.removeEventListener('mousemove', prefetch);
    window.removeEventListener('touchstart', prefetch);
  };

  // Prefetch após primeira interação
  window.addEventListener('scroll', prefetch, { once: true, passive: true });
  window.addEventListener('mousemove', prefetch, { once: true, passive: true });
  window.addEventListener('touchstart', prefetch, { once: true, passive: true });
  
  // Fallback: prefetch após 3 segundos se nenhuma interação
  setTimeout(prefetch, 3000);
}
