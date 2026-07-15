(() => {
  const cfg = window.GP_SITE?.supabase;
  if (!cfg || !window.supabase) return;
  const sb = window.gpSupabase || (window.gpSupabase = window.supabase.createClient(cfg.url, cfg.anonKey));
  const root = document.documentElement;
  const lang = () => root.dataset.lang === 'en' ? 'en' : 'fr';
  const pick = (row, field) => row?.[`${field}_${lang()}`] || row?.[`${field}_fr`] || row?.[`${field}_en`] || '';
  const esc = (v='') => String(v).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const textToHtml = (v='') => String(v).split(/\n{2,}/).map(x=>`<p>${esc(x).replace(/\n/g,'<br>')}</p>`).join('');
  function dateLabel(v){ if(!v) return ''; return new Intl.DateTimeFormat(lang()==='fr'?'fr-FR':'en-US',{year:'numeric',month:'long',day:'numeric'}).format(new Date(v)); }

  async function loadArticleList(){
    const target=document.querySelector('[data-cms-articles]'); if(!target) return;
    const {data,error}=await sb.from('articles').select('*').eq('status','published').order('published_at',{ascending:false,nullsFirst:false}).order('created_at',{ascending:false});
    if(error){ target.innerHTML=`<p class="note">${lang()==='fr'?'Articles indisponibles pour le moment.':'Articles are temporarily unavailable.'}</p>`; return; }
    if(!data?.length){ target.innerHTML=`<p class="note">${lang()==='fr'?'Les prochains articles apparaîtront ici.':'New articles will appear here.'}</p>`; return; }
    target.innerHTML=data.map(a=>`<article class="cms-card"><a class="cms-card-media" href="article.html?slug=${encodeURIComponent(a.slug)}"><img src="${esc(a.cover_image||'assets/event-crowd.jpg')}" alt="${esc(pick(a,'title'))}" loading="lazy"></a><div class="cms-card-body"><span class="tag">${esc(a.category||'Culture')}</span><p class="cms-date">${esc(dateLabel(a.published_at||a.created_at))}</p><h2>${esc(pick(a,'title'))}</h2><p>${esc(pick(a,'summary'))}</p><a class="read-link-dark" href="article.html?slug=${encodeURIComponent(a.slug)}">${lang()==='fr'?'Lire l’article →':'Read article →'}</a></div></article>`).join('');
  }

  async function loadArticle(){
    const target=document.querySelector('[data-cms-article]'); if(!target) return;
    const slug=new URLSearchParams(location.search).get('slug');
    if(!slug){ target.innerHTML='<p>Article not found.</p>'; return; }
    const {data:a,error}=await sb.from('articles').select('*,article_images(*)').eq('slug',slug).eq('status','published').maybeSingle();
    if(error||!a){ target.innerHTML=`<p>${lang()==='fr'?'Article introuvable.':'Article not found.'}</p>`; return; }
    document.title=`${pick(a,'title')} — Greg Promo Media`;
    const photos=(a.article_images||[]).sort((x,y)=>(x.display_order||0)-(y.display_order||0));
    target.innerHTML=`<header class="cms-detail-head"><span class="tag">${esc(a.category||'Culture')}</span><p class="cms-date">${esc(dateLabel(a.published_at||a.created_at))}</p><h1>${esc(pick(a,'title'))}</h1><p class="lead">${esc(pick(a,'summary'))}</p>${a.author_name?`<p class="cms-author">${lang()==='fr'?'Par':'By'} ${esc(a.author_name)}</p>`:''}</header>${a.cover_image?`<img class="cms-detail-cover" src="${esc(a.cover_image)}" alt="${esc(pick(a,'title'))}">`:''}<div class="cms-detail-body">${textToHtml(pick(a,'content'))}</div>${photos.length?`<div class="cms-article-gallery">${photos.map(ph=>`<figure><img src="${esc(ph.image_url)}" alt="${esc(pick(ph,'alt')||pick(ph,'caption')||pick(a,'title'))}" loading="lazy"><figcaption>${esc(pick(ph,'caption'))}</figcaption></figure>`).join('')}</div>`:''}`;
  }

  async function loadEventList(){
    const target=document.querySelector('[data-cms-events]'); if(!target) return;
    const {data,error}=await sb.from('events').select('*,event_editions(*)').eq('status','published').order('featured',{ascending:false}).order('created_at',{ascending:false});
    if(error){ target.innerHTML=`<p class="note">${lang()==='fr'?'Événements indisponibles.':'Events are unavailable.'}</p>`; return; }
    target.innerHTML=(data||[]).map(e=>{ const editions=(e.event_editions||[]).sort((a,b)=>(b.year||0)-(a.year||0)); const years=editions.map(x=>x.year).filter(Boolean).join(' · '); return `<article class="cms-card"><a class="cms-card-media" href="event.html?slug=${encodeURIComponent(e.slug)}"><img src="${esc(e.cover_image||editions[0]?.poster_image||'assets/event-crowd.jpg')}" alt="${esc(pick(e,'title'))}" loading="lazy"></a><div class="cms-card-body"><span class="tag">${esc(years||'Event')}</span><h2>${esc(pick(e,'title'))}</h2><p>${esc(pick(e,'summary'))}</p><a class="read-link-dark" href="event.html?slug=${encodeURIComponent(e.slug)}">${lang()==='fr'?'Voir l’événement →':'View event →'}</a></div></article>`; }).join('') || `<p class="note">${lang()==='fr'?'Les événements apparaîtront ici.':'Events will appear here.'}</p>`;
  }

  async function loadEvent(){
    const target=document.querySelector('[data-cms-event]'); if(!target) return;
    const slug=new URLSearchParams(location.search).get('slug');
    const {data:e,error}=await sb.from('events').select('*,event_editions(*,event_photos(*))').eq('slug',slug).eq('status','published').maybeSingle();
    if(error||!e){ target.innerHTML=`<p>${lang()==='fr'?'Événement introuvable.':'Event not found.'}</p>`; return; }
    document.title=`${pick(e,'title')} — Greg Promo Media`;
    const editions=(e.event_editions||[]).sort((a,b)=>(b.year||0)-(a.year||0));
    target.innerHTML=`<header class="cms-detail-head"><span class="tag">${lang()==='fr'?'Événement':'Event'}</span><h1>${esc(pick(e,'title'))}</h1><p class="lead">${esc(pick(e,'summary'))}</p></header>${e.cover_image?`<img class="cms-detail-cover" src="${esc(e.cover_image)}" alt="${esc(pick(e,'title'))}">`:''}<div class="cms-detail-body">${textToHtml(pick(e,'description'))}</div><div class="cms-editions">${editions.map(ed=>`<section class="cms-edition"><div class="cms-edition-head"><div><span class="tag">${esc(ed.year||'')}</span><h2>${esc(pick(ed,'edition_name'))}</h2></div><div class="cms-edition-meta">${ed.event_date?`<span>${esc(dateLabel(ed.event_date))}</span>`:''}${ed.venue?`<span>${esc(ed.venue)}</span>`:''}${ed.city?`<span>${esc(ed.city)}</span>`:''}</div></div>${ed.poster_image?`<img class="cms-edition-poster" src="${esc(ed.poster_image)}" alt="${esc(pick(ed,'edition_name'))}">`:''}<div class="cms-detail-body">${textToHtml(pick(ed,'description'))}</div><div class="cms-photo-grid">${(ed.event_photos||[]).sort((a,b)=>a.display_order-b.display_order).map(ph=>`<figure><img src="${esc(ph.image_url)}" alt="${esc(pick(ph,'alt')||pick(ph,'caption')||pick(ed,'edition_name'))}" loading="lazy"><figcaption>${esc(pick(ph,'caption'))}</figcaption></figure>`).join('')}</div></section>`).join('')}</div>`;
  }

  async function refresh(){ await Promise.all([loadArticleList(),loadArticle(),loadEventList(),loadEvent()]); }
  document.addEventListener('DOMContentLoaded',refresh);
  document.addEventListener('gp-language-change',refresh);
})();
