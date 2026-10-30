# Meșter la Tine Acasă · Sibiu

Landing page de prezentare pentru servicii handyman în Sibiu și împrejurimi.

**Brand:** Meșter la Tine Acasă  
**Contact:** Iulian · WhatsApp / telefon  
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Lucide · SVG

## Status

Phase 1–2 complete: design system + project scaffold.  
Landing page sections, SEO full, tracking și deploy urmează în fazele următoare.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — currently shows the design system preview.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |

## Environment

Copy `.env.example` to `.env.local` and fill values when needed:

- `NEXT_PUBLIC_SITE_URL` — canonical / OG base URL
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (optional; disabled if empty)

Never commit `.env.local` or secrets.

## Project structure

```
src/
  app/                 # App Router (layout, page, globals)
  components/
    layout/            # Header, MobileNav, StickyContactBar
    sections/          # Hero, Services, HowWeWork, ServiceArea, Contact
    illustrations/     # Flat vector SVG components
    ui/                # Logo, CTA buttons
  lib/                 # contact, whatsapp, phone, meta-pixel helpers
  styles/              # Design tokens (CSS variables)
```

## Design reference

Approved visual reference: `docs-reference.jpg` (local, not for production UI).

## Contact helpers

All WhatsApp buttons must use `getWhatsAppUrl()` from `src/lib/whatsapp.ts`.  
All phone buttons must use `getPhoneUrl()` from `src/lib/phone.ts`.

## Deploy notes

GitHub remote and Vercel deployment are intentionally not configured yet.
