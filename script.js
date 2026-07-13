
const CONFIG = window.GP_SITE || {};
const rootEl = document.documentElement;
rootEl.dataset.lang = localStorage.getItem('gp-lang') || 'fr';

function tr(key){return CONFIG.i18n?.[rootEl.dataset.lang]?.[key] || CONFIG.i18n?.fr?.[key] || key;}
function translateExactText(){
  const map = CONFIG.textMap || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      const parent = node.parentElement;
      if(!parent || ['SCRIPT','STYLE','CODE','TEXTAREA','INPUT','SELECT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      const value = node.nodeValue.trim();
      if(!value) return NodeFilter.FILTER_REJECT;
      return Object.values(map).some(pair => pair.fr === value || pair.en === value) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const value=node.nodeValue.trim();
    const pair=Object.values(map).find(p=>p.fr===value || p.en===value);
    if(pair) node.nodeValue = node.nodeValue.replace(value, pair[rootEl.dataset.lang] || pair.fr);
  });
}
function translateAttributes(){
  const map = CONFIG.textMap || {};
  const attrs = ['placeholder','title','aria-label','alt','value'];
  document.querySelectorAll('*').forEach(el=>{
    attrs.forEach(attr=>{
      if(!el.hasAttribute(attr)) return;
      const value = el.getAttribute(attr);
      const pair = Object.values(map).find(p=>p.fr === value || p.en === value);
      if(pair) el.setAttribute(attr, pair[rootEl.dataset.lang] || pair.fr);
    });
  });
}
function applyI18n(){
  document.querySelectorAll('[data-fr][data-en]').forEach(el=>{ const value=el.getAttribute(`data-${rootEl.dataset.lang}`); if(value!=null) el.textContent=value; });
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = tr(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-lang-btn]').forEach(btn=>btn.classList.toggle('is-active', btn.dataset.langBtn === rootEl.dataset.lang));
  translateExactText();
  translateAttributes();
}
function bindLangButtons(){
  document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
    if(btn.dataset.bound) return;
    btn.dataset.bound='true';
    btn.addEventListener('click',()=>{ rootEl.dataset.lang = btn.dataset.langBtn; localStorage.setItem('gp-lang', btn.dataset.langBtn); applyI18n(); if(typeof setupLeagueButtons==='function') setupLeagueButtons(); if(typeof loadSportsBoard==='function') loadSportsBoard(); if(typeof loadCommunityGallery==='function') loadCommunityGallery(); });
  });
}
bindLangButtons(); applyI18n();

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('[data-main-ig]').forEach(a=>a.href=CONFIG.mainInstagram||'#');
document.querySelectorAll('[data-event-ig]').forEach(a=>a.href=CONFIG.eventInstagram||'#');
const menuBtn=document.querySelector('[data-menu-btn]'); const menu=document.querySelector('[data-menu]'); menuBtn?.addEventListener('click',()=>{ const open = menu?.classList.toggle('open'); menuBtn.classList.toggle('is-open', Boolean(open)); menuBtn.setAttribute('aria-expanded', String(Boolean(open))); }); menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open'); menuBtn?.classList.remove('is-open'); menuBtn?.setAttribute('aria-expanded','false');}));

// Contact / inquiry forms
const emailForms = document.querySelectorAll('[data-email-form]');
emailForms.forEach(form=>form.addEventListener('submit',async e=>{
  e.preventDefault();
  const data = new FormData(form);
  const note = form.querySelector('[data-note]');
  if(CONFIG.formspreeEndpoint){
    try{ const res = await fetch(CONFIG.formspreeEndpoint,{method:'POST',body:data,headers:{Accept:'application/json'}}); if(res.ok){form.reset(); if(note)note.textContent=rootEl.dataset.lang==='fr'?'Message envoyé.':'Sent.'; return;} }catch(err){}
  }
  const subject = encodeURIComponent(data.get('subject') || 'Greg Promo Media inquiry');
  const body = encodeURIComponent([...data.entries()].map(([k,v])=>`${k}: ${v}`).join('\n'));
  location.href = `mailto:${CONFIG.bookingEmail||'booking@gregpromo.com'}?subject=${subject}&body=${body}`;
  if(note) note.textContent = rootEl.dataset.lang==='fr'?'Ouverture de votre application mail.':'Opening email app.';
}));

