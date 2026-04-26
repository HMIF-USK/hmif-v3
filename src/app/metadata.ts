import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Himpunan Mahasiswa Informatika',
  description:
    'Organisasi mahasiswa informatika terdepan dengan berbagai program pengembangan akademik, penelitian, dan kegiatan kemahasiswaan untuk memajukan bidang teknologi informasi dan komputer',
  url: 'https://hmif.unri.ac.id',
  locale: 'id-ID',
  keywords: [
    'himpunan mahasiswa informatika',
    'hmif',
    'statistika',
    'unsyiah',
    'usk',
    'fmipa usk',
    'biologi',
    'matematika',
    'informatika',
    'teknologi informasi',
    'komputer',
    'programming',
    'software engineering',
    'data science',
    'artificial intelligence',
    'mahasiswa informatika',
    'organisasi mahasiswa',
    'universitas',
    'workshop teknologi',
    'seminar IT',
    'penelitian informatika',
    'pengembangan software',
    'coding bootcamp',
    'teknologi terbaru',
    'komunitas programmer',
    'student organization',
    'computer science',
    'IT events',
    'tech community',
    'indonesia',
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: [{ url: '/images/HMIF-No-BG.png', type: 'image/png' }, { url: '/favicon/favicon.ico' }],
    shortcut: '/images/HMIF-No-BG.png',
    apple: [
      { url: '/images/HMIF-No-BG.png', type: 'image/png' },
      { url: '/images/HMIF-No-BG.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/HMIF-No-BG.png',
        color: '#000000',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/HMIF-No-BG.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/images/HMIF-No-BG.png'],
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-verification-code',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: 'black',
    capable: true,
  },
};
