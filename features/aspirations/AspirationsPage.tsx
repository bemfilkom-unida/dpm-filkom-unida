import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import PageShell from '../../components/layout/PageShell'
import { PageHero } from '../../components/ui/PageHero'
import { SectionBar } from '../../components/ui/SectionBar'
import { AspirationForm } from './AspirationForm'
import { AspirationTicket } from './AspirationTicket'
import { EMPTY_ASPIRATION, type AspirationFormValues } from './model'

export default function AspirationsPage() {
  const [values, setValues] = useState<AspirationFormValues>(EMPTY_ASPIRATION)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event: FormEvent) {
    // No backend endpoint yet: the ticket preview updates as the user types.
    event.preventDefault()
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
          <div className="rounded-2xl border border-[#c5cdd1] bg-white p-8">
            <AspirationForm
              values={values}
              onChange={handleChange}
              onSubmit={handleSubmit}
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
