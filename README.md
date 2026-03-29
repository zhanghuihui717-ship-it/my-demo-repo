# Image Background Remover

A simple, fast, and privacy-friendly background removal tool.

## Features

- Pure frontend, no backend needed
- Uses Remove.bg API for background removal
- Images processed in memory, no server storage
- Deploy to Cloudflare Pages in minutes

## How to use

1. Get your API key from [remove.bg](https://www.remove.bg/api)
2. Open `index.html`
3. Enter your API key and upload an image
4. Download the result with transparent background

## Deploy to Cloudflare Pages

1. Fork this repo to your GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create project
3. Connect your GitHub repo
4. Set build command: (leave empty, it's pure frontend)
5. Deploy!

## Notes

- Remove.bg free tier: 25 credits/month
- API key is stored in localStorage for convenience
- All processing happens client-side, images never touch any server

## Tech Stack

- Vanilla HTML/CSS/JavaScript
- Remove.bg API
- Deployed on Cloudflare Pages