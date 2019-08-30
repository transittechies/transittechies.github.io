importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute([
      { url: '/img/star.svg', revision: '1' },
      { url: '/img/icon_train.svg', revision: '1' },
      { url: '/img/ttnyc.jpg', revision: '1' },
  ]);

  workbox.routing.registerRoute(
    new RegExp('/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'ttnyc',
    })
  );

  workbox.routing.registerRoute(
    /.*(?:ampproject)\.org.*\.(?:js)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'amp-project',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts',
    })
  );

  workbox.precaching.cleanupOutdatedCaches();

} else {
  console.log(`Workbox didn't load`);
}