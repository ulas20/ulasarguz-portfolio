// =============================================================================
// TÜRKÇE İÇERİK
// Sitedeki tüm metinler burada. Düzenlemek için sadece bu dosyayı değiştirin.
// Aynı yapıyı content.en.js içinde İngilizce olarak da bulabilirsiniz.
// =============================================================================

export const tr = {
  meta: {
    title: 'Ulaş Argüz — iOS Developer & Machine Learning',
    description:
      'Swift ve SwiftUI ile kullanıcı odaklı iOS uygulamaları, Python ve makine öğrenmesi ile veri odaklı çözümler geliştiren iOS Developer.',
  },

  skipLink: 'İçeriğe geç',

  nav: {
    label: 'Ana menü',
    cv: 'CV İndir',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    items: [
      { id: 'hakkimda', label: 'Hakkımda' },
      { id: 'yetenekler', label: 'Yetenekler' },
      { id: 'projeler', label: 'Projeler' },
      { id: 'iletisim', label: 'İletişim' },
    ],
  },

  theme: {
    toLight: 'Açık temaya geç',
    toDark: 'Koyu temaya geç',
  },

  lang: {
    label: 'Dil seçimi',
  },

  hero: {
    role: 'iOS Developer & Machine Learning Enthusiast',
    greeting: 'Merhaba, ben Ulaş.',
    description:
      'Swift ve SwiftUI ile kullanıcı odaklı iOS uygulamaları geliştiriyor; Python ve makine öğrenmesi ile veri odaklı çözümler üretiyorum. Tasarımı, teknolojiyi ve iş ihtiyaçlarını aynı üründe buluşturmayı seviyorum.',
    primaryCta: 'Projelerimi İncele',
    secondaryCta: 'Benimle İletişime Geç',
    codeCaption: 'focus.swift',
    scrollHint: 'Kaydır',
  },

  about: {
    heading: 'Hakkımda',
    title: 'Ürün odaklı düşünen bir geliştiriciyim.',
    paragraphs: [
      'Yönetim Bilişim Sistemleri okuyorum. İş dünyasının ihtiyaçlarını anlamakla yazılımın nasıl çalıştığını bilmek arasında durmak, geliştirdiğim ürünlere yön veriyor.',
      'iOS geliştirme ve makine öğrenmesi en çok vakit ayırdığım iki alan. Swift tarafında temiz arayüz mantığı ve akıcı deneyim; Python tarafında veriyi anlamlı hâle getiren modeller ilgimi çekiyor.',
      'Amacım; tasarım, teknoloji ve iş ihtiyaçlarını bir araya getiren, gerçekten kullanılan ürünler geliştirmek.',
    ],
    facts: [
      { label: 'Eğitim', value: 'Yönetim Bilişim Sistemleri' },
      { label: 'Konum', value: 'İstanbul, Türkiye' },
      { label: 'Odak', value: 'iOS · Makine Öğrenmesi' },
      { label: 'Durum', value: 'Yeni projelere açık' },
    ],
    lamp: {
      hint: 'Işığı kapatıp açmayı dene',
      turnOff: 'Işığı kapat',
      turnOn: 'Işığı aç',
    },
  },

  skills: {
    heading: 'Yetenekler',
    title: 'Kullandığım teknolojiler',
    note: 'Günlük işimde en çok dokunduğum araçlar.',
    categories: [
      { id: 'ios', label: 'iOS', icon: 'smartphone', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'] },
      { id: 'backend', label: 'Backend', icon: 'server', items: ['Python', 'FastAPI', 'REST API'] },
      { id: 'ai', label: 'Veri & Yapay Zekâ', icon: 'brain', items: ['Pandas', 'Scikit-learn', 'Machine Learning'] },
      { id: 'tools', label: 'Araçlar', icon: 'wrench', items: ['Xcode', 'Git', 'GitHub', 'Figma'] },
      { id: 'db', label: 'Veritabanı', icon: 'database', items: ['SQL'] },
    ],
  },

  projects: {
    heading: 'Projeler',
    title: 'Üzerinde çalıştığım işler',
    detail: 'Detayı Gör',
    code: 'GitHub',
    live: 'Canlı Demo',
    close: 'Kapat',
    items: [
      {
        slug: 'smart-beauty-ios',
        title: 'Smart Beauty iOS',
        summary:
          'Swift ile geliştirilen kozmetik alışveriş uygulaması; API bağlantıları ve modern iOS arayüzleri.',
        description: [
          'Smart Beauty, kullanıcıların kozmetik ürünlerini keşfedip satın alabildiği bir iOS uygulamasıdır. Ürün kataloğu, sepet, favoriler ve ödeme akışı uçtan uca Swift ile kuruldu.',
          'Backend ile REST API üzerinden haberleşen katman, ürün ve sipariş verilerini önbelleğe alarak çevrimdışı deneyimi güçlendiriyor. Arayüzde modern iOS bileşenleri ve akıcı geçişler kullanıldı.',
          'Ödeme sistemleri entegrasyonu ve hata durumlarının kullanıcıya net biçimde aktarılması projenin öne çıkan başlıkları oldu.',
        ],
        tech: ['Swift', 'UIKit', 'REST API', 'Ödeme Entegrasyonu'],
        image: '/projects/smart-beauty.svg',
        github: 'https://github.com/ulas20',
        demo: '',
      },
      {
        slug: 'covid-cough-detection',
        title: 'Öksürük Sesinden COVID-19 Tespiti',
        summary:
          'Python ve makine öğrenmesi ile ses verilerinden COVID-19 ve sağlıklı sınıfların tahmin edilmesi.',
        description: [
          'Öksürük ses kayıtlarından öznitelik (MFCC, spektral özellikler) çıkararak COVID-19 pozitif ve sağlıklı bireyleri ayırt etmeyi amaçlayan bir sınıflandırma çalışması.',
          'Veri ön işleme, dengesiz sınıflar için örnekleme stratejileri ve model karşılaştırmaları Python ile yürütüldü. Değerlendirmede accuracy, precision, recall ve karışıklık matrisi kullanıldı.',
          'Çalışma, sesin klinik olmayan bir ön eleme sinyali olarak taşıdığı potansiyeli ve sınırlarını inceliyor.',
        ],
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Ses İşleme'],
        image: '/projects/covid-cough.svg',
        github: 'https://github.com/ulas20',
        demo: '',
      },
      {
        slug: 'kisisel-portfolyo',
        title: 'Kişisel Portföy',
        summary:
          'React, Vite, Tailwind CSS ve Framer Motion ile geliştirilen bu portföy sitesi.',
        description: [
          'Şu anda görüntülediğiniz site. Bileşen tabanlı bir mimari, koyu/açık tema, çok dilli altyapı ve erişilebilirlik odaklı bir yapı ile kuruldu.',
          'Animasyonlar Framer Motion ile yumuşak ve performanslı tutuldu; hareket azaltma tercihi olan kullanıcılar için tüm hareketler devre dışı bırakılabiliyor.',
          '"npm run build" ile tamamen statik dosyalara derlenip herhangi bir hosting hizmetine yüklenebiliyor.',
        ],
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        image: '/projects/portfolio.svg',
        github: 'https://github.com/ulas20',
        demo: '',
      },
    ],
  },

  timeline: {
    heading: 'Deneyim & Eğitim',
    title: 'Yolculuğum',
    note: '* İçerikler örnektir; src/data/content.tr.js üzerinden düzenlenebilir.',
    items: [
      {
        id: 'edu-1',
        type: 'education',
        date: '2021 — 2025',
        org: 'Üniversite',
        role: 'Yönetim Bilişim Sistemleri, Lisans',
        points: [
          'Yazılım geliştirme, veri tabanı yönetimi ve iş analizi üzerine dersler.',
          'Bitirme projesi: ses verisiyle makine öğrenmesi tabanlı sınıflandırma.',
        ],
      },
      {
        id: 'work-1',
        type: 'work',
        date: '2024',
        org: 'Teknoloji Şirketi (Staj)',
        role: 'iOS Developer Stajyeri',
        points: [
          'Mevcut bir iOS uygulamasında yeni ekranların Swift ile geliştirilmesi.',
          'REST API entegrasyonları ve hata ayıklama süreçlerine katkı.',
          'Kod incelemeleri ve sürüm yönetimi pratikleri (Git).',
        ],
      },
      {
        id: 'work-2',
        type: 'work',
        date: '2025',
        org: 'Bağımsız',
        role: 'iOS & ML Projeleri',
        points: [
          'Swift ile kişisel iOS uygulamaları ve API tabanlı çözümler.',
          'Python ile veri analizi ve makine öğrenmesi denemeleri.',
        ],
      },
    ],
  },

  contact: {
    heading: 'İletişim',
    title: 'Birlikte bir şeyler geliştirelim',
    description:
      'Bir proje fikri, iş birliği ya da sadece merhaba demek için yazabilirsiniz. Genellikle 1–2 gün içinde dönüş yapıyorum.',
    emailCta: 'E-posta Gönder',
    form: {
      name: 'Ad Soyad',
      email: 'E-posta',
      message: 'Mesajınız',
      submit: 'Gönder',
      sending: 'Gönderiliyor…',
      success: 'Teşekkürler! Mesajınız ulaştı, en kısa sürede dönüş yapacağım.',
      error: 'Bir şeyler ters gitti. Lütfen doğrudan e-posta ile ulaşın.',
      notConfigured:
        'İletişim formu henüz yapılandırılmadı (src/config/site.js → FORMSPREE_ENDPOINT). O zamana kadar e-posta butonunu kullanabilirsiniz.',
      required: 'Bu alan zorunlu.',
      invalidEmail: 'Geçerli bir e-posta girin.',
    },
  },

  footer: {
    credit: 'Designed & Developed by Ulaş Argüz',
    backToTop: 'Yukarı çık',
  },
};
