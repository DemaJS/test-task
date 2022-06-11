import { createRouter, createWebHistory } from "vue-router";
import PokemonDetails from "./Pages/Pokemon-details.vue";
import MainPage from "./Pages/Main-page.vue";
import EmptyPage from "./Pages/Empty-page";

const routes = [
  { path: "", component: MainPage },
  { path: "/details/:id", component: PokemonDetails },
  { path: "/:pathMatch(.*)*", component: EmptyPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
