import { createApp } from "vue";
import drie from "../src/index";
import App from "./App.vue";

const app = createApp(App);
app.use(drie);
app.mount("#app");

(function () {
  const script = document.createElement("script");
  script.onload = function () {
    const stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = "//mrdoob.github.io/stats.js/build/stats.min.js";
  document.head.appendChild(script);
})();
