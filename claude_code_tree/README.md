# Claude Code — Codebase Explorer

An interactive, single-page website that visually explains the architecture of **Claude Code** (entrypoints, core systems, tools, commands, and more).

## Demo

- **Local**: open `index.html` in your browser (double-click), or serve the folder (recommended) to avoid any browser restrictions.
- **GitHub Pages**: this repo is ready to deploy as a static site.

## Getting started (local)

### Option A: Open directly

1. Open `index.html` in any modern browser.

### Option B: Serve locally (recommended)

From the project directory, run one of:

```bash
python3 -m http.server 5173
```

```bash
npx serve .
```

Then visit `http://localhost:5173`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
4. Save. After it builds, your site will be available on your Pages URL.

## Project structure

```text
.
├── index.html              # Page layout + content sections
├── style.css               # Styling (glassmorphism, animations, layout)
├── script.js               # Interactive behavior (nav, rendering, UI helpers)
└── codebase_walkthrough.md # Source narrative/content used for the explorer
```

## Notes

- **No build step**: plain HTML/CSS/JS.
- **Fonts**: loaded from Google Fonts (`Inter`, `JetBrains Mono`).

## License

Add a license file (e.g. `LICENSE`) if you plan to open-source this repository.

