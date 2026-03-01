# GetUrStyle

GetUrStyle is a startup-focused web MVP services site built with React and Vite, with integrated lead capture and admin email workflows.

## Highlights

- Multi-page marketing site (`/`, `/services`, `/pricing`, `/about`, `/contact`)
- Animated UI with Framer Motion and Tailwind CSS
- Contact form API (`/api/send-email`) backed by SMTP via Nodemailer
- Password-protected admin email console (`/admin/email`) for bulk outreach
- Vercel-ready frontend + serverless API handlers

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Vercel Serverless Functions (`@vercel/node`)
- Nodemailer (SMTP)

## Project Structure

```text
src/                      # Frontend app (pages, components, routing)
api/send-email.ts         # Contact form email handler
api/verify-admin.ts       # Admin password verification endpoint
api/send-bulk-email.ts    # Bulk email endpoint with attachments
```

## Environment Variables

Copy `.env.example` to `.env` (local) and configure:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `SMTP_TO`
- `SMTP_FROM_NAME`
- `ADMIN_PASSWORD`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

3. Run the app:

```bash
npm run dev
```

For local testing of both frontend and `/api/*` routes together, run:

```bash
npx vercel dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deploy to Vercel and set the same environment variables in project settings.
