/* ── Populate all SVG icons from data-icon attributes ── */
(function initIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });
})();

/* ── Boot: restore previous session ── */
(function boot() {
  const restored = restoreSession();
  restoreDiceCounts(); // sync card UI from hidden inputs restored by session
  updatePersistenceUI(restored ? 'loaded' : 'fresh');
  setTimeout(() => updatePersistenceUI('saved'), 3000);
})();

/* ═══════════════════════════════════════════════════
   ADAPTIVE TYPOGRAPHY — auto-scales text to viewport
═══════════════════════════════════════════════════ */
(function initAdaptiveTypography() {
  // Reference design resolution (the canvas the UI was designed on)
  const REF_W  = 1440;
  const REF_H  = 900;
  // Allowed scaling range: never go below 72% or above 130%
  const MIN_SCALE = 0.72;
  const MAX_SCALE = 1.30;

  function computeScale() {
    // window.innerWidth/Height give CSS-pixel dimensions (already DPR-compensated)
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Geometric mean of both axes prevents distortion on unusual aspect-ratios
    const raw = Math.sqrt((vw / REF_W) * (vh / REF_H));
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, raw));
  }

  function apply() {
    const scale = computeScale();
    // One single CSS-custom-property drives every calc() in the stylesheet
    document.documentElement.style.setProperty('--fs-scale', scale.toFixed(4));
  }

  // Apply immediately (before first paint wherever possible)
  apply();

  // Re-apply on every viewport resize (covers window resize, split-screen, zoom)
  const ro = new ResizeObserver(apply);
  ro.observe(document.documentElement);

  // Re-apply when the user moves the window to a monitor with a different DPR
  // matchMedia fires when the resolution environment changes
  let dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
  dprQuery.addEventListener('change', function onDprChange() {
    apply();
    // Re-bind to the new DPR so subsequent moves are also caught
    dprQuery.removeEventListener('change', onDprChange);
    dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    dprQuery.addEventListener('change', onDprChange);
  });
})();

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  console.info('Grimoire PWA ready to install');
  const notify = document.createElement('div');
  notify.id = 'pwaInstallHint';
  notify.innerHTML = 'Installa Grimoire per l\'uso offline (premi qui).';
  notify.style.position = 'fixed';
  notify.style.bottom = '14px';
  notify.style.left = '14px';
  notify.style.padding = '10px 14px';
  notify.style.background = 'rgba(200,146,42,.95)';
  notify.style.color = '#050402';
  notify.style.borderRadius = '6px';
  notify.style.zIndex = '10000';
  notify.style.cursor = 'pointer';
  notify.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      console.info('PWA install accettato');
    } else {
      console.info('PWA install rifiutato');
    }
    deferredInstallPrompt = null;
    notify.remove();
  });
  document.body.appendChild(notify);
});

window.addEventListener('appinstalled', () => {
  console.info('Grimoire PWA installata');
  const installedNotification = document.createElement('div');
  installedNotification.style.position = 'fixed';
  installedNotification.style.bottom = '14px';
  installedNotification.style.left = '14px';
  installedNotification.style.padding = '10px 14px';
  installedNotification.style.background = 'rgba(109,157,75,.96)';
  installedNotification.style.color = '#050402';
  installedNotification.style.borderRadius = '6px';
  installedNotification.style.zIndex = '10000';
  installedNotification.textContent = 'Grimoire installata!';
  document.body.appendChild(installedNotification);
  setTimeout(() => installedNotification.remove(), 3500);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(err => {
      console.warn('Service worker registration failed', err);
    });
  });
}
