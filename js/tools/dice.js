/* ════════════════════════════════════════════════════
   DICE ROLLER — card-based UI
════════════════════════════════════════════════════ */
let rollHistory = [];
let selectedLogIdx = null;

/* ── Die definitions ── */
const DICE_DEF = [
  {
    sides: 4, color: '#e87070', rgb: '232,112,112',
    art: `<polygon points="32,6 58,52 6,52" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="32" y1="6" x2="32" y2="52" stroke="currentColor" stroke-width=".8" stroke-dasharray="3,3" opacity=".35"/>
          <line x1="6" y1="52" x2="58" y2="52" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="32" cy="38" r="3" fill="currentColor" opacity=".55"/>`,
    vb: '0 0 64 58'
  },
  {
    sides: 6, color: '#e8a060', rgb: '232,160,96',
    art: `<rect x="8" y="8" width="48" height="48" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="20" cy="20" r="3.5" fill="currentColor" opacity=".70"/>
          <circle cx="44" cy="44" r="3.5" fill="currentColor" opacity=".70"/>
          <circle cx="44" cy="20" r="3.5" fill="currentColor" opacity=".40"/>
          <circle cx="20" cy="44" r="3.5" fill="currentColor" opacity=".40"/>
          <circle cx="20" cy="32" r="3.5" fill="currentColor" opacity=".55"/>
          <circle cx="44" cy="32" r="3.5" fill="currentColor" opacity=".55"/>`,
    vb: '0 0 64 64'
  },
  {
    sides: 8, color: '#d4b04a', rgb: '212,176,74',
    art: `<polygon points="32,4 60,26 60,38 32,60 4,38 4,26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="32" y1="4" x2="32" y2="60" stroke="currentColor" stroke-width=".8" stroke-dasharray="3,3" opacity=".35"/>
          <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" stroke-width=".8" stroke-dasharray="3,3" opacity=".35"/>`,
    vb: '0 0 64 64'
  },
  {
    sides: 10, color: '#80c880', rgb: '128,200,128',
    art: `<polygon points="32,4 56,20 62,46 44,62 20,62 2,46 8,20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
          <polygon points="32,18 44,26 44,42 32,50 20,42 20,26" fill="none" stroke="currentColor" stroke-width=".9" opacity=".40"/>`,
    vb: '0 0 64 66'
  },
  {
    sides: 12, color: '#60b8d8', rgb: '96,184,216',
    art: `<polygon points="32,4 54,14 62,36 50,56 14,56 2,36 10,14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
          <polygon points="32,16 48,24 52,40 44,52 20,52 12,40 16,24" fill="none" stroke="currentColor" stroke-width=".9" opacity=".38"/>`,
    vb: '0 0 64 60'
  },
  {
    sides: 20, color: '#a880d8', rgb: '168,128,216',
    art: `<polygon points="32,3 59,16 62,46 44,62 20,62 2,46 5,16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="32" y1="3" x2="20" y2="62" stroke="currentColor" stroke-width=".7" stroke-dasharray="3,3" opacity=".30"/>
          <line x1="32" y1="3" x2="44" y2="62" stroke="currentColor" stroke-width=".7" stroke-dasharray="3,3" opacity=".30"/>
          <line x1="5" y1="16" x2="59" y2="16" stroke="currentColor" stroke-width=".7" stroke-dasharray="3,3" opacity=".30"/>
          <line x1="2" y1="46" x2="62" y2="46" stroke="currentColor" stroke-width=".7" stroke-dasharray="3,3" opacity=".30"/>`,
    vb: '0 0 64 65'
  },
  {
    sides: 100, color: '#d870b8', rgb: '216,112,184',
    art: `<circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" stroke-width=".9" opacity=".40"/>
          <text x="32" y="37" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="currentColor" opacity=".80">%</text>`,
    vb: '0 0 64 64'
  }
];

/* Counts per die type (parallel to DICE_DEF) */
let diceCounts = DICE_DEF.map(() => 0);

