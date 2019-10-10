// CODELAB: Update cache names any time any of the cached files change.
let CACHE_NAME = 'zscore.be-v1.3.3';

// CODELAB: Add list of files to cache here.
let FILES_TO_CACHE = [
  '/',
  'index.html',
  'css/style.css',
  'js/main.js',
  'js/lmsfuns.js',
  'js/install.js',
  'images/logo/kuleuven.svg',
  'images/logo/vwvj.svg',
  'images/icons/icon-72x72.png',
  'images/icons/icon-96x96.png',
  'images/icons/icon-128x128.png',
  'images/icons/icon-144x144.png',
  'images/icons/icon-152x152.png',
  'images/icons/icon-192x192.png',
  'images/icons/icon-384x384.png',
  'images/icons/icon-512x512.png'
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
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }));
    });
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
