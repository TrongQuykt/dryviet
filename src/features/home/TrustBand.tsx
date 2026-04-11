import { motion } from 'framer-motion'

export function TrustBand() {
  const companyName = "CÔNG TY TNHH VIỆT NAM CƯỜNG THỊNH"
  const brandName = "KOTHECHE"

  const traits = [
    { label: 'Siêu Thực Phẩm', icon: '✨' },
    { label: 'Nguyên Liệu Nông Sản', icon: '🍋' },
    { label: 'Hương Vị Tuyệt Hảo', icon: '🍇' },
    { label: 'Không Gây Dị Ứng', icon: '🍉' },
    { label: 'Thuần Chay', icon: '🥝' },
    { label: 'Hương Vị Nhiệt Đới', icon: '🍋' },
    { label: 'Giàu Dinh Dưỡng', icon: '🍊' },
    { label: 'Thanh Long Việt', icon: '🍇' },
  ]

  const MarqueeRow = ({ text, bg, color, reverse = false, speed = "40s" }: { text: string, bg: string, color: string, reverse?: boolean, speed?: string }) => (
    <div className={`${bg} ${color} py-3 border-y border-black/5 overflow-hidden flex whitespace-nowrap`}>
      <div className={`flex gap-16 items-center min-w-full ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`} style={{ animationDuration: speed }}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-sm font-black tracking-[0.2em] uppercase">
            {text}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-white">
      {/* Layer 1: Company Name Brown */}
      <MarqueeRow
        text={companyName}
        bg="bg-brand-800"
        color="text-white"
      />

      {/* Layer 2: Brand Name White */}
      <div className="bg-white py-4 overflow-hidden flex whitespace-nowrap border-b border-gray-100">
        <div className="flex gap-20 items-center min-w-full animate-marquee-rev speed-[50s]">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-xl font-black tracking-[0.3em] uppercase text-gray-900">
              {brandName}
            </span>
          ))}
        </div>
      </div>

      {/* Layer 3: Company Name Brown Reverse */}
      <MarqueeRow
        text={companyName}
        bg="bg-brand-800"
        color="text-white"
        reverse={true}
        speed="35s"
      />

      {/* Layer 4: Product Traits */}
      <div className="bg-white py-5 overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-12 items-center min-w-full animate-marquee">
          {[...Array(3)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex gap-12 items-center">
              {traits.map((trait, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">{trait.icon}</span>
                  <span className="text-sm font-bold text-gray-700">{trait.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
