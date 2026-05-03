import { revalidateTag } from 'next/cache'
import OpenAI from 'openai'
import { createSupabaseServer } from '~/lib/supabase'
import {
  CHAT_MODEL,
  EMBEDDING_DIMENSIONS,
  EMBEDDING_MODEL,
  HISTORY_LIMIT,
  MATCH_COUNT,
  MAX_TOKENS,
  SYSTEM_PROMPT,
  TEMPERATURE,
} from '~/constants/ai-config'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const sseHeaders = {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  'X-Accel-Buffering': 'no',
}

function sseToken(token: string): string {
  return `data: ${JSON.stringify({ event: 'token', data: token })}\n\n`
}

export async function POST(req: Request) {
  const { question, chatId, isNewChat, userSessionId } = await req.json()
  const supabase = createSupabaseServer()

  // Create session first (FK constraint: messages reference sessions)
  if (chatId && isNewChat && userSessionId) {
    const title = question.length > 50 ? question.slice(0, 50) + '…' : question
    const { error } = await supabase
      .from('chat_sessions')
      .insert({ id: chatId, session_id: userSessionId, title })
    if (error) console.error('[supabase] create session:', error.message)
  }

  // Generate embedding for the question
  let embedding: number[]
  try {
    const embeddingRes = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: question,
      dimensions: EMBEDDING_DIMENSIONS,
    })
    embedding = embeddingRes.data[0].embedding
  } catch (err) {
    console.error('[openai] embedding error:', err)
    return new Response(sseToken('Sorry, the AI is unavailable right now. Please try again.'), { headers: sseHeaders })
  }

  // Retrieve relevant chunks from Supabase
  let contextChunks: string[] = []
  try {
    const { data, error } = await supabase.rpc('match_documents', {
      query_embedding: embedding,
      match_count: MATCH_COUNT,
    })
    if (error) console.error('[supabase] match_documents:', error.message)
    else contextChunks = (data as Array<{ content: string }>).map((d) => d.content)
  } catch (err) {
    console.error('[supabase] match_documents error:', err)
  }

  // Fetch conversation history (before saving current message to avoid duplication)
  type HistoryRow = { role: 'user' | 'assistant'; content: string }
  let history: HistoryRow[] = []
  if (chatId) {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('role, content')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true })
        .limit(HISTORY_LIMIT)
      if (error) console.error('[supabase] fetch history:', error.message)
      else history = (data ?? []) as HistoryRow[]
    } catch (err) {
      console.error('[supabase] history error:', err)
    }
  }

  // Build messages array
  const contextBlock = contextChunks.length > 0
    ? `Relevant context from Patricia's portfolio:\n\n${contextChunks.join('\n\n---\n\n')}`
    : null

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history,
    ...(contextBlock ? [{ role: 'user' as const, content: contextBlock }, { role: 'assistant' as const, content: 'Understood, I will use this context to answer.' }] : []),
    { role: 'user', content: question },
  ]

  // Stream response from OpenAI
  let fullText = ''

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const completion = await openai.chat.completions.create({
          model: CHAT_MODEL,
          messages,
          temperature: TEMPERATURE,
          max_tokens: MAX_TOKENS,
          stream: true,
        })

        for await (const chunk of completion) {
          const token = chunk.choices[0]?.delta?.content ?? ''
          if (token) {
            fullText += token
            controller.enqueue(new TextEncoder().encode(sseToken(token)))
          }
        }
      } catch (err) {
        console.error('[openai] stream error:', err)
        controller.enqueue(
          new TextEncoder().encode(sseToken('Sorry, something went wrong. Please try again.'))
        )
      }

      // Save messages before closing the controller to ensure the save
      // completes within the request lifecycle (required in serverless environments)
      if (chatId) {
        try {
          const userCreatedAt = new Date()
          const assistantCreatedAt = new Date(userCreatedAt.getTime() + 1)
          const messagesToInsert = [
            { chat_id: chatId, role: 'user', content: question, created_at: userCreatedAt.toISOString() },
            ...(fullText ? [{ chat_id: chatId, role: 'assistant', content: fullText, created_at: assistantCreatedAt.toISOString() }] : []),
          ]
          const { error } = await supabase.from('chat_messages').insert(messagesToInsert)
          if (error) console.error('[supabase] save messages:', error.message)

          await supabase
            .from('chat_sessions')
            .update({ updated_at: new Date().toISOString() })
            .eq('id', chatId)

          revalidateTag(`chat-messages-${chatId}`)
        } catch (err) {
          console.error('[supabase] save messages error:', err)
        }
      }

      controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'))
      controller.close()
    },
  })

  return new Response(stream, { headers: sseHeaders })
}
