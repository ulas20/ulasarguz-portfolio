// Framer Motion için paylaşılan varyantlar.
export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const staggerParent = (staggerChildren = 0.09, delayChildren = 0.05) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
