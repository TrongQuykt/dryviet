import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json()

    // Find latest valid code
    const authRecord = await db.adminAuth.findFirst({
      where: {
        email,
        code,
        expiresAt: { gt: new Date() }
      },
      orderBy: { createdAt: 'desc' }
    })

    if (!authRecord) {
      return NextResponse.json({ error: 'Mã xác thực không hợp lệ hoặc đã hết hạn' }, { status: 400 })
    }

    // Success - Set session cookie (valid for 1 day)
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60,
      path: '/',
    })

    // Delete the used token
    await db.adminAuth.delete({ where: { id: authRecord.id } })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Verify Error:', err)
    return NextResponse.json({ error: 'Lỗi máy chủ' }, { status: 500 })
  }
}
