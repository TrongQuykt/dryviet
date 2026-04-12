import { Metadata } from 'next'
import Image from 'next/image'
import { ProcessSection } from '@/features/home/ProcessSection'
import { CertificationsSection } from '@/features/home/CertificationsSection'
import { Button } from '@/components/ui/Button'
import {
  CheckCircle2,
  Settings,
  Droplets,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  Layers,
  Activity,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dịch vụ OEM - Gia công sấy thăng hoa chuyên nghiệp',
  description: 'Dịch vụ gia công sấy thăng hoa (Freeze Dried) chuyên nghiệp chuẩn quốc tế tại TP.HCM. Chứng nhận FDA, ISO 22000, HACCP.',
  openGraph: {
    title: 'Gia Công Sấy Thăng Hoa OEM/ODM Chuẩn Quốc Tế',
    description: 'Nâng tầm thương hiệu với dịch vụ gia công sản xuất sấy thăng hoa chuyên nghiệp. Đạt tiêu chuẩn xuất khẩu Mỹ, Nhật, Hàn.',
    images: ['/images/banner/banner5.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dịch Vụ Gia Công Sấy Thăng Hoa VNCT',
    description: 'Nhà máy gia công sấy thăng hoa chuẩn FDA tại TP.HCM. Giải pháp OEM/ODM tối ưu cho doanh nghiệp.',
    images: ['/images/banner/banner5.jpg'],
  },
}

export default function ServicesPage() {
  const techPillars = [
    {
      title: "Chân Không Tiên Tiến",
      desc: "Môi trường áp suất dưới 100 Pa để thăng hoa tối ưu.",
      detail: "< 100 Pa",
      icon: <Settings size={20} />,
      className: "lg:col-span-2 lg:row-span-1 bg-brand-50/50 border-brand-100"
    },
    {
      title: "Độ Ẩm Tuyệt Đối",
      desc: "Khử nước chính xác đảm bảo ổn định 24 tháng.",
      detail: "< 5%",
      icon: <Droplets size={20} />,
      className: "lg:col-span-1 lg:row-span-1 bg-blue-50/30 border-blue-100"
    },
    {
      title: "Bảo Toàn Dinh Dưỡng",
      desc: "Giữ lại 97% vitamin và cấu trúc tự nhiên.",
      detail: "97% Sinh học",
      icon: <Zap size={20} />,
      className: "lg:col-span-1 bg-orange-50/30 border-orange-100"
    },
    {
      title: "Tuân Thủ Toàn Cầu",
      desc: "Minh bạch với FSVP, FDA & ISO 22000.",
      detail: "FDA & FSVP Ready",
      icon: <ShieldCheck size={20} />,
      className: "lg:col-span-2 lg:row-span-1 bg-green-50/30 border-green-100"
    },
    {
      title: "Phòng Lab",
      desc: "Phân tích vi sinh và công thức tùy chỉnh.",
      detail: "R&D Lab",
      icon: <Activity size={20} />,
      className: "lg:col-span-1 lg:row-span-1 bg-purple-50/30 border-purple-100"
    }
  ]

  return (
    <div className="">
      {/* SaaS Hero Section - Optimized for Mobile */}
      <section className="relative pt-24 lg:pt-28 pb-12 lg:pb-30 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/banner/banner5.jpg"
            alt="Dịch vụ sấy thăng hoa OEM"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-10 blur-sm lg:transform lg:scale-110"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>

        <div className="container-xl relative z-10 text-center px-4">
          <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-50 text-brand-700 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-600"></span>
            </span>
            Gia Công OEM Toàn Cầu
          </div>
          <h1 className="animate-fade-up opacity-0 [animation-delay:100ms] text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 font-display tracking-tight text-brand-950 leading-[1.1]">
            Cơ Sở Hạ Tầng
            <span className="block mt-1 text-brand-600 font-italic text-xl sm:text-3xl md:text-5xl lg:text-7xl">
              Công Nghiệp Sấy Thăng Hoa
            </span>
          </h1>
          <p className="animate-fade-up opacity-0 [animation-delay:200ms] max-w-xl mx-auto text-slate-500 text-sm md:text-xl leading-relaxed mb-8 md:mb-10">
            Giải pháp sản xuất có khả năng mở rộng cho các thương hiệu snack trái cây cao cấp toàn cầu và các nhà phân phối B2B.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="h-14 px-10 rounded-xl md:rounded-2xl bg-brand-800 text-white shadow-xl shadow-brand-900/10">
              Tư Vấn Kỹ Thuật <ArrowUpRight size={18} className="ml-2" />
            </Button>
            <div className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-brand-500" /> Nhà Máy Tuân Thủ FSVP
            </div>
          </div>
        </div>
      </section>

      {/* New QC Journey Section - Strategic Positioning */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex justify-center md:block">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-800 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-6">
                  Quy trình & Trách nhiệm
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-slate-900 mb-8 font-display italic leading-tight tracking-tight text-center md:text-left">
                Hành trình phía sau <br /> Mỗi lô sản phẩm.
              </h2>

              <div className="space-y-6 text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
                <p>
                  Có một điều mà người tiêu dùng thường không nhìn thấy khi cầm trên tay một gói trái cây sấy thăng hoa:
                  Đó là <span className="text-brand-700 font-bold decoration-brand-200 decoration-4">hành trình kiểm soát chất lượng</span> phía sau mỗi lô sản phẩm.
                </p>
                <p>
                  Trái cây được chọn lọc theo mùa vụ, truy xuất rõ ràng, kiểm tra cảm quan và tiêu chuẩn đầu vào trước khi bước vào sản xuất.
                  Nhưng đó mới chỉ là bước đầu.
                </p>

                <div className="py-8 border-y border-slate-100 my-8 space-y-5">
                  <p className="font-bold text-slate-900 mb-2">Trong suốt quá trình gia công, mỗi lô sản phẩm đều trải qua kiểm tra QC nghiêm ngặt:</p>
                  {[
                    "Quy trình đóng gói kho bảo quản đảm bảo độ ẩm, độ ổn định và thời hạn sử dụng",
                    "Dư lượng thuốc trừ sâu theo quy định của từng thị trường",
                    "Vi sinh để đảm bảo sản phẩm an toàn cho người tiêu dùng cuối"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 font-black text-xs group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">+</div>
                      <p className="text-sm md:text-base text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="italic text-slate-500 font-display">
                  Uy tín không nằm ở bao bì hay câu chuyện, mà ở những con số phía sau. Vì vậy, từ nguồn trái cây đến khâu QC cuối cùng,
                  mọi thứ đều được làm kỹ, rõ ràng, để mỗi lô trái cây sấy thăng hoa sẵn sàng bước ra thị trường quốc tế.
                </p>

                <div className="mt-12 p-8 md:p-12 bg-brand-950 rounded-[2.5rem] text-white shadow-2xl shadow-brand-950/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                  <p className="relative z-10 text-sm md:text-xl mb-8 leading-relaxed font-medium opacity-90">
                    Nếu bạn đang tìm một đối tác gia công trái cây sấy thăng hoa làm việc dựa trên dữ liệu, tiêu chuẩn và trách nhiệm dài hạn,
                    chúng tôi sẵn sàng chia sẻ chi tiết hơn về quy trình, tiêu chuẩn QC và giải pháp phù hợp cho từng thị trường.
                  </p>
                  <Button href="/contact" size="huge" className="relative z-10 w-full sm:w-auto bg-white text-brand-950 hover:bg-brand-50 font-black uppercase text-[10px] tracking-widest px-10 shadow-xl">
                    Kết nối với chuyên gia
                  </Button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="/images/qc/qc.jpg"
                  alt="Quy trình kiểm soát chất lượng tại DryViet"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Grid Section - Bento Style High Density */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container-xl px-4">
          <div className="mb-10 lg:mb-16 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-brand-950 mb-3 tracking-tight">Nền Tảng Kỹ Thuật</h2>
            <p className="text-slate-500 max-w-2xl leading-relaxed text-sm md:text-base">
              Mỗi chu kỳ đều dựa trên dữ liệu, tối ưu hóa biểu đồ thăng hoa dựa trên cấu trúc tế bào nguyên liệu.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {techPillars.map((p, i) => (
              <div key={i} className={`p-4 md:p-6 rounded-2xl md:rounded-[2rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/5 group flex flex-col justify-between ${p.className}`}>
                <div className="flex justify-between items-start">
                  <div className="p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-50">
                    {p.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs md:text-base font-bold text-brand-950 mb-1 lg:mb-1.5 mt-4 leading-tight">{p.title}</h3>
                  <p className="text-[10px] md:text-xs text-slate-500 mb-3 md:mb-4 leading-relaxed line-clamp-2">{p.desc}</p>
                  <div className="flex items-center gap-2 text-[8px] md:text-[9px] font-black text-brand-600 border-t border-slate-100 pt-2 md:pt-3 mt-auto uppercase tracking-widest">
                    {p.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D & Scalability Section - Optimized Stacking */}
      <section className="py-12 md:py-24 bg-[#FAFBFC]">
        <div className="container-xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-brand-100 rounded-[2rem] md:rounded-[3rem] rotate-2 -z-10 opacity-30" />
              <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 flex items-center justify-center rounded-xl md:rounded-2xl text-white shadow-lg">
                    <Layers className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-none">Tại Sao Chọn DryViet?</h4>
                    <p className="text-[10px] text-slate-400 mt-1">Sản Xuất Đẳng Cấp</p>
                  </div>
                </div>
                <ul className="space-y-4 md:space-y-6">
                  {[
                    { t: "Công Thức Tùy Chỉnh", d: "R&D phát triển công thức độc quyền theo yêu cầu." },
                    { t: "QC Dự Đoán", d: "Giám sát thời gian thực giúp tỷ lệ lỗi lô hàng tối thiểu." },
                    { t: "Logistics Quốc Tế", d: "Quản lý vận tải đa phương thức với đầy đủ hồ sơ." },
                    { t: "Mở Rộng Linh Hoạt", d: "Từ lô thử 100kg đến năng suất hàng ngày 500kg+." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-0.5"><CheckCircle2 className="text-brand-600 w-4 h-4 md:w-[18px] md:h-[18px]" /></div>
                      <div>
                        <p className="font-bold text-slate-900 text-xs md:text-sm mb-1">{item.t}</p>
                        <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center lg:text-left order-1 lg:order-2">
              <span className="text-[9px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-brand-600 mb-4 block">Quy Mô Sản Xuất</span>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-950 mb-6 lg:mb-8 leading-[1.1] tracking-tight">
                Tiêu Chuẩn Toàn Cầu <br /> Cho Các Thương Hiệu Cao Cấp
              </h2>
              <p className="text-slate-500 text-sm md:text-lg mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0 max-w-xl">
                Hợp tác với chúng tôi giúp bạn tiếp cận ngay bộ máy sản xuất đạt ISO mà không gánh rủi ro hạ tầng. Chúng tôi lo kỹ thuật, bạn tập trung thương hiệu.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8 lg:mb-10">
                <div className="p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Max Capacity</p>
                  <p className="text-lg md:text-2xl font-bold text-brand-900">500Kg+ / Ngày</p>
                </div>
                <div className="p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Factory Area</p>
                  <p className="text-lg md:text-2xl font-bold text-brand-900">1,000 m²</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Global Supply Banner - Refined Size */}
      <section className="py-12 md:py-24 bg-white text-center">
        <div className="container-xl px-4">
          <Globe className="mx-auto text-brand-400 mb-6 w-12 h-12 md:w-20 md:h-20" strokeWidth={1} />
          <h2 className="text-xl md:text-4xl font-bold text-brand-950 mb-4 md:mb-6 leading-tight">Hạ Tầng Đạt Chuẩn Xuất Khẩu</h2>
          <p className="text-slate-500 text-xs md:text-lg max-w-xl mx-auto mb-10">
            Hệ thống của chúng tôi được thiết kế cho thị trường Mỹ và EU, đảm bảo độ tin cậy tuyệt đối về hồ sơ pháp lý.
          </p>
          <div className="flex justify-center gap-4 md:gap-12 flex-wrap items-center opacity-40 grayscale">
            {['FDA Approved', 'ISO 22000', 'HACCP', 'FSVP Ready'].map((cert, idx) => (
              <span key={idx} className="font-display font-black text-[10px] md:text-lg uppercase tracking-widest">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      <CertificationsSection />
    </div>
  )
}
