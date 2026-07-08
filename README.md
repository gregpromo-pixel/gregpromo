# Greg Promo Media v17

Premium bilingual media website for Antoine Gregory, known as Greg Promo.

## Main features

- French / English language switch
- iOS-style language buttons
- Responsive layout for phone, iPad, laptop, and desktop
- Local MP4 video support
- Supabase-powered activity photo submissions
- Public gallery with approved Supabase photos
- Sports page connected to Supabase Edge Function
- Clean league tables, fixtures, and scorers board
- Editorial pages for articles, events, videos, sports, gallery, promotion, and contact

## Upload to GitHub Pages

Upload all root files directly to the repository root.

Do not upload the ZIP itself.

## Add videos

Upload MP4 files in:

```text
assets/videos/
```

Use exact names:

```text
hero-recap.mp4
artistes-vs-influenceurs-recap.mp4
greg-birthday-film.mp4
crowd-energy.mp4
behind-the-scenes.mp4
performance.mp4
player-walkout.mp4
fan-reactions.mp4
```

## Gallery uploads

Run `SUPABASE_GALLERY_SETUP.sql` in Supabase SQL Editor.
Then add your Supabase anon public key inside `site-data.js`.

## Soccer API

The website uses your Supabase function:

```text
https://ukhlfcgodzlvgxkexylh.supabase.co/functions/v1/soccer
```

For 2025/2026 seasons, upgrade API-FOOTBALL or enable those seasons in your account, then update `site-data.js`.
