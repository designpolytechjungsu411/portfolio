const ASSETS = {
  gallery: 'assets/images/gallery-bg.jpg',
  pedestals: 'assets/images/pedestals.webp',
  street: 'assets/images/street.jpg',
  arch: 'assets/images/arch-bg.jpg',
  frames: 'assets/images/frames.webp',
  ticket: 'assets/images/ticket.png',
  torn: 'assets/images/ticket-torn.png',
  poster: 'assets/images/poster.webp',

  m01: 'assets/models/01.glb', m02: 'assets/models/02.glb', m03: 'assets/models/03.glb',
  m04: 'assets/models/04.glb', m05: 'assets/models/05.glb', m06: 'assets/models/06.glb',
  m07: 'assets/models/07.glb', m08: 'assets/models/08.glb', m09: 'assets/models/09.glb',
  m10: 'assets/models/10.glb', m11: 'assets/models/11.glb', m12: 'assets/models/12.glb',
  m13: 'assets/models/13.glb', m14: 'assets/models/14.glb', m15: 'assets/models/15.glb',
};

const STUDENTS = [
  { name: '김예일', slogan: '구조와 흐름을 꿰뚫어 불편을 편리로 바꾸는 경험 디자이너', desc: '', portfolio: '' },
  { name: '민하도', slogan: '아이디어를 시각화하는 디자이너', desc: '', portfolio: 'https://hadomin91-design.github.io/hadomin_design/' },
  { name: '김준서', slogan: '상상한 것을 실현으로 바꾸는 디자이너', desc: '', portfolio: 'https://superijun.github.io/portfolio/' },
  { name: '김우선', slogan: '경험을 디자인하고, 감각을 시각화하는 디자이너', desc: '', portfolio: 'https://kok62360.github.io/1004/' },
  { name: '김수연', slogan: '상대의 이야기에 귀 기울이고, 원하는 방향을 함께 찾아가는 디자이너', desc: '', portfolio: '' },
  { name: '박재연', slogan: '재미있게 끝까지 질리지 않는 디자이너', desc: '', portfolio: 'https://2501110072-dotcom.github.io/l01_interaction_2b/2501110072_ing_1' },
  { name: '박수빈', slogan: '떠오른 가능성을, 손에 닿는 경험으로.', desc: '', portfolio: '' },
  { name: '박호성', slogan: '감에 의존하지 않고, 데이터를 바탕으로 개선하는 디자이너', desc: '', portfolio: '' },
  { name: '오수한', slogan: '익숙함의 결을 따라, 변화를 섬세하게 빚는 디자이너', desc: '', portfolio: 'https://suhan998.github.io/Web-Portfolio/' },
  { name: '조민영', slogan: '경험을 내일로 잇는 디자이너', desc: '', portfolio: 'https://ddmom.github.io/my_portfolio/' },
  { name: '조예빈', slogan: '익숙한 것에서 낯선 매력을 발견하는 디자이너', desc: '', portfolio: 'https://yobinnie.github.io/exhibition_2026/' },
  { name: '손예진', slogan: '익숙한 것을 낯설게 듣고, 음악처럼 오래 남는 경험을 만드는 디자이너', desc: '', portfolio: 'https://pueon01-max.github.io/play-2/' },
  { name: '송예준', slogan: '과거와 현재와 미래를 잇는 디자이너', desc: '', portfolio: '' },
  { name: '천승현', slogan: '흐름에 맞춰 유연하게 변화하는 디자이너', desc: '', portfolio: 'https://cheon0903.github.io/fluidity-portfolio/' },
  { name: '하태랑', slogan: '현실과 꿈의 모호한 경계를 시각화하는 디자이너', desc: '', portfolio: 'https://www.figma.com/design/bTVBkOEK5V0OMDmdqKnAsn/Untitled?node-id=0-1' },
].map((s, i) => ({ ...s, no: i + 1, room: Math.floor(i / 5), slot: i % 5 }));

const MODELS = {
  '조민영': ASSETS.m01, '민하도': ASSETS.m02, '천승현': ASSETS.m03, '박재연': ASSETS.m04, '김수연': ASSETS.m05,
  '박호성': ASSETS.m06, '김예일': ASSETS.m07, '오수한': ASSETS.m08, '박수빈': ASSETS.m09, '김우선': ASSETS.m10,
  '조예빈': ASSETS.m11, '송예준': ASSETS.m12, '김준서': ASSETS.m13, '손예진': ASSETS.m14, '하태랑': ASSETS.m15,
};

const SLOTS = [
  { x: 282, y: 552, h: 320, tag: 650 },
  { x: 718, y: 546, h: 245, tag: 630 },
  { x: 1037, y: 644, h: 150, tag: 688 },
  { x: 1486, y: 526, h: 230, tag: 612 },
  { x: 1745, y: 690, h: 310, tag: 800 },
];

const FRAMES = [
  { inner: [377, 399, 346, 252], outer: [344, 368, 412, 315] },
  { inner: [847, 351, 304, 325], outer: [811, 308, 378, 406] },
  { inner: [1276, 402, 336, 245], outer: [1244, 368, 401, 315] },
];

const GALLERY_SPOTS = [[255, 250, 330, 420], [720, 300, 260, 380], [1052, 330, 260, 360], [1478, 290, 260, 400], [1850, 250, 320, 420]];
const LOBBY_SPOTS = [[550, 360, 380, 380], [1000, 330, 380, 420], [1446, 360, 380, 380]];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad = (n) => String(n).padStart(2, '0');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? Math.min(ms, 120) : ms));
let seq = 0;

