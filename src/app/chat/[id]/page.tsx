import { redirect } from 'next/navigation'
import { unstable_cache } from 'next/cache'
import { createSupabaseServer } from '~/lib/supabase'

const getChatSession = unstable_cache(
  async (id: string) => {
    const supabase = createSupabaseServer()
    const { data } = await supabase.from('chat_sessions').select('id').eq('id', id).single()
    return data
  },
  ['chat-session'],
  { revalidate: 60 },
)

export default async function ChatSessionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await getChatSession(id)
  if (!session) redirect('/chat')
  return null
}
