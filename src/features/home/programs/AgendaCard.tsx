import { useEffect, useState } from 'react'
import { agenda } from '../../../data/home'
import { ProgramCard } from './ProgramCard'

/** Agenda list that rotates one item every few seconds. */
export function AgendaCard() {
  const [items, setItems] = useState(agenda)

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((current) => [...current.slice(1), current[0]])
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <ProgramCard
      label="KEGIATAN"
      className="top-[40px] z-[3] md:col-span-3 lg:col-span-2"
    >
      <div className="relative flex-1 overflow-hidden p-[18px]">
        <div className="relative h-full">
          {items.map((item, slot) => (
            <div
              key={item.name}
              className="absolute left-0 right-0 flex h-[58px] items-center gap-[10px] rounded-[9px] border border-[#c5cdd1] bg-[#DCE2E6] px-[10px] will-change-[top] hover:border-[#2BB3BD] hover:bg-white"
              style={{
                top: slot * 66,
                zIndex: agenda.length - slot,
                transition:
                  'top 700ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms, background-color 150ms',
              }}
            >
              <span className="font-mono text-[9.5px] tracking-[0.8px] text-[#4a5a60]">
                {item.date}
              </span>
              <span className="text-[12px] text-[#164653]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </ProgramCard>
  )
}
