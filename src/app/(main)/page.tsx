import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/features/home/HeroSection'

export const metadata: Metadata = {
  title: 'Việt Nam Cường Thịnh – Tiên phong Công nghệ Sấy Thăng Hoa | DryViet',
  description: 'Nhà máy sấy thăng hoa xuất khẩu chuẩn quốc tế tại TP.HCM. Chuyên gia công OEM/ODM nông sản, trái cây nhiệt đới đạt chuẩn FDA, ISO 22000, HACCP.',
}
import { CompanyLine } from '@/features/home/CompanyLine'
import { BrandLine } from '@/features/home/BrandLine'
import { LazySection } from '@/components/common/LazySection'

// Dynamic imports for below-the-fold sections
const BannerMarquee = dynamic(() => import('@/features/home/BannerMarquee').then(m => m.BannerMarquee))
const ServicesOverview = dynamic(() => import('@/features/home/ServicesOverview').then(m => m.ServicesOverview))
const FactorySection = dynamic(() => import('@/features/home/FactorySection').then(m => m.FactorySection))
const CertificationsSection = dynamic(() => import('@/features/home/CertificationsSection').then(m => m.CertificationsSection))
const ProcessSection = dynamic(() => import('@/features/home/ProcessSection').then(m => m.ProcessSection))
const ContractsSection = dynamic(() => import('@/features/home/ContractsSection').then(m => m.ContractsSection))
const KothecheBrand = dynamic(() => import('@/features/home/KothecheBrand').then(m => m.KothecheBrand))
const ProductsTeaser = dynamic(() => import('@/features/home/ProductsTeaser').then(m => m.ProductsTeaser))
const AboutSection = dynamic(() => import('@/features/home/AboutSection').then(m => m.AboutSection))
const LeadershipSection = dynamic(() => import('@/features/home/LeadershipSection').then(m => m.LeadershipSection))
const BlogTeaser = dynamic(() => import('@/features/home/BlogTeaser').then(m => m.BlogTeaser))
const TestimonialsSection = dynamic(() => import('@/features/home/TestimonialsSection').then(m => m.TestimonialsSection))
const CTASection = dynamic(() => import('@/features/home/CTASection').then(m => m.CTASection))
const FruitLine = dynamic(() => import('@/features/home/FruitLine').then(m => m.FruitLine))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyLine />
      <BrandLine />
      
      <LazySection height="600px">
        <BannerMarquee />
      </LazySection>

      <LazySection height="200px">
        <FruitLine />
      </LazySection>

      <LazySection height="600px">
        <AboutSection />
      </LazySection>

      <LazySection height="400px">
        <LeadershipSection />
      </LazySection>

      <LazySection height="500px">
        <ServicesOverview />
      </LazySection>

      <LazySection height="500px">
        <ProcessSection />
      </LazySection>

      <LazySection height="600px">
        <FactorySection />
      </LazySection>

      <LazySection height="500px">
        <KothecheBrand />
      </LazySection>

      <LazySection height="600px">
        <ProductsTeaser />
      </LazySection>

      <LazySection height="400px">
        <CertificationsSection />
      </LazySection>

      <LazySection height="400px">
        <ContractsSection />
      </LazySection>

      <LazySection height="500px">
        <BlogTeaser />
      </LazySection>

      <LazySection height="400px">
        <TestimonialsSection />
      </LazySection>

      <LazySection height="400px">
        <CTASection />
      </LazySection>
    </>
  )
}
