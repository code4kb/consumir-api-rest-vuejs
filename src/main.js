import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue';
import UserPage from './pages/UserPage.vue';

import 'jquery'
import 'popper.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

// Register page route here
const routes = [
  { path: '', component: HomePage },
  { path: '/user/:id?', name: 'user', component: UserPage, props: true },
];

const router = new VueRouter({
  mode: 'history', 
  routes 
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
