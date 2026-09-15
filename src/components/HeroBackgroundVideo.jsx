import { useEffect, useState } from 'react';

// Tek doğruluk kaynağı: video/poster yolları.
const VIDEO_SRC = '/videos/horse-background.mp4';
const POSTER_SRC = '/images/horse-poster.webp';

// Videonun kendi kadrajına göre ayarlanmış odak noktası — at, object-fit:
// cover kenarlardan kırparken kadraj dışına çıkmasın diye. Videoyu
// değiştirirsen bu değeri yeni kareye göre gözle ince ayar yap.
const OBJECT_POSITION = '58% 30%';

/**
 * Sayfanın TAMAMI boyunca sabit (fixed) duran sinematik video arka planı —
 * Background.jsx'in yanında, aynı mantıkla: bir kere App'te mount edilir,
 * scroll ile birlikte hareket etmez/değişmez. Sayfa içeriği (her bölümün
 * kendi metni) bunun ÜZERİNDE normal akışta kayar ve doğal olarak değişir.
 *
 * Kendi başına hiçbir görünür kontrol/ses/oynatma düğmesi yok, hiçbir
 * mouse/dokunma olayını yakalamaz (`pointer-events-none`).
 *
 * - 768px altı VEYA prefers-reduced-motion: reduce → video hiç oynatılmaz,
 *   yerine üretilmiş poster (WebP) görseli aynı stille gösterilir.
 * - Video (veya poster) yüklenemezse bileşen kendini gizler; sayfa,
 *   Background.jsx'in mevcut gradient/ışık küreleriyle sorunsuz çalışır.
 * - Düşük opaklık + grayscale/contrast/brightness filtreleri ve ince bir
 *   vinyet, metnin her bölümde okunabilir kalmasını garanti eder.
 */
export default function HeroBackgroundVideo({ opacityClass = 'opacity-[0.16]' }) {
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

  const mediaClassName = `h-full w-full object-cover ${opacityClass} grayscale contrast-125 brightness-75`;
  const mediaStyle = { objectPosition: OBJECT_POSITION };

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
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

      {/* İnce vinyet — üstten ve alttan hafifçe koyulaştırır, metni her bölümde korur */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-transparent to-bg/80" />
    </div>
  );
}
