export type Product = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  badge: string
  features: string[]
  amazonUrl?: string
  weight?: string
  gallery?: string[]
  descriptionImages?: string[]
  benefits?: { title: string; description: string }[]
  specifications?: { label: string; value: string }[]
}

const getBenefits = (fruitNameLower: string) => [
  { title: 'HƯƠNG VỊ TƯƠI NGON & GIÒN TAN', description: `Thưởng thức vị ngọt tự nhiên cùng kết cấu giòn rụm của ${fruitNameLower} sấy thăng hoa, một món ăn vặt nhiệt đới mang lại cảm giác “đã miệng” mà không lo tội lỗi. Phù hợp cho người lớn, trẻ em hoặc bất kỳ ai cần một nguồn năng lượng thú vị và ngon miệng.` },
  { title: 'SIÊU THỰC PHẨM TỰ NHIÊN 100%', description: `Giàu chất chống oxy hóa, chất xơ và vitamin, snack ${fruitNameLower} sấy thăng hoa giúp hỗ trợ hệ miễn dịch và tiêu hóa. Là sản phẩm thuần thực vật, “clean label”, chỉ làm từ trái cây thật – không thêm gì khác.` },
  { title: 'MÓN ĂN VẶT LÀNH MẠNH CHO MỌI LỨA TUỔI', description: 'Dù là chuẩn bị hộp cơm trưa cho học sinh, mang theo khi đi leo núi hay dùng trong giờ làm việc, snack trái cây sấy không gluten này phù hợp với chế độ ăn ít carb và thuần chay. Một lựa chọn tiện lợi và bổ dưỡng cho trẻ em, thanh thiếu niên và người lớn.' },
  { title: 'CHỈ MỘT THÀNH PHẦN DUY NHẤT', description: `Làm từ 100% ${fruitNameLower} nguyên chất – không thêm đường, không chất bảo quản, không hương liệu nhân tạo. Khác với trái cây sấy nhiều đường thông thường, snack ${fruitNameLower} này hoàn toàn tự nhiên và tốt cho sức khỏe.` },
  { title: 'TÚI ZIP TIỆN LỢI', description: 'Mỗi túi thiết kế dạng Zip nhỏ gọn giúp giữ snack luôn tươi ngon và giòn rụm. Dễ dàng mang theo khi du lịch, hoạt động ngoài trời hoặc dùng ngay tại bàn làm việc.' },
  { title: 'NHIỀU CÁCH THƯỞNG THỨC', description: `Có thể ăn trực tiếp, trộn với sữa chua, sinh tố, ngũ cốc, hoặc dùng làm topping cho món tráng miệng và salad. Những miếng ${fruitNameLower} sấy giúp tăng hương vị và màu sắc cho món ăn yêu thích của bạn.` },
  { title: 'KHÔNG CHỨA CHẤT GÂY DỊ ỨNG & AN TOÀN CHO TRẺ', description: 'Không chứa 9 loại dị ứng phổ biến, phù hợp cho trẻ nhỏ. Là lựa chọn an toàn và ngon miệng cho hộp cơm trưa, được nhiều phụ huynh tin dùng.' },
  { title: 'CHẤT LƯỢNG CAO CẤP TỪ VIỆT NAM', description: 'Được trồng bền vững và chế biến cẩn thận, KOTHECHE mang đến sản phẩm trái cây sấy thăng hoa hữu cơ chất lượng cao, giữ trọn dinh dưỡng và hương vị. Được các gia đình quan tâm đến sức khỏe trên toàn thế giới tin tưởng.' }
];

const getSpecs = (flavor: string) => [
  { label: 'Kích thước sản phẩm (D x R x C)', value: '1.18 x 5.12 x 7.48 inch (3 x 13 x 19 cm)' },
  { label: 'Trọng lượng sản phẩm', value: '4.24 oz (120.2 gram)' },
  { label: 'Nhà sản xuất', value: 'Viet Nam Cuong Thinh LLC' },
  { label: 'Đơn vị', value: '4 gói' },
  { label: 'Thương hiệu', value: 'KOTHECHE' },
  { label: 'Đặc điểm nổi bật', value: 'Chống oxy hóa, Tự nhiên, Không phụ gia & chất bảo quản' },
  { label: 'Chế độ ăn phù hợp', value: 'Không gluten, Halal, Kosher, Thuần thực vật (Plant Based), Thuần chay (Vegan)' },
  { label: 'Hương vị', value: flavor },
  { label: 'Hình thức đóng gói', value: 'Đóng gói sẵn' },
  { label: 'Dạng sản phẩm', value: 'Miếng khối, Sấy khô, Lát cắt, Nguyên quả' },
  { label: 'Cam kết canh tác', value: 'Không sử dụng phân bón hóa học' },
  { label: 'Phong cách ẩm thực', value: 'Bắc Mỹ' },
  { label: 'Xuất xứ khu vực', value: 'Đông Nam Á' },
  { label: 'Kích cỡ', value: '0.63 oz (Gói 4 túi)' },
  { label: 'Trọng lượng đóng gói', value: '0.13 kg' },
  { label: 'Số miếng / phần', value: '4' },
  { label: 'Số lượng sản phẩm', value: '1' },
  { label: 'Tổng số đơn vị', value: '4 gói' },
  { label: 'Điều kiện bảo quản', value: 'Tươi' },
  { label: 'Ngày mở bán đầu tiên', value: '26/02/2025 18:23:52' }
];

