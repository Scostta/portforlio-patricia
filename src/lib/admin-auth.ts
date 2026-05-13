import 'server-only'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

function getSecret(): Uint8Array {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not set')
  return new TextEncoder().encode(secret)
}

/**
 * Verifies the admin_session cookie.
 * Returns null if valid, or a 401 NextResponse if invalid/missing.
 * Use this as a secondary auth guard inside admin route handlers.
 */
export async function requireAdminSession(): Promise<NextResponse | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await jwtVerify(token, getSecret())
    return null
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
