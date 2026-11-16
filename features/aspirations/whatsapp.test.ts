import { describe, expect, it } from 'vitest'
import type { AspirationFormValues } from './model'
import {
  buildComplaintMessage,
  buildWhatsAppUrl,
  normalizeWhatsAppNumber,
  WHATSAPP_NUMBER,
} from './whatsapp'

const VALUES: AspirationFormValues = {
  nama: '  Yasin  ',
  nim: ' 13220123 ',
  komisi: 'Komisi III — Humas & Kominfo',
  topik: '  WiFi kampus ',
  isi: '  WiFi di lantai 3 sering putus.  ',
}

describe('normalizeWhatsAppNumber', () => {
  it('membuang +, spasi, dan tanda hubung', () => {
    expect(normalizeWhatsAppNumber('+62 812-3456-7890')).toBe('6281234567890')
  })
})

describe('WHATSAPP_NUMBER', () => {
  it('memakai nomor secretariat default berformat internasional', () => {
    expect(WHATSAPP_NUMBER).toBe('6288210555341')
  })
})

describe('buildComplaintMessage', () => {
  it('menyusun surat aduan lengkap dan men-trim tiap field', () => {
    const message = buildComplaintMessage(VALUES)

    expect(message).toContain('*SURAT ADUAN MAHASISWA — DPM FILKOM UNIDA*')
    expect(message).toContain('Nama: Yasin\n')
    expect(message).toContain('NIM: 13220123\n')
    expect(message).toContain('Komisi Tujuan: Komisi III — Humas & Kominfo\n')
    expect(message).toContain('Topik: WiFi kampus\n')
    expect(message.endsWith('WiFi di lantai 3 sering putus.')).toBe(true)
  })

  it('membatasi panjang pesan', () => {
    const message = buildComplaintMessage({ ...VALUES, isi: 'x'.repeat(5000) })

    expect(message.length).toBeLessThanOrEqual(3000)
    expect(message.endsWith('…')).toBe(true)
  })
})

describe('buildWhatsAppUrl', () => {
  it('menghasilkan URL wa.me yang ter-encode dengan semua field', () => {
    const url = buildWhatsAppUrl(VALUES, '6281234567890')
    const [, query] = url.split('?text=')

    expect(url.startsWith('https://wa.me/6281234567890?text=')).toBe(true)
    expect(query).not.toMatch(/[ ]/)

    const decoded = decodeURIComponent(query)
    expect(decoded).toContain('Nama: Yasin')
    expect(decoded).toContain('Komisi Tujuan: Komisi III — Humas & Kominfo')
    expect(decoded).toContain('Isi Aduan:\nWiFi di lantai 3 sering putus.')
  })
})
