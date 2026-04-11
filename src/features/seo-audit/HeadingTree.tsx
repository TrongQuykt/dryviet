'use client'

import { motion } from 'framer-motion'
import { ChevronRight, FileText, Layout, AlertCircle, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HeadingTreeNode } from '@/lib/seo-analyzer'

interface HeadingTreeProps {
  tree: HeadingTreeNode[]
}

export function HeadingTree({ tree }: HeadingTreeProps) {
  if (tree.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-200 rounded-xl bg-slate-50">
        <Layout className="w-8 h-8 text-slate-300 mb-2" />
        <span className="text-xs font-bold text-slate-400">No headings detected</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <Layout size={12} />
          Heading Architecture (H1-H6)
        </h4>
        <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 uppercase tracking-tighter">Tree View</span>
      </div>
      
      <div className="space-y-1 relative pl-2 border-l border-slate-100 ml-2">
        {tree.map((node, i) => (
          <motion.div
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "group relative flex items-center gap-3 p-2 rounded-lg transition-all hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100",
              node.tag === 'H1' ? 'bg-indigo-50/10' : ''
            )}
          >
            <div className={cn(
              "flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-[10px] font-black",
              node.tag === 'H1' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
            )}>
              {node.tag}
            </div>
            
            <div className="flex-grow min-w-0">
               <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[11px] font-bold text-slate-800 truncate pr-4">
                    {node.text}
                  </span>
                  {node.status === 'success' ? (
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  ) : (
                    <AlertCircle size={12} className="text-amber-500" />
                  )}
               </div>
               {node.text.length > 70 && (
                 <span className="text-[8px] font-bold text-rose-500 uppercase tracking-tight">Length Violation ({'>'}70 chars)</span>
               )}
            </div>
            
            <div className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-200 border border-white" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
