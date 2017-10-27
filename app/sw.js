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
      serviceWorkerRegistration.showNotification(check, {
        "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
        "icon": "images/ccard.png",
        "vibrate": [200, 100, 200, 100, 200, 100, 400],
        "tag": "request",
        "actions": [
          { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
          { "action": "no", "title": "No", "icon": "images/no.png" }
        ]
      });
    
     }
    )

    self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
            }));
    });

    