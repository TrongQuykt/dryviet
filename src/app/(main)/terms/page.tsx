import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Điều Khoản Dịch Vụ | DryViet',
  description: 'Văn bản đầy đủ về điều khoản và điều kiện dịch vụ pháp lý khi hợp tác OEM/mua sắm trực tuyến tại công ty TNHH Việt Nam Cường Thịnh - Thương hiệu KOTHECHE.',
}

export default function TermsPage() {
  return (
    <div className="container-xl py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Điều Khoản Dịch Vụ</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4">Chào mừng bạn đến với <strong>DryViet</strong>. Khi bạn truy cập và sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản dưới đây.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Chấp thuận điều khoản</h2>
        <p className="mb-4">Bằng việc sử dụng trang web này, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý bị ràng buộc bởi các điều khoản này.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Quyền sở hữu trí tuệ</h2>
        <p className="mb-4">Toàn bộ nội dung trên trang web, bao gồm văn bản, hình ảnh, logo và thương hiệu KOTHECHE, thuộc sở hữu của Công ty TNHH Việt Nam Cường Thịnh.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Trách nhiệm người dùng</h2>
        <p className="mb-4">Bạn cam kết sử dụng trang web cho các mục đích hợp pháp và không gây tổn hại đến hệ thống hoặc uy tín của DryViet.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Thay đổi điều khoản</h2>
        <p className="mb-4">Chúng tôi có quyền cập nhật các điều khoản này bất cứ lúc nào mà không cần thông báo trước. Các thay đổi sẽ có hiệu lực ngay khi được đăng tải.</p>
      </div>
    </div>
  )
}
