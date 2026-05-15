// Service Worker tamamen devre dışı - kendini siliyor
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// fetch handler yok - SW hiçbir şeye müdahale etmiyor
