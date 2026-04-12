import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/features/home/HeroSection'
import { CompanyLine } from '@/features/home/CompanyLine'
import { BrandLine } from '@/features/home/BrandLine'
import { LazySection } from '@/components/common/LazySection'

export const metadata: Metadata = {
  title: 'Việt Nam Cường Thịnh – Công nghệ Sấy Thăng Hoa | KOTHECHE',
  description: 'Nhà máy sấy thăng hoa xuất khẩu chuẩn quốc tế tại TP.HCM. Chuyên gia công OEM/ODM nông sản, trái cây nhiệt đới đạt chuẩn FDA, ISO 22000, HACCP.',
  openGraph: {
    title: 'Việt Nam Cường Thịnh – Nhà Máy Sấy Thăng Hoa Xuất Khẩu',
    description: 'Chuyên gia công OEM/ODM trái cây sấy thăng hoa cao cấp. Đạt chuẩn FDA, ISO 22000, HACCP. Đối tác tin cậy cho xuất khẩu nông sản Việt.',
    images: ['/images/banner/banner2.jpg'],
  },
  twitter: {
    title: 'Việt Nam Cường Thịnh – Sấy Thăng Hoa Chuẩn Quốc Tế',
    description: 'Nhà máy sấy thăng hoa hiện đại tại TP.HCM. Gia công xuất khẩu chuẩn FDA, ISO 22000.',
    images: ['/images/banner/banner2.jpg'],
  },
}

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

      <LazySection minHeightClass="min-h-[400px] lg:min-h-[650px]">
        <BannerMarquee />
      </LazySection>

      <FruitLine />

      <LazySection minHeightClass="min-h-[600px] lg:min-h-[800px]">
        <AboutSection />
      </LazySection>

      <LazySection minHeightClass="min-h-[300px] lg:min-h-[450px]">
        <LeadershipSection />
      </LazySection>

      <LazySection minHeightClass="min-h-[1400px] lg:min-h-[950px]">
        <ServicesOverview />
      </LazySection>

      <LazySection minHeightClass="min-h-[1200px] lg:min-h-[900px]">
        <ProcessSection />
      </LazySection>

      <LazySection minHeightClass="min-h-[1500px] lg:min-h-[1000px]">
        <FactorySection />
      </LazySection>

      <LazySection minHeightClass="min-h-[700px] lg:min-h-[800px]">
        <KothecheBrand />
      </LazySection>

      <LazySection minHeightClass="min-h-[1600px] lg:min-h-[1100px]">
        <ProductsTeaser />
      </LazySection>

      <LazySection minHeightClass="min-h-[300px] lg:min-h-[450px]">
        <CertificationsSection />
      </LazySection>

      <LazySection minHeightClass="min-h-[400px] lg:min-h-[500px]">
        <ContractsSection />
      </LazySection>

      <LazySection minHeightClass="min-h-[900px] lg:min-h-[700px]">
        <BlogTeaser />
      </LazySection>

      <LazySection minHeightClass="min-h-[500px] lg:min-h-[600px]">
        <TestimonialsSection />
      </LazySection>

      <LazySection minHeightClass="min-h-[400px] lg:min-h-[500px]">
        <CTASection />
      </LazySection>
    </>
  )
}
