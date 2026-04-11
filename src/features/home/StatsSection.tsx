"use client";

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Factory, Award, Globe, Leaf } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      value: 500, suffix: 'kg/ngày', label: 'Công suất Sản xuất', tag: 'SẢN LƯỢNG',
      desc: 'Khối lượng sấy thăng hoa mỗi ngày', icon: <Factory size={20} />
    },
    {
      value: 10, suffix: '+', label: 'Năm Kinh nghiệm', tag: 'UY TÍN',
      desc: 'Trong lĩnh vực xuất khẩu nông sản', icon: <Award size={20} />
    },
    {
      value: 5, suffix: '+', label: 'Thị trường Quốc tế', tag: 'TẦM VỚI',
      desc: 'Mỹ, EU, Nhật Bản & nhiều hơn nữa', icon: <Globe size={20} />
    },
    {
      value: 100, suffix: '%', label: 'Nguyên liệu Tự nhiên', tag: 'CHẤT LƯỢNG',
      desc: 'Không chất phụ gia hay bảo quản', icon: <Leaf size={20} />
    },
  ]

  return (
    <section className="relative z-20 -mt-16 md:-mt-32 pb-16">
      <div className="container-xl px-2 md:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-50 flex flex-col justify-between min-h-[160px] md:min-h-[220px]"
            >
              {/* Top Header */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-brand-50 rounded-lg md:rounded-xl text-brand-700">
                  {stat.icon}
                </div>
                <span className="text-[8px] md:text-[10px] font-black text-gray-400 tracking-widest uppercase pt-1">{stat.tag}</span>
              </div>

              {/* Main Content */}
              <div className="mb-2 md:mb-4 text-center">
                <div className="text-xl md:text-3xl lg:text-4xl font-black text-[#8B4513] font-display flex items-baseline gap-0.5 justify-center leading-none">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-[8px] md:text-xs font-bold text-gray-900 uppercase mt-2">{stat.label}</h3>
              </div>

              {/* Footer */}
              <p className="hidden md:block text-[11px] text-gray-500 font-medium leading-relaxed opacity-70">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
