import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { question, sessionId } = await req.json()

  const response = await fetch(
    `${process.env.FLOWISE_API_URL}/api/v1/prediction/${process.env.FLOWISE_CHATFLOW_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.FLOWISE_API_KEY}`
      },
      body: JSON.stringify({
        question,
        sessionId // para mantener memoria por usuario
      })
    }
  )

  const data = await response.json()
  return NextResponse.json(data)
}