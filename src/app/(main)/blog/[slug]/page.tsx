import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Calendar, Tag, ChevronRight, User, ArrowRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '@/data/blog-posts'
import { Button } from '@/components/ui/Button'
import { BlogReader } from '@/features/blog/BlogReader'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return { title: 'Không Tìm Thấy Bài Viết' }

  const title = post.title
  const description = post.excerpt
  const image = post.coverImage

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug)
  const relatedPosts = blogPosts.filter((_, i) => i !== currentIndex).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.vercel.app'}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.vercel.app'}${post.coverImage}`,
    datePublished: post.date,
    author: [{
      '@type': 'Organization',
      '@id': 'https://dryviet.vercel.app/#organization',
      'name': 'Viet Nam Cuong Thinh'
    }],
    publisher: {
      '@id': 'https://dryviet.vercel.app/#organization'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.vercel.app'}/blog/${post.slug}`
    }
  }

  return (
    <div className="bg-[#FAFBFC] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Manifesto Hero Header */}
      <header className="relative pt-30 overflow-hidden border-b border-slate-100 bg-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 blur-xl scale-110 translate-y-[-10%]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.coverImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>

        <div className="container-xl relative z-10 px-4 max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10">
              <Link href="/blog" className="hover:text-brand-800 transition-colors">Trung Tâm Kiến Thức</Link>
              <ChevronRight size={10} className="text-slate-300" />
              <span className="text-brand-700">{post.category}</span>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-50/50 backdrop-blur-md rounded-2xl border border-brand-100 text-brand-700 text-[11px] font-black uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Phân Tích {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-950 font-display leading-[1.2] tracking-tight max-w-4xl italic mb-10">
              {post.title}
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-10 py-6 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 shadow-sm">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tác giả</p>
                  <p className="text-sm font-bold text-slate-800">Biên Tập VNCT</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shadow-sm">
                  <Calendar size={18} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ngày phát hành</p>
                  <p className="text-sm font-bold text-slate-800">{new Date(post.date).toLocaleDateString('vi-VN', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm">
                  <Clock size={18} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Thời gian đọc</p>
                  <p className="text-sm font-bold text-slate-800">{post.readingTime} Phút Phân Tích</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <BlogReader>
        <div className="relative aspect-[21/9] rounded-[3.5rem] overflow-hidden shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-brand-950/5 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ node, ...props }) => (
              <h2
                className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-950 mt-16 md:mt-20 mb-6 md:mb-8 tracking-tight border-l-8 border-brand-500 pl-6 md:pl-8"
                {...props}
              />
            ),

            h3: ({ node, ...props }) => (
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-10 md:mt-12 mb-4 md:mb-6 tracking-tight bg-slate-50 p-3 md:p-4 rounded-2xl border-l-4 border-brand-400"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-black text-slate-950 underline decoration-brand-200 decoration-4 underline-offset-4" {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="my-12 overflow-x-auto rounded-3xl border border-slate-100 shadow-xl shadow-slate-950/5 overflow-hidden">
                <table className="w-full text-left border-collapse" {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => (
              <thead className="bg-slate-950 text-white uppercase text-[10px] font-black tracking-widest" {...props} />
            ),
            th: ({ node, ...props }) => <th className="px-8 py-5 border-b border-white/10" {...props} />,
            td: ({ node, ...props }) => <td className="px-8 py-4 text-sm font-medium border-b border-slate-50 bg-white" {...props} />,
            tr: ({ node, ...props }) => <tr className="hover:bg-slate-50/50 transition-colors" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>

        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-wrap gap-4">
          <div className="flex items-center gap-3 text-slate-400 mr-4">
            <Tag size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Từ Khóa Phân Loại</span>
          </div>
          {post.tags.map(tag => (
            <span key={tag} className="bg-white text-slate-500 border border-slate-100 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-brand-200 hover:text-brand-800 hover:bg-brand-50 hover:-translate-y-1 cursor-pointer transition-all shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      </BlogReader>

      <section className="bg-white py-32 border-t border-slate-100">
        <div className="container-xl max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-6 block">
                Phân Tích Chiến Lược
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 italic leading-none tracking-tight">
                Mở Rộng Kiến Thức Của Bạn.
              </h2>
            </div>
            <Button href="/blog" variant="outline" className="rounded-2xl border-slate-100 px-8 py-6 h-auto font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand-50">
              Xem Toàn Bộ Kho Lưu Trữ <ChevronRight size={14} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedPosts.map(relPost => (
              <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="group flex flex-col bg-[#FDFBF9] rounded-[3rem] overflow-hidden border border-brand-50 shadow-sm transition-all duration-700 hover:shadow-2xl hover:shadow-brand-950/10 hover:-translate-y-3">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={relPost.coverImage} alt={relPost.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-brand-700 px-4 py-2 rounded-xl border border-white/20 shadow-xl">
                      {relPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="text-2xl font-bold text-slate-950 mb-6 font-display italic group-hover:text-brand-700 transition-colors leading-tight tracking-tight">
                    {relPost.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-8 font-medium">
                    {relPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity pt-6 border-t border-brand-50/50">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                      Đọc Thêm <ArrowRight size={12} className="transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <Clock size={14} /> {relPost.readingTime}p
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
