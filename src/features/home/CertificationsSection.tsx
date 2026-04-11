import Image from 'next/image'

export function CertificationsSection() {
  const certs = [
    {
      name: 'Đăng ký FDA (Hoa Kỳ)',
      image: '/images/certificates/fda-removebg-preview.png'
    },
    {
      name: 'Tiêu chuẩn ISO 22000:2018',
      image: '/images/certificates/ISO_22000-removebg-preview.png'
    },
    {
      name: 'Hệ thống HACCP',
      image: '/images/certificates/haccp-removebg-preview.png'
    },
    {
      name: 'Thương hiệu KOTHECHE™',
      image: '/images/certificates/KoTheChe - Logo-01.png'
    },
    {
      name: 'Sẵn sàng FSVP (Mỹ)',
      image: '/images/certificates/fsvp.webp'
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-xl">
        <div className="text-center mb-10 md:mb-16 px-4">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-[11px] md:text-sm">Đảm Bảo Chất Lượng</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 text-gray-900 leading-tight">Chứng Nhận Quốc Tế</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10 px-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-full aspect-square rounded-2xl md:rounded-[2rem] border border-brand-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full p-4 md:p-8"
                />
              </div>
              <p className="text-[10px] font-bold text-gray-400 mt-4 text-center uppercase tracking-tighter hidden md:block">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
