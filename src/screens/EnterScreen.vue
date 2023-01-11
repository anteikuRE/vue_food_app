<template>
  <screen-template class="screen__temp">
    <div class="logo">
      <div class="letters">
        <h1>F</h1>
        <h1>H</h1>
      </div>
      <h2>CHEF HOUSE</h2>
    </div>
    <router-link to="/registration">
      <base-button class="baseBtn">Start</base-button>
    </router-link>
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
h1,
h2 {
  color: white;
}
.logo {
  margin-top: 10%;
}
.baseBtn {
  margin-bottom: 60%;
}
.logo .letters {
  font-weight: 600;
  font-size: 80px;
  display: flex;
  justify-content: center !important;
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

.container {
  padding-top: 10rem;
}
.baseBtn {
  width: 145px;
  height: 66px;
}
</style>
