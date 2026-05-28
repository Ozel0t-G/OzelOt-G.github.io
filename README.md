# Ozel0t

Personal cybersecurity notes, articles, and selected work built with React and Vite.

## Tech Stack

- React
- Vite
- JavaScript
- Plain CSS
- Markdown posts
- GitHub Actions for GitHub Pages deployment

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in the `dist` folder.

## Add a New Article

Create a new `.md` file in `src/content/posts/` with frontmatter:

```md
---
title: "Article Title"
date: "2024-05-12"
description: "Short description."
tags: ["Security Operations"]
readingTime: "6 min read"
---
```

Commit and push the file. GitHub Actions rebuilds and deploys the site automatically.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`. On every push to `main`, GitHub Actions installs dependencies with `npm ci`, builds the site, uploads the `dist` folder as a Pages artifact, and deploys it to GitHub Pages.

For a user GitHub Pages repository such as `username.github.io`, no custom Vite base path is configured.
