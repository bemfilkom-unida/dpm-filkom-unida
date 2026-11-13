# DPM FILKOM UNIDA

Situs profil organisasi Dewan Perwakilan Mahasiswa (DPM) Fakultas Ilmu Komputer Universitas Djuanda — monochrome editorial dengan aksen oranye.

## Stack

| Layer | Teknologi |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR full-stack) |
| UI | React 19 + TypeScript |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 (via `@tailwindcss/vite`) |
| Animasi | [Motion](https://motion.dev/) |
| Build/Dev | Vite 8 |
| Server | [Nitro](https://v3.nitro.build/) |
| Test | Vitest + Testing Library (jsdom) |
| Fonts | Inter (sans) + Geist Mono (mono) |

## Getting Started

```bash
bun install
bun run dev
```

Dev server berjalan di `http://localhost:3000`.

## Scripts

| Command | Fungsi |
|---|---|
| `bun run dev` | Jalankan dev server (port 3000) |
| `bun run build` | Build produksi |
| `bun run preview` | Preview hasil build |
| `bun run test` | Jalankan unit test (Vitest) |
| `bun run typecheck` | Cek tipe dengan `tsc --noEmit` |
| `bun run verify` | typecheck + test + build sekaligus |
| `bun run start` | Jalankan hasil build (`.output/server/index.mjs`) |

Semua command juga bisa dijalankan lewat `npm run <command>`.

## Building for Production

```bash
bun run build
bun run start
```

Build menghasilkan server Node self-contained di `.output/`. Deploy dengan cara push hasil build ke host (Render, Fly.io, VPS, Vercel, dll.) lalu jalankan server. Preset host lain tersedia di https://v3.nitro.build/deploy.

## Environment Variables

| Variabel | Fungsi |
|---|---|
| `VITE_GOOGLE_SITE_VERIFICATION` | Token verifikasi Google Search Console. Opsional; kalau kosong, meta tag tidak dirender. |

## Struktur Proyek

```
src/
├── routes/            # File-based routes (TanStack Router)
│   ├── __root.tsx     # Root layout, metadata global, JSON-LD, scroll effects
│   ├── index.tsx      # Beranda
│   ├── tentang.tsx    # Tentang
│   ├── aduan.tsx      # Aduan mahasiswa
│   ├── berita.tsx     # Berita
│   ├── kegiatan.tsx   # Kegiatan
│   └── komisi.tsx     # Komisi
├── components/        # Nav, SiteFooter, ScrollEffects
│   └── ui/            # Komponen teks animasi (DiaTextReveal)
├── lib/               # seo.ts (metadata & JSON-LD), utils.ts (cn)
├── test/setup.ts      # Setup Vitest + jest-dom
├── router.tsx         # Konfigurasi router
├── styles.css         # Tailwind + token design + efek scroll
└── routeTree.gen.ts   # Route tree (auto-generated)
```

## Fitur

- **Routing file-based** — tambah route baru dengan membuat file di `src/routes/`.
- **SSR** via TanStack Start + Nitro.
- **SEO** — title, description, canonical, Open Graph/Twitter, dan JSON-LD (Organization, WebSite, WebPage, BreadcrumbList) per halaman lewat `src/lib/seo.ts`; `robots.txt` dan `sitemap.xml` ada di `public/`.
- **Aksesibilitas** — skip link, landmark `main`/`nav` berlabel, label form terhubung, dan `prefers-reduced-motion` untuk semua animasi.
- **Scroll effects** — progress bar dan reveal on scroll (`ScrollEffects.tsx`), otomatis nonaktif saat reduced motion.
- **Devtools** — TanStack Router & Devtools panel (hanya aktif di dev).
- **Test** — Vitest + Testing Library, dijalankan dengan `bun run test`.

## Design

Design system dan token ada di `design.md` (monochrome editorial, warna brand FILKOM, tipografi Inter + Geist Mono).

## Learn More

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
