'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  UserCheck
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const footerLinks = {
  quickLinks: [
    { label: 'Trang Chủ', href: '/' },
    { label: 'Sấy thăng hoa', href: '/services' },
    { label: 'Sản Phẩm', href: '/products' },
    { label: 'KOTHECHE', href: '/kotheche' },
    { label: 'Về Chúng Tôi', href: '/about' },
    { label: 'Tin Tức', href: '/blog' },
  ],
  support: [
    { label: 'Điều khoản dịch vụ', href: '/terms' },
    { label: 'Chính sách đổi trả', href: '/return-policy' },
    { label: 'Chính sách thanh toán', href: '/payment-policy' },
    { label: 'Chính sách giao hàng', href: '/shipping-policy' },
  ],
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (res.ok) {
        toast.success('Đăng ký thành công! Cảm ơn bạn đã quan tâm.')
        setEmail('')
      } else {
        toast.error(data.error || 'Có lỗi xảy ra, vui lòng thử lại.')
      }
    } catch (err) {
      toast.error('Lỗi kết nối. Vui lòng kiểm tra internet.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-white border-t border-slate-100 text-slate-600">
      {/* Tier 1: Intelligent Newsletter Section */}
      <div className="bg-slate-50/50 border-b border-slate-100 py-16">
        <div className="container-xl px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-slate-950 font-display italic tracking-tight mb-2">Đăng ký để nhận tin tức mới nhất.</h3>
            <p className="text-sm font-medium text-slate-500 italic">Nhận các báo cáo độc quyền về tối ưu hóa quy trình sấy và xu hướng nguồn cung thực phẩm sạch toàn cầu.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full lg:w-fit gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Địa chỉ email công việc"
              className="flex-grow lg:w-80 h-14 rounded-2xl bg-white border border-slate-200 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all font-medium"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-14 px-8 rounded-2xl bg-brand-950 text-white font-black text-[10px] uppercase tracking-widest hover:bg-brand-800 transition-all shadow-xl shadow-brand-950/10 flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Đang gửi...' : 'Đăng Ký ngay'}
            </button>
          </form>
        </div>
      </div>

      {/* Tier 2: Main Corporate Grid */}
      <div className="container-xl py-10 px-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-10">

          {/* Brand Vision (3/12) */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/images/logo/LOGO VIET NAM CUONG THINH-02.png"
                alt="Việt Nam Cường Thịnh – Kỹ thuật Sấy DryViet"
                width={180} height={60}
                className="h-16 w-auto transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm font-medium leading-relaxed text-slate-500 mb-8 max-w-sm">
              Kết nối di sản nông nghiệp trù phú của Việt Nam với các tiêu chuẩn sức khỏe toàn cầu, thông qua công nghệ sấy thăng hoa tiên tiến ngay tại Quận 12, TP. Hồ Chí Minh.
            </p>
            <div className="flex gap-4">
              <SocialIcon
                href="https://www.facebook.com/page.KoTheChe"
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/facebook/default.svg"
                alt="Facebook"
              />
              <SocialIcon
                href="https://www.instagram.com/kotheche.snack/"
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/instagram/default.svg"
                alt="Instagram"
              />
              <SocialIcon
                href="mailto:sales.vietnamcuongthinh@gmail.com"
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/gmail/default.svg"
                alt="Gmail"
              />
              <SocialIcon
                href="https://www.amazon.com/dp/B0DTJ4MZ4L?th=1"
                src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/amazon/default.svg"
                alt="Amazon"
              />
              <SocialIcon
                href="tel:+84868021818"
                src="https://api.iconify.design/heroicons:phone-solid.svg"
                alt="Phone"
              />
            </div>
          </div>

          {/* Quick Links (2/12) */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Liên Kết Nhanh</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={10} className="text-brand-300 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support (3/12) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Hỗ Trợ Khách Hàng</h4>
            <ul className="space-y-4">
              {footerLinks.support.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={10} className="text-brand-300 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HQ & Contact (4/12) */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Trụ Sở & Văn Phòng Điều Hành</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-600" />
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  137 Thạnh Lộc 41, P. Thạnh Lộc, Q.12, TP. Hồ Chí Minh, Việt Nam
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-600" />
                </div>
                <a href="tel:+84868021818" className="text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  (+84) 868 021 818 (Zalo/Hotline)
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-brand-600" />
                </div>
                <a href="mailto:sales.vietnamcuongthinh@gmail.com" className="text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors">
                  sales.vietnamcuongthinh@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Tier 3: High-End Trust Badges */}
        <div className="mt-18 pt-6 flex flex-wrap items-center justify-between gap-10">
          <div className="flex flex-wrap items-center gap-4 lg:gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 mx-auto">
            {['FDA Inspected', 'ISO 22000:2018', 'HACCP Standard', 'FSVP Compliant'].map(cert => (
              <div key={cert} className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tier 4: Bottom Meta Bar */}
      <div className="bg-slate-100/50 py-8 border-t border-slate-200/40">
        <div className="container-xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span>© {new Date().getFullYear()} Công ty TNHH Việt Nam Cường Thịnh. </span>
            <span className="hidden sm:inline">|</span>
            <span className="text-brand-600/60 italic font-medium">Thiết kế cho Sự Hoàn hảo Toàn cầu</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/sitemap" className="hover:text-brand-700 transition-all flex items-center gap-2">
              Sơ đồ Trang web Doanh nghiệp <ArrowUpRight size={10} />
            </Link>
            <span className="text-slate-200">|</span>
            <span>Trụ sở Kỹ thuật: TP. Hồ Chí Minh</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, src, alt }: { href: string, src: string, alt: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-3 transition-all hover:shadow-xl hover:border-brand-100 hover:-translate-y-1 group"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-all"
      />
    </a>
  )
}
