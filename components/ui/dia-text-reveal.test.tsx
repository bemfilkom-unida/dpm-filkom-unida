import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DiaTextReveal } from './dia-text-reveal'

describe('DiaTextReveal', () => {
  it('menampilkan teks dengan clip background sehingga warna gradien terlihat', () => {
    render(<DiaTextReveal text="Parlemen Aksara 2026/2027." textColor="#164653" />)
    const el = screen.getByText('Parlemen Aksara 2026/2027.')

    expect(el.style.color).toBe('transparent')
    expect(el.style.backgroundClip).toBe('text')
    expect(el.style.backgroundImage).toContain('transparent')
  })

  it('memakai palet warna kustom pada pita gradien', () => {
    render(
      <DiaTextReveal
        text="Parlemen Aksara"
        colors={['#E78E3F', '#f7d3a8']}
        textColor="#164653"
      />,
    )
    const el = screen.getByText('Parlemen Aksara')

    expect(el.style.backgroundImage).toContain('rgb(231, 142, 63)')
    expect(el.style.backgroundImage).toContain('rgb(247, 211, 168)')
  })

  it('menerima className tambahan', () => {
    render(<DiaTextReveal text="Aksara" className="font-mono tracking-[2px]" />)
    expect(screen.getByText('Aksara')).toHaveClass('font-mono', 'tracking-[2px]')
  })
})
