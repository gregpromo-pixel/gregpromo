# Greg Promo Media v26 Premium

A complete visual upgrade for Greg Promo Media: cinematic profile-led art direction, iOS-inspired glass surfaces, a cleaner bilingual navigation system, stronger buttons, reduced copy, a redesigned sports desk, and a more professional contact and partnership flow.

## What changed

- Floating iOS-style glass header with a compact FR/EN segmented control
- Simplified desktop navigation and a cleaner mobile menu
- New premium homepage centered on Antoine Gregory / Greg Promo
- New full profile page at `about.html`
- Redesigned pages for events, videos, sports, gallery, articles, promotion, contact, press, and the Haitian All-Star Game
- New premium dark footer with one clear collaboration call to action
- Removed the decorative ticker and unnecessary repeated text
- Refined button hierarchy, spacing, typography, cards, forms, hover states, and mobile behavior
- Preserved local video support, Supabase gallery uploads, the Supabase soccer function, Zoho Forms, and bilingual content
- Preserved safe escaping for public gallery content before rendering it in the page

## Deploy to GitHub Pages

1. Back up the current repository.
2. Copy the files from this package into the repository root.
3. Keep the existing `assets/` folder, `CNAME`, and Supabase SQL/setup files.
4. Replace the existing HTML, `styles.css`, `script.js`, and `site-data.js` when GitHub asks.
5. Commit the changes and wait for GitHub Pages to rebuild.

Do not upload the ZIP file itself to the repository. Upload the files inside it.

## Main pages included

```text
index.html
about.html
articles.html
events.html
all-star-game.html
videos.html
sports.html
gallery.html
advertise.html
contact.html
press.html
community.html
music.html
news.html
404.html
```

## Core files

```text
styles.css
script.js
site-data.js
robots.txt
sitemap.xml
```

## Required image assets

Keep these files inside `assets/`:

```text
antoine-gregory-profile.jpg
event-crowd.jpg
fans-flags-track.jpg
fans-track.jpg
night-crew.jpg
night-players.jpg
player-17-cinematic.jpg
women-player-close.jpg
women-team-sunset.jpg
gregpromo-logo-dark.png
gregpromo-logo-light.png
favicon.png
```

The design includes graceful fallbacks, but the real photography is essential to the premium result.

## Local video filenames

Keep the configured files inside `assets/videos/`:

```text
heros-recap-2.mp4
greg-birthday-film-2.mp4
artists-vs-influencers-recap.mp4
behind-the-scenes.mp4
performance.mp4
player-walkout.mp4
fan-reactions.mp4
```

The exact paths are controlled in `site-data.js`.

## Integrations preserved

### Supabase gallery

The gallery still uses the configured Supabase project, storage bucket, approval workflow, and `gallery_submissions` table. Ensure Row Level Security and storage policies permit only the intended public upload and approved-read operations.

Never place a Supabase `service_role` key in this website. A browser site may use only the public anonymous key with correct RLS policies.

### Sports desk

The sports page still loads standings, fixtures, and scorers through the configured Supabase Edge Function. Seasons unavailable to the current API plan remain disabled in `site-data.js`.

### Zoho booking form

The contact page keeps the existing Zoho form URL and displays it inside a premium glass card. Update the URL only if the form permalink changes.

### French and English

The selected language is saved locally when browser storage is available. The site also remains functional in restricted/private browsing modes.

## Central edits

Use `site-data.js` for:

- Instagram URLs
- Contact email and telephone
- Video paths
- Supabase configuration
- Soccer competitions and seasons
- Shared translated interface labels

Use the individual HTML files for page-specific French and English copy through `data-fr` and `data-en` attributes.

## Before publishing

- Confirm the production domain in canonical and social metadata.
- Confirm every page opens without a missing image.
- Test FR and EN on desktop and mobile.
- Test the mobile menu with keyboard and touch.
- Submit one test gallery photo and approve it in Supabase.
- Test the Zoho form on iPhone and Android.
- Test every configured MP4 file.
- Confirm the soccer Edge Function allows requests from the production domain.
