import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import ThemeToggle from './ThemeToggle'
import { THEME_STORAGE_KEY } from '../../lib/theme'
import { matchMediaMock } from '../../test/setup'

describe('ThemeToggle', () => {
  it('exposes the current preference in its accessible name', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /Tema: Sistem/i })).toBeInTheDocument()
  })

  it('cycles preference and persists it', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)
    const button = screen.getByRole('button')

    await user.click(button)
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('Terang'))
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')

    await user.click(button)
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('Gelap'))
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')

    await user.click(button)
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('Sistem'))
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('system')
  })

  it('restores a stored preference on mount', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark')
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /Tema: Gelap/i })).toBeInTheDocument()
    expect(document.documentElement).toHaveClass('dark')
  })

  it('keeps the dark class when stored dark differs from a light system', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark')
    matchMediaMock.mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    document.documentElement.classList.add('dark')

    render(<ThemeToggle />)

    expect(document.documentElement).toHaveClass('dark')
  })
})
