import type { AspirationFormValues } from './model'

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="font-mono text-[10px] text-muted">{label}</span>
      <span className="text-[13px] text-heading">{value || '—'}</span>
    </div>
  )
}

/** Live preview of the ticket the form would produce. */
export function AspirationTicket({ values }: { values: AspirationFormValues }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-panel bg-surface p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[1.1px] text-warm">
          TIKET #ADU-001
        </span>
        <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-medium text-on-accent">
          DIPROSES
        </span>
      </div>
      <div className="flex flex-col gap-2 border-t border-border pt-4">
        <Row label="NAMA" value={values.nama} />
        <Row label="NIM" value={values.nim} />
        <Row label="KOMISI" value={values.komisi} />
        <Row label="TOPIK" value={values.topik} />
      </div>
      <div className="rounded-xl bg-bg p-4">
        <p className="m-0 text-[12px] leading-[1.5] text-muted">
          {values.isi || 'Isi aduan akan tampil di sini...'}
        </p>
      </div>
      <p className="m-0 text-[11px] text-muted">
        Aduan akan ditindaklanjuti oleh komisi terkait.
      </p>
    </div>
  )
}
