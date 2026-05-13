import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const loginUrl = new URL('/admin/login', req.url)
  const response = NextResponse.redirect(loginUrl)
  response.cookies.delete('admin_session')
  return response
}
