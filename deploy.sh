#!/usr/bin/env bash
# Build and deploy the Neha Jivan OT demo site to BOTH targets:
#   1. Vercel (production)      — built with root base /
#   2. GitHub Pages (gh-pages)  — built with base /ot-nj-demo/
# Repo:  https://github.com/Intellify-Cloud/ot-nj-demo
# Pages: https://intellify-cloud.github.io/ot-nj-demo/
set -euo pipefail

echo "Installing dependencies..."
npm install

echo "Pushing source to GitHub (main)..."
git push origin main

echo "== Vercel: building with root base =="
npm run build

echo "== Vercel: deploying (production) =="
npx vercel --prod --yes

echo "== GitHub Pages: building with base /ot-nj-demo/ =="
DEPLOY_BASE=/ot-nj-demo/ npm run build

echo "Adding SPA fallback for vue-router history mode..."
cp dist/index.html dist/404.html

echo "== GitHub Pages: publishing dist/ to gh-pages branch =="
npx gh-pages -d dist

echo "Done."
echo "  Vercel:       see URL above"
echo "  GitHub Pages: https://intellify-cloud.github.io/ot-nj-demo/"
