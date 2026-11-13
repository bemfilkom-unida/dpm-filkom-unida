import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const items = [
  { label: 'Beranda', to: '/' as const },
  { label: 'Tentang', to: '/tentang' as const },
  { label: 'Program', to: '/komisi' as const },
  { label: 'Berita', to: '/berita' as const },
  { label: 'Kegiatan', to: '/kegiatan' as const },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Deteksi scroll biar navbar agak berubah saat turun
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll body saat menu full-screen terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close dengan tombol Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <nav
        aria-label="Navigasi utama"
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#c5cdd1]/80 bg-white/95 backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo-dpm.webp"
              alt="Logo DPM FILKOM UNIDA"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-[15px] font-semibold tracking-tight text-[#164653]">
              DPM FILKOM UNIDA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {items.map((it) => (
              <Link
                key={it.label}
                to={it.to}
                className="text-[13px] text-[#4a5a60] transition-colors hover:text-[#164653]"
              >
                {it.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/aduan"
              className="inline-flex items-center rounded-full bg-[#2BB3BD] px-4 py-2 text-[13px] font-medium text-[#0B2E36] transition-opacity hover:opacity-90"
            >
              Aduan
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[#c5cdd1] text-[#164653] transition-colors hover:bg-[#f4f7f8] md:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="full-menu"
          >
            <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Spacer biar konten tidak ketutup fixed nav */}
      <div className="h-[68px]" />

      {/* ========== FULL SCREEN MENU ========== */}
      <div
        id="full-menu"
        className={`fixed inset-0 z-40 bg-[#0f1c20] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-28">
          {/* Links */}
          <nav className="flex flex-1 flex-col gap-1">
            {items.map((it, i) => (
              <Link
                key={it.label}
                to={it.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-white/10 py-5 text-[28px] font-medium tracking-tight text-white/90 transition-all duration-300 hover:text-white ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: open ? `${80 + i * 40}ms` : '0ms',
                }}
              >
                <span>{it.label}</span>
                <span className="text-sm text-white/30 transition-colors group-hover:text-white/60">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            className={`mt-8 transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: open ? '320ms' : '0ms' }}
          >
            <Link
              to="/aduan"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#2BB3BD] py-3.5 text-[15px] font-medium text-[#0B2E36]"
            >
              Sampaikan Aduan
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}