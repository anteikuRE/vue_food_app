<template>
  <screen-template class="screen__temp">
    <h1>Your order</h1>
    <div class="order">
      <h1>{{ ChoosenFood }} Food By {{ ChoosenChef }}, {{ Amount }} dishes</h1>
    </div>
    <h1>Will be delivered on {{ OrderDate }} by {{ Time }}</h1>
    <router-link to="/">
      <base-button class="button">Great!</base-button>
    </router-link>
  </screen-template>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import ScreenTemplate from "../components/ScreenTemplate.vue";
export default {
  data() {
    return {
      accountId: this.$store.state.order.accountId,
      ChoosenFood: this.$store.state.order.ChoosenFood,
      ChoosenChef: this.$store.state.order.ChoosenChef,
      Amount: this.$store.state.order.Amount,
      OrderDate: this.$store.state.order.Date,
      Time: this.$store.state.order.Time,
    };
  },
  components: {
    BaseButton,
    ScreenTemplate,
  },
};
</script>

<style scoped>
.screen__temp :nth-child(1) {
  justify-content: center !important;
}
h1 {
  color: white;
  line-height: 4rem;
  text-align: center;
  margin: 0 1rem;
}
h1:nth-child(3) {
  margin-bottom: 20px;
}
.button {
  padding: 12px 20px;
}
</style>
