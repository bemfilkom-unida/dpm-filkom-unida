import PageShell from '../../components/layout/PageShell'
import { PageHero } from '../../components/ui/PageHero'
import { SectionBar } from '../../components/ui/SectionBar'

export default function NewsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="BERITA"
        title="Kabar DPM FILKOM."
        description="Informasi dan pembaruan terbaru dari DPM FILKOM UNIDA."
        caption="BERITA"
      />

      <section className="px-4 md:px-8 pb-8">
        <SectionBar
          label="ARSIP BERITA"
          meta={<span className="text-[11px] text-[#4a5a60]">Segera hadir</span>}
        />
        <div
          data-scroll
          className="rounded-2xl border border-dashed border-[#c5cdd1] bg-white p-10 text-center"
        >
          <p className="m-0 text-[14px] text-[#4a5a60]">
            Berita dan pengumuman akan ditampilkan di sini setelah tersedia.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
