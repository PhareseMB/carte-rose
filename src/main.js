import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import "./firebase.js";
import "./style.css";
import "./index.css";

createApp(App).use(router).mount("#app");
