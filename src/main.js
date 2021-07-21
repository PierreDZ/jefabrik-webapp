import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store'
import store from './store'
// import {private_key_id, client_id, client_x509_cert_url} from '../jefabrik-analytics-a58554767aca.json'

Vue.config.productionTip = false

new Vue({
  router,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')