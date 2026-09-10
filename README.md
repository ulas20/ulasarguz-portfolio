# Ulaş Argüz — Kişisel Portföy

React + Vite + Tailwind CSS + Framer Motion ile geliştirilmiş, tek sayfalık kişisel portföy.
Türkçe içerik; İngilizce dil desteği hazır (navbar'da TR / EN geçişi).

---

## Gereksinimler

- **Node.js 18+** (önerilen: 20 — `.nvmrc` mevcut)
- npm (Node ile birlikte gelir)

## Kurulum & çalıştırma

```bash
npm install       # bağımlılıkları yükle
npm run dev       # geliştirme sunucusu → http://localhost:5173
```

## Production derlemesi (statik dosyalar)

```bash
npm run build     # -> dist/ klasörüne statik site üretir
npm run preview   # dist/ çıktısını yerel olarak önizle → http://localhost:4173
```

`dist/` klasörünün **içeriğini** herhangi bir statik hosting hizmetine yükleyebilirsiniz
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, cPanel `public_html`, vb.).

> **Alt dizinde yayınlama:** Site kök dizinde değil de `.../portfolio/` gibi bir alt
> yolda yayınlanacaksa `vite.config.js` içindeki `base` değerini `'./'` yapın.

---

## Yapılacak kişiselleştirmeler

| Ne | Nerede |
| --- | --- |
| Tüm metinler (Türkçe) | `src/data/content.tr.js` |
| Tüm metinler (İngilizce) | `src/data/content.en.js` |
| E-posta, GitHub, LinkedIn, alan adı, CV yolu | `src/config/site.js` → `SITE` |
| İletişim formu adresi (Formspree) | `src/config/site.js` → `FORMSPREE_ENDPOINT` |
| Proje kapak görselleri | `public/projects/` (bkz. oradaki README) |
| CV dosyası (PDF) | `public/cv/ulas-arguz-cv.pdf` (bkz. oradaki README) |
| OG görseli | `public/og-image.svg` → 1200×630 **PNG** olarak dışa aktarıp `public/og-image.png` yapın, `index.html`'deki meta yolları PNG'ye göre zaten ayarlı |
| Favicon | `public/favicon.svg` |
| Site başlığı / açıklama / OG etiketleri | `index.html` `<head>` |
| Renkler ve tipografi | `src/index.css` (CSS değişkenleri) + `tailwind.config.js` |

### İletişim formu (Formspree)

1. <https://formspree.io> üzerinden ücretsiz hesap açın, yeni bir form oluşturun.
2. Size verilen `https://formspree.io/f/xxxxxxxx` adresini
   `src/config/site.js` içindeki `FORMSPREE_ENDPOINT` değerine yapıştırın.
3. Adres boşken form "henüz yapılandırılmadı" mesajı gösterir ve gönderim yapmaz.

### Yeni dil ekleme

1. `src/data/content.tr.js` dosyasını kopyalayıp `content.<kod>.js` yapın, çevirin.
2. `src/data/index.js` içinde import edip `dictionaries` nesnesine ekleyin.
   `LOCALES` ve navbar'daki TR/EN geçişi otomatik güncellenir.

---

## Proje yapısı

```
public/
  favicon.svg, og-image.svg, robots.txt
  projects/         proje kapak görselleri (placeholder .svg'ler)
  cv/               CV PDF'i buraya
src/
  main.jsx          giriş noktası (Theme + Locale provider)
  App.jsx           sayfa düzeni
  index.css         Tailwind + tema değişkenleri + reduced-motion
  config/site.js    site geneli ayarlar + Formspree adresi
  data/
    content.tr.js   TÜM Türkçe metinler
    content.en.js   TÜM İngilizce metinler
    index.js        dil kayıt defteri
  context/
    ThemeContext.jsx   açık/koyu tema + localStorage
    LocaleContext.jsx  dil + localStorage
  hooks/
    useScrolled.js        navbar arka planı için
    useActiveSection.js   aktif bölüm takibi
    useLockBodyScroll.js  modal/menü açıkken kaydırma kilidi
  lib/
    motion.js        paylaşılan animasyon varyantları
    scroll.js        yumuşak kaydırma (reduced-motion duyarlı)
  components/
    Navbar, MobileMenu, Footer, Background, SkipLink,
    Container, Button, Reveal, SectionHeading, Marquee,
    ThemeToggle, LangToggle
    sections/
      Hero, About, Skills, Projects (+ ProjectCard, ProjectDialog),
      Timeline, Contact (+ ContactForm)
```

## Özellikler

- Açık / koyu tema, tercih `localStorage`'da; ilk boyamada flash yok
- Türkçe içerik + tam İngilizce çeviri, TR / EN geçişi
- Bölümler arası yumuşak kaydırma, aktif bağlantı vurgusu
- Framer Motion ile giriş ve scroll animasyonları
- `prefers-reduced-motion` → tüm hareketler devre dışı
- Klavye ile gezinme, `:focus-visible` halkaları, "İçeriğe geç" bağlantısı, erişilebilir modal
- Responsive: telefon / tablet / masaüstü
- SEO: başlık, açıklama, Open Graph / Twitter etiketleri, favicon, `robots.txt`
```
