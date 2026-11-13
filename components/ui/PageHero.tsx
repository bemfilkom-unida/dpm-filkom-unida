import type { ReactNode } from 'react'

const GRADIENT = 'linear-gradient(135deg, #44C2D6 0%, #2BB3BD 45%, #164653 100%)'

/**
 * Page header used by every secondary page: copy on the left, brand gradient
 * panel with a corner caption on the right (panel is hidden on mobile).
 */
export function PageHero({
  kicker,
  title,
  description,
  caption,
  children,
}: {
  kicker: string
  title: string
  description: string
  caption: string
  children?: ReactNode
}) {
  return (
    <section className="flex flex-col gap-16 px-4 md:px-8 pt-[46px] pb-8 md:flex-row">
      <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
        <span
          data-scroll
          className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]"
        >
          {kicker}
        </span>
        <h1
          data-scroll
          className="max-w-full md:w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#164653]"
        >
          {title}
        </h1>
        <p
          data-scroll
          className="max-w-full md:w-[430px] text-[14px] leading-[1.6] text-[#4a5a60]"
        >
          {description}
        </p>
        {children}
      </div>
      <div
        className="relative hidden flex-1 overflow-hidden rounded-[20px] md:block"
        style={{ minHeight: 320, background: GRADIENT }}
      >
        <div className="absolute bottom-6 left-6">
          <span className="font-mono text-[10px] tracking-[1.2px] text-white/70">
            {caption}
          </span>
        </div>
      </div>
    </section>
  )
}
