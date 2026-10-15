# Rohit Mainkar — Developer Portfolio

A responsive React portfolio website for showcasing full-stack development skills and projects.

## Tech stack
- React
- Vite
- JavaScript
- CSS
- Lucide icons

## Run locally

Requirements: Node.js 18+ (a current LTS release is recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Publish with GitHub Pages

### Recommended: use GitHub Actions
1. Create a public repository named `rmainkar-001.github.io` if you want the site at `https://rmainkar-001.github.io`.
2. Upload the contents of this project to that repository.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. Add the workflow below at `.github/workflows/deploy.yml`.
5. Push to `main`. After the workflow completes, visit `https://rmainkar-001.github.io`.

Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy portfolio to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

If you prefer to keep the repository named `portfolio`, the GitHub Pages URL is usually `https://rmainkar-001.github.io/portfolio/`; Vite's `base` setting must then be configured to `/portfolio/` in `vite.config.js`.

## Personalize before publishing

Search the project for these placeholders and update them:
- `your-email@example.com` — your actual professional email
- `https://www.linkedin.com/` — your exact LinkedIn profile URL
- Project entries marked **details to confirm** — replace with your real responsibilities, stack, and outcomes
- Add a downloadable resume only if you want one linked from the site

The portfolio uses project summaries based on the information currently available. Do not publish unverified project claims or confidential company information.
