import PageShell from '../../components/layout/PageShell'
import { activities } from '../../data/activities'

export default function ActivitiesPage() {
  return (
    <PageShell>
      <section className="px-4 md:px-8 pt-[46px] pb-8">
        <div className="mb-4 flex items-center gap-2">
          <span
            data-scroll
            className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]"
          >
            KEGIATAN
          </span>
        </div>
        <h1
          data-scroll
          className="max-w-full md:w-[720px] text-[52px] font-medium leading-[1.05] tracking-[-1.8px] text-[#164653]"
        >
          Dua agenda utama DPM.
        </h1>
        <p
          data-scroll
          className="mt-6 max-w-full md:w-[640px] text-[16px] leading-[1.6] text-[#4a5a60]"
        >
          Musyawarah Kerja dan Musyawarah Besar adalah kegiatan utama DPM FILKOM UNIDA dalam
          menjalankan fungsi perwakilan mahasiswa.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 gap-4 scroll-stagger md:grid-cols-2">
          {activities.map((activity) => (
            <div
              key={activity.short}
              data-scroll
              className="flex flex-col gap-4 rounded-2xl border border-[#c5cdd1] bg-white p-8 transition hover:border-[#2BB3BD]"
            >
              <span className="font-mono text-[10px] tracking-[1.1px] text-[#2BB3BD]">
                {activity.short}
              </span>
              <h2 className="text-[28px] font-medium tracking-[-0.8px] text-[#164653]">
                {activity.name}
              </h2>
              <p className="m-0 text-[14px] leading-[1.6] text-[#4a5a60]">
                Agenda organisasi DPM FILKOM UNIDA.
              </p>
              <div className="mt-auto rounded-xl border border-dashed border-[#c5cdd1] bg-[#DCE2E6] p-4 text-center">
                <p className="m-0 text-[12px] text-[#4a5a60]">
                  Jadwal, lokasi, dan materi akan ditampilkan di sini.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
