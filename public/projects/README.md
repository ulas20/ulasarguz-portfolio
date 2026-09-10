# Proje görselleri

Bu klasördeki `.svg` dosyaları **geçici placeholder**'lardır.

## Gerçek görselleri ekleme

1. Kapak görsellerinizi bu klasöre koyun. Önerilen:
   - En-boy oranı **16:10** (ör. 1600×1000 px)
   - Format: `.webp` (en iyi), `.jpg` veya `.png`
   - Dosya boyutu: mümkünse < 300 KB (Lighthouse için)
2. `src/data/content.tr.js` ve `src/data/content.en.js` içindeki ilgili projenin
   `image` alanını yeni dosya adıyla güncelleyin, örn:

   ```js
   image: '/projects/smart-beauty.webp',
   ```

Yol her zaman `/projects/...` ile başlar (kök = `public/`).

| Proje | Placeholder dosyası |
| --- | --- |
| Smart Beauty iOS | `smart-beauty.svg` |
| Öksürük Sesinden COVID-19 Tespiti | `covid-cough.svg` |
| Kişisel Portföy | `portfolio.svg` |