function bustSVG(turn = 0) {
  const fx = 100 + turn * 9, P = '#ece5d7', S = '#8a8172';
  return `<svg class="bust" viewBox="0 0 200 260" aria-hidden="true" focusable="false">
<path d="M68 238H132L137 254H63Z" fill="#d8cfbf"/>
<path d="M22 238C24 198 48 176 80 170L120 170C152 176 176 198 178 238Z" fill="${P}"/>
<path d="M120 170C152 176 176 198 178 238H140C142 210 134 186 120 170Z" fill="${S}" opacity=".3"/>
<path d="M83 172C86 154 84 140 81 126L121 126C118 140 116 154 118 172Z" fill="${P}"/>
<path d="M106 126H121C118 140 116 154 118 172H108C110 156 110 140 106 126Z" fill="${S}" opacity=".28"/>
<ellipse cx="57" cy="94" rx="5" ry="11" fill="${P}"/><ellipse cx="146" cy="94" rx="5" ry="11" fill="#c9c0b0"/>
<path d="M101 40C130 40 148 62 148 90C148 114 138 134 118 144C110 148 93 148 85 142C66 132 56 114 56 90C56 62 72 40 101 40Z" fill="${P}"/>
<path d="M118 44C140 52 150 72 148 92C146 116 136 134 118 144C132 124 136 104 134 88C132 68 126 54 118 44Z" fill="${S}" opacity=".3"/>
<g fill="none" stroke="#7a7266" stroke-linecap="round" opacity=".5">
<path d="M${fx - 25} 81Q${fx - 13} 74 ${fx - 3} 80" stroke-width="2.4"/><path d="M${fx + 4} 80Q${fx + 15} 74 ${fx + 26} 81" stroke-width="2.4"/>
<path d="M${fx - 1} 86L${fx - 5 + turn * 3} 109Q${fx} 115 ${fx + 7} 110" stroke-width="2"/><path d="M${fx - 11} 123Q${fx} 127 ${fx + 11} 122" stroke-width="2"/></g>
<path d="M57 86C52 50 78 34 102 34C128 34 150 52 145 88C138 70 124 60 104 60C84 60 66 70 57 86Z" fill="#f1ebdf" stroke="#9a9283" stroke-opacity=".5"/>
</svg>`;
}

const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  ptr.tx = e.clientX / innerWidth - .5; ptr.ty = e.clientY / innerHeight - .5;
});
addEventListener('deviceorientation', (e) => {
  if (e.gamma == null) return;
  ptr.tx = clamp(e.gamma / 40, -.5, .5); ptr.ty = clamp((e.beta - 45) / 50, -.5, .5);
});

function makeStage(el, iw, ih, opts = {}) {
  const st = { el, iw, ih, explore: !!opts.explore, zmax: opts.zmax || 1,
    cx: iw / 2, cy: ih / 2, z: 1, tcx: iw / 2, tcy: ih / 2, tz: 1,
    ox: 0, oy: 0, lt: 0, frozen: false, moved: false, tilt: new DOMMatrix(),
    tilts: $$('.tilt', el),
    layers: $$('.layer', el).map((l) => ({ el: l, depth: +l.dataset.depth, tx: 0, ty: 0, s: 1 })) };
  const pts = new Map(); let pinch = 0;
  if (st.explore) el.classList.add('explore');
  el.addEventListener('pointerdown', (e) => {
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY });
    st.moved = false; pinch = 0;
    if (st.explore) el.classList.add('grabbing');
  });
  addEventListener('pointermove', (e) => {
    const p = pts.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    if (Math.hypot(e.clientX - p.sx, e.clientY - p.sy) > 6) st.moved = true;
    if (pts.size >= 2 && st.explore) {
      const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch) zoomAt(st, (a.x + b.x) / 2, (a.y + b.y) / 2, st.tz * d / pinch);
      pinch = d; st.moved = true; return;
    }
    const k = baseScale(st) * st.tz;
    st.tcx -= dx / k; st.tcy -= dy / k; limit(st);
  });
  const drop = (e) => {
    pts.delete(e.pointerId); pinch = 0;
    if (!pts.size) { el.classList.remove('grabbing'); setTimeout(() => { st.moved = false; }, 60); }
  };
  addEventListener('pointerup', drop); addEventListener('pointercancel', drop);
  if (st.explore) {
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      const d = e.deltaY * (e.deltaMode === 1 ? 16 : 1);
      zoomAt(st, e.clientX, e.clientY, st.tz * Math.exp(-d * (e.ctrlKey ? .01 : .0016)));
    }, { passive: false });
    el.addEventListener('dblclick', (e) => {
      if (e.target.closest('.hot')) return;
      zoomAt(st, e.clientX, e.clientY, st.tz > 1.4 ? 1 : Math.min(st.zmax, 2));
    });
  }
  return st;
}
const baseScale = (st) => Math.max(innerWidth / st.iw, innerHeight / st.ih) * 1.07;

function limit(st) {
  const s = baseScale(st) * st.tz;
  const mx = Math.max(0, (st.iw * s - innerWidth) / 2 - 36) / s, my = Math.max(0, (st.ih * s - innerHeight) / 2 - 36) / s;
  st.tcx = clamp(st.tcx, st.iw / 2 - mx, st.iw / 2 + mx);
  st.tcy = clamp(st.tcy, st.ih / 2 - my, st.ih / 2 + my);
}

function zoomAt(st, x, y, z) {
  const s0 = baseScale(st), z0 = st.tz, z1 = clamp(z, 1, st.zmax);
  const ix = st.tcx + (x - innerWidth / 2) / (s0 * z0), iy = st.tcy + (y - innerHeight / 2) / (s0 * z0);
  st.tz = z1;
  st.tcx = ix - (x - innerWidth / 2) / (s0 * z1); st.tcy = iy - (y - innerHeight / 2) / (s0 * z1);
  limit(st);
}
function updateStage(st, t) {
  if (st.frozen) return;
  const W = innerWidth, H = innerHeight, m = reduce ? 0 : 1;
  const ease = 1 - Math.exp(-Math.min(64, t - (st.lt || t)) / 110); st.lt = t;
  limit(st);
  st.cx += (st.tcx - st.cx) * ease; st.cy += (st.tcy - st.cy) * ease; st.z += (st.tz - st.z) * ease;
  const s0 = baseScale(st) * st.z;

  st.ox = -ptr.x * 26 + Math.sin(t / 4300) * 8 * m;
  st.oy = -ptr.y * 16 + Math.cos(t / 5600) * 5 * m;

  const ay = ptr.x * 2.4 + Math.sin(t / 5200) * .6 * m, ax = -ptr.y * 1.6 + Math.cos(t / 6100) * .4 * m, P = 1500;
  const tf = `perspective(${P}px) rotateX(${ax.toFixed(3)}deg) rotateY(${ay.toFixed(3)}deg)`;
  for (const el of st.tilts) el.style.transform = tf;
  st.tilt = new DOMMatrix().translateSelf(W / 2, H / 2)
    .multiplySelf(new DOMMatrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / P, 0, 0, 0, 1]))
    .rotateSelf(ax, 0, 0).rotateSelf(0, ay, 0).translateSelf(-W / 2, -H / 2);
  for (const L of st.layers) {
    const s = s0 * (1 + (L.depth - .55) * .02 + Math.sin(t / 6400) * .005 * m);
    L.s = s;
    L.tx = W / 2 - st.cx * s + st.ox * L.depth;
    L.ty = H / 2 - st.cy * s + st.oy * L.depth;
    L.el.style.transform = `translate3d(${L.tx}px,${L.ty}px,0) scale(${s})`;
    L.el.style.setProperty('--s', s);
  }
}

