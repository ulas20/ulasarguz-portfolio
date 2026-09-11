// =============================================================================
// ENGLISH CONTENT
// Mirror of content.tr.js. Keep the same keys/shape when editing.
// =============================================================================

export const en = {
  meta: {
    title: 'Ulaş Argüz — iOS Developer & Machine Learning',
    description:
      'iOS Developer building user-focused apps with Swift & SwiftUI, and data-driven solutions with Python & machine learning.',
  },

  skipLink: 'Skip to content',

  nav: {
    label: 'Main menu',
    cv: 'Download CV',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    items: [
      { id: 'hakkimda', label: 'About' },
      { id: 'yetenekler', label: 'Skills' },
      { id: 'projeler', label: 'Projects' },
      { id: 'iletisim', label: 'Contact' },
    ],
  },

  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },

  lang: {
    label: 'Language',
  },

  hero: {
    role: 'iOS Developer & Machine Learning Enthusiast',
    greeting: "Hi, I'm Ulaş.",
    description:
      'I build user-focused iOS apps with Swift and SwiftUI, and data-driven solutions with Python and machine learning. I like bringing design, technology and business needs together in one product.',
    primaryCta: 'View my projects',
    secondaryCta: 'Get in touch',
    codeCaption: 'focus.swift',
    scrollHint: 'Scroll',
  },

  about: {
    heading: 'About',
    title: 'A developer who thinks in products.',
    paragraphs: [
      "I'm studying Management Information Systems. Standing between understanding business needs and knowing how software works shapes the products I build.",
      'iOS development and machine learning are the two areas I spend the most time on. On the Swift side I care about clean UI logic and smooth experiences; on the Python side, models that turn data into something meaningful.',
      'My goal is to build products that are actually used — where design, technology and business needs meet.',
    ],
    facts: [
      { label: 'Education', value: 'Management Information Systems' },
      { label: 'Location', value: 'Istanbul, Türkiye' },
      { label: 'Focus', value: 'iOS · Machine Learning' },
      { label: 'Status', value: 'Open to new projects' },
    ],
    lamp: {
      hint: 'Try switching the light on and off',
      turnOff: 'Turn the light off',
      turnOn: 'Turn the light on',
    },
  },

  skills: {
    heading: 'Skills',
    title: 'Technologies I use',
    note: 'The tools I reach for most in day-to-day work.',
    categories: [
      { id: 'ios', label: 'iOS', icon: 'smartphone', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'] },
      { id: 'backend', label: 'Backend', icon: 'server', items: ['Python', 'FastAPI', 'REST API'] },
      { id: 'ai', label: 'Data & AI', icon: 'brain', items: ['Pandas', 'Scikit-learn', 'Machine Learning'] },
      { id: 'tools', label: 'Tools', icon: 'wrench', items: ['Xcode', 'Git', 'GitHub', 'Figma'] },
      { id: 'db', label: 'Database', icon: 'database', items: ['SQL'] },
    ],
  },

  projects: {
    heading: 'Projects',
    title: 'Work I have been building',
    detail: 'View details',
    code: 'GitHub',
    live: 'Live demo',
    close: 'Close',
    items: [
      {
        slug: 'smart-beauty-ios',
        title: 'Smart Beauty iOS',
        summary:
          'A cosmetics shopping app built with Swift — API integrations and modern iOS interfaces.',
        description: [
          'Smart Beauty is an iOS app where users discover and buy cosmetics. The product catalog, cart, favorites and checkout flow were built end to end with Swift.',
          'A layer that talks to the backend over a REST API caches product and order data to strengthen the offline experience. The UI uses modern iOS components and smooth transitions.',
          'Payment system integration and clearly surfacing error states to the user were the highlights of the project.',
        ],
        tech: ['Swift', 'UIKit', 'REST API', 'Payments'],
        image: '/projects/smart-beauty.svg',
        github: 'https://github.com/ulas20',
        demo: '',
      },
      {
        slug: 'covid-cough-detection',
        title: 'COVID-19 Detection from Cough Sounds',
        summary:
          'Predicting COVID-19 vs. healthy classes from audio data using Python and machine learning.',
        description: [
          'A classification study that extracts features (MFCC, spectral features) from cough recordings to distinguish COVID-19 positive from healthy individuals.',
          'Data preprocessing, sampling strategies for imbalanced classes and model comparisons were carried out in Python. Evaluation used accuracy, precision, recall and the confusion matrix.',
          'The work explores both the potential and the limits of sound as a non-clinical pre-screening signal.',
        ],
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Audio processing'],
        image: '/projects/covid-cough.svg',
        github: 'https://github.com/ulas20',
        demo: '',
      },
      {
        slug: 'kisisel-portfolyo',
        title: 'Personal Portfolio',
        summary:
          'This portfolio site, built with React, Vite, Tailwind CSS and Framer Motion.',
        description: [
          'The site you are looking at right now. Built with a component-based architecture, dark/light theme, a multi-language setup and an accessibility-focused structure.',
          'Animations are kept smooth and performant with Framer Motion; every motion can be disabled for users who prefer reduced motion.',
          'It compiles to fully static files with "npm run build" and can be deployed to any hosting service.',
        ],
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        image: '/projects/portfolio.svg',
        github: 'https://github.com/ulas20',
        demo: '',
      },
    ],
  },

  timeline: {
    heading: 'Experience & Education',
    title: 'My journey',
    note: '* Sample content — edit it in src/data/content.en.js.',
    items: [
      {
        id: 'edu-1',
        type: 'education',
        date: '2021 — 2025',
        org: 'University',
        role: 'BSc, Management Information Systems',
        points: [
          'Coursework in software development, database management and business analysis.',
          'Capstone project: machine-learning based classification from audio data.',
        ],
      },
      {
        id: 'work-1',
        type: 'work',
        date: '2024',
        org: 'Technology Company (Internship)',
        role: 'iOS Developer Intern',
        points: [
          'Built new screens in an existing iOS app with Swift.',
          'Contributed to REST API integrations and debugging.',
          'Practiced code review and version control (Git).',
        ],
      },
      {
        id: 'work-2',
        type: 'work',
        date: '2025',
        org: 'Independent',
        role: 'iOS & ML Projects',
        points: [
          'Personal iOS apps and API-based solutions with Swift.',
          'Data analysis and machine learning experiments with Python.',
        ],
      },
    ],
  },

  contact: {
    heading: 'Contact',
    title: "Let's build something together",
    description:
      'Reach out about a project idea, a collaboration, or just to say hi. I usually reply within 1–2 days.',
    emailCta: 'Send an email',
    form: {
      name: 'Full name',
      email: 'Email',
      message: 'Your message',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Thanks! Your message came through — I will get back to you soon.',
      error: 'Something went wrong. Please email me directly.',
      notConfigured:
        'The contact form is not configured yet (src/config/site.js → FORMSPREE_ENDPOINT). Until then, use the email button.',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
    },
  },

  footer: {
    credit: 'Designed & Developed by Ulaş Argüz',
    backToTop: 'Back to top',
  },
};
