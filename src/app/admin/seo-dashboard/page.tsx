import { Metadata } from 'next'
import { DashboardClient } from './DashboardClient'

export const metadata: Metadata = {
  title: 'Strategic Control Hub | DryViet Enterprise',
  description: 'Bảng điều khiển chiến lược doanh nghiệp Việt Nam Cường Thịnh. Giám sát SEO, UX và chuyển đổi thời gian thực.',
  robots: { index: false, follow: false },
}

export default function AdminDashboardPage() {
  return <DashboardClient />
}
