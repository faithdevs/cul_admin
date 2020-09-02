import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import instance from "./http";
import Panel from "./components/Panel.vue";

import { sync } from "vuex-router-sync";

Vue.config.productionTip = false;

sync(store, router);

Vue.prototype.$instance = instance;

Vue.component("Panel", Panel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
