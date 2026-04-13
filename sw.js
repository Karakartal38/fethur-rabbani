var CACHE_NAME = 'fethur-rabbani-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
          caches.open(CACHE_NAME).then(function(cache) {
                  return cache.addAll([
                            '/fethur-rabbani/',
                            '/fethur-rabbani/index.html',
                            '/fethur-rabbani/manifest.json',
                            '/fethur-rabbani/icon-192.png',
                            '/fethur-rabbani/icon-512.png'
                          ]);
          })
        );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
          caches.match(event.request).then(function(response) {
                  return response || fetch(event.request);
          })
        );
});
