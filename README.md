# Ken's Portfolio

A responsive personal portfolio built with React, Vite, Framer Motion, and Lucide icons. It uses a clean, light professional style with subtle floating elements and scroll reveals.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in VS Code.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown in the terminal.

## Before publishing

Update these items in `src/App.jsx`:

- `Ken` and the homepage bio, if you want your full professional name.
- `YOUR_EMAIL@example.com` with your professional email.
- LinkedIn and GitHub links with your profile URLs.
- Project repository/demo links and screenshots.
- Confirm the exact wording of your degree, job titles, responsibilities, and skills.
- Add a PDF resume to the `public` folder and link the download button when ready.

The current project cards intentionally use notes instead of fake demo links.

## Deploy free with Vercel

1. Create a GitHub repository and upload this project.
2. Sign in to Vercel using GitHub.
3. Choose **Add New Project** and import the repository.
4. Keep the detected Vite settings and click **Deploy**.
5. Vercel will give you a public URL.

Check Vercel's current free-plan terms before deploying.

## Accessibility

The floating and reveal animations respect the reduced-motion preference. The layout is responsive for mobile, tablet, and desktop.
