importScripts('https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js'
)

var firebaseConfig = {
    apiKey: "AIzaSyC0j_Kk9uMy3zqq2FZiRX-IU6bZbfaWCRI",
    authDomain: "app-notification-ae427.firebaseapp.com",
    projectId: "app-notification-ae427",
    storageBucket: "app-notification-ae427.appspot.com",
    messagingSenderId: "902130198710",
    appId: "1:902130198710:web:9dcfbe53f1733485671e17",
    measurementId: "G-M8E3HE4HZJ"
}

const app = firebase.initializeApp(firebaseConfig)
