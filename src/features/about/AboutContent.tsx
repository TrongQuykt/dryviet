'use client'
import Image from 'next/image'
import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Eye,
  Target,
  History,
  Microscope,
  Award,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { StatsSection } from '@/features/home/StatsSection'

export function AboutContent() {
  const pillars = [
    {
      icon: <Target className="text-brand-600" size={24} />,
      title: 'Sứ Mệnh',
      subtitle: 'Chuẩn Mực',
      desc: 'Nâng tầm giá trị nông sản Việt Nam bằng công nghệ sấy thăng hoa tiên tiến nhất.'
    },
    {
      icon: <Eye className="text-brand-600" size={24} />,
      title: 'Tầm Nhìn',
      subtitle: 'Tiên Phong',
      desc: 'Trở thành đối tác chiến lược hàng đầu Đông Nam Á trong công nghệ thực phẩm.'
    },
    {
      icon: <ShieldCheck className="text-brand-600" size={24} />,
      title: 'Chất Lượng',
      subtitle: 'Minh Bạch',
      desc: 'Mỗi gram sản phẩm là minh chứng cho sự chính trực và an toàn tuyệt đối.'
    }
  ]

  return (
    <main className="bg-[#FAFBFC]">
      {/* Chapter 0: The Global Manifesto (Hero) */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-10 blur-sm overflow-hidden lg:translate-y-[-10%]">
          <Image
            src="/images/banner/banner.jpg"
            alt="Về Việt Nam Cường Thịnh"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>

        <div className="container-xl relative z-10 px-4">
          <div className="max-w-4xl text-center lg:text-left">
            <div
              className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-50 text-brand-700 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Kiến Tạo Tương Lai Nông Nghiệp Việt
            </div>

            <h1
              className="animate-fade-up opacity-0 [animation-delay:100ms] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-10 text-brand-950 leading-[1.1] font-display tracking-tight"
            >
              Công Nghệ Sấy Thăng Hoa <br />
              <span className="text-brand-600 mt-2 inline-block">
                Giữ Trọn Tinh Chất.
              </span>
            </h1>

            <p
              className="animate-fade-up opacity-0 [animation-delay:200ms] max-w-xl mx-auto lg:mx-0 text-slate-500 text-sm md:text-xl font-normal leading-relaxed"
            >
              Việt Nam Cường Thịnh là cầu nối chiến lược kết nối di sản nông sản Việt Nam với các tiêu chuẩn sức khỏe khắt khe nhất thế giới.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 1: The Heritage - Our Origin Story */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="container-xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image src="/images/about/our-story.png" alt="Di sản DryViet" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent" />
              </div>
              {/* Floating Badge (Mobile Optimized) */}
              <div className="absolute -right-4 bottom-8 lg:-left-12 lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90 bg-brand-950 text-white px-4 py-2 rounded-lg lg:bg-transparent lg:text-brand-300 lg:p-0 flex items-center gap-6">
                <div className="hidden lg:block w-20 h-px bg-brand-200" />
                <span className="text-[9px] font-black uppercase tracking-widest lg:tracking-[0.5em]">THIẾT LẬP TỪ 2015</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center justify-center gap-3 text-center md:text-left">
                  <History className="text-brand-700" size={20} />
                  <span className="text-brand-800 font-black tracking-[0.2em] uppercase text-[8px] sm:text-[9px]">
                    Chương 01: Di Sản
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 leading-tight font-display tracking-tighter italic text-center md:text-left">
                  Việt Nam Cường Thịnh <br /> Nền Móng Tin Cậy.
                </h2>

                <div className="space-y-4 md:space-y-6 text-slate-500 leading-relaxed text-sm md:text-lg font-medium text-center md:text-left">
                  <p>
                    Hơn một thập kỷ trước, chúng tôi bắt đầu với sứ mệnh giải quyết thách thức về thất thoát sau thu hoạch và suy giảm dinh dưỡng nông sản Việt.
                  </p>

                  <p className="hidden md:block">
                    Ngày nay, chúng tôi đã phát triển thành đơn vị sản xuất cấp doanh nghiệp, tích hợp các công nghệ sấy thăng hoa tinh vi nhất để phục vụ thị trường quốc tế.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6 md:pt-8 border-t border-slate-100">
                  <div className="p-4 md:p-6 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Công suất</p>
                    <p className="text-sm md:text-xl font-bold text-brand-900 leading-none">500kg/Ngày</p>
                  </div>
                  <div className="p-4 md:p-6 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
                    <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Tiêu chuẩn</p>
                    <p className="text-sm md:text-xl font-bold text-brand-900 leading-none">FDA/Global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Science of Precision */}
      <section className="py-12 md:py-24 bg-brand-50/30 overflow-hidden relative">
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-brand-950/5 skew-x-[-12deg] translate-x-1/2" />
        <div className="container-xl px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 lg:mb-8">
                <Microscope className="text-brand-700" size={20} />
                <span className="text-brand-800 font-black tracking-[0.2em] uppercase text-[8px] sm:text-[9px]">
                  Chương 02: Kỹ Thuật
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-slate-900 mb-6 lg:mb-8 font-display leading-tight italic text-center md:text-left">
                Sự Ổn Định Khoa Học <br /> Là Tài Sản Cốt Lõi.
              </h2>

              <p className="text-sm md:text-lg text-slate-500 leading-relaxed font-medium mb-8 lg:mb-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
                Cơ sở hạ tầng sấy thăng hoa của chúng tôi được thiết kế cho sự chính xác tuyệt đối, đảm bảo giữ lại 97% vitamin và màu sắc tự nhiên.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Chân không (< 100 Pa)',
                  'Dinh dưỡng (> 97%)',
                  'Độ ẩm (< 5%)',
                  'Lab Tùy chỉnh'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-brand-600" />
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="p-2 md:p-4 w-full relative">
                <div className="aspect-video relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
                  <Image src="/images/banner/banner2.jpg" alt="Lab" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-brand-800 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
                  <p className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-60">Standard</p>
                  <p className="text-xs md:text-lg font-bold">FSVP Validated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Corporate Strategic Pillars - High Density 2-col on Mobile */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-xl px-4 text-center">
          <div className="mb-12 md:mb-20 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Trụ Cột Doanh Nghiệp</h2>
            <p className="text-gray-500 text-sm md:text-lg">Cơ sở hạ tầng triết lý thúc đẩy sự mở rộng toàn cầu.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="group bg-[#FDFBF9] p-6 lg:p-12 rounded-[1.5rem] lg:rounded-[2.5rem] border border-brand-50 hover:bg-white hover:shadow-2xl transition-all duration-700">
                <div className="mb-4 lg:mb-10 p-2 md:p-4 bg-white rounded-xl w-fit shadow-sm border border-slate-50 mx-auto group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  {p.icon}
                </div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-300 mb-1">{p.subtitle}</p>
                <h3 className="text-sm md:text-2xl font-bold text-slate-900 mb-2 md:mb-6 font-display italic">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-[10px] md:text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Chapter 4: Global Supply Chain - Dark Theme Optimized */}
      <section className="py-12 md:py-24 bg-[#8B4513] text-white relative overflow-hidden">
        <div className="container-xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-16">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <Globe2 className="text-white/40" size={20} />
                <span className="text-white/60 font-bold tracking-[0.2em] uppercase text-[9px]">Kết Nối Toàn Cầu</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-bold mb-6 font-display italic leading-tight tracking-tight">
                Tác Động Của Chúng Tôi <br /> Đồng Hành Cùng Thương Hiệu
              </h2>
              <p className="text-sm md:text-lg text-white/80 font-medium leading-relaxed max-w-2xl mb-8">
                Chúng tôi ưu tiên khả năng mở rộng, an toàn và hỗ trợ pháp lý, đảm bảo chất lượng "Made-in-Vietnam" tích hợp liền mạch vào thị trường quốc tế.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-start opacity-40 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                <span>Xuất Khẩu Trực Tiếp</span>
                <span>Logistics Thông Minh</span>
                <span>Cam Kết ESG</span>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center">
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full overflow-hidden border border-white/20 flex items-center justify-center bg-white/10 uppercase font-black text-xl">
                  DH
                </div>
                <p className="text-sm md:text-lg italic mb-6 text-brand-50">
                  "VNCT được xây dựng trên sự hội tụ của kỷ luật công nghiệp và niềm đam mê nông sản Việt."
                </p>
                <div className="space-y-1">
                  <p className="font-bold uppercase tracking-widest text-[10px] text-white">Phạm Đông Huy</p>
                  <p className="text-[8px] uppercase tracking-widest text-white/40">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Wholesale CTA */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container-xl px-4">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-6 font-display italic leading-tight">
              Sẵn Sàng Cho Chương Mới?
            </h2>
            <p className="text-sm md:text-xl text-slate-500 font-medium mb-10">
              Cùng chúng tôi định nghĩa lại sự xuất sắc của nông sản Việt trên bản đồ thế giới.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button href="/contact" size="huge" className="w-full sm:w-auto h-14 md:h-16 rounded-xl md:rounded-2xl bg-brand-950 text-white">
                Bắt Đầu Hợp Tác <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="/services" variant="outline" size="huge" className="w-full sm:w-auto h-14 md:h-16 rounded-xl md:rounded-2xl border-slate-200">
                Khám Phá OEM
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
