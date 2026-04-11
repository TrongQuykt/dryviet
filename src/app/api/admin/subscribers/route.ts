import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'

/**
 * GET /api/admin/subscribers
 */
export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const subscribers = await db.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    })
    return NextResponse.json(subscribers)
  } catch (err: any) {
    return NextResponse.json({ error: 'Lỗi tải danh sách đăng ký' }, { status: 500 })
  }
}
