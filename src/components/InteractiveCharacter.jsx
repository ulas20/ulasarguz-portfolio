import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { CHARACTER_IMAGES, HEAD_TRANSFORM_ORIGIN } from '../config/character.js';

// Sınırlar (istenen aralıkların dışına asla çıkmaz)
const ROTATE_Y_MAX = 7; // sağ-sol (derece)
const ROTATE_X_MAX = 5; // yukarı-aşağı (derece)
const TRANSLATE_X_MAX = 3; // px
const TRANSLATE_Y_MAX = 2; // px
const PERSPECTIVE = 700; // px — "düz kart dönüyor" hissini kırar

const SPRING = { stiffness: 120, damping: 18, mass: 0.8 };

/**
 * İki katmanlı (gövde + kafa) illüstrasyonu render eder; kafa katmanı
 * imleci hafifçe takip eder. Gövde sabittir, hiçbir zaman döndürülmez.
 *
 * Gerçek 2.5D: kafa üzerinde rotateX/rotateY (3B) + küçük bir translate
 * kullanılır, container'a uygulanan CSS `perspective` ile birlikte —
 * düz bir 2B `rotate()` (roll) KULLANILMAZ, çünkü o "kartpostal dönüyor"
 * gibi görünür ve istenen doğal/profesyonel his vermez.
 *
 * - prefers-reduced-motion: animasyon tamamen kapanır, kafa sabit durur.
 * - Dokunmatik / hover desteklemeyen cihazlar: izleyici hiç bağlanmaz.
 * - Sadece transform animasyonu yapılır (layout tetiklenmez); re-render yok
 *   (motion value'lar React state'i değil doğrudan DOM'u günceller).
 */
export default function InteractiveCharacter({
  bodyImage = CHARACTER_IMAGES.body,
  headImage = CHARACTER_IMAGES.head,
  alt = '',
  headOrigin = HEAD_TRANSFORM_ORIGIN,
  className = '',
}) {
  const reduce = useReducedMotion();
  const containerRef = useRef(null);

  // -1..1 aralığında, container merkezine göre normalize edilmiş imleç konumu
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, SPRING);
  const sy = useSpring(ny, SPRING);

  // Not: pozitif rotateY 3B uzayda SAĞ kenarı geriye (izleyiciden uzağa) yatırır
  // (2 küçük kutuyla ampirik olarak doğrulandı) — yani imleç sağdayken kafanın
  // sağ tarafının ÖNE gelmesi (imlece dönmüş gibi durması) için işareti ters çeviriyoruz.
  const rotateY = useTransform(sx, [-1, 1], [ROTATE_Y_MAX, -ROTATE_Y_MAX]);
  const rotateX = useTransform(sy, [-1, 1], [ROTATE_X_MAX, -ROTATE_X_MAX]);
  const translateX = useTransform(sx, [-1, 1], [-TRANSLATE_X_MAX, TRANSLATE_X_MAX]);
  const translateY = useTransform(sy, [-1, 1], [-TRANSLATE_Y_MAX, TRANSLATE_Y_MAX]);

  useEffect(() => {
    if (reduce) return undefined;

    // Dokunmatik / kabaca işaretleyicili cihazlarda imleç takibi çalıştırma —
    // kafa mobilde her zaman normal/sabit pozisyonda kalır.
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return undefined;

    const node = containerRef.current;
    if (!node) return undefined;

    const handlePointerMove = (event) => {
      const rect = node.getBoundingClientRect();
      const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      nx.set(Math.max(-1, Math.min(1, relX)));
      ny.set(Math.max(-1, Math.min(1, relY)));
    };

    const resetToRest = () => {
      nx.set(0);
      ny.set(0);
    };

    node.addEventListener('pointermove', handlePointerMove, { passive: true });
    node.addEventListener('pointerleave', resetToRest, { passive: true });
    // Sekme odağı kaybolursa (alt-tab vb.) da başlangıç pozisyonuna dön.
    window.addEventListener('blur', resetToRest);

    return () => {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', resetToRest);
      window.removeEventListener('blur', resetToRest);
    };
  }, [reduce, nx, ny]);

  const headStyle = reduce
    ? { transformOrigin: headOrigin }
    : {
        transformOrigin: headOrigin,
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
      };

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${className}`}
      style={{ perspective: reduce ? undefined : PERSPECTIVE }}
    >
      <img
        src={bodyImage}
        alt={alt}
        width={489}
        height={1421}
        fetchpriority="high"
        decoding="async"
        draggable="false"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
      />
      <motion.img
        src={headImage}
        alt=""
        aria-hidden="true"
        width={489}
        height={1421}
        decoding="async"
        draggable="false"
        style={headStyle}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain will-change-transform"
      />
    </div>
  );
}
