// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

const firebaseConfig = {
    apiKey: "AIzaSyB3tGRrqL9HkOkoSAtX-mHyX_MAZHXPvSk",
    authDomain: "scene-understanding-demo.firebaseapp.com",
    databaseURL: "https://scene-understanding-demo.firebaseio.com",
    projectId: "scene-understanding-demo",
    storageBucket: "scene-understanding-demo.appspot.com",
    messagingSenderId: "57759435763",
    appId: "1:57759435763:web:dffd864e17e0f782fd2086"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.notification.title;
  const notificationOptions = {
    body: payload.data.notification.body,
    icon: payload.data.notification.icon
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