function setupLocalVideos(){
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const videoAliases = {
    hero: [
      CONFIG.videos?.hero,
      'assets/videos/hero-recap.mp4',
      'assets/videos/heros-recap-2.mp4',
      'assets/videos/hero-recap-2.mp4'
    ],
    crowd: [
      CONFIG.videos?.crowd,
      'assets/videos/crowd-energy.mp4',
      'assets/videos/crowd-energys.mp4.mp4',
      'assets/videos/crowd-energys.mp4'
    ],
    eventRecap: [
      CONFIG.videos?.eventRecap,
      'assets/videos/artists-vs-influencers-recap.mp4',
      'assets/videos/artistes-vs-influenceurs-recap.mp4'
    ],
    birthday: [
      CONFIG.videos?.birthday,
      'assets/videos/greg-birthday-film.mp4',
      'assets/videos/greg-birthday-film-2.mp4'
    ],
    fans: [CONFIG.videos?.fans, 'assets/videos/fan-reactions.mp4'],
    performance: [CONFIG.videos?.performance, 'assets/videos/performance.mp4']
  };

  document.querySelectorAll('video[data-video-key]').forEach(video=>{
    const key = video.dataset.videoKey;
    const candidates = [...new Set((videoAliases[key] || [CONFIG.videos?.[key]]).filter(Boolean))];
    const stage = video.closest('.video-stage') || video.parentElement;
    const fallback = stage?.querySelector('[data-video-fallback]');
    const skeleton = stage?.querySelector('.video-skeleton');
    const source = video.querySelector('source');
    let candidateIndex = 0;
    let resolved = false;

    const showFallback = ()=>{
      video.pause();
      video.style.display='none';
      skeleton?.classList.add('is-hidden');
      if(fallback) fallback.style.display='grid';
      stage?.classList.add('has-error');
    };

    const markReady = ()=>{
      resolved = true;
      video.style.display='block';
      if(fallback) fallback.style.display='none';
      skeleton?.classList.add('is-hidden');
      stage?.classList.remove('has-error');
      stage?.classList.add('is-ready');
    };

    const tryNextSource = ()=>{
      if(resolved || !source) return;
      if(candidateIndex >= candidates.length){
        showFallback();
        return;
      }
      source.src = candidates[candidateIndex++];
      video.load();
    };

    if(!source || candidates.length === 0){
      showFallback();
      return;
    }

    video.addEventListener('loadedmetadata', markReady, {once:true});
    video.addEventListener('canplay', markReady, {once:true});
    source.addEventListener('error', tryNextSource);
    video.addEventListener('error', ()=>{
      if(!resolved) tryNextSource();
    });
    tryNextSource();

    if(canHover){
      const card = video.closest('.premium-video-card');
      card?.addEventListener('mouseenter', async ()=>{
        if(video.error || video.readyState < 2) return;
        video.muted = true;
        try{ await video.play(); }catch(_err){}
      });
      card?.addEventListener('mouseleave', ()=>{
        video.pause();
        video.currentTime = 0;
      });
    }
  });


  document.addEventListener('play', event=>{
    if(event.target.tagName !== 'VIDEO') return;
    document.querySelectorAll('video').forEach(other=>{
      if(other !== event.target) other.pause();
    });
  }, true);
}
setupLocalVideos();

