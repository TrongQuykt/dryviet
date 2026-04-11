'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { 
  Link as LinkIcon, 
  Clock,
  User,
  Hash
} from 'lucide-react'
import { cn } from '@/lib/utils'

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
)

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

interface BlogReaderProps {
  children: React.ReactNode
}

export function BlogReader({ children }: BlogReaderProps) {
  const [mounted, setMounted] = useState(false)
  const [activeId, setActiveId] = useState<string>('')
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const contentRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !contentRef.current) return

    // Generate Table of Contents from headings within contentRef
    const elements = Array.from(contentRef.current.querySelectorAll('h2, h3'))
      .map((elem) => {
        const id = elem.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
        elem.id = id
        return {
          id,
          text: elem.textContent || '',
          level: Number(elem.tagName.substring(1))
        }
      })
    setHeadings(elements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-10% 0% -80% 0%' }
    )

    elements.forEach((heading) => {
      const elem = document.getElementById(heading.id)
      if (elem) observer.observe(elem)
    })

    return () => observer.disconnect()
  }, [mounted])

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied!')
    }
  }

  if (!mounted) return <div className="min-h-screen pt-40 px-4">{children}</div>

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className="container-xl max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-16">
          
          {/* Social Share Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
            <div className="flex flex-col gap-5 border-r border-slate-100 pr-8">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 vertical-text">Intelligence Share</span>
               <button className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-100 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
                 <FacebookIcon size={16} />
               </button>
               <button className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-100 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
                 <TwitterIcon size={16} />
               </button>
               <button className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-100 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
                 <LinkedinIcon size={16} />
               </button>
               <button onClick={copyLink} className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-100 transition-all shadow-sm">
                 <LinkIcon size={16} />
               </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            <div ref={contentRef} className="prose prose-xl prose-slate max-w-none text-slate-700
              prose-headings:font-display prose-headings:text-slate-950 prose-headings:scroll-mt-32 prose-headings:tracking-tight
              prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:font-bold prose-h2:italic
              prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:font-bold
              prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg md:prose-p:text-xl prose-p:font-medium prose-p:opacity-90
              prose-a:text-brand-700 hover:prose-a:text-brand-900 prose-a:font-bold prose-a:underline-offset-4
              prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:border-[6px] prose-img:border-white
              prose-blockquote:border-l-brand-500 prose-blockquote:bg-brand-50/20 prose-blockquote:px-10 prose-blockquote:py-1 prose-blockquote:rounded-r-[2rem] prose-blockquote:italic prose-blockquote:text-brand-900 prose-blockquote:font-display
              prose-strong:font-black prose-strong:text-slate-900
              prose-li:marker:text-brand-600 prose-li:mb-2 prose-li:font-medium"
            >
              {children}
            </div>

            <footer className="mt-24 p-12 bg-[#FDFBF9] rounded-[3rem] border border-brand-50 flex flex-col md:flex-row items-center gap-10 shadow-sm">
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-lg border border-brand-50">
                  <User size={36} className="text-brand-700" />
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-400 mb-2">Authored By</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-display italic">DryViet Editorial Board</h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-lg font-medium">
                    Our team of food technologists, logistics experts, and market analysts dedicated to bringing the best of Vietnamese freeze-drying excellence to global retailers.
                  </p>
               </div>
            </footer>
          </main>

          {/* Table of Contents - Enterprise Style */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-950/5">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <div className="w-4 h-px bg-brand-500" /> Executive Summary
               </h3>
               <nav className="space-y-5">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={cn(
                        "block text-[11px] font-bold transition-all border-l-2 pl-4 -ml-2 leading-tight uppercase tracking-wider",
                        activeId === heading.id 
                          ? "text-brand-800 border-brand-500 translate-x-1" 
                          : "text-slate-400 border-transparent hover:text-slate-600",
                        heading.level === 3 && "ml-4 text-[10px] normal-case tracking-normal"
                      )}
                    >
                      {heading.text}
                    </a>
                  ))}
               </nav>
               
               <div className="mt-10 pt-8 border-t border-slate-50">
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-4">Market Compliance</p>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">FDA</div>
                    <div className="w-6 h-6 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">ISO</div>
                    <div className="w-6 h-6 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">BRC</div>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
