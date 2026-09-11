import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocale } from '../../context/LocaleContext.jsx';

// Küçük bir etkileşimli sahne: sokak lambası + tepesinde bir sakin.
// Işık yanıkken yarasa tüner (gece); ışığı kapatınca yarasa uçar,
// yerini bir kuş alır (gün ağarır). Tıklanabilir/klavye erişilebilir.
export default function StreetLamp() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  const [on, setOn] = useState(true);
  const dur = reduce ? 0.01 : 0.45;

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        aria-label={on ? t.about.lamp.turnOff : t.about.lamp.turnOn}
        className="group relative block w-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {/* Ortam ışığı — CSS blur, buton arkasında yumuşak bir parıltı */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[30%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lamp blur-2xl"
          animate={{
            opacity: on ? (reduce ? 0.55 : [0.48, 0.62, 0.48]) : 0,
            scale: on ? 1 : 0.6,
          }}
          transition={
            on && !reduce
              ? { opacity: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 0.4 } }
              : { duration: 0.4 }
          }
        />

        <svg
          viewBox="0 0 160 220"
          className="relative mx-auto h-56 w-full max-w-[220px] transition-transform duration-200 group-hover:-translate-y-0.5 group-active:translate-y-0 motion-reduce:group-hover:translate-y-0"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lampCone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgb(var(--lamp))" stopOpacity="0.35" />
              <stop offset="1" stopColor="rgb(var(--lamp))" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Işık konisi */}
          <motion.polygon
            points="80,72 38,206 122,206"
            fill="url(#lampCone)"
            animate={{ opacity: on ? 1 : 0 }}
            transition={{ duration: dur }}
          />

          {/* Zemin */}
          <line x1="20" y1="206" x2="140" y2="206" className="stroke-line/15" strokeWidth="1" />

          {/* Direk */}
          <rect x="76" y="70" width="6" height="136" rx="3" className="fill-ink/45" />
          <rect x="78" y="46" width="4" height="10" className="fill-ink/45" />

          {/* Lamba başlığı */}
          <path d="M60 46 L100 46 L92 66 L68 66 Z" className="fill-ink/55" />
          <circle cx="80" cy="40" r="3" className="fill-ink/55" />

          {/* Ampul */}
          <motion.circle
            cx="80"
            cy="70"
            r="5"
            animate={{ fill: on ? 'rgb(var(--lamp))' : 'rgb(var(--line) / 0.25)' }}
            transition={{ duration: dur }}
          />

          {/* Tünekteki sakin: yarasa (ışık açık) / kuş (ışık kapalı) */}
          {/* Statik konumlama burada; Framer'ın kendi transform'u iç motion.g'de yönetiliyor
              (aynı elemanda ikisi çakışırsa Framer static transform attribute'unu ezer). */}
          <g transform="translate(80 33)">
          <AnimatePresence mode="wait">
            {on ? (
              <motion.g
                key="bat"
                initial={reduce ? false : { opacity: 0, y: -10, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, x: 10, rotate: 14, scale: 0.6 }}
                transition={{ duration: dur, ease: [0.22, 1, 0.36, 1] }}
                className="fill-ink"
              >
                <motion.g
                  animate={!reduce ? { rotate: [0, -4, 0, 3, 0] } : {}}
                  transition={!reduce ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } : {}}
                  style={{ transformOrigin: '0px 2px' }}
                >
                  <path d="M-2 0 C-9 -5 -16 -2 -19 5 C-14 3 -11 4 -9 1 C-7 4 -4 4 -2 2 Z" />
                  <path d="M2 0 C9 -5 16 -2 19 5 C14 3 11 4 9 1 C7 4 4 4 2 2 Z" />
                  <ellipse cx="0" cy="2" rx="3" ry="3.6" />
                  <path d="M-2.4 -2.6 L-3.6 -5.6 L-0.9 -3.6 Z" />
                  <path d="M2.4 -2.6 L3.6 -5.6 L0.9 -3.6 Z" />
                </motion.g>
              </motion.g>
            ) : (
              <motion.g
                key="bird"
                initial={reduce ? false : { opacity: 0, x: -16, y: -6, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: 16, y: -10, scale: 0.6 }}
                transition={{ duration: dur, ease: [0.22, 1, 0.36, 1] }}
                className="fill-lamp"
              >
                <path d="M-8 3 L-13 0 L-12 5 Z" />
                <ellipse cx="0" cy="1" rx="6.4" ry="4.2" />
                <circle cx="5.6" cy="-2.2" r="2.8" />
                <path d="M8 -2.2 L11 -1.6 L7.8 -0.8 Z" />
                <path d="M-1 0 C1.6 1.6 1.6 3.6 -1.6 4.4 C0 2.6 -1 1 -1 0 Z" opacity="0.55" />
              </motion.g>
            )}
          </AnimatePresence>
          </g>
        </svg>
      </button>

      <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-faint">
        {t.about.lamp.hint}
      </p>
    </div>
  );
}
