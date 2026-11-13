import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import type { AspirationFormValues } from './model'

const INPUT_CLASS =
  'rounded-xl border border-[#c5cdd1] bg-[#DCE2E6] px-4 py-3 text-[14px] text-[#1E2B30] outline-none focus:border-[#2BB3BD]'

const LABEL_CLASS = 'font-mono text-[10px] tracking-[1.1px] text-[#4a5a60]'

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      {children}
    </div>
  )
}

export function AspirationForm({
  values,
  onChange,
  onSubmit,
}: {
  values: AspirationFormValues
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onSubmit: (event: FormEvent) => void
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Field id="aduan-nama" label="NAMA">
        <input
          id="aduan-nama"
          name="nama"
          autoComplete="name"
          value={values.nama}
          onChange={onChange}
          required
          className={INPUT_CLASS}
          placeholder="Nama lengkap"
        />
      </Field>

      <Field id="aduan-nim" label="NIM">
        <input
          id="aduan-nim"
          name="nim"
          inputMode="numeric"
          autoComplete="username"
          value={values.nim}
          onChange={onChange}
          required
          className={INPUT_CLASS}
          placeholder="NIM"
        />
      </Field>

      <Field id="aduan-komisi" label="KOMISI TUJUAN">
        <select
          id="aduan-komisi"
          name="komisi"
          value={values.komisi}
          onChange={onChange}
          className={INPUT_CLASS}
        >
          <option>Komisi I — Pengawasan</option>
          <option>Komisi II — Aspirasi &amp; Legislasi</option>
          <option>Komisi III — Humas &amp; Kominfo</option>
        </select>
      </Field>

      <Field id="aduan-topik" label="TOPIK">
        <input
          id="aduan-topik"
          name="topik"
          value={values.topik}
          onChange={onChange}
          required
          className={INPUT_CLASS}
          placeholder="Topik aduan"
        />
      </Field>

      <Field id="aduan-isi" label="ISI ADUAN">
        <textarea
          id="aduan-isi"
          name="isi"
          value={values.isi}
          onChange={onChange}
          required
          rows={5}
          className={INPUT_CLASS}
          placeholder="Tuliskan aduan Anda..."
        />
      </Field>

      <button
        type="submit"
        className="self-start rounded-full bg-[#2BB3BD] px-[22px] py-[13px] text-[13px] font-medium text-[#0B2E36]"
      >
        Kirim Aduan
      </button>
    </form>
  )
}
