import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/products'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  ArrowUpRight,
  ShoppingCart,
  ShieldCheck,
  Zap,
  Droplets,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Danh Mục Sản Phẩm | Sấy Thăng Hoa Cao Cấp',
  description: 'Khám phá thế giới trái cây sấy thăng hoa chuân quốc tế từ Việt Nam. Giải pháp bán sỉ OEM và thương hiệu bán lẻ KOTHECHE chất lượng cao.',
}

export default function ProductsPage() {
  return (
    <div className="bg-[#FAFBFC]">
      {/* SaaS Style Hero Section - Optimized for Mobile */}
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/products/dragon-fruit.jpg"
            alt="Trái cây sấy thăng hoa xuất khẩu"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-10 blur-sm transform scale-110"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>
        <div className="container-xl relative z-10 px-4">
          <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-50 text-brand-700 rounded-full text-[9px] font-black uppercase tracking-widest mb-6 lg:mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-600"></span>
            </span>
            Danh Mục Xuất Khẩu
          </div>
          <h1 className="animate-fade-up opacity-0 [animation-delay:100ms] text-3xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-8 font-display tracking-tight text-brand-950 leading-[1.1]">
            Bộ Sưu Tập
            <span className="block mt-1 text-brand-600 font-italic">Sấy Thăng Hoa</span>
          </h1>
          <p className="animate-fade-up opacity-0 [animation-delay:200ms] max-w-xl mx-auto text-slate-500 text-sm md:text-lg leading-relaxed mb-6 lg:mb-10">
            Từ trang trại đến kệ hàng. Khám phá các dòng snack trái cây được thiết kế cho sự ổn định dài hạn và bảo tồn hương vị đỉnh cao.
          </p>
        </div>
      </section>

      {/* Product Grid Section - High Density 2-column mobile */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container-xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {products.map((p) => (
              <div
                key={p.slug}
                className="group relative bg-[#FDF8F3] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-brand-50 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-900/10 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />

                  {/* Floating Badge (Mobile Optimized) */}
                  <div className="absolute top-2 left-2 md:top-6 md:left-6">
                    <Badge className="bg-white/90 text-brand-900 backdrop-blur-sm border-none font-bold text-[8px] md:text-xs">
                      {p.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="hidden md:flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-black text-brand-600 tracking-widest uppercase">Hồ Sơ Kỹ Thuật</span>
                      <div className="flex-grow h-px bg-brand-100" />
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold text-brand-950 mb-1 lg:mb-3 group-hover:text-brand-800 transition-colors tracking-tight leading-tight line-clamp-1">
                      <Link href={`/products/${p.slug}`}>{p.name}</Link>
                    </h3>
                    <p className="text-[8px] md:text-[11px] font-bold text-slate-400 mb-2 lg:mb-6 italic tracking-tight">{p.tagline}</p>

                    <p className="hidden md:block text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
                      {p.description}
                    </p>

                    {/* Technical Specs - Sleek Minimalist List */}
                    <div className="hidden md:flex flex-col gap-2.5 mb-8">
                      <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                        <Droplets size={14} className="text-blue-500" /> 
                        <span>Độ ẩm tuyệt đối &lt; 5%</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                        <Zap size={14} className="text-orange-500" /> 
                        <span>100% Nguyên bản tự nhiên</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                        <ShieldCheck size={14} className="text-brand-600" /> 
                        <span>Đạt chuẩn kiểm định FDA</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:gap-3 mt-auto pt-2">
                    <Link
                      href={`/products/${p.slug}`}
                      className="flex-1 flex items-center justify-center gap-2 h-12 bg-brand-900 hover:bg-brand-800 text-white rounded-xl text-[9px] md:text-[10px] uppercase font-black tracking-widest transition-colors shadow-lg shadow-brand-900/20"
                    >
                      Khám Phá <ArrowUpRight size={14} className="text-brand-300" />
                    </Link>
                    <Link
                      href="/contact"
                      title="Báo Giá Gia Công OEM"
                      className="hidden md:flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:shadow-md rounded-xl transition-all"
                    >
                      <Layers size={18} />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Wholesale Banner - Scale Down for Mobile */}
      <section className="py-12 md:py-24 bg-brand-50/50 border-t border-brand-100">
        <div className="container-xl px-4">
          <div className="bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-20 shadow-2xl shadow-brand-100/50 relative overflow-hidden border border-brand-50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="w-10 h-1 bg-brand-800 mb-6 mx-auto lg:mx-0" />
                <h2 className="text-2xl md:text-4xl font-bold text-brand-950 mb-4 font-display italic leading-tight">
                  Đang Tìm Đối Tác <br /> Gia Công Tin Cậy?
                </h2>
                <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-10">
                  Mỗi sản phẩm đều sẵn sàng cho gia công nhãn riêng. Chúng tôi xử lý kỹ thuật và tuân thủ để bạn mở rộng thương hiệu toàn cầu.
                </p>
                <div className="hidden md:flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-40">
                  <span className="font-bold tracking-widest uppercase text-xs">Custom Packaging</span>
                  <span className="font-bold tracking-widest uppercase text-xs">Flexible MOQ</span>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-fit text-center">
                <Button href="/contact" size="lg" className="h-14 md:h-16 px-10 rounded-xl md:rounded-2xl bg-brand-800 text-white shadow-2xl shadow-brand-900/10">
                  Tư Vấn Dịch Vụ <ArrowRight size={20} className="ml-3 hidden sm:inline" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
