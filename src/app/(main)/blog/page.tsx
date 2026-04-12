import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Clock, BookOpen } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ page?: string }> }): Promise<Metadata> {
  const params = await searchParams
  const page = params.page
  const url = page && page !== '1' 
    ? `https://dryviet.vercel.app/blog?page=${page}` 
    : 'https://dryviet.vercel.app/blog'
    
  return {
    title: 'Kiến Thức Ngành | Trung Tâm Dữ Liệu VNCT',
    description: 'Những góc nhìn chuyên sâu về công nghệ sấy thăng hoa, sản xuất OEM và xu hướng thị trường nông nghiệp toàn cầu.',
    alternates: {
      canonical: url,
    }
  }
}

// export default ...
export default async function BlogListPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  // --- Pagination Logic ---
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const postsPerPage = 6
  const totalPosts = blogPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Sắp xếp bài viết mới nhất lên đầu tiên (Descending)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage)

  return (
    <div className="bg-[#FAFBFC]">
      {/* SaaS Style Hero Section - Optimized Mobile */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/banner/banner.jpg"
            alt="Kiến thức ngành"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-5 blur-sm transform scale-110"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>

        <div className="container-xl relative z-10 text-center px-4">
          <div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-50 text-brand-700 rounded-full text-[8.5px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Việt Nam Cường Thịnh Insight
          </div>
          <h1 className="animate-fade-up opacity-0 [animation-delay:100ms] text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 font-display tracking-tight text-brand-950 leading-[1.1]">
            Tin Tức <br className="hidden lg:block" />
            <span className="text-brand-600 mt-1 inline-block">Chuyên Ngành.</span>
          </h1>
          <p className="animate-fade-up opacity-0 [animation-delay:200ms] max-w-xl mx-auto text-slate-500 text-sm md:text-lg font-medium leading-relaxed mb-8 md:mb-10">
            Đi sâu vào công nghệ của trái cây sấy thăng hoa, quy trình tuân thủ quốc tế và xu hướng thị trường B2B.
          </p>

          {/* Optimized Category Chips for Mobile */}
          <div className="flex items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-2 scrollbar-hide px-4 whitespace-nowrap mask-fade">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-brand-600 transition-colors">Công Nghệ</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-brand-600 transition-colors">Kinh Doanh</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-brand-600 transition-colors">Tuân Thủ</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-brand-600 transition-colors">Thị Trường</span>
          </div>
        </div>
      </section>

      {/* Blog Grid Section - High Density 2-col Grid on Mobile */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
            {currentPosts.map((post) => {
              const categoryColors: Record<string, string> = {
                'Công Nghệ': 'bg-blue-50 text-blue-700 border-blue-100',
                'Kinh Doanh': 'bg-green-50 text-green-700 border-green-100',
                'Tuân Thủ': 'bg-brand-50 text-brand-700 border-brand-100',
                'Thị Trường': 'bg-orange-50 text-orange-700 border-orange-100',
                'Sức Khỏe & Dinh Dưỡng': 'bg-emerald-50 text-emerald-700 border-emerald-100'
              }
              const catStyle = categoryColors[post.category] || 'bg-slate-50 text-slate-600 border-slate-100'

              return (
                <article key={post.slug} className="group flex flex-col h-full bg-[#FDFBF9] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-brand-50 transition-all duration-700 hover:shadow-2xl hover:shadow-brand-900/10">
                  <div className="relative aspect-square md:aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-950/5 group-hover:bg-transparent transition-colors duration-700" />

                    {/* Compact Floating Category Pill for Mobile */}
                    <div className={`absolute top-3 left-3 md:top-6 md:left-6 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${catStyle.split(' ')[0]}/80 ${catStyle.split(' ').slice(1).join(' ')}`}>
                      {post.category}
                    </div>
                  </div>

                  <div className="p-4 md:p-8 lg:p-10 flex flex-col flex-grow">
                    <div className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-brand-600" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('vi-VN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-brand-600" />
                        <span>{post.readingTime}m</span>
                      </div>
                    </div>

                    <h3 className="text-[11px] sm:text-xs md:text-xl font-bold text-slate-900 mb-2 md:mb-4 group-hover:text-brand-800 transition-colors line-clamp-2 md:line-clamp-3 italic tracking-tight leading-tight">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="hidden md:block text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 md:pt-6 border-t border-brand-50 relative z-10">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest md:tracking-[0.3em] text-brand-950 hover:text-brand-600 transition-all group/link"
                      >
                        Đọc Ngay
                        <ArrowRight size={12} className="group-hover/link:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 md:mt-20">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-500 hover:text-brand-600 hover:bg-brand-50 border border-slate-100 transition-all"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </Link>
              )}

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1
                const isActive = p === currentPage
                return (
                  <Link
                    key={p}
                    href={`/blog?page=${p}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isActive
                        ? 'bg-brand-950 text-white shadow-lg shadow-brand-900/20 shadow-inner'
                        : 'bg-white text-slate-500 hover:text-brand-800 hover:bg-brand-50 border border-slate-100'
                      }`}
                  >
                    {p}
                  </Link>
                )
              })}

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-500 hover:text-brand-600 hover:bg-brand-50 border border-slate-100 transition-all"
                >
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          )}

          {/* Newsletter - Scaled for Mobile */}
          <div className="mt-12 md:mt-24 border-t border-slate-100 pt-12 md:pt-24">
            <div className="bg-brand-800 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-950/40">
              <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/banner/banner.jpg')] bg-cover bg-center grayscale mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400 rounded-full blur-[120px] -mr-32 -mt-32 opacity-20" />

              <div className="relative z-10 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 opacity-60">
                  <BookOpen size={16} className="text-brand-400" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">Trung Tâm Insight VNCT</span>
                </div>
                <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 font-display italic tracking-tight">Dẫn Đầu Xu Hướng.</h2>
                <p className="text-brand-100/70 text-sm md:text-lg mb-8 md:mb-12 font-medium">
                  Đăng ký nhận nghiên cứu độc quyền về sấy thăng hoa và báo cáo thị trường B2B định kỳ.
                </p>
                <form className="flex flex-col gap-3 max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="Email chuyên nghiệp..."
                    className="w-full px-6 h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-400 backdrop-blur-sm transition-all text-sm"
                    required
                  />
                  <button type="submit" className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-brand-500 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-brand-400 transition-all">
                    Đăng Ký Toàn Cầu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
