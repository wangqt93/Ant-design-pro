import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Layout,Icon}  from "ant-design-vue";
import "ant-design-vue/lib/layout/style/css";

Vue.config.productionTip = false;

Vue.use(Layout)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
