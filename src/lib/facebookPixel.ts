// Facebook Pixel lazy loader
// Carrega o pixel após interação do usuário ou window.onload

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

let pixelLoaded = false;

function loadFacebookPixel() {
  if (pixelLoaded) return;
  pixelLoaded = true;

  // Facebook Pixel initialization code
  (function(f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', '795933506555311');
  window.fbq('track', 'PageView');
}

export function initFacebookPixelLazy() {
  // Estratégia 1: Após window.onload
  if (document.readyState === 'complete') {
    // Página já carregou, aguarda 2s para não impactar métricas
    setTimeout(loadFacebookPixel, 2000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(loadFacebookPixel, 2000);
    });
  }

  // Estratégia 2: Após primeira interação (scroll, click, touch)
  const loadOnInteraction = () => {
    loadFacebookPixel();
    window.removeEventListener('scroll', loadOnInteraction);
    window.removeEventListener('click', loadOnInteraction);
    window.removeEventListener('touchstart', loadOnInteraction);
  };

  window.addEventListener('scroll', loadOnInteraction, { once: true, passive: true });
  window.addEventListener('click', loadOnInteraction, { once: true });
  window.addEventListener('touchstart', loadOnInteraction, { once: true, passive: true });
}

// Helper para disparar eventos customizados (manter compatibilidade)
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (window.fbq) {
    window.fbq('track', eventName, params);
  } else {
    // Se o pixel ainda não carregou, aguarda e tenta novamente
    const checkAndTrack = () => {
      if (window.fbq) {
        window.fbq('track', eventName, params);
      } else {
        setTimeout(checkAndTrack, 100);
      }
    };
    // Força o carregamento para eventos importantes
    loadFacebookPixel();
    setTimeout(checkAndTrack, 100);
  }
}
