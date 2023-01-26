const token = ""

import 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js'
import 'https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

async function runApp() {

   setPushNotification()

   //use the Conversation Client here 
  
}

const setPushNotification = async() => {
  firebase.initializeApp(firebaseConfig);
  try {
      const registration = await navigator.serviceWorker.register(
      "firebase-messaging-sw.js"
      );
      console.log("ServiceWorker registered with scope:", registration.scope);
  } catch (e) {
      console.log("ServiceWorker registration failed:", e);
  }

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
      console.log("FcmNotifications: can't request permission:", permission);
      return;
  }

  const messaging = firebase.messaging();
  const fcmToken = await messaging.getToken();
  if (!fcmToken) {
      console.log("FcmNotifications: can't get fcm token");
      return;
  }

  console.log("FcmNotifications: got fcm token", fcmToken);
  client.setPushRegistrationId("fcm", fcmToken);
  messaging.onMessage((payload) => {
      console.log("FcmNotifications: push received", payload);
      if (client) {
      client.handlePushNotification(payload);
  }
  });
}

const showNotification = (pushNotification) => {
  console.log("push notification")
  const notificationTitle = pushNotification.data.conversationTitle || "";

  const notificationOptions = {
    body: pushNotification.body ?? "",
    icon: "favicon.ico",
  };

  const notification = new Notification(notificationTitle, notificationOptions);
  notification.onclick = (event) => {
    console.log("notification.onclick", event);
    event.preventDefault();
    notification.close();
}}

const client = new Twilio.Conversations.Client(token);
console.log(client)

client.on('stateChanged', (state) => {
  if (state === 'initialized') {
    console.log({client})
    runApp()
}
})

client.on("pushNotification", showNotification);
client.on("messageAdded", (message)=> {console.log(message)})



