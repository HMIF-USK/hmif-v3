interface ColorConfig {
  background: string;
  foreground: string;
}

interface ThemePalette {
  background: string;
  foreground: string;
  card: ColorConfig;
  popover: ColorConfig;
  primary: ColorConfig;
  secondary: ColorConfig;
  muted: ColorConfig;
  accent: ColorConfig;
  destructive: ColorConfig;
  warning: ColorConfig;
  success: ColorConfig;
  info: ColorConfig;
  border: string;
  input: string;
  ring: string;
  brand: string;
  brandSoft: string;
  brandDeep: string;
  brandMuted: string;
  surface: string;
  surfaceMuted: string;
  surfaceStrong: string;
}

interface ThemeConfig {
  light: ThemePalette;
  dark: ThemePalette;
}

export const themeConfig: ThemeConfig = {
  light: {
    // dummy palette (temporary)
    background: '#F8FAFC',
    foreground: '#0F172A',
    card: {
      background: '#FFFFFF',
      foreground: '#0F172A',
    },
    popover: {
      background: '#FFFFFF',
      foreground: '#0F172A',
    },
    primary: {
      background: '#2563EB',
      foreground: '#FFFFFF',
    },
    secondary: {
      background: '#E2E8F0',
      foreground: '#0F172A',
    },
    muted: {
      background: '#EEF2FF',
      foreground: 'rgba(15, 23, 42, 0.6)',
    },
    accent: {
      background: '#DBEAFE',
      foreground: '#1D4ED8',
    },
    destructive: {
      background: '#DC2626',
      foreground: '#FFFFFF',
    },
    warning: {
      background: '#F59E0B',
      foreground: '#7C2D12',
    },
    success: {
      background: '#22C55E',
      foreground: '#14532D',
    },
    info: {
      background: '#0EA5E9',
      foreground: '#0C4A6E',
    },
    border: 'rgba(15, 23, 42, 0.2)',
    input: 'rgba(15, 23, 42, 0.2)',
    ring: 'rgba(37, 99, 235, 0.35)',
    brand: '#3B82F6',
    brandSoft: '#93C5FD',
    brandDeep: '#1D4ED8',
    brandMuted: 'rgba(59, 130, 246, 0.35)',
    surface: '#E2E8F0',
    surfaceMuted: '#CBD5E1',
    surfaceStrong: '#94A3B8',
  },
  dark: {
    background: '#0E0A17',
    foreground: '#F5EAFF',
    card: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    popover: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    primary: {
      background: '#911DEC',
      foreground: '#F5EAFF',
    },
    secondary: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    muted: {
      background: '#2A2A2A',
      foreground: 'rgba(245, 234, 255, 0.6)',
    },
    accent: {
      background: '#2A2A2A',
      foreground: '#F5EAFF',
    },
    destructive: {
      background: '#FA0C00',
      foreground: '#F5EAFF',
    },
    warning: {
      background: '#FECA13',
      foreground: '#FECA1322',
    },
    success: {
      background: '#28DE25',
      foreground: '#28DE2522',
    },
    info: {
      background: '#04B4FC',
      foreground: '#04B4FC22',
    },
    border: 'rgba(245, 234, 255, 0.1)',
    input: 'rgba(245, 234, 255, 0.15)',
    ring: 'rgba(245, 234, 255, 0.3)',
    brand: '#873AE3',
    brandSoft: '#D3AEE9',
    brandDeep: '#4A207D',
    brandMuted: 'rgba(123, 83, 171, 0.6)',
    surface: '#393054',
    surfaceMuted: '#302443',
    surfaceStrong: '#332A55',
  },
};