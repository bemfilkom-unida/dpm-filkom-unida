export type Theme = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'dpm-theme'
export const THEME_ORDER: Theme[] = ['light', 'dark', 'system']
export const THEME_LABELS: Record<Theme, string> = {
  light: 'Terang',
  dark: 'Gelap',
  system: 'Sistem',
}

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})();`

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system'
}

export function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (isTheme(stored)) return stored
  } catch {
    return 'system'
  }
  return 'system'
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    return
  }
}

export function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function isDarkTheme(theme: Theme) {
  return theme === 'dark' || (theme === 'system' && systemPrefersDark())
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle(
    'dark',
    isDarkTheme(theme),
  )
}

export function subscribeToSystemTheme(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

export function nextTheme(theme: Theme): Theme {
  return THEME_ORDER[(THEME_ORDER.indexOf(theme) + 1) % THEME_ORDER.length]
}
