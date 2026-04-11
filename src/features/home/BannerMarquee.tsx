'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, ReactNode } from 'react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { Factory, Award, Globe, Leaf } from 'lucide-react'

interface StatItem {
  value: number
  suffix: string
  label: string
  tag: string
  desc: string
  icon: ReactNode
}

export function BannerMarquee() {
  const images = [
    '/images/banner/banner1.jpg',
    '/images/banner/banner.jpg',
    '/images/banner/banner3.jpg',
    '/images/banner/banner4.jpg',
    '/images/banner/banner5.jpg',
  ]

  const stats: StatItem[] = [
    {
      value: 500, suffix: 'kg/ngày', label: 'Công suất Sản xuất', tag: 'SẢN LƯỢNG',
      desc: 'Khối lượng sấy thăng hoa mỗi ngày', icon: <Factory size={20} />
    },
    {
      value: 5, suffix: '+', label: 'Năm Kinh nghiệm', tag: 'UY TÍN',
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

  const [index, setIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-18 bg-white overflow-hidden relative border-brand-50">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Stats: 2 Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
            <StatCard stat={stats[0]} />
            <StatCard stat={stats[1]} />
          </div>

          {/* Middle: Slideshow (Shrunk) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-800/10 border border-brand-50 group"
            >
              {/* Background blur */}
              <Image
                src={images[index]}
                alt={`Nền mờ cho banner ${index + 1}`}
                fill
                priority
                className="object-cover blur-lg md:blur-2xl scale-110 opacity-30 md:opacity-50"
              />

              {/* Main image */}
              <Image
                key={index}
                src={images[index]}
                alt={`Sản phẩm trái cây sấy thăng hoa DryViet - Banner ${index + 1}`}
                fill
                className="object-contain relative z-10 transition-all duration-700 p-4"
              />

              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all ${i === index ? 'w-8 bg-brand-600' : 'w-4 bg-brand-200'}`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <button
                onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-brand-900 opacity-0 group-hover:opacity-100 transition z-20 hover:bg-white shadow-lg"
              >
                ‹
              </button>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % images.length)}
                className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-brand-900 opacity-0 group-hover:opacity-100 transition z-20 hover:bg-white shadow-lg"
              >
                ›
              </button>
            </motion.div>
          </div>

          {/* Right Stats: 2 Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-3">
            <StatCard stat={stats[2]} />
            <StatCard stat={stats[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-xl shadow-brand-900/5 hover:shadow-2xl hover:shadow-brand-900/10 border border-brand-50 transition-all duration-500 text-center">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2.5 bg-brand-50 rounded-lg text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors duration-500">
          {stat.icon}
        </div>
        <span className="text-[8px] font-black text-gray-500 tracking-[0.2em] uppercase">{stat.tag}</span>
      </div>

      <div className="mb-2 flex flex-col items-center">
        <div className="text-4xl pb-4 font-bold text-[#8B4513] flex items-baseline gap-1 justify-center">
          <AnimatedCounter target={stat.value} suffix={stat.suffix} />
        </div>
        <h3 className="text-[12px] font-bold text-gray-800 uppercase text-center">
          {stat.label}
        </h3>
      </div>

      <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
        {stat.desc}
      </p>
    </div>
  )
}