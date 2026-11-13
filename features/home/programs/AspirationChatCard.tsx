import { useEffect, useState } from 'react'
import { ProgramCard } from './ProgramCard'

interface Message {
  text: string
  from: 'user' | 'dpm'
}

const INITIAL_MESSAGES: Message[] = [
  { text: 'Apakah Aspirasi saya tersampaikan?.', from: 'user' },
  { text: 'Sudah tersampaikan.', from: 'dpm' },
  { text: 'Sedang diproses oleh komisi II', from: 'dpm' },
  { text: 'Terima kasih, ditunggu informasi selanjutnya.', from: 'user' },
]

/** Demo chat that replays itself and accepts a typed message. */
export function AspirationChatCard() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= messages.length) {
      const timeout = setTimeout(() => setVisible(0), 2600)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => setVisible((value) => value + 1), 850)
    return () => clearTimeout(timeout)
  }, [visible, messages.length])

  function send() {
    const text = input.trim()
    if (!text) return
    setMessages((current) => [...current, { text, from: 'user' }])
    setInput('')
  }

  return (
    <ProgramCard
      label="ASPIRASI"
      className="top-[16px] z-[1] md:col-span-3 lg:col-span-2"
    >
      <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
        <div className="flex flex-col gap-2">
          {messages.slice(0, visible).map((message, index) => {
            const isUser = message.from === 'user'
            return (
              <div
                key={index}
                className={`bubble-in max-w-[85%] px-3 py-[9px] ${
                  isUser
                    ? 'self-end border border-[#2BB3BD] bg-[#2BB3BD]'
                    : 'self-start border border-[#c5cdd1] bg-[#DCE2E6]'
                }`}
                style={{
                  borderRadius: isUser ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                }}
              >
                <p
                  className={`m-0 font-mono text-[10.5px] leading-[1.4] ${
                    isUser ? 'text-[#164653]' : 'text-[#4a5a60]'
                  }`}
                >
                  {message.text}
                </p>
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-2 rounded-[10px] border border-[#c5cdd1] bg-[#DCE2E6] px-3 py-[9px]">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') send()
            }}
            aria-label="Tulis aspirasi"
            placeholder="Tulis aspirasi…"
            className="flex-1 bg-transparent font-mono text-[10.5px] text-[#4a5a60] outline-none placeholder:text-[#4a5a60]"
          />
          <button
            type="button"
            onClick={send}
            aria-label="Kirim aspirasi"
            className="h-[22px] w-[22px] rounded-full bg-[#2BB3BD] text-[10px] font-bold text-[#0B2E36]"
          >
            ↑
          </button>
        </div>
      </div>
    </ProgramCard>
  )
}
