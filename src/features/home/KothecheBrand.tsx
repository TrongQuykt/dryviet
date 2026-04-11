'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function KothecheBrand() {
  const stats = [
    { label: 'Sản phẩm chủ lực', value: '3' },
    { label: 'Thị trường xuất khẩu', value: '5+' },
    { label: 'Tự nhiên', value: '100%' }
  ]

  const retailers = [
    { name: 'Amazon', logo: '/images/cho/logoamazon-removebg-preview.png', label: 'Amazon (Mỹ, Canada)' },
    { name: "Fry's Food & Drug", logo: "/images/cho/Fry's%20Food%20&%20Drug.jpg", label: "Fry's Food & Drug" },
    { name: 'WinCo Foods', logo: '/images/cho/WinCo%20Foods.jpg', label: 'WinCo Foods' }
  ]

  return (
    <section
      className="py-20 overflow-hidden relative border-t border-white/5"
      style={{ background: "linear-gradient(135deg, #8B4513 0%, #A95518FF 100%)" }}
    >
      <div className="container-xl relative z-10">
        {/* Top Logo - Centered */}
        <div className="flex justify-center mb-24">
          <Image
            src="/images/logo/KoTheChe - Logo-05.png"
            alt="Logo Kotheche Chính Hãng"
            width={480}
            height={140}
            className="object-contain brightness-0 invert opacity-90"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-20">
          {/* Left Column: Content + Stats */}
          <div className="w-full lg:w-1/2">
            <h2
              style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-10 text-center"
            >
              THƯƠNG HIỆU UY TÍN, CHẤT LƯỢNG QUỐC TẾ
            </h2>
            <p className="text-white/90 text-base leading-[1.8] font-medium mb-12 max-w-xl">
              KOTHECHE là thương hiệu nông sản sấy thăng hoa xuất khẩu sang Mỹ, thuộc sở hữu của Việt Nam Cường Thịnh. Với công nghệ sấy hiện đại và nguyên liệu tuyển chọn, KOTHECHE mang đến những sản phẩm giòn, thơm và giữ nguyên hương vị thiên nhiên.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#cf531d] rounded-2xl p-4 md:p-6 text-center border border-white/10 shadow-lg group hover:bg-[#5D2E15] transition-colors">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-[10px] text-white/70 font-bold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with Box Overlay */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group"
            >
              <Image
                src="/images/banner/banner2.jpg"
                alt="Kotheche Products Display"
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-[2px]"
              />
              {/* Overlay Text Box in Center - Only shows on hover */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl text-center max-w-md shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Trái cây sấy thăng hoa</h3>
                  <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed">
                    Giòn ngọt, thơm ngon, giữ nguyên hương vị và dinh dưỡng tự nhiên
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Partners / Retailers Block - Bottom Centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-[#D1B89B] rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <h4 className="text-center text-black font-bold text-lg mb-10">Có mặt tại:</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-10">
              {retailers.map((r, i) => (
                <div key={i} className="flex flex-col items-center gap-6">
                  <img src={r.logo} alt={r.name} className="h-10 md:h-12 w-auto object-contain" />
                  <span className="text-xs text-black/80 font-bold tracking-tight text-center">{r.label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-black/60 text-xs font-bold uppercase tracking-widest mt-8">
              Và các chợ châu Á lớn nhỏ tại Mỹ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

