import { createApp } from "vue";
import { install } from "../src/index";
import App from "./App.vue";

const app = createApp(App);

install(app);

app.mount("#app");
