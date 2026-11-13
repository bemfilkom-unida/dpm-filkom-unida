export interface AspirationFormValues {
  nama: string
  nim: string
  komisi: string
  topik: string
  isi: string
}

export const EMPTY_ASPIRATION: AspirationFormValues = {
  nama: '',
  nim: '',
  komisi: 'Komisi I — Pengawasan',
  topik: '',
  isi: '',
}
