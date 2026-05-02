# PRicapa.ai

Personal website for Pricilla Ricapa — Economist, strategist, and frontier tech translator at the intersection of AI, quantum computing, and capital markets.

## About

A full-stack personal brand site built with React Router v7. Features sections for biography, gallery, speaking topics, services, events, and contact.

## Tech

- React Router v7 with SSR (server-side rendering)
- TailwindCSS
- TypeScript
- Deployed on Netlify via the `@netlify/vite-plugin-react-router` adapter

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

## Deployment

Merging to `main` triggers an automatic Netlify deployment. The build output is:

```
build/
  client/    # Static assets
  server/    # Server-side rendering code
```
