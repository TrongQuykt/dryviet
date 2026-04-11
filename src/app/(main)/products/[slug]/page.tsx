import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  CheckCircle2,
  ShoppingCart,
  Droplets,
  Zap,
  Calendar,
  ShieldCheck,
  ArrowUpRight,
  Layers
} from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { CertificationsSection } from '@/features/home/CertificationsSection'
import { ProductGallery } from '@/features/products/ProductGallery'
import { ProductRichDescription } from '@/features/products/ProductRichDescription'

// Pre-generate routes
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) return { title: 'Không Tìm Thấy Sản Phẩm' }

  return {
    title: `${product.name} - Trái cây sấy thăng hoa cao cấp`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com'}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'KOTHECHE'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0.00',
      priceCurrency: 'USD',
      url: product.amazonUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com'}/products/${product.slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#FAFBFC] min-h-screen">
        {/* SaaS Style Hero Background */}
        <section className="relative pt-32 pb-12 overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-md scale-110"
              style={{ backgroundImage: `url(${product.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
          </div>

          <div className="container-xl relative px-4 text-center sm:text-left">
            {/* Compact Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
              <Link href="/products" className="hover:text-brand-800 transition-colors">Danh Mục</Link>
              <span className="text-slate-300">/</span>
              <span className="text-brand-700">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left: Product Image Gallery (Compact) */}
              <div className="lg:col-span-5">
                <ProductGallery
                  images={product.gallery || [product.image]}
                  productName={product.name}
                  badge={product.badge}
                  badgeSlug={product.slug}
                />
              </div>

              {/* Right: Product Info (Technical Focus) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-brand-50 text-brand-700 rounded-lg text-[9px] font-black uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Dòng Sản Phẩm Kỹ Thuật KOTHECHE
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-bold font-display text-slate-900 mb-4 tracking-tight leading-tight">
                    {product.name}
                  </h1>

                  {/* Technical Specs Pills (Compact) */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[9px] font-bold text-slate-700 shadow-sm border border-slate-100">
                      <Droplets size={10} className="text-blue-500" /> Độ Ẩm &lt; 5%
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[9px] font-bold text-slate-700 shadow-sm border border-slate-100">
                      <Zap size={10} className="text-orange-500" /> 1 Thành Phần Duy Nhất
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[9px] font-bold text-slate-700 shadow-sm border border-slate-100">
                      <Calendar size={10} className="text-green-500" /> Hạn Dùng 24 Tháng
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[9px] font-bold text-slate-700 shadow-sm border border-slate-100">
                      <ShieldCheck size={10} className="text-brand-600" /> Kiểm Định FDA
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-8 text-base font-medium">
                    <p>{product.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 pt-6 border-t border-slate-100">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-brand-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-bold text-slate-800 tracking-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {product.amazonUrl ? (
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-brand-950 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-800 transition-all shadow-lg shadow-brand-950/20 group/btn"
                      >
                        <ShoppingCart size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Mua Trên Amazon</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-all -ml-2 group-hover/btn:ml-0" />
                      </a>
                    ) : (
                      <div className="flex-1 px-6 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center italic">
                        Sắp Ra Mắt Bán Lẻ
                      </div>
                    )}
                    <Link
                      href="/contact"
                      className="flex-1 bg-white border border-brand-100 text-brand-900 px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-50 transition-all text-xs font-bold uppercase tracking-widest"
                    >
                      <Layers size={18} />
                      Báo Giá Sỉ / OEM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductRichDescription images={product.descriptionImages} productName={product.name} />

        <CertificationsSection />
      </div>
    </>
  )
}
