const CACHE_NAME = 'chardikala-cache-v1';
const urlsToCache = [
  '/',
  '/ChardikalaTV/',
  '/ChardikalaTV/index.html',
  '/ChardikalaTV/manifest.json',
  '/ChardikalaTV/icon-256.png',
  '/ChardikalaTV/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
