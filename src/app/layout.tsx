import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com'),
  title: {
    default: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa | KOTHECHE',
    template: '%s | KOTHECHE',
  },
  description:
    'Sấy thăng hoa uy tín tại TP.HCM. Chuyên sấy thăng hoa trái cây, rau củ, dược liệu. Đạt chuẩn FDA, ISO 22000, HACCP. Thương hiệu KOTHECHE có mặt trên Amazon Mỹ.',
  keywords: [
    'sấy thăng hoa', 'sấy thăng hoa trái cây', 'freeze dried OEM Vietnam',
    'KOTHECHE', 'freeze dried food', 'Việt Nam Cường Thịnh', 'gia công đóng gói nông sản',
    'xuất khẩu nông sản', 'FDA ISO HACCP', 'freeze dried dragon fruit mango',
  ],
  authors: [{ name: 'Vietnam Cuong Thinh Co., Ltd', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com' }],
  creator: 'Vietnam Cuong Thinh Co., Ltd',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com',
    siteName: 'Việt Nam Cường Thịnh – KOTHECHE',
    title: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa | KOTHECHE',
    description: 'Sấy thăng hoa trái cây, rau củ, dược liệu tại TP.HCM. Đạt chuẩn FDA, ISO 22000, HACCP. Xuất khẩu Amazon Mỹ.',
    images: [{ url: '/images/logo/KoTheChe - Logo-05.png', width: 1200, height: 630, alt: 'Vietnam Cuong Thinh - KOTHECHE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa | KOTHECHE',
    description: 'Sấy thăng hoa trái cây, rau củ, dược liệu TP.HCM. OEM xuất khẩu Mỹ, Nhật, Hàn. FDA, ISO 22000, HACCP.',
    images: ['/images/logo/KoTheChe - Logo-05.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vietnam Cuong Thinh (DryViet)',
  image: (process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com') + '/images/logo/KoTheChe - Logo-05.png',
  '@id': (process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com') + '/#organization',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com',
  telephone: '+84 868 021 818',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '137 Thạnh Lộc 41, Phường Thạnh Lộc, Quận 12',
    addressLocality: 'TP. Hồ Chí Minh',
    addressCountry: 'VN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.8711,
    longitude: 106.6845
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    opens: '08:00',
    closes: '17:00'
  },
  sameAs: [
    'https://facebook.com/vietnamcuongthinh',
    'https://instagram.com/kotheche'
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <Toaster richColors position="top-center" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Replace with actual GTM tracking ID when ready */}
        <GoogleAnalytics gaId="G-Y7K50JD31Z" />
      </body>
    </html>
  )
}
