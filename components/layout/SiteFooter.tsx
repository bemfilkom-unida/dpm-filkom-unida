import { Link } from '@tanstack/react-router'

const groups = [
  {
    title: 'Jelajahi',
    links: [
      { label: 'Beranda', to: '/' as const },
      { label: 'Tentang', to: '/tentang' as const },
      { label: 'Program', to: '/komisi' as const },
    ],
  },
  {
    title: 'Informasi',
    links: [
      { label: 'Berita', to: '/berita' as const },
      { label: 'Kegiatan', to: '/kegiatan' as const },
      { label: 'Aduan', to: '/aduan' as const },
    ],
  },
]

const linkClass =
  'inline-flex min-h-11 items-center text-[13px] text-[#c5d0d4] transition-colors duration-200 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E2B30] md:min-h-0'

export default function SiteFooter() {
  return (
    <footer className="w-full rounded-t-3xl border-t border-[#2a3a40] bg-[#1E2B30] px-4 pb-8 pt-12 md:px-8 md:pt-14">
      <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-12 md:gap-8">
          {/* Identitas */}
          <div className="flex flex-col items-start gap-4 md:col-span-5">
            <Link
              to="/"
              className="flex items-center gap-[10px] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[#1E2B30]"
            >
              <img
                src="/logo-dpm.webp"
                alt="Logo DPM FILKOM UNIDA"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain"
              />
              <span className="text-[15px] font-semibold tracking-[-0.3px] text-white">
                DPM FILKOM UNIDA
              </span>
            </Link>

            <p className="m-0 max-w-[340px] text-[13px] leading-[1.6] text-[#a0b0b6]">
              Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer, Universitas
              Djuanda.
            </p>

            <span className="font-mono text-[10px] tracking-[1.1px] text-[#8a9ba1]">
              PARLEMEN AKSARA · 2026/2027
            </span>

            <Link
              to="/aduan"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#E78E3F] px-[16px] py-[10px] text-[12px] font-medium text-[#0B2E36] transition-colors hover:bg-[#f0a055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E78E3F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E2B30]"
            >
              Sampaikan Aspirasi
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>

          {/* Navigasi */}
          <nav
            aria-label="Navigasi footer"
            className="grid w-full grid-cols-2 gap-x-6 gap-y-8 md:col-span-7 md:grid-cols-2 md:gap-8"
          >
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-[#8a9ba1]">
                  {group.title}
                </span>
                <div className="flex flex-col">
                  {group.links.map((it) => (
                    <Link key={it.label} to={it.to} className={linkClass}>
                      {it.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-[#2a3a40] pt-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[11px] text-[#a0b0b6]">
              © 2026 DPM FILKOM UNIDA
            </span>
            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[#3a4a50] md:block"
            />
            <span className="font-mono text-[10px] tracking-[0.6px] text-[#8a9ba1]">
              Seluruh hak cipta.
            </span>
          </div>

          <div className="flex items-center gap-[8px]">
            <span className="font-mono text-[10px] tracking-[0.6px] text-[#8a9ba1]">
              POWERED BY
            </span>
            <img
              src="/logo-bem.webp"
              alt="Logo BEM FILKOM UNIDA"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              className="h-5 w-5 object-contain"
            />
            <span className="font-mono text-[10px] tracking-[0.6px] text-[#a0b0b6]">
              BEM FILKOM UNIDA
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}