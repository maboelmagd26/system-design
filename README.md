# System Design

A simple design system built with React, TypeScript and Vite. It holds reusable components for future projects.

Live demo: https://maboelmagd26.github.io/system-design/

## Components

- **Badge**: variants (`neutral`, `error`, `warning`, `success`, `brand`) and sizes (`sm`, `md`, `lg`).

More components will be added over time.

## Design tokens

Defined in `src/index.css`:

- Typography scale and font weights
- Semantic colors
- Responsive grid: 4 columns on mobile, 6 on tablet (768px+), 12 on desktop (1440px+)
- 4px spacing unit

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build
npm run deploy   # build and publish to GitHub Pages
```

## Structure

```
src/
  components/   # one folder per component (tsx + css)
  constants/    # component variants/config
  index.css     # tokens and layout
```
