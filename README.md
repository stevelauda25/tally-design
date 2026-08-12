# Tally UI Design System Documentation

The documentation site for the Tally UI Design System. This repository contains
the application foundation only; approved Figma screens will be implemented in
subsequent work.

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
npm run build
```

## Structure

- `app/` — App Router routes, metadata, and global styles
- `components/layout/` — documentation layout boundaries
- `components/ui/` — reusable UI primitives
- `lib/` — shared utilities and non-CSS design foundations
- `public/` — static assets

## Font and token foundations

The replaceable font stack and responsive breakpoints live in `app/globals.css`.
Only framework-level values are defined today. Product colors, typography,
spacing, and component tokens will be sourced from the approved Figma design.
