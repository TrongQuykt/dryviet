import { NextResponse } from 'next/server'
import { analyzeRemoteUrl } from '@/lib/audit/remote'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { url } = await request.json()
    if (!url) return NextResponse.json({ error: 'Thiếu URL đối thủ' }, { status: 400 })

    const analysis = await analyzeRemoteUrl(url)
    
    if (analysis.error) {
       return NextResponse.json({ error: analysis.error }, { status: 500 })
    }

    return NextResponse.json(analysis)
  } catch (err: any) {
    return NextResponse.json({ error: 'Lỗi phân tích đối thủ' }, { status: 500 })
  }
}
