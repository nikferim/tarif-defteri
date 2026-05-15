// v3 - cache yok, her zaman network
const VERSION = 'v3';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Cache kullanma, her zaman network'ten getir
  e.respondWith(fetch(e.request));
});
