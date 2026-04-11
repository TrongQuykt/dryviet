import { Button } from '@/components/ui/Button'
import { ArrowRight, MessageSquare } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-brand-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, #ffffff 0%, transparent 60%)' }} />
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 80% -50%, #ffffff 0%, transparent 60%)' }} />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Map Column - LEFT */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/10 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.103446658277!2d106.68635680000001!3d10.8797361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d70050c638ab%3A0x11277f4a9cb12e29!2zU-G6pXkgdGjEg25nIGhvYSBWTkNUIChWaeG7h3QgTmFtIEPGsOG7nW5nIFRo4buLbmgp!5e0!3m2!1svi!2s!4v1775487914954!5m2!1svi!2s"
                  className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] brightness-[0.9]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <span className="text-[10px] font-black text-brand-200 tracking-[0.3em] uppercase">Văn phòng & Nhà máy</span>
              <p className="text-xs text-brand-100/60 mt-2 font-medium">137 Đường TL 41, Thạnh Lộc, Quận 12, TP. HCM</p>
            </div>
          </div>

          {/* Content Column - RIGHT */}
          <div className="lg:col-span-7 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display leading-[1.1] tracking-tight">
              Sẵn Sàng Nâng Tầm Thương Hiệu <br className="hidden md:block" /> Với Nguyên Liệu Cao Cấp?
            </h2>
            <p className="text-md lg:text-lg text-cream mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Từ yêu cầu mẫu thử đến các đơn hàng OEM số lượng lớn. Hãy thảo luận về yêu cầu của bạn và bắt đầu hành trình ngay hôm nay.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button
                href="/contact"
                size="lg"
                className="w-full sm:w-auto bg-white text-brand-900 hover:bg-cream px-6 sm:px-10 text-sm sm:text-base shadow-xl shadow-black/10"
              >
                Liên Hệ Đội Ngũ Kinh Doanh
                <ArrowRight size={18} className="ml-2 sm:w-5 sm:h-5" />
              </Button>
              <div className="flex items-center gap-3 text-sm text-brand-100 font-medium">
                <span className="opacity-40">hoặc</span>
                <a href="https://zalo.me/84969665687" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  Chat qua Zalo
                </a>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-3 text-brand-200/60 font-medium text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Phản hồi trong vòng 12 giờ • Hỗ trợ giao hàng toàn cầu
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
