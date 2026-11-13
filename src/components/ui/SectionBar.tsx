import type { ReactNode } from 'react'

/**
 * The thin rule + mono label that opens every section.
 * `meta` holds anything on the right: a count, a link or a status note.
 */
export function SectionBar({
  label,
  meta,
  className = '',
}: {
  label: string
  meta?: ReactNode
  className?: string
}) {
  return (
    <div
      className={`mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2 ${className}`}
    >
      <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">
        {label}
      </span>
      {meta}
    </div>
  )
}
