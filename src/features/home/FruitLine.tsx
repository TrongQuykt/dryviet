'use client'
import { motion } from 'framer-motion'

export function FruitLine() {
  const traits = [
    { label: 'Siêu Thực Phẩm', icon: '🍓' },
    { label: 'Nguyên Liệu Tự Nhiên', icon: '🍋' },
    { label: 'Hương Vị Tuyệt Hảo', icon: '🍎' },
    { label: 'Không Gây Dị Ứng', icon: '🍉' },
    { label: 'Thuần Chay', icon: '🥝' },
    { label: 'Hương Vị Nhiệt Đới', icon: '🍋' },
    { label: 'Giàu Dinh Dưỡng', icon: '🍊' },
    { label: 'Thanh Long Việt', icon: '🍇' },
  ]

  return (
    <section className="bg-white py-5 overflow-hidden flex whitespace-nowrap">
      <motion.div
        animate={{ x: "-50%" }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center min-w-full will-change-transform"
      >
        {[...Array(3)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-16 items-center">
            {traits.map((trait, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{trait.icon}</span>
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">{trait.label}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}