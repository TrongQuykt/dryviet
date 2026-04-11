'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

export function TestimonialsSection() {
  const reviews = [
    {
      text: "Việt Nam Cường Thịnh là đối tác OEM tin cậy của chúng tôi trong hai năm qua. Sự tập trung vào chất lượng và độ ẩm ổn định của họ là không đối thủ trong khu vực. Snack thanh long rất được ưa chuộng tại các cửa hàng của chúng tôi.",
      author: "Michael Thompson",
    },
    {
      text: "Chuyển nguồn cung ứng sấy thăng hoa sang VNCT giúp chúng tôi tiết kiệm 15% chi phí logistics đồng thời cải thiện khả năng giữ màu sản phẩm. Hồ sơ FSVP của họ rất hoàn hảo, giúp việc nhập khẩu vào Mỹ trở nên dễ dàng.",
      author: "Sarah Lindemann",
    },
    {
      text: "Các sản phẩm thương hiệu KOTHECHE mà chúng tôi phân phối nhận được phản hồi cực kỳ tốt từ khách hàng. Nhãn sạch '1 thành phần' chính xác là những gì người tiêu dùng hiện đại đang tìm kiếm.",
      author: "David Chen",
    },
    {
      text: "Công nghệ sấy thăng hoa mà DryViet sử dụng đạt đẳng cấp thế giới. Độ giòn và mật độ dinh dưỡng của xoài sấy luôn vượt trội so với các đối thủ cạnh tranh.",
      author: "Dr. Kenji Sato",
    },
    {
      text: "Sản phẩm của VNCT thực sự chất lượng, giữ được hương vị tự nhiên của trái cây. Tôi rất hài lòng với quy trình làm việc chuyên nghiệp và tận tâm của các bạn.",
      author: "Chị Hoàng Lan",
    },
    {
      text: "Gia công OEM tại đây giúp chúng tôi tiết kiệm nhiều chi phí mà vẫn đảm bảo tiêu chuẩn xuất khẩu khắt khe. Đội ngũ hỗ trợ nhiệt tình, thủ tục FSVP minh bạch.",
      author: "Anh Quốc Tuấn",
    },
    {
      text: "Nguồn cung bền vững và các biện pháp thương mại công bằng rất quan trọng với chúng tôi. Cam kết của VNCT với nông dân địa phương Việt Nam trong khi duy trì sản xuất công nghệ cao là rất ấn tượng.",
      author: "Jean-Pierre Blanc",
    },
    {
      text: "Kotheche là thương hiệu nông sản Việt mà tôi tin tưởng nhất. Bao bì đẹp, chất lượng giòn rụm, khách hàng của mình tại Hà Nội phản hồi rất tốt.",
      author: "Chị Tuyết Mai",
    }
  ]

  return (
    <section className="py-12 bg-[#FDF8F3] overflow-hidden">
      <div className="container-xl">
        <div className="text-center mb-10 px-4">
          <span className="text-brand-800 font-black tracking-[0.4em] uppercase text-[9px]">Phản hồi Từ Đối tác</span>
          <div className="w-8 h-0.5 bg-brand-800 mx-auto mt-3 mb-4" />
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 font-display italic leading-tight">Khách hàng Nói gì về Chúng tôi</h2>
        </div>

        <div className="w-full relative px-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            slidesPerView={1.6}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            observer={true}
            observeParents={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 25 },
              1280: { slidesPerView: 4.2, spaceBetween: 30 }
            }}
            className="pb-16 testimonials-swiper min-h-[350px]"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="transition-all duration-700">
                {({ isActive }) => (
                  <div className={`relative bg-white rounded-[2rem] p-6 md:p-8 text-center shadow-lg border border-brand-50 transition-all duration-700 h-full flex flex-col justify-center ${isActive ? 'scale-100 opacity-100 shadow-brand-900/5' : 'scale-90 opacity-40 shadow-none grayscale'}`}>
                    {/* Decorative element */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFF9F5] rounded-full opacity-50 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-center gap-1 mb-6 text-brand-800">
                        {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={14} strokeWidth={0} />)}
                      </div>
                      <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8 font-medium italic">
                        "{review.text}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-px bg-brand-100 mb-5" />
                        <h4 className="text-sm font-bold text-gray-900 tracking-tight">{review.author}</h4>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #E5DCD5;
          opacity: 1;
          width: 5px;
          height: 5px;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #00215A;
          width: 15px;
          border-radius: 3px;
        }
        .testimonials-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
      `}</style>
    </section>
  )
}
