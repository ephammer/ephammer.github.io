importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyC2bRPhR_ZW_1zp-lR7IF98FPY9dhvhCSc",
    authDomain: "rabbi-is-it-kosher.firebaseapp.com",
    databaseURL: "https://rabbi-is-it-kosher.firebaseio.com",
    projectId: "rabbi-is-it-kosher",
    storageBucket: "rabbi-is-it-kosher.appspot.com",
    messagingSenderId: "731023771814",
    appId: "1:731023771814:web:8571218ebc684ef2910c67"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
            };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
    console.log('notification received: ', event)
});