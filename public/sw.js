/* ============================================================================
   Veya Service Worker — minimal cache-first shell for the marketing site.
   At launch this is essentially a no-op that satisfies PWA install
   requirements. When you build the real app at app.veya.app, replace this
   with a richer strategy (precache assets, network-first for HTML, etc.).
   ============================================================================ */

const CACHE_NAME = 'veya-v1';
const SHELL = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL)).catch(() => {
      // Don't fail installation if any shell resource is missing.
      return Promise.resolve();
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests for same-origin navigations / static assets.
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;

  // Network-first for HTML so content stays fresh; cache fallback if offline.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((m) => m || caches.match('/')))
    );
    return;
  }

  // Cache-first for everything else.
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
