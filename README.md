# Westminster Islamic Community Centre — WICC Website

A premium, production-ready website for the Westminster Islamic Community Centre (WICC), built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + custom CSS (geometric patterns, gold gradients)
- **Animations**: Framer Motion
- **Email**: Nodemailer (contact form API route)
- **Deployment**: Netlify (`@netlify/plugin-nextjs`)

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Gmail credentials:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=info@wicc.org.uk
```

## Deploy to Netlify

The `netlify.toml` is pre-configured. Connect your GitHub repo to Netlify and add the environment variables in the Netlify dashboard.
