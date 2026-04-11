'use client'
import { Button } from '@/components/ui/Button'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax the background at half the scroll speed
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center -mt-20 pt-24 overflow-hidden"
    >
      {/* Background Image & Overlay with Priority Loading for LCP */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y: yBackground }}
      >
        <Image
          src="/images/banner/banner2-blurred.jpg"
          alt="Nhà máy sấy thăng hoa DryViet"
          fill
          priority
          className="object-cover scale-110 gpu-accelerate"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-800/60 to-brand-640/40 z-10" />
      </motion.div>

      <motion.div
        className="container-xl relative z-10 text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Premium Badge */}


        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 max-w-5xl mx-auto px-4 leading-[1.1] sm:leading-tight tracking-tight break-words text-center drop-shadow-2xl"
        >
          Sấy Thăng Hoa
          <span className="block mt-2 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent italic">
            Cho Thị Trường Toàn Cầu.
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-white mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed"
        >
          Nhà máy sản xuất OEM hiện đại tại Việt Nam. Đạt tiêu chuẩn Quốc tế FDA, ISO 22000 & HACCP. Giữ trọn 97% giá trị dinh dưỡng tự nhiên từ nông sản Việt.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" className="w-full sm:w-auto bg-white text-brand-900 hover:bg-cream">
            Nhận Báo Giá OEM
          </Button>
          <Button href="/kotheche" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-brand-900">
            Khám Phá KOTHECHE
          </Button>
        </motion.div>

        {/* Global Impact Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center px-4"
        >
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-[11px] sm:text-xs md:text-sm font-medium opacity-80 text-center">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            <span>
              Hiện đang xuất khẩu sang thị trường Mỹ, EU & Nhật Bản
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
