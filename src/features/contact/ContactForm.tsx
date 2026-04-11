'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Vui lòng nhập họ tên (ít nhất 2 ký tự)'),
  email: z.string().email('Địa chỉ email không hợp lệ'),
  phone: z.string().min(8, 'Số điện thoại không hợp lệ'),
  interest: z.string().min(5, 'Tiêu đề quá ngắn (ít nhất 5 ký tự)'),
  message: z.string().min(10, 'Nội dung quá ngắn, vui lòng mô tả chi tiết hơn (ít nhất 10 ký tự)'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || 'Gửi thất bại, vui lòng thử lại sau.')
      }
      
      setIsSuccess(true)
      toast.success('Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.')
      reset()
    } catch (err: any) {
      toast.error(err.message || 'Lỗi hệ thống, vui lòng gửi trực tiếp qua Zalo hoặc Email.')
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-emerald-50/50 rounded-[2.5rem] p-12 border border-emerald-100/50 flex flex-col items-center text-center animate-fade-up">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-emerald-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3 font-display italic">Đã Gửi Thành Công!</h3>
        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
          Xin cảm ơn bạn đã quan tâm. Đội ngũ Kinh Doanh sẽ phản hồi trong vòng 12-24 giờ làm việc.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full px-8">Gửi Thêm Yêu Cầu</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-950/5 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Họ & Tên *</label>
          <input 
            {...register('fullName')} 
            id="fullName" 
            className={`w-full px-6 py-4 rounded-2xl border bg-slate-50/50 focus:bg-white focus:ring-4 outline-none transition-all duration-300 font-medium ${errors.fullName ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10 focus:border-brand-500'}`} 
            placeholder="Nguyễn Văn A" 
          />
          {errors.fullName && <p className="text-red-500 text-[10px] mt-1.5 ml-1 font-bold">{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Email *</label>
          <input 
            {...register('email')} 
            type="email" 
            id="email" 
            className={`w-full px-6 py-4 rounded-2xl border bg-slate-50/50 focus:bg-white focus:ring-4 outline-none transition-all duration-300 font-medium ${errors.email ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10 focus:border-brand-500'}`} 
            placeholder="email@congty.com" 
          />
          {errors.email && <p className="text-red-500 text-[10px] mt-1.5 ml-1 font-bold">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Số Điện Thoại *</label>
          <input 
            {...register('phone')} 
            id="phone" 
            className={`w-full px-6 py-4 rounded-2xl border bg-slate-50/50 focus:bg-white focus:ring-4 outline-none transition-all duration-300 font-medium ${errors.phone ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10 focus:border-brand-500'}`} 
            placeholder="+84 ..." 
          />
          {errors.phone && <p className="text-red-500 text-[10px] mt-1.5 ml-1 font-bold">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="interest" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Tiêu Đề *</label>
          <input 
            {...register('interest')} 
            id="interest" 
            className={`w-full px-6 py-4 rounded-2xl border bg-slate-50/50 focus:bg-white focus:ring-4 outline-none transition-all duration-300 font-medium ${errors.interest ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10 focus:border-brand-500'}`} 
            placeholder="Hợp tác kinh doanh / Báo giá..." 
          />
          {errors.interest && <p className="text-red-500 text-[10px] mt-1.5 ml-1 font-bold">{errors.interest.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Nội Dung Tin Nhắn *</label>
        <textarea 
          {...register('message')} 
          id="message" 
          rows={5} 
          className={`w-full px-6 py-4 rounded-2xl border bg-slate-50/50 focus:bg-white focus:ring-4 outline-none transition-all duration-300 font-medium ${errors.message ? 'border-red-500 focus:ring-red-500/10' : 'border-slate-100 focus:ring-brand-500/10 focus:border-brand-500'}`} 
          placeholder="Mô tả chi tiết yêu cầu của bạn..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-[10px] mt-1.5 ml-1 font-bold">{errors.message.message}</p>}
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full h-16 rounded-2xl bg-brand-950 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-800 transition-all shadow-xl shadow-brand-950/10"
        >
          {isSubmitting ? 'Đang Gửi...' : <span className="flex items-center justify-center gap-3">Gửi Yêu Cầu Ngay <Send size={14}/></span>}
        </Button>
      </div>
    </form>
  )
}
