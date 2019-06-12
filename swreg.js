if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service.js')
    .then(function(registration) {
      registration.addEventListener('updatefound', function() {
        var installingWorker = registration.installing;
        console.log('Sw working:',
          installingWorker);
      });
    })
    .catch(function(eror) {
      console.log('serviceWorker failed:', eror);
    });
} else {
  console.log('serviceWorker is supported.');
}
