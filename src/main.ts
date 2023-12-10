import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

app.use(router);
app.use(ElementPlus);

app.mount("#app");
