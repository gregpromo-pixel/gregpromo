# Deployment Checklist

## Repository

- [ ] Back up the current repository or create a new branch.
- [ ] Keep the existing `CNAME` file.
- [ ] Upload the package contents to the repository root.
- [ ] Do not upload the ZIP itself.
- [ ] Confirm GitHub Pages is publishing from the correct branch and root folder.

## Brand assets

- [ ] Both Greg Promo logo files load on light and dark backgrounds.
- [ ] The official Antoine Gregory portrait is present.
- [ ] Event and sports photography uses the exact filenames listed in `README.md`.
- [ ] The favicon loads.

## Content

- [ ] French text is final.
- [ ] English text is final.
- [ ] Contact email and telephone are correct in `site-data.js`.
- [ ] Instagram links are correct.
- [ ] Canonical URLs use the final production domain.

## Video

- [ ] Every configured MP4 exists in `assets/videos/`.
- [ ] Video files are reasonably compressed for mobile.
- [ ] Posters load before playback.
- [ ] Missing videos display the clean fallback state.

## Supabase

- [ ] Only the anonymous public key is present in client code.
- [ ] Row Level Security is enabled.
- [ ] Public users can upload only to the intended bucket/path.
- [ ] Only approved gallery rows are publicly readable.
- [ ] The soccer Edge Function accepts requests from the production domain.
- [ ] Available and locked seasons match the API plan.

## Contact

- [ ] The Zoho permalink is current.
- [ ] The form loads on Safari, Chrome, and mobile browsers.
- [ ] A complete test submission reaches the correct inbox.

## Final quality check

- [ ] Test at 320px, 390px, 768px, 1024px, and desktop widths.
- [ ] Test keyboard navigation and visible focus.
- [ ] Test the mobile menu, Escape key, and outside click.
- [ ] Test FR/EN persistence.
- [ ] Check social preview image and metadata.
- [ ] Run a final broken-link check after deployment.
