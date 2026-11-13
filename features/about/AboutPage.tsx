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
            <span className="font-mono text-[10px] tracking-[0.6px] text-[#4a5a60]">
              04 peran
            </span>
          }
        />
        <div className="flex w-full flex-col scroll-stagger md:w-[640px]">
          {roles.map((role, index) => (
            <div
              key={role}
              data-scroll
              className="flex items-center justify-between border-b border-[#c5cdd1] py-[14px] transition hover:border-[#2BB3BD]"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.6px] text-[#4a5a60]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-[#164653]">{role}</span>
              </div>
              <ArrowUpRight stroke="#c5cdd1" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-8">
        <SectionBar
          label="KOMISI"
          meta={
            <Link to="/komisi" className="text-[11px] text-[#4a5a60] hover:text-[#164653]">
              Lihat detail →
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 scroll-stagger md:grid-cols-3">
          {commissions.map((commission) => (
            <div
              key={commission.name}
              data-scroll
              className="flex flex-col gap-3 rounded-2xl border border-[#c5cdd1] bg-white p-6 transition hover:border-[#2BB3BD]"
            >
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#E78E3F]">
                {commission.name.toUpperCase()}
              </span>
              <h3 className="text-[20px] font-medium tracking-[-0.4px] text-[#164653]">
                {commission.name}
              </h3>
              <p className="m-0 text-[14px] text-[#4a5a60]">{commission.scope}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
