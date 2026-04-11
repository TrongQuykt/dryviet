import React from 'react'
import Link from 'next/link'
import { jobs } from '@/data/jobs'
import { Briefcase, MapPin, Clock, ArrowRight, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Cơ hội nghề nghiệp tại Việt Nam Cường Thịnh | Tuyển dụng 2026',
  description: 'Gia nhập đội ngũ Việt Nam Cường Thịnh để cùng kết nối di sản nông nghiệp Việt Nam với thế giới qua công nghệ sấy thăng hoa tiên tiến.'
}

export default function CareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <Link href="/" className="inline-block mb-6 md:mb-8">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold tracking-tighter text-slate-900 font-display italic">Viet Nam Cuong Thinh</span>
              <span className="text-[7px] sm:text-[8px] tracking-[.3em] uppercase text-slate-500 font-bold -mt-1">Careers Portal</span>
            </div>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 font-display italic leading-tight">
            Cơ hội nghề nghiệp
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Chúng tôi luôn tìm kiếm những cộng sự tài năng, nhiệt huyết để cùng nâng tầm nông sản Việt trên bản đồ thực phẩm thế giới.
          </p>
        </div>

        {/* Job List */}
        <div className="grid gap-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.slug}`}
              className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 hover:border-brand-300 hover:shadow-2xl hover:shadow-brand-100/50 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-50 text-brand-700 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl md:text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-y-3 gap-x-4 md:gap-8 text-slate-500 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400" />
                    Kinh nghiệm: {job.experience}
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-brand-600">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400" />
                    Lương: {job.salary}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-left md:text-right">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5 italic">Hạn nộp</p>
                  <p className="text-sm font-bold text-slate-700 italic">{job.deadline}</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </div>
  )
}
