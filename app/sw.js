// For lame browsers include below
// importScripts('/cache-polyfill.js');

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('treasure').then(function(cache) {
          return cache.addAll([
            '/',
            '/index.html',
            '/css/style.css',
            '/js/index.js',
            '/sound/chest.mp3'
          ]);
        })
      );
      
    
     }
    )

    self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
            }));
    });

    self.addEventListener('push', function(event) {
      if (event.data) {
        console.log('Push event received: ', event.data.text());
      } else {
        console.log('Empty push event received');
      }
    });