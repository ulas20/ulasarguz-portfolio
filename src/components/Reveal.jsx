import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion.js';

// Görünüme girince içeriği yumuşakça yukarı doğru belirir. Bir kez oynar.
// Hareket azaltma tercihinde animasyon yapılmaz.
export default function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  y = 22,
  once = true,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
