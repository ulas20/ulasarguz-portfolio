// Hero karakteri için tek doğruluk kaynağı: görsel yolları + kafa hizalama.
//
// character-body.png ve character-head.png AYNI tuval ölçüsünde (489×1421),
// AYNI pozisyonda hizalanmış, gerçek (üretilirken hesaplanmış — dama deseni
// değil) şeffaf arka planlı iki PNG'dir. Kafa katmanı tüm tuvali kaplar,
// sadece kafa/kep bölgesi opak, boyunda birkaç piksellik yumuşak (feathered)
// bir alfa geçişiyle gövdeye karışır. Bu sayede iki görsel `inset-0` ile
// üst üste konabilir; ayrı bir ofset/kırpma hesabı gerekmez ve hizaları
// hiçbir ekran boyutunda bozulmaz.
//
// Yeni bir karakter görseli hazırlarsan:
//   1) Kafa/gövde ayrımını orijinal görselin şeffaflığını bozmadan yap.
//   2) İki dosyayı da aynı W×H tuvalde, aynı konumda export et.
//   3) HEAD_TRANSFORM_ORIGIN'i yeni kafanın boyun noktasına göre güncelle.
export const CHARACTER_IMAGES = {
  body: '/images/character-body.png',
  head: '/images/character-head.png',
};

// Kafanın dönüş pivotu (boyun). Bu görselde kafa tuvalin üst ~%15'inde
// olduğu için varsayılan "50% 88%" bu görsele uymuyordu — ince ayar yapıldı.
export const HEAD_TRANSFORM_ORIGIN = '45% 15%';
