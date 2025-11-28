# FlameNet Frontend

This is the FlameNet web UI. It uses React with lightweight, framework-free CSS and follows the FlameNet style guide.

## Features

- Lightweight and fast
- Responsive, modern UI
- Theme toggle (light/dark)
- Landing page with CTA and section placeholders
- Backend status indicator (calls `/meta` on port 3001)

## Getting Started

In the project directory:

### `npm start`
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Backend Integration and Verification

The frontend pings the backend `GET /meta` endpoint on `http://localhost:3001` to display a status badge.
If `/meta` is unavailable, it falls back to `GET /` (health check).

- Configure backend base URL (optional):
  - By default, the app uses `http://localhost:3001`.
  - You can override with an env var when starting the frontend:
    - macOS/Linux: `REACT_APP_BACKEND_URL="http://localhost:3001" npm start`
    - Windows (PowerShell): `$env:REACT_APP_BACKEND_URL="http://localhost:3001"; npm start`

### How to run both previews locally

1) Start the backend (FastAPI, port 3001):
   - From `flamenet-215071-215063/flamenet_backend`:
     - Install deps: `python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`
     - Run server: `uvicorn api.main:app --host 0.0.0.0 --port 3001`
   - Verify:
     - http://localhost:3001/meta should return JSON like `{ "name": "FlameNet", "version": "0.1.0", "status": "ok" }`
     - http://localhost:3001/ should return `{ "message": "Healthy" }`

2) Start the frontend (React, port 3000):
   - From `flamenet-215071-214298/flamenet_frontend`:
     - Install deps: `npm install`
     - Run: `npm start`
   - Visit http://localhost:3000 and check the badge near the buttons:
     - OK case: "🔗 Backend: ok • v0.1.0" (or similar)
     - Error case: "⚠️ Backend unreachable"

Note: CORS is already enabled permissively on the backend for local development.

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
