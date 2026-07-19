#!/usr/bin/env bash
# Build and deploy this site from one GitHub repository:
#   - main: source code for the Vue/Vite site
#   - gh-pages: generated static website from dist/
#
# Repo:  https://github.com/Intellify-Cloud/dcs-cnstrctn
# Pages: https://intellify-cloud.github.io/dcs-cnstrctn/
set -euo pipefail

REPO_NAME="dcs-cnstrctn"
PAGES_BASE="/${REPO_NAME}/"
PAGES_URL="https://intellify-cloud.github.io/${REPO_NAME}/"

echo "Installing dependencies..."
npm install

echo "Building GitHub Pages site with base ${PAGES_BASE}..."
DEPLOY_BASE="${PAGES_BASE}" npm run build

echo "Adding SPA fallback for vue-router history mode..."
cp dist/index.html dist/404.html

echo "Publishing generated dist/ output to gh-pages..."
npx gh-pages -d dist -b gh-pages -r origin

echo "Done."
echo "Source branch: main"
echo "Pages branch: gh-pages"
echo "GitHub Pages: ${PAGES_URL}"
