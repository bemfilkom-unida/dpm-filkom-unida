import { render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Parallax, ScrollFx, ScrollProgress } from './ScrollEffects'
import {
  intersectionObservers,
  motionPreference,
} from '../test/setup'

function setScroll({ height = 2000, y = 500 } = {}) {
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: height,
    configurable: true,
  })
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true })
  Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true })
}

function stubRect(rect: Partial<DOMRect>) {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    toJSON: () => ({}),
    ...rect,
  } as DOMRect)
}

describe('ScrollProgress', () => {
  it('mengisi progress bar sesuai posisi scroll', async () => {
    setScroll({ height: 2000, y: 500 })
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector<HTMLElement>('.scroll-progress-bar')

    await waitFor(() => {
      // (2000 - 1000) = 1000px bisa di-scroll, 500px sudah lewat -> 50%
      expect(bar?.style.transform).toBe('scaleX(0.5)')
    })
  })

  it('tidak error saat halaman belum bisa di-scroll', async () => {
    setScroll({ height: 800, y: 0 })
    const { container } = render(<ScrollProgress />)
    const bar = container.querySelector<HTMLElement>('.scroll-progress-bar')

    await waitFor(() => {
      expect(bar?.style.transform).toBe('scaleX(0)')
    })
  })
})

describe('ScrollFx', () => {
  it('menandai elemen dalam viewport dan menambahkan class scroll-fx', async () => {
    setScroll()
    stubRect({ top: 100, bottom: 300, height: 200 })
    const { container } = render(
      <div>
        <ScrollFx />
        <p data-scroll>terlihat</p>
      </div>,
    )

    const el = container.querySelector('[data-scroll]')
    await waitFor(() => {
      expect(document.documentElement.classList.contains('scroll-fx')).toBe(true)
    })
    expect(el?.classList.contains('is-revealed')).toBe(true)
  })

  it('mengamati elemen di bawah fold lalu reveal saat masuk viewport', async () => {
    setScroll()
    stubRect({ top: 1500, bottom: 1800, height: 300 })
    const { container } = render(
      <div>
        <ScrollFx />
        <p data-scroll>jauh di bawah</p>
      </div>,
    )

    const el = container.querySelector('[data-scroll]')
    expect(el?.classList.contains('is-revealed')).toBe(false)
    expect(intersectionObservers).toHaveLength(1)
    expect(intersectionObservers[0].observe).toHaveBeenCalledWith(el)

    intersectionObservers[0].trigger([{ isIntersecting: true, target: el! }])
    expect(el?.classList.contains('is-revealed')).toBe(true)
    expect(intersectionObservers[0].unobserve).toHaveBeenCalledWith(el)
  })

  it('tidak melakukan apa pun saat pengguna memilih reduced motion', async () => {
    motionPreference.reduced = true
    setScroll()
    stubRect({ top: 1500, bottom: 1800, height: 300 })
    const { container } = render(
      <div>
        <ScrollFx />
        <p data-scroll>tetap terlihat</p>
      </div>,
    )

    const el = container.querySelector('[data-scroll]')
    await waitFor(() => {
      expect(document.documentElement.classList.contains('scroll-fx')).toBe(false)
    })
    expect(el?.classList.contains('is-revealed')).toBe(false)
    expect(intersectionObservers).toHaveLength(0)
  })
})

describe('Parallax', () => {
  it('menggeser konten sesuai jarak ke tengah viewport', async () => {
    Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true })
    stubRect({ top: 0, bottom: 100, height: 100 })

    const { container } = render(
      <Parallax speed={0.06}>
        <span>isi</span>
      </Parallax>,
    )
    const wrapper = container.firstElementChild as HTMLElement

    await waitFor(() => {
      // (500 - 50) * 0.06 = 27px
      expect(wrapper.style.transform).toBe('translate3d(0px, 27px, 0px)')
    })
  })

  it('membatasi pergeseran maksimal 48px', async () => {
    Object.defineProperty(window, 'innerHeight', { value: 1000, configurable: true })
    stubRect({ top: -5000, bottom: -4900, height: 100 })

    const { container } = render(
      <Parallax speed={0.5}>
        <span>isi</span>
      </Parallax>,
    )
    const wrapper = container.firstElementChild as HTMLElement

    await waitFor(() => {
      expect(wrapper.style.transform).toBe('translate3d(0px, 48px, 0px)')
    })
  })

  it('tidak memasang transform saat reduced motion', async () => {
    motionPreference.reduced = true
    const { container } = render(
      <Parallax>
        <span>isi</span>
      </Parallax>,
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.style.transform).toBe('')
  })
})
