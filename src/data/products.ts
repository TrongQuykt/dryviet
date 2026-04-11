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
}

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
]
