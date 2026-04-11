'use client'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function LeadershipSection() {
  const quote = "Nông sản Việt không chỉ là sản phẩm, đó là di sản. Chúng tôi mang sứ mệnh nâng tầm giá trị bản địa thành tiêu chuẩn quốc tế, nỗ lực đưa thương hiệu Việt chiếm lĩnh không gian ẩm thực trên khắp năm châu."
  const author = "Phạm Đông Huy"
  const role = "Giám Đốc Công Ty TNHH Việt Nam Cường Thịnh"

  return (
    <section className="py-18 bg-white overflow-hidden relative">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-10">
            <Quote className="text-brand-100 w-12 h-12 opacity-40 rotate-12" />
          </div>

          <blockquote className="relative">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 font-display italic leading-relaxed tracking-tight px-4 md:px-12">
              "{quote}"
            </p>
          </blockquote>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-8 h-px bg-brand-200 mb-6" />
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-gray-900 tracking-[0.2em] uppercase">{author}</span>
              <span className="w-1 h-1 rounded-full bg-brand-300" />
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{role}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