/* ── Build die cards ── */
function buildDiceCards() {
  const grid = document.getElementById('diceCardsGrid');
  if (!grid) return;
  grid.innerHTML = DICE_DEF.map((d, i) => `
    <div class="die-card" id="dieCard${d.sides}" style="--die-color:${d.color}">
      <div class="die-shape-wrap">
        <svg viewBox="${d.vb}" width="56" height="56" style="color:${d.color};opacity:.75;transition:opacity .2s">
          ${d.art}
        </svg>
      </div>
      <div class="die-label">d${d.sides}</div>
      <div class="die-counter">
        <button class="die-counter-btn" onclick="changeDie(${i},-1,event)" tabindex="-1">−</button>
        <span class="die-counter-val" id="dieCount${d.sides}">0</span>
        <button class="die-counter-btn" onclick="changeDie(${i},+1,event)" tabindex="-1">+</button>
      </div>
    </div>
  `).join('');
}

function changeDie(idx, delta, ev) {
  ev?.stopPropagation();
  diceCounts[idx] = Math.max(0, Math.min(10, diceCounts[idx] + delta));
  syncDieCard(idx);
  // sync hidden input for session save
  document.getElementById('d' + DICE_DEF[idx].sides).value = diceCounts[idx];
  scheduleSave();
}

function syncDieCard(idx) {
  const d    = DICE_DEF[idx];
  const cnt  = diceCounts[idx];
  const card = document.getElementById('dieCard' + d.sides);
  const val  = document.getElementById('dieCount' + d.sides);
  if (!card || !val) return;
  val.textContent = cnt;
  if (cnt > 0) {
    card.classList.add('active');
    card.querySelector('svg').style.opacity = '1';
    // Apply die-specific glow using its own color
    const hex = d.color; // e.g. '#e87070'
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    card.style.setProperty('--die-rgb', `${r},${g},${b}`);
    card.style.boxShadow = `0 0 0 1px rgba(${r},${g},${b},.22), 0 0 28px rgba(${r},${g},${b},.22), inset 0 0 20px rgba(${r},${g},${b},.06)`;
    card.style.borderColor = `rgba(${r},${g},${b},.60)`;
    card.style.background = `linear-gradient(160deg, rgba(${Math.round(r*.18)},${Math.round(g*.14)},${Math.round(b*.10)},.97) 0%, rgba(14,9,3,.97) 100%)`;
  } else {
    card.classList.remove('active');
    card.querySelector('svg').style.opacity = '.55';
    card.style.boxShadow = '';
    card.style.borderColor = '';
    card.style.background = '';
  }
}

function clearAllDice() {
  diceCounts = DICE_DEF.map(() => 0);
  DICE_DEF.forEach((_, i) => syncDieCard(i));
  DICE_DEF.forEach(d => { document.getElementById('d' + d.sides).value = 0; });
  scheduleSave();
}

function restoreDiceCounts() {
  DICE_DEF.forEach((d, i) => {
    const v = parseInt(document.getElementById('d' + d.sides)?.value) || 0;
    diceCounts[i] = v;
    syncDieCard(i);
  });
}

/* ── Roll ── */
function rollDice() {
  const audio = document.getElementById('rollSound');
  if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }

  const btn = document.getElementById('rollBtn');
  btn.classList.remove('flashing'); void btn.offsetWidth; btn.classList.add('flashing');
  setTimeout(() => btn.classList.remove('flashing'), 650);

  if (window.spawnBurst) window.spawnBurst();

  const results = []; let total = 0;
  DICE_DEF.forEach((d, i) => {
    const count = diceCounts[i];
    if (count > 0) {
      const rolls = Array.from({ length: count }, () => Math.floor(Math.random() * d.sides) + 1);
      const sub = rolls.reduce((a, b) => a + b, 0);
      total += sub;
      results.push({ sides: d.sides, count, rolls, sub, color: d.color, rgb: d.rgb });
      // Shake the card
      const card = document.getElementById('dieCard' + d.sides);
      if (card) {
        card.classList.remove('rolling'); void card.offsetWidth; card.classList.add('rolling');
        setTimeout(() => card.classList.remove('rolling'), 580);
      }
    }
  });

  if (!results.length) {
    animateTotalIdle();
    return;
  }

  // Animate total — tinted by the highest-count die color
  const dominant = results.reduce((a, b) => b.count > a.count ? b : a, results[0]);
  animateTotal(total, dominant.color);

  // Render breakdown chips
  renderBreakdown(results);

  // Build text for history (same format as before for export)
  const sep  = '═'.repeat(30);
  const text = results.map(r => `d${r.sides} (×${r.count}): [${r.rolls.join(', ')}] = ${r.sub}`).join('\n')
    + `\n\n${sep}\nTOTAL: ${total}`;

  const ts = new Date();
  const entry = {
    timestamp: ts.toLocaleString('sv-SE'),
    timeLabel: ts.toLocaleTimeString('it-IT', { hour:'2-digit', minute:'2-digit' }),
    results,
    total,
    text
  };
  rollHistory.push(entry);
  selectedLogIdx = rollHistory.length - 1;
  renderRollLog();
  scheduleSave();

  return { total, results, dominant };
}

