import { NextResponse } from 'next/server'

export async function POST(request) {
  const { text } = await request.json()

  const result = await fetch('https://my-deepl.vercel.app/api/translate', {
    method: 'post',
    body: JSON.stringify({ text }),
  }).then(res => res.json())
  console.log(result)
  return NextResponse.json(result, { status: 200 })
}
