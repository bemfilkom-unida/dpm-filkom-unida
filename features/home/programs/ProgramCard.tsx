import type { ReactNode } from 'react'
import { ArrowUpRight } from '../../../components/ui/icons'

/**
 * Shared frame for the five program cards: fixed height, rounded border,
 * and a footer strip with a mono label and the arrow affordance.
 * Cards stack on mobile, so each one passes its own sticky offset via `className`.
 */
export function ProgramCard({
  label,
  tone = 'light',
  className = '',
  children,
}: {
  label: string
  tone?: 'light' | 'dark'
  className?: string
  children: ReactNode
}) {
  const dark = tone === 'dark'

  return (
    <div
      className={`sticky flex h-[340px] flex-col overflow-hidden rounded-2xl border md:static ${
        dark ? 'border-[#164653] bg-[#164653]' : 'border-[#c5cdd1] bg-white'
      } ${className}`}
    >
      {children}
      <div
        className={`flex items-center justify-between border-t px-[18px] py-[13px] ${
          dark ? 'border-[#164653]' : 'border-[#c5cdd1]'
        }`}
      >
        <span
          className={`font-mono text-[10px] tracking-[1.1px] ${
            dark ? 'text-[#a0b0b6]' : 'text-[#4a5a60]'
          }`}
        >
          {label}
        </span>
        <ArrowUpRight stroke={dark ? '#ffffff' : '#4a5a60'} />
      </div>
    </div>
  )
}
