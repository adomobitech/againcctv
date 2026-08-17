# Best CCTV Experts — Next.js Website

Exact clone of the reference design, built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. All content is hardcoded (see `data/siteData.ts`) and all graphics (logo mark, camera illustration, icons) are hand-built inline SVG components — no external image downloads.

## Structure
- `app/page.tsx` — assembles all sections
- `app/layout.tsx`, `app/globals.css` — root layout + theme tokens (navy `#12151c`, gold `#f2b705`)
- `components/` — Header, Hero, Services, Products, WhyChooseUs, RecentWork, Testimonials, Footer, Icons, CameraIllustration
- `data/siteData.ts` — all hardcoded text/content (edit here to change copy)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm run start
```
