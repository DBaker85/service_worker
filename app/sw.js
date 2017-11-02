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
            '/sound/chest.mp3',
            '/images/navi.jpg',
            '/sw.js'
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
     
      
      if(Notification.permission === 'granted') { 
        if (event.data) {

          console.log('Push event received: ', event.data.text());
          
          const title = 'Hey! Listen!';
          const options = {
            body: event.data.text(),
            icon: 'images/navi.jpg'
          };
          
          event.waitUntil(self.registration.showNotification(title, options));
        
        
        } 
    }
    });