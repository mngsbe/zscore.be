// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'zscore.be-v1.3.1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '/',
  'index.html',
  'css/style.css',
  'js/main.js',
  'js/lmsfuns.js',
  'js/install.js',
  'images/logo/kuleuven.svg',
  'images/logo/vwvj.svg'
];

self.addEventListener('install', event => {
//  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching page for offline use');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});


// Delete unused caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
