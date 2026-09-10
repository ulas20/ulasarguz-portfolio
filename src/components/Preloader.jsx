import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll.js';

// Sayfa açılışında farklı dillerde "merhaba" der, sonra perde gibi yukarı kalkar.
const GREETINGS = [
  'Merhaba',
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Olá',
  'こんにちは',
  'Hallo',
  'Привіт',
  'Merhaba',
];

export default function Preloader({ onReveal }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('cycling'); // 'cycling' | 'leaving' | 'done'
  const revealed = useRef(false);

  useLockBodyScroll(!reduce && phase !== 'done');

  const reveal = () => {
    if (revealed.current) return;
    revealed.current = true;
    onReveal?.();
  };

  // Selamlama döngüsü
  useEffect(() => {
    if (reduce) {
      reveal();
      setPhase('done');
      return undefined;
    }

    let alive = true;
    let timer;
    const tick = (i) => {
      if (!alive) return;
      setIndex(i);
      if (i < GREETINGS.length - 1) {
        timer = setTimeout(() => tick(i + 1), i === 0 ? 420 : 190);
      } else {
        timer = setTimeout(() => alive && setPhase('leaving'), 560);
      }
    };
    tick(0);

    return () => {
      alive = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  // Perde kalkmaya başlar başlamaz Hero animasyonunu tetikle
  useEffect(() => {
    if (phase === 'leaving') reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (reduce || phase === 'done') return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
      initial={{ y: 0 }}
      animate={{ y: phase === 'leaving' ? '-100%' : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === 'leaving') setPhase('done');
      }}
    >
      <div className="flex items-center gap-3 font-display text-2xl font-medium text-ink sm:text-3xl">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
        >
          {GREETINGS[index]}
        </motion.span>
      </div>
    </motion.div>
  );
}
