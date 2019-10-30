importScripts('/it202-project2/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('project2').then(function(cache) {
     return cache.addAll([
       '/it202-project2',
       '/it202-project2/index.html',
       "/it202-project2/page_content/movies.html"
       "/it202-project2/page_content/list.html",
       "/it202-project2/page_content/movieMap.html",
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
