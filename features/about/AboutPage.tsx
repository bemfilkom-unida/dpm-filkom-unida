import { Link } from '@tanstack/react-router'
import PageShell from '../../components/layout/PageShell'
import { ArrowUpRight } from '../../components/ui/icons'
import { PageHero } from '../../components/ui/PageHero'
import { SectionBar } from '../../components/ui/SectionBar'
import { commissions } from '../../data/commissions'

const roles = ['Aspirasi mahasiswa', 'Kebijakan fakultas', 'Akuntabilitas', 'Advokasi']

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        kicker="TENTANG KAMI"
        title="Lembaga perwakilan mahasiswa FILKOM."
        description="Legislatif & perwakilan mahasiswa. Menyalurkan aspirasi, mengawal kebijakan, menjaga akuntabilitas."
        caption="DPM FILKOM UNIDA"
      />

      <section className="px-4 md:px-8 pb-8">
        <SectionBar
          label="PERAN KAMI"
          meta={
            <span className="font-mono text-[10px] tracking-[0.6px] text-muted">
              04 peran
            </span>
          }
        />
        <div className="flex w-full flex-col scroll-stagger md:w-[640px]">
          {roles.map((role, index) => (
            <div
              key={role}
              data-scroll
              className="flex items-center justify-between border-b border-border py-[14px] transition hover:border-primary"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.6px] text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-heading">{role}</span>
              </div>
              <ArrowUpRight stroke="var(--color-border)" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-8">
        <SectionBar
          label="KOMISI"
          meta={
            <Link to="/komisi" className="text-[11px] text-muted hover:text-heading">
              Lihat detail →
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 scroll-stagger md:grid-cols-3">
          {commissions.map((commission) => (
            <div
              key={commission.name}
              data-scroll
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition hover:border-primary"
            >
              <span className="font-mono text-[10px] tracking-[1.1px] text-warm">
                {commission.name.toUpperCase()}
              </span>
              <h3 className="text-[20px] font-medium tracking-[-0.4px] text-heading">
                {commission.name}
              </h3>
              <p className="m-0 text-[14px] text-muted">{commission.scope}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
