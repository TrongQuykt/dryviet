import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    if (!session || session.value !== 'authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const contactId = parseInt(id)

    await db.contact.delete({
      where: { id: contactId }
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Delete Contact Error:', err)
    return NextResponse.json({ error: 'Lỗi khi xóa liên hệ' }, { status: 500 })
  }
}
