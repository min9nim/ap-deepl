'use client'

import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState<string>('')
  const [translated, setTranslate] = useState<string>('')
  return (
    <main className="p-4">
      <h1 className="text-2xl">AP-Deepl</h1>
      <textarea
        className="p-2 border w-full"
        rows={5}
        value={text}
        onChange={e => {
          setText(e.target.value)
          translate(e.target.value, setTranslate)
        }}
      />
      <div>{translated}</div>
    </main>
  )
}

const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

const translate = debounce(async (text, setTranslate) => {
  const result = await fetch('/api/translate', {
    method: 'post',
    body: JSON.stringify({ text }),
  }).then(res => res.json())
  setTranslate(result.message)
}, 1000)
