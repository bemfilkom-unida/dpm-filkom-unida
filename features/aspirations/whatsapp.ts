import type { AspirationFormValues } from './model'

/** Nomor secretariat DPM, format internasional tanpa `+`. */
const DEFAULT_WHATSAPP_NUMBER = '6288210555341'

/**
 * Nomor WhatsApp tujuan aduan: env `VITE_WHATSAPP_NUMBER` bila diisi, kalau tidak
 * pakai nomor secretariat di atas.
 */
export const WHATSAPP_NUMBER = normalizeWhatsAppNumber(
  import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER,
)

/** Batas karakter pesan: WhatsApp memotong `text` yang terlalu panjang. */
const MAX_MESSAGE_LENGTH = 3000

/** Format internasional tanpa `+`, spasi, atau tanda hubung: `62812...`. */
export function normalizeWhatsAppNumber(raw: string) {
  return raw.replace(/\D/g, '')
}

/** Pesan aduan siap kirim, tiap field di-trim dan total dibatasi. */
export function buildComplaintMessage(values: AspirationFormValues) {
  const message = [
    '*SURAT ADUAN MAHASISWA — DPM FILKOM UNIDA*',
    '',
    `Nama: ${values.nama.trim()}`,
    `NIM: ${values.nim.trim()}`,
    `Komisi Tujuan: ${values.komisi.trim()}`,
    `Topik: ${values.topik.trim()}`,
    '',
    'Isi Aduan:',
    values.isi.trim(),
  ].join('\n')

  return message.length > MAX_MESSAGE_LENGTH
    ? message.slice(0, MAX_MESSAGE_LENGTH - 1).trimEnd() + '…'
    : message
}

/** URL `wa.me` yang membuka WhatsApp (app di mobile, WhatsApp Web di desktop). */
export function buildWhatsAppUrl(values: AspirationFormValues, number = WHATSAPP_NUMBER) {
  const message = buildComplaintMessage(values)
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
