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
              className="absolute left-0 right-0 flex h-[58px] items-center gap-[10px] rounded-[9px] border border-border bg-bg px-[10px] will-change-[top] hover:border-primary hover:bg-surface"
              style={{
                top: slot * 66,
                zIndex: agenda.length - slot,
                transition:
                  'top 700ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms, background-color 150ms',
              }}
            >
              <span className="font-mono text-[9.5px] tracking-[0.8px] text-muted">
                {item.date}
              </span>
              <span className="text-[12px] text-heading">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </ProgramCard>
  )
}
