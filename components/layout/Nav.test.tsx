import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Nav from './Nav'

// TanStack Link butuh router context; di unit test cukup jadi anchor biasa.
vi.mock('@tanstack/react-router', async () => {
  const { createElement } = await import('react')
  return {
    Link: ({
      to,
      children,
      ...props
    }: {
      to: string
      children?: React.ReactNode
    }) => createElement('a', { href: to, ...props }, children),
  }
})

describe('Nav', () => {
  it('menampilkan tautan utama dan CTA aduan', () => {
    const { container } = render(<Nav />)
    expect(screen.getByRole('link', { name: /DPM FILKOM UNIDA/i })).toHaveAttribute(
      'href',
      '/',
    )
    const hrefs = Array.from(container.querySelectorAll('a')).map((a) =>
      a.getAttribute('href'),
    )
    expect(hrefs).toEqual(expect.arrayContaining(['/', '/tentang', '/komisi', '/berita', '/aduan']))
    expect(screen.getByRole('navigation', { name: 'Navigasi utama' })).toBeInTheDocument()
  })

  it('membuka dan menutup menu mobile lewat tombol', async () => {
    const user = userEvent.setup()
    render(<Nav />)
    const toggle = screen.getByRole('button', { name: 'Buka menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    const menu = () => document.querySelector('#full-menu')
    expect(menu()).toHaveAttribute('aria-hidden', 'true')

    await user.click(toggle)

    const closeButton = screen.getByRole('button', { name: 'Tutup menu' })
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')
    expect(closeButton).toHaveAttribute('aria-controls', 'full-menu')
    expect(menu()).toHaveAttribute('aria-hidden', 'false')

    await user.click(closeButton)
    expect(menu()).toHaveAttribute('aria-hidden', 'true')
  })
})
