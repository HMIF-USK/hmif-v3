import React from 'react';
// import LampuSvg from '@/components/svg/achievements/lampu';
// import Logo from '@/components/svg/achievements/logofix';
import { title } from 'process';

interface AppConfig {
  name: string;
  description: string;
  logo: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    image: string;
  };
  social_media: {
    twitter: {
      url: string;
      icon: string;
    };
    instagram: {
      url: string;
      icon: string;
    };
    linkedin: {
      url: string;
      icon: string;
    };
    youtube: {
      url: string;
      icon: string;
    };
    tiktok: {
      url: string;
      icon: string;
    };
  };
}

export const appConfig: AppConfig = {
  name: 'App',
  description: 'App',
  logo: '/images/HMIF-No-BG.png',
  metadata: {
    title: 'App',
    description: 'App',
    keywords: ['App'],
    author: 'App',
    image: 'App',
  },
  social_media: {
    twitter: {
      url: 'https://twitter.com/app',
      icon: 'hugeicons:new-twitter-rectangle',
    },
    instagram: {
      url: 'https://instagram.com/app',
      icon: 'basil:instagram-outline',
    },
    linkedin: {
      url: 'https://linkedin.com/app',
      icon: 'tabler:brand-linkedin',
    },
    youtube: {
      url: 'https://youtube.com/app',
      icon: 'mingcute:youtube-line',
    },
    tiktok: {
      url: 'https://tiktok.com/app',
      icon: 'hugeicons:tiktok',
    },
  },
};

interface NavigationMenuConfig {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
    children?: NavigationMenuConfig['items'];
  }[];
}

export const navigationMenuConfig: NavigationMenuConfig = {
  items: [
    {
      title: 'Home',
      href: '/',
      description: 'Home',
    },
    {
      title: 'Kelas',
      href: '/kelas',
      description: 'Kelas',
    },
  ],
};

export interface BoardTypes {
  title: string;
  date: string;
  image?: any;
}

export const BoardData: BoardTypes[] = [
  {
    title: 'Himpunan dan Proker Terbaik FMIPA Awards 2024',
    date: '2024',
    image: '',
  },
  {
    title: 'Himpunan dan Proker Terbaik FMIPA Awards 2024',
    date: '2025',
    image: '',
  },
  {
    title: 'Himpunan dan Proker Terbaik FMIPA Awards 2024',
    date: '2026',
    image: '2',
  },
  {
    title: 'Himpunan dan Proker Terbaik FMIPA Awards 2024',
    date: '2027',
    image: '2',
  },
  {
    title: 'Himpunan dan Proker Terbaik FMIPA Awards 2024',
    date: '2028',
    image: '',
  },
  {
    title: 'Himpunan dan Proker Terbaik FMIPA Awards 2024',
    date: '2029',
    image: '2',
  },
];

export interface LampuType {
  image: any;
}

// export const LampuData: LampuType[] = [
//   {
//     image: LampuSvg,
//   },
//   {
//     image: LampuSvg,
//   },
//   {
//     image: LampuSvg,
//   },
//   {
//     image: LampuSvg,
//   },
//   {
//     image: LampuSvg,
//   },
//   {
//     image: LampuSvg,
//   },
// ];

export interface LogoType {
  icon: any;
}

// export const LogoData: LogoType[] = [
//   {
//     icon: Logo,
//   },
//   {
//     icon: Logo,
//   },
// ];

export interface CardEventType {
  title: string;
  desc: string;
  image?: string;
}

export const CardEventData: CardEventType[] = [
  {
    title: 'Diki',
    desc: '2020',
    image: '',
  },
  {
    title: 'Dika',
    desc: '2020',
    image: '',
  },
  {
    title: 'Diku',
    desc: '2020',
    image: '',
  },
  {
    title: 'Diko',
    desc: '2020',
    image: '',
  },
  {
    title: 'dikt',
    desc: '2020',
    image: '',
  },
  {
    title: 'dikg',
    desc: '2020',
    image: '',
  },
];
