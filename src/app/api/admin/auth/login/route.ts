import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { sendOTP } from '@/lib/mail'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Only allow specific admin email
    if (email !== 'vyquy633@gmail.com') {
      return NextResponse.json({ error: 'Truy cập bị từ chối' }, { status: 403 })
    }

    // Generate 6-digit code
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Expires in 10 minutes
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    // Save to DB
    await db.adminAuth.create({
      data: {
        email,
        code: otpCode,
        expiresAt,
      }
    })

    // Send Mail
    await sendOTP(email, otpCode)

    return NextResponse.json({ success: true, message: 'Mã OTP đã được gửi' })
  } catch (err: any) {
    console.error('Auth Error:', err)
    return NextResponse.json({ error: 'Lỗi máy chủ' }, { status: 500 })
  }
}
