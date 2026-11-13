import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/berita')({
  component: Berita,
  head: () =>
    pageHead({
      title: 'Berita DPM FILKOM UNIDA | Informasi dan Pengumuman 2026/2027',
      description:
        'Informasi, pengumuman, dan kabar terbaru dari Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda Bogor periode 2026/2027.',
      path: '/berita',
      breadcrumb: 'Berita',
    }),
})

function Berita() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <main id="main">
      <section className="flex flex-col gap-16 px-4 md:px-8 pt-[46px] pb-8 md:flex-row">
        <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
          <span data-scroll className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">BERITA</span>
          <h1 data-scroll className="max-w-full md:w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#164653]">
            Kabar DPM FILKOM.
          </h1>
          <p data-scroll className="max-w-full md:w-[430px] text-[14px] leading-[1.6] text-[#4a5a60]">
            Informasi dan pembaruan terbaru dari DPM FILKOM UNIDA.
          </p>
        </div>
        <div
          className="relative hidden flex-1 overflow-hidden rounded-[20px] md:block"
          style={{
            minHeight: 320,
            background: 'linear-gradient(135deg, #44C2D6 0%, #2BB3BD 45%, #164653 100%)',
          }}
        >
          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[10px] tracking-[1.2px] text-white/70">BERITA</span>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-8">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">ARSIP BERITA</span>
          <span className="text-[11px] text-[#4a5a60]">Segera hadir</span>
        </div>
        <div data-scroll className="rounded-2xl border border-dashed border-[#c5cdd1] bg-white p-10 text-center">
          <p className="m-0 text-[14px] text-[#4a5a60]">
            Berita dan pengumuman akan ditampilkan di sini setelah tersedia.
          </p>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  )
}
