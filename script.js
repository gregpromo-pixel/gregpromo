/* =========================================================================
   Greg Promo Media — site behavior

   Changes from the previous version, for the record:
   - SECURITY: community gallery captions/names came from Supabase (i.e.
     from a public submission form) and were interpolated straight into
     innerHTML with no escaping — a stored-XSS hole. Everything untrusted
     now goes through escapeHtml() before it touches the DOM.
   - i18n: removed the TreeWalker-based "scan every text node and swap it
     if it happens to match a string in textMap" translator. It looked
     convenient but was fragile (broke silently on any whitespace/markup
     change) and could translate the wrong occurrence of a duplicated
     phrase. Every page now carries data-fr/data-en (or data-i18n for
     dictionary-keyed nav/labels) directly on the elements that need it,
     which is what actually gets translated on toggle.
   - Video fallback handling now also covers the homepage hero video, not
     just the Video Room page.
   ========================================================================= */

const CONFIG = window.GP_SITE || {};
const rootEl = document.documentElement;
try{
  rootEl.dataset.lang = localStorage.getItem('gp-lang') || 'fr';
}catch(_storageError){
  rootEl.dataset.lang = 'fr';
}
rootEl.lang = rootEl.dataset.lang;
rootEl.classList.add('js');

function escapeHtml(value){
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function tr(key){ return CONFIG.i18n?.[rootEl.dataset.lang]?.[key] || CONFIG.i18n?.fr?.[key] || key; }

function applyI18n(){
  rootEl.lang = rootEl.dataset.lang;
  document.querySelectorAll('[data-fr][data-en]').forEach(el=>{
    const value = el.getAttribute(`data-${rootEl.dataset.lang}`);
    if(value != null) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = tr(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-fr-attr][data-en-attr][data-attr-name]').forEach(el=>{
    const value = el.getAttribute(`data-${rootEl.dataset.lang}-attr`);
    if(value != null) el.setAttribute(el.dataset.attrName, value);
  });
  document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
    const active = btn.dataset.langBtn === rootEl.dataset.lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function bindLangButtons(){
  document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
    if(btn.dataset.bound) return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', ()=>{
      rootEl.dataset.lang = btn.dataset.langBtn;
      try{ localStorage.setItem('gp-lang', btn.dataset.langBtn); }catch(_storageError){ /* private/restricted mode */ }
      applyI18n();
      if(typeof setupLeagueButtons === 'function') setupLeagueButtons();
      if(typeof loadSportsBoard === 'function') loadSportsBoard();
      if(typeof loadCommunityGallery === 'function') loadCommunityGallery();
    });
  });
}

bindLangButtons();
applyI18n();

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

/* ---------- Instagram icon injection ---------- */
const INSTAGRAM_ICON = `
  <svg class="instagram-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
    <circle cx="12" cy="12" r="4.2"></circle>
    <circle class="instagram-dot" cx="17.4" cy="6.7" r="1.1"></circle>
  </svg>`;

function setupInstagramLink(anchor, url, label){
  if(!anchor) return;
  anchor.href = url || '#';
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.setAttribute('aria-label', label);
  anchor.setAttribute('title', label);

  // Icon-only anchors are injected. Rich contact rows keep their existing
  // accessible label and layout instead of being overwritten.
  const iconOnly = anchor.classList.contains('social-icon-link') || anchor.childElementCount === 0;
  if(iconOnly){
    anchor.classList.add('social-icon-link');
    anchor.innerHTML = INSTAGRAM_ICON + `<span class="sr-only">${escapeHtml(label)}</span>`;
    anchor.parentElement?.classList.add('social-icon-group');
  }
}

document.querySelectorAll('[data-main-ig]').forEach(anchor => setupInstagramLink(anchor, CONFIG.mainInstagram, 'Instagram Greg Promo'));
document.querySelectorAll('[data-event-ig]').forEach(anchor => setupInstagramLink(anchor, CONFIG.eventInstagram, 'Instagram Greg Promo Event'));

