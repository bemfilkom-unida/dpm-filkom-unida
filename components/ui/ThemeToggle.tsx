import { useEffect, useState, type ReactNode } from 'react'
import {
  THEME_LABELS,
  applyTheme,
  nextTheme,
  readTheme,
  saveTheme,
  subscribeToSystemTheme,
  type Theme,
} from '../../lib/theme'

const ICONS: Record<Theme, ReactNode> = {
  light: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  ),
  dark: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z" />
    </svg>
  ),
  system: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const stored = readTheme()
    setTheme(stored)
    applyTheme(stored)
  }, [])

  useEffect(() => {
    if (theme !== 'system') return
    return subscribeToSystemTheme(() => applyTheme('system'))
  }, [theme])

  const change = () => {
    const value = nextTheme(theme)
    saveTheme(value)
    applyTheme(value)
    setTheme(value)
  }

  const label = `Tema: ${THEME_LABELS[theme]}. Klik untuk ${THEME_LABELS[nextTheme(theme)]}`

  return (
    <button
      type="button"
      onClick={change}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted hover:bg-soft hover:text-heading focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
    >
      {ICONS[theme]}
    </button>
  )
}
