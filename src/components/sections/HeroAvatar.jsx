import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { EASE } from '../../lib/motion.js';

// Hero'nun sağ sütunundaki karakter illüstrasyonu.
// - Giriş: perde kalkınca alttan yükselerek belirir
// - Sürekli: hafif nefes/süzülme + ayak altında yere basan gölge
// - Masaüstü: imleç paralaksı — figür ile arkasındaki ışık ters yönde kayar
export default function HeroAvatar({ start = true }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springCfg = { stiffness: 120, damping: 20, mass: 0.6 };
  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);

  const figureX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const figureY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const glowY = useTransform(sy, [-0.5, 0.5], [18, -18]);

  useEffect(() => {
    if (reduce) return undefined;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return undefined;

    const onMove = (event) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set((event.clientX - rect.left) / rect.width - 0.5);
      my.set((event.clientY - rect.top) / rect.height - 0.5);
    };
    const reset = () => {
      mx.set(0);
      my.set(0);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', reset);
    };
  }, [reduce, mx, my]);

  const glowStyle = reduce ? undefined : { x: glowX, y: glowY };

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto flex h-[380px] w-full max-w-[420px] items-end justify-center sm:h-[460px] lg:h-[540px]"
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
      animate={start ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
    >
      {/* Arkadaki ışık — imleçle ters yönde kayar */}
      <motion.div
        aria-hidden="true"
        style={glowStyle}
        className="pointer-events-none absolute left-[10%] top-[12%] h-[72%] w-[80%] rounded-full bg-accent/25 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={glowStyle}
        className="pointer-events-none absolute right-[2%] top-[6%] h-[46%] w-[52%] rounded-full bg-violet/20 blur-3xl"
      />

      {/* Yere basan gölge */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-1/2 h-5 w-40 -translate-x-1/2 rounded-[50%] bg-black/50 blur-md motion-safe:animate-avatar-shadow dark:bg-black/60 sm:w-44"
      />

      {/* Figür — dış katman: imleç paralaksı, iç katman: nefes/süzülme */}
      <motion.div
        style={reduce ? undefined : { x: figureX, y: figureY }}
        className="relative h-full"
      >
        <div className="h-full motion-safe:animate-avatar-float">
          <img
            src="/ulas-avatar.webp"
            alt="Ulaş Argüz illüstrasyonu"
            width={489}
            height={1421}
            fetchpriority="high"
            decoding="async"
            draggable="false"
            className="h-full w-auto select-none object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.4)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
