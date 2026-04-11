import { Metadata } from 'next'
import { HeroSection } from '@/features/home/HeroSection'
import { CompanyLine } from '@/features/home/CompanyLine'
import { BrandLine } from '@/features/home/BrandLine'

export const metadata: Metadata = {
  title: 'DryViet - Sấy Thăng Hoa Việt Nam',
  description: 'Nhà máy sấy thăng hoa xuất khẩu chuẩn quốc tế tại TP.HCM.',
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <CompanyLine />
      <BrandLine />
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Đang cấu hình hệ thống... Các phần khác sẽ sớm quay trở lại.
        </h2>
        <p className="mt-4 text-gray-600">Nếu bạn thấy trang này, nghĩa là lỗi 404 đã được khắc phục.</p>
      </div>
    </div>
  )
}