function supabaseReady(){ const s = CONFIG.supabase || {}; return Boolean(window.supabase && s.url && s.anonKey && !String(s.anonKey).includes('PASTE_')); }
function getSb(){ const s = CONFIG.supabase || {}; if(!supabaseReady()) return null; return window.supabase.createClient(s.url, s.anonKey); }
async function loadCommunityGallery(){
  const target = document.querySelector('[data-community-gallery]'); if(!target) return;
  const localItems = [
    ['antoine-gregory-profile.jpg','Antoine Gregory','dit Greg Promo'],
    ['women-team-sunset.jpg','Women team','All-Star Game'],
    ['fans-flags-track.jpg','Fans & flags','Trackside energy'],
    ['night-crew.jpg','Artists & creators','After the match'],
    ['player-17-cinematic.jpg','Player tunnel','Match moment'],
    ['fans-track.jpg','Crowd energy','Miami'],
    ['women-player-close.jpg','Women team portrait','All-Star Game']
  ];
  const localHtml = localItems.map(([file,title,caption])=>`<figure class="gallery-tile"><img src="assets/${file}" alt="${title}"><figcaption>${title}<span>${caption}</span></figcaption></figure>`).join('');
  if(!supabaseReady()){ target.innerHTML = localHtml; return; }
  try{
    const sb = getSb();
    const table = CONFIG.supabase.galleryTable || 'gallery_submissions';
    const { data, error } = await sb.from(table).select('*').eq('approved', true).order('created_at', { ascending:false }).limit(30);
    if(error) throw error;
    const uploadedHtml = (data||[]).map(item=>`<figure class="gallery-tile user-upload"><img src="${item.image_url}" alt="${item.event_name || 'Activity photo'}"><figcaption><b>${item.event_name || 'Activity'}</b>${item.caption ? `<span>${item.caption}</span>` : ''}${item.name ? `<small>${rootEl.dataset.lang==='fr'?'Partagé par':'Shared by'} ${item.name}</small>` : ''}</figcaption></figure>`).join('');
    target.innerHTML = uploadedHtml + localHtml;
  }catch(e){ console.warn('Gallery feed unavailable', e); target.innerHTML = localHtml; }
}

async function handlePhotoUpload(form){
  const note = form.querySelector('[data-photo-note]');
  if(!supabaseReady()){ if(note) note.textContent = rootEl.dataset.lang==='fr'?'Les envois seront disponibles bientôt.':'Submissions will be available soon.'; return; }
  const sb = getSb();
  const file = form.querySelector('[name="photo"]')?.files?.[0];
  if(!file){ if(note) note.textContent = rootEl.dataset.lang==='fr'?'Choisissez une photo.':'Please choose a photo.'; return; }
  if(file.size > 8 * 1024 * 1024){ if(note) note.textContent = rootEl.dataset.lang==='fr'?'La photo doit faire moins de 8MB.':'Please upload a photo under 8MB.'; return; }
  const fd = new FormData(form);
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g,'-');
  const path = `submissions/${Date.now()}-${safeName}`;
  const bucket = CONFIG.supabase.galleryBucket || 'greg-promo-gallery';
  const table = CONFIG.supabase.galleryTable || 'gallery_submissions';
  if(note) note.textContent = rootEl.dataset.lang==='fr'?'Envoi en cours...':'Uploading...';
  try{
    const upload = await sb.storage.from(bucket).upload(path, file, { cacheControl: '3600', upsert: false });
    if(upload.error) throw upload.error;
    const publicUrl = sb.storage.from(bucket).getPublicUrl(path).data.publicUrl;
    const approved = CONFIG.supabase.requireApproval ? false : true;
    const row = {
      name: String(fd.get('name')||'').trim(),
      event_name: String(fd.get('activity_name')||'Greg Promo Event').trim(),
      caption: String(fd.get('caption')||'').trim(),
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
  }catch(err){ if(note) note.textContent = rootEl.dataset.lang==='fr'?'La photo n’a pas pu être envoyée. Réessayez plus tard.':'The photo could not be submitted. Please try again later.'; console.error(err); }
}

document.querySelectorAll('[data-photo-upload-form]').forEach(form=>form.addEventListener('submit', e=>{e.preventDefault(); handlePhotoUpload(form);}));
loadCommunityGallery();

