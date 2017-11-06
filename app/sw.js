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

    // Load from cache first as these are shell files that will not change
    
    self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
            }));
    });

    self.addEventListener('push', function(event) {
     
        if (event.data) {

          console.log('Push event received: ', event.data.text());
          
          const title = 'Hey! Listen!';
          const options = {
            body: event.data.text(),
            icon: 'images/navi.jpg'
          };
          
          event.waitUntil(self.registration.showNotification(title, options));
        
        
        } 
    
    });

    self.addEventListener('sync', function(event) {
      fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1&format=json')
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
      
          // Examine the text in the response
          response.json().then(function(data) {
            const title = 'Hey! Look!';
            const options = {
              body: data,
              icon: 'images/navi.jpg'
            };
            self.registration.showNotification(title, options);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    });