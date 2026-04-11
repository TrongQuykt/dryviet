import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="w-24 h-24 bg-brand-100 text-brand-600 rounded-full flex flex-col items-center justify-center mb-8 mx-auto shadow-sm">
        <FileQuestion size={48} />
      </div>
      <h1 className="text-5xl font-bold font-display text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
        Rất tiếc, nội dung bạn đang tìm kiếm đã bị gỡ bỏ hoặc thông tin đường dẫn không chính xác.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/">Về Trang Chủ</Button>
        <Button href="/contact" variant="outline">Cần Hỗ Trợ?</Button>
      </div>
    </div>
  )
}
