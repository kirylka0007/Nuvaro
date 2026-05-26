# Nuvaro Marketing Website — Implementation Plan

## Context

Nuvaro is a new AI automation and process consulting company. This plan covers building their public marketing website from scratch: a polished, enterprise-grade SaaS site showcasing two products (Nuvaro Flow and Nuvaro Sync) under one brand. The site will be hosted on Vercel, connected to GitHub for CI/CD, and use Supabase to capture business enquiries with Resend email notifications.

**Design decisions already locked:**
- Palette: Dark navy (`#0F1E3C`) + blue-to-cyan brand gradient (`#1E7FD8 → #00D4FF`) matching the existing logo
- Hero layout: Centered brand + two equal product cards
- Product sections: Alternating text/visual split (Flow = text left, Sync = text right)
- Form stack: Supabase (`zkwllcmnqtpxvjaulkvz`) + Resend
- Analytics: Google Analytics 4 + UK GDPR cookie consent banner

---

## Repository & Infrastructure

- **GitHub:** https://github.com/kirylka0007/Nuvaro
- **Supabase project:** `zkwllcmnqtpxvjaulkvz` (org `wrunznczejzjnhxrhkwe`)
- **Vercel:** Auto-deploy on push to `main`; custom domain `nuvaro.co.uk` (DNS to be pointed after purchase)
- **Email:** Resend delivers to `kirylka0007@gmail.com` until `enquiries@nuvaro.co.uk` is live

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) + TypeScript | Vercel-native, API routes for form, SSG for pages |
| Styling | Tailwind CSS + custom design tokens | Rapid iteration, consistent palette |
| Animations | Framer Motion | Minimal fade-up on scroll only |
| Database | Supabase (Postgres) | Lead storage + future CRM view |
| Email | Resend | Simple API, reliable delivery, free tier |
| Analytics | Google Analytics 4 | Free, via `@next/third-parties` |
| Cookie consent | `react-cookie-consent` | Lightweight, UK GDPR compliant |
| Icons | `lucide-react` | Clean, consistent icon set |
| Fonts | Inter via `next/font/google` | Modern, legible, free |

---

## Implementation Steps

### Step 0 — Commit plan to GitHub
- Clone the repo locally, add this plan as `PLAN.md` in the root, commit and push to `main`

### Step 1 — Scaffold the Next.js project
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```
- Configure `tailwind.config.ts` with custom design tokens:
  - `navy.950: #071120`, `navy.900: #0A1628`, `navy.800: #0F1E3C`, `navy.700: #1E3A5F`
  - `brand.from: #1E7FD8`, `brand.to: #00D4FF`
  - `slate` text scale as-is
- Set `globals.css`: dark background, Inter font, smooth scroll
- Configure `next.config.ts`: image domains, GA script

### Step 2 — Set up Supabase leads table (via MCP)
Run via Supabase MCP tools against project `zkwllcmnqtpxvjaulkvz`:
```sql
create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  product     text check (product in ('flow', 'sync', 'both')),
  message     text,
  source      text default 'contact_form'
);

-- Lock down public access; only service role can insert
alter table leads enable row level security;
create policy "service_role_only" on leads
  using (false)
  with check (false);
```
- Copy `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from project settings for Vercel env vars

### Step 3 — Environment variables
Create `.env.local` (gitignored):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SUPABASE_URL=https://zkwllcmnqtpxvjaulkvz.supabase.co
SUPABASE_SERVICE_KEY=<service_role_key>
RESEND_API_KEY=<resend_api_key>
RESEND_TO_EMAIL=kirylka0007@gmail.com
```
Also add all four to Vercel project environment variables.

### Step 4 — Component architecture

```
src/
  app/
    layout.tsx          # Root layout: font, GA, cookie consent
    page.tsx            # Home page — composes all sections
    api/
      contact/
        route.ts        # POST handler: validate → Supabase insert → Resend email
  components/
    layout/
      Navbar.tsx        # Sticky nav, transparent→solid on scroll, mobile menu
      Footer.tsx        # Logo, links, copyright
    sections/
      Hero.tsx          # Centered brand + two product cards
      FlowSection.tsx   # Text left / mock report visual right + how-it-works
      SyncSection.tsx   # Mock Word visual left / text right
      WhyNuvaro.tsx     # 3-column values cards
      ContactForm.tsx   # Enquiry form with validation + submission state
    ui/
      GradientButton.tsx    # Primary CTA: gradient bg
      OutlineButton.tsx     # Secondary CTA: outline style
      BenefitCard.tsx       # Icon + title + description card
      ProductCard.tsx       # Hero product card (Flow/Sync)
      SectionLabel.tsx      # Small cyan uppercase label chip
      StepTimeline.tsx      # Horizontal numbered steps
    analytics/
      GoogleAnalytics.tsx   # GA4 script via @next/third-parties
      CookieBanner.tsx      # UK GDPR consent banner
```

### Step 5 — Page sections (build order)

#### 5a — Navbar (`Navbar.tsx`)
- Logo (uses `Logo.png` from public/) + nav links: Flow | Sync | Why Nuvaro | Contact
- `useEffect` + `useState` for scroll position → `bg-transparent` → `bg-navy-800/95 backdrop-blur`
- Mobile: hamburger → slide-down menu
- "Get in Touch" CTA button right-aligned

