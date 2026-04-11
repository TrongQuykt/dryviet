'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function FactorySection() {
  const images = [
    {
      src: '/images/xuong/phongsach.jpg',
      title: 'Hệ Thống Phụ Trợ',
      desc: 'Hạ tầng cơ sở đạt chuẩn GMP.'
    },
    {
      src: '/images/xuong/xuongg.png',
      title: 'Phòng Sạch Tiêu Chuẩn',
      desc: 'Hệ thống phòng sạch đạt chuẩn ISO, đảm bảo vô trùng tuyệt đối trong sản xuất.'
    },
    {
      src: '/images/xuong/daychuyen.jpg',
      title: 'Dây Chuyền Hiện Đại',
      desc: 'Hệ thống máy sấy thăng hoa công suất lớn nhập khẩu từ Châu Âu.'
    },
    {
      src: '/images/xuong/xuong3.jpg',
      title: 'Kiểm Soát Chất Lượng',
      desc: 'Phòng Lab hiện đại kiểm tra nghiêm ngặt từng lô hàng trước khi xuất xưởng.'
    },
    {
      src: '/images/xuong/xuong4.jpg',
      title: 'Khu Vực Đóng Gói',
      desc: 'Quy trình đóng gói tự động, hút chân không và bơm khí Ni-tơ bảo quản.'
    },
    {
      src: '/images/xuong/xuongg1.png',
      title: 'Kho Lạnh Bảo Quản',
      desc: 'Hệ thống kho lạnh tập trung duy trì nhiệt độ ổn định.'
    }
  ]

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container-xl">
        <div className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Cơ Sở Sản Xuất</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">Năng Lực Sản Xuất</h2>
          <p className="text-gray-600 text-lg">Cơ sở hạ tầng hiện đại, đáp ứng mọi tiêu chuẩn khắt khe nhất của thị trường quốc tế.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Row 1: Item 0 (Small), Item 1 (Long), Item 2 (Long) */}
          <FactoryItem
            img={images[0]}
            className="md:col-span-2"
            index={0}
          />
          <FactoryItem
            img={images[1]}
            className="md:col-span-5"
            index={1}
          />
          <FactoryItem
            img={images[2]}
            className="md:col-span-5"
            index={2}
          />

          {/* Row 2: Item 3 (Long), Item 4 (Long), Item 5 (Small) */}
          <FactoryItem
            img={images[3]}
            className="md:col-span-5"
            index={3}
          />
          <FactoryItem
            img={images[4]}
            className="md:col-span-5"
            index={4}
          />
          <FactoryItem
            img={images[5]}
            className="md:col-span-2"
            index={5}
          />
        </div>
      </div>
    </section>
  )
}

function FactoryItem({ img, className, index }: { img: any, className: string, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative h-[320px] rounded-[2.5rem] overflow-hidden shadow-xl shadow-brand-100/10 ${className}`}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
          <p className="text-white/80 text-xss leading-relaxed">{img.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}
