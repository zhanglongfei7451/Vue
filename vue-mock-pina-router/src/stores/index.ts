import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import type { App } from "vue";
import { useUserStoreWithOut } from "@/stores/modules/user";

const store = createPinia();

export function setupPinia(app: App<Element>) {
    store.use(piniaPluginPersistedstate);
    app.use(store);
}

export function storeReset() {
    const userStore = useUserStoreWithOut();
    userStore.$reset();
}

export { store };
