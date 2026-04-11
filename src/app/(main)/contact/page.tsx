import { Metadata } from 'next'
import { ContactForm } from '@/features/contact/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Liên hệ Hợp tác - Báo giá Gia công Sấy Thăng Hoa',
  description: 'Liên hệ Việt Nam Cường Thịnh để nhận báo giá gia công sấy thăng hoa OEM chuyên nghiệp hoặc đăng ký phân phối thương hiệu trái cây cao cấp KOTHECHE toàn cầu.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Small Hero Section with Banner Background */}
      <section className="relative pt-24 pb-12 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/banner/banner.jpg')] bg-cover bg-center opacity-10 blur-sm transform scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>

        <div className="container-xl relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight text-brand-950">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="max-w-xxl mx-auto text-slate-500 text-base md:text-lg">
            Chúng tôi luôn sẵn sàng hỗ trợ các giải pháp sấy thăng hoa tối ưu cho bạn.
          </p>
        </div>
      </section>

      {/* Simple 2-Column Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-brand-600 mb-2 block text-center md:text-left">
                  Thông Tin Liên Hệ
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
                  Kết nối trực tiếp
                </h2>
                <p className="text-slate-600 leading-relaxed">Nếu bạn có bất kỳ thắc mắc nào về dịch vụ OEM hoặc sản phẩm KOTHECHE, đừng ngần ngại liên hệ.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Địa Chỉ Nhà Máy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">137 Thạnh Lộc 41, Phường Thạnh Lộc, Quận 12, TP. Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Số Điện Thoại / Zalo</h4>
                    <a href="tel:+84969665687" className="text-gray-600 text-sm hover:text-brand-600">0868021818</a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Email</h4>
                    <a href="mailto:contact@dryviet.com" className="text-gray-600 text-sm hover:text-brand-600">sales.vietnamcuongthinh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Giờ Làm Việc</h4>
                    <p className="text-gray-600 text-sm">Thứ Hai - Thứ Bảy (8:00 - 17:00)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Focused Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl lg:p-2">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

