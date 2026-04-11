import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'
import { Button } from '@/components/ui/Button'

export function BlogTeaser() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Kiến Thức Chuyên Ngành</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Tin Tức Mới Nhất</h2>
          </div>
          <Button href="/blog" variant="ghost" className="hidden md:inline-flex">
            Xem Tất Cả Bài Viết <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <article key={post.slug} className="relative group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-800">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar size={14} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('vi-VN', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                  <span className="mx-1">•</span>
                  <span>{post.readingTime} phút đọc</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-brand-800 font-bold text-sm">Đọc Bài Viết</span>
                  <ArrowRight size={16} className="text-brand-800 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button href="/blog" variant="outline" className="w-full">
            Xem Tất Cả Bài Viết
          </Button>
        </div>
      </div>
    </section>
  )
}
