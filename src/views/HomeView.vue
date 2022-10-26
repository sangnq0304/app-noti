<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getToken, onMessage } from "firebase/messaging";

import { firebaseMessaging } from "@/firebase";

import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

  inject: ["messaging"],
  mounted() {
    getToken(firebaseMessaging, {
      vapidKey:
        "BBTC0AUK6cl5NLlIOB6C88WiAqRQ0MpMBrXpmDJkIY1S89PfseiYCXlZqwHh5TaADFbS5AlzNDRP4M_WW5LxKSo",
    })
      .then((currentToken) => {
        console.log("currentToken", currentToken);
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });

    onMessage(firebaseMessaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
    });
  },
};
</script>
