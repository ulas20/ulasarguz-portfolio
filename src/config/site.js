// -----------------------------------------------------------------------------
// Genel site ayarları — buradaki değerleri kendinize göre güncelleyin.
// -----------------------------------------------------------------------------

export const SITE = {
  // Yayınlanacağı alan adı (og etiketleri ve canonical için)
  url: 'https://ulasarguz.com',

  // İletişim
  email: 'ulasarguz99@gmail.com',
  github: 'https://github.com/ulas20',
  linkedin: 'https://www.linkedin.com/in/ulas-arguz/',

  // CV dosyası: gerçek PDF'i  public/cv/  klasörüne bu adla koyun.
  cvPath: '/cv/ulas-arguz-cv.pdf',
};

// -----------------------------------------------------------------------------
// İletişim formu — Formspree
// 1) https://formspree.io/ üzerinden ücretsiz hesap açın
// 2) Yeni bir form oluşturun, size verilen adres şu şekildedir:
//      https://formspree.io/f/xxxxxxxx
// 3) O adresi aşağıya yapıştırın.
// Boş bırakıldığında form, "henüz yapılandırılmadı" mesajı gösterir ve
// gönderim yapmaz; ziyaretçi bu sırada e-posta butonunu kullanabilir.
// -----------------------------------------------------------------------------
export const FORMSPREE_ENDPOINT = ''; // TODO: 'https://formspree.io/f/xxxxxxxx'
