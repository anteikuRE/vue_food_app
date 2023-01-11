<template>
  <screen-template class="screen__temp">
    <div class="logo">
      <div class="letters">
        <h1>F</h1>
        <h1>H</h1>
      </div>
      <h2>CHEF HOUSE</h2>
    </div>
    <form @submit.prevent="">
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="min. 8 characters"
        />
      </div>
      <router-link to="/choose-food">
        <base-button v-if="formMode === 'reg'" class="submit__btn"
          >Register</base-button
        >
        <base-button v-else class="submit__btn">Sign In</base-button>
      </router-link>
    </form>
    <router-link to="/restore-account">
      <h2 class="restore">Did you forget your password?</h2>
    </router-link>
    <base-button
      v-if="formMode === 'reg'"
      class="signin__btn"
      @click="formMode = 'sign'"
      >I Have Account</base-button
    >
    <base-button v-else class="signin__btn" @click="formMode = 'reg'"
      >Registration</base-button
    >
  </screen-template>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import ScreenTemplate from "../components/ScreenTemplate.vue";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

export default {
  components: {
    BaseButton,
    ScreenTemplate,
  },
  data() {
    return {
      // validation: false,
      formMode: "reg",
      email: "",
      password: "",
    };
  },
  methods: {
    // register() {
    //   this.SignInUp(createUserWithEmailAndPassword);
    // },
    // sign() {
    //   this.SignInUp(signInWithEmailAndPassword);
    // },
    // SignInUp(method) {
    //   this.validator();
    //   if (this.validation === false) return;
    //   method(getAuth(), this.email, this.password)
    //     .then((data) => {
    //       console.log(data);
    //       this.$router.push("/choose-food");
    //     })
    //     .catch((error) => {
    //       alert(error.code);
    //       console.log(error.code);
    //       console.log(error.message);
    //     });
    // },
    // validator() {
    //   if (
    //     this.email === "" ||
    //     !this.email.includes("@") ||
    //     this.password.length < 6
    //   ) {
    //     alert("Invalid params");
    //     this.validation = false;
    //     return;
    //   } else {
    //     this.validation = true;
    //   }
    // },
  },
};
</script>

<style scoped>
label {
  color: white;
}
.screen__temp :nth-child(1) {
  justify-content: space-between;
}
.logo {
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  background: white;
  border-bottom-right-radius: 222px;
  border-bottom-left-radius: 222px;
}
.logo h1,
h2 {
  color: black;
}
.letters {
  font-weight: 600;
  font-size: 80px;
  display: flex;
  justify-content: center;
}
.letters :nth-child(2) {
  color: black;
  text-shadow: 0 0 1px #ffffff, 0 0 2px #ffffff;
  margin-left: -3px;
}
.letters :nth-child(1) {
  margin-right: -3px;
}
.logo h2 {
  font-weight: 300;
  font-size: 24px;
}
form div {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px 0;
}
form div label {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  padding-left: 10px;
}
form div input {
  border: 1px solid #ffffff;
  border-radius: 22.5px;
  background-color: black;
  height: 35px;
  color: white;
  text-indent: 10px;
}
form div input::placeholder {
  /* padding-left: 10px; */
  color: white;
  opacity: 0.5;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.submit__btn {
  margin-top: 20px;
  width: 125px;
  height: 45px;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid #ffffff;
  border-radius: 22.5px;
  background-color: black;
  color: white;
}
.signin__btn {
  width: 220px;
  height: 60px;
  margin-bottom: 2rem;
}
.restore {
  color: white;
  text-decoration: underline;
}
</style>
