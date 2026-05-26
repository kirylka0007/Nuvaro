import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CookieBanner from '@/components/analytics/CookieBanner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nuvaro — Intelligent Automation for Finance & Operations',
  description:
    'Nuvaro Flow delivers process mining diagnostics for SMEs in 5 days from £299. Nuvaro Sync automates Power BI to Word reporting for finance teams.',
  metadataBase: new URL('https://nuvaro.co.uk'),
  openGraph: {
    title: 'Nuvaro — Intelligent Automation for Finance & Operations',
    description:
      'Nuvaro Flow delivers process mining diagnostics for SMEs in 5 days from £299. Nuvaro Sync automates Power BI to Word reporting for finance teams.',
    url: 'https://nuvaro.co.uk',
    siteName: 'Nuvaro',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Consent Mode v2 — must run before any GA scripts */}
        <Script
          id="gtag-consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied'
              });
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />

        {/* GA4 — only loaded when the env var is set */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
