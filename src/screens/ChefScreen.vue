<template>
  <screen-template>
    <div class="backward__btn__wrapper">
      <router-link to="/">
        <img class="backward__btn" src="../img/backwards.svg" alt="" />
      </router-link>
    </div>
    <div class="chef__wrapper">
      <img
        v-if="this.$store.state.ChefPic === 3"
        src="../img/chef_3.png"
        alt=""
      />
      <img
        v-else-if="this.$store.state.ChefPic === 2"
        src="../img/chef_2.png"
        alt=""
      />
      <img v-else src="../img/chef_1.png" alt="" />
      <div>
        <!-- <h1>Chef Babi</h1> -->
        <h1>{{ ChefName }}</h1>
        <h1>{{ ChefFood }}</h1>
      </div>
    </div>
    <div class="buttons">
      <base-button
        @click="MenuOpen = !MenuOpen"
        :class="{ menu__open: MenuOpen }"
        >Menu</base-button
      >
      <router-link to="/reserve">
        <base-button>Reserve</base-button>
      </router-link>
    </div>

    <img v-if="!MenuOpen" class="feed" src="../img/WhatsApp.png" alt="" />
    <div class="menu" v-if="MenuOpen">
      <div>
        <h1>First Course</h1>
        <h3>Sour Soup</h3>
        <h3>Crispy Duck Rolls</h3>
        <h3>Prawn Tempura and Creamy Sauce</h3>
      </div>
      <div>
        <h1>Second Course</h1>
        <h3>Spicy Sichuan Dumplings</h3>
        <h3>Steamed Prawn Cannelloni</h3>
        <h3>Seasoned Cantonese Scallops</h3>
      </div>
      <div>
        <h1>Third Course</h1>
        <h3>Asia Gallery Crispy Duck</h3>
        <h3>Steamed Sea Bass With Ginger</h3>
        <h3>Beef tenderloin with oyster sauce</h3>
      </div>
    </div>
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
  data() {
    return {
      MenuOpen: false,
      ChefName: this.$store.state.ChefName,
      ChefFood: this.$store.state.ChefFood,
      ChefPic: this.$store.state.ChefPic,
    };
  },
};
</script>

<style scoped>
@keyframes menu_anim {
  from {
    height: 500px;
  }
  to {
    height: 430px;
  }
}
@keyframes feed_anim {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.menu__open {
  background-color: black;
  border: 1px solid white;
  transition: all 1s;
  color: white;
}
.feed {
  width: 100%;
  /* margin-bottom: -16px; */
  animation-name: feed_anim;
  animation-duration: 0.5s;
}
.menu {
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  animation-name: menu_anim;
  animation-duration: 1s;
}
.menu div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
}
.menu h1 {
  font-size: 20px;
  font-weight: 600;
}
.menu h3 {
  font-size: 16px;
  font-weight: 400;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.buttons button {
  padding: 12px 20px;
}
.chef__wrapper {
  display: flex;
  align-items: center;
}
.chef__wrapper img {
  height: 100px;
}
.chef__wrapper h1 {
  margin-left: 1rem;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.5rem;
}
.chef__wrapper h1:nth-child(2) {
  font-weight: 600;
}

h1,
h3 {
  color: white;
}
.backward__btn__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  margin-top: 5%;
}
</style>
