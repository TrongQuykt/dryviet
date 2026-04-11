'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg' | 'huge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:   'bg-brand-800 text-white hover:bg-brand-900 shadow-lg hover:shadow-brand-800/30',
  secondary: 'bg-accent text-white hover:bg-orange-600 shadow-lg',
  outline:   'border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white',
  ghost:     'text-brand-800 hover:bg-brand-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-semibold',
  huge: 'px-12 py-6 text-xl font-bold tracking-tight',
}

export function Button({ variant = 'primary', size = 'md', href, external, className, children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-brand-800'
  const cls = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...(props as any)}>{children}</a>
      : <Link href={href} className={cls} {...(props as any)}>{children}</Link>
  }
  return <button className={cls} {...props}>{children}</button>
}
