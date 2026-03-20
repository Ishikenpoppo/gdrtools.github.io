const CACHE_NAME = 'grimoire-pwa-v3';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './styles.css',
  './assets/audio/dice-roll.mp3',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './js/core/icons.js',
  './js/data/tarot-data.js',
  './js/core/particles.js',
  './js/core/persistence.js',
  './js/tools/dice.js',
  './js/tools/tarot.js',
  './js/tools/notes.js',
  './js/tools/initiative.js',
  './js/tools/encounter.js',
  './js/tools/npc.js',
  './js/core/navigation.js',
  './js/app.js'
];

self.addEventListener('install', (event) => {
  console.log('[SW] install');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => console.log('[SW] precached'))
      .catch((err) => console.error('PWA install fail', err))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => 
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        event.waitUntil(
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
              }
            })
            .catch(() => {})
        );
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || (networkResponse.type !== 'basic' && networkResponse.type !== 'cors')) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return caches.match('./index.html');
        });
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
