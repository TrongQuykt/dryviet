import { NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { sendEmail } from '@/lib/email'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const rateLimitMap = new Map<string, { count: number, resetTime: number }>()
const RATE_LIMIT_COUNT = 5
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1'
    const now = Date.now()
    const rateLimitInfo = rateLimitMap.get(ip)

    if (rateLimitInfo) {
      if (now > rateLimitInfo.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
      } else if (rateLimitInfo.count >= RATE_LIMIT_COUNT) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
      } else {
        rateLimitInfo.count += 1
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Save to Database
    const contact = await db.contact.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone || '',
        interest: validatedData.interest || 'other',
        message: validatedData.message
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        interest: true,
        message: true,
        createdAt: true
      }
    })

    // Background Email Tasks
    const adminEmailHtml = `
      <h2>New Contact Inquiry - Vietnam Cuong Thinh</h2>
      <p><strong>Name:</strong> ${validatedData.fullName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${validatedData.interest || 'N/A'}</p>
      <hr />
      <h3>Message:</h3>
      <p>${validatedData.message.replace(/\n/g, '<br/>')}</p>
    `

    sendEmail({
      to: process.env.ADMIN_EMAIL || 'vyquy633@gmail.com',
      subject: `New Lead: ${validatedData.interest} - ${validatedData.fullName}`,
      html: adminEmailHtml,
    }).catch(e => console.error("Admin Email Failed:", e))

    const customerEmailHtml = `
      <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #8B4513;">Thank you for contacting Vietnam Cuong Thinh</h2>
        <p>Dear ${validatedData.fullName},</p>
        <p>We have successfully received your inquiry regarding <strong>${validatedData.interest}</strong>.</p>
        <p>Our sales team is reviewing your message and will get back to you within 12-24 hours.</p>
        <p>If your request is urgent, please chat with us directly via <a href="https://wa.me/84969665687">WhatsApp</a> or <a href="https://zalo.me/84969665687">Zalo</a> at +84 969 665 687.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>Vietnam Cuong Thinh (KOTHECHE)</strong></p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://dryviet.com'}">${process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '') || 'dryviet.com'}</a>
      </div>
    `

    sendEmail({
      to: validatedData.email,
      subject: 'Vietnam Cuong Thinh - We have received your inquiry',
      html: customerEmailHtml,
    }).catch(e => console.error("Customer Email Failed:", e))

    return NextResponse.json({ success: true, message: 'Message sent successfully.', data: contact }, { status: 200 })

  } catch (error) {
    console.error('Contact Error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: (error as any).errors[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).message || 'Internal Server Error' }, { status: 500 })
  }
}
