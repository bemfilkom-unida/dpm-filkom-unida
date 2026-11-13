import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

/** Controls what `prefers-reduced-motion` reports in a test. */
export const motionPreference = { reduced: false }

export const matchMediaMock = vi.fn((query: string) => ({
  matches: query.includes('prefers-reduced-motion')
    ? motionPreference.reduced
    : false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

type ObserverCallback = (entries: IntersectionObserverEntry[]) => void

/** IntersectionObserver instances created by the code under test. */
export const intersectionObservers: MockIntersectionObserver[] = []

export class MockIntersectionObserver {
  callback: ObserverCallback
  options?: IntersectionObserverInit
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])

  constructor(callback: ObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
    intersectionObservers.push(this)
  }

  trigger(entries: Array<Partial<IntersectionObserverEntry>>) {
    this.callback(entries as IntersectionObserverEntry[])
  }
}

beforeEach(() => {
  motionPreference.reduced = false
  intersectionObservers.length = 0
  vi.stubGlobal('matchMedia', matchMediaMock)
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})
