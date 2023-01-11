<template>
  <screen-template class="screen__temp">
    <div class="backward__btn__wrapper">
      <router-link to="/">
        <img class="backward__btn" src="../img/backwards.svg" alt="" />
      </router-link>
    </div>
    <h1 class="header__text">Choose Your Chef</h1>
    <ul>
      <router-link to="/chef">
        <li
          @click="
            (this.$store.state.order.ChoosenChef = 'Chef Babi'),
              (this.$store.state.ChefName = 'Chef Babi'),
              (this.$store.state.ChefFood = 'Asian fusion food'),
              (this.$store.state.ChefPic = 1)
          "
        >
          <img src="../img/chef_1.png" alt="" />
          <h1>Chef Babi</h1>
        </li>
      </router-link>
      <router-link to="/chef">
        <li
          @click="
            (this.$store.state.order.ChoosenChef = 'Chef Balo'),
              (this.$store.state.ChefName = 'Chef Balo'),
              (this.$store.state.ChefFood = 'Italian food'),
              (this.$store.state.ChefPic = 2)
          "
        >
          <img src="../img/chef_2.png" alt="" />
          <h1>Chef Balo</h1>
        </li>
      </router-link>
      <router-link to="/chef">
        <li
          @click="
            (this.$store.state.order.ChoosenChef = 'Julio SoyKitchen'),
              (this.$store.state.ChefName = 'Julio SoyKitchen'),
              (this.$store.state.ChefFood = 'Mexican food'),
              (this.$store.state.ChefPic = 3)
          "
        >
          <img src="../img/chef_3.png" alt="" />
          <h1>Julio SoyKitchen</h1>
        </li>
      </router-link>
    </ul>
    <img class="background__img" src="../img/Background4.png" alt="" />
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
.backward__btn__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end !important;
  margin-right: 2rem;
}

/* .backward__btn {
  top: 4%;
  right: 33%;
  position: absolute;
  cursor: pointer;
} */

.screen__temp :nth-child(1) {
  justify-content: space-evenly;
  transition: all 0.1s;
}
h1 {
  color: white;
}
.header__text {
  font-weight: 700;
  font-size: 23px;
}

.background__img {
  width: 100%;
  /* margin-bottom: -21px; */
}
ul {
  display: flex;
  flex-direction: column;
}
li {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: unset !important;
  width: 251px;
}
a {
  text-decoration: none;
}
li:hover {
  font-size: 17px;

  text-shadow: 0px 0px 25px #cecece;
}
li img {
  margin-right: 20px;
}
</style>
