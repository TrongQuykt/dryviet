'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, ShoppingCart, Truck, LayoutTemplate } from 'lucide-react'
import Image from 'next/image'

export function ContractsSection() {
  const contracts = {
    standard: [
      {
        partner: "Fry's Food & Drug",
        subtitle: 'SOUTHWEST RETAIL BLOC',
        date: '15/03/2025',
        type: '3-Year Distribution Partnership',
        icon: <ShoppingCart size={24} />
      },
      {
        partner: 'WinCo Foods',
        subtitle: 'PACIFIC NORTHWEST NODE',
        date: '01/03/2025',
        type: 'Retail Supply Agreement',
        icon: <Truck size={24} />
      }
    ],
    highlight: {
      partner: 'Amazon US Distribution',
      subtitle: 'GLOBAL LOGISTICS HUB',
      date: '23/10/2024',
      type: 'International Supply Contract',
      icon: <LayoutTemplate size={32} />
    }
  }

  return (
    <section className="py-16 overflow-hidden relative">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Hợp Tác Toàn Cầu</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Hợp Đồng Đã Ký Kết</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Side: 1 Large Amazon Card (8/12) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white rounded-[2rem] shadow-xl shadow-brand-900/5 border border-brand-200 overflow-hidden flex flex-col group min-h-[480px]"
          >
            <div className="p-6 md:p-10 flex-initial relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform duration-500">
                  <LayoutTemplate size={24} />
                </div>
                <div className="bg-[#06402B] text-white text-[9px] font-black px-5 py-1.5 rounded-full tracking-[0.3em] uppercase shadow-lg shadow-green-900/10">
                  ĐÃ DUYỆT
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 font-display italic mb-1 tracking-tight">
                Amazon US
              </h3>
              <p className="text-[9px] font-black text-gray-400 tracking-[0.4em] uppercase mb-8">
                TRUNG TÂM LOGISTICS TOÀN CẦU
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Loại Hợp đồng</span>
                  <p className="text-base font-bold text-gray-800 leading-tight italic">
                    Hợp đồng Cung ứng Quốc tế
                  </p>
                </div>
                <div>
                  <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Hiệu lực Từ</span>
                  <p className="text-xl font-bold text-gray-900 tracking-tighter">
                    23/10/2024
                  </p>
                </div>
              </div>
            </div>

            {/* Logistics Image at bottom - TĂNG DIỆN TÍCH */}
            <div className="relative flex-1 min-h-[280px] overflow-hidden mt-auto">
              <Image
                src="/images/contracts/Amazon US Distribution.jpg"
                alt="Amazon Logistics"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-10">
                <p className="text-white font-black text-xl tracking-tighter opacity-15 uppercase">Chuỗi Cung ứng Toàn cầu</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: 2 Small Cards Stacked Vertically (4/12) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {[
              {
                partner: "Fry's Food & Drug",
                subtitle: 'KHỐI BÁN LẺ TÂY NAM (MỸ)',
                date: '15/03/2025',
                type: 'Đối tác Phân phối 3 Năm',
                icon: <ShoppingCart size={18} />
              },
              {
                partner: 'WinCo Foods',
                subtitle: 'CHI NHÁNH TÂY BẮC THÁI BÌNH DƯƠNG',
                date: '01/03/2025',
                type: 'Thỏa thuận Cung ứng Bán lẻ',
                icon: <Truck size={18} />
              }
            ].map((contract, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-white rounded-[1.5rem] p-6 shadow-lg shadow-brand-900/5 border border-brand-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-800 group-hover:text-white transition-all duration-500">
                      {contract.icon}
                    </div>
                    <div className="bg-[#06402B] text-white text-[8px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                      ĐÃ DUYỆT
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 font-display mb-1">{contract.partner}</h3>
                  <p className="text-[8px] font-black text-gray-400 tracking-[0.2em] uppercase mb-5">{contract.subtitle}</p>

                  <div className="space-y-3">
                    <div>
                      <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Loại</span>
                      <span className="text-[11px] font-bold text-gray-800 leading-tight">{contract.type}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Ngày ký</span>
                      <span className="text-xl font-bold text-gray-900 tracking-tight">{contract.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
