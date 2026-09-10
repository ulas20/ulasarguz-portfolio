// Bir bölüme yumuşak kaydırma. Hareket azaltma tercihi varsa anında atlar.
export function scrollToId(id, smooth = true) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: smooth && !reduce ? 'smooth' : 'auto', block: 'start' });
}
