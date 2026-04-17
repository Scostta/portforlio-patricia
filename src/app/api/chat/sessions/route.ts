import { NextResponse } from 'next/server'
import { createSupabaseServer } from '~/lib/supabase'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userSessionId = searchParams.get('userSessionId')

  if (!userSessionId) return NextResponse.json([])

  const supabase = createSupabaseServer()
  const { data, error } = await supabase
    .from('chat_sessions')
    .select('id, title, created_at, updated_at')
    .eq('session_id', userSessionId)
    .order('updated_at', { ascending: false })
    .limit(50)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
