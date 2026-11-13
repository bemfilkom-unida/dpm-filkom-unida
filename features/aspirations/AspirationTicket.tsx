import type { AspirationFormValues } from './model'

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="font-mono text-[10px] text-[#4a5a60]">{label}</span>
      <span className="text-[13px] text-[#164653]">{value || '—'}</span>
    </div>
  )
}

/** Live preview of the ticket the form would produce. */
export function AspirationTicket({ values }: { values: AspirationFormValues }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#164653] bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[1.1px] text-[#E78E3F]">
          TIKET #ADU-001
        </span>
        <span className="rounded-full bg-[#2BB3BD] px-3 py-1 text-[10px] font-medium text-[#0B2E36]">
          DIPROSES
        </span>
      </div>
      <div className="flex flex-col gap-2 border-t border-[#c5cdd1] pt-4">
        <Row label="NAMA" value={values.nama} />
        <Row label="NIM" value={values.nim} />
        <Row label="KOMISI" value={values.komisi} />
        <Row label="TOPIK" value={values.topik} />
      </div>
      <div className="rounded-xl bg-[#DCE2E6] p-4">
        <p className="m-0 text-[12px] leading-[1.5] text-[#4a5a60]">
          {values.isi || 'Isi aduan akan tampil di sini...'}
        </p>
      </div>
      <p className="m-0 text-[11px] text-[#4a5a60]">
        Aduan akan ditindaklanjuti oleh komisi terkait.
      </p>
    </div>
  )
}
