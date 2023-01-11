<template>
  <screen-template class="screen__temp">
    <div class="backward__btn__wrapper">
      <router-link to="/">
        <img class="backward__btn" src="../img/backwards.svg" alt="" />
      </router-link>
    </div>
    <h1>Choose Food</h1>
    <div class="slider">
      <div
        :class="{
          main__img__wrapper: imgNum === 1,
          img_3: imgNum === 3,
          img_1: imgNum === 1,
        }"
      >
        <router-link to="/choose-chef">
          <img
            @click="this.$store.state.order.ChoosenFood = 'Asian'"
            :class="{ main__img: imgNum === 1 }"
            class="img"
            alt=""
            src="../img/Background1.png"
          />
        </router-link>
      </div>

      <!-- <div class="main__img__wrapper">
        <router-link to="/choose-chef">
          <img class="img main__img" alt="" src="../img/Background2.png" />
        </router-link>

      </div> -->

      <div
        :class="{
          main__img__wrapper: imgNum === 2,
          img_3: imgNum === 3,
          img_1: imgNum === 1,
        }"
      >
        <router-link to="/choose-chef">
          <img
            @click="this.$store.state.order.ChoosenFood = 'Italian'"
            :class="{ main__img: imgNum === 2 }"
            class="img"
            alt=""
            src="../img/Background2.png"
          />
        </router-link>
      </div>
      <div
        :class="{
          main__img__wrapper: imgNum === 3,
          img_3: imgNum === 3,
          img_1: imgNum === 1,
        }"
      >
        <router-link to="/choose-chef">
          <img
            @click="this.$store.state.order.ChoosenFood = 'Mexican'"
            :class="{ main__img: imgNum === 3 }"
            class="img"
            alt=""
            src="../img/Background3.png"
          />
        </router-link>
      </div>

      <!-- <div>
        <img class="img" src="../img/Background3.png" alt="" />
      </div> -->
    </div>
    <div class="controls">
      <div @click="SliderCount('-')">
        <img src="../img/testLeft.svg" alt="" />
      </div>
      <div @click="SliderCount('+')">
        <img src="../img/testRight.svg" alt="" />
      </div>
    </div>
    <h1 class="food__name">{{ foodName }}</h1>
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
      foodName: "Italian",
      imgNum: 2,
    };
  },
  methods: {
    SliderCount(arr) {
      // SLide Count
      arr === "-" ? this.imgNum-- : this.imgNum++;
      if (this.imgNum < 1 || this.imgNum > 3) {
        this.imgNum = this.imgNum = 2;
      }
      // arr === "-" ? this.imgNum-- : this.imgNum++;
      // if (this.imgNum < 1 || this.imgNum > 3) {
      //   this.imgNum = this.imgNum = 2;
      // }
      /////////////////////////
      //   FoodName
      if (this.imgNum === 1) {
        this.foodName = "Asian";
      } else if (this.imgNum === 2) {
        this.foodName = "Italian";
      } else {
        this.foodName = "Mexican";
      }
    },
  },
};
</script>

<style scoped>
.img_3 {
  transform: translateX(-100%);
}
.img_1 {
  transform: translateX(100%);
}
.backward__btn__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end !important;
  margin-right: 2rem;
  margin-top: -5.6rem;
}

.screen__temp :nth-child(1) {
  justify-content: space-evenly;
}
.controls img {
  padding: 12px;
  background-color: whitesmoke;
  border-radius: 20px;
  z-index: 1;
  position: relative;
}
.controls div {
  cursor: pointer;
  box-shadow: 0px 0px 14px 5px rgb(0 0 0);
  border-radius: 45px;
}
.controls {
  width: 100%;
  justify-content: space-around;
  display: flex;
  margin-top: -140px;
}
.slider {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

h1 {
  color: white;
  font-weight: 700;
}
h1:nth-child(1) {
  font-size: 26px;
}
.food__name {
  font-size: 24px;
}
.main__img:hover {
  opacity: 1 !important;
  border: 9px solid #ffffff;
  padding: 6px;
}
.main__img {
  transition: all 0.4s;
  opacity: 0.8 !important;
}
.main__img__wrapper {
  cursor: pointer;
}
.slider img {
  height: 200px;
  opacity: 0.4;
  border: 5px solid #ffffff;
  border-radius: 250px;
  padding: 10px;
}
</style>
