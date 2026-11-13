import { useEffect, useState } from 'react'
import { CODE_OFFSETS, CODE_TOTAL, codeLines } from '../../../data/home'
import { ProgramCard } from './ProgramCard'

/** Terminal transcript that types itself out, then restarts. */
export function SystemFeedCard() {
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (charCount >= CODE_TOTAL) {
      const timeout = setTimeout(() => setCharCount(0), 2200)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => setCharCount((count) => count + 1), 35)
    return () => clearTimeout(timeout)
  }, [charCount])

  return (
    <ProgramCard label="SISTEM" tone="dark" className="top-[28px] z-[2] md:col-span-3 lg:col-span-2">
      <div className="flex flex-1 flex-col justify-between gap-2 p-[18px]">
        <div className="flex flex-col font-mono text-[10.5px] leading-[1.65]">
          {codeLines.map((line, index) => {
            const start = CODE_OFFSETS[index]
            if (charCount < start) return null
            const visible = line.text.slice(0, Math.min(line.text.length, charCount - start))
            const isActive = charCount - start < line.text.length
            return (
              <span key={index} className={line.className}>
                {line.text === '' ? '\u00A0' : visible}
                {isActive && <span className="animate-pulse text-[#ff6208]">▌</span>}
              </span>
            )
          })}
          {charCount >= CODE_TOTAL && (
            <span className="animate-pulse text-[#ff6208]">▌</span>
          )}
        </div>
      </div>
    </ProgramCard>
  )
}
