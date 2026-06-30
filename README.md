# Davaam Life — Sustainable Technology for a Better Pakistan

A premium, conversion-focused corporate website for Davaam Life, Pakistan's leading sustainable technology company. Built with Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion, and React Three Fiber.

## ⚠️ Read this first — common deployment pitfall

If Vercel shows errors like `Module not found: Can't resolve '@/lib/utils'` or `Can't resolve '@/components/ui/sonner'`, it means **the new files in this zip did NOT make it into your GitHub repo**. The most common cause is your zip extractor silently dropping files, or git not picking up newly added files.

**Always run this check before pushing to GitHub:**

```bash
bash verify.sh
```

It will list every required file and tell you if any are missing. **Do not push until verify.sh reports 0 missing files.**

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, about, solutions, how it works, sustainability, industries, mobile app, testimonials, achievements, partners, contact |
| `/our-story` | Full company story, timeline, mission/vision/promise, values |
| `/our-team` | Full 15-member team grid with co-founders and all team members |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York)
- **Animations**: Framer Motion
- **3D**: Three.js + React Three Fiber + Drei
- **Icons**: Lucide React
- **Fonts**: Poppins (headings), Inter (body), Space Grotesk
- **Images**: Next.js Image optimization
- **Database**: Prisma ORM (configured but not used by the marketing site)

---

## How to deploy to Vercel (3 methods)

### Method 1: Push to GitHub using the helper script (RECOMMENDED — foolproof)

After extracting the zip, from inside the extracted folder:

```bash
# 1. Verify all files are present
bash verify.sh

# 2. Push to your GitHub repo (replace with your repo URL)
bash push-to-github.sh https://github.com/Hamzaosama00/davaam.git
```

The `push-to-github.sh` script will:
- Run `verify.sh` first (aborts if any files are missing)
- Initialize a fresh git repo
- Add ALL files (so nothing is silently skipped)
- Force-push to your repo's `main` branch (overwrites any broken state)

Then on Vercel: import the GitHub repo, set `DATABASE_URL=file:./dev.db`, click Deploy.

### Method 2: Manual git push

```bash
# After extracting the zip
cd davaam-life
bash verify.sh                        # MUST pass before pushing

# Initialize fresh git history (avoids stale-file issues)
rm -rf .git
git init -b main
git add -A
git commit -m "feat: complete Davaam Life site"

# Force-push to overwrite the broken remote state
git remote add origin https://github.com/Hamzaosama00/davaam.git
git push --force origin main
```

### Method 3: Vercel CLI (no GitHub needed)

```bash
npm i -g vercel
cd davaam-life
bash verify.sh                        # MUST pass first
vercel --prod
```

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies (bun recommended, npm also works)
bun install
# or: npm install

# 2. Copy environment file
cp .env.example .env

# 3. Start the dev server (prisma generate runs automatically via postinstall)
bun run dev
# or: npm run dev
```

Visit `http://localhost:3000`.

---

## Build Settings (if configuring Vercel manually)

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `next build` (auto-detected) |
| Output Directory | `.next` (auto-detected) |
| Install Command | `bun install` (auto-detected from `bun.lock`) or `npm install` |
| Environment Variables | `DATABASE_URL` = `file:./dev.db` |

---

## Project Structure

```
├── public/
│   ├── achievements/     # Award & recognition images
│   ├── founders/         # Co-founder portraits (legacy)
│   ├── machines/         # Official machine product render
│   ├── team/             # 15 team member photos
│   ├── davaam-logo.*     # Official logo (PNG, WebP, SVG)
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/route.ts
│   │   ├── layout.tsx           # Root layout (fonts, metadata, JSON-LD)
│   │   ├── page.tsx             # Homepage
│   │   ├── our-story/page.tsx   # /our-story
│   │   ├── our-team/page.tsx    # /our-team
│   │   └── globals.css          # Tailwind + design system (teal #0baab0)
│   ├── components/
│   │   ├── site/                # 21 Davaam-specific sections
│   │   ├── ui/                  # 48 shadcn/ui primitives
│   │   └── theme-provider.tsx
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/
│       ├── utils.ts             # cn() utility — REQUIRED by all ui/* components
│       └── db.ts                # Prisma client (unused by marketing site)
├── prisma/
│   └── schema.prisma
├── verify.sh                   # Pre-push verification script
├── push-to-github.sh           # Foolproof push helper
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── bun.lock
```

## Design System

- **Brand Color**: Teal `#0baab0` (OKLCH: `oklch(0.665 0.105 194)`)
- **Dark Mode**: Full light/dark theme via `next-themes`
- **Typography**: Poppins (headings), Inter (body), Space Grotesk (accents)
- **Animations**: Scroll-triggered reveals, animated counters, 3D tilt cards, cursor-tracking hero, scroll-linked timeline, magnetic buttons, parallax phone mockups

## Customization

### Update team LinkedIn URLs
Edit `src/components/site/our-team-content.tsx` — replace `"#"` in the `linkedin` fields with real URLs.

### Update contact info
Search for `hello@davaam.life`, `+92 300 1234567`, and `info@davaam.pk` across `src/components/site/` and replace with your real contact details.

### Update partner logos
Edit `src/components/site/partners.tsx` — replace the placeholder names in the `PARTNERS` array.

### Update testimonial data
Edit `src/components/site/testimonials.tsx` — replace entries in the `TESTIMONIALS` array.

## License

© 2024 Davaam Life. All rights reserved.
