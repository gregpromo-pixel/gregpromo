# Greg Promo Gallery Upload Setup

## 1. Run the SQL
Open Supabase Dashboard -> SQL Editor, paste `SUPABASE_GALLERY_SETUP.sql`, and run it.

## 2. Add your anon public key
Open `site-data.js` and replace:

```js
anonKey: "PASTE_SUPABASE_ANON_PUBLIC_KEY_HERE"
```

with your Supabase anon public key from:

Project Settings -> API -> Project API keys -> anon public

## 3. Upload flow
Visitors submit photos on `gallery.html`.
The image goes to Supabase Storage bucket `activity-gallery`.
The photo info goes to table `activity_photos` with `approved = false`.

## 4. Approve photos
In Supabase SQL Editor:

```sql
select id, name, activity_name, image_url from public.activity_photos where approved = false order by created_at desc;
```

Then approve one:

```sql
update public.activity_photos set approved = true where id = 'PASTE_PHOTO_ID_HERE';
```

Approved photos show on `gallery.html`.

## Important
Do not allow automatic public uploads without review unless you fully trust your audience.
If you want every submitted photo to appear immediately, change in `site-data.js`:

```js
requireApproval: false
```
