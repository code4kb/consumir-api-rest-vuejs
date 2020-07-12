import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

import 'jquery'
import 'popper.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
