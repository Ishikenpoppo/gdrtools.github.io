/* ═══════════════════════════════════════════════════════
   INITIATIVE TRACKER
═══════════════════════════════════════════════════════ */
let combatants  = [];   // { id, name, type, initiative, hp, maxHp, ac, conditions, dead }
let activeIdx   = -1;   // index in combatants[] of current turn
let combatRound = 1;

const TYPE_META = {
  player: { color: '#80c880', label: 'Player' },
  ally:   { color: '#60b8d8', label: 'Ally'   },
  enemy:  { color: '#e87070', label: 'Enemy'  }
};
const COND_META = {
  Poisoned:   '#80c880', Stunned:    '#60b8d8', Blinded:  '#d4b04a',
  Charmed:    '#d870b8', Frightened: '#e87070', Prone:    '#e8a060',
  Restrained: '#a880d8', Invisible:  '#c8c8c8'
};
const COND_ICONS = {
  Poisoned:'☠', Stunned:'⚡', Blinded:'◉', Charmed:'♥',
  Frightened:'👁', Prone:'↓', Restrained:'⛓', Invisible:'◌'
};

/* ── Type selector ── */
function selectType(btn) {
  document.querySelectorAll('#initTypeGroup .init-type-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

/* ── Condition toggle (add panel) ── */
function toggleCond(chip) {
  chip.classList.toggle('selected');
}

/* ── Roll d20 for initiative ── */
function rollInitiative() {
  const val = Math.floor(Math.random() * 20) + 1;
  const el = document.getElementById('initInit');
  el.value = val;
  el.style.borderColor = 'rgba(200,146,42,.65)';
  setTimeout(() => el.style.borderColor = '', 800);
}

/* ── Use quick preset ── */
function usePreset(name, type, init, hp, ac) {
  document.getElementById('initName').value = name;
  document.getElementById('initInit').value = init;
  document.getElementById('initHp').value   = hp;
  document.getElementById('initAc').value   = ac;
  // Select type
  document.querySelectorAll('#initTypeGroup .init-type-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.type === type);
  });
  // Clear conditions
  document.querySelectorAll('#initCondGroup .init-cond-chip').forEach(c => c.classList.remove('selected'));
}

/* ── Add combatant ── */
function addCombatant() {
  const name = document.getElementById('initName').value.trim();
  if (!name) {
    document.getElementById('initName').focus();
    document.getElementById('initName').style.borderColor = 'rgba(220,100,100,.65)';
    setTimeout(() => document.getElementById('initName').style.borderColor = '', 900);
    return;
  }
  const typeBtn = document.querySelector('#initTypeGroup .init-type-btn.selected');
  const type    = typeBtn?.dataset.type || 'player';
  const initVal = parseInt(document.getElementById('initInit').value) || (Math.floor(Math.random()*20)+1);
  const maxHp   = parseInt(document.getElementById('initHp').value)   || 10;
  const ac      = parseInt(document.getElementById('initAc').value)    || 10;
  const conds   = [...document.querySelectorAll('#initCondGroup .init-cond-chip.selected')]
                    .map(c => c.dataset.cond);

  // If adding the first combatant, switch from idle to input state
  if (combatants.length === 0) {
    switchToolState('initiative', 'input');
  }

  combatants.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,5),
    name, type, initiative: initVal,
    hp: maxHp, maxHp, ac, conditions: conds, dead: false
  });

  // If this is the first combatant, activate it
  if (combatants.length === 1) activeIdx = 0;

  renderInitiativeList();
  scheduleSave();

  // Reset form
  document.getElementById('initName').value  = '';
  document.getElementById('initInit').value  = '';
  document.getElementById('initHp').value    = '';
  document.getElementById('initAc').value    = '';
  document.querySelectorAll('#initCondGroup .init-cond-chip').forEach(c => c.classList.remove('selected'));
  document.getElementById('initName').focus();
}

