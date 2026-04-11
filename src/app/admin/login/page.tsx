import { Metadata } from 'next'
import { LoginClient } from './LoginClient'

export const metadata: Metadata = {
  title: 'Đăng Nhập Quản Trị | DryViet Enterprise',
  description: 'Hệ thống quản trị chiến lược cho doanh nghiệp Việt Nam Cường Thịnh.',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return <LoginClient />
}
