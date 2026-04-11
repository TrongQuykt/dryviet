'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  Info, 
  ShoppingBag, 
  FileText, 
  Search,
  Globe,
  Settings,
  Database
} from 'lucide-react'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog-posts'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'

interface Node {
  id: string
  label: string
  icon: React.ReactNode
  x: number
  y: number
  color: string
  href?: string
}

const mainNodes: Node[] = [
  { id: 'home', label: 'Home', icon: <Home size={16} />, x: 0, y: 0, color: 'brand', href: '/' },
  { id: 'company', label: 'Company', icon: <Info size={16} />, x: -180, y: -120, color: 'blue', href: '/about' },
  { id: 'products', label: 'Products', icon: <ShoppingBag size={16} />, x: 180, y: -120, color: 'orange', href: '/products' },
  { id: 'insights', label: 'Insights', icon: <FileText size={16} />, x: -180, y: 120, color: 'green', href: '/blog' },
  { id: 'seo', label: 'SEO Audit', icon: <Search size={16} />, x: 180, y: 120, color: 'purple', href: '/seo-audit' },
]

const mainEdges = [
  { from: 'home', to: 'company' },
  { from: 'home', to: 'products' },
  { from: 'home', to: 'insights' },
  { from: 'home', to: 'seo' },
]

export function SitemapDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const getSubNodes = (id: string): Node[] => {
    switch (id) {
      case 'products':
        return products.map((p, i) => ({
          id: `p-${p.slug}`,
          label: p.name,
          icon: <ShoppingBag size={10} />,
          x: 280 + (i * 20),
          y: -180 + (i * 60),
          color: 'orange',
          href: `/products/${p.slug}`
        }))
      case 'insights':
        return blogPosts.map((p, i) => ({
          id: `b-${p.slug}`,
          label: p.title,
          icon: <FileText size={10} />,
          x: -280 - (i * 10),
          y: 40 + (i * 45),
          color: 'green',
          href: `/blog/${p.slug}`
        }))
      case 'company':
        return [
          { id: 'c-about', label: 'About', icon: <Info size={10} />, x: -280, y: -180, color: 'blue', href: '/about' },
          { id: 'c-services', label: 'Services', icon: <Settings size={10} />, x: -320, y: -120, color: 'blue', href: '/services' },
          { id: 'c-contact', label: 'Contact', icon: <Globe size={10} />, x: -280, y: -60, color: 'blue', href: '/contact' },
        ]
      case 'seo':
        return [
          { id: 's-audit', label: 'SEO Audit', icon: <Search size={10} />, x: 280, y: 60, color: 'purple', href: '/seo-audit' },
          { id: 's-xml', label: 'Sitemap XML', icon: <Database size={10} />, x: 320, y: 120, color: 'purple', href: '/sitemap.xml' },
        ]
      default:
        return []
    }
  }

  const activeSubNodes = activeNode ? getSubNodes(activeNode) : []
  return (
    <div className="relative w-full aspect-video max-w-4xl mx-auto flex items-center justify-center bg-[#fafafa] rounded-[3rem] border border-gray-100 shadow-inner overflow-hidden p-20">
      
      {/* SVG Connections (Wires) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#e5e7eb" />
          </marker>
        </defs>
        {mainEdges.map((edge, i) => {
          const fromNode = mainNodes.find(n => n.id === edge.from)!
          const toNode = mainNodes.find(n => n.id === edge.to)!
          
          const startX = 50 + (fromNode.x / 10)
          const startY = 50 + (fromNode.y / 10)
          const endX = 50 + (toNode.x / 10)
          const endY = 50 + (toNode.y / 10)

          return (
            <motion.path
                key={i}
                d={`M ${startX}% ${startY}% L ${endX}% ${endY}%`}
                stroke={activeNode === toNode.id ? "#3b82f6" : "#e2e8f0"}
                strokeWidth={activeNode === toNode.id ? "3" : "2"}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeInOut" }}
            />
          )
        })}

        {/* Dynamic Sub-node Connectors */}
        {activeSubNodes.map((sub, i) => {
           const parentNode = mainNodes.find(n => n.id === activeNode)!
           const startX = 50 + (parentNode.x / 10)
           const startY = 50 + (parentNode.y / 10)
           const endX = 50 + (sub.x / 10)
           const endY = 50 + (sub.y / 10)

           return (
             <motion.path
                key={`sub-${i}`}
                d={`M ${startX}% ${startY}% L ${endX}% ${endY}%`}
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
             />
           )
        })}
      </svg>

      {/* Nodes */}
      {mainNodes.map((node) => (
        <motion.div
           key={node.id}
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
           style={{ 
             left: `calc(50% + ${node.x}px)`, 
             top: `calc(50% + ${node.y}px)`,
             transform: 'translate(-50%, -50%)'
           }}
           className="absolute z-10"
           onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
        >
          <div className="group relative">
             <div className={cn(
               "w-14 h-14 bg-white rounded-2xl border flex items-center justify-center transition-all cursor-pointer group-hover:-translate-y-1 shadow-lg",
               activeNode === node.id ? "border-brand-500 scale-110 text-brand-600 shadow-brand-100" : "border-gray-100 text-gray-400 group-hover:text-brand-600"
             )}>
                {node.icon}
             </div>
             <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md border backdrop-blur-sm transition-colors",
                  activeNode === node.id ? "text-brand-700 bg-brand-50 border-brand-100" : "text-gray-500 bg-white/80 border-gray-50"
                )}>
                  {node.label}
                </span>
             </div>

             {/* Connection Dots */}
             <div className="absolute top-1/2 -left-1 w-2 h-2 bg-gray-200 rounded-full border border-white -translate-y-1/2" />
             <div className="absolute top-1/2 -right-1 w-2 h-2 bg-gray-200 rounded-full border border-white -translate-y-1/2" />
          </div>
        </motion.div>
      ))}

      {/* Sub-Nodes (Children) */}
      <AnimatePresence>
        {activeSubNodes.map((sub) => (
          <motion.div
            key={sub.id}
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ 
              left: `calc(50% + ${sub.x}px)`, 
              top: `calc(50% + ${sub.y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            className="absolute z-20"
          >
            <Link href={sub.href || '#'} className="group block">
               <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full px-3 py-1.5 shadow-sm hover:border-brand-200 hover:shadow-md transition-all hover:-translate-y-0.5">
                  <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-brand-500">
                    {sub.icon}
                  </div>
                  <span className="text-[9px] font-bold text-gray-600 truncate max-w-[120px] group-hover:text-brand-800">
                    {sub.label}
                  </span>
               </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
    </div>
  )
}

export function GoogleSitelinksSimulator() {
  return (
    <div className="mt-20 p-12 bg-[#fcfcfc] rounded-[2.5rem] border border-gray-100">
       <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
             <span className="text-xs font-bold text-gray-400 ml-2">Google Search Experience Simulation</span>
          </div>

          <div className="space-y-6">
             <div>
                <cite className="text-sm text-[#202124] font-sans not-italic font-normal">https://vietnamcuongthinh.com <span className="text-gray-400">› sitemap</span></cite>
                <h3 className="text-xl text-[#1a0dab] hover:underline cursor-pointer font-medium mt-1">Việt Nam Cường Thịnh – Gia Công Sấy Thăng Hoa | KOTHECHE</h3>
                <p className="text-sm text-[#4d5156] mt-1 leading-relaxed">Đơn vị gia công sấy thăng hoa uy tín tại TP.HCM. Chuyên sản xuất Xoài sấy, Thanh long sấy và các nông sản nhiệt đới đạt chuẩn FDA, ISO 22000...</p>
             </div>

             <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-4">
                {[
                  { label: 'Sản phẩm sấy thăng hoa', desc: 'Xoài sấy, Thanh long sấy, Mít sấy, Chuối, Thơm, Dâu đạt chuẩn FDA.' },
                  { label: 'Dịch vụ gia công sấy thăng hoa', desc: 'Dịch vụ OEM/ODM sấy thăng hoa chuyên nghiệp tại TP.HCM cho xuất khẩu.' },
                  { label: 'Kiến thức chuyên ngành', desc: 'Cập nhật kiến thức về công nghệ sấy thăng hoa và bảo quản nông sản.' },
                  { label: 'Liên hệ Việt Nam Cường Thịnh', desc: 'Tư vấn giải pháp sấy thăng hoa tối ưu cho doanh nghiệp và đối tác.' }
                ].map((site, i) => (
                  <div key={i}>
                     <h4 className="text-[17px] text-[#1a0dab] hover:underline cursor-pointer">{site.label}</h4>
                     <p className="text-sm text-[#4d5156] mt-0.5 line-clamp-1">{site.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  )
}