/* ── Sort by initiative (descending) ── */
function sortByInitiative() {
  if (!combatants.length) return;
  const activeId = combatants[activeIdx]?.id;
  combatants.sort((a, b) => b.initiative - a.initiative);
  if (activeId) activeIdx = combatants.findIndex(c => c.id === activeId);
  renderInitiativeList();
  scheduleSave();
}

/* ── Advance turn ── */
function nextTurn() {
  if (!combatants.length) return;

  // Animate old active card leaving
  const cards = document.querySelectorAll('.combatant-card');
  if (cards[activeIdx]) {
    cards[activeIdx].style.transition = 'opacity .15s';
    cards[activeIdx].style.opacity    = '.6';
    setTimeout(() => { if (cards[activeIdx]) cards[activeIdx].style.opacity = ''; }, 200);
  }

  // Find next alive combatant
  let next = activeIdx;
  let looped = false;
  do {
    next++;
    if (next >= combatants.length) { next = 0; if (!looped) { looped = true; combatRound++; } }
    if (!combatants[next].dead) break;
  } while (next !== activeIdx);

  activeIdx = next;
  if (looped) {
    const el = document.getElementById('initRoundNum');
    el.textContent = combatRound;
    el.style.transform = 'scale(1.3)';
    el.style.color = 'var(--gold-bright)';
    setTimeout(() => { el.style.transform = ''; }, 400);
  }
  renderInitiativeList();
  scrollToActive();
  scheduleSave();
}

/* ── HP modification ── */
function modifyHp(id, delta) {
  const c = combatants.find(x => x.id === id);
  if (!c) return;
  c.hp = Math.max(0, Math.min(c.maxHp, c.hp + delta));
  if (c.hp === 0) c.dead = true;
  renderInitiativeList();
  scheduleSave();
}

function setHpDirect(id, val) {
  const c = combatants.find(x => x.id === id);
  if (!c) return;
  const num = parseInt(val);
  if (isNaN(num)) return;
  c.hp = Math.max(0, Math.min(c.maxHp, num));
  c.dead = c.hp === 0;
  renderInitiativeList();
  scheduleSave();
}

/* ── Toggle dead ── */
function toggleDead(id) {
  const c = combatants.find(x => x.id === id);
  if (!c) return;
  c.dead = !c.dead;
  if (c.dead) c.hp = 0; else if (c.hp === 0) c.hp = 1;
  renderInitiativeList();
  scheduleSave();
}

/* ── Toggle condition on existing combatant ── */
function toggleCombatantCond(id, cond) {
  const c = combatants.find(x => x.id === id);
  if (!c) return;
  const idx = c.conditions.indexOf(cond);
  if (idx === -1) c.conditions.push(cond); else c.conditions.splice(idx, 1);
  renderInitiativeList();
  scheduleSave();
}

/* ── Remove combatant ── */
function removeCombatant(id) {
  const idx = combatants.findIndex(c => c.id === id);
  if (idx === -1) return;
  combatants.splice(idx, 1);
  if (activeIdx >= combatants.length) activeIdx = 0;
  renderInitiativeList();
  scheduleSave();
}

/* ── Clear all ── */
function clearCombat() {
  if (!combatants.length) return;
  if (!confirm('Reset all combatants and round counter?')) return;
  combatants  = [];
  activeIdx   = -1;
  combatRound = 1;
  document.getElementById('initRoundNum').textContent = '1';
  renderInitiativeList();
  scheduleSave();
}

/* ── HP colour by percentage ── */
function hpColor(hp, maxHp) {
  const pct = hp / maxHp;
  if (pct > .60) return '#80c880';
  if (pct > .30) return '#d4b04a';
  return '#e87070';
}

