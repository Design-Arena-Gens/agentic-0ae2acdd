# Fujifilm QuickSnap Nostalgic Story

A single-page cinematic microsite that stages a warm, film-inspired promotional sequence for the Fujifilm QuickSnap disposable camera. The lightweight experience plays through a stylised “video” timeline that shifts from a family picnic in Kuwait to the final call-to-action.

## Run Locally

This project is framework-free static HTML/CSS/JS. Any static server works; the simplest option is the built-in Node HTTP server.

```bash
npx serve .
```

Then open `http://localhost:3000` (or the port shown in the terminal).

## Deployment

Optimised for static hosting on Vercel. From the project root:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-0ae2acdd
```

## Project Structure

```
├── index.html      # Timeline markup
├── styles.css      # Visual design & animation
├── script.js       # Scene sequencing logic
└── quicksnap.svg   # Call-to-action illustration
```

## Content Highlights

- Sequenced family picnic vignette with stylised Kuwaiti attire.
- Animated film advance, flash burst, and physical photo reveal.
- Grain overlays and warm palettes evoke analog nostalgia.
- Final call-to-action for Kuwaiti availability via Boushahri Group and X-cite.
