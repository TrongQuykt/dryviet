'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { toast } from 'sonner'
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoginClient() {
  const [email, setEmail] = useState('vyquy633@gmail.com')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [otp, setOtp] = useState('')
  const router = useRouter()

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        toast.success('Mã OTP đã được gửi đến Gmail của bạn!')
        setStep('otp')
      } else {
        toast.error(data.error || 'Lỗi đăng nhập')
      }
    } catch (err) {
      toast.error('Lỗi kết nối')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/admin/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otp }),
      })
      if (res.ok) {
        toast.success('Xác thực thành công!')
        router.push('/admin/seo-dashboard')
      } else {
        const data = await res.json()
        toast.error(data.error || 'Mã OTP không đúng')
      }
    } catch (err) {
      toast.error('Lỗi kết nối')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-600" />
      
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-950 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl rotate-3">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 font-display italic">DryViet Admin</h1>
          <p className="text-slate-500 text-sm mt-2">Truy cập hệ thống báo cáo chiến lược SEO & UX</p>
        </div>

        <AnimatePresence mode="wait">
          {step === 'email' ? (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Quản Trị</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all font-medium"
                      placeholder="admin@dryviet.com"
                    />
                  </div>
                </div>
                <Button type="submit" disabled={loading} className="w-full h-14 rounded-2xl bg-brand-950 text-white font-black text-[10px] uppercase tracking-widest hover:bg-brand-800 shadow-lg transition-all">
                  {loading ? 'Đang gửi mã...' : <span className="flex items-center gap-2">Gửi mã xác thực <ArrowRight size={14} /></span>}
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="otp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Nhập mã OTP 6 số</label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-6 py-6 rounded-2xl border border-slate-100 bg-slate-50 text-center text-3xl font-bold tracking-[1em] focus:bg-white focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                    placeholder="000000"
                  />
                  <p className="text-center text-xs text-slate-400 mt-4">Mã đã được gửi về Gmail của bạn</p>
                </div>
                <Button type="submit" disabled={loading} className="w-full h-14 rounded-2xl bg-brand-950 text-white font-black text-[10px] uppercase tracking-widest hover:bg-brand-800 shadow-lg transition-all">
                  {loading ? 'Đang xác thực...' : 'Xác thực & Vào Dashboard'}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="w-full text-center text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-600 transition-colors"
                >
                  Dùng email khác
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
