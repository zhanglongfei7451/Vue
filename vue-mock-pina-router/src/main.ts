import { createApp } from "vue";
import App from "./App.vue";

import { setupPinia } from "./stores";



const app = createApp(App);

const setupPlugins = () => {
    // 注册pinia
    setupPinia(app);
};


setupPlugins();
// 注册路由守卫

app.mount("#app");
