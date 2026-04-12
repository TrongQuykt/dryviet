import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { FloatingContact } from '@/components/common/FloatingContact'
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.vercel.app'),

  verification: {
    google: 'google-site-verification-placeholder',
  },
  title: {
    default: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa | KOTHECHE',
    template: '%s | KOTHECHE',
  },
  description:
    'Sấy thăng hoa uy tín tại TP.Hồ Chí Minh. Chuyên sấy thăng hoa trái cây, rau củ, dược liệu. Đạt chuẩn FDA, ISO 22000, HACCP. Thương hiệu KOTHECHE có mặt trên Amazon Mỹ.',
  keywords: [
    'sấy thăng hoa', 'sấy thăng hoa trái cây', 'freeze dried OEM Vietnam',
    'KOTHECHE', 'freeze dried food', 'Việt Nam Cường Thịnh', 'gia công đóng gói nông sản',
    'xuất khẩu nông sản', 'FDA ISO HACCP', 'freeze dried dragon fruit mango',
  ],
  authors: [{ name: 'Vietnam Cuong Thinh Co., Ltd', url: 'https://dryviet.com' }],
  creator: 'Vietnam Cuong Thinh Co., Ltd',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://dryviet.vercel.app',
    siteName: 'Việt Nam Cường Thịnh – KOTHECHE',
    title: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa | KOTHECHE',
    description: 'Sấy thăng hoa trái cây, rau củ, dược liệu tại TP.HCM. Đạt chuẩn FDA, ISO 22000, HACCP. Xuất khẩu Amazon Mỹ.',
    images: [{ url: '/images/logo/KoTheChe - Logo-01.png', width: 1200, height: 630, alt: 'Vietnam Cuong Thinh - KOTHECHE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa | KOTHECHE',
    description: 'Sấy thăng hoa trái cây, rau củ, dược liệu TP.HCM. OEM xuất khẩu Mỹ, Nhật, Hàn. FDA, ISO 22000, HACCP.',
    images: ['/images/logo/KoTheChe - Logo-01.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://dryviet.vercel.app/#organization',
        'name': 'Việt Nam Cường Thịnh',
        'alternateName': 'KOTHECHE',
        'url': 'https://dryviet.vercel.app',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://dryviet.vercel.app/images/logo/KoTheChe - Logo-01.png',
          'width': '512',
          'height': '512'
        },
        'image': 'https://dryviet.vercel.app/images/banner/banner2.jpg',
        'foundingDate': '2024',
        'sameAs': [
          'https://www.facebook.com/Saythanghoa8181/',
          'https://www.instagram.com/kotheche.snack/',
          'https://www.amazon.com/dp/B0DTJ4MZ4L?th=1'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+84 868 021 818',
          'contactType': 'customer service',
          'areaServed': 'VN',
          'availableLanguage': ['Vietnamese', 'English']
        }
      },
      {
        '@type': 'FoodEstablishment',
        '@id': 'https://dryviet.vercel.app/#localbusiness',
        'name': 'Nhà Máy Sấy Thăng Hoa Việt Nam Cường Thịnh',
        'image': 'https://dryviet.vercel.app/images/banner/banner2.jpg',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '137 Thạnh Lộc 41, Phường Thạnh Lộc',
          'addressLocality': 'Quận 12',
          'addressRegion': 'Hồ Chí Minh',
          'postalCode': '700000',
          'addressCountry': 'VN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 10.8789,
          'longitude': 106.6645
        },
        'url': 'https://dryviet.vercel.app',
        'telephone': '+84 868 021 818',
        'priceRange': '$$',
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '08:00',
            'closes': '17:00'
          }
        ],
        'parentOrganization': { '@id': 'https://dryviet.vercel.app/#organization' }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dryviet.vercel.app/#website',
        'url': 'https://dryviet.vercel.app',
        'name': 'Việt Nam Cường Thịnh - Kỹ Thuật Sấy Thăng Hoa',
        'publisher': { '@id': 'https://dryviet.vercel.app/#organization' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dryviet.vercel.app/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Trang Chủ',
            'item': 'https://dryviet.vercel.app'
          }
        ]
      }
    ]
  }

  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster richColors position="top-center" />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics gaId="G-Y7K50JD31Z" />
      </body>
    </html>
  )
}
