import { useEffect, useRef, type ReactNode } from 'react'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches
}

/**
 * Slim reading-progress bar pinned to the top of the viewport.
 * Always rendered, driven by a single rAF-throttled scroll listener.
 */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bar.current
    if (!el) return
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0
      el.style.transform = `scaleX(${progress.toFixed(4)})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={bar} className="scroll-progress-bar" />
    </div>
  )
}

/**
 * Scroll-linked reveal for any element marked with `data-scroll`.
 * Elements stay visible without JS: the hiding rule only applies while
 * the `scroll-fx` class is present on <html>, added after observers attach.
 */
export function ScrollFx() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const root = document.documentElement
    const seen = new WeakSet<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    const scanNow = () => {
      document.querySelectorAll('[data-scroll]').forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        // Already on screen at mount (or on route change): show immediately so
        // there is no flash of hidden content before the observer fires.
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
          el.classList.add('is-revealed')
          return
        }
        observer.observe(el)
      })
    }

    // Batch DOM mutations (route changes, animated content) into one scan per frame
    // instead of a full document query on every mutation record.
    let scanFrame = 0
    const scan = () => {
      if (scanFrame) return
      scanFrame = requestAnimationFrame(() => {
        scanFrame = 0
        scanNow()
      })
    }

    scanNow()
    const raf = requestAnimationFrame(() => root.classList.add('scroll-fx'))

    const mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      if (scanFrame) cancelAnimationFrame(scanFrame)
      observer.disconnect()
      mutations.disconnect()
      root.classList.remove('scroll-fx')
    }
  }, [])

  return null
}

/**
 * Subtle scroll-linked drift. Positive speed makes the content move slower
 * than the page (parallax lag); a small value is enough.
 */
export function Parallax({
  speed = 0.06,
  className = '',
  children,
}: {
  speed?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const distance = window.innerHeight / 2 - (rect.top + rect.height / 2)
      const shift = Math.max(Math.min(distance * speed, 48), -48)
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      el.style.transform = ''
    }
  }, [speed])

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