function toScreen(st, L, ix, iy) {
  const p = st.tilt.transformPoint(new DOMPoint(L.tx + ix * L.s, L.ty + iy * L.s, 0, 1));
  return [p.x / p.w, p.y / p.w];
}
function spotsHTML(list, delayStep) {
  return list.map(([x, y, w, h], k) => `<span class="spot" style="left:${x - w / 2}px;top:${y - h / 2}px;width:${w}px;height:${h}px;animation-delay:${-k * delayStep}s"></span>`).join('');
}

function makeDust(canvas, n) {
  const ps = Array.from({ length: n }, () => ({ x: Math.random(), y: Math.random(), z: .3 + Math.random() * .9, r: .6 + Math.random() * 1.5, v: .00015 + Math.random() * .0004, p: Math.random() * 6.3 }));
  return { canvas, ctx: canvas.getContext('2d'), ps };
}
function drawDust(d, st, t) {
  if (reduce) return;
  const dpr = Math.min(devicePixelRatio || 1, 2), W = innerWidth, H = innerHeight, c = d.canvas, x = d.ctx;
  if (c.width !== Math.round(W * dpr) || c.height !== Math.round(H * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
  x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
  for (const p of d.ps) {
    p.y -= p.v; if (p.y < -.05) { p.y = 1.05; p.x = Math.random(); }
    const px = p.x * W + Math.sin(t / 3200 + p.p) * 16 * p.z + st.ox * p.z * 1.4;
    const py = p.y * H + st.oy * p.z * 1.4;
    const a = (.15 + .5 * Math.sin(t / 1100 + p.p * 3) ** 2) * p.z * .8;
    x.fillStyle = `rgba(255,240,212,${a.toFixed(3)})`;
    x.beginPath(); x.arc(px, py, p.r * p.z, 0, 6.3); x.fill();
  }
}

const INTRO_MODE = 'combo';
const introFrame = $('#intro-frame');
const screens = { intro: $('#intro'), lobby: $('#lobby'), gallery: $('#gallery'), list: $('#list') };
const topbar = $('#topbar'), veil = $('#veil');
let page = '', room = 0, detail = -1, busy = false;

function go(name) {
  for (const [k, el] of Object.entries(screens)) el.classList.toggle('on', k === name);
  for (const el of [$('#intro'), introFrame]) if (el !== screens.intro) el.classList.remove('on');
  page = name;
  topbar.classList.toggle('on', name !== 'intro');
  topbar.classList.toggle('no-brand', name === 'lobby');
  topbar.dataset.theme = name === 'list' ? 'light' : '';
  if (name !== 'gallery') closeDetail(true);
  if (name === 'list') renderList();
  updateNav(); setHash();
}
function updateNav() {
  $$('.pill button').forEach((b) => b.classList.toggle('active', page === 'gallery' ? b.dataset.room === String(room) : b.dataset.go === page));
}
function setHash() {
  const h = page === 'gallery' ? `gallery-${room + 1}` : ['lobby', 'list'].includes(page) ? page : '';
  try { history.replaceState(null, '', h ? `#${h}` : location.pathname + location.search); } catch (e) {  }
}
function arrive(cam) { cam.classList.remove('arrive'); void cam.offsetWidth; cam.classList.add('arrive'); }

const intro = $('#intro');
const street = makeStage($('#street-stage'), 1740, 980);
const POSTER = [731, 300, 278, 452];
let introTimer;
function resetStreet() { street.el.classList.remove('zooming'); street.el.style.transform = ''; street.frozen = false; }
intro.classList.toggle('no-ticket', INTRO_MODE === 'frame');
const FAST = INTRO_MODE === 'combo';
for (const el of [intro, introFrame, $('#portal')]) el.classList.toggle('fast', FAST);
function playIntro() {
  ++seq; busy = false; clearTimeout(introTimer); clearTimeout(frameTimer);
  screens.intro = intro;
  introFrame.classList.remove('opened'); shardsEl.classList.remove('on');
  cleanupPortal(); intro.classList.remove('opening');
  intro.classList.remove('crack', 'torn', 'lit', 'home');
  resetStreet();
  go('intro');
  introTimer = setTimeout(tear, INTRO_MODE === 'frame' ? 400 : FAST ? 1600 : 3200);
}
async function tear() {
  if (page !== 'intro' || intro.classList.contains('crack')) return;
  clearTimeout(introTimer);
  const my = seq;
  intro.classList.add('crack');
  if (INTRO_MODE !== 'frame') {
    await wait(FAST ? 200 : 240); if (my !== seq) return;
    intro.classList.add('torn');
    await wait(FAST ? 420 : 600); if (my !== seq) return;
  }
  intro.classList.add('lit');
  await wait(FAST ? 450 : 700); if (my !== seq) return;
  intro.classList.add('home');
  $('#poster').focus({ preventScroll: true });
  if (FAST) introTimer = setTimeout(enterPoster, 1400);
}

const portal = $('#portal');
function cleanupPortal() {
  for (const lob of [screens.lobby, introFrame]) { lob.style.clipPath = ''; lob.style.opacity = ''; lob.style.transition = ''; }
  portal.classList.remove('on', 'grow'); portal.removeAttribute('style');
}
function resetFrameTitle() {
  $$('.if-eyebrow,.if-title,.if-sub', introFrame).forEach((el) => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
}
async function enterPoster() {
  if (page !== 'intro' || busy || !intro.classList.contains('home')) return;
  const my = ++seq; busy = true;
  clearTimeout(introTimer);
  const toFrame = INTRO_MODE !== 'ticket';
  const r = $('#poster').getBoundingClientRect(), W = innerWidth, H = innerHeight, lob = toFrame ? introFrame : screens.lobby;
  const clip = (x0, y0, x1, y1, rad) => `inset(${y0}px ${W - x1}px ${H - y1}px ${x0}px round ${rad}px)`;
  street.frozen = true;
  intro.classList.add('opening');

  lob.style.transition = 'none'; lob.style.opacity = '0'; lob.style.clipPath = clip(r.left, r.top, r.right, r.bottom, 2);
  lob.classList.add('on');
  if (toFrame) { introFrame.classList.remove('opened'); resetFrameTitle(); } else arrive($('#lobby-cam'));
  Object.assign(portal.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
  await wait(FAST ? 250 : 420); if (my !== seq) { cleanupPortal(); return; }

  portal.classList.add('on');
  lob.style.transition = `opacity ${FAST ? .5 : .85}s ease`; lob.style.opacity = '1';
  await wait(FAST ? 550 : 950); if (my !== seq) { cleanupPortal(); return; }

  lob.style.transition = `clip-path ${FAST ? 1 : 1.5}s cubic-bezier(.75,0,.2,1)`; lob.style.clipPath = clip(0, 0, W, H, 0);
  portal.classList.add('grow'); Object.assign(portal.style, { left: '0px', top: '0px', width: W + 'px', height: H + 'px' });
  await wait(FAST ? 1050 : 1550); if (my !== seq) { cleanupPortal(); return; }
  intro.classList.add('instant'); lob.classList.add('instant');
  if (toFrame) { screens.intro = introFrame; go('intro'); } else go('lobby');
  cleanupPortal();
  await wait(60);
  intro.classList.remove('instant', 'opening'); lob.classList.remove('instant'); resetStreet();
  busy = false;
  if (toFrame && my === seq) frameTimer = setTimeout(shatter, FAST ? 2000 : 2600);
}

const shardsEl = $('#shards');
(function buildShards() {

  const cols = 9, rows = 7, jit = (v, s) => Math.max(0, Math.min(100, v + (Math.random() - .5) * s));
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const x0 = x * 100 / cols, x1 = (x + 1) * 100 / cols, y0 = y * 100 / rows, y1 = (y + 1) * 100 / rows;
    const pts = [[jit(x0, 3), jit(y0, 3)], [jit(x1, 3), jit(y0, 3)], [jit(x1, 3), jit(y1, 3)], [jit(x0, 3), jit(y1, 3)]];
    const p = document.createElement('div'); p.className = 'shard';
    p.style.setProperty('--clip', pts.map(([a, b]) => `${a.toFixed(2)}% ${b.toFixed(2)}%`).join(', '));
    const dx = (x0 + x1) / 2 - 50, dy = (y0 + y1) / 2 - 50, len = Math.max(1, Math.hypot(dx, dy)), dist = 900 + Math.random() * 700;
    p.style.setProperty('--tx', `${(dx / len * dist + (Math.random() - .5) * 260).toFixed(0)}px`);
    p.style.setProperty('--ty', `${(dy / len * dist + (Math.random() - .5) * 260).toFixed(0)}px`);
    p.style.setProperty('--tz', `${(300 + Math.random() * 500).toFixed(0)}px`);
    p.style.setProperty('--rx', `${((Math.random() - .5) * 1100).toFixed(0)}deg`);
    p.style.setProperty('--ry', `${((Math.random() - .5) * 1100).toFixed(0)}deg`);
    p.style.setProperty('--rz', `${((Math.random() - .5) * 900).toFixed(0)}deg`);
    p.style.setProperty('--delay', `${(Math.random() * 100).toFixed(0)}ms`);
    const tone = Math.random();
    if (tone < .38) { p.style.background = 'linear-gradient(135deg,#f0d9ad 0%,#b79d70 48%,#e5cfaa 100%)'; p.style.borderColor = 'rgba(255,239,204,.98)'; p.style.boxShadow = 'inset 0 0 10px rgba(255,248,226,.7),0 0 14px rgba(226,193,135,.3)'; }
    else if (tone < .72) { p.style.background = 'linear-gradient(135deg,#76654b 0%,#2b2923 55%,#b59a6b 100%)'; p.style.borderColor = 'rgba(213,184,132,.95)'; }
    else { p.style.background = 'linear-gradient(135deg,#d9c7a5 0%,#8b7756 45%,#292821 100%)'; p.style.borderColor = 'rgba(242,218,174,.95)'; }
    shardsEl.appendChild(p);
  }
})();
let frameTimer;
async function shatter() {
  if (page !== 'intro' || busy || screens.intro !== introFrame) return;
  clearTimeout(frameTimer);
  const my = ++seq; busy = true;
  introFrame.classList.add('opened');
  await wait(140);
  $$('.shard', shardsEl).forEach((p) => { p.style.animation = 'none'; void p.offsetWidth; p.style.animation = ''; });
  shardsEl.classList.add('on');
  introFrame.classList.add('instant'); screens.lobby.classList.add('instant');
  go('lobby'); arrive($('#lobby-cam'));
  await wait(1800);
  shardsEl.classList.remove('on'); introFrame.classList.remove('instant', 'opened'); screens.lobby.classList.remove('instant');
  if (my === seq) busy = false;
}
introFrame.addEventListener('click', shatter);

const lobby = makeStage($('#lobby-stage'), 2000, 1128);
const lobbyDust = makeDust($('#lobby .dust'), innerWidth < 760 ? 30 : 60);
$('#lobby-spots').innerHTML = spotsHTML(LOBBY_SPOTS, 2.3);
$('#windows').innerHTML = FRAMES.map(({ inner: [x, y, w, h] }, r) =>
  `<div class="window" data-r="${r}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><div class="view"></div><div class="wl">GALLERY ${pad(r + 1)}</div></div>`).join('');
$('#frame-btns').innerHTML = FRAMES.map(({ outer: [x, y, w, h] }, r) => `
  <button class="frame-btn" type="button" data-r="${r}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px" aria-label="GALLERY ${pad(r + 1)} 들어가기"></button>
  <div class="flabel" style="left:${x + w / 2}px;top:${y + h + 26}px"><b>GALLERY ${pad(r + 1)}</b><span>${STUDENTS.filter((s) => s.room === r).map((s) => s.name).join(' · ')}</span></div>`).join('');
const views = $$('#windows .view');
$$('.frame-btn').forEach((b) => b.addEventListener('click', () => { if (!lobby.moved) enterFrame(+b.dataset.r); }));

async function enterFrame(r) {
  if (busy) return;
  const my = ++seq; busy = true;
  const L = lobby.layers[1], [x, y, w, h] = FRAMES[r].inner, W = innerWidth, H = innerHeight;
  const [x0, y0] = toScreen(lobby, L, x, y), [x1, y1] = toScreen(lobby, L, x + w, y + h);
  const k = Math.max(W / (x1 - x0), H / (y1 - y0)) * 1.06, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  lobby.frozen = true;
  lobby.el.classList.add('zooming');
  lobby.el.style.transform = `translate(${W / 2 - cx * k}px,${H / 2 - cy * k}px) scale(${k})`;
  await wait(950); if (my !== seq) return;
  setRoom(r, true); go('gallery'); arrive($('#gallery-cam'));
  await wait(1000);
  lobby.el.classList.remove('zooming'); lobby.el.style.transform = ''; lobby.frozen = false;
  if (my === seq) busy = false;
}

const gallery = makeStage($('#gallery-stage'), 2000, 1126, { explore: true, zmax: 4.2 });
const galleryDust = makeDust($('#gallery .dust'), innerWidth < 760 ? 30 : 60);
const galleryCam = $('#gallery-cam'), hots = $('#hots');
$('#gallery-spots').innerHTML = spotsHTML(GALLERY_SPOTS, 1.7);

function setRoom(r, instant) {
  room = clamp(r, 0, 2);
  gallery.el.dataset.room = room;
  $('#g-title').textContent = `GALLERY ${pad(room + 1)}`;
  $('#g-sub').textContent = `STUDENT ${pad(room * 5 + 1)} — ${pad(room * 5 + 5)}`;
  $('#room-prev').disabled = room === 0; $('#room-next').disabled = room === 2;
  const list = STUDENTS.filter((s) => s.room === room);
  $('#shadows').innerHTML = list.map((s) => {
    const p = SLOTS[s.slot];
    return MODELS[s.name] ? `<span class="cshadow" style="left:${p.x}px;top:${p.y}px;width:${p.h * .62}px;height:${p.h * .09}px"></span>` : '';
  }).join('');
  hots.innerHTML = list.map((s) => {
    const p = SLOTS[s.slot], has = !!MODELS[s.name], w = Math.max(p.h * .5, 110);

    const stand = has ? `<span class="stand" style="height:${p.h}px">${bustSVG(s.no % 2 ? -1 : 1)}</span>` : '';
    return `<button class="hot${has ? ' has' : ' empty'}" type="button" data-i="${s.no - 1}" style="left:${p.x - w / 2}px;top:${p.y - p.h}px;width:${w}px;height:${p.tag - p.y + p.h + 40}px" aria-label="${s.name} 학생 보기">
      ${stand}<span class="tag" style="top:${p.tag - p.y + p.h}px"><i>${has ? '+' : '·'}</i>STUDENT ${pad(s.no)} · ${s.name}</span></button>`;
  }).join('');
  $$('.hot', hots).forEach((b) => {
    const i = +b.dataset.i, has = b.classList.contains('has');
    if (has) {

      let from = null;
      const me = () => G3.statues.find((x) => x.i === i);
      b.addEventListener('pointerdown', (e) => {
        if (e.button > 0) return;
        e.stopPropagation(); from = e.clientX; b.dataset.spun = '';
        try { b.setPointerCapture(e.pointerId); } catch (err) {  }
        const s = me(); if (s) { s.drag = true; s.v = 0; s.hold = 0; }
      });
      b.addEventListener('pointermove', (e) => {
        if (from == null) return;
        const dx = e.clientX - from; from = e.clientX;
        const s = me(); if (!s) return;
        if (Math.abs(dx) > 0) b.dataset.spun = '1';
        const d = dx * .014; s.angle += d; s.v = d / Math.max(.008, (e.timeStamp - (s.lastT || e.timeStamp - 16)) / 1000); s.lastT = e.timeStamp;
      });
      const end = () => { if (from == null) return; from = null; const s = me(); if (s) { s.drag = false; s.v = clamp(s.v, -4, 4); } };
      b.addEventListener('pointerup', end); b.addEventListener('pointercancel', end);
    }
    b.addEventListener('click', () => {
      if (b.dataset.spun) { b.dataset.spun = ''; return; }
      if (!gallery.moved) openDetail(i);
    });
  });

  const withModel = list.filter((s) => MODELS[s.name]);
  const mid = withModel.length ? withModel.reduce((a, s) => a + SLOTS[s.slot].x, 0) / withModel.length : gallery.iw / 2;
  Object.assign(gallery, { tz: 1, z: 1, tcx: mid, tcy: gallery.ih / 2 });
  limit(gallery); gallery.cx = gallery.tcx; gallery.cy = gallery.tcy;
  placeStatues();
  updateNav(); setHash();
}
async function changeRoom(r) {
  r = clamp(r, 0, 2);
  if (r === room || busy) return;
  busy = true; closeDetail(true);
  galleryCam.classList.add('switching');
  await wait(360);
  setRoom(r);
  galleryCam.classList.remove('switching'); arrive(galleryCam);
  busy = false;
}
$('#room-prev').addEventListener('click', () => changeRoom(room - 1));
$('#room-next').addEventListener('click', () => changeRoom(room + 1));

let threeLib = null;
function three() {

  if (!threeLib) threeLib = Promise.all([import('three'), import('three/addons/loaders/GLTFLoader.js'), import('three/addons/libs/meshopt_decoder.module.js')])
    .then(([THREE, m, d]) => ({ THREE, GLTFLoader: m.GLTFLoader, MeshoptDecoder: d.MeshoptDecoder }));
  return threeLib;
}
const modelCache = new Map();

function parseGLB(url, GLTFLoader, MeshoptDecoder) {
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  if (!url.startsWith('data:')) return loader.loadAsync(url);
  const raw = atob(url.slice(url.indexOf(',') + 1)), bin = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bin[i] = raw.charCodeAt(i);
  return new Promise((res, rej) => {
    const cib = window.createImageBitmap;
    try { window.createImageBitmap = undefined; loader.parse(bin.buffer, '', res, rej); } finally { window.createImageBitmap = cib; }
  });
}

function loadModel(url) {
  if (!modelCache.has(url)) modelCache.set(url, three().then(async ({ THREE, GLTFLoader, MeshoptDecoder }) => {
    const gltf = await parseGLB(url, GLTFLoader, MeshoptDecoder);
    const m = gltf.scene;

    m.traverse((o) => {
      const mt = o.material;
      if (!mt) return;
      if (mt.emissiveMap && !mt.map) {
        mt.map = mt.emissiveMap; mt.color.set(0xffffff);
        mt.emissiveIntensity = LOOK.baked; mt.roughness = .82; mt.metalness = 0; mt.needsUpdate = true;
      } else if (mt.map) {
        mt.emissive.set(0xffffff); mt.emissiveMap = mt.map; mt.emissiveIntensity = LOOK.fill;
        mt.roughness = .85; mt.metalness = 0; mt.needsUpdate = true;
      }
    });
    const box = new THREE.Box3().setFromObject(m), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
    m.position.set(-c.x, -box.min.y, -c.z);
    const fit = new THREE.Group(); fit.add(m); fit.scale.setScalar(1 / size.y);
    const tpl = new THREE.Group(); tpl.add(fit);
    tpl.userData.width = Math.max(size.x, size.z) / size.y;
    return tpl;
  }));
  return modelCache.get(url);
}

const LOOK = { baked: .75, fill: .42, hemi: .9, key: 1.25, rim: .7, exposure: 1 };
function makeRenderer(THREE, dpr) {
  const r = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: false });
  r.setPixelRatio(Math.min(devicePixelRatio || 1, dpr));
  r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = LOOK.exposure;
  return r;
}
function addLights(THREE, scene) {
  scene.add(new THREE.HemisphereLight(0xfff3e2, 0x8a6a4c, LOOK.hemi));
  const key = new THREE.DirectionalLight(0xffe0b6, LOOK.key); key.position.set(-.6, 1, .9); scene.add(key);
  const rim = new THREE.DirectionalLight(0xffd29a, LOOK.rim); rim.position.set(.9, .5, -.7); scene.add(rim);
  return key;
}

const SPIN = reduce ? 0 : .32;
const FRONT_HOLD = 3500;
/* 석고상마다 돌아가는 방향과 속도를 다르게 (번호로 결정해서 매번 같은 모습) */
const spinFor = (no) => (no % 3 === 0 ? -1 : 1) * (0.2 + 0.06 * ((no * 37) % 7));

const G3 = { ready: null, statues: [], w: 0, h: 0 };
function initGallery3D() {
  if (!G3.ready) G3.ready = three().then(({ THREE }) => {
    const r = makeRenderer(THREE, 1.75);
    r.domElement.className = 'statues';
    gallery.el.insertBefore(r.domElement, hots.parentElement);
    const scene = new THREE.Scene(); const key = addLights(THREE, scene);
    Object.assign(G3, { THREE, r, scene, key, cam: new THREE.PerspectiveCamera(20, 1, 1, 10000) });
  }).catch((e) => report3D(e, 'three'));
  return G3.ready;
}

let toastTimer;
function report3D(e, step) {
  console.error('3D 석고상을 불러오지 못했습니다 (' + step + ')', e);
  const raw = Object.values(MODELS).some((u) => !String(u).startsWith('data:'));
  const msg = location.protocol === 'file:' && raw
    ? '이 파일(src 폴더)은 3D 석고상이 안 떠요. html 폴더의 frame-beyond-v2.html을 열어 주세요.'
    : step === 'three'
      ? '3D 라이브러리를 불러오지 못했어요. 인터넷 연결을 확인하고 새로고침해 주세요.'
      : '석고상 3D 파일을 읽지 못했어요. 파일이 깨졌거나 경로가 틀렸을 수 있어요.';
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('on'), 9000);
}
async function placeStatues() {
  const my = room;
  await initGallery3D(); if (!G3.r) return;
  for (const s of G3.statues) G3.scene.remove(s.obj);
  G3.statues = [];
  for (const s of STUDENTS.filter((x) => x.room === my && MODELS[x.name])) {
    loadModel(MODELS[s.name]).then((tpl) => {
      if (room !== my) return;
      const obj = tpl.clone(true);
      G3.scene.add(obj);

      G3.statues.push({ obj, i: s.no - 1, slot: SLOTS[s.slot], angle: 0, v: 0, spin: spinFor(s.no), hold: FRONT_HOLD + s.no * 420, drag: false });
      const hot = $(`.hot[data-i="${s.no - 1}"]`, hots); if (hot) hot.classList.add('ready');
    }).catch((e) => report3D(e, 'model'));
  }
}
function renderGallery3D(t) {
  if (!G3.r) return;
  const { THREE, r, cam, scene, key } = G3, W = innerWidth, H = innerHeight;
  if (key) key.color.setHSL(0.8 + 0.1 * Math.sin(t / 2600), 0.42, 0.93);
  if (W !== G3.w || H !== G3.h) {
    G3.w = W; G3.h = H; r.setSize(W, H, false);
    const d = (H / 2) / Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    cam.aspect = W / H; cam.position.set(0, 0, d); cam.near = d / 20; cam.far = d * 4; cam.updateProjectionMatrix();
  }
  const L = gallery.layers[1], dt = Math.min(64, t - (G3.last || t)); G3.last = t;
  for (const s of G3.statues) {
    const [sx, sy] = toScreen(gallery, L, s.slot.x, s.slot.y), [, ty] = toScreen(gallery, L, s.slot.x, s.slot.y - s.slot.h);
    s.obj.position.set(sx - W / 2, H / 2 - sy, 0);
    s.obj.scale.setScalar(sy - ty);
    if (s.hold > 0 && !s.drag) s.hold -= dt;
    else if (!s.drag) {
      s.hold = 0;
      s.v += (s.spin - s.v) * (1 - Math.exp(-dt / 800));
      s.angle += s.v * dt / 1000;
    }
    s.obj.rotation.y = s.angle;
  }
  r.render(scene, cam);
}

