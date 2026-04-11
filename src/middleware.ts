import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Protect all /admin routes except /admin/login and /admin/verify
  if (path.startsWith('/admin') && !path.startsWith('/admin/login') && !path.startsWith('/admin/verify')) {
    const session = request.cookies.get('admin_session')
    
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new Array(request.nextUrl.origin, '/admin/login').join(''))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
