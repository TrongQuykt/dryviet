import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email không hợp lệ' }, { status: 400 })
    }

    // Upsert subscriber (Create if doesn't exist, ignore if does)
    await db.subscriber.upsert({
      where: { email },
      update: {}, // No update needed
      create: { email }
    })

    return NextResponse.json({ success: true, message: 'Đăng ký thành công' })
  } catch (err: any) {
    console.error('Newsletter API Error:', err)
    return NextResponse.json({ error: 'Lỗi hệ thống, vui lòng thử lại sau.' }, { status: 500 })
  }
}