#### 5b — Hero (`Hero.tsx`)
```
[badge chip: "INTELLIGENT BUSINESS AUTOMATION"]
[H1: "Intelligent automation for modern finance & operations teams"]
[subheading: two-line description]
[Two ProductCards side-by-side]
  Left card (Flow):  label | headline | 3 bullets | "From £299" | "Explore Flow →"
  Right card (Sync): label | headline | 3 bullets | "From £12/mo" | "Explore Sync →"
```
- Cards: `bg-navy-900 border border-navy-700 rounded-2xl` with hover lift
- Scroll-triggered fade-up via Framer Motion

#### 5c — Nuvaro Flow Section (`FlowSection.tsx`)
- **Left (text):** `NUVARO FLOW` label → H2 → tagline → 4 `BenefitCard`s → pricing callout → CTA
- **Right (visual):** Stylised mock "Diagnostic Report" card — shows process chart bars, 3 recommendation items — built in pure HTML/Tailwind (no real image needed)
- Below full-width: `StepTimeline` with 4 steps: Export data → Upload securely → We analyse → Report delivered
- Background: `bg-navy-900` to distinguish from hero

#### 5d — Nuvaro Sync Section (`SyncSection.tsx`)
- **Left (visual):** Stylised mock "Word document" showing a table with live-bound data cells highlighted in brand gradient
- **Right (text):** `NUVARO SYNC` label → H2 → tagline → 4 `BenefitCard`s → dual pricing (per-user + enterprise) → CTA
- Background: `bg-navy-800` (alternates with Flow section)

#### 5e — Why Nuvaro (`WhyNuvaro.tsx`)
3 cards with lucide-react icons:
1. **No-code for end users** — "Your team uses familiar tools. We connect the intelligence behind the scenes."
2. **Enterprise security** — "Aligned with Microsoft 365 identity. Your data never leaves your environment."
3. **Fast time to value** — "Flow delivers in 5 days. Sync runs on your first template launch."

#### 5f — Contact Form (`ContactForm.tsx`)
Fields: Name* | Email* | Company | Which product? (Flow / Sync / Both) | Message
- `react-hook-form` + `zod` for validation
- Submission states: idle → loading → success → error
- On submit: `POST /api/contact` → Supabase insert + Resend notification
- Success: replaces form with confirmation message

#### 5g — API Route (`app/api/contact/route.ts`)
```typescript
// 1. Validate body with zod
// 2. Insert into Supabase `leads` table via service role client
// 3. Send email via Resend:
//    From: "Nuvaro Website <onboarding@resend.dev>"  (until custom domain live)
//    To: RESEND_TO_EMAIL
//    Subject: "New enquiry — [product] — [name] from [company]"
//    Body: all form fields
// 4. Return 200 or structured error
```

#### 5h — Footer (`Footer.tsx`)
- Logo + tagline
- Links: Privacy Policy (placeholder) | Terms (placeholder) | LinkedIn (placeholder)
- `© 2026 Nuvaro Ltd. All rights reserved.`

### Step 6 — Analytics & consent
- `GoogleAnalytics.tsx` uses `@next/third-parties/google` — only fires after consent
- `CookieBanner.tsx`: "We use Google Analytics to understand how visitors use our site." — Accept / Decline
- On Accept: set cookie, fire GA init
- On Decline: no GA scripts loaded

### Step 7 — Assets
- Copy `Logo.png` to `public/Logo.png`
- Create `public/favicon.ico` from logo (can use online converter or `sharp` CLI)
- Add `opengraph-image.png` (simple navy card with logo for social sharing)

### Step 8 — Vercel deployment
- Push to `main` → Vercel auto-deploys (already linked via Supabase dashboard)
- Add env vars in Vercel dashboard (SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY, NEXT_PUBLIC_GA_ID, RESEND_TO_EMAIL)
- Custom domain: add `nuvaro.co.uk` in Vercel → copy DNS records → configure at registrar after purchase

### Step 9 — Final polish
- Mobile responsiveness audit (all sections stack vertically on <768px)
- Smooth scroll from nav links to section anchors
- `<meta>` tags: title, description, og:image for each page
- Lighthouse score check (aim ≥90 performance, 100 accessibility)

---

## Extensibility Notes

The site is architected to grow:
- Add new products: create `ProductXSection.tsx`, add `ProductCard` to hero — no structural changes needed
- Blog: add `app/blog/` route — Next.js App Router handles it naturally
- Pricing page: add `app/pricing/` — reuse `GradientButton` and `BenefitCard` components
- Auth / dashboard: Supabase Auth already available in the same project

---

## Verification

1. `npm run dev` — full site renders locally, all sections visible
2. Submit contact form → row appears in Supabase `leads` table → email arrives in Gmail
3. GA4 — cookie banner shown on first visit; accepting fires pageview in GA4 DebugView
4. Deploy to Vercel → `https://<project>.vercel.app` loads correctly
5. Mobile: test at 375px — nav collapses, product cards stack, form is usable
6. Lighthouse audit in Chrome DevTools — performance ≥90

---

## Environment Variables Checklist

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4 → Admin → Data Streams → Measurement ID |
| `SUPABASE_URL` | Supabase project → Settings → API |
| `SUPABASE_SERVICE_KEY` | Supabase project → Settings → API → service_role key |
| `RESEND_API_KEY` | resend.com → API Keys → Create key |
| `RESEND_TO_EMAIL` | Set to `kirylka0007@gmail.com` for now |
