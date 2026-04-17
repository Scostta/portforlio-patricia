import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { createSupabaseServer } from '~/lib/supabase'

export async function POST(req: Request) {
  const { question, chatId, isNewChat, userSessionId } = await req.json()

  if (chatId && userSessionId) {
    try {
      const supabase = createSupabaseServer()

      if (isNewChat) {
        const title = question.length > 50 ? question.slice(0, 50) + '…' : question
        const { error } = await supabase
          .from('chat_sessions')
          .insert({ id: chatId, session_id: userSessionId, title })
        if (error) console.error('[supabase] create session:', error.message)
      }

      const { error: msgError } = await supabase
        .from('chat_messages')
        .insert({ chat_id: chatId, role: 'user', content: question })
      if (msgError) console.error('[supabase] save user message:', msgError.message)
    } catch (err) {
      console.error('[supabase] unexpected error:', err)
    }
  }

  const response = await fetch(
    `${process.env.FLOWISE_API_URL}/api/v1/prediction/${process.env.FLOWISE_CHATFLOW_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`,
      },
      body: JSON.stringify({ question, sessionId: chatId }),
    },
  )

  const data = await response.json()
  const text: string = data.text ?? data.answer ?? 'No response received.'

  if (chatId) {
    try {
      const supabase = createSupabaseServer()
      const { error } = await supabase
        .from('chat_messages')
        .insert({ chat_id: chatId, role: 'assistant', content: text })
      if (error) console.error('[supabase] save assistant message:', error.message)

      await supabase
        .from('chat_sessions')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', chatId)
    } catch (err) {
      console.error('[supabase] save response error:', err)
    }

    revalidateTag(`chat-messages-${chatId}`)
  }

  return NextResponse.json({ text, chatId })
}
