/* ════════════════════════════════════════════════════
   SESSION PERSISTENCE ENGINE
════════════════════════════════════════════════════ */
const STORAGE_KEY = 'grimoire_session_v1';
const AUTOSAVE_DEBOUNCE = 800; // ms
let persistenceTimer = null;

/* ── Serialise the entire app state to localStorage ── */
function saveSession() {
  try {
    const state = {
      savedAt:     new Date().toISOString(),
      activePageId: document.querySelector('.nav-item.active')?.dataset.page || 'home',
      dice: {
        history: rollHistory
      },
      tarot: {
        log:  tarotLog,
        deckRemaining: tarotDeck.map(c => c.id)
      },
      notes: {
        list:         notes,
        activeNoteId: activeNoteId
      },
      initiative: {
        combatants:  combatants,
        activeIdx:   activeIdx,
        combatRound: combatRound
      }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updatePersistenceUI('saved');
  } catch(e) {
    console.warn('Grimoire: could not save session', e);
    updatePersistenceUI('error');
  }
}

/* ── Debounced save (called on every mutation) ── */
function scheduleSave() {
  clearTimeout(persistenceTimer);
  updatePersistenceUI('pending');
  persistenceTimer = setTimeout(saveSession, AUTOSAVE_DEBOUNCE);
}

/* ── Restore state from localStorage on boot ── */
function restoreSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const state = JSON.parse(raw);

    // Dice history
    if (Array.isArray(state.dice?.history)) {
      rollHistory = state.dice.history;
      updateHistoryDropdown();
    }

    // Tarot log
    if (Array.isArray(state.tarot?.log)) {
      tarotLog = state.tarot.log;
      updateTarotLog();
    }
    // Restore deck order (remove already-drawn cards)
    if (Array.isArray(state.tarot?.deckRemaining)) {
      const remaining = new Set(state.tarot.deckRemaining);
      tarotDeck = TAROT.filter(c => remaining.has(c.id));
      if (tarotDeck.length === 0) shuffleDeck();
    }

    // Notes
    if (Array.isArray(state.notes?.list)) {
      notes = state.notes.list.map(n => ({
        ...n,
        createdAt: new Date(n.createdAt),
        updatedAt: new Date(n.updatedAt)
      }));
      renderNoteList();
      if (state.notes.activeNoteId) {
        const exists = notes.find(n => n.id === state.notes.activeNoteId);
        if (exists) selectNote(state.notes.activeNoteId);
      }
    }

    // Initiative state
    if (state.initiative) {
      combatants  = state.initiative.combatants  || [];
      activeIdx   = state.initiative.activeIdx   ?? -1;
      combatRound = state.initiative.combatRound || 1;
      const rEl = document.getElementById('initRoundNum');
      if (rEl) rEl.textContent = combatRound;
      renderInitiativeList();
    }

    // Restore last active page
    if (state.activePageId && state.activePageId !== 'home') {
      navigate(state.activePageId, null);
    }

    return true;
  } catch(e) {
    console.warn('Grimoire: could not restore session', e);
    return false;
  }
}

/* ── Clear all saved data ── */
function clearSession() {
  if (!confirm('Permanently delete all saved session data?\n\nThis will erase notes, dice history, and tarot log.')) return;
  localStorage.removeItem(STORAGE_KEY);
  rollHistory = [];
  tarotLog    = [];
  notes       = [];
  activeNoteId = null;
  tarotDeck   = [];
  shuffleDeck();
  updateHistoryDropdown();
  updateTarotLog();
  renderNoteList();
  combatants = []; activeIdx = -1; combatRound = 1;
  const rEl2 = document.getElementById('initRoundNum');
  if (rEl2) rEl2.textContent = '1';
  renderInitiativeList();
  document.getElementById('notesEditorEmpty').style.display = 'flex';
  document.getElementById('notesEditorPanel').style.display = 'none';
  updatePersistenceUI('cleared');
  navigate('home', null);
}

/* ── Session persistence status ── */
function updatePersistenceUI(status) {
  const el = document.getElementById('persistStatus');
  if (!el) return;
  const states = {
    saved:   { icon: '✦', text: 'Session saved',    color: 'rgba(200,146,42,.65)' },
    pending: { icon: '…', text: 'Saving…',           color: 'rgba(200,146,42,.35)' },
    error:   { icon: '⚠', text: 'Save failed',       color: 'rgba(200,80,80,.65)'  },
    cleared: { icon: '○', text: 'Session cleared',   color: 'rgba(160,160,160,.50)'},
    fresh:   { icon: '✦', text: 'No saved session',  color: 'rgba(200,146,42,.30)' },
    loaded:  { icon: '↺', text: 'Session restored',  color: 'rgba(120,200,120,.65)'}
  };
  const s = states[status] || states.saved;
  el.innerHTML = `<span style="color:${s.color}">${s.icon} ${s.text}</span>`;
}

/* Save before page unload (synchronous) */
window.addEventListener('beforeunload', () => {
  clearTimeout(persistenceTimer);
  saveSession();
});
