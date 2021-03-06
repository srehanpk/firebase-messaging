console.log("registered");


var cacheData = 'my-app-v1';


var urlsToCache = [
  "/",
  "App.css",
  "/App.js",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/main.chunk.js",
  "/favicon.ico",
  "/sw.js",
  "/manifest.json",
  "/sockjs-node",
  "/logo192.png",
  "/firebase.js",
  "firebase-messaging-sw.js",
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheData)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
        
        .catch ((err)=> {

            console.log("Err", err);
          });
      })
  );
});



self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});