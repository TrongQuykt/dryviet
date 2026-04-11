'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RadialScoreProps {
  score: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function RadialScore({ score, size = 120, strokeWidth = 10, className }: RadialScoreProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (score / 100) * circumference

  const getColor = (s: number) => {
    if (s >= 90) return '#10b981' // Green
    if (s >= 50) return '#f59e0b' // Orange
    return '#ef4444' // Red
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900">{score}</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Score</span>
      </div>
    </div>
  )
}

interface TrendLineProps {
  data: number[]
  width?: number
  height?: number
  className?: string
}

export function TrendLine({ data, width = 100, height = 40, className }: TrendLineProps) {
  if (data.length < 2) return null

  const max = 100
  const min = 0
  const range = max - min
  
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((d - min) / range) * height
    return `${x},${y}`
  }).join(' ')

  return (
    <div className={cn("relative", className)}>
      <svg width={width} height={height} className="overflow-visible">
        <motion.polyline
          points={points}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Area fill */}
        <motion.path
          d={`M 0,${height} L ${points} L ${width},${height} Z`}
          fill="url(#trendGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        />
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

interface PerformanceMetricProps {
  label: string
  value: string | number
  unit: string
  status: 'success' | 'warning' | 'error'
  description?: string
}

export function PerformanceMetric({ label, value, unit, status, description }: PerformanceMetricProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'bg-emerald-500'
      case 'warning': return 'bg-amber-500'
      case 'error': return 'bg-rose-500'
    }
  }

  return (
    <div className="group relative bg-slate-50 border border-slate-100 p-4 rounded-xl transition-all">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
        <div className={cn("w-1.5 h-1.5 rounded-full", getStatusColor())} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold text-slate-900">{value}</span>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{unit}</span>
      </div>
      
      {/* Tooltip on hover - Only if description exists */}
      {description && (
        <div className="absolute top-full left-0 mt-2 w-48 p-3 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-xl border border-slate-800">
          {description}
        </div>
      )}
    </div>
  )
}
