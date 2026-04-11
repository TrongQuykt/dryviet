'use client'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'brand' | 'orange' | 'green' | 'gray'
  className?: string
}

const variants = {
  brand:  'bg-brand-100 text-brand-800 border border-brand-200',
  orange: 'bg-orange-100 text-orange-700 border border-orange-200',
  green:  'bg-emerald-100 text-emerald-700 border border-emerald-200',
  gray:   'bg-gray-100 text-gray-600 border border-gray-200',
}

export function Badge({ children, variant = 'brand', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase', variants[variant], className)}>
      {children}
    </span>
  )
}