/* ── Total animation ── */
let totalAnimFrame = null;
function animateTotal(target, color) {
  const el = document.getElementById('diceTotal');
  if (!el) return;
  el.classList.remove('idle', 'pop');
  cancelAnimationFrame(totalAnimFrame);

  // Apply die color tint to the total
  if (color) {
    el.style.color = color;
    el.style.textShadow = `0 0 28px ${color}88, 0 0 65px ${color}44, 0 4px 14px rgba(0,0,0,.8)`;
  }

  const start = performance.now();
  const duration = Math.min(650, 120 + target * 5);

  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * ease);
    if (t < 1) {
      totalAnimFrame = requestAnimationFrame(step);
    } else {
      el.textContent = target;
      el.classList.add('pop');
    }
  }
  totalAnimFrame = requestAnimationFrame(step);
}

function animateTotalIdle() {
  const el = document.getElementById('diceTotal');
  if (!el) return;
  el.textContent = '—';
  el.classList.add('idle');
  el.classList.remove('pop');
  el.style.color = '';
  el.style.textShadow = '';
  renderBreakdown([]);
}

/* ── Breakdown chips ── */
function renderBreakdown(results) {
  const wrap = document.getElementById('diceBreakdown');
  if (!wrap) return;
  wrap.innerHTML = results.map((r, ri) => `
    <div class="breakdown-chip"
      style="color:${r.color};border-color:rgba(${r.rgb},.38);background:rgba(${r.rgb},.07);animation-delay:${ri*60}ms">
      d${r.sides}×${r.count} = ${r.sub}
    </div>
  `).join('');
}

/* ── Log rendering ── */
function renderRollLog() {
  const scroll = document.getElementById('diceLogScroll');
  const empty  = document.getElementById('diceLogEmpty');
  if (!scroll) return;

  if (!rollHistory.length) {
    scroll.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  scroll.innerHTML = rollHistory.slice().reverse().map((entry, ri) => {
    const idx = rollHistory.length - 1 - ri;
    const summary = entry.results.map(r => `${r.count}d${r.sides}`).join(' + ');
    const sel = idx === selectedLogIdx ? 'selected' : '';
    return `<div class="log-roll-entry ${sel}" onclick="selectLogEntry(${idx})"
              style="animation-delay:${ri*30}ms">
      <span class="log-roll-time">${entry.timeLabel || entry.timestamp.slice(11,16)}</span>
      <span class="log-roll-summary">${summary}</span>
      <span class="log-roll-total">${entry.total}</span>
    </div>`;
  }).join('');
}

function selectLogEntry(idx) {
  selectedLogIdx = idx;
  const entry = rollHistory[idx];
  if (!entry) return;
  renderRollLog();
  const dominant = entry.results?.reduce((a, b) => b.count > a.count ? b : a, entry.results[0]);
  animateTotal(entry.total, dominant?.color);
  renderBreakdown(entry.results || []);
}

/* ── Legacy wrappers (kept for session persistence + export) ── */
function updateHistoryDropdown() { renderRollLog(); }
function showHistoryEntry() {}

function clearHistory() {
  if (!rollHistory.length) { return; }
  if (!confirm('Clear all roll history?')) return;
  rollHistory = [];
  selectedLogIdx = null;
  renderRollLog();
  animateTotalIdle();
  scheduleSave();
}

function exportHistory() {
  if (!rollHistory.length) { alert('No history to export.'); return; }
  let c = 'Grimoire — Dice Roll History\n' + '═'.repeat(30) + '\n\n';
  rollHistory.forEach((e, i) => {
    c += `Roll ${i+1}: ${e.timestamp}\n${e.text}\n${'-'.repeat(40)}\n\n`;
  });
  const b = new Blob([c], { type:'text/plain' });
  const u = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.href = u;
  a.download = `grimoire_dice_${new Date().toISOString().slice(0,16).replace(/[:T]/g,'-')}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u);
}

/* ── Init ── */
buildDiceCards();
document.querySelectorAll('input[type="number"]').forEach(inp => {
  inp.addEventListener('keypress', e => { if (e.key === 'Enter') rollDice(); });
});
