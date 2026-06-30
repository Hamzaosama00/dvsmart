#!/usr/bin/env bash
# push-to-github.sh — Safely pushes the extracted project to your GitHub repo.
#
# Usage:
#   bash push-to-github.sh https://github.com/Hamzaosama00/davaam.git
#
# This script:
#   1. Verifies all required files exist (runs verify.sh)
#   2. Initializes a fresh git repo in the current directory
#   3. Adds ALL files (no .gitignore bypass issues)
#   4. Commits and force-pushes to your repo's main branch
#
# Force-push is used so any stale broken files in your GitHub repo are
# completely overwritten — the repo will look exactly like your local folder.

set -e

REPO_URL="${1:-}"
if [ -z "$REPO_URL" ]; then
  echo "❌ Usage: bash push-to-github.sh https://github.com/YOUR_USERNAME/YOUR_REPO.git"
  echo ""
  echo "Example:"
  echo "  bash push-to-github.sh https://github.com/Hamzaosama00/davaam.git"
  exit 1
fi

echo ""
echo "Step 1/4: Verifying required files..."
bash verify.sh

echo ""
echo "Step 2/4: Initializing fresh git repo..."
rm -rf .git
git init -b main
git config user.email "deploy@davaam.life"
git config user.name "Davaam Deploy"

echo ""
echo "Step 3/4: Adding ALL files and committing..."
git add -A
git commit -m "feat: complete Davaam Life site (fixes missing ui/sonner, ui/textarea, lib/utils, etc.)"

echo ""
echo "Step 4/4: Force-pushing to $REPO_URL (branch: main)..."
echo "⚠ This will OVERWRITE your remote main branch entirely."
echo ""
read -p "Type 'yes' to continue: " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
  echo "Aborted. No changes pushed."
  exit 1
fi

git remote add origin "$REPO_URL"
git push --force origin main

echo ""
echo "✅ Done! Your GitHub repo now has ALL the required files."
echo "Vercel will automatically redeploy — the build should pass this time."
