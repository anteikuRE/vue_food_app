<template>
  <screen-template>
    <div class="backward__btn__wrapper">
      <router-link to="/">
        <img class="backward__btn" src="../img/backwards.svg" alt="" />
      </router-link>
    </div>
    <h1>Choose amount of dishes</h1>

    <div>
      <base-button
        class="btn"
        :class="{ menu__open: selectedButton === '2' }"
        @click="select('2')"
        >2</base-button
      >
      <base-button
        class="btn"
        :class="{ menu__open: selectedButton === '3' }"
        @click="select('3')"
        >3</base-button
      >
      <base-button
        class="btn"
        :class="{ menu__open: selectedButton === '4' }"
        @click="select('4')"
        >4</base-button
      >
      <base-button
        class="btn"
        :class="{ menu__open: selectedButton === '5' }"
        @click="select('5')"
        >5</base-button
      >
      <base-button
        class="btn"
        :class="{ menu__open: selectedButton === '6' }"
        @click="select('6')"
        >6</base-button
      >
    </div>
    <h1>Choose a date</h1>
    <v-calendar is-dark class="calendar" @dayclick="onDayClick"></v-calendar>
    <h1>Choose time</h1>
    <div class="time__btn">
      <base-button
        :class="{ menu__open: reserveButton === '1' }"
        @click="reserve('1')"
        class="btn"
        >14:30</base-button
      >
      <base-button
        :class="{ menu__open: reserveButton === '2' }"
        @click="reserve('2')"
        class="btn"
        >21:00</base-button
      >
    </div>
    <router-link to="/total">
      <base-button class="reserve">Reserve</base-button>
    </router-link>
  </screen-template>
</template>

<script>
import "v-calendar/dist/style.css";

import BaseButton from "../components/BaseButton.vue";
import ScreenTemplate from "../components/ScreenTemplate.vue";
export default {
  components: {
    BaseButton,
    ScreenTemplate,
  },
  data() {
    return {
      days: [],
      selectedButton: null,
      reserveButton: null,
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    select(num) {
      this.$store.state.order.Amount = num;
      this.selectedButton = num;
    },
    reserve(num) {
      this.reserveButton = num;
      if (num === "1") {
        this.$store.state.order.Time = "14:30";
      } else {
        this.$store.state.order.Time = "21:00";
      }
    },
    onDayClick(day) {
      this.$store.state.order.Date = day.ariaLabel;
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days = [];
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
  },
};
</script>

<style scoped>
.reserve {
  padding: 12px 20px;
  margin-bottom: 25%;
}
.time__btn button {
  padding: 12px 20px;
  margin: 0 10px;
}
.btn {
  background-color: black !important;
  border: 1px solid white;
  color: white;
  margin: 0 5px;
  padding: 6px 10px;
}
.menu__open {
  background-color: rgb(255, 255, 255) !important;
  border: 1px solid white;
  transition: all 1s;
  color: black;
}
h1 {
  color: white;
  font-weight: 600;
  font-size: 17px;
}
.backward__btn__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  margin-top: 5%;
}
</style>