/* ---------- Contact details (single source of truth: CONFIG) ---------- */
function applyContactInformation(){
  const email = CONFIG.contactEmail || CONFIG.bookingEmail || 'contact@gregpromoht.com';
  const phoneDisplay = CONFIG.contactPhone || '+1 (954) 931-1514';
  const phoneHref = CONFIG.contactPhoneHref || '+19549311514';

  document.querySelectorAll('[data-contact-email]').forEach(link=>{
    link.href = `mailto:${email}`;
    const target = link.querySelector('strong') || link;
    target.textContent = email;
  });

  document.querySelectorAll('[data-contact-phone]').forEach(link=>{
    link.href = `tel:${phoneHref}`;
    const target = link.querySelector('strong') || link;
    target.textContent = phoneDisplay;
  });
}
applyContactInformation();

/* ---------- Floating header + mobile menu ---------- */
const siteHeader = document.querySelector('.site-header');
const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');

function setMenuState(open){
  menu?.classList.toggle('open', Boolean(open));
  menuBtn?.classList.toggle('is-open', Boolean(open));
  menuBtn?.setAttribute('aria-expanded', String(Boolean(open)));
  document.body.classList.toggle('menu-open', Boolean(open));
}

menuBtn?.addEventListener('click', ()=>setMenuState(!menu?.classList.contains('open')));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>setMenuState(false)));
document.addEventListener('keydown', event=>{ if(event.key === 'Escape') setMenuState(false); });
document.addEventListener('click', event=>{
  if(!menu?.classList.contains('open')) return;
  if(siteHeader?.contains(event.target)) return;
  setMenuState(false);
});

function syncHeaderState(){ siteHeader?.classList.toggle('is-scrolled', window.scrollY > 12); }
syncHeaderState();
window.addEventListener('scroll', syncHeaderState, { passive:true });

/* ---------- Subtle reveal animation ---------- */
const revealItems = document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const revealObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold:.12, rootMargin:'0px 0px -40px' });
  revealItems.forEach(item=>revealObserver.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add('is-visible'));
}

