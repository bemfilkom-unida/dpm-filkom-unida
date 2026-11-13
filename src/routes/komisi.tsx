import { createFileRoute } from '@tanstack/react-router'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/komisi')({
  component: Komisi,
  head: () =>
    pageHead({
      title: 'Komisi DPM FILKOM UNIDA | Pengawasan, Aspirasi dan Legislasi',
      description:
        'Tiga komisi DPM FILKOM UNIDA periode 2026/2027: Komisi I Pengawasan, Komisi II Aspirasi dan Legislasi, serta Komisi III Humas dan Kominfo Fakultas Ilmu Komputer Universitas Djuanda.',
      path: '/komisi',
      breadcrumb: 'Komisi',
    }),
})

const commissions = [
  { name: 'Komisi I', scope: 'Pengawasan' },
  { name: 'Komisi II', scope: 'Aspirasi & Legislasi' },
  { name: 'Komisi III', scope: 'Humas & Kominfo' },
]

function Komisi() {
  return (
    <div className="min-h-screen bg-[#DCE2E6] text-[#1E2B30]">
      <Nav />
      <main id="main">
      <section className="flex flex-col gap-16 px-4 md:px-8 pt-[46px] pb-8 md:flex-row">
        <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
          <span data-scroll className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">KOMISI</span>
          <h1 data-scroll className="max-w-full md:w-[470px] text-[44px] font-medium leading-[1.1] tracking-[-1.6px] text-[#164653]">
            Tiga komisi, satu tujuan.
          </h1>
          <p data-scroll className="max-w-full md:w-[430px] text-[14px] leading-[1.6] text-[#4a5a60]">
            DPM FILKOM UNIDA bekerja melalui tiga komisi yang saling melengkapi
            dalam menjalankan fungsi perwakilan mahasiswa.
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
            <span className="font-mono text-[10px] tracking-[1.2px] text-white/70">03 KOMISI</span>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-8">
        <div className="mb-4 flex items-center justify-between border-b border-[#c5cdd1] pb-2">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">DAFTAR KOMISI</span>
          <span className="font-mono text-[10px] tracking-[0.6px] text-[#4a5a60]">03 komisi</span>
        </div>
        <div className="flex w-full flex-col scroll-stagger md:w-[720px]">
          {commissions.map((c, i) => (
            <div
              key={c.name}
              data-scroll
              className="flex items-center justify-between border-b border-[#c5cdd1] py-[18px] transition hover:border-[#2BB3BD]"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.6px] text-[#4a5a60]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] font-medium tracking-[-0.4px] text-[#164653]">{c.name}</span>
                  <span className="font-mono text-[10px] tracking-[1.1px] text-[#E78E3F]">{c.scope.toUpperCase()}</span>
                </div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c5cdd1" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          ))}
        </div>
        <div data-scroll className="mt-8 rounded-2xl border border-dashed border-[#c5cdd1] bg-white p-8 text-center">
          <p className="m-0 text-[13px] text-[#4a5a60]">
            Detail anggota & program komisi akan ditampilkan di sini setelah data tersedia.
          </p>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  )
}
