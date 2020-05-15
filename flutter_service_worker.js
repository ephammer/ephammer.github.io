'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3eb61d65490b4ada2a5940a61d62f0b6",
"/": "3eb61d65490b4ada2a5940a61d62f0b6",
"main.dart.js": "9df7598493db1a5bc5dee7af780c3c37",
"assets/LICENSE": "0355857b8dc7f180260f91c22aa17660",
"assets/images/blueprint.jpg": "749d0c67be3d4866d81351acf0c48203",
"assets/images/projects.png": "ff7de4a91a78264081285450cd61e1ec",
"assets/images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png": "d56df49a807a9fd06eb1667a84d3810e",
"assets/images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/images/GitHub-Mark/PNG/GitHub-Mark-32px.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/images/GitHub-Mark/PNG/GitHub-Mark-64px.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"assets/images/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png": "eb94bb97c3410733ce017b184d314723",
"assets/images/GitHub-Mark/Vector/GitHub-Mark.eps": "8d6f6ff0bcc4512f99f05758b51590ec",
"assets/images/GitHub-Mark/Vector/GitHub-Mark.ai": "d26611a8033adc15cdd0bb7837e6d5bb",
"assets/images/profilpic_transparent.png": "0e683536d1a4da4bdc0c45d2c1281c82",
"assets/images/profilpic.png": "ab8232c21c356685dafa762c8dbc7dd4",
"assets/images/cv.png": "cd435e289008a4998322c1e62662708d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/fonts/Gilberto.ttf": "24a6aaeb2c57dcce09549708048934f5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