/* ---------- Contact / inquiry forms (mailto fallback) ---------- */
document.querySelectorAll('[data-email-form]').forEach(form => form.addEventListener('submit', async e=>{
  e.preventDefault();
  const data = new FormData(form);
  const note = form.querySelector('[data-note]');
  if(CONFIG.formspreeEndpoint){
    try{
      const res = await fetch(CONFIG.formspreeEndpoint, { method:'POST', body:data, headers:{ Accept:'application/json' } });
      if(res.ok){
        form.reset();
        if(note) note.textContent = rootEl.dataset.lang === 'fr' ? 'Message envoyé.' : 'Sent.';
        return;
      }
    }catch(_err){ /* fall through to mailto */ }
  }
  const subject = encodeURIComponent(data.get('subject') || 'Greg Promo Media inquiry');
  const body = encodeURIComponent([...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n'));
  location.href = `mailto:${CONFIG.contactEmail || CONFIG.bookingEmail || 'contact@gregpromoht.com'}?subject=${subject}&body=${body}`;
  if(note) note.textContent = rootEl.dataset.lang === 'fr' ? 'Ouverture de votre application mail.' : 'Opening email app.';
}));

/* ---------- Local video playback with graceful fallback ----------
   Works for both the compact Video Room cards (.video-stage) and the
   homepage hero clip (.media-frame, which already has a poster <img>
   sitting underneath — so on failure we just hide the <video>). */
function setupLocalVideos(){
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll('video[data-video-key]').forEach(video=>{
    const key = video.dataset.videoKey;
    const configured = CONFIG.videos?.[key];
    const stage = video.closest('.video-stage') || video.closest('.media-frame');
    const fallback = stage?.querySelector('[data-video-fallback]');
    const skeleton = stage?.querySelector('.video-skeleton');
    const source = video.querySelector('source');
    let resolved = false;

    const showFallback = ()=>{
      video.pause();
      if(stage?.classList.contains('media-frame')){
        video.classList.add('has-failed'); // poster <img> beneath shows through
      }else{
        video.style.display = 'none';
      }
      skeleton?.classList.add('is-hidden');
      if(fallback) fallback.style.display = 'grid';
      stage?.classList.add('has-error');
    };

    const markReady = ()=>{
      resolved = true;
      video.style.display = 'block';
      video.classList.remove('has-failed');
      if(fallback) fallback.style.display = 'none';
      skeleton?.classList.add('is-hidden');
      stage?.classList.remove('has-error');
      stage?.classList.add('is-ready');
    };

    if(!source || !configured){ showFallback(); return; }

    video.addEventListener('loadedmetadata', markReady, { once:true });
    video.addEventListener('canplay', markReady, { once:true });
    source.addEventListener('error', ()=>{ if(!resolved) showFallback(); });
    video.addEventListener('error', ()=>{ if(!resolved) showFallback(); });
    source.src = configured;
    video.load();

    if(canHover){
      const card = video.closest('.premium-video-card');
      card?.addEventListener('mouseenter', async ()=>{
        if(video.error || video.readyState < 2) return;
        video.muted = true;
        try{ await video.play(); }catch(_err){ /* autoplay can be blocked; ignore */ }
      });
      card?.addEventListener('mouseleave', ()=>{ video.pause(); video.currentTime = 0; });
    }
  });

  document.addEventListener('play', event=>{
    if(event.target.tagName !== 'VIDEO') return;
    document.querySelectorAll('video').forEach(other=>{ if(other !== event.target) other.pause(); });
  }, true);
}
setupLocalVideos();

/* ---------- Supabase-backed community gallery ---------- */
function supabaseReady(){
  const s = CONFIG.supabase || {};
  return Boolean(window.supabase && s.url && s.anonKey && !String(s.anonKey).includes('PASTE_'));
}
function getSb(){
  const s = CONFIG.supabase || {};
  return supabaseReady() ? window.supabase.createClient(s.url, s.anonKey) : null;
}

const LOCAL_GALLERY_ITEMS = [
  ['antoine-gregory-profile.jpg', 'Antoine Gregory', 'dit Greg Promo'],
  ['women-team-sunset.jpg', 'Women team', 'All-Star Game'],
  ['fans-flags-track.jpg', 'Fans & flags', 'Trackside energy'],
  ['night-crew.jpg', 'Artists & creators', 'After the match'],
  ['player-17-cinematic.jpg', 'Player tunnel', 'Match moment'],
  ['fans-track.jpg', 'Crowd energy', 'Miami'],
  ['women-player-close.jpg', 'Women team portrait', 'All-Star Game']
];

function renderLocalGalleryHtml(){
  return LOCAL_GALLERY_ITEMS.map(([file, title, caption]) => `
    <figure class="gallery-tile">
      <img src="assets/${file}" alt="${escapeHtml(title)}" loading="lazy">
      <figcaption>${escapeHtml(title)}<span>${escapeHtml(caption)}</span></figcaption>
    </figure>`).join('');
}

async function loadCommunityGallery(){
  const target = document.querySelector('[data-community-gallery]');
  if(!target) return;
  const localHtml = renderLocalGalleryHtml();

  if(!supabaseReady()){ target.innerHTML = localHtml; return; }

  try{
    const sb = getSb();
    const table = CONFIG.supabase.galleryTable || 'gallery_submissions';
    const { data, error } = await sb.from(table).select('*').eq('approved', true).order('created_at', { ascending:false }).limit(30);
    if(error) throw error;

    const sharedByLabel = rootEl.dataset.lang === 'fr' ? 'Partagé par' : 'Shared by';
    const uploadedHtml = (data || []).map(item => `
      <figure class="gallery-tile user-upload">
        <img src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.event_name || 'Activity photo')}" loading="lazy">
        <figcaption>
          <b>${escapeHtml(item.event_name || 'Activity')}</b>
          ${item.caption ? `<span>${escapeHtml(item.caption)}</span>` : ''}
          ${item.name ? `<small>${sharedByLabel} ${escapeHtml(item.name)}</small>` : ''}
        </figcaption>
      </figure>`).join('');

    target.innerHTML = uploadedHtml + localHtml;
  }catch(err){
    console.warn('Gallery feed unavailable', err);
    target.innerHTML = localHtml;
  }
}

async function handlePhotoUpload(form){
  const note = form.querySelector('[data-photo-note]');
  if(!supabaseReady()){
    if(note) note.textContent = tr('uploadSetup');
    return;
  }
  const sb = getSb();
  const file = form.querySelector('[name="photo"]')?.files?.[0];
  if(!file){
    if(note) note.textContent = rootEl.dataset.lang === 'fr' ? 'Choisissez une photo.' : 'Please choose a photo.';
    return;
  }
  if(file.size > 8 * 1024 * 1024){
    if(note) note.textContent = rootEl.dataset.lang === 'fr' ? 'La photo doit faire moins de 8 Mo.' : 'Please upload a photo under 8MB.';
    return;
  }

  const fd = new FormData(form);
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
  const path = `submissions/${Date.now()}-${safeName}`;
  const bucket = CONFIG.supabase.galleryBucket || 'greg-promo-gallery';
  const table = CONFIG.supabase.galleryTable || 'gallery_submissions';

  if(note) note.textContent = rootEl.dataset.lang === 'fr' ? 'Envoi en cours...' : 'Uploading...';

  try{
    const upload = await sb.storage.from(bucket).upload(path, file, { cacheControl: '3600', upsert: false });
    if(upload.error) throw upload.error;

    const publicUrl = sb.storage.from(bucket).getPublicUrl(path).data.publicUrl;
    const approved = CONFIG.supabase.requireApproval ? false : true;
    const row = {
      name: String(fd.get('name') || '').trim().slice(0, 120),
      event_name: String(fd.get('activity_name') || 'Greg Promo Event').trim().slice(0, 160),
      caption: String(fd.get('caption') || '').trim().slice(0, 300),
      image_url: publicUrl,
      image_path: path,
      approved,
      featured: false
    };
    const insert = await sb.from(table).insert(row);
    if(insert.error) throw insert.error;

    form.reset();
    if(note) note.textContent = approved ? tr('uploadReady') : tr('uploadPending');
    loadCommunityGallery();
  }catch(err){
    if(note) note.textContent = rootEl.dataset.lang === 'fr'
      ? 'La photo n\u2019a pas pu être envoyée. Réessayez plus tard.'
      : 'The photo could not be submitted. Please try again later.';
    console.error(err);
  }
}

document.querySelectorAll('[data-photo-upload-form]').forEach(form => form.addEventListener('submit', e=>{
  e.preventDefault();
  handlePhotoUpload(form);
}));
loadCommunityGallery();

/* ---------- Sports board ---------- */
const api = CONFIG.soccerApi || {};
let selectedCompetition = api.defaultCompetition || 'laliga';
let selectedSeason = api.defaultSeason || '2024';

function status(message, tone = 'neutral'){
  document.querySelectorAll('[data-sports-status]').forEach(el=>{ el.textContent = message; el.dataset.tone = tone; });
}
function leagueLabel(item){ return rootEl.dataset.lang === 'fr' && item.frLabel ? item.frLabel : item.label; }
function countryLabel(item){ return rootEl.dataset.lang === 'fr' && item.frCountry ? item.frCountry : item.country; }

function setupLeagueButtons(){
  const box = document.querySelector('[data-league-buttons]');
  if(!box || !api.competitions) return;
  box.innerHTML = api.competitions.map(l => `
    <button class="league-button" data-league="${escapeHtml(l.key)}" type="button">
      <span>${escapeHtml(leagueLabel(l))}</span><small>${escapeHtml(countryLabel(l))}</small>
    </button>`).join('');
  box.querySelectorAll('[data-league]').forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', ()=>{
      selectedCompetition = btn.dataset.league;
      updateActiveLeague();
      loadSportsBoard();
    });
  });
  updateActiveLeague();
}

