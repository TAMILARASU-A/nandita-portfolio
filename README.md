# Nandita K — Portfolio

A premium, recruiter-focused portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Framework preset: Next.js (auto-detected). No environment variables required.

## Before going live — placeholder checklist

All real content is centralized in `lib/data.ts`. Search that file for anything
in `[brackets]` — there are currently none left except:

- [ ] **Resume PDF**: add the file to `/public/` (e.g. `public/Nandita-K-Resume.pdf`)
      and update `resume.fileUrl` in `lib/data.ts` to `/Nandita-K-Resume.pdf`.
- [ ] **Profile photo** (optional): not currently used in the design, but if you'd
      like one added to the Hero section, drop it in `/public/` and let Tamilarasu
      know — the Hero component will need a small update to display it.
- [ ] **Resume preview**: currently a placeholder card in `components/Resume.tsx`.
      Once the PDF is added, this can be swapped for an embedded `<iframe>` or
      `react-pdf` viewer.

## Project structure

```
app/            Root layout, global styles, page composition
components/     One component per section (Hero, About, Education, ...)
components/ui/  Shared primitives (Card, Badge, SectionHeading, RevealOnScroll)
lib/data.ts     ALL editable content lives here — no content is hardcoded in components
```

## Design system

- **Colors**: Navy (`#0B1F3A`) primary, white/soft-gray surfaces, a single warm
  gold accent (`#B08D57`) used sparingly.
- **Type**: Fraunces (display/headings), Inter (body), IBM Plex Mono (labels,
  dates, categories).
- **Dark mode**: toggle in the navbar, persisted via `next-themes`.
- **Motion**: scroll-reveal fades only — no gimmicky animation, kept
  professional for an HR/MBA audience.
