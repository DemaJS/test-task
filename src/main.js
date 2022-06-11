import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import { store } from "./store";
import Preloader from "./components/Preloader-component.vue";
import Notifications from "@kyvg/vue3-notification";

const registerComponents = (app) => {
  app.component("preloader-component", Preloader);
};

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Notifications);
registerComponents(app);
app.mount("#app");