/* ── Scroll active card into view ── */
function scrollToActive() {
  const list   = document.getElementById('initListScroll');
  const cards  = list.querySelectorAll('.combatant-card');
  const active = cards[activeIdx];
  if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Main render ── */
function renderInitiativeList() {
  const scroll = document.getElementById('initListScroll');
  const empty  = document.getElementById('initEmpty');

  if (!combatants.length) {
    scroll.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  // Build each card
  scroll.innerHTML = combatants.map((c, i) => {
    const tm       = TYPE_META[c.type] || TYPE_META.player;
    const isActive = i === activeIdx;
    const pct      = c.maxHp > 0 ? (c.hp / c.maxHp * 100).toFixed(1) : 0;
    const hpCol    = hpColor(c.hp, c.maxHp);
    const condHtml = c.conditions.map(cd => {
      const col = COND_META[cd] || 'rgba(200,146,42,.60)';
      const ico = COND_ICONS[cd] || '◆';
      return `<span class="c-cond-badge" style="--cond-color:${col};cursor:pointer"
        onclick="toggleCombatantCond('${c.id}','${cd}')" title="Click to remove">${ico} ${cd}</span>`;
    }).join('');

    // Condition picker (collapsed, opens on +)
    const availConds = Object.keys(COND_META).filter(cd => !c.conditions.includes(cd));
    const addCondHtml = availConds.map(cd => {
      const col = COND_META[cd];
      const ico = COND_ICONS[cd] || '◆';
      return `<span class="c-cond-badge" style="--cond-color:${col};cursor:pointer;opacity:.55"
        onclick="toggleCombatantCond('${c.id}','${cd}')">${ico} ${cd}</span>`;
    }).join('');

    return `
    <div class="combatant-card ${isActive?'is-active':''} ${c.dead?'is-dead':''}"
         style="--c-color:${tm.color}; animation-delay:${i*35}ms">
      <div class="init-turn-arrow"></div>

      <!-- Initiative badge -->
      <div class="c-init-badge" title="Initiative ${c.initiative}">
        <div class="c-init-num">${c.initiative}</div>
        <div class="c-init-label">init</div>
      </div>

      <!-- Name + type + conditions -->
      <div class="c-info">
        <div class="combatant-name">${c.name}</div>
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:3px">
          <span class="c-type-pill">${tm.label}</span>
          ${c.ac ? `<span style="font-family:'Cinzel',serif;font-size:9px;color:var(--ink-dim);opacity:.55">AC ${c.ac}</span>` : ''}
        </div>
        <div class="c-conditions">
          ${condHtml}
          ${availConds.length ? `<span class="c-cond-badge" style="cursor:pointer;opacity:.35;border-style:dashed"
            onclick="document.getElementById('condPicker_${c.id}').style.display=document.getElementById('condPicker_${c.id}').style.display==='flex'?'none':'flex'">+ cond</span>` : ''}
        </div>
        <div id="condPicker_${c.id}" style="display:none;flex-wrap:wrap;gap:3px;margin-top:4px">
          ${addCondHtml}
        </div>
      </div>

      <!-- HP block -->
      <div class="c-hp-block">
        <div class="c-hp-nums">
          <span class="c-hp-current" style="color:${hpCol}" id="hpCur_${c.id}">${c.hp}</span>
          <span class="c-hp-sep">/</span>
          <span class="c-hp-max">${c.maxHp}</span>
        </div>
        <div class="c-hp-bar">
          <div class="c-hp-fill" style="width:${pct}%;background:${hpCol}"></div>
        </div>
        <div class="c-hp-btns">
          <button class="c-hp-btn dmg"  onclick="modifyHp('${c.id}',-1)"  title="−1 HP">−</button>
          <button class="c-hp-btn dmg"  onclick="modifyHp('${c.id}',-5)"  title="−5 HP">−5</button>
          <button class="c-hp-btn heal" onclick="modifyHp('${c.id}',+5)"  title="+5 HP">+5</button>
          <button class="c-hp-btn heal" onclick="modifyHp('${c.id}',+1)"  title="+1 HP">+</button>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="c-actions">
        ${c.dead
          ? `<button class="c-action-btn" onclick="toggleDead('${c.id}')">Revive</button>`
          : `<button class="c-action-btn kill" onclick="toggleDead('${c.id}')">KO</button>`}
        <button class="c-action-btn" onclick="removeCombatant('${c.id}')">Remove</button>
      </div>
    </div>`;
  }).join('');
}
