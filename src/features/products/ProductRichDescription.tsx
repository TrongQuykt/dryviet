import React from 'react'

interface ProductRichDescriptionProps {
  images?: string[]
  productName: string
  benefits?: { title: string; description: string }[]
  specifications?: { label: string; value: string }[]
}

export function ProductRichDescription({ images, productName, benefits, specifications }: ProductRichDescriptionProps) {
  const hasContent = (images && images.length > 0) || (benefits && benefits.length > 0) || (specifications && specifications.length > 0)
  
  if (!hasContent) return null

  return (
    <div className="w-full bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="container-xl px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-brand-800 font-black tracking-[0.4em] uppercase text-[10px] sm:text-xs">
            Product Details
          </span>

          <div className="w-10 sm:w-12 h-1 bg-brand-800 mx-auto mt-6 mb-8" />

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-gray-900 font-display italic">
            Khám Phá Chất Lượng
          </h2>
          <p className="text-gray-500 font-medium mt-4 text-sm md:text-base">Thông tin chi tiết và thành phần dinh dưỡng của {productName}</p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Section 1: Detailed Specifications Table */}
          {specifications && specifications.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="lg:col-span-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 font-display tracking-tight">Thông Số Kỹ Thuật</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed hidden lg:block">Cung cấp bộ dữ liệu đầy đủ về quy chuẩn đóng gói, truy xuất chuẩn xác và tiêu chuẩn chất lượng được áp dụng trên lô sản xuất.</p>
              </div>
              <div className="lg:col-span-8 bg-[#FDFBF9] border border-brand-50 rounded-2xl md:rounded-[2rem] overflow-hidden">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-brand-100/60">
                    {specifications.map((spec, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? 'bg-white/40' : 'bg-transparent'} hover:bg-brand-50/50 transition-colors`}>
                        <td className="px-4 md:px-6 py-4 border-r border-brand-100/60 font-bold text-slate-700 w-1/3 md:w-2/5 break-words text-[11px] md:text-sm">
                          {spec.label}
                        </td>
                        <td className="px-4 md:px-6 py-4 text-slate-600 w-2/3 md:w-3/5 break-words text-xs md:text-sm font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 2: Core Benefits & Features Grid */}
          {benefits && benefits.length > 0 && (
            <div>
              <div className="text-center mb-10 md:mb-12">
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 font-display tracking-tight">Giá Trị Cốt Lõi</h3>
                <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">Những đặc quyền dinh dưỡng khi sử dụng công nghệ sấy chân không siêu lạnh.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110 opacity-50" />
                    <h4 className="text-sm md:text-base font-bold text-slate-900 mb-3 md:mb-4 pr-12 leading-snug tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed relative z-10">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Infographic Images */}
          {images && images.length > 0 && (
            <div className="w-full flex flex-col items-center">
               <div className="text-center mb-10 md:mb-12">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 font-display tracking-tight">Hồ Sơ Cảm Quan</h3>
              </div>
              {images.map((img, idx) => (
                <div key={idx} className="relative w-full max-w-4xl mb-4 md:mb-8 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 group">
                  <img
                    src={img}
                    alt={`${productName} infographic part ${idx + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-1000"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
