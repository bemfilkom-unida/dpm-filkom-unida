export interface AgendaItem {
  date: string
  name: string
}

export interface Capability {
  idx: string
  label: string
  meta: string
}

export interface CodeLine {
  text: string
  className: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const agenda: AgendaItem[] = [
  { date: '26/27', name: 'Musyawarah Kerja' },
  { date: '26/27', name: 'Mengawal Organisasi' },
  { date: '26/27', name: 'Mengkaji Aspirasi' },
  { date: '26/27', name: 'Musyawarah Besar' },
]

export const capabilities: Capability[] = [
  { idx: '01', label: 'Aspirasi dan advokasi', meta: 'Diperjuangkan' },
  { idx: '02', label: 'Pengawasan anggaran', meta: 'Transparan' },
  { idx: '03', label: 'Kegiatan mahasiswa', meta: '25 program' },
  { idx: '04', label: 'Publikasi & dokumen', meta: 'Arsip terbuka' },
]

export const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Mahasiswa aktif' },
  { value: 3, suffix: '', label: 'Aspirasi ditangani' },
  { value: 10, suffix: '', label: 'Kegiatan per tahun' },
  { value: 80, suffix: '%', label: 'Tindak lanjut' },
]

/** Terminal transcript typed out by the "Sistem" card. */
export const codeLines: CodeLine[] = [
  { text: '$ dpm aspirasi --list', className: 'text-ink-muted' },
  { text: '', className: 'text-terminal' },
  { text: 'GET /api/v1/aspirasi', className: 'text-terminal-bright' },
  { text: '200 OK · 128 entri', className: 'text-warm' },
  { text: '', className: 'text-terminal' },
  { text: 'ID · TOPIK · STATUS', className: 'text-muted' },
  { text: 'A-012 · Kebijakan · selesai', className: 'text-terminal' },
  { text: 'A-013 · Fasilitas · diproses', className: 'text-terminal' },
  { text: 'A-014 · Kurikulum · baru', className: 'text-terminal' },
]

export const CODE_TOTAL = codeLines.reduce((sum, line) => sum + line.text.length, 0)

export const CODE_OFFSETS = codeLines.map((_, index) =>
  codeLines.slice(0, index).reduce((sum, line) => sum + line.text.length, 0),
)
