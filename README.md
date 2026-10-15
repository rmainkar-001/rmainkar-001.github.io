# Rohit Mainkar — Full Stack Developer Portfolio

A responsive React + Vite portfolio designed to present Rohit's full-stack development experience, business applications, aggregator integrations, and AI/SQL work to recruiters and hiring teams.

## Portfolio sections

- Professional profile and approximately five years of software development experience
- React.js, Python, FastAPI, SQL, API integration, and AI application skills
- FoodERP: sales, purchase, inventory, and POS-related workflows
- Online aggregator integration and management: Swiggy/Zomato API workflows, store ON/OFF, real-time store status, and menu controls
- SQL AI Agent using LlamaIndex
- POS Billing Software, Food Menu Manager, SCM ERP, TakPro, and ERP AI Chat Service
- Engineering approach and contact links

## Technology

- React
- Vite
- JavaScript
- CSS
- Lucide React icons
- GitHub Actions for GitHub Pages deployment

## Run locally

Requires Node.js 20 or a compatible current LTS release.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build locally

```bash
npm run build
npm run preview
```

Vite generates the production website in `dist/`.

## Deploy to GitHub Pages

This repository is intended for `https://rmainkar-001.github.io/`.

1. Push the project files to the root of the public repository named `rmainkar-001.github.io`.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Keep `.github/workflows/deploy.yml` as the only Pages deployment workflow. Remove any duplicate workflow such as `.github/workflows/static.yml` that deploys the repository as plain static content.
4. Push to `main`, then inspect the **Actions** tab for a successful build and deployment.

The workflow intentionally does not enable npm caching, so it does not require a lock file just to configure `actions/setup-node`. For repeatable local dependency versions, you can run `npm install` locally and commit the generated `package-lock.json`.

## Personalize before publishing

Update these contact details in `src/main.jsx` before using the site for job applications:

- Replace `your-email@example.com` with your professional email address.
- Replace the generic LinkedIn URL with your real LinkedIn profile.
- Add public repository or demo links to individual projects only when they are available and safe to share.
- Confirm the detailed responsibilities for SCM ERP and TakPro before expanding those project descriptions.

Project descriptions avoid fabricated client names, metrics, and outcomes. Keep all statements aligned with your actual work and avoid publishing confidential code or customer information.
