import { NextResponse } from 'next/server'
import { getGSCData } from '@/lib/api/gsc'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    let siteUrl = searchParams.get('siteUrl') || process.env.NEXT_PUBLIC_SITE_URL || 'sc-domain:dryviet.com'
    
    // Đảm bảo không gửi localhost lên Google API
    if (siteUrl.includes('localhost') || !siteUrl.includes('.')) {
      siteUrl = 'sc-domain:dryviet.com'
    }
    
    const days = parseInt(searchParams.get('days') || '30')

    const data = await getGSCData(siteUrl, days)
    
    if (data.error) {
       return NextResponse.json({ error: data.error, setupRequired: true })
    }

    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: 'GSC API Internal Error' }, { status: 500 })
  }
}
