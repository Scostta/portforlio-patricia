import { SignJWT } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

const SESSION_TTL_SECONDS = 12 * 60 * 60 // 12 hours

function getSecret(): Uint8Array {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not set')
  return new TextEncoder().encode(secret)
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('username' in body) ||
    !('password' in body) ||
    typeof (body as Record<string, unknown>).username !== 'string' ||
    typeof (body as Record<string, unknown>).password !== 'string'
  ) {
    return NextResponse.json({ error: 'username and password are required' }, { status: 400 })
  }

  const { username, password } = body as { username: string; password: string }

  const expectedUser = process.env.ADMIN_USER
  const expectedPassword = process.env.ADMIN_PASSWORD

  if (!expectedUser || !expectedPassword) {
    console.error('[admin/auth] ADMIN_USER or ADMIN_PASSWORD env var is missing')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  // Constant-time comparison is not strictly needed for a single admin account,
  // but we avoid short-circuit evaluation by comparing both fields before branching.
  const userMatch = username === expectedUser
  const passMatch = password === expectedPassword

  if (!userMatch || !passMatch) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = await new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(getSecret())

  const response = NextResponse.json({ ok: true })
  response.cookies.set('admin_session', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_TTL_SECONDS,
    path: '/',
  })

  return response
}