// Soccer board
const api=CONFIG.soccerApi||{};let selectedCompetition=api.defaultCompetition||'laliga';let selectedSeason=api.defaultSeason||'2024';
function status(message,tone='neutral'){document.querySelectorAll('[data-sports-status]').forEach(el=>{el.textContent=message;el.dataset.tone=tone;});}
function leagueLabel(item){return rootEl.dataset.lang==='fr' && item.frLabel ? item.frLabel : item.label;}
function countryLabel(item){return rootEl.dataset.lang==='fr' && item.frCountry ? item.frCountry : item.country;}
function setupLeagueButtons(){const box=document.querySelector('[data-league-buttons]');if(!box||!api.competitions)return;box.innerHTML=api.competitions.map(l=>`<button class="league-button" data-league="${l.key}"><span>${leagueLabel(l)}</span><small>${countryLabel(l)}</small></button>`).join('');box.querySelectorAll('[data-league]').forEach(btn=>btn.addEventListener('click',()=>{selectedCompetition=btn.dataset.league;updateActiveLeague();loadSportsBoard();}));updateActiveLeague();}
function updateActiveLeague(){document.querySelectorAll('[data-league]').forEach(btn=>btn.classList.toggle('is-active',btn.dataset.league===selectedCompetition));const item=api.competitions?.find(x=>x.key===selectedCompetition);document.querySelectorAll('[data-current-league]').forEach(el=>el.textContent=item?leagueLabel(item):selectedCompetition);}
function setupSeason(){const select=document.querySelector('[data-season-select]');if(!select)return;const normal=(api.availableSeasons||['2024','2023','2022']).map(s=>`<option value="${s}">${s}</option>`).join('');const locked=(api.lockedSeasons||[]).map(s=>`<option value="${s}" disabled>${s}</option>`).join('');select.innerHTML=normal+locked;select.value=selectedSeason;select.addEventListener('change',()=>{selectedSeason=select.value;loadSportsBoard();});}
async function fetchSoccer(type){if(!api.proxyUrl)throw new Error('missing-url');const url=new URL(api.proxyUrl);url.searchParams.set('competition',selectedCompetition);url.searchParams.set('type',type);url.searchParams.set('season',selectedSeason);const res=await fetch(url.toString());const json=await res.json().catch(()=>({ok:false}));if(!res.ok||json?.ok===false||json?.data?.errors&&Object.keys(json.data.errors).length){throw new Error('sports-data-unavailable')}return json;}
async function getSportsType(type){try{return await fetchSoccer(type)}catch(e){return null}}
async function loadSportsBoard(){if(!document.querySelector('[data-sports-board]'))return;updateActiveLeague();status(rootEl.dataset.lang==='fr'?'Chargement...':'Loading...');const [fixturesJson,standingsJson,scorersJson]=await Promise.all([getSportsType('fixtures'),getSportsType('standings'),getSportsType('scorers')]);const fixtures=fixturesJson?.data?.response||[];const standings=standingsJson?.data?.response?.[0]?.league?.standings?.[0]||[];const scorers=scorersJson?.data?.response||[];if(fixtures.length||standings.length||scorers.length){renderFixtures(fixtures);renderStandings(standings);renderScorers(scorers);status(`${rootEl.dataset.lang==='fr'?'Données chargées':'Board loaded'} • ${selectedSeason}`,'success');}else{status(rootEl.dataset.lang==='fr'?'Aperçu affiché':'Preview shown','warning');loadDemoSports();}}
function loadDemoSports(){const data=CONFIG.demoSports||{};renderDemoFixtures(data.matches||[]);renderDemoStandings(data.standings||[]);renderDemoScorers(data.scorers||[]);}
function pickFixtures(list){if(!list.length)return[];return [...list].sort((a,b)=>new Date(b.fixture?.date||0)-new Date(a.fixture?.date||0)).slice(0,8).reverse();}
function renderFixtures(list){const rows=pickFixtures(list);const html=rows.length?rows.map(item=>{const h=item.teams?.home?.name||'Home';const a=item.teams?.away?.name||'Away';const gh=item.goals?.home, ga=item.goals?.away;const score=(gh==null||ga==null)?'vs':`${gh}–${ga}`;const date=item.fixture?.date?new Date(item.fixture.date).toLocaleString([], {dateStyle:'medium',timeStyle:'short'}):'TBD';return `<article class="score-card"><div class="team">${h}</div><div class="score">${score}</div><div class="team">${a}</div><small>${item.fixture?.status?.long||'Scheduled'} · ${date}</small></article>`}).join(''):`<p class="note">${rootEl.dataset.lang==='fr'?'Aucun match pour cette sélection.':'No matches for this selection.'}</p>`;document.querySelectorAll('[data-fixtures]').forEach(el=>el.innerHTML=html);}
function renderStandings(rows){const html=rows.length?`<table class="live-table"><thead><tr><th>#</th><th>${rootEl.dataset.lang==='fr'?'Équipe':'Team'}</th><th>MP</th><th>Pts</th><th>GD</th></tr></thead><tbody>${rows.slice(0,20).map(r=>`<tr><td>${r.rank??'-'}</td><td>${r.team?.logo?`<img class="team-logo" src="${r.team.logo}" alt="">`:''}<strong>${r.team?.name||'Team'}</strong></td><td>${r.all?.played??'-'}</td><td><strong>${r.points??'-'}</strong></td><td>${r.goalsDiff??'-'}</td></tr>`).join('')}</tbody></table>`:`<p class="note">${rootEl.dataset.lang==='fr'?'Aucun classement pour cette sélection.':'No standings for this selection.'}</p>`;document.querySelectorAll('[data-standings]').forEach(el=>el.innerHTML=html);}
function renderScorers(rows){const html=rows.length?rows.slice(0,10).map((item,i)=>{const s=item.statistics?.[0]||{};return `<article class="scorer-row"><span>${i+1}</span><div><strong>${item.player?.name||'Player'}</strong><br><em>${s.team?.name||''}</em></div><b>${s.goals?.total??0} ${rootEl.dataset.lang==='fr'?'buts':'goals'}</b></article>`}).join(''):`<p class="note">${rootEl.dataset.lang==='fr'?'Aucun buteur pour cette sélection.':'No scorers for this selection.'}</p>`;document.querySelectorAll('[data-scorers]').forEach(el=>el.innerHTML=html);}
function renderDemoFixtures(rows){document.querySelectorAll('[data-fixtures]').forEach(el=>el.innerHTML=(rows||[]).map(m=>`<article class="score-card"><div class="team">${m.home}</div><div class="score">${m.score}</div><div class="team">${m.away}</div><small>${m.status}</small></article>`).join(''));}
function renderDemoStandings(rows){document.querySelectorAll('[data-standings]').forEach(el=>el.innerHTML=`<table class="live-table"><thead><tr><th>#</th><th>${rootEl.dataset.lang==='fr'?'Équipe':'Team'}</th><th>Pts</th><th>GD</th></tr></thead><tbody>${(rows||[]).map(r=>`<tr><td>${r.pos}</td><td><strong>${r.team}</strong></td><td><strong>${r.pts}</strong></td><td>${r.gd}</td></tr>`).join('')}</tbody></table>`);}
function renderDemoScorers(rows){document.querySelectorAll('[data-scorers]').forEach(el=>el.innerHTML=(rows.length?rows:[{name:'Featured Player',team:'Greg Promo All-Star',goals:0}]).map((r,i)=>`<article class="scorer-row"><span>${i+1}</span><div><strong>${r.name}</strong><br><em>${r.team}</em></div><b>${r.goals} ${rootEl.dataset.lang==='fr'?'buts':'goals'}</b></article>`).join(''));}
setupLeagueButtons();setupSeason();loadSportsBoard();
// Pause other videos when a new one starts.
document.querySelectorAll('video').forEach(video=>{video.setAttribute('playsinline','');video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==video&&!other.paused)other.pause();});});});
