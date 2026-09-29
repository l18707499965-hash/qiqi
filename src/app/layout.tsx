import type { Metadata } from 'next';
import './globals.css';
import { SITE, SOFTWARE_JSON_LD } from '@/lib/site-config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingDownload } from '@/components/layout/floating-download';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    SOFTWARE_JSON_LD,
    {
      '@type': 'WebSite',
      name: SITE.name,
      alternateName: SITE.enName,
      description: SITE.description,
      url: SITE.baseUrl,
      inLanguage: 'zh-CN',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `${SITE.name} - ${SITE.slogan} | 安卓免费下载`,
    template: `${SITE.name} | %s`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  category: '影视应用',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} - ${SITE.slogan} | 安卓免费下载`,
    description: SITE.description,
    url: SITE.baseUrl,
    locale: 'zh_CN',
    images: [
      {
        url: SITE.iconUrl,
        width: 512,
        height: 512,
        alt: `${SITE.name} App 图标`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `${SITE.name} - ${SITE.slogan}`,
    description: SITE.description,
    images: [SITE.iconUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: SITE.iconUrl,
    apple: SITE.iconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <FloatingDownload />
      </body>
    </html>
  );
}