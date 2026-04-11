import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính Sách Thanh Toán | DryViet',
  description: 'Các hình thức thanh toán được hỗ trợ tại DryViet.',
}

export default function PaymentPolicyPage() {
  return (
    <div className="container-xl py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Chính Sách Thanh Toán</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4">DryViet cung cấp các hình thức thanh toán linh hoạt nhằm tạo điều kiện thuận lợi nhất cho khách hàng cá nhân và doanh nghiệp.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Chuyển khoản ngân hàng</h2>
        <p className="mb-4">Đây là hình thức thanh toán ưu tiên cho các đơn hàng gia công OEM hoặc mua sỉ.</p>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
          <p className="font-bold">Thông tin tài khoản:</p>
          <p>Chủ tài khoản: CÔNG TY TNHH VIỆT NAM CƯỜNG THỊNH</p>
          <p>Số tài khoản: 123456789 (Ví dụ)</p>
          <p>Ngân hàng: Vietcombank - Chi nhánh TP.HCM</p>
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Thanh toán khi nhận hàng (COD)</h2>
        <p className="mb-4">Chỉ áp dụng cho các đơn hàng bán lẻ KOTHECHE trong phạm vi lãnh thổ Việt Nam. Khách hàng kiểm tra hàng và thanh toán trực tiếp cho nhân viên giao hàng.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Thanh toán quốc tế</h2>
        <p className="mb-4">Đối với các đơn hàng xuất khẩu, chúng tôi hỗ trợ các phương thức thanh toán quốc tế chuẩn như L/C (Letter of Credit) hoặc T/T (Telegraphic Transfer).</p>
      </div>
    </div>
  )
}
