import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { ScrollFx, ScrollProgress } from '../components/ScrollEffects'
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  siteGraph,
} from '../lib/seo'

/**
 * Isi VITE_GOOGLE_SITE_VERIFICATION di dashboard Vercel (Settings -> Environment
 * Variables) untuk verifikasi Google Search Console. Prefix VITE_ membuat nilai
 * yang sama dipakai server dan client, sehingga tidak ada hydration mismatch.
 * Tidak ada token palsu yang di-hardcode.
 */
const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION

const SITE_DESCRIPTION =
  'Website resmi Dewan Perwakilan Mahasiswa (DPM) Fakultas Ilmu Komputer Universitas Djuanda Bogor periode 2026/2027. Kenali Parlemen Aksara, struktur organisasi, komisi, aspirasi, dan kegiatan DPM FILKOM UNIDA.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: SITE_NAME,
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      {
        name: 'theme-color',
        content: '#164653',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: SITE_NAME,
      },
      {
        property: 'og:title',
        content: SITE_NAME,
      },
      {
        property: 'og:description',
        content: SITE_DESCRIPTION,
      },
      {
        property: 'og:locale',
        content: 'id_ID',
      },
      {
        property: 'og:image',
        content: DEFAULT_OG_IMAGE,
      },
      {
        property: 'og:image:type',
        content: 'image/webp',
      },
      {
        property: 'og:image:width',
        content: String(OG_IMAGE_WIDTH),
      },
      {
        property: 'og:image:height',
        content: String(OG_IMAGE_HEIGHT),
      },
      {
        property: 'og:image:alt',
        content: 'DPM FILKOM UNIDA — Parlemen Aksara 2026/2027',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:image',
        content: DEFAULT_OG_IMAGE,
      },
      ...(GOOGLE_SITE_VERIFICATION
        ? [
            {
              name: 'google-site-verification',
              content: GOOGLE_SITE_VERIFICATION,
            },
          ]
        : []),
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(siteGraph()),
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.png',
        type: 'image/png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
        <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">404</span>
        <h1 className="text-[44px] font-medium tracking-[-1.6px] text-[#164653]">Halaman tidak ditemukan.</h1>
        <Link
          to="/"
          className="rounded-full bg-[#2BB3BD] px-[22px] py-[13px] text-[13px] font-medium text-[#0B2E36]"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-[#164653] px-4 py-2 text-[13px] text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Lompat ke konten
        </a>
        <ScrollProgress />
        <ScrollFx />
        {children}
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
