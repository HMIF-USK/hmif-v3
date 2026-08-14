import { metadata, siteConfig } from './metadata';
import '@/styles/globals.css';
import Providers from './providers';
import { ThemeProvider } from '@/core/providers/theme.provider';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.locale} className="dark" suppressHydrationWarning>
      <body className="font-montserrat scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-primary scrollbar-track-background">
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
