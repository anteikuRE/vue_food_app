<template>
  <section>
    <!-- <enter-screen></enter-screen> -->
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>
<script>
import EnterScreen from "./screens/EnterScreen.vue";
export default {
  components: {
    EnterScreen,
  },
};
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease-in-out;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

* {
  background-color: rgb(45, 45, 45);
}
section {
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}
@media only screen and (max-width: 600px) {
  section {
    display: block;
  }
  * {
    background-color: rgb(0, 0, 0);
  }
}
</style>
