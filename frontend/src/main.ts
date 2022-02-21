import Vue from "vue";
import App from './App.vue';
import router from "./presentation/router";
import store from "./store";
import "./styles/global.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
