/**
 * Single source for the arrow used on links, cards and CTAs.
 * Inherits `currentColor` unless an explicit stroke is passed.
 */
export function ArrowUpRight({
  size = 14,
  stroke = 'currentColor',
}: {
  size?: number
  stroke?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}
