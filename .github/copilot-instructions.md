<!-- Copilot / AI agent guidance for the Read-Journey project -->
# Read-Journey — Copilot instructions

This file contains concise, actionable guidance for AI coding agents working on the Read-Journey repository (a small React + Vite app).

- **Primary runtime / build**: Vite (see `package.json` scripts: `dev`, `build`, `preview`).
- **Framework**: React 19 (JSX files live under `src/`).
- **Compiler plugin**: `@vitejs/plugin-react-swc` configured in `vite.config.js` — use SWC transforms and HMR.

Quick commands
- Dev server: `npm run dev` (starts Vite with HMR).
- Build: `npm run build` (produces `dist/`).
- Preview build: `npm run preview` (serves `dist/` locally).
- Lint: `npm run lint` (uses the repo's `eslint` config from `eslint.config.js`).

Files and patterns worth knowing
- `index.html`: single-page entry; `src/main.jsx` mounts `<App />` to `#root`.
- `src/main.jsx`: uses `react-dom/client` `createRoot` API and `StrictMode`.
- `src/App.jsx`: canonical example of project conventions — functional component, local CSS import, importing assets (`./assets/react.svg`) and site asset `/vite.svg`.
- `vite.config.js`: includes the React SWC plugin. When changing compilation behavior, update this file.
- `eslint.config.js`: flat config; notable rule: `no-unused-vars` ignores names that start with an uppercase letter or underscore (`varsIgnorePattern: '^[A-Z_]'`). Respect this pattern when introducing intentionally-unused bindings.

Project conventions (observed)
- File types: `.jsx` for components (project `type: module` in `package.json` — native ESM imports expected).
- Assets: import local assets (e.g. `import logo from './assets/react.svg'`) or reference root asset `/vite.svg` for public-root files.
- No test runner is configured; do not assume tests exist. If you add tests, update `package.json` with a test script and document it here.

Developer workflows and hints for changes
- For UI changes, run `npm run dev` and use the browser with Vite HMR — edits to `src/*.jsx` and `src/*.css` reload quickly.
- Linting: run `npm run lint` before committing; ESLint configuration is in `eslint.config.js` and uses plugin presets for React hooks & refresh.
- Adding new dependencies: update `package.json` and run `npm install`. Prefer devDeps for build tools and plugins.

Integration points & gotchas
- SWC plugin: `@vitejs/plugin-react-swc` compiles JSX and provides fast refresh. If you change the plugin, verify HMR still works.
- Type hints: `@types/react` and `@types/react-dom` are present as dev deps, but this repo is JavaScript (not TypeScript). Do not convert files to `.ts/.tsx` without adding configuration and updating `tsconfig.json`.
- Browser globals: ESLint `languageOptions.globals` set to `globals.browser`. Avoid using non-browser globals unless added intentionally.

How to update these instructions
- If you add CI, tests, or a different bundler/runner, update this file with exact commands and the changed files.

When in doubt, inspect these files:
- `package.json` — scripts and deps.
- `vite.config.js` — build/dev behavior.
- `eslint.config.js` — linting rules and conventions.
- `src/main.jsx`, `src/App.jsx` — component mounting and app pattern.

If anything in this summary is unclear or you want additional examples (routes, testing, CI), tell me which area to expand.
