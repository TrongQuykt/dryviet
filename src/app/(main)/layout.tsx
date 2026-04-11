import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { FloatingContact } from '@/components/common/FloatingContact'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://dryviet.com/#organization',
        'name': 'Việt Nam Cường Thịnh',
        'url': 'https://dryviet.com',
        'logo': 'https://dryviet.com/images/logo/logo.png',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+84-938-123-456',
          'contactType': 'customer service',
          'areaServed': 'VN',
          'availableLanguage': ['Vietnamese', 'English']
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dryviet.com/#website',
        'url': 'https://dryviet.com',
        'name': 'DryViet - Sấy Thăng Hoa Việt Nam',
        'publisher': { '@id': 'https://dryviet.com/#organization' }
      }
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
