"use client";

import { motion } from 'framer-motion'
import { Droplets, Scissors, ShieldCheck, Snowflake, Wind, Package } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Rửa Sạch',
      desc: 'Rửa sạch nguyên liệu bằng nước tinh khiết, loại bỏ tạp chất.',
      icon: <Droplets size={24} strokeWidth={1.5} />
    },
    {
      num: '02',
      title: 'Cắt & Chuẩn Bị',
      desc: 'Cắt theo kích thước chuẩn, chuẩn bị sấy.',
      icon: <Scissors size={24} strokeWidth={1.5} />
    },
    {
      num: '03',
      title: 'Khử Trùng',
      desc: 'Khử trùng công nghệ cao, đảm bảo an toàn tuyệt đối.',
      icon: <ShieldCheck size={24} strokeWidth={1.5} />
    },
    {
      num: '04',
      title: 'Cấp Đông',
      desc: 'Cấp đông nhanh -40°C bảo toàn cấu trúc tế bào.',
      icon: <Snowflake size={24} strokeWidth={1.5} />
    },
    {
      num: '05',
      title: 'Sấy Thăng Hoa',
      desc: 'Giữ nguyên 97% dinh dưỡng và hương vị tự nhiên.',
      icon: <Wind size={24} strokeWidth={1.5} />
    },
    {
      num: '06',
      title: 'Đóng Gói',
      desc: 'Đóng gói vô trùng, hút chân không bảo quản lâu dài.',
      icon: <Package size={24} strokeWidth={1.5} />
    },
  ]

  // Snakes for desktop grid
  const displaySteps = [steps[0], steps[1], steps[2], steps[5], steps[4], steps[3]]

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 px-4">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-[11px] md:text-sm">Sản Xuất Đẳng Cấp</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 leading-tight">Quy Trình Gia Công</h2>
          <p className="text-gray-500 text-sm md:text-lg">Kiểm soát chặt chẽ 6 bước để đạt chất lượng xuất khẩu tối ưu.</p>
        </div>

        {/* Mobile Horizontal Scroll Container */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-12 scrollbar-hide">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[240px] snap-center bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-white border border-brand-100 flex items-center justify-center text-brand-800 shadow-xl shadow-brand-100/20">
                  {step.icon}
                </div>
                <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-brand-950 flex items-center justify-center font-display text-[10px] font-black text-white shadow-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed opacity-80">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop Snake Flow Grid */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="xMidYMid meet">
              <motion.path
                d="M 160 30 H 1040 C 1220 55 1220 465 1040 440 H 160"
                stroke="#8B4513"
                strokeWidth="2"
                strokeDasharray="10 10"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-y-32 gap-x-16 relative">
            {displaySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative flex flex-col items-center text-center z-10"
              >
                <div className="mb-12 relative">
                  <div className="w-28 h-28 rounded-full bg-slate-50 border-2 border-brand-50 flex items-center justify-center text-brand-800 shadow-2xl shadow-brand-100/30 group-hover:bg-brand-800 group-hover:text-white transition-all duration-700 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-white border border-brand-800 flex items-center justify-center font-display text-xs font-black text-brand-800 z-20 shadow-md">
                    {step.num}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-brand-100 animate-ping opacity-0 group-hover:opacity-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[280px] font-medium opacity-80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
