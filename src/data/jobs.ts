export type Job = {
  id: string
  slug: string
  title: string
  department: string
  location: string
  salary: string
  deadline: string
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Internship'
  experience: string
  careerPath?: string[]
  description: string
  requirements: string[]
  benefits: string[]
}

export const jobs: Job[] = [
  {
    id: '1',
    slug: 'sales-b2b',
    title: 'CỘNG TÁC VIÊN / NHÂN VIÊN SALES B2B',
    department: 'Sales & Marketing',
    location: 'TP. HCM / Remote',
    salary: 'Updating',
    deadline: 'Updating',
    type: 'Full-time',
    experience: '6 months - 2 years',
    careerPath: ['Sales Leader', 'Account Manager', 'Business Development'],
    description: 'Tìm kiếm đối tác, chào hàng dịch vụ sấy thăng hoa OEM và các dòng sản phẩm KOTHECHE cho các chuỗi siêu thị, cửa hàng thực phẩm sạch, nhà hàng cao cấp hoặc khách hàng xuất khẩu.',
    requirements: [
      'Giao tiếp tốt, tự tin, có khả năng thuyết phục khách hàng.',
      'Ưu tiên ứng viên có kinh nghiệm trong ngành thực phẩm, F&B hoặc hàng tiêu dùng nhanh (FMCG).',
      'Có khả năng làm việc độc lập và chịu được áp lực doanh số.',
      'Tiếng Anh giao tiếp là một lợi thế lớn.'
    ],
    benefits: [
      'Hoa hồng hấp dẫn trên mỗi đơn hàng/hợp đồng.',
      'Được đào tạo bài bản về kiến thức công nghệ sấy thăng hoa.',
      'Lộ trình thăng tiến rõ ràng lên vị trí Quản lý.',
      'Môi trường làm việc năng động, trẻ trung.'
    ]
  },
  {
    id: '2',
    slug: 'freeze-dry-operator',
    title: 'NHÂN VIÊN VẬN HÀNH MÁY SẤY THĂNG HOA',
    department: 'Sản xuất',
    location: 'Quận 12, TP. HCM',
    salary: 'Updating',
    deadline: 'Updating',
    type: 'Full-time',
    experience: 'Not required (Training provided)',
    description: 'Vận hành hệ thống máy sấy thăng hoa công nghiệp, giám sát các thông số kỹ thuật (nhiệt độ, áp suất) và đảm bảo quy trình sản xuất diễn ra đúng tiêu chuẩn FDA/ISO.',
    requirements: [
      'Tốt nghiệp Trung cấp trở lên (Ưu tiên các ngành kỹ thuật, điện, cơ khí).',
      'Cẩn thận, tỉ mỉ, có trách nhiệm cao trong công việc.',
      'Có khả năng làm việc theo ca.'
    ],
    benefits: [
      'Được đào tạo vận hành công nghệ sấy tiên tiến nhất hiện nay.',
      'Phụ cấp cơm trưa, bảo hiểm đầy đủ theo quy định.',
      'Thưởng năng suất dựa trên chất lượng lô hàng.'
    ]
  },
  {
    id: '3',
    slug: 'qc-engineer',
    title: 'CHUYÊN VIÊN KIỂM SOÁT CHẤT LƯỢNG (QC)',
    department: 'Kỹ thuật & Chất lượng',
    location: 'Quận 12, TP. HCM',
    salary: 'Updating',
    deadline: 'Updating',
    type: 'Full-time',
    experience: '1 - 2 years',
    description: 'Kiểm soát chất lượng nguyên liệu đầu vào và thành phẩm đầu ra. Đảm bảo mọi lô hàng đều đạt chuẩn vi sinh, độ ẩm và các chỉ số an toàn thực phẩm xuất khẩu Mỹ/EU.',
    requirements: [
      'Tốt nghiệp Đại học ngành Công nghệ thực phẩm hoặc Hóa sinh.',
      'Nắm vững kiến thức về HACCP, ISO 22000, FDA.',
      'Kỹ năng phân tích và giải quyết vấn đề tốt.'
    ],
    benefits: [
      'Làm việc trong môi trường chuẩn quốc tế.',
      'Cơ hội tham gia các khóa đào tạo chuyên sâu về an toàn thực phẩm.',
      'Chế độ đãi ngộ cạnh tranh.'
    ]
  }
]
