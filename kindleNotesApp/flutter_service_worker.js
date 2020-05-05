'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "5910e380764b5b7e9a4443fe70a8e60c",
"/": "5910e380764b5b7e9a4443fe70a8e60c",
"main.dart.js": "bbcd4e98eb78a0696da8673bf0c7aec1",
"assets/LICENSE": "68ab651235daf7277fb3661d02b28fe8",
"assets/AssetManifest.json": "22f84947390aac3fa0798c2cfe764f1d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/icons/bookshelve.svg": "0b671f19b6ed8d5cad559d7169e05563",
"assets/icons/bookshelve.png": "40d731baea8cd72811a53672bb116e9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/icons/bookshelve.svg": "0b671f19b6ed8d5cad559d7169e05563",
"assets/assets/icons/bookshelve.png": "40d731baea8cd72811a53672bb116e9b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
