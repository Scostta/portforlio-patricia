import { NextResponse } from 'next/server'
import { createSupabaseServer } from '~/lib/supabase'

export async function GET() {
  try {
    const supabase = createSupabaseServer()
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('id')
      .limit(1)

    if (error) return NextResponse.json({ ok: false, error: error.message, hint: error.hint })
    return NextResponse.json({ ok: true, tablesExist: true, sessionCount: data?.length ?? 0 })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) })
  }
}
