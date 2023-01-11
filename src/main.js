import { createApp } from "vue";
import { createStore } from "vuex";
import router from "./router.js";
import "./style.css";
import App from "./App.vue";
import VCalendar from "v-calendar";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

// Initialize Firebase

const store = createStore({
  state() {
    return {
      ChefName: "Chef Babi",
      ChefFood: "Asian fusion food",
      ChefPic: 1,
      order: {
        accountId: 1,
        ChoosenFood: "Italian",
        ChoosenChef: "Chef Babi",
        Amount: "2",
        Date: "2023",
        Time: "14:30",
      },
    };
  },
  mutations: {},
});

const app = createApp(App);
app.use(router);
app.use(store);
// initializeApp(firebaseConfig);
app.use(VCalendar, {});

app.mount("#app");
