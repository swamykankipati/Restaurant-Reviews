C_value = 'version';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(C_value)
    .then((cache) => {
      cache.addAll([

      ])
    })
  )
})
self.addEventListener('activate', function(event) {
  console.log("activating Service Worker");
  var updateded = ['old', 'new'];
  event.waitUntil(
    caches.keys().then(function(value) {
      return Promise.all(value.map(function(data) {
        if (updateded.indexOf(data) === -1) {
          return caches.delete(data);
        }
      }));
    })
  );
});
// fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(C_value)
    .then((cache) => {
      return cache.match(event.request)
        .then((callback) => {
          return callback || fetch(event.request)
            .then((callback) => {
              cache.put(event.request, callback.clone());
              return callback;
            });
        });
    })
  )
})
