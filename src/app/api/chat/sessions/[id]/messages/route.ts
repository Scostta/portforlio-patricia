import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { createSupabaseServer } from '~/lib/supabase'

const getMessages = (id: string) =>
  unstable_cache(
    async () => {
      const supabase = createSupabaseServer()
      const { data, error } = await supabase
        .from('chat_messages')
        .select('id, role, content, created_at')
        .eq('chat_id', id)
        .order('created_at', { ascending: true })
      if (error) throw error
      return data
    },
    [`chat-messages-${id}`],
    { tags: [`chat-messages-${id}`] },
  )()

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  try {
    const data = await getMessages(id)
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
