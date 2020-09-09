import "lib-flexible";
import "normalize.css";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 引入组件库
import "@/vant"

// import FastClick from 'fastclick'
// if ("addEventListener" in document) {
//   document.addEventListener(
//     "load",
//     function() {
//       FastClick.attach(document.body)
//     },
//     false
//   )
// }

import moment from "moment"
moment.locale("zh-cn")
Vue.prototype.$mount = moment

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
