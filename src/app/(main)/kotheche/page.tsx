import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import {
  ShoppingCart,
  Leaf,
  ShieldCheck,
  Heart,
  Zap,
  Droplets,
  Award,
  ArrowUpRight,
  Globe2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react'
import { products } from '@/data/products'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thương hiệu Trái cây Sấy Thăng Hoa Cao Cấp | KOTHECHE',
  description: 'KOTHECHE là thương hiệu bán lẻ cao cấp của Việt Nam Cường Thịnh. Trái cây nhiệt đới sấy thăng hoa 100% tự nhiên, chuẩn FDA, hiện đã có mặt trên Amazon Mỹ.',
  openGraph: {
    title: 'KOTHECHE - Tinh Hoa Trái Cây Sấy Thăng Hoa Việt Nam',
    description: 'Khám phá dòng sản phẩm trái cây sấy thăng hoa 100% tự nhiên, giữ trọn hương vị và dinh dưỡng. Đạt chuẩn quốc tế cho thị trường Mỹ.',
    type: 'website',
    url: 'https://dryviet.vercel.app/kotheche',
    images: [{ url: 'https://dryviet.vercel.app/images/logo/KoTheChe - Logo-01.png', width: 1200, height: 630, alt: 'KOTHECHE Brand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thương Hiệu Sấy Thăng Hoa Cao Cấp KOTHECHE',
    description: 'Trái cây sấy thăng hoa nguyên bản, không đường, không chất bảo quản. Đạt chuẩn FDA xuất khẩu Mỹ.',
    images: ['/images/logo/KoTheChe - Logo-01.png'],
  },
}

export default function KothechePage() {
  const brandPillars = [
    {
      icon: <Leaf className="text-emerald-600" size={24} />,
      title: "100% Tự Nhiên",
      subtitle: "Thuần Khiết",
      desc: "Không đường, không dầu, không bảo quản. Trải nghiệm vị thật của trái cây Việt Nam."
    },
    {
      icon: <Zap className="text-orange-500" size={24} />,
      title: "Công Nghệ Sấy",
      subtitle: "Chính Xác",
      desc: "Bảo tồn 97% vitamin và chất chống oxy hóa, tạo độ giòn xốp đặc trưng."
    },
    {
      icon: <Globe2 className="text-blue-600" size={24} />,
      title: "Chuẩn Quốc Tế",
      subtitle: "Xác Minh",
      desc: "Đạt FDA, ISO 22000 & HACCP, thiết kế chuyên biệt cho thị trường toàn cầu."
    }
  ]

  return (
    <main className="">
      {/* Chapter 0: Brand Manifesto (Hero) - Responsive Optimized */}
      <section className="relative pt-24 lg:pt-26 pb-12 lg:pb-24 overflow-hidden border-b border-slate-100 bg-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 blur-xl scale-110 lg:translate-y-[-10%]">
          <Image
            src="/images/banner/banner.jpg"
            alt="Thương hiệu KOTHECHE"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-50 text-brand-700 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                Linh Hồn Của Trái Cây Nhiệt Đới
              </div>
              <h1 className="animate-fade-up opacity-0 [animation-delay:100ms] text-3xl md:text-5xl lg:text-5xl font-bold text-slate-950 leading-[1.1] tracking-tight mb-6 md:mb-8">
                Giữ nguyên tinh chất, <br />
                <span className="text-brand-600 mt-2 inline-block">Nâng tầm giá trị.</span>
              </h1>
              <p className="animate-fade-up opacity-0 [animation-delay:200ms] text-sm md:text-xl text-slate-500 mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0 font-display leading-relaxed">
                KOTHECHE định nghĩa lại việc ăn vặt lành mạnh bằng cách kết hợp di sản nông nghiệp Việt Nam với công nghệ thực phẩm tiên tiến.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  href="https://www.amazon.com/dp/B0DTJ4MZ4L"
                  external
                  className="bg-[#FF9900] text-black hover:bg-[#ffb84d] h-14 md:h-16 px-8 rounded-xl md:rounded-2xl shadow-xl shadow-orange-500/20 font-black text-[10px] md:text-xs uppercase tracking-widest gap-2"
                >
                  <ShoppingCart size={18} /> Amazon Mỹ
                </Button>
                <Button
                  href="#collection"
                  variant="outline"
                  className="h-14 md:h-16 px-8 rounded-xl md:rounded-2xl border-slate-200 text-slate-800 font-black text-[10px] md:text-xs uppercase tracking-widest"
                >
                  Bộ Sưu Tập
                </Button>
              </div>
            </div>

            <div className="relative group mt-8 lg:mt-0">
              <div
                className="aspect-square md:aspect-[5/4] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl"
                style={{ backgroundColor: '#c55220' }}
              >
                <Image
                  src="/images/logo/KoTheChe - Logo-05.png"
                  alt="KOTHECHE"
                  fill
                  className="object-contain p-8 md:p-12 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Floating Stat Badge (Mobile Hide/Small) */}
              <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-right-10 bg-white p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-slate-50 flex flex-col items-center justify-center z-20 text-center">
                <Award className="text-brand-600 mb-2 md:mb-4 w-6 h-6 md:w-10 md:h-10" />
                <p className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5 md:mb-1">
                  Tinh Khiết
                </p>
                <p className="text-xs md:text-lg font-bold text-slate-900">
                  100% Tự Nhiên
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1: Strategic Brand Pillars - High Density 2-col on Mobile */}
      <section className="py-12 md:py-24 bg-white border-b border-slate-50">
        <div className="container-xl px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-8">
            {brandPillars.map((pillar, i) => (
              <div
                key={i}
                className="flex flex-col w-[calc(50%-0.5rem)] lg:flex-1 min-w-[160px] md:min-w-[300px] group p-6 lg:p-12 rounded-[1.5rem] lg:rounded-[3.5rem] bg-[#FDFBF9] border border-brand-50 hover:bg-white hover:shadow-2xl transition-all duration-700"
              >
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-4 lg:mb-10 shadow-sm border border-slate-100 mx-auto">
                  {pillar.icon}
                </div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-300 mb-1 text-center font-display">{pillar.subtitle}</p>
                <h3 className="text-sm md:text-2xl text-slate-950 mb-3 md:mb-6 font-bold italic text-center leading-tight">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[9px] md:text-sm opacity-80 text-center font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 2: The Global Collection - 2-col High Density Mobile */}
      <section id="collection" className="py-12 md:py-24">
        <div className="container-xl px-4">
          <div className="text-center lg:text-left max-w-2xl mb-12 lg:mb-20">
            <div className="w-10 h-1 bg-brand-800 mb-6 mx-auto lg:mx-0" />
            <h2 className="text-2xl md:text-4xl font-bold text-slate-950 font-display tracking-tight leading-tight mb-4">Dấu Ấn Bán Lẻ KOTHECHE.</h2>
            <p className="text-slate-500 text-sm md:text-lg">Mỗi sản phẩm là một kiệt tác bảo tồn dinh dưỡng cho người tiêu dùng thông thái.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
            {products.map(product => (
              <article key={product.slug} className="group flex flex-col h-full bg-white rounded-2xl md:rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="relative aspect-square md:aspect-[4/5] bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors duration-700" />

                  {/* Spec Pills (Compact) */}
                  <div className="hidden md:flex absolute bottom-6 left-6 right-6 flex-wrap gap-2">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-slate-700 flex items-center gap-1.5">
                      <Droplets size={10} className="text-blue-500" /> <span className="truncate">Ẩm &lt; 5%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-10 text-center flex flex-col flex-grow">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-400 mb-1 lg:mb-2">Retail Series</p>
                  <h3 className="text-xs md:text-base font-bold text-slate-950 mb-2 md:mb-3 tracking-tight line-clamp-1">{product.name}</h3>
                  <p className="hidden md:block text-slate-500 font-medium mb-10 text-sm leading-relaxed">{product.tagline}</p>

                  <div className="mt-auto space-y-2">
                    {product.amazonUrl && (
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FF9900] text-black font-black text-[9px] md:text-[10px] uppercase tracking-widest py-2.5 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={14} /> Amazon
                      </a>
                    )}
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full border border-slate-100 text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest py-2.5 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center"
                    >
                      Chi Tiết
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: Quality Standards - Refined for Mobile */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-xl px-4">
          <div className="p-8 lg:p-20 bg-brand-950 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-2xl shadow-brand-950/30">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/banner/banner.jpg')] bg-cover bg-center grayscale mix-blend-overlay" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-5xl font-bold font-display italic tracking-tight leading-tight mb-6 lg:mb-8">Chất lượng được <br /> kiểm soát toàn diện.</h2>
                <p className="text-sm md:text-lg text-brand-100/70 font-medium leading-relaxed mb-8 lg:mb-10">
                  KOTHECHE được sản xuất trực tiếp tại cơ sở Việt Nam Cường Thịnh. Chúng tôi kiểm soát hoàn toàn thông số sấy để đạt chuẩn mực cao nhất.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-4">
                  {[
                    'Kiểm định bởi FDA',
                    'ISO 22000:2018 Certified',
                    'FSVP Compliance',
                    'Direct Traceability'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-brand-400" />
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative w-full">
                <div className="aspect-video rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 relative shadow-2xl">
                  <Image src="/images/banner/banner2.jpg" alt="Cơ sở" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 lg:bottom-auto lg:left-auto lg:-top-6 lg:-right-6 bg-brand-500 p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl z-20">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">Scale</p>
                  <p className="text-sm md:text-xl font-bold">1000+ Tấn/Năm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Connect - Premium CTA */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container-xl px-4">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-950 font-display italic tracking-tight mb-6">Kết Nối Với Chúng Tôi.</h2>
            <p className="text-slate-500 font-medium mb-10 text-sm md:text-lg">Chúng tôi luôn đón chào các đối tác bán lẻ quan tâm đến sự tăng trưởng và nông sản Việt Thăng Hoa.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button href="/contact" size="huge" className="w-full sm:w-auto h-14 md:h-16 px-10 rounded-xl md:rounded-2xl bg-brand-950 text-white">
                Liên Hệ Ngay
              </Button>
              <Button href="/contact" variant="outline" size="huge" className="w-full sm:w-auto h-14 md:h-16 px-10 rounded-xl md:rounded-2xl border-slate-200">
                Tư Vấn Bán Sỉ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
