import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { db } from '@/lib/db'
import { runLocalAudit } from '@/lib/audit/engine'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    // 1. Check Auth (Very basic check using cookie)
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Run the actual audit engine
    const reportData = await runLocalAudit()

    // 3. Save to Database
    const savedReport = await db.auditReport.create({
      data: {
        overallScore: reportData.overallScore,
        technicalScore: reportData.technicalScore,
        performanceScore: reportData.performanceScore,
        contentScore: reportData.contentScore,
        uxScore: reportData.uxScore,
        urlCount: reportData.urlCount,
        issues: reportData.issues as any,
      }
    })

    return NextResponse.json(savedReport)
  } catch (err: any) {
    console.error('Audit Run Error:', err)
    return NextResponse.json({ error: 'Lỗi khi quét SEO' }, { status: 500 })
  }
}

/**
 * GET latest report 
 */
export async function GET() {
  try {
    const latest = await db.auditReport.findFirst({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(latest || { empty: true })
  } catch (err: any) {
    return NextResponse.json({ error: 'Lỗi tải dữ liệu' }, { status: 500 })
  }
}
