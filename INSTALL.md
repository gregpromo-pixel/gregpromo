# Greg Promo CMS security update

Replace these files in the repository root:

- admin.html
- admin.js
- admin.css
- cms.js
- styles.css

Add this new file:

- reset-password.html

The Supabase database migration has already been applied to project `ukhlfcgodzlvgxkexylh`.
It added `article_images`, secured its RLS and storage access, hardened existing CMS policies, and inserted the 2026 second edition.

Before testing password reset, add this redirect URL in Supabase Dashboard:

Authentication > URL Configuration > Redirect URLs

- https://gregpromoht.com/reset-password.html

Also enable leaked-password protection in:

Authentication > Settings > Password Security
