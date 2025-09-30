# Copilot Instructions for AI Agents

## Project Overview
- This is a React single-page application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Source code is in the `src/` directory. Static assets and the HTML template are in `public/`.
- The entry point is `src/index.js`, which renders the `App` component from `src/App.js` into the DOM element with id `root` in `public/index.html`.

## Key Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (uses Jest and React Testing Library)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Eject configuration:** `npm run eject` (irreversible; exposes build config)

## Testing
- Tests are colocated with source files (e.g., `src/App.test.js`).
- Jest DOM matchers are set up via `src/setupTests.js`.
- Use React Testing Library for component tests.

## Project Conventions
- Use functional React components and hooks (no class components present).
- CSS is imported per-component (e.g., `App.css` for `App.js`).
- All assets referenced in `public/index.html` must exist in `public/`.
- Do not modify files in `build/` or `node_modules/`.

## External Dependencies
- Major dependencies: `react`, `react-dom`, `react-scripts`, `@testing-library/*`, `web-vitals`.
- No custom backend or API integration is present by default.

## Patterns & Structure
- Main UI logic is in `src/App.js`.
- App styling is in `src/App.css` and `src/index.css`.
- Performance metrics can be logged by passing a function to `reportWebVitals` in `src/index.js`.

## Examples
- To add a new component, create a `.js` file in `src/`, import it in `App.js`, and use it as a JSX tag.
- To add a test, create a `.test.js` file in `src/` and use React Testing Library patterns.

## References
- See `README.md` for more details on available scripts and links to Create React App documentation.
- For advanced configuration, see the official [CRA docs](https://facebook.github.io/create-react-app/docs/getting-started).

---

**If you update project structure or conventions, update this file to keep AI agents productive.**
