import PageShell from '../../components/layout/PageShell'
import { ArrowUpRight } from '../../components/ui/icons'
import { PageHero } from '../../components/ui/PageHero'
import { SectionBar } from '../../components/ui/SectionBar'
import { commissions } from '../../data/commissions'

export default function CommissionsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="KOMISI"
        title="Tiga komisi, satu tujuan."
        description="DPM FILKOM UNIDA bekerja melalui tiga komisi yang saling melengkapi dalam menjalankan fungsi perwakilan mahasiswa."
        caption="03 KOMISI"
      />

      <section className="px-4 md:px-8 pb-8">
        <SectionBar
          label="DAFTAR KOMISI"
          meta={
            <span className="font-mono text-[10px] tracking-[0.6px] text-muted">
              03 komisi
            </span>
          }
        />
        <div className="flex w-full flex-col scroll-stagger md:w-[720px]">
          {commissions.map((commission, index) => (
            <div
              key={commission.name}
              data-scroll
              className="flex items-center justify-between border-b border-border py-[18px] transition hover:border-primary"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.6px] text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] font-medium tracking-[-0.4px] text-heading">
                    {commission.name}
                  </span>
                  <span className="font-mono text-[10px] tracking-[1.1px] text-warm">
                    {commission.scope.toUpperCase()}
                  </span>
                </div>
              </div>
              <ArrowUpRight stroke="var(--color-border)" />
            </div>
          ))}
        </div>
        <div
          data-scroll
          className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-8 text-center"
        >
          <p className="m-0 text-[13px] text-muted">
            Detail anggota &amp; program komisi akan ditampilkan di sini setelah data tersedia.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
