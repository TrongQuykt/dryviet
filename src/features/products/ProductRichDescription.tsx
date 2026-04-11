import React from 'react'

interface ProductRichDescriptionProps {
  images?: string[]
  productName: string
}

export function ProductRichDescription({ images, productName }: ProductRichDescriptionProps) {
  if (!images || images.length === 0) return null

  return (
    <div className="w-full bg-white py-24 border-t border-gray-100">
      <div className="container-xl text-center mb-16">
        <span className="text-brand-800 font-black tracking-[0.4em] uppercase text-[10px] sm:text-xs">
          Product Details
        </span>

        <div className="w-10 sm:w-12 h-1 bg-brand-800 mx-auto mt-6 mb-8" />

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-gray-900 font-display italic">
          Khám Phá Chất Lượng
        </h2>
        <p className="text-gray-500 font-medium mt-4">Thông tin chi tiết và thành phần dinh dưỡng của {productName}</p>
      </div>
      <div className="w-full flex flex-col max-w-6xl mx-auto px-4 lg:px-0">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full mb-8 lg:mb-12 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 group">
            {/* Sử dụng thẻ img bình thường nhưng styled bằng Tailwind để giữ được tỷ lệ thật (Aspect Ratio) của ảnh infographic ngang */}
            <img
              src={img}
              alt={`${productName} infographic part ${idx + 1}`}
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-1000"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
