'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Về Chúng Tôi', href: '/about' },
  {
    label: 'Sản Phẩm', href: '/products',
    children: [
      { label: 'Thanh Long', href: '/products/dragon-fruit', color: 'bg-rose-500' },
      { label: 'Xoài', href: '/products/mango', color: 'bg-orange-500' },
      { label: 'Mít', href: '/products/jackfruit', color: 'bg-yellow-500' },
    ]
  },
  { label: 'Thương Hiệu KOTHECHE', href: '/kotheche' },
  { label: 'Chứng Nhận', href: '/certifications' },
  { label: 'Dịch Vụ OEM', href: '/services' },
  { label: 'Tin Tức', href: '/blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const pathname = usePathname()
  const isHome = pathname === '/'
  const isLightHeader = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isLightHeader ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent border-b border-transparent'
    )}>
      <div className="container-xl">
        <nav className="flex items-center justify-between h-20" aria-label="Điều hướng chính">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/images/logo/LOGO VIET NAM CUONG THINH-02.png"
              alt="Việt Nam Cường Thịnh"
              width={200} height={56}
              priority
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                {link.children ? (
                  <>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300',
                        isLightHeader
                          ? (pathname.startsWith(link.href) ? 'text-brand-800 bg-brand-50' : 'text-slate-700 hover:text-brand-800 hover:bg-slate-50')
                          : 'text-white/90 hover:text-white bg-transparent hover:bg-white/10'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} className={cn('transition-transform duration-300', activeDropdown === link.href ? 'rotate-180' : '')} />
                    </Link>

                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full pt-2 left-1/2 -translate-x-1/2 w-48 z-50 origin-top"
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden text-center">
                            {link.children.map(child => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex flex-col items-center gap-1 px-5 py-3 text-sm text-slate-600 font-bold hover:bg-slate-50 hover:text-brand-800 transition-colors"
                              >
                                <div className={cn("w-2 h-2 rounded-full mb-1", child.color)} />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-2 rounded-full text-sm font-bold transition-all duration-300',
                      isLightHeader
                        ? (pathname === link.href ? 'text-brand-800 bg-brand-50' : 'text-slate-700 hover:text-brand-800 hover:bg-slate-50')
                        : 'text-white/90 hover:text-white bg-transparent hover:bg-white/10'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" size="sm" className="rounded-full px-6 shadow-lg shadow-brand-500/10">
              Nhận Báo Giá
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors focus:outline-none"
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen
              ? <X size={26} className="text-slate-900" />
              : <Menu size={26} className={isLightHeader ? 'text-slate-900' : 'text-white'} />
            }
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="container-xl py-6 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-bold transition-colors",
                      pathname === link.href ? "text-brand-800 bg-brand-50" : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-6 flex flex-col gap-1 mt-1 border-l border-slate-100 pl-4">
                      {link.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-slate-500 hover:text-brand-800"
                        >
                          <div className={cn("w-1.5 h-1.5 rounded-full", child.color)} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-4 px-4 pb-12">
                <Button 
                  href="/contact" 
                  size="huge" 
                  onClick={() => setMobileOpen(false)} 
                  className="rounded-xl bg-brand-950 text-white"
                >
                  Nhận Báo Giá
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