function updateActiveLeague(){
  document.querySelectorAll('[data-league]').forEach(btn => {
    const active = btn.dataset.league === selectedCompetition;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  const item = api.competitions?.find(x => x.key === selectedCompetition);
  document.querySelectorAll('[data-current-league]').forEach(el => el.textContent = item ? leagueLabel(item) : selectedCompetition);
}

function setupSeason(){
  const select = document.querySelector('[data-season-select]');
  if(!select) return;
  const normal = (api.availableSeasons || ['2024', '2023', '2022']).map(s => `<option value="${s}">${s}</option>`).join('');
  const locked = (api.lockedSeasons || []).map(s => `<option value="${s}" disabled>${s}</option>`).join('');
  select.innerHTML = normal + locked;
  select.value = selectedSeason;
  select.addEventListener('change', ()=>{ selectedSeason = select.value; loadSportsBoard(); });
}

async function fetchSoccer(type){
  if(!api.proxyUrl) throw new Error('missing-url');
  const url = new URL(api.proxyUrl);
  url.searchParams.set('competition', selectedCompetition);
  url.searchParams.set('type', type);
  url.searchParams.set('season', selectedSeason);
  const res = await fetch(url.toString());
  const json = await res.json().catch(()=>({ ok:false }));
  if(!res.ok || json?.ok === false || (json?.data?.errors && Object.keys(json.data.errors).length)){
    throw new Error('sports-data-unavailable');
  }
  return json;
}
async function getSportsType(type){
  try{ return await fetchSoccer(type); }
  catch(_e){ return null; }
}

async function loadSportsBoard(){
  if(!document.querySelector('[data-sports-board]')) return;
  updateActiveLeague();
  status(rootEl.dataset.lang === 'fr' ? 'Chargement...' : 'Loading...');

  const [fixturesJson, standingsJson, scorersJson] = await Promise.all([
    getSportsType('fixtures'), getSportsType('standings'), getSportsType('scorers')
  ]);
  const fixtures = fixturesJson?.data?.response || [];
  const standings = standingsJson?.data?.response?.[0]?.league?.standings?.[0] || [];
  const scorers = scorersJson?.data?.response || [];

  if(fixtures.length || standings.length || scorers.length){
    renderFixtures(fixtures);
    renderStandings(standings);
    renderScorers(scorers);
    status(`${rootEl.dataset.lang === 'fr' ? 'Données chargées' : 'Board loaded'} • ${selectedSeason}`, 'success');
  }else{
    status(rootEl.dataset.lang === 'fr' ? 'Aperçu affiché' : 'Preview shown', 'warning');
    loadDemoSports();
  }
}

function loadDemoSports(){
  const data = CONFIG.demoSports || {};
  renderDemoFixtures(data.matches || []);
  renderDemoStandings(data.standings || []);
  renderDemoScorers(data.scorers || []);
}

function pickFixtures(list){
  if(!list.length) return [];
  return [...list].sort((a, b) => new Date(b.fixture?.date || 0) - new Date(a.fixture?.date || 0)).slice(0, 8).reverse();
}

function renderFixtures(list){
  const rows = pickFixtures(list);
  const html = rows.length ? rows.map(item=>{
    const h = item.teams?.home?.name || 'Home';
    const a = item.teams?.away?.name || 'Away';
    const gh = item.goals?.home, ga = item.goals?.away;
    const score = (gh == null || ga == null) ? 'vs' : `${gh}–${ga}`;
    const locale = rootEl.dataset.lang === 'fr' ? 'fr-FR' : 'en-US';
    const date = item.fixture?.date ? new Date(item.fixture.date).toLocaleString(locale, { dateStyle:'medium', timeStyle:'short' }) : 'TBD';
    return `<article class="score-card"><div class="team">${escapeHtml(h)}</div><div class="score">${escapeHtml(score)}</div><div class="team">${escapeHtml(a)}</div><small>${escapeHtml(item.fixture?.status?.long || 'Scheduled')} · ${escapeHtml(date)}</small></article>`;
  }).join('') : `<p class="note">${rootEl.dataset.lang === 'fr' ? 'Aucun match pour cette sélection.' : 'No matches for this selection.'}</p>`;
  document.querySelectorAll('[data-fixtures]').forEach(el => el.innerHTML = html);
}

function renderStandings(rows){
  const teamLabel = rootEl.dataset.lang === 'fr' ? 'Équipe' : 'Team';
  const html = rows.length ? `<table class="live-table"><thead><tr><th>#</th><th>${teamLabel}</th><th>MP</th><th>Pts</th><th>GD</th></tr></thead><tbody>${
    rows.slice(0, 20).map(r => `<tr><td>${escapeHtml(r.rank ?? '-')}</td><td>${r.team?.logo ? `<img class="team-logo" src="${escapeHtml(r.team.logo)}" alt="" loading="lazy">` : ''}<strong>${escapeHtml(r.team?.name || 'Team')}</strong></td><td>${escapeHtml(r.all?.played ?? '-')}</td><td><strong>${escapeHtml(r.points ?? '-')}</strong></td><td>${escapeHtml(r.goalsDiff ?? '-')}</td></tr>`).join('')
  }</tbody></table>` : `<p class="note">${rootEl.dataset.lang === 'fr' ? 'Aucun classement pour cette sélection.' : 'No standings for this selection.'}</p>`;
  document.querySelectorAll('[data-standings]').forEach(el => el.innerHTML = html);
}

function renderScorers(rows){
  const goalsLabel = rootEl.dataset.lang === 'fr' ? 'buts' : 'goals';
  const html = rows.length ? rows.slice(0, 10).map((item, i)=>{
    const s = item.statistics?.[0] || {};
    return `<article class="scorer-row"><span>${i + 1}</span><div><strong>${escapeHtml(item.player?.name || 'Player')}</strong><br><em>${escapeHtml(s.team?.name || '')}</em></div><b>${escapeHtml(s.goals?.total ?? 0)} ${goalsLabel}</b></article>`;
  }).join('') : `<p class="note">${rootEl.dataset.lang === 'fr' ? 'Aucun buteur pour cette sélection.' : 'No scorers for this selection.'}</p>`;
  document.querySelectorAll('[data-scorers]').forEach(el => el.innerHTML = html);
}

function renderDemoFixtures(rows){
  document.querySelectorAll('[data-fixtures]').forEach(el => el.innerHTML = (rows || []).map(m =>
    `<article class="score-card"><div class="team">${escapeHtml(m.home)}</div><div class="score">${escapeHtml(m.score)}</div><div class="team">${escapeHtml(m.away)}</div><small>${escapeHtml(m.status)}</small></article>`
  ).join(''));
}
function renderDemoStandings(rows){
  const teamLabel = rootEl.dataset.lang === 'fr' ? 'Équipe' : 'Team';
  document.querySelectorAll('[data-standings]').forEach(el => el.innerHTML =
    `<table class="live-table"><thead><tr><th>#</th><th>${teamLabel}</th><th>Pts</th><th>GD</th></tr></thead><tbody>${
      (rows || []).map(r => `<tr><td>${escapeHtml(r.pos)}</td><td><strong>${escapeHtml(r.team)}</strong></td><td><strong>${escapeHtml(r.pts)}</strong></td><td>${escapeHtml(r.gd)}</td></tr>`).join('')
    }</tbody></table>`);
}
function renderDemoScorers(rows){
  const goalsLabel = rootEl.dataset.lang === 'fr' ? 'buts' : 'goals';
  const list = rows.length ? rows : [{ name:'Featured Player', team:'Greg Promo All-Star', goals:0 }];
  document.querySelectorAll('[data-scorers]').forEach(el => el.innerHTML = list.map((r, i) =>
    `<article class="scorer-row"><span>${i + 1}</span><div><strong>${escapeHtml(r.name)}</strong><br><em>${escapeHtml(r.team)}</em></div><b>${escapeHtml(r.goals)} ${goalsLabel}</b></article>`
  ).join(''));
}

document.querySelectorAll('[data-refresh-sports]').forEach(button=>button.addEventListener('click', loadSportsBoard));
setupLeagueButtons();
setupSeason();
loadSportsBoard();