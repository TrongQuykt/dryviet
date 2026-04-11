'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ChevronRight,
  RefreshCw,
  Layout,
  Type,
  Image as ImageIcon,
  Share2,
  ListChecks,
  Globe,
  FileText,
  Key,
  ShieldCheck,
  Zap,
  ChevronDown,
  MousePointer2,
  TrendingUp,
  Activity,
  Box,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog-posts'
import { RadialScore, TrendLine, PerformanceMetric } from '@/features/seo-audit/SEOViz'
import { HeadingTree } from '@/features/seo-audit/HeadingTree'

const MAIN_PAGES = [
  { path: '/', label: 'Home Page' },
  { path: '/about', label: 'Company Overview' },
  { path: '/services', label: 'OEM Solutions' },
  { path: '/contact', label: 'Contact Center' },
  { path: '/kotheche', label: 'Brand Page' },
]

export default function SEOAuditPage() {
  const [scanning, setScanning] = useState<string | null>(null)
  const [results, setResults] = useState<Record<string, any>>({})
  const [activePath, setActivePath] = useState<string | null>(null)
  const [focusKeyword, setFocusKeyword] = useState('')
  const [openGroups, setOpenGroups] = useState<string[]>(['main'])

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group])
  }

  const scanRoute = async (path: string) => {
    setScanning(path)
    try {
      const url = `/api/seo-check?path=${encodeURIComponent(path)}&keyword=${encodeURIComponent(focusKeyword)}`
      const res = await fetch(url)
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setResults(prev => ({ ...prev, [path]: data.analysis }))
      setActivePath(path)
    } catch (err: any) {
      console.error(err)
      alert(`Technical Error: ${err.message}`)
    } finally {
      setScanning(null)
    }
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen text-slate-900 font-sans">
      <div className="container-xl max-w-7xl mx-auto px-6">
        {/* Simplified Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-slate-200">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
              <ShieldCheck size={14} /> Analytics & Performance System
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950">Technical Audit Hub</h1>
            <p className="text-slate-500 font-medium text-sm">On-page diagnostics and technical optimization roadmap for DryViet nodes.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Focus Keyword</label>
              <div className="relative group">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-500 transition-colors" size={14} />
                <input
                  type="text" value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="Enter target keyword..."
                  className="pl-9 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-xs font-bold focus:ring-1 focus:ring-indigo-500/20 outline-none w-64 transition-all"
                />
              </div>
            </div>
            <div className="h-12 w-px bg-slate-100" />
            <Button
              onClick={() => { setResults({}); setActivePath(null) }}
              variant="outline"
              className="text-slate-500 border-slate-200 font-bold text-[10px] uppercase rounded-xl px-5 h-11 bg-white hover:bg-slate-50"
            >
              Reset System
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 space-y-4">
            <p className="px-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
              <Globe size={14} /> System Architecture
            </p>

            <div className="space-y-3">
              {/* Core Pages */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button onClick={() => toggleGroup('main')} className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-100 transition-colors">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tight flex items-center gap-2">
                    <Layout size={14} /> Core Nodes
                  </span>
                  <ChevronDown size={14} className={cn("text-slate-400 transition-transform", openGroups.includes('main') && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openGroups.includes('main') && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-100">
                      {MAIN_PAGES.map(page => (
                        <SidebarItem key={page.path} label={page.label} path={page.path} active={activePath === page.path} scanning={scanning === page.path} score={results[page.path]?.score} onClick={() => scanRoute(page.path)} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button onClick={() => toggleGroup('products')} className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-100 transition-colors">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tight flex items-center gap-2">
                    <ImageIcon size={14} /> Inventory
                  </span>
                  <ChevronDown size={14} className={cn("text-slate-400 transition-transform", openGroups.includes('products') && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openGroups.includes('products') && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-100">
                      {products.map(p => (
                        <SidebarItem key={p.slug} label={p.name} path={`/products/${p.slug}`} active={activePath === `/products/${p.slug}`} scanning={scanning === `/products/${p.slug}`} score={results[`/products/${p.slug}`]?.score} onClick={() => scanRoute(`/products/${p.slug}`)} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* blog */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button onClick={() => toggleGroup('blog')} className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-100 transition-colors">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tight flex items-center gap-2">
                    <FileText size={14} /> Insights
                  </span>
                  <ChevronDown size={14} className={cn("text-slate-400 transition-transform", openGroups.includes('blog') && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openGroups.includes('blog') && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-100">
                      {blogPosts.map(post => (
                        <SidebarItem key={post.slug} label={post.title} path={`/blog/${post.slug}`} active={activePath === `/blog/${post.slug}`} scanning={scanning === `/blog/${post.slug}`} score={results[`/blog/${post.slug}`]?.score} onClick={() => scanRoute(`/blog/${post.slug}`)} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {!activePath ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl border border-slate-200 h-[600px] flex flex-col items-center justify-center text-center p-20">
                  <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center mb-6">
                    <MousePointer2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">Diagnostic Terminal Ready</h3>
                  <p className="text-slate-400 max-w-sm text-xs font-medium uppercase tracking-wider">Select an endpoint from the architecture to initiate the technical scan.</p>
                </motion.div>
              ) : (
                <motion.div key={activePath} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">

                  {/* Performance Matrix */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                      <RadialScore score={results[activePath].score} size={140} strokeWidth={10} className="mb-6" />
                      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Technical Score</h2>

                      <div className="w-full">
                        {results[activePath].recommendations.filter((r: any) => r.type === 'critical').length > 0 ? (
                          <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between border-b-4 border-b-rose-600">
                            <span className="text-[10px] font-bold uppercase tracking-tight">System Critical Items</span>
                            <span className="text-lg font-bold">{results[activePath].recommendations.filter((r: any) => r.type === 'critical').length}</span>
                          </div>
                        ) : (
                          <div className="bg-emerald-600 text-white p-4 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/10">
                            <span className="text-[10px] font-bold uppercase tracking-tight">Operational Stability Verified</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-8 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Zap size={14} /> Core Vitals Matrix
                        </h3>
                        <TrendLine data={results[activePath].performance.trendData} width={80} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <PerformanceMetric
                          label="LCP" value={(results[activePath].performance.lcp / 1000).toFixed(1)} unit="s"
                          status={results[activePath].performance.lcp < 2500 ? 'success' : 'warning'}
                        />
                        <PerformanceMetric
                          label="FID" value={results[activePath].performance.fid} unit="ms"
                          status="success"
                        />
                        <PerformanceMetric
                          label="CLS" value={results[activePath].performance.cls} unit="idx"
                          status="success"
                        />
                        <PerformanceMetric
                          label="Network Speed" value={results[activePath].performance.speedScore} unit="%"
                          status={results[activePath].performance.speedScore > 80 ? 'success' : 'warning'}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optimization Intelligence */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-8">
                        <FileText className="text-indigo-600" size={18} />
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Structure Optimizer</h3>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Keyword Density Matrix</span>
                          <span className="text-xs font-bold text-indigo-600">{results[activePath].macro.keywordDensity.toFixed(1)}% Intensity</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${results[activePath].macro.keywordDensity * 20}%` }} className="h-full bg-indigo-600 rounded-full" />
                        </div>
                      </div>

                      <HeadingTree tree={results[activePath].basic.headings.tree} />
                    </div>

                    <div className="lg:col-span-5 bg-slate-950 text-slate-100 p-10 rounded-2xl shadow-xl">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                          <ListChecks size={16} className="text-indigo-500" /> Validation Log
                        </h3>
                        <Badge className="bg-slate-800 text-slate-300 text-[8px] uppercase font-bold px-2 py-0.5 border-none">Active</Badge>
                      </div>
                      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {results[activePath].checklist.map((item: any, i: number) => (
                          <div key={i} className="flex gap-4 p-3 rounded-xl bg-slate-900/50 border border-slate-900 group transition-all hover:border-indigo-500/30">
                            {item.status === 'success' ? <CheckCircle2 className="text-emerald-500 shrink-0" size={16} /> : <AlertTriangle className="text-amber-500 shrink-0" size={16} />}
                            <div className="space-y-0.5">
                              <span className="text-[11px] font-bold block text-slate-300">{item.label}</span>
                              <span className={cn(
                                "text-[8px] font-black uppercase tracking-wider",
                                item.priority === 'high' ? 'text-rose-500' : 'text-amber-500'
                              )}>{item.priority} priority node</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Browser Simulator */}
                  <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <Globe className="text-indigo-600" size={18} />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Search Engine Simulation</h3>
                    </div>
                    <div className="max-w-3xl bg-slate-50 p-8 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                        <p className="text-[10px] text-slate-400 font-bold tracking-tight">dryviet.com › {activePath === '/' ? 'home' : activePath.split('/').pop()}</p>
                      </div>
                      <h4 className="text-xl text-indigo-700 font-bold mb-2 transition-all hover:underline cursor-pointer">{results[activePath].basic.title.text}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">{results[activePath].basic.description.text}</p>
                    </div>
                  </div>

                  {/* Strategic Roadmap */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-10">
                        <TrendingUp className="text-indigo-600" size={18} />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Operational Roadmap</h3>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {results[activePath].recommendations.map((rec: any, i: number) => (
                          <div key={i} className="flex gap-5 p-5 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-slate-50 transition-all group">
                            <div className={cn(
                              "w-1 h-full min-h-[40px] rounded-full shrink-0",
                              rec.type === 'critical' ? 'bg-rose-600' : 'bg-amber-400'
                            )} />
                            <div className="space-y-1.5">
                              <span className="font-bold text-slate-950 text-xs uppercase tracking-tight">{rec.title}</span>
                              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{rec.advice}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-indigo-600 group">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                          <Share2 size={16} className="text-indigo-600" /> Logic Preview
                        </h3>
                      </div>
                      {results[activePath].ogTags.present && results[activePath].ogTags.tags['og:image'] ? (
                        <div className="aspect-[1.91/1] rounded-xl overflow-hidden mb-6 border border-slate-100 shadow-sm">
                          <img src={results[activePath].ogTags.tags['og:image']} alt="OG Preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                      ) : (
                        <div className="p-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center">
                          <ImageIcon className="mx-auto text-slate-200 mb-3" size={24} />
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Metadata Image Missing</p>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        <span>Meta Protocol</span>
                        <ExternalLink size={10} />
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ label, path, active, scanning, score, onClick }: any) {
  return (
    <button onClick={onClick} disabled={scanning} className={cn(
      "w-full flex items-center justify-between p-4 transition-all text-left border-b border-slate-50 last:border-0",
      active ? 'bg-indigo-50/40' : 'hover:bg-slate-50'
    )}>
      <div className="flex flex-col min-w-0 pr-2">
        <span className={cn("font-bold text-[11px] tracking-tight truncate", active ? "text-indigo-700 font-black" : "text-slate-700")}>{label}</span>
        <code className="text-[9px] text-slate-300 mt-1 truncate font-mono tracking-tighter">{path}</code>
      </div>
      <div className="flex items-center gap-2">
        {score !== undefined && (
          <div className={cn(
            "w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-[9px]",
            score >= 80 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
              score >= 50 ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-red-50 text-red-600 border-red-100'
          )}>
            {score}
          </div>
        )}
        {scanning && <RefreshCw size={12} className="text-indigo-600 animate-spin" />}
      </div>
    </button>
  )
}
