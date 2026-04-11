import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { jobs } from '@/data/jobs'
import {
  MapPin,
  Clock,
  Briefcase,
  TrendingUp,
  ChevronLeft,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone
} from 'lucide-react'

// Next.js App Router params type definition
type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const job = jobs.find(j => j.slug === id)
  if (!job) return { title: 'Job Not Found' }

  return {
    title: `${job.title} | Tuyển dụng Việt Nam Cường Thịnh`,
    description: job.description
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params
  const job = jobs.find(j => j.slug === id)

  if (!job) {
    notFound()
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Sticky / Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/careers" className="flex items-center gap-2 text-slate-600 hover:text-brand-600 font-medium transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>
          {/* <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Careers Portal</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <Link href="/" className="text-sm font-bold italic font-display italic">Việt Nam Cường Thịnh</Link>
          </div> */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-700 text-[10px] font-bold uppercase tracking-wider rounded-lg mb-6">
                Chuyên môn: {job.department}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 font-display italic leading-tight">
                {job.title}
              </h1>

              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:italic">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-brand-600" />
                  </div>
                  Mô tả công việc
                </h3>
                <p className="text-slate-600 whitespace-pre-line leading-relaxed mb-8 text-sm sm:text-base">
                  {job.description}
                </p>

                {job.careerPath && (
                  <div className="mb-10 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100 italic">
                    <h4 className="text-brand-700 font-bold mb-4 flex items-center gap-2 not-italic tracking-tight text-sm">
                      <TrendingUp className="w-4 h-4" />
                      LỘ TRÌNH THĂNG TIẾN:
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
                      {job.careerPath.map((path, idx) => (
                        <React.Fragment key={idx}>
                          <span className="font-bold text-slate-800 text-xs sm:text-sm">{path}</span>
                          {idx < job.careerPath!.length - 1 && (
                            <ArrowRightSmall />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                  </div>
                  Yêu cầu ứng viên
                </h3>
                <ul className="space-y-3 mb-8 list-none p-0">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-brand-600" />
                  </div>
                  Quyền lợi
                </h3>
                <ul className="space-y-3 list-none p-0">
                  {job.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Section */}
            <div className="bg-brand-900 text-white p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400 rotate-45 translate-x-32 -translate-y-32 blur-[100px] opacity-20" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display italic">Nộp đơn ứng tuyển</h2>
                <p className="text-brand-100 opacity-80 mb-8 max-w-lg text-sm sm:text-base">
                  Nếu bạn sẵn sàng đồng hành cùng Việt Nam Cường Thịnh, hãy gửi CV và các chứng chỉ liên quan qua email cho bộ phận nhân sự.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="mailto:hr.vietnamcuongthinh@gmail.com" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all border border-white/10">
                    <Mail className="w-6 h-6 text-brand-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] text-brand-300 font-bold uppercase tracking-widest truncate">Email tiếp nhận</p>
                      <p className="font-bold text-sm sm:text-base truncate">hr.vietnamcuongthinh@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+84356682068" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all border border-white/10">
                    <Phone className="w-6 h-6 text-brand-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-brand-300 font-bold uppercase tracking-widest">Hotline Nhân sự</p>
                      <p className="font-bold text-sm sm:text-base">+𝟖𝟒 𝟑𝟓 𝟔𝟔𝟖 𝟐𝟎𝟔𝟖 (Huy)</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm lg:sticky lg:top-24">
              <h4 className="text-sm font-black uppercase text-slate-400 tracking-widest mb-6 border-b border-slate-50 pb-4 italic">
                Thông tin chung
              </h4>
              <div className="space-y-6">
                <SidebarItem
                  icon={TrendingUp}
                  label="Mức lương"
                  value={job.salary}
                  valueClass="text-brand-600 font-bold italic"
                />
                <SidebarItem
                  icon={Users}
                  label="Hình thức"
                  value={job.type}
                />
                <SidebarItem
                  icon={Briefcase}
                  label="Kinh nghiệm"
                  value={job.experience}
                />
                <SidebarItem
                  icon={MapPin}
                  label="Địa điểm"
                  value={job.location}
                />
                <SidebarItem
                  icon={Calendar}
                  label="Hạn nộp"
                  value={job.deadline}
                  valueClass="text-slate-900 font-bold italic"
                />
              </div>

              <Link
                href="mailto:hr@dryviet.com"
                className="w-full mt-8 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-brand-500/20 transition-all hover:scale-[1.02]"
              >
                Ứng tuyển ngay
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, value, valueClass = "text-slate-900 font-semibold" }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-brand-500" />
      </div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
        <p className={valueClass}>{value}</p>
      </div>
    </div>
  )
}

function ArrowRightSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300" />
    </svg>
  )
}
