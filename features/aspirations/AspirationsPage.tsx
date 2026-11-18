import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import PageShell from '../../components/layout/PageShell'
import { PageHero } from '../../components/ui/PageHero'
import { SectionBar } from '../../components/ui/SectionBar'
import { AspirationForm } from './AspirationForm'
import { AspirationTicket } from './AspirationTicket'
import { EMPTY_ASPIRATION, type AspirationFormValues } from './model'
import type { FormFeedback } from './AspirationForm'
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from './whatsapp'

export default function AspirationsPage() {
  const [values, setValues] = useState<AspirationFormValues>(EMPTY_ASPIRATION)
  const [feedback, setFeedback] = useState<FormFeedback | null>(null)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!WHATSAPP_NUMBER) {
      console.error(
        'VITE_WHATSAPP_NUMBER belum diisi. Set nomor WhatsApp secretariat DPM (format 62812...) di .env.',
      )
      setFeedback({
        ok: false,
        text: 'Nomor WhatsApp DPM belum dikonfigurasi. Hubungi sekretariat.',
      })
      return
    }

    // `noopener,noreferrer` membuat window.open mengembalikan null, jadi tidak
    // ada cara membedakan popup yang diblokir. Pesan tetap informatif.
    window.open(buildWhatsAppUrl(values), '_blank', 'noopener,noreferrer')
    setFeedback({ ok: true, text: 'Aduan dibuka di WhatsApp. Kirim pesannya untuk melanjutkan.' })
  }

  return (
    <PageShell>
      <PageHero
        kicker="ADUAN"
        title="Surat aduan mahasiswa."
        description="Sampaikan aspirasi, aduan, atau masukan Anda kepada DPM FILKOM UNIDA."
        caption="ADUAN"
      />

      <section className="grid grid-cols-1 gap-8 px-4 md:px-8 pb-8 md:grid-cols-2 md:items-stretch">
        <div data-scroll className="flex flex-col">
          <SectionBar label="FORM ADUAN" />
          <div className="rounded-2xl border border-border bg-surface p-8">
            <AspirationForm
              values={values}
              onChange={handleChange}
              onSubmit={handleSubmit}
              feedback={feedback}
            />
          </div>
        </div>

        <div data-scroll className="flex flex-col">
          <SectionBar label="TIKET ADUAN" />
          <AspirationTicket values={values} />
        </div>
      </section>
    </PageShell>
  )
}
