import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';

const displayFont = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SEVEN INK. TATTOO SOCIETY | Salon de tatuaje București',
    template: '%s | SEVEN INK. TATTOO SOCIETY',
  },
  description:
    'Salon de tatuaje în București. Strada Lipscani 43. Artă, stil și profesionalism. Programări: 0725029404.',
  keywords: ['tatuaje', 'București', 'Lipscani', 'salon tatuaje', 'SEVEN INK'],
  authors: [{ name: 'SEVEN INK TATTOO SOCIETY' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen flex flex-col font-body">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
