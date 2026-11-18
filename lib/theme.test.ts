import { describe, expect, it, vi } from 'vitest'
import {
  THEME_INIT_SCRIPT,
  THEME_STORAGE_KEY,
  applyTheme,
  isDarkTheme,
  nextTheme,
  readTheme,
  saveTheme,
  systemPrefersDark,
} from './theme'
import { matchMediaMock } from '../test/setup'

function withSystemDark(prefersDark: boolean) {
  matchMediaMock.mockImplementation((query: string) => ({
    matches: query.includes('prefers-color-scheme') && prefersDark,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

describe('theme preference', () => {
  it('defaults to system and ignores unknown stored values', () => {
    expect(readTheme()).toBe('system')
    localStorage.setItem(THEME_STORAGE_KEY, 'sepia')
    expect(readTheme()).toBe('system')
  })

  it('reads and saves a valid preference', () => {
    saveTheme('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(readTheme()).toBe('dark')
  })

  it('cycles light -> dark -> system', () => {
    expect(nextTheme('light')).toBe('dark')
    expect(nextTheme('dark')).toBe('system')
    expect(nextTheme('system')).toBe('light')
  })
})

describe('theme resolution', () => {
  it('honours explicit light and dark over the system setting', () => {
    withSystemDark(true)
    expect(systemPrefersDark()).toBe(true)
    expect(isDarkTheme('light')).toBe(false)
    expect(isDarkTheme('dark')).toBe(true)
  })

  it('follows the system setting for the system preference', () => {
    withSystemDark(false)
    expect(isDarkTheme('system')).toBe(false)
    withSystemDark(true)
    expect(isDarkTheme('system')).toBe(true)
  })

  it('toggles the dark class to match the resolved theme', () => {
    withSystemDark(false)
    applyTheme('dark')
    expect(document.documentElement).toHaveClass('dark')

    applyTheme('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })
})

describe('THEME_INIT_SCRIPT', () => {
  it('adds the dark class for a stored dark preference even on a light system', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark')
    withSystemDark(false)

    new Function(THEME_INIT_SCRIPT)()

    expect(document.documentElement).toHaveClass('dark')
  })

  it('leaves the class off for a stored light preference on a dark system', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light')
    withSystemDark(true)

    new Function(THEME_INIT_SCRIPT)()

    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('follows the system when no preference is stored', () => {
    withSystemDark(true)

    new Function(THEME_INIT_SCRIPT)()

    expect(document.documentElement).toHaveClass('dark')
  })
})
