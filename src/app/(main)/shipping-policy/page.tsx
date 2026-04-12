import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính Sách Giao Hàng | DryViet',
  description: 'Thông tin chi tiết quy trình, phí vận chuyển và thời gian giao nhận hàng hóa nông sản sấy thăng hoa tại Việt Nam Cường Thịnh (áp dụng toàn cầu và nội địa).',
}

export default function ShippingPolicyPage() {
  return (
    <div className="container-xl py-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Chính Sách Giao Hàng</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-4">DryViet cam kết quy trình vận chuyển an toàn, đảm bảo chất lượng sản phẩm sấy thăng hoa nguyên vẹn khi đến tay khách hàng.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Thời gian xử lý đơn hàng</h2>
        <p className="mb-4">Đơn hàng bán lẻ sẽ được xử lý trong vòng 24h. Đối với đơn hàng gia công OEM, thời gian sẽ được thỏa thuận cụ thể trong hợp đồng.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Phạm vi giao hàng</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Trong nước:</strong> Giao hàng toàn quốc thông qua các đối tác vận chuyển uy tín.</li>
          <li><strong>Quốc tế:</strong> Hỗ trợ vận chuyển đường biển (Sea Freight) hoặc đường hàng không (Air Freight) theo điều kiện Incoterms thỏa thuận.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Phí vận chuyển</h2>
        <p className="mb-4">Phí vận chuyển sẽ được tính dựa trên trọng lượng đơn hàng và địa điểm giao nhận. Chúng tôi hỗ trợ miễn phí vận chuyển cho các đơn hàng nội thành TP.HCM đạt giá trị tối thiểu.</p>
      </div>
    </div>
  )
}
