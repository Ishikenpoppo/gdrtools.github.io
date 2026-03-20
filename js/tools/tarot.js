/* ════════════════════════════════════════════════════
   TAROT ORACLE
════════════════════════════════════════════════════ */
let tarotDeck = [];
let tarotLog  = [];
let firstDraw = true;

/* ── Build CSS starfield ── */
function buildStars(id) {
  const wrap = document.getElementById(id);
  if (!wrap) return;
  const count = 55;
  wrap.innerHTML = Array.from({length: count}, () => {
    const size = (Math.random() * 1.8 + 0.5).toFixed(1);
    const lo   = (Math.random() * 0.08 + 0.04).toFixed(2);
    const hi   = (Math.random() * 0.45 + 0.15).toFixed(2);
    const dur  = (Math.random() * 3 + 2).toFixed(1);
    const delay= (Math.random() * 4).toFixed(1);
    const x    = (Math.random() * 100).toFixed(1);
    const y    = (Math.random() * 100).toFixed(1);
    return `<div class="t-star" style="width:${size}px;height:${size}px;left:${x}%;top:${y}%;--lo:${lo};--hi:${hi};--d:${dur}s;--delay:${delay}s"></div>`;
  }).join('');
}
buildStars('tarotStars');
buildStars('diceStars');
buildStars('notesStars');
buildStars('initiativeStars');
buildStars('encounterStars');
buildStars('npcStars');

function shuffleDeck() {
  tarotDeck = [...TAROT].sort(() => Math.random() - 0.5);
}
shuffleDeck();

// Render card back SVG into the flipper back face
function renderCardBack() {
  const back = document.getElementById('cardBack');
  back.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 340" width="100%" height="100%">
    <rect fill="#0e0a18" width="200" height="340" rx="5"/>
    <rect x="8" y="8" width="184" height="324" rx="4" fill="none" stroke="rgba(138,106,184,.55)" stroke-width="1.5"/>
    <rect x="14" y="14" width="172" height="312" rx="3" fill="none" stroke="rgba(138,106,184,.22)" stroke-width=".8"/>
    ${buildBackPattern()}
    <text x="100" y="180" text-anchor="middle" font-family="serif" font-size="28" fill="rgba(138,106,184,.35)">✦</text>
    <text x="100" y="178" text-anchor="middle" font-family="serif" font-size="28" fill="rgba(200,170,255,.12)">✦</text>
  </svg>`;
}

function buildBackPattern() {
  let s = '';
  for (let r=0;r<7;r++) for (let c=0;c<4;c++) {
    const x=28+c*42, y=28+r*44;
    s += `<polygon points="${x},${y+10} ${x+10},${y} ${x+20},${y+10} ${x+10},${y+20}" fill="none" stroke="rgba(138,106,184,.18)" stroke-width=".8"/>`;
    s += `<circle cx="${x+10}" cy="${y+10}" r="3" fill="none" stroke="rgba(138,106,184,.12)" stroke-width=".6"/>`;
  }
  for (let i=0;i<5;i++) {
    const a=i*36*Math.PI/180, r=80;
    const x2=100+r*Math.cos(a-Math.PI/2), y2=170+r*Math.sin(a-Math.PI/2);
    s+=`<line x1="100" y1="170" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(138,106,184,.10)" stroke-width=".8"/>`;
  }
  return s;
}

// Render deck stack inner symbol
(function() {
  const el = document.getElementById('deckSymbol');
  el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 340" width="200" height="340">
    <rect fill="#0e0a18" width="200" height="340"/>
    ${buildBackPattern()}
    <text x="100" y="180" text-anchor="middle" font-family="serif" font-size="32" fill="rgba(138,106,184,.40)">✦</text>
    <text x="100" y="205" text-anchor="middle" font-family="Cinzel,serif" font-size="10" letter-spacing="4" fill="rgba(138,106,184,.30)">ARCANA</text>
  </svg>`;
})();

function drawCard() {
  // Refill deck if exhausted
  if (tarotDeck.length === 0) shuffleDeck();

  const card = tarotDeck.pop();
  const reversed = Math.random() < 0.25; // 25% chance reversed

  // Transition deck → flip scene on first draw
  if (firstDraw) {
    firstDraw = false;
    const deckStack = document.getElementById('deckStack');
    const cardScene = document.getElementById('cardScene');
    deckStack.style.display = 'none';
    cardScene.style.display = 'block';
  }

  // Reset flipper to face back
  const flipper = document.getElementById('cardFlipper');
  flipper.classList.remove('is-flipped');
  flipper.style.transition = 'none';

  // Render card back into back face
  renderCardBack();

  // Render card art into front face
  const front = document.getElementById('cardFront');
  const rotation = reversed ? 'transform:rotate(180deg);width:100%;height:100%;display:block;' : 'width:100%;height:100%;display:block;';
  front.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 340" style="${rotation}">${card.art}</svg>`;

  // Hide info during flip
  const info = document.getElementById('cardInfo');
  info.classList.remove('visible');

  // Trigger flip after short delay (allow DOM repaint)
  requestAnimationFrame(() => {
    flipper.style.transition = 'transform .80s cubic-bezier(.4,0,.2,1)';
    setTimeout(() => {
      flipper.classList.add('is-flipped');

      // After flip completes, show info
      setTimeout(() => {
        populateCardInfo(card, reversed);
        info.classList.add('visible');
        // Mystic particle burst
        spawnBurst(`rgba(138,106,184,.6)`);
      }, 820);
    }, 60);
  });

  // Disable draw button during animation
  const btn = document.getElementById('drawBtn');
  btn.disabled = true;
  setTimeout(() => btn.disabled = false, 1400);

  // Add to session log
  const ts = new Date().toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'});
  tarotLog.push({ name: card.name, numeral: card.numeral, reversed, ts });
  updateTarotLog();
  scheduleSave();
}

function populateCardInfo(card, reversed) {
  document.getElementById('infoNumeral').textContent = card.numeral;
  document.getElementById('infoName').textContent = card.name;
  document.getElementById('infoKeywords').textContent = card.keywords;

  // Reversed badge
  const wrap = document.getElementById('reversedBadgeWrap');
  if (reversed) {
    wrap.innerHTML = `<div class="reversed-badge">⟳ Reversed — Shadow Aspect</div>`;
  } else {
    wrap.innerHTML = '';
  }

  // Meaning
  const meaning = reversed
    ? `<em style="color:rgba(220,160,160,.75);font-style:italic;">Reversed:</em> ${card.shadow}<br><br>` + card.meaning
    : card.meaning;
  document.getElementById('infoMeaning').innerHTML = meaning;

  // GDR Prompts — now divs, not li
  const pl = document.getElementById('infoPrompts');
  pl.innerHTML = card.prompts.map((p,i) =>
    `<div class="prompt-item" style="animation-delay:${i*80}ms"><span class="prompt-glyph">❧</span>${p}</div>`
  ).join('');
}

function updateTarotLog() {
  const log = document.getElementById('tarotLog');
  const inner = document.getElementById('tarotLogInner');
  if (tarotLog.length > 0) log.style.display = 'flex';
  inner.innerHTML = tarotLog.map((e, i) =>
    `<span class="log-chip${e.reversed?' rev':''}" style="animation-delay:${i*40}ms">${e.ts} ${e.numeral} ${e.name}${e.reversed?' ⟳':''}</span>`
  ).join('');
}
