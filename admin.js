'use strict';

const cfg = window.GP_SITE?.supabase;
if (!cfg?.url || !cfg?.anonKey || !window.supabase) throw new Error('Supabase configuration is missing.');

const sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const setMessage = (selector, text = '') => { const el = $(selector); if (el) el.textContent = text; };
const slugify = (value = '') => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
let currentAdmin = null;

function safeText(value) { return String(value ?? ''); }
function validateImage(file) {
  if (!file) return;
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) throw new Error(`Format non autorisé : ${file.name}`);
  if (file.size > MAX_IMAGE_SIZE) throw new Error(`Image trop lourde : ${file.name}. Maximum 10 Mo.`);
}
function safeFileName(name) { return String(name || 'image').replace(/[^a-zA-Z0-9._-]/g, '-').slice(-160); }
function requireAdmin() { if (!currentAdmin) throw new Error('Session administrateur requise.'); }

async function isAdmin(user) {
  if (!user) return null;
  const { data, error } = await sb.from('cms_admin_users').select('user_id,email,full_name,role').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  return data || null;
}

async function authState() {
  const { data: { session }, error } = await sb.auth.getSession();
  if (error) setMessage('#auth-message', 'Impossible de vérifier la session.');
  currentAdmin = await isAdmin(session?.user).catch(() => null);
  const ok = Boolean(currentAdmin);
  $('#auth-card')?.classList.toggle('admin-hidden', ok);
  $('#dashboard')?.classList.toggle('admin-hidden', !ok);
  if (session?.user && !ok) {
    await sb.auth.signOut();
    setMessage('#auth-message', 'Ce compte n’est pas autorisé à accéder au CMS.');
  }
  if (ok) await refreshAll();
}

$('#auth-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submit = event.submitter;
  if (submit) submit.disabled = true;
  setMessage('#auth-message', 'Connexion…');
  try {
    const { error } = await sb.auth.signInWithPassword({
      email: $('#auth-email').value.trim().toLowerCase(),
      password: $('#auth-password').value
    });
    if (error) throw error;
    await authState();
  } catch (error) {
    setMessage('#auth-message', error.message || 'Connexion impossible.');
  } finally {
    if (submit) submit.disabled = false;
  }
});

$('#forgot-password-btn')?.addEventListener('click', async () => {
  const email = $('#auth-email').value.trim().toLowerCase();
  if (!email) { setMessage('#auth-message', 'Entrez votre adresse email.'); return; }
  $('#forgot-password-btn').disabled = true;
  setMessage('#auth-message', 'Envoi du lien sécurisé…');
  try {
    const redirectTo = new URL('reset-password.html', window.location.href).href;
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw error;
    setMessage('#auth-message', 'Si ce compte est autorisé, un lien de réinitialisation vient d’être envoyé. Vérifiez aussi les courriers indésirables.');
  } catch (error) {
    setMessage('#auth-message', error.message || 'Le lien n’a pas pu être envoyé.');
  } finally {
    $('#forgot-password-btn').disabled = false;
  }
});

$('#logout-btn')?.addEventListener('click', async () => { await sb.auth.signOut(); currentAdmin = null; await authState(); });
sb.auth.onAuthStateChange((_event, session) => { if (!session) { currentAdmin = null; $('#auth-card')?.classList.remove('admin-hidden'); $('#dashboard')?.classList.add('admin-hidden'); } });

$$('.admin-tab').forEach((button) => button.addEventListener('click', () => {
  $$('.admin-tab').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  $$('[data-pane]').forEach((pane) => pane.classList.toggle('admin-hidden', pane.dataset.pane !== button.dataset.tab));
}));
$$('[data-cancel-form]').forEach((button) => button.addEventListener('click', () => $('#' + button.dataset.cancelForm)?.classList.add('admin-hidden')));

async function upload(bucket, file, folder = '') {
  requireAdmin();
  if (!file) return null;
  validateImage(file);
  const prefix = folder ? `${folder.replace(/[^a-zA-Z0-9/_-]/g, '-')}/` : '';
  const path = `${prefix}${Date.now()}-${crypto.randomUUID()}-${safeFileName(file.name)}`;
  const { error } = await sb.storage.from(bucket).upload(path, file, { cacheControl: '3600', upsert: false, contentType: file.type });
  if (error) throw error;
  return { url: sb.storage.from(bucket).getPublicUrl(path).data.publicUrl, path };
}

