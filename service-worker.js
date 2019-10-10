// CODELAB: Update cache names any time any of the cached files change.
let CACHE_NAME = 'zscore.be-v1.3.2';

// CODELAB: Add list of files to cache here.
let FILES_TO_CACHE = [
  '/',
];

self.addEventListener('install', event => {
//  self.skipWaiting();
  console.log('[ServiceWorker] about to install');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching page for offline use');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  console.log('done...');

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
  console.log('[ServiceWorker] activated');

});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
  console.log('[ServiceWorker] fetched');

});
