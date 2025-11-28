# FlameNet Frontend

This is the FlameNet web UI. It uses React with lightweight, framework-free CSS and follows the FlameNet style guide.

## Features

- Lightweight and fast
- Responsive, modern UI
- Theme toggle (light/dark)
- Landing page with CTA and section placeholders

## Getting Started

In the project directory:

### `npm start`
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## FlameNet Style Guide

The main brand colors are defined as CSS variables in `src/App.css` using the provided style guide:

- Primary: `#3b82f6`
- Secondary: `#64748b`
- Success/Accent: `#06b6d4`
- Error: `#EF4444`
- Background (dark): `#1f2937`
- Surface (dark): `#374151`
- Text on dark: `#f9fafb`

You can adjust these tokens in the `:root` and `[data-theme="dark"]` sections of `src/App.css`.

## Components
This template uses pure HTML/CSS. Common styles:
- Buttons (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More
React documentation: https://reactjs.org/
