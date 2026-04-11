import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Info, 
  ShoppingBag, 
  FileText, 
  Database,
  ChevronRight,
  GitBranch,
  Search
} from 'lucide-react'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog-posts'
import { SitemapDiagram, GoogleSitelinksSimulator } from '@/features/sitemap/SitemapDiagram'

const baseURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com'

export const metadata: Metadata = {
  title: 'Sơ đồ trang web & Danh mục kỹ thuật | Việt Nam Cường Thịnh',
  description: 'Tổng quan chi tiết về toàn bộ hệ thống tài nguyên, danh mục sản phẩm sấy thăng hoa và kho kiến thức kỹ thuật của Việt Nam Cường Thịnh.',
}

interface SitemapLink {
  label: string
  href: string
  icon?: React.ReactNode
  bold?: boolean
  external?: boolean
}

interface SitemapSection {
  title: string
  icon: React.ReactNode
  links: SitemapLink[]
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Company',
    icon: <Info className="text-brand-600" size={20} />,
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Services', href: '/services' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Contact Us', href: '/contact' },
    ]
  },
  {
    title: 'Products Catalog',
    icon: <ShoppingBag className="text-brand-600" size={20} />,
    links: [
      { label: 'All Products', href: '/products', bold: true },
      ...(products.map(p => ({ label: p.name, href: `/products/${p.slug}` })) as SitemapLink[]),
    ]
  },
  {
    title: 'Insights & Data',
    icon: <FileText className="text-brand-600" size={20} />,
    links: blogPosts.map(post => ({ label: post.title, href: `/blog/${post.slug}` })) as SitemapLink[]
  },
  {
    title: 'Infrastructure',
    icon: <Database className="text-brand-600" size={20} />,
    links: [
      { label: 'SEO Technical Audit', href: '/seo-audit', bold: true },
      { label: 'XML Sitemap (Robots)', href: '/sitemap.xml', external: true }
    ]
  }
]

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20 overflow-hidden">
      <div className="container-xl max-w-7xl mx-auto px-4">
        
        {/* Enterprise Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-50 pb-12">
          <div className="max-w-2xl">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-600 mb-6">
                <GitBranch size={14} /> System Architecture Index
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-display tracking-tight mb-6">
                Sitemap <span className="text-gray-200">v4.0</span>
             </h1>
             <p className="text-gray-500 text-lg leading-relaxed">
               A high-fidelity diagrammatic representation of our digital ecosystem. 
               All paths lead to technical excellence and nutritional transparency.
             </p>
          </div>
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600">
                <Search size={24} />
             </div>
             <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Environment</p>
                <p className="text-xs font-bold text-gray-900">{baseURL}</p>
             </div>
          </div>
        </div>

        {/* ERP Diagram Visualizer */}
        <section className="mb-32">
           <div className="text-center mb-16">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] mb-4 block">Visual Graph Representation</span>
           </div>
           <SitemapDiagram />
        </section>

        {/* Traditional Site Index for SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20 border-t border-gray-50">
          {sitemapData.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600">
                  {section.icon}
                </div>
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">{section.title}</h2>
              </div>
              
              <ul className="space-y-5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      className={`group flex items-center gap-2 text-xs transition-colors hover:text-brand-600 ${link.bold ? 'font-bold text-gray-900' : 'text-gray-500'}`}
                    >
                      <ChevronRight size={10} className="text-gray-300 group-hover:text-brand-400 transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Search Engine Simulator */}
        <section className="mt-32 pt-20 border-t border-gray-50">
           <div className="text-center mb-12">
              <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">Google Sitelinks Preview</h2>
              <p className="text-sm text-gray-400">Visualization of how search engines index this hierarchy.</p>
           </div>
           <GoogleSitelinksSimulator />
        </section>

        {/* Footer Technical Note */}
        <div className="mt-40 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">System Status: Operative</p>
           </div>
           <p className="text-[10px] font-medium text-gray-400 italic">
             Build v4.0.12 - Designed for enterprise transparency & indexing efficiency.
           </p>
        </div>
      </div>
    </div>
  )
}
