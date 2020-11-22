import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Layout,Icon,Drawer}  from "ant-design-vue";
import "ant-design-vue/lib/layout/style/css";
import "ant-design-vue/lib/drawer/style/css"

Vue.config.productionTip = false;

Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
