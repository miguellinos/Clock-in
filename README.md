# Clock-in

Clock-in ist ein Proxy für [Clockify](https://clockify.me/): Projekte und Tasks erscheinen als verschiebbare Bausteine, und jede Bewegung eines Blocks auf der Tagesleiste wird als Zeiteintrag an die Clockify-API weitergegeben. Clockify bleibt das System of Record.

## Toolset

| Bereich | Werkzeug |
| --- | --- |
| Sprache | TypeScript |
| UI | React, Tailwind CSS |
| Build | Vite |
| Drag and Drop | dnd-kit |
| Server-Zustand | TanStack Query |
| Tests | Vitest (Logik), Playwright (Browser) |

## Entwicklung

```sh
npm install
npm run dev        # Dev-Server auf http://localhost:5173
npm test           # Unit-Tests (Vitest)
npm run test:e2e   # Browser-Tests (Playwright, einmalig: npx playwright install chromium)
npm run lint       # Oxlint
npm run build      # Typecheck + Produktions-Build
```

## Struktur

- `src/api/clockify.ts` – Client für die Clockify-REST-API (`X-Api-Key`)
- `src/lib/time.ts` – Zeitrechnung, Einrasten am 15-Minuten-Raster
- `e2e/` – Playwright-Tests
