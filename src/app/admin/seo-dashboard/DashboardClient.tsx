'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'
import { 
  LayoutDashboard, Bug, Search as SearchIcon, ChevronRight, Users, 
  RefreshCw, CheckCircle2, AlertCircle, Trash2, Info, BarChart4, ExternalLink,
  Zap, Globe, Activity, MousePointer2, Clock, ShieldCheck, Layers, Gauge, Cpu, Target,
  Menu, X
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { toast } from 'sonner'
import { RadialScore } from '@/features/seo-audit/SEOViz'
import { cn } from '@/lib/utils'

type Tab = 'overview' | 'audit' | 'leads' | 'subscribers'

export function DashboardClient() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [isLoading, setIsLoading] = useState(true)
  const [isScanning, setIsScanning] = useState(false)
  const [report, setReport] = useState<any>(null)
  const [leads, setLeads] = useState<any[]>([])
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const [reportRes, leadsRes, subsRes] = await Promise.all([
        fetch('/api/admin/audit/run'),
        fetch('/api/admin/contacts'),
        fetch('/api/admin/subscribers'),
      ])
      
      const [rData, lData, sData] = await Promise.all([
        reportRes.json(),
        leadsRes.json(),
        subsRes.json()
      ])

      if (rData && !rData.empty) setReport(rData)
      setLeads(lData || [])
      setSubscribers(sData || [])
    } catch (err) {
      toast.error('Failed to sync project metrics')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRunAudit = async () => {
    setIsScanning(true)
    try {
      const res = await fetch('/api/admin/audit/run', { method: 'POST' })
      const data = await res.json()
      if (res.ok) {
        setReport(data)
        toast.success('Enterprise Diagnostic Complete')
      }
    } catch (err) {
      toast.error('Diagnostic error')
    } finally {
      setIsScanning(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="text-indigo-500 animate-spin" size={40} />
          <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">Initialising Strategic HUD...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-300 flex font-sans overflow-hidden">
      
      {/* Sidebar - Responsive Drawer for Admin */}
      <AnimatePresence>
        {(isSidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
          <motion.aside 
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            className={cn(
               "w-64 border-r border-slate-800 flex flex-col fixed inset-y-0 left-0 h-full z-[60] bg-[#0F172A] shadow-2xl lg:shadow-none transition-all",
               !isSidebarOpen && "hidden lg:flex"
            )}
          >
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                  <Cpu size={18} />
                </div>
                <div>
                  <h1 className="text-white font-bold text-xs uppercase tracking-tighter">Strategic HUD</h1>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">v2.0 Admin</p>
                </div>
              </div>
              <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              {[
                { id: 'overview', icon: LayoutDashboard, label: 'Strategic HUD' },
                { id: 'audit', icon: ShieldCheck, label: 'Technical Node' },
                { id: 'leads', icon: Users, label: 'Leads Pipeline' },
                { id: 'subscribers', icon: Target, label: 'Audience' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id as Tab); setIsSidebarOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activeTab === item.id 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                    : 'hover:bg-slate-800/50'
                  }`}
                >
                  <item.icon size={16} /> {item.label}
                </button>
              ))}
            </nav>

            <div className="p-4 mt-auto">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold text-slate-500 uppercase">Health Status</span>
                  <span className="text-indigo-400 font-mono text-xs">{report?.overallScore || 0}%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${report?.overallScore || 0}%` }}
                    className="h-full bg-indigo-500" 
                  />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden" 
        />
      )}

      <main className="flex-1 flex flex-col min-h-screen relative overflow-hidden lg:ml-64">
        {/* Header */}
        <header className="h-20 border-b border-slate-800 flex items-center justify-between px-6 md:px-10 sticky top-0 bg-[#0F172A]/80 backdrop-blur-xl z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              <Menu size={24} />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
              <Globe size={14} /> <span>Live Node</span>
              <ChevronRight size={12} />
              <span className="text-white">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              onClick={handleRunAudit}
              disabled={isScanning}
              className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-4 md:px-6 h-10 text-[9px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/20 flex items-center gap-2"
            >
              {isScanning ? <RefreshCw className="animate-spin" size={14} /> : <Zap size={14} />}
              <span className="hidden sm:inline">{isScanning ? 'Syncing...' : 'Deep Audit'}</span>
              <span className="sm:hidden">{isScanning ? '...' : 'Audit'}</span>
            </Button>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full relative z-10 overflow-x-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="ov"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Scorecards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
                  <div className="lg:col-span-4 bg-slate-900/50 rounded-2xl border border-slate-800 p-6 backdrop-blur-sm relative overflow-hidden group">
                    <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">Infrastructure</h3>
                    <div className="flex items-end gap-2 mb-2">
                       <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{report?.technicalScore || 0}</span>
                       <span className="text-indigo-400 font-bold text-[10px] uppercase mb-2">Maturity</span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 bg-slate-900/50 rounded-2xl border border-slate-800 p-6 backdrop-blur-sm overflow-hidden">
                     <div className="flex justify-between items-center mb-10">
                        <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Growth Index</h3>
                     </div>
                     <div className="h-40 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                           <AreaChart data={[{v: 40}, {v: 70}, {v: 55}, {v: 90}, {v: 85}]}>
                              <Area type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={3} fill="#6366f1" fillOpacity={0.05} />
                           </AreaChart>
                        </ResponsiveContainer>
                     </div>
                  </div>
                </div>

                {/* 2-Column Bento Grid on Mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[
                     { label: 'Technical', value: 'Healthy', icon: ShieldCheck, color: 'text-emerald-400' },
                     { label: 'Strategic', value: 'Verified', icon: Target, color: 'text-indigo-400' },
                     { label: 'Enterprise', value: 'High', icon: Cpu, color: 'text-amber-400' },
                     { label: 'Operational', value: 'Active', icon: Gauge, color: 'text-indigo-400' },
                   ].map((item, i) => (
                     <div key={i} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                        <div className="flex items-center gap-2 mb-2">
                           <item.icon size={14} className={item.color} />
                           <span className="text-[8px] font-bold text-slate-500 uppercase truncate">{item.label}</span>
                        </div>
                        <p className="text-sm font-bold text-white tracking-tight">{item.value}</p>
                     </div>
                   ))}
                </div>

                {/* Findings List */}
                <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
                   <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/20">
                      <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Diagnostic Findings</h3>
                   </div>
                   <div className="p-2 space-y-1">
                      {report?.issues?.slice(0, 5).map((issue: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all">
                           <div className="flex items-center gap-3">
                              <div className={cn("w-1 h-1 rounded-full", issue.severity === 'critical' ? 'bg-red-500 shadow-lg' : 'bg-indigo-500')} />
                              <p className="text-[11px] font-bold text-slate-300">{issue.message}</p>
                           </div>
                        </div>
                      ))}
                      {(!report?.issues || report.issues.length === 0) && (
                        <div className="py-12 text-center text-[10px] font-bold uppercase tracking-widest opacity-20">Full Integrity Protocol Validated</div>
                      )}
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'leads' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="overflow-x-auto pb-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Leads Pipeline</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {leads.map((lead) => (
                      <div key={lead.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                         <div className="flex justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 font-black">{lead.fullName.charAt(0)}</div>
                               <div>
                                  <p className="text-sm font-bold text-white">{lead.fullName}</p>
                                  <p className="text-[10px] text-slate-500 font-mono tracking-tighter">{lead.email}</p>
                               </div>
                            </div>
                            <Badge className="bg-slate-800 border-slate-700 text-[10px]">{lead.interest}</Badge>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'subscribers' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 overflow-x-auto">
                   <table className="w-full text-left">
                      <thead className="bg-slate-800/50 text-[10px] font-black uppercase text-slate-500">
                         <tr>
                            <th className="px-6 py-4">User Identity</th>
                            <th className="px-6 py-4">Status</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/50">
                         {subscribers.map((s) => (
                           <tr key={s.id}>
                              <td className="px-6 py-4 font-mono text-indigo-300 text-[11px]">{s.email}</td>
                              <td className="px-6 py-4"><Badge className="bg-emerald-500/10 text-emerald-400 text-[8px] uppercase">Active</Badge></td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'audit' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 text-center py-20 opacity-40">
                <Layers size={48} className="mx-auto mb-4" />
                <p className="text-xs font-bold uppercase tracking-widest">Deep Semantic Audit protocol pending user interaction.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}
