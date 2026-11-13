import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/home'

/** Counts up from zero the first time it scrolls into view. */
function StatCounter({
  value,
  suffix,
  label,
  className = '',
}: {
  value: number
  suffix: string
  label: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true
          observer.unobserve(el)

          const duration = 1600
          const startTime = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className={`flex flex-col gap-[6px] ${className}`}>
      <span className="text-[28px] font-medium leading-none tracking-[-1px] text-[#164653] tabular-nums md:text-[40px] md:tracking-[-1.4px]">
        {display}
        {suffix}
      </span>
      <span className="font-mono text-[10px] tracking-[1px] text-[#4a5a60]">{label}</span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="reveal border-y border-[#c5cdd1] bg-white px-4 py-6 md:px-8 md:py-9">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <StatCounter
            key={item.label}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
            className={[
              'py-4 md:py-0',
              index % 2 === 1 ? 'border-l border-[#c5cdd1] pl-5' : 'pr-5',
              index >= 2 ? 'border-t border-[#c5cdd1] md:border-t-0' : '',
              index > 0 ? 'md:border-l md:border-[#c5cdd1] md:pl-7' : 'md:pl-0',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  )
}
