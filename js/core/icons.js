/* ═══════════════════════════════════════════════════════════════
   GRIMOIRE — Custom SVG Icon System
   Stile: outline decorato medievale / arcano
   Palette: gold stroke (currentColor) su sfondo scuro
   ═══════════════════════════════════════════════════════════════ */

const ICONS = {

  /* ── Home: Torretta castello con merli e arco ── */
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 21V10l9-7 9 7v11"/>
    <path d="M3 21h18"/>
    <path d="M7 21v-5a5 5 0 0 1 10 0v5"/>
    <rect x="3" y="8" width="2" height="3" fill="currentColor" stroke="none" opacity=".45"/>
    <rect x="7" y="6" width="2" height="3" fill="currentColor" stroke="none" opacity=".45"/>
    <rect x="15" y="6" width="2" height="3" fill="currentColor" stroke="none" opacity=".45"/>
    <rect x="19" y="8" width="2" height="3" fill="currentColor" stroke="none" opacity=".45"/>
    <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" opacity=".6"/>
    <path d="M1 10h22" stroke-width=".7" opacity=".3"/>
  </svg>`,

  /* ── Dice Roller: Dado con rune incise ── */
  dice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>
    <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>
    <path d="M3 3l2.5 2.5M21 3l-2.5 2.5M3 21l2.5-2.5M21 21l-2.5-2.5" stroke-width=".7" opacity=".35"/>
    <path d="M12 1v2M12 21v2M1 12h2M21 12h2" stroke-width=".6" opacity=".25"/>
  </svg>`,

  /* ── Tarot Oracle: Carta arcana con stella e bordo ornamentale ── */
  tarot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <rect x="6" y="4" width="12" height="16" rx="1" stroke-width=".7" stroke-dasharray="2 1.5" opacity=".4"/>
    <polygon points="12,6.5 13.5,10.5 17.5,10.5 14.2,13 15.5,17 12,14.5 8.5,17 9.8,13 6.5,10.5 10.5,10.5" stroke-width="1.2" fill="currentColor" fill-opacity=".12"/>
    <circle cx="12" cy="12" r="6.5" stroke-width=".5" opacity=".2" stroke-dasharray="1.5 2"/>
    <line x1="4" y1="5" x2="6" y2="5" stroke-width=".6" opacity=".3"/>
    <line x1="18" y1="5" x2="20" y2="5" stroke-width=".6" opacity=".3"/>
    <line x1="4" y1="19" x2="6" y2="19" stroke-width=".6" opacity=".3"/>
    <line x1="18" y1="19" x2="20" y2="19" stroke-width=".6" opacity=".3"/>
  </svg>`,

  /* ── Encounter: Pergamena arrotolata con sigillo ── */
  encounter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3c-1.5 0-3 .8-3 2.5S6.5 8 8 8h10c1.5 0 2-.8 2-2.5"/>
    <path d="M8 3h10c1.5 0 2 .8 2 2.5"/>
    <path d="M5 5.5V19c0 1.7 1.5 2.5 3 2.5h8"/>
    <path d="M20 5.5V16"/>
    <ellipse cx="18" cy="19" rx="2.5" ry="2.5"/>
    <path d="M18 17.5v3M16.5 19h3" stroke-width=".9"/>
    <line x1="9" y1="10" x2="15" y2="10" stroke-width=".7" opacity=".4"/>
    <line x1="9" y1="13" x2="17" y2="13" stroke-width=".7" opacity=".4"/>
    <line x1="9" y1="16" x2="14" y2="16" stroke-width=".7" opacity=".4"/>
    <circle cx="18" cy="19" r="1" fill="currentColor" stroke="none" opacity=".2"/>
  </svg>`,

  /* ── NPC Forge: Mago con cappello a punta e stella ── */
  npc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L9 12h6L12 2z" fill="currentColor" fill-opacity=".06"/>
    <path d="M12 2L9 12h6L12 2z"/>
    <polygon points="12,4.5 12.7,6.5 14.5,6.5 13.1,7.8 13.6,9.5 12,8.4 10.4,9.5 10.9,7.8 9.5,6.5 11.3,6.5" fill="currentColor" stroke="none" opacity=".55"/>
    <path d="M6 12h12"/>
    <path d="M7 12c-.5 1.5-.5 3 0 4.5"/>
    <path d="M17 12c.5 1.5.5 3 0 4.5"/>
    <circle cx="12" cy="17" r="3.5" stroke-width="1.2"/>
    <circle cx="10.8" cy="16.3" r=".6" fill="currentColor" stroke="none" opacity=".5"/>
    <circle cx="13.2" cy="16.3" r=".6" fill="currentColor" stroke="none" opacity=".5"/>
    <path d="M10.5 18.5c.5.5 2.5.5 3 0" stroke-width=".8"/>
    <path d="M12 20.5v2" stroke-width=".7" opacity=".3"/>
    <path d="M9 22h6" stroke-width=".7" opacity=".3"/>
  </svg>`,

  /* ── Combat Tracker: Spade incrociate con cerchio runico ── */
  combat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" stroke-width=".6" stroke-dasharray="2.5 2" opacity=".3"/>
    <circle cx="12" cy="12" r="7" stroke-width=".5" opacity=".15"/>
    <path d="M7.5 2.5l5 9.5-5 9.5" stroke-width="1.3"/>
    <path d="M16.5 2.5l-5 9.5 5 9.5" stroke-width="1.3"/>
    <line x1="5.5" y1="9" x2="9.5" y2="9" stroke-width="1.1"/>
    <line x1="14.5" y1="9" x2="18.5" y2="9" stroke-width="1.1"/>
    <path d="M6.5 20l1.5-1 1.5 1" stroke-width="1"/>
    <path d="M14.5 20l1.5-1 1.5 1" stroke-width="1"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" fill-opacity=".15" stroke-width="1"/>
  </svg>`,

  /* ── Session Notes: Libro aperto con penna d'oca ── */
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 4c2-1 4-1 6-.5s4 1.5 4 1.5V20s-2-1-4-1.5-4-.5-6 .5V4z"/>
    <path d="M12 5s2-1 4-1.5S20 3 22 4v17c-2-1-4-1-6-.5S12 20 12 20"/>
    <line x1="5" y1="8" x2="9" y2="8.8" stroke-width=".6" opacity=".35"/>
    <line x1="5" y1="11" x2="9" y2="11.8" stroke-width=".6" opacity=".35"/>
    <line x1="5" y1="14" x2="8" y2="14.6" stroke-width=".6" opacity=".35"/>
    <line x1="15" y1="8" x2="19" y2="7.2" stroke-width=".6" opacity=".35"/>
    <line x1="15" y1="11" x2="19" y2="10.2" stroke-width=".6" opacity=".35"/>
    <path d="M20 1l-2.5 5.5.8.4L21 2.2 20 1z" stroke-width=".9" fill="currentColor" fill-opacity=".1"/>
    <circle cx="18.3" cy="6.8" r=".5" fill="currentColor" stroke="none" opacity=".4"/>
  </svg>`,

  /* ── Stella decorativa (✦) ── */
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 8L12 17l-6.5 5 2.5-8-6-4.5h7.5z" fill="currentColor" fill-opacity=".1"/>
  </svg>`,

  /* ── Chiudi / Cancella (✕) ── */
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="6" x2="18" y2="18"/>
    <line x1="18" y1="6" x2="6" y2="18"/>
  </svg>`
};

/* Utility: inserisce un'icona SVG inline in un elemento.
   Uso: setIcon(element, 'dice')  oppure  element.innerHTML = ICONS.dice */
function setIcon(el, name) {
  if (el && ICONS[name]) el.innerHTML = ICONS[name];
}
