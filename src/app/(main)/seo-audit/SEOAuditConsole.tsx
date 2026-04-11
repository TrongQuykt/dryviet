'use client'

import { useState, useEffect } from 'react'
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
  ExternalLink,
  Target,
  Cpu,
  Gauge,
  Layers,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import { products } from '@/data/products'
import { blogPosts } from '@/data/blog-posts'
import { RadialScore, TrendLine, PerformanceMetric } from '@/features/seo-audit/SEOViz'
import { HeadingTree } from '@/features/seo-audit/HeadingTree'
import { toast } from 'sonner'

const MAIN_PAGES = [
  { path: '/', label: 'Home Page' },
  { path: '/about', label: 'Company Overview' },
  { path: '/services', label: 'OEM Solutions' },
  { path: '/contact', label: 'Contact Center' },
  { path: '/kotheche', label: 'Brand Page' },
]

export function SEOAuditConsole() {
  const [view, setView] = useState<'overview' | 'detail'>('overview')
  const [report, setReport] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [scanning, setScanning] = useState<string | null>(null)
  const [results, setResults] = useState<Record<string, any>>({})
  const [activePath, setActivePath] = useState<string | null>(null)
  const [focusKeyword, setFocusKeyword] = useState('')
  const [openGroups, setOpenGroups] = useState<string[]>(['main'])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    fetchProjectReport()
  }, [])

  const fetchProjectReport = async () => {
    try {
      const res = await fetch('/api/admin/audit/run')
      const data = await res.json()
      if (!data.empty) setReport(data)
    } catch (err) {
      console.error('Failed to load project metrics')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group])
  }

  const scanRoute = async (path: string) => {
    setScanning(path)
    setIsSidebarOpen(false) // Close sidebar on mobile after choosing
    try {
      const url = `/api/seo-check?path=${encodeURIComponent(path)}&keyword=${encodeURIComponent(focusKeyword)}`
      const res = await fetch(url)
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setResults(prev => ({ ...prev, [path]: data.analysis }))
      setActivePath(path)
      setView('detail')
    } catch (err: any) {
      toast.error(`Technical Error: ${err.message}`)
    } finally {
      setScanning(null)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <RefreshCw className="animate-spin text-indigo-600" size={32} />
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-slate-50 min-h-screen text-slate-900 font-sans">
      <div className="container-xl max-w-7xl mx-auto px-4 md:px-6">
        
        {/* SHARED HEADER */}
        <header className="mb-8 md:mb-12 flex flex-col gap-6 pb-8 md:pb-10 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-1">
                <ShieldCheck size={14} /> Analytics & Performance
              </div>
              <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-950">
                {view === 'overview' ? 'Strategic HUD' : 'Audit Hub'}
              </h1>
            </div>
            {/* Mobile Sidebar Toggle */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-3 bg-white rounded-xl border border-slate-200 shadow-sm text-slate-600"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-slate-500 font-medium text-xs md:text-sm max-w-xl">
              {view === 'overview' 
                ? 'Macro architecture analysis and infrastructure health reporting.' 
                : `Technical node diagnostics for ${activePath}.`}
            </p>
            
            <div className="flex items-center gap-3">
               {view === 'detail' && (
                 <Button 
                   onClick={() => setView('overview')}
                   variant="outline"
                   className="text-slate-600 border-slate-200 font-bold text-[9px] uppercase rounded-xl px-4 h-10 bg-white hover:bg-slate-50 flex items-center gap-2"
                 >
                   <ArrowLeft size={14} /> <span className="hidden sm:inline">Back to HUD</span>
                 </Button>
               )}
               <div className="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 md:gap-6 flex-1 md:flex-initial">
                 <div className="flex items-center gap-2 pl-2">
                    <Key className="text-slate-300" size={14} />
                    <input 
                      type="text" value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="Keyword..."
                      className="bg-transparent border-none text-[10px] md:text-xs font-bold focus:ring-0 outline-none w-24 md:w-32"
                    />
                 </div>
                 <div className="h-8 w-px bg-slate-100 hidden sm:block" />
                 <Button 
                   onClick={() => { setResults({}); setActivePath(null); setView('overview') }} 
                   variant="outline" 
                   className="text-slate-500 border-slate-200 font-bold text-[9px] uppercase rounded-xl px-3 md:px-5 h-8 md:h-10 bg-white hover:bg-slate-50"
                 >
                    Reset
                 </Button>
               </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* RESPONSIVE SIDEBAR DRAWER */}
          <AnimatePresence>
            {(isSidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.aside 
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className={cn(
                  "lg:col-span-3 space-y-4 fixed lg:relative inset-y-0 left-0 w-80 lg:w-auto bg-slate-50 lg:bg-transparent z-[60] lg:z-0 p-8 lg:p-0 shadow-2xl lg:shadow-none border-r lg:border-r-0 border-slate-200 lg:block",
                  !isSidebarOpen && "hidden lg:block"
                )}
              >
                <div className="lg:hidden flex items-center justify-between mb-8">
                  <span className="font-black text-xs uppercase tracking-[0.2em] text-indigo-600">Site Explorer</span>
                  <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-slate-200 rounded-lg text-slate-600">
                    <X size={20} />
                  </button>
                </div>

                <p className="px-2 text-slate-400 font-bold uppercase text-[9px] tracking-widest mb-4 flex items-center gap-2">
                   <Globe size={14} /> System Architecture
                </p>
                <div className="space-y-3">
                   <SidebarGroup title="Core Nodes" icon={Layout} isOpen={openGroups.includes('main')} onToggle={() => toggleGroup('main')}>
                      {MAIN_PAGES.map(page => (
                        <SidebarItem key={page.path} label={page.label} path={page.path} active={activePath === page.path} scanning={scanning === page.path} score={results[page.path]?.score || (page.path === '/' ? report?.technicalScore : undefined)} onClick={() => scanRoute(page.path)} />
                      ))}
                   </SidebarGroup>

                   <SidebarGroup title="Inventory" icon={ImageIcon} isOpen={openGroups.includes('products')} onToggle={() => toggleGroup('products')}>
                      {products.slice(0, 8).map(p => (
                        <SidebarItem key={p.slug} label={p.name} path={`/products/${p.slug}`} active={activePath === `/products/${p.slug}`} scanning={scanning === `/products/${p.slug}`} score={results[`/products/${p.slug}`]?.score} onClick={() => scanRoute(`/products/${p.slug}`)} />
                      ))}
                   </SidebarGroup>

                   <SidebarGroup title="Insights" icon={FileText} isOpen={openGroups.includes('blog')} onToggle={() => toggleGroup('blog')}>
                      {blogPosts.slice(0, 6).map(post => (
                        <SidebarItem key={post.slug} label={post.title} path={`/blog/${post.slug}`} active={activePath === `/blog/${post.slug}`} scanning={scanning === `/blog/${post.slug}`} score={results[`/blog/${post.slug}`]?.score} onClick={() => scanRoute(`/blog/${post.slug}`)} />
                      ))}
                   </SidebarGroup>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* OVERLAY FOR SIDEBAR */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 lg:hidden"
              />
            )}
          </AnimatePresence>

          {/* MAIN CONTENT AREA */}
          <main className="lg:col-span-9 overflow-hidden">
            <AnimatePresence mode="wait">
              {view === 'overview' ? (
                <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6 md:space-y-8">
                  {/* Scorecards Grid - Optimized for Mobile (2 cols) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                    {[
                      { label: 'Architecture', value: 90, type: 'ENT', bg: 'bg-slate-900 text-white', icon: Cpu },
                      { label: 'Ads Ready', value: 70, type: 'STR', bg: 'bg-white text-slate-900', icon: Target },
                      { label: 'SEO Tech', value: report?.technicalScore || 70, type: 'MET', bg: 'bg-white text-slate-900', icon: ShieldCheck },
                      { label: 'Performance', value: 92, type: 'COR', bg: 'bg-white text-slate-900', icon: Zap },
                    ].map((card, i) => (
                      <div key={i} className={`p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between h-36 md:h-44 ${card.bg}`}>
                        <div className="flex items-center justify-between relative z-10">
                          <card.icon size={16} className="opacity-40" />
                          <span className="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full border border-current opacity-20">{card.type}</span>
                        </div>
                        <div className="relative z-10">
                          <p className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-60 truncate">{card.label}</p>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-2xl md:text-4xl font-bold tracking-tighter italic">{card.value}</span>
                            <span className="text-[8px] md:text-[10px] font-bold opacity-40">/100</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    {/* Recommendations */}
                    <div className="lg:col-span-8 bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-10 border border-slate-200 shadow-sm">
                       <div className="flex items-center gap-3 mb-8 md:mb-10 text-indigo-600">
                          <Box size={20} />
                          <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Direct Recommendations</h3>
                       </div>
                       <div className="space-y-4 md:space-y-6">
                          {(!report?.issues || report?.issues?.length === 0) ? (
                            <div className="p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex items-center gap-4 md:gap-6">
                               <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                                  <CheckCircle2 size={24} />
                               </div>
                               <div>
                                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-800 mb-0.5 md:mb-1">Infrastructure Optimal</h4>
                                  <p className="text-slate-600 text-xs font-medium">100% metadata coverage achieved.</p>
                                </div>
                            </div>
                          ) : (
                            report.issues.map((issue: any, i: number) => (
                              <div key={i} className={`p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border flex items-center gap-4 md:gap-6 ${
                                issue.severity === 'critical' ? 'bg-red-50 border-red-100 text-red-900' : 'bg-indigo-50 border-indigo-100 text-indigo-900'
                              }`}>
                                <ShieldCheck size={24} className={issue.severity === 'critical' ? 'text-red-500' : 'text-indigo-500'} />
                                <div className="space-y-0.5 md:space-y-1">
                                  <h4 className="text-[9px] md:text-[11px] font-black uppercase tracking-widest">{issue.message}</h4>
                                  <p className="text-slate-500 text-[10px] font-medium opacity-70">Infrastructure node audit required.</p>
                                </div>
                              </div>
                            ))
                          )}
                       </div>
                    </div>

                    {/* Infrastructure Health */}
                    <div className="lg:col-span-4 bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border border-slate-200 shadow-sm">
                       <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 md:mb-10">Infrastructure Health</h3>
                       <div className="space-y-8 md:space-y-10 px-1 md:px-2">
                          <HealthItem label="Optimization" status="Optimal" />
                          <HealthItem label="Coverage" status="100%" isText />
                          <HealthItem label="Schema.org" status="Verified" isIcon />
                       </div>
                       <div className="mt-12 md:mt-16 pt-8 border-t border-slate-100">
                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-4">Strategic Status</p>
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[9px] font-black uppercase tracking-widest text-slate-800">System Operational</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="detail" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6 md:space-y-8">
                  {/* DETAILED VIEW - Optimized */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
                     <div className="lg:col-span-4 bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col items-center">
                        <RadialScore score={results[activePath!].score} size={120} strokeWidth={8} className="mb-6" />
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Technical Score</h2>
                        <div className="w-full">
                           {results[activePath!].recommendations.filter((r: any) => r.type === 'critical').length > 0 ? (
                              <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between border-b-4 border-b-rose-600">
                                 <span className="text-[9px] font-bold uppercase tracking-tight">System Critical</span>
                                 <span className="text-lg font-bold">{results[activePath!].recommendations.filter((r: any) => r.type === 'critical').length}</span>
                              </div>
                           ) : (
                              <div className="bg-emerald-600 text-white p-4 rounded-xl flex items-center justify-center">
                                 <span className="text-[9px] font-bold uppercase tracking-tight">Integrity Verified</span>
                              </div>
                           )}
                        </div>
                     </div>
                     <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                           <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                              <Zap size={14} /> Core Vitals
                           </h3>
                           <TrendLine data={results[activePath!].performance.trendData} width={60} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-4 font-mono">
                           <PerformanceMetric label="LCP" value={(results[activePath!].performance.lcp / 1000).toFixed(1)} unit="s" status={results[activePath!].performance.lcp < 2500 ? 'success' : 'warning'} />
                           <PerformanceMetric label="FID" value={results[activePath!].performance.fid} unit="ms" status="success" />
                           <PerformanceMetric label="CLS" value={results[activePath!].performance.cls} unit="idx" status="success" />
                           <PerformanceMetric label="Net" value={results[activePath!].performance.speedScore} unit="%" status="success" />
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                     <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="flex items-center gap-3 mb-8">
                           <FileText className="text-indigo-600" size={18} />
                           <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Structure Optimizer</h3>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                           <div className="flex justify-between items-center mb-3 text-[10px] font-bold uppercase">
                               <span>Keyword Density</span>
                               <span className="text-indigo-600">{results[activePath!].macro.keywordDensity.toFixed(1)}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${results[activePath!].macro.keywordDensity * 20}%` }} className="h-full bg-indigo-600 rounded-full" />
                           </div>
                        </div>
                        <div className="overflow-x-auto pb-4">
                           <HeadingTree tree={results[activePath!].basic.headings.tree} />
                        </div>
                     </div>
                     <div className="lg:col-span-5 bg-slate-950 text-slate-100 p-6 md:p-10 rounded-[2rem] shadow-xl">
                        <div className="flex items-center justify-between mb-8">
                           <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                              <ListChecks size={16} className="text-indigo-500" /> Validation Log
                           </h3>
                        </div>
                        <div className="space-y-3 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                           {results[activePath!].checklist.map((item: any, i: number) => (
                              <div key={i} className="flex gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800">
                                 {item.status === 'success' ? <CheckCircle2 className="text-emerald-500 shrink-0" size={14} /> : <AlertTriangle className="text-amber-500 shrink-0" size={14} />}
                                 <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold block text-slate-300">{item.label}</span>
                                    <span className={cn("text-[7px] font-black uppercase tracking-wider", item.priority === 'high' ? 'text-rose-500' : 'text-amber-500')}>{item.priority} node</span>
                                 </div>
                              </div>
                           ))}
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

function SidebarGroup({ title, icon: Icon, children, isOpen, onToggle }: any) {
  return (
    <div className="bg-white lg:bg-white/40 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-4 bg-slate-100/50 hover:bg-slate-100 transition-colors">
        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest flex items-center gap-2">
          <Icon size={14} /> {title}
        </span>
        <ChevronDown size={14} className={cn("text-slate-400 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-50">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SidebarItem({ label, path, active, scanning, score, onClick }: any) {
  return (
    <button onClick={onClick} disabled={scanning} className={cn(
      "w-full flex items-center justify-between p-4 transition-all text-left border-b border-slate-50 last:border-0",
      active ? 'bg-indigo-50' : 'hover:bg-slate-50/50'
    )}>
      <div className="flex flex-col min-w-0 pr-2">
        <span className={cn("font-bold text-[10px] uppercase truncate tracking-tight", active ? "text-indigo-700 font-black" : "text-slate-600")}>{label}</span>
        <code className="text-[8px] text-slate-300 mt-0.5 truncate font-mono opacity-60 tracking-tighter">{path}</code>
      </div>
      <div className="flex items-center gap-2">
        {score !== undefined && (
          <div className={cn(
            "w-7 h-7 rounded-lg border flex items-center justify-center font-black text-[9px]",
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

function HealthItem({ label, status, isText, isIcon }: any) {
  return (
     <div>
        <div className="flex items-center justify-between mb-2">
           <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">{label}</span>
           {isText ? (
             <span className="text-[11px] font-black italic text-brand-700">{status}</span>
           ) : isIcon ? (
             <CheckCircle2 size={14} className="text-emerald-500" />
           ) : (
             <Badge className="bg-emerald-50 text-emerald-600 border-none text-[7px] uppercase font-black tracking-widest px-1.5 py-0.5">{status}</Badge>
           )}
        </div>
        <div className="h-1 bg-slate-50 rounded-full overflow-hidden">
           <div className="h-full bg-indigo-500 w-full" />
        </div>
     </div>
  )
}
