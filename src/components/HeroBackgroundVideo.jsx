import { useEffect, useState } from 'react';

// Tek doğruluk kaynağı: video/poster yolları.
const VIDEO_SRC = '/videos/horse-background.mp4';
const POSTER_SRC = '/images/horse-poster.webp';

// Videonun kendi kadrajına göre ayarlanmış odak noktası — at, object-fit:
// cover kenarlardan kırparken kadraj dışına çıkmasın diye. Videoyu
// değiştirirsen bu değeri yeni kareye göre gözle ince ayar yap.
const OBJECT_POSITION = '58% 32%';

/**
 * Hero'nun arkasında, karakterin ve metnin GERİSİNDE duran sinematik video
 * katmanı. Kendi başına hiçbir görünür kontrol/ses/oynatma düğmesi yok,
 * hiçbir mouse/dokunma olayını yakalamaz (`pointer-events-none`).
 *
 * - 768px altı VEYA prefers-reduced-motion: reduce → video hiç oynatılmaz,
 *   yerine üretilmiş poster (WebP) görseli aynı stille gösterilir.
 * - Video (veya poster) yüklenemezse bileşen kendini gizler; Hero, altındaki
 *   mevcut gradient arka planla (Background.jsx) sorunsuz çalışmaya devam eder.
 * - Düşük opaklık + grayscale/contrast/brightness filtreleri ve üstteki
 *   koyulaştırma katmanları, metnin okunabilirliğini korumak için var.
 */
export default function HeroBackgroundVideo({ className = '' }) {
  const [allowMotion, setAllowMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopQuery = window.matchMedia('(min-width: 768px)');

    const evaluate = () => {
      setAllowMotion(desktopQuery.matches && !reducedMotionQuery.matches);
    };
    evaluate();

    reducedMotionQuery.addEventListener('change', evaluate);
    desktopQuery.addEventListener('change', evaluate);
    return () => {
      reducedMotionQuery.removeEventListener('change', evaluate);
      desktopQuery.removeEventListener('change', evaluate);
    };
  }, []);

  if (failed) return null;

  const mediaClassName =
    'h-full w-full object-cover opacity-25 grayscale contrast-125 brightness-75';
  const mediaStyle = { objectPosition: OBJECT_POSITION };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {allowMotion ? (
        <video
          className={mediaClassName}
          style={mediaStyle}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      ) : (
        <img
          src={POSTER_SRC}
          alt=""
          className={mediaClassName}
          style={mediaStyle}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}

      {/* Soldan (metnin durduğu taraf) sağa doğru açılan koyu perde — okunabilirlik güvencesi */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/35 to-transparent" />
      {/* Üstten alta doğru koyulaşan ince vinyet */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/60" />
    </div>
  );
}
