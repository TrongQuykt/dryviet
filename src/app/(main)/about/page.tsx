import { Metadata } from 'next'
import { AboutContent } from '@/features/about/AboutContent'

export const metadata: Metadata = {
  title: 'Về Việt Nam Cường Thịnh - Sấy Thăng Hoa Uy Tín Tại TP. HCM',
  description: 'Khám phá sứ mệnh nâng tầm nông sản Việt ra thế giới bằng công nghệ sấy thăng hoa tiên tiến, giữ trọn 97% dinh dưỡng và giá trị tự nhiên.',
  openGraph: {
    title: 'Về Việt Nam Cường Thịnh - Câu Chuyện Nông Sản Việt',
    description: 'Tìm hiểu về nhà máy sấy thăng hoa hiện đại và sứ mệnh mang nông sản Việt ra thị trường quốc tế.',
    type: 'website',
    url: 'https://dryviet.vercel.app/about',
    images: ['https://dryviet.vercel.app/images/logo/logo.jpg'],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
