"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Award, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export function AboutSection() {
  const highlights = [
    'Nguồn nguyên liệu trực tiếp từ nông trại đạt chuẩn',
    'Công nghệ sấy thăng hoa tiên tiến nhất hiện nay',
    'Quy trình kiểm soát chất lượng chuẩn ISO/HACCP',
    'Giải pháp gia công OEM linh hoạt cho mọi quy mô'
  ]

  const stats = [
    { icon: <Users size={20} />, label: 'Khách hàng tin tưởng', value: '500+' },
    { icon: <Award size={20} />, label: 'Chứng nhận quốc tế', value: '04+' },
    { icon: <Target size={20} />, label: 'Năm kinh nghiệm', value: '05+' },
  ]

  return (
    <section className="section-pad bg-brand-50/30 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-200/20 blur-3xl -ml-48 rounded-full" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2-xl border-8 border-white">
              <Image
                src="/images/about/our-story.png"
                alt="Việt Nam Cường Thịnh - Từ Nông Trại đến Nhà Máy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </div>

            {/* Floating Stats Block */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block border border-gray-50">
              <div className="space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-600 font-bold tracking-wider uppercase text-xs sm:text-sm block mb-4 text-center">
              Câu Chuyện Của Việt Nam Cường Thịnh
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight text-center">
              Nâng tầm chất lượng <br />
              <span className="text-brand-600">Nông Sản Việt.</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                Từ nền tảng là doanh nghiệp xuất nhập khẩu nông sản tươi như bưởi, dừa, thanh long, sầu riêng,... Sang các thị trường như Mỹ, Hàn, Nhật và châu Âu, chúng tôi đã phát triển thêm mảng gia công sấy thăng hoa và đóng gói với cơ sở sản xuất đạt chuẩn.
              </p>
              <p>
                Bằng công nghệ sấy thăng hoa tiên tiến, chúng tôi chuyển hóa những trái thanh long, xoài, mít tươi ngon nhất thành những sản phẩm snack cao cấp, giữ trọn 97% dinh dưỡng, màu sắc và hương vị nguyên bản mà không cần chất bảo quản.
              </p>
              <p>
                Trở thành đơn vị hàng đầu trong lĩnh vực chế biến, đóng gói và xuất khẩu nông sản tại Việt Nam, góp phần lan tỏa giá trị nông sản Việt Nam ra toàn cầu.
              </p>
              <p>
                Đã có mặt tại Amazon, siêu thị và các chuỗi bán lẻ tại Mỹ và được người tiêu dùng đánh giá cao.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                  <CheckCircle2 className="text-brand-600" size={18} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/about" variant="primary" size="lg" className="rounded-full px-8">
                Tìm Hiểu Thêm Về Chúng Tôi
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="rounded-full px-8">
                Nhận Tư Vấn OEM
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