function makeButton(text, className, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

async function loadArticles() {
  requireAdmin();
  const { data, error } = await sb.from('articles').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  const list = $('#article-list');
  list.replaceChildren();
  (data || []).forEach((article) => {
    const item = document.createElement('div'); item.className = 'admin-item';
    const info = document.createElement('div');
    const title = document.createElement('strong'); title.textContent = safeText(article.title_fr);
    const note = document.createElement('div'); note.className = 'admin-note'; note.textContent = `${article.status} · ${article.author_name || 'Greg Promo'} · ${article.slug}`;
    info.append(title, note);
    const actions = document.createElement('div'); actions.className = 'admin-actions';
    actions.append(
      makeButton('Modifier', 'admin-btn', () => editArticle(article)),
      makeButton('Photos', 'admin-btn', () => openArticlePhotos(article)),
      makeButton('Supprimer', 'admin-btn danger', () => deleteRow('articles', article.id))
    );
    item.append(info, actions); list.append(item);
  });
}

function editArticle(article) {
  const map = {
    '#article-id': 'id', '#article-title-fr': 'title_fr', '#article-title-en': 'title_en', '#article-author': 'author_name',
    '#article-slug': 'slug', '#article-category': 'category', '#article-summary-fr': 'summary_fr', '#article-summary-en': 'summary_en',
    '#article-content-fr': 'content_fr', '#article-content-en': 'content_en', '#article-cover-url': 'cover_image', '#article-status': 'status'
  };
  Object.entries(map).forEach(([selector, key]) => { $(selector).value = article[key] || ''; });
  $('#article-featured').checked = Boolean(article.featured);
  $('#article-form').classList.remove('admin-hidden');
  openArticlePhotos(article);
}
window.editArticle = editArticle;

$('#new-article')?.addEventListener('click', () => {
  $('#article-form').reset(); $('#article-id').value = ''; $('#article-author').value = 'Greg Promo'; $('#article-form').classList.remove('admin-hidden');
  $('#article-photo-manager').classList.add('admin-hidden');
});
$('#article-title-fr')?.addEventListener('input', () => { if (!$('#article-id').value) $('#article-slug').value = slugify($('#article-title-fr').value); });

$('#article-form')?.addEventListener('submit', async (event) => {
  event.preventDefault(); requireAdmin();
  const submit = event.submitter; if (submit) submit.disabled = true;
  try {
    setMessage('#article-message', 'Enregistrement…');
    const coverUpload = await upload('article-images', $('#article-cover-file').files[0], 'covers');
    const status = $('#article-status').value;
    const row = {
      title_fr: $('#article-title-fr').value.trim(), title_en: $('#article-title-en').value.trim() || null,
      author_name: $('#article-author').value.trim(), slug: slugify($('#article-slug').value), category: $('#article-category').value.trim() || 'culture',
      summary_fr: $('#article-summary-fr').value.trim(), summary_en: $('#article-summary-en').value.trim() || null,
      content_fr: $('#article-content-fr').value.trim(), content_en: $('#article-content-en').value.trim() || null,
      cover_image: coverUpload?.url || $('#article-cover-url').value || null, status, featured: $('#article-featured').checked,
      published_at: status === 'published' ? new Date().toISOString() : null, created_by: currentAdmin.user_id
    };
    const id = $('#article-id').value;
    let result;
    if (id) result = await sb.from('articles').update(row).eq('id', id).select().single();
    else result = await sb.from('articles').insert(row).select().single();
    if (result.error) throw result.error;
    $('#article-id').value = result.data.id;
    setMessage('#article-message', 'Article enregistré.');
    await loadArticles();
    await openArticlePhotos(result.data);
  } catch (error) { setMessage('#article-message', error.message); }
  finally { if (submit) submit.disabled = false; }
});

async function openArticlePhotos(article) {
  $('#article-photo-manager').classList.remove('admin-hidden');
  $('#article-photo-article-id').value = article.id;
  $('#article-photo-title').textContent = `Photos dans l’article — ${article.title_fr}`;
  await loadArticlePhotos(article.id);
}

async function loadArticlePhotos(articleId) {
  const { data, error } = await sb.from('article_images').select('*').eq('article_id', articleId).order('display_order').order('created_at');
  if (error) throw error;
  const list = $('#article-photo-list'); list.replaceChildren();
  (data || []).forEach((photo) => {
    const card = document.createElement('article'); card.className = 'admin-photo-item';
    const image = document.createElement('img'); image.src = photo.image_url; image.alt = photo.alt_fr || photo.caption_fr || 'Article image'; image.loading = 'lazy';
    const body = document.createElement('div'); body.className = 'admin-photo-item-body';
    const caption = document.createElement('p'); caption.textContent = photo.caption_fr || 'Sans légende';
    const remove = makeButton('Supprimer', 'admin-btn danger', async () => {
      if (!confirm('Supprimer cette photo ?')) return;
      if (photo.storage_path) await sb.storage.from('article-images').remove([photo.storage_path]);
      const { error: deleteError } = await sb.from('article_images').delete().eq('id', photo.id);
      if (deleteError) alert(deleteError.message); else await loadArticlePhotos(articleId);
    });
    body.append(caption, remove); card.append(image, body); list.append(card);
  });
}

$('#article-photo-form')?.addEventListener('submit', async (event) => {
  event.preventDefault(); requireAdmin();
  const articleId = $('#article-photo-article-id').value;
  if (!articleId) { setMessage('#article-photo-message', 'Enregistrez d’abord l’article.'); return; }
  const files = [...$('#article-photo-files').files];
  if (!files.length) return;
  const submit = event.submitter; if (submit) submit.disabled = true;
  try {
    setMessage('#article-photo-message', 'Téléversement…');
    const { count } = await sb.from('article_images').select('*', { count: 'exact', head: true }).eq('article_id', articleId);
    for (let index = 0; index < files.length; index += 1) {
      const uploaded = await upload('article-images', files[index], `articles/${articleId}`);
      const { error } = await sb.from('article_images').insert({
        article_id: articleId, image_url: uploaded.url, storage_path: uploaded.path,
        caption_fr: $('#article-photo-caption-fr').value.trim() || null, caption_en: $('#article-photo-caption-en').value.trim() || null,
        alt_fr: $('#article-photo-alt-fr').value.trim() || null, alt_en: $('#article-photo-alt-en').value.trim() || null,
        display_order: (count || 0) + index
      });
      if (error) throw error;
    }
    event.target.reset(); setMessage('#article-photo-message', 'Photos ajoutées.'); await loadArticlePhotos(articleId);
  } catch (error) { setMessage('#article-photo-message', error.message); }
  finally { if (submit) submit.disabled = false; }
});

async function loadEvents() {
  requireAdmin();
  const { data, error } = await sb.from('events').select('*').order('created_at', { ascending: false }); if (error) throw error;
  const list = $('#event-list'); list.replaceChildren();
  (data || []).forEach((event) => {
    const item = document.createElement('div'); item.className = 'admin-item';
    const info = document.createElement('div'); const title = document.createElement('strong'); title.textContent = event.title_fr;
    const note = document.createElement('div'); note.className = 'admin-note'; note.textContent = `${event.status} · ${event.slug}`; info.append(title, note);
    const actions = document.createElement('div'); actions.className = 'admin-actions';
    actions.append(makeButton('Modifier', 'admin-btn', () => editEvent(event)), makeButton('Supprimer', 'admin-btn danger', () => deleteRow('events', event.id)));
    item.append(info, actions); list.append(item);
  });
  $('#edition-event-id').innerHTML = '<option value="">Choisir</option>' + (data || []).map((event) => `<option value="${event.id}">${safeText(event.title_fr)}</option>`).join('');
}

function editEvent(event) {
  const map = {'#event-id':'id','#event-title-fr':'title_fr','#event-title-en':'title_en','#event-slug':'slug','#event-status':'status','#event-summary-fr':'summary_fr','#event-summary-en':'summary_en','#event-description-fr':'description_fr','#event-description-en':'description_en','#event-cover-url':'cover_image'};
  Object.entries(map).forEach(([selector,key]) => { $(selector).value = event[key] || ''; }); $('#event-featured').checked = Boolean(event.featured); $('#event-form').classList.remove('admin-hidden');
}
window.editEvent = editEvent;
$('#new-event')?.addEventListener('click', () => { $('#event-form').reset(); $('#event-id').value=''; $('#event-form').classList.remove('admin-hidden'); });
$('#event-title-fr')?.addEventListener('input', () => { if (!$('#event-id').value) $('#event-slug').value = slugify($('#event-title-fr').value); });
$('#event-form')?.addEventListener('submit', async (event) => {
  event.preventDefault(); requireAdmin();
  try {
    const cover = await upload('event-images', $('#event-cover-file').files[0], 'events');
    const row = { title_fr:$('#event-title-fr').value.trim(), title_en:$('#event-title-en').value.trim()||null, slug:slugify($('#event-slug').value), status:$('#event-status').value, summary_fr:$('#event-summary-fr').value.trim(), summary_en:$('#event-summary-en').value.trim()||null, description_fr:$('#event-description-fr').value.trim(), description_en:$('#event-description-en').value.trim()||null, cover_image:cover?.url||$('#event-cover-url').value||null, featured:$('#event-featured').checked, created_by:currentAdmin.user_id };
    const id=$('#event-id').value; const result=id?await sb.from('events').update(row).eq('id',id):await sb.from('events').insert(row); if(result.error) throw result.error; setMessage('#event-message','Événement enregistré.'); await loadEvents(); await loadEditions();
  } catch(error) { setMessage('#event-message',error.message); }
});

async function loadEditions() {
  requireAdmin();
  const { data, error } = await sb.from('event_editions').select('*,events(title_fr)').order('year',{ascending:false}); if(error) throw error;
  const list=$('#edition-list'); list.replaceChildren();
  (data||[]).forEach((edition)=>{
    const item=document.createElement('div'); item.className='admin-item'; const info=document.createElement('div'); const title=document.createElement('strong'); title.textContent=`${edition.events?.title_fr||''} — ${edition.edition_name_fr}`; const note=document.createElement('div'); note.className='admin-note'; note.textContent=`${edition.year||''} · ${edition.status}`; info.append(title,note); const actions=document.createElement('div'); actions.className='admin-actions'; actions.append(makeButton('Modifier','admin-btn',()=>editEdition(edition)),makeButton('Supprimer','admin-btn danger',()=>deleteRow('event_editions',edition.id))); item.append(info,actions); list.append(item);
  });
  $('#photo-edition-id').innerHTML='<option value="">Choisir</option>'+(data||[]).map((edition)=>`<option value="${edition.id}">${safeText(edition.events?.title_fr||'')} — ${safeText(edition.edition_name_fr)}</option>`).join('');
}
function editEdition(edition){const map={'#edition-id':'id','#edition-event-id':'event_id','#edition-year':'year','#edition-name-fr':'edition_name_fr','#edition-name-en':'edition_name_en','#edition-slug':'slug','#edition-status':'status','#edition-description-fr':'description_fr','#edition-description-en':'description_en','#edition-venue':'venue','#edition-city':'city','#edition-poster-url':'poster_image'};Object.entries(map).forEach(([selector,key])=>{$(selector).value=edition[key]||''});$('#edition-date').value=edition.event_date?new Date(edition.event_date).toISOString().slice(0,16):'';$('#edition-form').classList.remove('admin-hidden')}
window.editEdition=editEdition;
$('#new-edition')?.addEventListener('click',()=>{$('#edition-form').reset();$('#edition-id').value='';$('#edition-form').classList.remove('admin-hidden')});
$('#edition-name-fr')?.addEventListener('input',()=>{if(!$('#edition-id').value)$('#edition-slug').value=slugify($('#edition-name-fr').value)});
$('#edition-form')?.addEventListener('submit',async(event)=>{event.preventDefault();requireAdmin();try{const poster=await upload('event-images',$('#edition-poster-file').files[0],'editions');const row={event_id:$('#edition-event-id').value,year:Number($('#edition-year').value)||null,edition_name_fr:$('#edition-name-fr').value.trim(),edition_name_en:$('#edition-name-en').value.trim()||null,slug:slugify($('#edition-slug').value),status:$('#edition-status').value,description_fr:$('#edition-description-fr').value.trim(),description_en:$('#edition-description-en').value.trim()||null,venue:$('#edition-venue').value.trim()||null,city:$('#edition-city').value.trim()||null,event_date:$('#edition-date').value?new Date($('#edition-date').value).toISOString():null,poster_image:poster?.url||$('#edition-poster-url').value||null};const id=$('#edition-id').value;const result=id?await sb.from('event_editions').update(row).eq('id',id):await sb.from('event_editions').insert(row);if(result.error)throw result.error;await loadEditions()}catch(error){alert(error.message)}});

$('#photo-form')?.addEventListener('submit',async(event)=>{event.preventDefault();requireAdmin();try{setMessage('#photo-message','Téléversement…');const files=[...$('#photo-files').files];for(let index=0;index<files.length;index+=1){const uploaded=await upload('event-photos',files[index],`editions/${$('#photo-edition-id').value}`);const {error}=await sb.from('event_photos').insert({edition_id:$('#photo-edition-id').value,image_url:uploaded.url,storage_path:uploaded.path,caption_fr:$('#photo-caption-fr').value.trim()||null,caption_en:$('#photo-caption-en').value.trim()||null,display_order:index});if(error)throw error}setMessage('#photo-message','Photos ajoutées.');event.target.reset()}catch(error){setMessage('#photo-message',error.message)}});

async function deleteRow(table,id){requireAdmin();if(!confirm('Supprimer cet élément ? Cette action est définitive.'))return;const allowed=new Set(['articles','events','event_editions']);if(!allowed.has(table))throw new Error('Table non autorisée.');const {error}=await sb.from(table).delete().eq('id',id);if(error)alert(error.message);else await refreshAll()}
window.deleteRow=deleteRow;
async function refreshAll(){await Promise.all([loadArticles(),loadEvents(),loadEditions()])}

authState().catch((error)=>setMessage('#auth-message',error.message));
