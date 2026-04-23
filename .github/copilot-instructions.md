# Copilot Instructions for this Repository

## Build, test, and lint commands

This repository is currently a **static frontend project** (HTML/CSS/JS) with **no package manager config** and no scripted build/test/lint tasks (no `package.json`, `Makefile`, or equivalent).

Use local preview instead:

1. Open `index.html` directly in a browser, or
2. Use VS Code Live Server on `index.html`.

There is no configured automated test suite, so there is no "single test" command in the current codebase.

## High-level architecture

- Entry point is the root `index.html`.
- UI is mostly markup plus Bootstrap classes; Bootstrap CSS/JS are loaded from CDN in `<head>`.
- Static assets are referenced via relative paths (for example `img/imagen.jpg`).
- `css/` and `js/` directories exist for custom styles/scripts, but the current implementation lives entirely in `index.html`.

## Key repository conventions

- Content and metadata are Spanish-first (`<html lang="es">` and Spanish copy in README/page text).
- Keep the project runnable without a build step: plain static files and browser-compatible code.
- Prefer Bootstrap utility/components directly in markup, consistent with the current page style.
- Keep asset references relative to repo structure (for example under `img/`).

## Recomendaciones
- Cada vez que ingreses un nuevo código, inserta un comentario en español que explique las etiquetas utilizadas
- los ejemplos y el contenido en general necesito que esten en español
