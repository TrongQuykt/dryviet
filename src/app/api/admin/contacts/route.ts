import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'

/**
 * GET /api/admin/contacts 
 * Fetch all leads from the Contact model
 */
export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const contacts = await db.contact.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        interest: true,
        message: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    })
    return NextResponse.json(contacts)
  } catch (err: any) {
    return NextResponse.json({ error: 'Lỗi tải danh sách liên hệ' }, { status: 500 })
  }
}

/**
 * DELETE /api/admin/contacts/[id]
 * Implement delete logic if needed
 */
