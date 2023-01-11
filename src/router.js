import { createRouter, createWebHistory } from "vue-router";

import EnterScreen from "./screens/EnterScreen.vue";
import RegistrationScreen from "./screens/RegistrationScreen.vue";
import ChooseFoodScreen from "./screens/ChooseFoodScreen.vue";
import ChooseChefScreen from "./screens/ChooseChefScreen.vue";
import ChefScreen from "./screens/ChefScreen.vue";
import ReserveScreen from "./screens/ReserveScreen.vue";
import TotalScreen from "./screens/TotalScreen.vue";
import RestoreScreen from "./screens/RestoreScreen.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/enter-screen" },
    { path: "/enter-screen", component: EnterScreen },
    { path: "/registration", component: RegistrationScreen },
    { path: "/choose-food", component: ChooseFoodScreen },
    { path: "/choose-chef", component: ChooseChefScreen },
    { path: "/chef", component: ChefScreen },
    { path: "/reserve", component: ReserveScreen },
    { path: "/total", component: TotalScreen },
    { path: "/restore-account", component: RestoreScreen },
  ],
});
export default router;
