import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-tajawal',
});

const SITE_URL = 'https://ttabba.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'تتبَّع — منصة إدارة المهام والمشاريع والعقود بالذكاء الاصطناعي',
  description:
    'تتبَّع منصة تشغيل متكاملة للشركات ومكاتب الاستشارات لإدارة العملاء والمشاريع والمهام والملفات وأتمتة العقود، مدعومة بالذكاء الاصطناعي.',
  keywords: [
    'تتبَّع',
    'إدارة المهام',
    'إدارة المشاريع',
    'أتمتة العقود',
    'الذكاء الاصطناعي',
    'مكاتب الاستشارات',
    'إدارة العملاء',
  ],
  authors: [{ name: 'تتبَّع' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/logo-black.svg',
  },
  openGraph: {
    title: 'تتبَّع — منصة التشغيل المتكاملة للشركات',
    description: 'اجمع إدارة العملاء والمشاريع والمهام والعقود في نظام واحد.',
    type: 'website',
    locale: 'ar_SA',
    url: SITE_URL,
    siteName: 'تتبَّع',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تتبَّع — منصة التشغيل المتكاملة للشركات',
    description: 'اجمع إدارة العملاء والمشاريع والمهام والعقود في نظام واحد.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'تتبَّع',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'منصة تشغيل متكاملة للشركات ومكاتب الاستشارات لإدارة العملاء والمشاريع والمهام والملفات وأتمتة العقود، مدعومة بالذكاء الاصطناعي.',
  inLanguage: 'ar',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'SAR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
