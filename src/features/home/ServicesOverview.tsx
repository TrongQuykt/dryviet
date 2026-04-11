"use client";

import { Leaf, Package, ShieldCheck, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export function ServicesOverview() {
  const services = [
    {
      icon: <Leaf size={32} />,
      title: 'Sấy Thăng Hoa Nông Sản',
      description: 'Quy trình hoàn chỉnh từ rửa, cắt, khử trùng, cấp đông đến sấy thăng hoa với công nghệ hiện đại nhất.',
      features: [
        'Năng lượng sấy: 200-500kg/mẻ',
        'Sấy được trái cây, rau củ, dược liệu',
        'Kiểm soát nhiệt độ - thời gian - độ ẩm',
        'Giữ nguyên hương vị và dinh dưỡng'
      ]
    },
    {
      icon: <Package size={32} />,
      title: 'Đóng Gói Thành Phẩm',
      description: 'Đóng gói chuyên nghiệp với túi zip, bơm khí ni tơ bảo quản và dán nhãn theo yêu cầu khách hàng.',
      features: [
        'Đóng gói túi zip cao cấp',
        'Bơm khí ni tơ bảo quản hoặc hút chân không',
        'Dán nhãn theo thiết kế riêng',
        'Đóng thùng carton xuất khẩu'
      ]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Đảm Bảo Chất Lượng',
      description: 'Tuân thủ nghiêm ngặt các tiêu chuẩn vệ sinh an toàn thực phẩm và chứng nhận quốc tế.',
      features: [
        'Vệ sinh an toàn thực phẩm',
        'Xưởng sạch, chia khu hợp lý',
        'Chứng nhận FDA, ISO 22000, HACCP',
        'Kiểm tra chất lượng nghiêm ngặt'
      ]
    }
  ]

  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-xs sm:text-sm">
            Giải Pháp Gia Công Toàn Diện
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">
            Dịch Vụ OEM & Đóng Gói
          </h2>
          <p className="text-gray-600 text-lg">Chúng tôi cung cấp giải pháp trọn gói cho các thương hiệu muốn ra mắt sản phẩm sấy thăng hoa cao cấp mà không cần đầu tư nhà máy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2rem] border border-gray-100 bg-white hover:border-brand-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {srv.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight text-center">
                {srv.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 text-center">{srv.description}</p>

              <ul className="space-y-4 w-full">
                {srv.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700 font-medium"
                  >
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button href="/services" variant="outline" size="lg" className="rounded-full px-12">
            Tìm Hiểu Chi Tiết Dịch Vụ
          </Button>
        </div>
      </div>
    </section>
  )
}
