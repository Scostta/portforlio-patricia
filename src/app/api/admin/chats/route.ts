import { requireAdminSession } from '~/lib/admin-auth'
import { createSupabaseServer } from '~/lib/supabase'
import { NextResponse } from 'next/server'

export interface AdminChatSession {
  id: string
  session_id: string
  title: string
  created_at: string
  updated_at: string
  user_agent: string | null
  country: string | null
  message_count: number
  last_message_at: string | null
  last_user_message: string | null
}

export async function GET(): Promise<NextResponse> {
  const authError = await requireAdminSession()
  if (authError) return authError

  const supabase = createSupabaseServer()
  const { data, error } = await supabase.rpc('get_admin_chat_sessions')

  if (error) {
    console.error('[admin/chats] rpc error:', error.message)
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 })
  }

  return NextResponse.json(data as AdminChatSession[])
}
