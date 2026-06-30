#!/usr/bin/env bash
# verify.sh — Run this inside your project root BEFORE pushing to GitHub.
# It checks that all required files (the ones Vercel complained were missing) exist.
# Exit code 0 = all good, exit code 1 = something is missing.

set -e

REQUIRED_FILES=(
  # Library utilities (the cn() function used everywhere)
  "src/lib/utils.ts"
  "src/lib/db.ts"

  # Hooks
  "src/hooks/use-mobile.ts"
  "src/hooks/use-toast.ts"

  # shadcn/ui components that the build complained were missing
  "src/components/ui/sonner.tsx"
  "src/components/ui/toaster.tsx"
  "src/components/ui/textarea.tsx"
  "src/components/ui/toast.tsx"
  "src/components/ui/button.tsx"
  "src/components/ui/input.tsx"
  "src/components/ui/label.tsx"

  # All 48 shadcn/ui components (full list)
  "src/components/ui/accordion.tsx"
  "src/components/ui/alert-dialog.tsx"
  "src/components/ui/alert.tsx"
  "src/components/ui/aspect-ratio.tsx"
  "src/components/ui/avatar.tsx"
  "src/components/ui/badge.tsx"
  "src/components/ui/breadcrumb.tsx"
  "src/components/ui/calendar.tsx"
  "src/components/ui/card.tsx"
  "src/components/ui/carousel.tsx"
  "src/components/ui/chart.tsx"
  "src/components/ui/checkbox.tsx"
  "src/components/ui/collapsible.tsx"
  "src/components/ui/command.tsx"
  "src/components/ui/context-menu.tsx"
  "src/components/ui/dialog.tsx"
  "src/components/ui/drawer.tsx"
  "src/components/ui/dropdown-menu.tsx"
  "src/components/ui/form.tsx"
  "src/components/ui/hover-card.tsx"
  "src/components/ui/input-otp.tsx"
  "src/components/ui/menubar.tsx"
  "src/components/ui/navigation-menu.tsx"
  "src/components/ui/pagination.tsx"
  "src/components/ui/popover.tsx"
  "src/components/ui/progress.tsx"
  "src/components/ui/radio-group.tsx"
  "src/components/ui/resizable.tsx"
  "src/components/ui/scroll-area.tsx"
  "src/components/ui/select.tsx"
  "src/components/ui/separator.tsx"
  "src/components/ui/sheet.tsx"
  "src/components/ui/sidebar.tsx"
  "src/components/ui/skeleton.tsx"
  "src/components/ui/slider.tsx"
  "src/components/ui/switch.tsx"
  "src/components/ui/table.tsx"
  "src/components/ui/tabs.tsx"
  "src/components/ui/toggle-group.tsx"
  "src/components/ui/toggle.tsx"
  "src/components/ui/tooltip.tsx"

  # Theme provider
  "src/components/theme-provider.tsx"

  # All site components
  "src/components/site/about-home.tsx"
  "src/components/site/achievements.tsx"
  "src/components/site/cta.tsx"
  "src/components/site/footer.tsx"
  "src/components/site/hero.tsx"
  "src/components/site/how-it-works.tsx"
  "src/components/site/industries.tsx"
  "src/components/site/machine-render-photo.tsx"
  "src/components/site/magnetic-button.tsx"
  "src/components/site/mobile-app.tsx"
  "src/components/site/navbar.tsx"
  "src/components/site/our-story-content.tsx"
  "src/components/site/our-team-content.tsx"
  "src/components/site/page-shell.tsx"
  "src/components/site/partners.tsx"
  "src/components/site/primitives.tsx"
  "src/components/site/solutions.tsx"
  "src/components/site/sustainability.tsx"
  "src/components/site/testimonials.tsx"
  "src/components/site/tilt-card.tsx"
  "src/components/site/why-choose.tsx"

  # App routes
  "src/app/layout.tsx"
  "src/app/page.tsx"
  "src/app/globals.css"
  "src/app/our-story/page.tsx"
  "src/app/our-team/page.tsx"
  "src/app/api/route.ts"

  # Config
  "package.json"
  "next.config.ts"
  "tsconfig.json"
  "tailwind.config.ts"
  "postcss.config.mjs"
  "components.json"
  "eslint.config.mjs"
  "bun.lock"
  "prisma/schema.prisma"

  # Public assets (key ones)
  "public/davaam-logo.png"
  "public/machines/davaam-machine-original.webp"
  "public/team/salman-tariq.png"
  "public/team/omer-ghaznavi.png"
  "public/achievements/people-planet.jpg"
)

MISSING=0
echo ""
echo "🔍 Verifying $(echo ${#REQUIRED_FILES[@]}) required files..."
echo ""

for f in "${REQUIRED_FILES[@]}"; do
  if [ -f "$f" ]; then
    echo "  ✓ $f"
  else
    echo "  ✗ MISSING: $f"
    MISSING=$((MISSING + 1))
  fi
done

echo ""
if [ $MISSING -eq 0 ]; then
  echo "✅ All required files present. Safe to push to GitHub + deploy to Vercel."
  exit 0
else
  echo "❌ $MISSING file(s) missing. Re-extract the zip — these files DID NOT make it into your project."
  echo ""
  echo "Common cause: your zip extractor silently skipped empty subdirectories"
  echo "or your git client didn't pick up new files. Try:"
  echo ""
  echo "  1. Delete your project folder entirely"
  echo "  2. Re-download davaam-life-vercel.zip from the chat"
  echo "  3. Extract with: unzip davaam-life-vercel.zip -d davaam-life"
  echo "  4. cd davaam-life && bash verify.sh"
  echo "  5. Only push to GitHub once verify.sh shows 0 missing files"
  exit 1
fi
