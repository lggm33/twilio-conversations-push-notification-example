# twilio-conversations-push-notification-example
Example code to set push notification for Twilio Conversation SDK with Firebase

Steps to run the example: 

1.Clone the repository

2. Follow the steps 1,2,3 and 4 of the [Conversations Web Push Notifications doc](https://www.twilio.com/docs/conversations/javascript/push-notifications-web) 
Note: in the step 3 make sure that you upload the Server Key under the Cloud Messaging Tab of the Project Configuration dashboard

3. Create a file named firebase-config.js and copy your Firebase Configuration object from the step 2 of the Conversation doc.

4. Change firebaseConfig variable with the same Firebase Configuration object in the index.js file. 

5. Create a Conversation Access Token with the Twilio Crendential SID. Step 4 of the Conversation doc. Copy the Access Token in the token variable in the index.js file

6. Run the index.html file using localhost. If you use Visual Studio Code you can use Live Server.

7. Open the Browser Console and you should see the FCM Token

Steps for testing: 

1. Send a push notification from your Firebase Console. Follow this [link](https://firebase.google.com/docs/cloud-messaging/js/first-message?hl=es-419#send_a_test_notification_message) to see how to do it. 
  You shold see this log '"FcmNotifications: push received" after a few seconds and an error from Twilio SDK. 

2. In your Console you can see if Twilio received the FMC token by going to Conversations>Manage>Services>Your Service> Bindings

3. Your Access Token must have an Identity and this Identity must be in at least one Conversation.
  Add a Message to any Conversation in which the Identity of your Access Token is part.
  You should see the 'FcmNotifications: push received' after some seconds and the Notification in your Desktop. 