const dv = $('#detail'), dModel = $('#d-model');
const D3 = { ready: null, obj: null, angle: 0, drag: null, key: '' };
function initDetail3D() {
  if (!D3.ready) D3.ready = three().then(({ THREE }) => {
    const r = makeRenderer(THREE, 2);
    const scene = new THREE.Scene(); addLights(THREE, scene);
    const cam = new THREE.PerspectiveCamera(24, 1, .1, 50);
    const c = r.domElement;
    c.addEventListener('pointerdown', (e) => { D3.drag = e.clientX; c.setPointerCapture(e.pointerId); });
    c.addEventListener('pointermove', (e) => { if (D3.drag == null) return; D3.angle += (e.clientX - D3.drag) * .012; D3.drag = e.clientX; });
    c.addEventListener('pointerup', () => { D3.drag = null; });
    Object.assign(D3, { THREE, r, scene, cam });
  });
  return D3.ready;
}

function frameModel(w, h) {
  const { cam } = D3, mw = D3.obj ? D3.obj.userData.width || .7 : .7;
  const need = Math.max(1.08, (mw * 1.15) / (w / h));
  const dist = (need / 2) / Math.tan(D3.THREE.MathUtils.degToRad(cam.fov / 2));
  cam.aspect = w / h; cam.position.set(0, need / 2 - .02, dist); cam.lookAt(0, need / 2 - .02, 0); cam.updateProjectionMatrix();
}
async function showDetailModel(url, key) {
  dModel.innerHTML = '';
  if (!url) { dModel.innerHTML = bustSVG(0); return; }
  try {
    await initDetail3D();
    const tpl = await loadModel(url);
    if (D3.key !== key) return;
    if (D3.obj) D3.scene.remove(D3.obj);
    D3.obj = tpl.clone(true); D3.scene.add(D3.obj); D3.angle = 0;
    dModel.replaceChildren(D3.r.domElement);
  } catch (e) { if (D3.key === key) { dModel.innerHTML = bustSVG(0); report3D(e, 'model'); } }
}
function renderDetail3D(t, dt) {
  if (!D3.r || !D3.obj || !D3.r.domElement.isConnected) return;
  const w = dModel.clientWidth, h = dModel.clientHeight; if (!w || !h) return;
  const c = D3.r.domElement;
  if (c.width !== Math.round(w * D3.r.getPixelRatio())) D3.r.setSize(w, h, false);
  else if (c.height !== Math.round(h * D3.r.getPixelRatio())) D3.r.setSize(w, h, false);
  frameModel(w, h);
  if (D3.drag == null && !reduce) D3.angle += dt / 1000 * .45;
  D3.obj.rotation.y = D3.angle;
  D3.r.render(D3.scene, D3.cam);
}
let lastFocus = null;
function openDetail(i) {
  i = (i + STUDENTS.length) % STUDENTS.length;
  const s = STUDENTS[i];
  if (detail < 0) lastFocus = document.activeElement;
  detail = i;
  if (s.room !== room) setRoom(s.room);
  $('#d-room').textContent = `${['첫번째', '두번째', '세번째'][s.room]} 전시실`;
  $('#d-count').textContent = `${pad(s.no)} / ${pad(STUDENTS.length)}`;
  $('#d-name').textContent = s.name;
  $('#d-slogan').textContent = s.slogan || '';
  $('#d-desc').textContent = s.desc || '';
  const pf = $('#d-portfolio');
  if (s.portfolio) { pf.href = s.portfolio; pf.textContent = s.portfolio.replace(/^https?:\/\//, '').replace(/\/$/, ''); pf.style.display = ''; pf.classList.remove('off'); pf.removeAttribute('aria-disabled'); }
  else { pf.removeAttribute('href'); pf.style.display = 'none'; }
  D3.key = 'd' + i;
  showDetailModel(MODELS[s.name], D3.key);
  dv.classList.add('on');
  $('#d-close').focus({ preventScroll: true });
}
function closeDetail(silent) {
  if (detail < 0) return;
  dv.classList.remove('on'); detail = -1; D3.key = '';
  if (!silent && lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
}
$('#d-close').addEventListener('click', () => closeDetail());
$('#d-prev').addEventListener('click', () => openDetail(detail - 1));
$('#d-next').addEventListener('click', () => openDetail(detail + 1));
dv.addEventListener('click', (e) => { if (e.target === dv) closeDetail(); });

let filter = -1;

const thumbObj = new Map();
function drawThumb(canvas, url) {
  const t = thumbObj.get(url); if (!t) return;
  const keep = D3.obj; if (keep) D3.scene.remove(keep);
  t.obj.rotation.y = t.angle; D3.scene.add(t.obj); D3.obj = t.obj;
  const px = canvas.width;
  D3.r.setSize(px / D3.r.getPixelRatio(), px / D3.r.getPixelRatio(), false); frameModel(px, px); D3.r.render(D3.scene, D3.cam);
  const x = canvas.getContext('2d'); x.clearRect(0, 0, px, px); x.drawImage(D3.r.domElement, 0, 0, px, px);
  D3.scene.remove(t.obj); D3.obj = keep; if (keep) D3.scene.add(keep);
}
async function mountThumb(el, url) {
  await initDetail3D();
  const tpl = await loadModel(url);
  if (!thumbObj.has(url)) thumbObj.set(url, { obj: tpl.clone(true), angle: 0 });
  if (!el.isConnected) return;
  const c = document.createElement('canvas'); c.width = c.height = Math.round(420 * Math.min(D3.r.getPixelRatio(), 2)); c.setAttribute('aria-hidden', 'true');
  el.replaceChildren(c); el.classList.add('live'); drawThumb(c, url);
}
let spin = null;
const grid = $('#grid');
grid.addEventListener('pointerdown', (e) => {
  const th = e.target.closest('.thumb.live'); if (!th || e.button > 0) return;
  spin = { th, x: e.clientX, url: MODELS[th.dataset.model] }; th.dataset.spun = '';
  try { th.setPointerCapture(e.pointerId); } catch (err) {  }
});
grid.addEventListener('pointermove', (e) => {
  if (!spin) return;
  const dx = e.clientX - spin.x; spin.x = e.clientX; if (!dx) return;
  spin.th.dataset.spun = '1';
  const t = thumbObj.get(spin.url); if (t) { t.angle += dx * .012; drawThumb(spin.th.firstElementChild, spin.url); }
});
grid.addEventListener('pointerup', () => { spin = null; });
grid.addEventListener('pointercancel', () => { spin = null; });
function renderList() {
  const q = $('#search').value.trim();
  const rows = STUDENTS.filter((s) => (filter < 0 || s.room === filter) && (!q || s.name.includes(q)));
  $('#grid').innerHTML = rows.map((s) => `
    <button class="card" type="button" data-i="${s.no - 1}">
      <span class="thumb" data-model="${MODELS[s.name] ? s.name : ''}">${bustSVG([-1, 1, 0][s.no % 3])}</span>
      <span class="meta"><b>${s.name}</b><em>${pad(s.no)}</em></span>
      <span class="gal">GALLERY ${pad(s.room + 1)}</span>
      <span class="card-slogan">${s.slogan}</span>
    </button>`).join('');
  $('#total').textContent = `총 인원 ${STUDENTS.length}명`;
  $('#empty').hidden = rows.length > 0;
  $$('#grid .card').forEach((b) => b.addEventListener('click', () => {
    const th = $('.thumb', b);
    if (th && th.dataset.spun) { th.dataset.spun = ''; return; }
    const s = STUDENTS[+b.dataset.i];
    setRoom(s.room); go('gallery'); arrive(galleryCam); openDetail(s.no - 1);
  }));
  $$('#grid .thumb[data-model]').forEach((el) => {
    const name = el.dataset.model; if (!name) return;
    mountThumb(el, MODELS[name]).catch((e) => report3D(e, 'model'));
  });
}
$('#search').addEventListener('input', renderList);

$$('.pill button').forEach((b) => b.addEventListener('click', () => {
  ++seq; busy = false;
  if (b.dataset.room) {
    const r = +b.dataset.room;
    if (page === 'gallery') { changeRoom(r); return; }
    setRoom(r); go('gallery'); arrive(galleryCam);
  } else { go(b.dataset.go); if (b.dataset.go === 'lobby') arrive($('#lobby-cam')); }
}));
$('#brand').addEventListener('click', playIntro);
$('#ticket').addEventListener('click', tear);
$('#poster').addEventListener('click', () => { if (!street.moved) enterPoster(); });
$$('[data-skip]').forEach((b) => b.addEventListener('click', () => { ++seq; busy = false; clearTimeout(introTimer); clearTimeout(frameTimer); go('lobby'); arrive($('#lobby-cam')); }));
addEventListener('keydown', (e) => {
  if (e.target.closest && e.target.closest('input,textarea')) return;
  if (page === 'intro' && (e.key === 'Enter' || e.key === ' ') && e.target === document.body) {
    e.preventDefault();
    if (screens.intro === introFrame) shatter();
    else intro.classList.contains('home') ? enterPoster() : tear();
  } else if (detail >= 0) {
    if (e.key === 'Escape') closeDetail();
    if (e.key === 'ArrowLeft') openDetail(detail - 1);
    if (e.key === 'ArrowRight') openDetail(detail + 1);
  } else if (page === 'gallery') {
    if (e.key === 'ArrowLeft') changeRoom(room - 1);
    if (e.key === 'ArrowRight') changeRoom(room + 1);
  }
});

let lastT = performance.now();
function tick(t) {
  const dt = Math.min(64, t - lastT); lastT = t;
  ptr.x += (ptr.tx - ptr.x) * .05; ptr.y += (ptr.ty - ptr.y) * .05;
  if (intro.classList.contains('on')) updateStage(street, t);
  if (screens.lobby.classList.contains('on')) {
    updateStage(lobby, t);

    const L = lobby.layers[1];
    for (const v of views) v.style.transform = `translate(${(-lobby.ox * .55) / L.s}px,${(-lobby.oy * .55) / L.s}px)`;
    drawDust(lobbyDust, lobby, t);
  }
  if (screens.gallery.classList.contains('on')) {
    updateStage(gallery, t);
    renderGallery3D(t);
    drawDust(galleryDust, gallery, t);
    if (detail >= 0) renderDetail3D(t, dt);
  }
  requestAnimationFrame(tick);
}

document.documentElement.style.setProperty('--img-gallery', `url("${new URL(ASSETS.gallery, location.href)}")`);
$$('[data-asset]').forEach((img) => { img.src = ASSETS[img.dataset.asset]; });
setRoom(0, true);
requestAnimationFrame(tick);
const start = location.hash.slice(1);
if (start === 'lobby') go('lobby');
else if (start === 'list') go('list');
else if (/^gallery-[123]$/.test(start)) { setRoom(+start.slice(-1) - 1); go('gallery'); }
else playIntro();
