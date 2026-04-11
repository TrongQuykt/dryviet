import { Metadata } from 'next'
import { AboutContent } from '@/features/about/AboutContent'

export const metadata: Metadata = {
  title: 'Về Việt Nam Cường Thịnh - Tiên phong Sấy Thăng Hoa',
  description: 'Khám phá sứ mệnh nâng tầm nông sản Việt ra thế giới bằng công nghệ sấy thăng hoa tiên tiến, giữ trọn 97% dinh dưỡng và giá trị tự nhiên từ vùng nguyên liệu sạch.',
}

export default function AboutPage() {
  return <AboutContent />
}
