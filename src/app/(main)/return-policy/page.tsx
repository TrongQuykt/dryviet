import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính Sách Đổi Trả | DryViet',
  description: 'Chính sách đổi trả hàng hóa và hoàn tiền tại Việt Nam Cường Thịnh (DryViet). Đảm bảo quyền lợi tối đa cho khách hàng mua sỉ, mua lẻ và B2B xuất khẩu.',
}

export default function ReturnPolicyPage() {
  return (
    <div className="container-xl py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Chính Sách Đổi Trả</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4">Tại DryViet, chất lượng sản phẩm là ưu tiên hàng đầu. Chúng tôi cam kết hỗ trợ khách hàng trong các trường hợp sản phẩm không đạt chuẩn.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Điều kiện đổi trả</h2>
        <p className="mb-4">Sản phẩm được chấp nhận đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Sản phẩm bị lỗi do nhà sản xuất (bao bì rách, hỏng niêm phong).</li>
          <li>Sản phẩm không đúng mẫu mã, chủng loại như trong đơn hàng.</li>
          <li>Sản phẩm hết hạn sử dụng hoặc có dấu hiệu hư hỏng trước khi mở.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Quy trình đổi trả</h2>
        <p className="mb-4">Khách hàng vui lòng chụp ảnh sản phẩm lỗi và liên hệ với chúng tôi qua Hotline (+84) 868 021 818 hoặc email để được hướng dẫn.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Hoàn tiền</h2>
        <p className="mb-4">Trong trường hợp không có sản phẩm thay thế, chúng tôi sẽ hoàn trả 100% giá trị đơn hàng thông qua chuyển khoản ngân hàng trong vòng 3-5 ngày làm việc.</p>
      </div>
    </div>
  )
}
