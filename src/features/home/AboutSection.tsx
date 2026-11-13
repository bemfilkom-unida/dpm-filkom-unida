import { capabilities } from '../../data/home'

const GRADIENT = 'linear-gradient(135deg, #44C2D6 0%, #2BB3BD 45%, #164653 100%)'

const snippet = [
  'aspirasi.submit({',
  '  topik: "Fasilitas",',
  '  ruang: "Smart Class 4",',
  '  urgensi: "tinggi",',
  '})',
  '',
  '→ tiket #A-013 dibuat · 1.2s',
]

const steps = ['Diterima', 'Diverifikasi', 'Komisi III', 'Selesai']

function snippetColor(line: string) {
  if (line.startsWith('→')) return '#164653'
  if (line.includes('urgensi')) return '#DCE2E6'
  return '#ffffff'
}

export function AboutSection() {
  return (
    <section className="reveal flex flex-col gap-16 px-4 py-7 md:flex-row md:px-8">
      <div className="flex w-full flex-col gap-[18px] md:w-[540px]">
        <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">
          TENTANG KAMI
        </span>
        <h2 className="max-w-full text-[32px] font-medium leading-[1.1] tracking-[-1.2px] text-[#164653] md:text-[44px] md:tracking-[-1.6px] md:max-w-[470px]">
          Ruang Aspirasi
          <br />
          Mahasiswa.
        </h2>
        <p className="max-w-full text-[14px] leading-[1.6] text-[#4a5a60] md:max-w-[430px]">
          DPM FILKOM UNIDA
        </p>
        <div className="flex w-full flex-col md:w-[470px]">
          {capabilities.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-b border-[#c5cdd1] py-[13px]"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.6px] text-[#4a5a60]">
                  {item.idx}
                </span>
                <span className="text-[14px] text-[#164653]">{item.label}</span>
              </div>
              <span className="font-mono text-[10.5px] text-[#4a5a60]">{item.meta}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 overflow-hidden rounded-[20px]"
        style={{ height: 520, background: GRADIENT }}
      >
        <div className="absolute left-7 top-[26px] flex w-[520px] flex-col">
          {snippet.map((line, index) => (
            <span
              key={index}
              className="font-mono text-[12px] leading-[1.75]"
              style={{ color: snippetColor(line) }}
            >
              {line || '\u00A0'}
            </span>
          ))}
        </div>
        <div className="absolute left-14 top-[352px] w-[420px] rounded-[14px] bg-white p-4 shadow-[0_12px_32px_rgba(22,70,83,0.2)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[9.5px] tracking-[1px] text-[#4a5a60]">
              STATUS ASPIRASI #A-013
            </span>
            <span className="font-mono text-[9px] tracking-[0.8px] text-[#E78E3F]">
              DIPROSES
            </span>
          </div>
          <h3 className="mb-3 text-[15px] font-medium text-[#164653]">
            Fasilitas ruang kelas SC 4
          </h3>
          <div className="mb-3 flex flex-wrap items-center gap-[6px]">
            {steps.map((step, index) => (
              <span
                key={step}
                className="flex items-center gap-[6px] rounded-full px-[9px] py-[5px] text-[10px] font-mono"
                style={{
                  background: index < 3 ? '#DCE2E6' : '#ffffff',
                  border: index < 3 ? '1px solid #DCE2E6' : '1px solid #c5cdd1',
                  color: index < 3 ? '#164653' : '#4a5a60',
                }}
              >
                <span
                  className="h-[5px] w-[5px] rounded-full"
                  style={{ background: index < 3 ? '#E78E3F' : '#c5cdd1' }}
                />
                {step}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#4a5a60]">
              Respons Komisi III · 2 hari kerja
            </span>
            <span className="rounded-full bg-[#2BB3BD] px-3 py-[7px] text-[11px] font-medium text-[#0B2E36]">
              Lacak
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
