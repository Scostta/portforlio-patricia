import { requireAdminSession } from '~/lib/admin-auth'
import { createSupabaseServer } from '~/lib/supabase'
import { NextResponse } from 'next/server'

export interface AdminChatMessage {
  id: string
  chat_id: string
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ sessionId: string }> },
): Promise<NextResponse> {
  const authError = await requireAdminSession()
  if (authError) return authError

  const { sessionId } = await params

  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId is required' }, { status: 400 })
  }

  const supabase = createSupabaseServer()
  const { data, error } = await supabase
    .from('chat_messages')
    .select('id, chat_id, role, content, created_at')
    .eq('chat_id', sessionId)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('[admin/chats/[sessionId]] query error:', error.message)
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 })
  }

  return NextResponse.json(data as AdminChatMessage[])
}
