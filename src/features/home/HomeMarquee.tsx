'use client'
import { motion } from 'framer-motion'

export function HomeMarquee() {
  const companyName = "CÔNG TY TNHH VIỆT NAM CƯỜNG THỊNH • "
  const brandName = "KOTHECHE • "

  return (
    <section className="bg-white overflow-hidden py-1">
      {/* Layer 1: Brown Company Name */}
      <div className="bg-[#8B4513] py-2 border-b border-white/10">
        <MarqueeRow text={companyName} speed={30} direction="left" className="text-white text-[10px] font-black uppercase tracking-[0.2em]" />
      </div>

      {/* Layer 2: White Brand Name */}
      <div className="bg-white py-4 border-b border-gray-100">
        <MarqueeRow text={brandName} speed={25} direction="right" className="text-gray-900 text-3xl md:text-5xl font-black uppercase tracking-tighter italic" />
      </div>

      {/* Layer 3: Brown Company Name */}
      <div className="bg-[#8B4513] py-2">
        <MarqueeRow text={companyName} speed={35} direction="left" className="text-white text-[10px] font-black uppercase tracking-[0.2em]" />
      </div>
    </section>
  )
}

function MarqueeRow({ text, speed, direction, className }: { text: string, speed: number, direction: 'left' | 'right', className: string }) {
  const repeatedText = Array(20).fill(text).join('')
  
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className={`flex ${className}`}
      >
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </motion.div>
    </div>
  )
}
