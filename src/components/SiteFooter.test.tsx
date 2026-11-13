import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import SiteFooter from './SiteFooter'

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

describe('SiteFooter', () => {
  it('memakai tautan yang sama dengan navbar', () => {
    render(<SiteFooter />)
    const nav = screen.getByRole('navigation', { name: 'Navigasi footer' })
    const links = within(nav).getAllByRole('link')

    expect(links.map((l) => l.textContent)).toEqual([
      'Beranda',
      'Tentang',
      'Program',
      'Berita',
      'Kegiatan',
      'Aduan',
    ])
    expect(links.map((l) => l.getAttribute('href'))).toEqual([
      '/',
      '/tentang',
      '/komisi',
      '/berita',
      '/kegiatan',
      '/aduan',
    ])
  })

  it('tidak lagi memuat tautan lama di luar navbar', () => {
    render(<SiteFooter />)
    expect(screen.queryByText(/Struktur/i)).toBeNull()
    expect(screen.queryByText(/Dokumen/i)).toBeNull()
    expect(screen.queryByText(/Legal/i)).toBeNull()
  })

  it('menampilkan identitas organisasi', () => {
    render(<SiteFooter />)
    expect(
      screen.getByText(/Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer/i),
    ).toBeInTheDocument()
    expect(screen.getByText('PARLEMEN AKSARA · 2026/2027')).toBeInTheDocument()
    expect(screen.getByText('BEM FILKOM UNIDA')).toBeInTheDocument()
  })

  it('menampilkan hak cipta dan ajakan menyampaikan aspirasi', () => {
    render(<SiteFooter />)
    expect(screen.getByText(/© 2026 DPM FILKOM UNIDA/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sampaikan Aspirasi/i })).toHaveAttribute(
      'href',
      '/aduan',
    )
  })
})
