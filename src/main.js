import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './assets/js/router';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
