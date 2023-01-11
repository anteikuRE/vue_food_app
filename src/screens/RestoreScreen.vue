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
        <label for="email">Email address</label>
        <input type="email" id="email" placeholder="name@example.com" />
      </div>
      <base-button class="signin__btn">Restore Account</base-button>
    </form>
    <h2 class="text">
      Remeber Password?<router-link class="logIn" to="registration"
        >Log In</router-link
      >
    </h2>
  </screen-template>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import ScreenTemplate from "../components/ScreenTemplate.vue";

export default {
  components: {
    BaseButton,
    ScreenTemplate,
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

.signin__btn {
  width: 220px;
  height: 60px;
  margin-top: 2rem;
}
.text {
  color: white;
  margin-bottom: 2rem;
}
.logIn {
  color: white;
  font-weight: 600;
  text-decoration: none;
  margin-left: 2px;
}
</style>
