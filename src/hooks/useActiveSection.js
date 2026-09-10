import { useEffect, useState } from 'react';

// Verilen bölüm id'lerinden hangisi ekranın ortasındaysa onu döner.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? null);
  const key = ids.join(',');

  useEffect(() => {
    if (!ids.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}
