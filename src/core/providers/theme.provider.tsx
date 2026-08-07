'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { themeConfig } from '../../configs/theme.config';

type Theme = 'light' | 'dark';
type ThemeValue = string | { background: string; foreground: string };

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const applyTheme = (nextTheme: Theme) => {
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');

    const themeValues = themeConfig[nextTheme];
    (Object.keys(themeValues) as Array<keyof typeof themeValues>).forEach((key) => {
      const value = themeValues[key] as ThemeValue;
      if (typeof value === 'string') {
        document.documentElement.style.setProperty(`--${key}`, value);
      } else {
        document.documentElement.style.setProperty(`--${key}`, value.background);
        document.documentElement.style.setProperty(`--${key}-foreground`, value.foreground);
      }
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme: Theme = storedTheme || 'dark';

    setTheme(initialTheme);
    applyTheme(initialTheme);
    localStorage.setItem('theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