export const products: Product[] = [
  {
    slug: 'dragon-fruit',
    name: 'Thanh Long Sấy Thăng Hoa',
    tagline: 'Giòn Tan • Tự Nhiên • Không Phụ Gia',
    description: 'Thanh long Việt Nam chọn lọc, sấy thăng hoa giữ nguyên màu sắc tươi sáng, vị ngọt tự nhiên và toàn bộ dưỡng chất. Không đường thêm, không chất bảo quản.',
    image: '/images/products/dragon-fruit.jpg',
    badge: 'Bán chạy',
    features: ['100% Tự nhiên', 'Không thêm đường', 'Giàu Lycopene', 'Thuần chay & Không Gluten'],
    amazonUrl: 'https://www.amazon.com/dp/B0DTJ4MZ4L?th=1',
    weight: 'Gói 40g (1.41 oz)',
    gallery: [
      '/images/products/dragon-fruit.jpg',
      '/images/imageproducts/81092OlJLhL._SL1500_.jpg',
      '/images/imageproducts/717quWJ7FXL._SL1500_.jpg',
      '/images/imageproducts/61D6WkY44bL._SX679_.jpg',
      '/images/imageproducts/51ijYcIWlwL.jpg'
    ],
    descriptionImages: [
      '/images/productsdesc/9301ee95-c29d-4bd2-bf05-c27e18e2e6e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/0942790e-8c7f-476a-a286-25e35c298a59.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/ea7cb219-5c94-4440-b4fb-dfb9f1924595.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ],
    benefits: getBenefits('thanh long'),
    specifications: [
      { label: 'Kích thước sản phẩm (D x R x C)', value: '1.18 x 5.12 x 7.09 inch (3 x 13 x 18 cm)' },
      { label: 'Trọng lượng sản phẩm', value: '5.8 oz (164.43 gram)' },
      { label: 'Nhà sản xuất', value: 'Viet Nam Cuong Thinh LLC' },
      { label: 'Đơn vị', value: '4 gói' },
      { label: 'Thương hiệu', value: 'KOTHECHE' },
      { label: 'Đặc điểm nổi bật', value: 'Chống oxy hóa, Không biến đổi gen (GMO Free), Tự nhiên, Không phụ gia & chất bảo quản, Không dầu' },
      { label: 'Chế độ ăn phù hợp', value: 'Không gluten, Halal, Kosher, Thuần chay (Vegan), Ăn chay (Vegetarian)' },
      { label: 'Hương vị', value: 'Thanh long' },
      { label: 'Dạng sản phẩm', value: 'Miếng khối, lát cắt' },
      { label: 'Cam kết canh tác', value: 'Không sử dụng phân bón hóa học' },
      { label: 'Phong cách ẩm thực', value: 'Bắc Mỹ, Châu Á, Mexico' },
      { label: 'Độ tuổi sử dụng', value: 'Mọi lứa tuổi' },
      { label: 'Xuất xứ khu vực', value: 'Đông Nam Á' },
      { label: 'Kích cỡ', value: '1.08 oz (Gói 8 túi)' },
      { label: 'Trọng lượng đóng gói', value: '0.17 kg' },
      { label: 'Số miếng / phần', value: '4' },
      { label: 'Số lượng sản phẩm', value: '1' },
      { label: 'Tổng số đơn vị', value: '4 gói' },
      { label: 'Ngày mở bán đầu tiên', value: '26/02/2025 18:23:52' }
    ]
  },
  {
    slug: 'mango',
    name: 'Xoài Sấy Thăng Hoa',
    tagline: 'Nhiệt Đới • Ngọt Thơm • Giòn Tan',
    description: 'Xoài Việt Nam chín cây, vị ngọt tự nhiên được bảo toàn hoàn hảo qua công nghệ sấy thăng hoa. Hương vị nhiệt đới đặc trưng trong từng miếng snack.',
    image: '/images/products/mango.jpg',
    badge: 'Cao cấp',
    features: ['Giàu Vitamin C', 'Không phụ gia', 'Hạn dùng 12 tháng', 'Bán chạy trên Amazon'],
    amazonUrl: 'https://www.amazon.com/dp/B0DTJ4MZ4L?th=1',
    weight: 'Gói 40g (1.41 oz)',
    gallery: [
      '/images/products/mango.jpg',
      '/images/imageproducts/81jyQcc5t-L._SL1500_.jpg',
      '/images/imageproducts/71CniGLyZ8L._SL1500_.jpg',
      '/images/imageproducts/61AOtSP5gdL._SL1000_.jpg',
      '/images/imageproducts/71fisJa55nL._SX679_.jpg'
    ],
    descriptionImages: [
      '/images/productsdesc/9301ee95-c29d-4bd2-bf05-c27e18e2e6e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/0942790e-8c7f-476a-a286-25e35c298a59.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/ea7cb219-5c94-4440-b4fb-dfb9f1924595.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ],
    benefits: getBenefits('xoài'),
    specifications: getSpecs('Xoài')
  },
  {
    slug: 'jackfruit',
    name: 'Mít Sấy Thăng Hoa',
    tagline: 'Độc Đáo • Thơm Nức • Giòn Rụm',
    description: 'Mít Việt Nam chính hiệu, sấy thăng hoa để mang lại hương thơm ngọt ngào đặc trưng và độ giòn tan hấp dẫn. Sản phẩm đạt chuẩn xuất khẩu quốc tế.',
    image: '/images/products/jackfruit.jpg',
    badge: 'Mới',
    features: ['Hương vị nhiệt đới đặc trưng', 'Giàu chất xơ tự nhiên', 'Bảo quản 12 tháng', 'Đạt chuẩn xuất khẩu'],
    amazonUrl: 'https://www.amazon.com/dp/B0DTJ4MZ4L?th=1',
    weight: 'Gói 40g (1.41 oz)',
    gallery: [
      '/images/products/jackfruit.jpg',
      '/images/imageproducts/71fisJa55nL._SX679_.jpg',
      '/images/imageproducts/51ijYcIWlwL.jpg'
    ],
    descriptionImages: [
      '/images/productsdesc/9301ee95-c29d-4bd2-bf05-c27e18e2e6e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/0942790e-8c7f-476a-a286-25e35c298a59.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/ea7cb219-5c94-4440-b4fb-dfb9f1924595.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ],
    benefits: getBenefits('mít'),
    specifications: getSpecs('Mít')
  },
  {
    slug: 'banana',
    name: 'Chuối Sấy Thăng Hoa',
    tagline: 'Giòn Tan • Tự Nhiên • Ngọt Dịu',
    description: 'Chuối sấy thăng hoa giữ trọn vẹn vị ngọt thanh tự nhiên và cấu trúc xốp giòn đặc trưng. Một lựa chọn snack lành mạnh, giàu kali và năng lượng.',
    image: '/images/products/chuoi.png',
    badge: 'Coming Soon',
    features: ['100% Tự nhiên', 'Giàu Kali', 'Giòn xốp', 'Tiện dụng'],
    gallery: ['/images/products/chuoi.png'],
    descriptionImages: [
      '/images/productsdesc/9301ee95-c29d-4bd2-bf05-c27e18e2e6e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/0942790e-8c7f-476a-a286-25e35c298a59.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/ea7cb219-5c94-4440-b4fb-dfb9f1924595.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ],
    benefits: getBenefits('chuối'),
    specifications: getSpecs('Chuối')
  },
  {
    slug: 'pineapple',
    name: 'Thơm Sấy Thăng Hoa',
    tagline: 'Chua Ngọt • Nhiệt Đới • Giòn Rụm',
    description: 'Từng miếng thơm (dứa) vàng ươm được sấy thăng hoa giữ nguyên vị chua ngọt hài hòa và hương thơm nồng nàn của trái cây nhiệt đới.',
    image: '/images/products/dua.png',
    badge: 'Coming Soon',
    features: ['Vị chua ngọt tự nhiên', 'Giàu Vitamin', 'Hương thơm đặc trưng', 'Công nghệ hiện đại'],
    gallery: ['/images/products/dua.png'],
    descriptionImages: [
      '/images/productsdesc/9301ee95-c29d-4bd2-bf05-c27e18e2e6e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/0942790e-8c7f-476a-a286-25e35c298a59.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/ea7cb219-5c94-4440-b4fb-dfb9f1924595.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ],
    benefits: getBenefits('thơm'),
    specifications: getSpecs('Thơm (Dứa)')
  },
  {
    slug: 'strawberry',
    name: 'Dâu Tây Sấy Thăng Hoa',
    tagline: 'Đỏ Mọng • Chua Ngọt • Giàu Dinh Dưỡng',
    description: 'Dâu tây đỏ mọng, được sấy thăng hoa giữ nguyên hình dáng, màu sắc và hàm lượng vitamin cực cao. Snack sang trọng và bổ dưỡng cho mọi lứa tuổi.',
    image: '/images/products/dau.png',
    badge: 'Coming Soon',
    features: ['Chống oxy hóa cao', 'Hình dáng nguyên bản', 'Vị dâu đậm đà', 'Tiêu chuẩn quốc tế'],
    gallery: ['/images/products/dau.png'],
    descriptionImages: [
      '/images/productsdesc/9301ee95-c29d-4bd2-bf05-c27e18e2e6e9.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/0942790e-8c7f-476a-a286-25e35c298a59.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      '/images/productsdesc/ea7cb219-5c94-4440-b4fb-dfb9f1924595.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
    ],
    benefits: getBenefits('dâu tây'),
    specifications: getSpecs('Dâu Tây')
  }
]
