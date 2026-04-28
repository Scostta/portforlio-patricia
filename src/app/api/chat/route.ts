import { revalidateTag } from 'next/cache'
import { createSupabaseServer } from '~/lib/supabase'

export async function POST(req: Request) {
  const { question, chatId, isNewChat, userSessionId } = await req.json()

  // Pre-create client while still in request context
  const supabase = createSupabaseServer()

  if (chatId && userSessionId) {
    try {
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

  const flowiseRes = await fetch(
    `${process.env.FLOWISE_API_URL}/api/v1/prediction/${process.env.FLOWISE_CHATFLOW_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`,
      },
      body: JSON.stringify({ question, sessionId: chatId, streaming: true }),
    },
  )

  if (!flowiseRes.ok || !flowiseRes.body) {
    return new Response('data: [DONE]\n\n', {
      status: 502,
      headers: { 'Content-Type': 'text/event-stream' },
    })
  }

  const flowiseReader = flowiseRes.body.getReader()
  const decoder = new TextDecoder()
  let fullText = ''

  const stream = new ReadableStream({
    async start(controller) {
      try {
        let buffer = ''
        while (true) {
          const { done, value } = await flowiseReader.read()
          if (done) break

          // Forward raw bytes directly to the client
          controller.enqueue(value)

          // Decode separately to accumulate the full text for Supabase
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data:')) continue
            const raw = line.slice(5).trimStart()
            try {
              const parsed = JSON.parse(raw)
              if (parsed.event === 'token' && typeof parsed.data === 'string') fullText += parsed.data
            } catch { /* ignore malformed SSE lines */ }
          }
        }
      } catch (err) {
        console.error('[flowise] stream read error:', err)
      } finally {
        controller.close()
      }

      if (chatId && fullText) {
        try {
          const { error } = await supabase
            .from('chat_messages')
            .insert({ chat_id: chatId, role: 'assistant', content: fullText })
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
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  })
}
