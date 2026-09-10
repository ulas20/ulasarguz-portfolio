// Yavaşça kayan teknoloji şeridi. Üzerine gelince durur,
// hareket azaltma tercihinde hiç hareket etmez.
export default function Marquee({ items, className = '' }) {
  const group = (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="font-display text-base font-medium uppercase tracking-wide text-ink-faint sm:text-lg"
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group relative flex overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {group}
        {group}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
